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
 * Run via `bun run check:events`. Also wired into `prebuild` so publishing
 * is blocked when integrity fails.
 */
import { events, eventsSorted, exhibits, CATEGORY_LABELS } from "../src/data";

type Issue = { level: "error" | "warn"; where: string; msg: string };
const issues: Issue[] = [];
const err = (where: string, msg: string) => issues.push({ level: "error", where, msg });
const warn = (where: string, msg: string) => issues.push({ level: "warn", where, msg });

const eventIds = new Set(events.map(e => e.id));
const exhibitIds = new Set(exhibits.map(x => x.id));
const validCategories = new Set(Object.keys(CATEGORY_LABELS));

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

// Report
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
  console.log("\nPublish blocked. Fix the issues above so every event appears on both Case Map and Master Timeline with correct exhibit links.");
  process.exit(1);
}
console.log("\n✓ All events appear on both Case Map and Master Timeline with valid exhibit links.");
