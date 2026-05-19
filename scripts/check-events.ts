/**
 * Pre-publish integrity check.
 *
 * Guarantees that every documented event renders on both the Case Map
 * (`/case-map`) and the Master Timeline (`/timeline`) with valid, bidirectional
 * exhibit links. Both routes read from the same shared `events`/`exhibits`
 * arrays, so the real risks are (a) dangling exhibit ids, (b) one-way links
 * where an event cites an exhibit but the exhibit doesn't list the event back
 * (or vice versa), and (c) malformed sortKey/category fields that would cause
 * an event to silently drop out of the timeline's filter chips.
 *
 * Usage:
 *   bun run check:events           # strict check; exits non-zero on any error
 *   bun run check:events --fix     # auto-repair symmetric link drift in
 *                                  # src/data/events.ts + src/data/exhibits.ts,
 *                                  # then re-run the check. Dangling refs to
 *                                  # ids that don't exist are NOT auto-fixed.
 *
 * Wired into `prebuild` so publishing is blocked when integrity fails.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { events, eventsSorted, exhibits, CATEGORY_LABELS } from "../src/data";

const FIX = process.argv.includes("--fix");

type Issue = { level: "error" | "warn"; where: string; msg: string };
const issues: Issue[] = [];
const err = (where: string, msg: string) => issues.push({ level: "error", where, msg });
const warn = (where: string, msg: string) => issues.push({ level: "warn", where, msg });

const eventIds = new Set(events.map(e => e.id));
const exhibitIds = new Set(exhibits.map(x => x.id));
const validCategories = new Set(Object.keys(CATEGORY_LABELS));

// Auto-fix queues: { exhibitId -> eventIds to add to its linkedEventIds, etc. }
const addToExhibitLinked = new Map<string, Set<string>>();
const addToEventEvidence = new Map<string, Set<string>>();
const queue = (m: Map<string, Set<string>>, k: string, v: string) => {
  if (!m.has(k)) m.set(k, new Set());
  m.get(k)!.add(v);
};

// 1. Event-side integrity
const seenEventIds = new Set<string>();
for (const e of events) {
  if (seenEventIds.has(e.id)) err(e.id, "duplicate event id");
  seenEventIds.add(e.id);

  if (!/^\d{4}-\d{2}-\d{2}/.test(e.sortKey)) err(e.id, `sortKey must start YYYY-MM-DD (got "${e.sortKey}") — event will mis-bucket on Timeline year filter`);
  if (!validCategories.has(e.category)) err(e.id, `unknown category "${e.category}" — will not appear under any Case Map / Timeline category filter`);
  if (!e.title?.trim()) err(e.id, "missing title");

  for (const exId of e.evidenceIds) {
    if (!exhibitIds.has(exId)) {
      err(e.id, `references missing exhibit "${exId}" — Timeline card button will be blank, Case Map drill-down broken`);
      continue;
    }
    const ex = exhibits.find(x => x.id === exId)!;
    if (!ex.linkedEventIds.includes(e.id)) {
      err(e.id, `cites exhibit ${ex.exhibitNumber} (${exId}) but that exhibit does not list this event in linkedEventIds — Case Map exhibit cluster won't surface this event`);
      queue(addToExhibitLinked, exId, e.id);
    }
  }
}

// 2. Exhibit-side integrity (reverse direction)
const seenExhibitIds = new Set<string>();
for (const ex of exhibits) {
  if (seenExhibitIds.has(ex.id)) err(ex.id, "duplicate exhibit id");
  seenExhibitIds.add(ex.id);

  for (const evId of ex.linkedEventIds) {
    if (!eventIds.has(evId)) {
      err(ex.id, `linkedEventIds references missing event "${evId}"`);
      continue;
    }
    const ev = events.find(e => e.id === evId)!;
    if (!ev.evidenceIds.includes(ex.id)) {
      warn(ex.id, `exhibit links event "${evId}" but event does not list this exhibit in evidenceIds — Timeline card won't show ${ex.exhibitNumber}`);
      queue(addToEventEvidence, evId, ex.id);
    }
  }
}

// 3. Timeline/Case Map parity — both routes consume `events` and `eventsSorted`.
if (eventsSorted.length !== events.length) {
  err("eventsSorted", `eventsSorted (${eventsSorted.length}) != events (${events.length}) — Master Timeline will be missing events shown on Case Map`);
}
for (const e of events) {
  if (!eventsSorted.find(s => s.id === e.id)) {
    err(e.id, "event present in case-map source but missing from eventsSorted used by /timeline");
  }
}

// ---------- --fix mode: rewrite arrays in the source files in place ----------
function applyFix() {
  let touched = 0;

  const patchArrayInObject = (
    src: string,
    objectIdField: string,           // "id"
    objectId: string,                 // "EX-022" or "e-2024-..."
    arrayField: string,               // "linkedEventIds" | "evidenceIds"
    idsToAdd: Set<string>,
  ): { src: string; changed: boolean } => {
    // Find the object literal "{ id: \"<objectId>\" ... }" then locate the array field inside it.
    // Source is hand-authored TS; objects are formatted one per record, so a tolerant regex per object works.
    const idRe = new RegExp(`${objectIdField}:\\s*["\\\`']${objectId.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}["\\\`']`);
    const idMatch = idRe.exec(src);
    if (!idMatch) return { src, changed: false };

    // Walk forward from idMatch to find the array field at the same brace depth.
    const arrRe = new RegExp(`${arrayField}:\\s*\\[`, "g");
    arrRe.lastIndex = idMatch.index;
    const arrMatch = arrRe.exec(src);
    if (!arrMatch) return { src, changed: false };

    // Find matching closing ]
    let depth = 1;
    let i = arrMatch.index + arrMatch[0].length;
    for (; i < src.length && depth > 0; i++) {
      if (src[i] === "[") depth++;
      else if (src[i] === "]") depth--;
    }
    const arrStart = arrMatch.index + arrMatch[0].length;
    const arrEnd = i - 1;
    const inner = src.slice(arrStart, arrEnd);

    const existing = new Set<string>(
      Array.from(inner.matchAll(/["\`']([^"\`']+)["\`']/g)).map(m => m[1]),
    );
    const toAdd = [...idsToAdd].filter(id => !existing.has(id));
    if (toAdd.length === 0) return { src, changed: false };

    const trimmed = inner.replace(/\s+$/, "");
    const sep = trimmed.length === 0 || trimmed.endsWith("[") ? "" : ", ";
    const insertion = sep + toAdd.map(id => `"${id}"`).join(", ");
    const newSrc = src.slice(0, arrEnd) + insertion + src.slice(arrEnd);
    return { src: newSrc, changed: true };
  };

  // Patch exhibits.ts
  const exhibitsPath = join(process.cwd(), "src/data/exhibits.ts");
  let exhibitsSrc = readFileSync(exhibitsPath, "utf8");
  for (const [exId, eventSet] of addToExhibitLinked) {
    const res = patchArrayInObject(exhibitsSrc, "id", exId, "linkedEventIds", eventSet);
    if (res.changed) { exhibitsSrc = res.src; touched++; }
  }
  writeFileSync(exhibitsPath, exhibitsSrc);

  // Patch events.ts
  const eventsPath = join(process.cwd(), "src/data/events.ts");
  let eventsSrc = readFileSync(eventsPath, "utf8");
  for (const [evId, exSet] of addToEventEvidence) {
    const res = patchArrayInObject(eventsSrc, "id", evId, "evidenceIds", exSet);
    if (res.changed) { eventsSrc = res.src; touched++; }
  }
  writeFileSync(eventsPath, eventsSrc);

  console.log(`\nAuto-fix patched ${touched} record(s). Re-run \`bun run check:events\` to verify.`);
}

// ---- Report ----
const errors = issues.filter(i => i.level === "error");
const warnings = issues.filter(i => i.level === "warn");

console.log(`Checked ${events.length} events / ${exhibits.length} exhibits.`);
if (warnings.length) {
  console.log(`\n⚠  ${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  ${w.where}: ${w.msg}`);
}
if (errors.length) {
  console.log(`\n✖  ${errors.length} error(s):`);
  for (const e of errors) console.log(`  ${e.where}: ${e.msg}`);
}

if (FIX && (addToExhibitLinked.size || addToEventEvidence.size)) {
  applyFix();
  process.exit(0);
}

if (errors.length) {
  console.log("\nPublish blocked. Fix the issues above (run with --fix to auto-repair symmetric link drift) so every event appears on both Case Map and Master Timeline with correct exhibit links.");
  process.exit(1);
}
console.log("\n✓ All events appear on both Case Map and Master Timeline with valid exhibit links.");
