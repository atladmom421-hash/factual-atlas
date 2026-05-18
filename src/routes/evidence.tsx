import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { exhibits, events, CATEGORY_LABELS } from "@/data";
import { StatusBadge } from "@/components/case/Badges";
import { useExhibit } from "@/components/case/ExhibitProvider";
import { FileText, Image as ImageIcon, FileType, Mic, Search, CalendarRange, ExternalLink, Layers } from "lucide-react";
import { useHashFocus } from "@/components/case/useHashFocus";
import { clsx } from "clsx";

export const Route = createFileRoute("/evidence")({
  head: () => ({
    meta: [
      { title: "Evidence Library — Harbin Case File" },
      { name: "description", content: "All attached exhibits with reliability status, linked timeline events, and people." },
      { property: "og:title", content: "Evidence Library — Harbin Case File" },
    ],
  }),
  component: EvidencePage,
});

// Ordered: priority categories the user named first, then the rest.
const INDEX_ORDER: string[] = [
  "schedule-waitlist",
  "performance",
  "department-movement",
  "deleted-evidence",
  "protected-activity",
  "hr-complaint",
  "retaliation",
  "comparator",
  "internal-investigation",
  "leave",
];

const CATEGORY_BLURB: Record<string, string> = {
  "schedule-waitlist": "Waitlist placement, mid-shift requests, temp-vs-permanent inconsistencies.",
  "performance": "Performance history, rating drops, and ranking evidence.",
  "department-movement": "Cross-area moves granted to comparators while Lashawnna stayed fixed.",
  "deleted-evidence": "Missing, deleted, altered, or inconsistent records — Teams messages, waitlist tickets, and version history.",
  "protected-activity": "EEOC charges, formal complaints, and other protected acts.",
  "hr-complaint": "HR / Ethics complaints and intake transcripts.",
  "retaliation": "Adverse actions following protected activity.",
  "comparator": "Side-by-side comparator movement and treatment.",
  "internal-investigation": "Investigator interviews and internal findings.",
  "leave": "Medical leave, return-to-work, and job-abandonment misuse.",
};

function EvidencePage() {
  useHashFocus();
  const { open } = useExhibit();
  const [q, setQ] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");

  // Build category -> event count & exhibit IDs map
  const indexStats = useMemo(() => {
    const map: Record<string, { eventCount: number; exhibitIds: Set<string> }> = {};
    for (const cat of INDEX_ORDER) map[cat] = { eventCount: 0, exhibitIds: new Set() };
    for (const ev of events) {
      if (!map[ev.category]) map[ev.category] = { eventCount: 0, exhibitIds: new Set() };
      map[ev.category].eventCount++;
      for (const id of ev.evidenceIds ?? []) map[ev.category].exhibitIds.add(id);
    }
    return map;
  }, []);

  // Map exhibit -> categories of its linked events (for category filter on exhibit grid)
  const exhibitCategories = useMemo(() => {
    const out: Record<string, Set<string>> = {};
    for (const ex of exhibits) {
      out[ex.id] = new Set();
      for (const eid of ex.linkedEventIds ?? []) {
        const ev = events.find(e => e.id === eid);
        if (ev) out[ex.id].add(ev.category);
      }
    }
    return out;
  }, []);

  const filtered = exhibits.filter(e => {
    const s = (e.fileName + " " + e.summary + " " + e.category + " " + e.date).toLowerCase();
    const matchesQ = s.includes(q.toLowerCase());
    const matchesCat = activeCat === "all" || exhibitCategories[e.id]?.has(activeCat);
    return matchesQ && matchesCat;
  });

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Evidence Library</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">Exhibits and source materials.</h1>
        <p className="mt-3 text-foreground/75">Every attached document, transcript, screenshot, and reference — with reliability status and links to the events it supports.</p>
      </div>

      {/* Evidence Index Panel */}
      <section className="mt-10 rounded-md border border-border bg-card">
        <header className="flex flex-wrap items-end justify-between gap-3 border-b border-border px-5 py-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent">
              <Layers className="size-3.5" />
              Evidence Index
            </div>
            <h2 className="mt-1 font-display text-2xl tracking-tight">Jump straight to what matters.</h2>
            <p className="mt-1 text-xs text-foreground/70">Filter exhibits below by category, or jump the Master Timeline to that category's events.</p>
          </div>
          {activeCat !== "all" && (
            <button
              onClick={() => setActiveCat("all")}
              className="no-print rounded-sm border border-border bg-background px-2.5 py-1 text-[11px] hover:bg-secondary/60"
            >
              Clear filter · showing {CATEGORY_LABELS[activeCat] ?? activeCat}
            </button>
          )}
        </header>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {INDEX_ORDER.map(cat => {
            const stats = indexStats[cat] ?? { eventCount: 0, exhibitIds: new Set<string>() };
            const isActive = activeCat === cat;
            const isPriority = INDEX_ORDER.indexOf(cat) < 4;
            return (
              <article
                key={cat}
                className={clsx(
                  "flex flex-col gap-2 bg-card p-4 transition",
                  isActive && "ring-2 ring-accent ring-inset",
                  isPriority && !isActive && "bg-accent/5",
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base leading-tight">{CATEGORY_LABELS[cat] ?? cat}</h3>
                  {isPriority && (
                    <span className="rounded-sm bg-accent/15 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-accent">Priority</span>
                  )}
                </div>
                <p className="text-[11px] text-foreground/70">{CATEGORY_BLURB[cat] ?? ""}</p>
                <div className="mt-1 flex items-baseline gap-3 text-[11px] text-muted-foreground">
                  <span><span className="font-display text-base text-foreground">{stats.eventCount}</span> events</span>
                  <span><span className="font-display text-base text-foreground">{stats.exhibitIds.size}</span> exhibits</span>
                </div>
                <div className="mt-auto flex flex-col gap-1.5 pt-2">
                  <button
                    onClick={() => setActiveCat(isActive ? "all" : cat)}
                    className="no-print inline-flex items-center gap-1.5 self-start rounded-sm border border-border bg-background px-2 py-1 text-[11px] hover:bg-secondary/60"
                  >
                    <Search className="size-3" />
                    {isActive ? "Showing exhibits ▾" : "Filter exhibits below"}
                  </button>
                  <Link
                    to="/timeline"
                    hash={`cat-${cat}`}
                    className="no-print inline-flex items-center gap-1.5 self-start rounded-sm border border-accent/50 bg-accent/10 px-2 py-1 text-[11px] text-accent hover:bg-accent/20"
                  >
                    <CalendarRange className="size-3" />
                    Jump to timeline
                    <ExternalLink className="size-2.5 opacity-70" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="no-print relative mt-8 max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search exhibits..." className="w-full rounded-sm border border-border bg-card py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
      </div>

      <div className="mt-6 text-xs text-muted-foreground">
        {filtered.length} of {exhibits.length} exhibits{activeCat !== "all" ? ` · category: ${CATEGORY_LABELS[activeCat] ?? activeCat}` : ""}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(ex => (
          <button key={ex.id} id={`exhibit-${ex.id}`} onClick={() => open(ex.id)} className="group text-left rounded-md border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-md scroll-mt-24">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider">
                <span className="rounded-sm bg-navy px-1.5 py-0.5 text-navy-foreground">{ex.exhibitNumber}</span>
                <KindIcon kind={ex.fileKind} />
              </div>
              <StatusBadge status={ex.reliability} />
            </div>
            <div className="mt-3 font-display text-lg leading-tight tracking-tight">{ex.fileName}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">{ex.date} · {ex.category}</div>
            <p className="mt-3 line-clamp-3 text-sm text-foreground/75">{ex.summary}</p>
            <div className="mt-3 text-[11px] text-muted-foreground">{ex.linkedEventIds.length} linked events</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function KindIcon({ kind }: { kind: string }) {
  if (kind === "pdf") return <span className="inline-flex items-center gap-1 text-muted-foreground"><FileText className="size-3" /> PDF</span>;
  if (kind === "image") return <span className="inline-flex items-center gap-1 text-muted-foreground"><ImageIcon className="size-3" /> Image</span>;
  if (kind === "docx") return <span className="inline-flex items-center gap-1 text-muted-foreground"><FileType className="size-3" /> DOCX</span>;
  if (kind === "transcript") return <span className="inline-flex items-center gap-1 text-muted-foreground"><Mic className="size-3" /> Transcript</span>;
  return null;
}
