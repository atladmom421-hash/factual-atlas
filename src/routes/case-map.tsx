import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Map as MapIcon, Scale, Users, FileText, AlertTriangle, ArrowRight, Filter, Download, ExternalLink, Search, X } from "lucide-react";
import { clsx } from "clsx";
import { events, exhibits, people, CATEGORY_LABELS } from "@/data";
import type { EventCategory, TimelineEvent } from "@/data/types";
import { useExhibit } from "@/components/case/ExhibitProvider";
import { StatusBadge, CategoryBadge } from "@/components/case/Badges";

export const Route = createFileRoute("/case-map")({
  head: () => ({
    meta: [
      { title: "Case Map — Investigator & Attorney Summary | Harbin Case File" },
      { name: "description", content: "Interactive one-page map of every key event, party, theme, and exhibit. Built for investigators and attorneys to jump from any node directly to the underlying record." },
      { property: "og:title", content: "Case Map — Investigator & Attorney Summary" },
      { property: "og:description", content: "Interactive overview of all key events with one-click drill-down to timeline cards and exhibits." },
    ],
  }),
  component: CaseMapPage,
});

// ---- Theme clusters (curated buckets that map to multiple categories + dedicated threads)
const CLUSTERS: {
  id: string;
  title: string;
  blurb: string;
  categories: EventCategory[];
  matchIds?: (id: string) => boolean;
  link?: { to: string; label: string };
}[] = [
  {
    id: "protected",
    title: "Protected Activity",
    blurb: "EEOC charges, formal complaints, ethics escalations — the anchor for every retaliation theory.",
    categories: ["protected-activity", "hr-complaint"],
  },
  {
    id: "greg-anita",
    title: "Greg / Anita 2024 Retaliation",
    blurb: "Director-level blocking of rec-for-terms, peer-inconsistent documentation demands, and HR's contemporaneous confirmation.",
    categories: ["retaliation"],
    matchIds: (id) => id.includes("greg") || id.includes("anita") || id.includes("rec-term") || id.includes("2024-06-late-greg") || id.includes("2024-07-19"),
    link: { to: "/greg-anita-thread", label: "Open dedicated thread" },
  },
  {
    id: "hardship",
    title: "Hardship Delay → Eviction",
    blurb: "Nov 13 – Dec 5, 2025 hardship-assistance delay, written housing-loss notice, family in a car, funds released only at/after eviction.",
    categories: [],
    matchIds: (id) => id.includes("hardship") || id.includes("beck") || id.includes("hadley") || id.includes("eviction") || id.includes("std-filed"),
    link: { to: "/hardship-thread", label: "Open hardship thread" },
  },
  {
    id: "schedule",
    title: "Schedule / Waitlist Inconsistency",
    blurb: "PM 'temporary' vs 'permanent', deleted-then-re-added waitlist entry, mid-shift request never honored.",
    categories: ["schedule-waitlist"],
  },
  {
    id: "movement",
    title: "Department / Team Movement",
    blurb: "Comparator movement and Lashawnna's own assignment changes after protected activity.",
    categories: ["department-movement", "comparator"],
  },
  {
    id: "leave",
    title: "Leave, FMLA, STD, Insurance",
    blurb: "Intermittent FMLA, unpaid salaried hours, STD timing, and loss of insurance coverage downstream of the hardship delay.",
    categories: ["leave"],
  },
  {
    id: "investigation",
    title: "Internal Investigation Conduct",
    blurb: "Edward Reyes investigator concerns, HR handling, and Susan Marcinko's role.",
    categories: ["internal-investigation"],
  },
  {
    id: "deleted",
    title: "Deleted / Altered Evidence",
    blurb: "Team-ratios file modifications, removed credit, waitlist deletion — preservation-critical.",
    categories: ["deleted-evidence"],
  },
];

const CATEGORY_COLOR: Record<string, string> = {
  "protected-activity": "bg-emerald-500",
  "hr-complaint": "bg-sky-500",
  "schedule-waitlist": "bg-amber-500",
  "department-movement": "bg-violet-500",
  "comparator": "bg-fuchsia-500",
  "retaliation": "bg-red-500",
  "performance": "bg-orange-500",
  "leave": "bg-teal-500",
  "internal-investigation": "bg-indigo-500",
  "deleted-evidence": "bg-rose-700",
};

function eventYear(e: TimelineEvent): string {
  const m = e.sortKey?.match(/^(\d{4})/);
  return m ? m[1] : "?";
}

function CaseMapPage() {
  const { open } = useExhibit();
  const [active, setActive] = useState<EventCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const peopleById = useMemo(() => {
    const m = new Map<string, string>();
    for (const p of people) m.set(p.id, p.name);
    return m;
  }, []);

  const sorted = useMemo(() => [...events].sort((a, b) => a.sortKey.localeCompare(b.sortKey)), []);

  // Apply category + search/date filters
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter(e => {
      if (active !== "all" && e.category !== active) return false;
      if (fromDate && e.sortKey < fromDate) return false;
      if (toDate && e.sortKey > toDate) return false;
      if (!q) return true;
      const peopleNames = e.peopleIds.map(id => peopleById.get(id) ?? id).join(" ");
      const haystack = [
        e.title,
        e.description,
        e.date,
        e.whyItMatters ?? "",
        e.category,
        e.status,
        peopleNames,
        e.evidenceIds.join(" "),
      ].join(" ").toLowerCase();
      // support multi-term AND search
      return q.split(/\s+/).every(term => haystack.includes(term));
    });
  }, [sorted, active, query, fromDate, toDate, peopleById]);

  const hasSearch = query.trim() !== "" || fromDate !== "" || toDate !== "";

  // group filtered timeline by year for the strip
  const byYear = useMemo(() => {
    const map = new Map<string, TimelineEvent[]>();
    for (const e of filtered) {
      const y = eventYear(e);
      if (!map.has(y)) map.set(y, []);
      map.get(y)!.push(e);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const e of events) counts[e.category] = (counts[e.category] ?? 0) + 1;
    return counts;
  }, []);

  // matching exhibits (by ID or summary keyword) when searching
  const matchingExhibits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return exhibits.filter(ex =>
      ex.id.toLowerCase().includes(q) ||
      ex.exhibitNumber.toLowerCase().includes(q) ||
      ex.fileName.toLowerCase().includes(q) ||
      ex.summary.toLowerCase().includes(q),
    ).slice(0, 12);
  }, [query]);

  // matching people when searching
  const matchingPeople = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return people.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.role.toLowerCase().includes(q) ||
      p.relationshipToCase.toLowerCase().includes(q),
    ).slice(0, 12);
  }, [query]);

  const resetSearch = () => {
    setQuery("");
    setFromDate("");
    setToDate("");
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 space-y-12">
      {/* Hero */}
      <header className="space-y-4">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <MapIcon className="size-3.5" /> Investigator & Attorney Briefing
        </div>
        <h1 className="font-display text-4xl md:text-5xl tracking-tight">Case Map</h1>
        <p className="max-w-3xl text-foreground/70 leading-relaxed">
          A single interactive surface that maps every documented event, party, theme, and exhibit in
          the Harbin matter. Each node links one-click to the underlying timeline card and the exhibit
          viewer so investigators and counsel can verify in real time.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <Link to="/timeline" className="inline-flex items-center gap-2 rounded-sm bg-navy text-navy-foreground px-3 py-2 text-xs font-medium hover:opacity-90">
            <FileText className="size-3.5" /> Full Timeline
          </Link>
          <Link to="/investigator" className="inline-flex items-center gap-2 rounded-sm border border-border bg-secondary/60 px-3 py-2 text-xs font-medium hover:bg-secondary">
            <Scale className="size-3.5" /> Investigator Brief
          </Link>
          <Link to="/people" className="inline-flex items-center gap-2 rounded-sm border border-border bg-secondary/60 px-3 py-2 text-xs font-medium hover:bg-secondary">
            <Users className="size-3.5" /> People Directory
          </Link>
          <Link to="/evidence" className="inline-flex items-center gap-2 rounded-sm border border-border bg-secondary/60 px-3 py-2 text-xs font-medium hover:bg-secondary">
            <Download className="size-3.5" /> Evidence Index
          </Link>
        </div>
      </header>

      {/* At-a-glance stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Documented Events", value: events.length },
          { label: "Exhibits", value: exhibits.length },
          { label: "Named Parties", value: people.length },
          { label: "Theme Clusters", value: CLUSTERS.length },
        ].map(s => (
          <div key={s.label} className="rounded-sm border border-border bg-secondary/30 p-4">
            <div className="font-display text-3xl tracking-tight">{s.value}</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Global search */}
      <section className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <Search className="size-3.5" /> Search events, people, exhibits
          </div>
          {hasSearch && (
            <button
              onClick={resetSearch}
              className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground"
            >
              <X className="size-3" /> Clear
            </button>
          )}
        </div>
        <div className="rounded-sm border border-border bg-card p-3 grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-end">
          <label className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Keyword / name / exhibit ID</span>
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder='e.g. "Greg", "hardship", "EX-021", "Marcinko"'
                className="w-full rounded-sm border border-border bg-background pl-8 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground">From</span>
            <input
              type="date"
              value={fromDate}
              onChange={e => setFromDate(e.target.value)}
              className="rounded-sm border border-border bg-background px-2 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/40"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground">To</span>
            <input
              type="date"
              value={toDate}
              onChange={e => setToDate(e.target.value)}
              className="rounded-sm border border-border bg-background px-2 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/40"
            />
          </label>
        </div>

        {hasSearch && (
          <div className="rounded-sm border border-border bg-secondary/20 p-4 space-y-4">
            <div className="flex items-baseline justify-between gap-3">
              <div className="text-sm">
                <span className="font-medium">{filtered.length}</span>{" "}
                <span className="text-muted-foreground">matching event{filtered.length === 1 ? "" : "s"}</span>
                {matchingPeople.length > 0 && (
                  <>
                    {" · "}
                    <span className="font-medium">{matchingPeople.length}</span>{" "}
                    <span className="text-muted-foreground">people</span>
                  </>
                )}
                {matchingExhibits.length > 0 && (
                  <>
                    {" · "}
                    <span className="font-medium">{matchingExhibits.length}</span>{" "}
                    <span className="text-muted-foreground">exhibits</span>
                  </>
                )}
              </div>
              <span className="text-[11px] text-muted-foreground">Click any result to jump to its record.</span>
            </div>

            {filtered.length > 0 && (
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Events</div>
                <ul className="max-h-72 overflow-y-auto divide-y divide-border/60">
                  {filtered.slice(0, 30).map(e => (
                    <li key={e.id}>
                      <Link
                        to="/timeline"
                        hash={`evt-${e.id}`}
                        className="group flex items-start gap-3 py-2 px-2 -mx-2 rounded-sm hover:bg-secondary"
                      >
                        <span className={clsx("mt-2 size-2 shrink-0 rounded-full", CATEGORY_COLOR[e.category] ?? "bg-muted")} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs text-muted-foreground tabular-nums">{e.date}</span>
                            <span className="text-sm font-medium truncate">{e.title}</span>
                          </div>
                          <div className="flex items-center gap-1.5 flex-wrap mt-1">
                            <CategoryBadge category={e.category} />
                            <StatusBadge status={e.status} />
                            {e.evidenceIds.slice(0, 3).map(exId => (
                              <button
                                key={exId}
                                onClick={(ev) => { ev.preventDefault(); ev.stopPropagation(); open(exId); }}
                                className="inline-flex items-center gap-1 rounded-sm border border-border bg-background px-1.5 py-0.5 text-[10px] hover:bg-secondary"
                              >
                                <FileText className="size-2.5" /> {exId}
                              </button>
                            ))}
                          </div>
                        </div>
                        <ExternalLink className="size-3 opacity-0 group-hover:opacity-60 mt-2 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
                {filtered.length > 30 && (
                  <div className="pt-2 text-xs text-muted-foreground">+ {filtered.length - 30} more — refine your search to narrow.</div>
                )}
              </div>
            )}

            {matchingPeople.length > 0 && (
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">People</div>
                <div className="flex flex-wrap gap-1.5">
                  {matchingPeople.map(p => (
                    <Link
                      key={p.id}
                      to="/people"
                      hash={`person-${p.id}`}
                      className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-2 py-1 text-xs hover:bg-secondary"
                    >
                      <Users className="size-3" />
                      <span className="font-medium">{p.name}</span>
                      <span className="text-muted-foreground">— {p.role}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {matchingExhibits.length > 0 && (
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Exhibits</div>
                <div className="flex flex-wrap gap-1.5">
                  {matchingExhibits.map(ex => (
                    <button
                      key={ex.id}
                      onClick={() => open(ex.id)}
                      className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-2 py-1 text-xs hover:bg-secondary"
                      title={ex.summary}
                    >
                      <FileText className="size-3" />
                      <span className="font-medium">{ex.id}</span>
                      <span className="text-muted-foreground truncate max-w-[220px]">— {ex.fileName}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filtered.length === 0 && matchingPeople.length === 0 && matchingExhibits.length === 0 && (
              <div className="text-sm text-muted-foreground">No results. Try a different keyword or widen the date range.</div>
            )}
          </div>
        )}
      </section>

      {/* Category legend / filter */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <Filter className="size-3.5" /> Filter by category
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActive("all")}
            className={clsx(
              "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-border transition-colors",
              active === "all" ? "bg-navy text-navy-foreground ring-navy" : "bg-background hover:bg-secondary",
            )}
          >
            All <span className="opacity-70">({events.length})</span>
          </button>
          {Object.entries(CATEGORY_LABELS).map(([cat, label]) => (
            <button
              key={cat}
              onClick={() => setActive(cat as EventCategory)}
              className={clsx(
                "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-border transition-colors",
                active === cat ? "bg-navy text-navy-foreground ring-navy" : "bg-background hover:bg-secondary",
              )}
            >
              <span className={clsx("size-2 rounded-full", CATEGORY_COLOR[cat] ?? "bg-muted")} />
              {label} <span className="opacity-70">({categoryCounts[cat] ?? 0})</span>
            </button>
          ))}
        </div>
      </section>

      {/* Interactive timeline strip */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl tracking-tight">Interactive Timeline</h2>
          <span className="text-xs text-muted-foreground">Hover a node for the headline. Click to open the full event card.</span>
        </div>
        <div className="space-y-6">
          {byYear.map(([year, evs]) => (
            <div key={year} className="space-y-2">
              <div className="flex items-baseline gap-3">
                <div className="font-display text-3xl tracking-tight">{year}</div>
                <div className="text-xs text-muted-foreground">{evs.length} event{evs.length === 1 ? "" : "s"}</div>
              </div>
              <div className="relative rounded-sm border border-border bg-secondary/20 p-4">
                <div className="absolute left-4 right-4 top-1/2 h-px bg-border" aria-hidden />
                <div className="relative flex flex-wrap gap-2">
                  {evs.map(e => (
                    <Link
                      key={e.id}
                      to="/timeline"
                      hash={`evt-${e.id}`}
                      title={`${e.date} — ${e.title}`}
                      className="group relative flex items-center"
                    >
                      <span
                        className={clsx(
                          "size-3.5 rounded-full ring-2 ring-background transition-transform group-hover:scale-125",
                          CATEGORY_COLOR[e.category] ?? "bg-muted",
                        )}
                      />
                      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-sm border border-border bg-popover px-2 py-1 text-[11px] text-popover-foreground shadow-md group-hover:block max-w-[240px] whitespace-normal text-center">
                        <span className="font-medium">{e.date}</span>
                        <br />
                        {e.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="rounded-sm border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              No events in this category.
            </div>
          )}
        </div>
      </section>

      {/* Cluster grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl tracking-tight">Theme Clusters</h2>
          <span className="text-xs text-muted-foreground">Each cluster groups related events with direct links.</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {CLUSTERS.map(cluster => {
            const clusterEvents = events.filter(e => {
              const inCat = cluster.categories.includes(e.category);
              const idMatch = cluster.matchIds ? cluster.matchIds(e.id) : false;
              return inCat || idMatch;
            }).sort((a, b) => a.sortKey.localeCompare(b.sortKey));
            const clusterExhibits = Array.from(new Set(clusterEvents.flatMap(e => e.evidenceIds))).filter(Boolean);

            return (
              <div key={cluster.id} className="rounded-sm border border-border bg-card p-5 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg tracking-tight">{cluster.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{cluster.blurb}</p>
                  </div>
                  <span className="shrink-0 rounded-sm bg-secondary px-2 py-1 text-xs font-medium">
                    {clusterEvents.length}
                  </span>
                </div>

                {clusterEvents.length > 0 && (
                  <ul className="space-y-1 max-h-56 overflow-y-auto pr-1">
                    {clusterEvents.slice(0, 8).map(e => (
                      <li key={e.id}>
                        <Link
                          to="/timeline"
                          hash={`evt-${e.id}`}
                          className="group flex items-start gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-secondary"
                        >
                          <span className={clsx("mt-1.5 size-2 shrink-0 rounded-full", CATEGORY_COLOR[e.category] ?? "bg-muted")} />
                          <span className="flex-1">
                            <span className="text-muted-foreground tabular-nums text-xs mr-2">{e.date}</span>
                            <span>{e.title}</span>
                          </span>
                          <ExternalLink className="size-3 opacity-0 group-hover:opacity-60 mt-1" />
                        </Link>
                      </li>
                    ))}
                    {clusterEvents.length > 8 && (
                      <li className="pl-4 text-xs text-muted-foreground">+ {clusterEvents.length - 8} more</li>
                    )}
                  </ul>
                )}

                {clusterExhibits.length > 0 && (
                  <div className="border-t border-border/60 pt-3">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Linked exhibits</div>
                    <div className="flex flex-wrap gap-1.5">
                      {clusterExhibits.map(exId => (
                        <button
                          key={exId}
                          onClick={() => open(exId)}
                          className="inline-flex items-center gap-1 rounded-sm border border-border bg-secondary/60 px-2 py-0.5 text-[11px] font-medium hover:bg-secondary"
                        >
                          <FileText className="size-3" /> {exId}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {cluster.link && (
                  <Link
                    to={cluster.link.to}
                    className="mt-auto inline-flex items-center gap-1.5 self-start text-xs font-medium text-accent hover:underline"
                  >
                    {cluster.link.label} <ArrowRight className="size-3.5" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Key parties */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl tracking-tight">Key Parties at a Glance</h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {people.slice(0, 24).map(p => {
            const eventCount = events.filter(e => e.peopleIds.includes(p.id)).length;
            return (
              <Link
                key={p.id}
                to="/people"
                hash={`person-${p.id}`}
                className="group rounded-sm border border-border bg-card p-4 hover:border-accent transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-medium">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.role}</div>
                  </div>
                  <span className="shrink-0 rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] font-medium">
                    {eventCount}
                  </span>
                </div>
                <p className="mt-2 text-xs text-foreground/70 line-clamp-2">{p.relationshipToCase}</p>
              </Link>
            );
          })}
        </div>
        {people.length > 24 && (
          <Link to="/people" className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline">
            View all {people.length} parties <ArrowRight className="size-3.5" />
          </Link>
        )}
      </section>

      {/* Recent confirmed evidence */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl tracking-tight">High-Reliability Anchor Events</h2>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Email, transcript, and screenshot-confirmed events. These are the strongest anchors for investigators
          assessing the record before turning to reported-but-not-yet-corroborated material.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {sorted
            .filter(e => e.status === "confirmed-email" || e.status === "confirmed-transcript" || e.status === "confirmed-screenshot")
            .slice(0, 10)
            .map(e => (
              <div key={e.id} className="rounded-sm border border-border bg-card p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <Link to="/timeline" hash={`evt-${e.id}`} className="font-medium hover:text-accent">
                    {e.title}
                  </Link>
                  <span className="text-xs text-muted-foreground tabular-nums shrink-0">{e.date}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <CategoryBadge category={e.category} />
                  <StatusBadge status={e.status} />
                </div>
                <p className="text-xs text-foreground/70 line-clamp-3">{e.whyItMatters ?? e.description}</p>
                {e.evidenceIds.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {e.evidenceIds.map(exId => (
                      <button
                        key={exId}
                        onClick={() => open(exId)}
                        className="inline-flex items-center gap-1 rounded-sm border border-border bg-secondary/60 px-2 py-0.5 text-[11px] hover:bg-secondary"
                      >
                        <FileText className="size-3" /> {exId}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="rounded-sm border border-amber-500/30 bg-amber-500/5 p-4 flex gap-3">
        <AlertTriangle className="size-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-foreground/80 leading-relaxed">
          This map is a navigation surface, not a legal conclusion. Every characterization is framed as
          alleged, reported, or supported by an attached exhibit. Status badges identify the corroboration
          tier for each event.
        </p>
      </section>
    </div>
  );
}
