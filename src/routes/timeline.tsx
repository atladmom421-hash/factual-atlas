import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { eventsSorted, CATEGORY_LABELS, people } from "@/data";
import { TimelineEventCard } from "@/components/case/TimelineEventCard";
import { clsx } from "clsx";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Master Timeline — Harbin Case File" },
      { name: "description", content: "Vertical interactive timeline of every documented event in the Harbin matter, filterable by category, person, and year." },
      { property: "og:title", content: "Master Timeline — Harbin Case File" },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  const [category, setCategory] = useState<string>("all");
  const [year, setYear] = useState<string>("all");
  const [personId, setPersonId] = useState<string>("all");

  const years = useMemo(() => Array.from(new Set(eventsSorted.map(e => e.sortKey.slice(0, 4)))).sort(), []);
  const filtered = useMemo(() => eventsSorted.filter(e =>
    (category === "all" || e.category === category) &&
    (year === "all" || e.sortKey.startsWith(year)) &&
    (personId === "all" || e.peopleIds.includes(personId))
  ), [category, year, personId]);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Master Timeline</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">Every event, in order.</h1>
        <p className="mt-3 text-foreground/75">From the late-2023 temporary PM assignment through the May 2026 Karena Lesure concession. Filter by category, person, or year.</p>
      </div>

      {/* Filters */}
      <div className="no-print mt-8 space-y-3 rounded-md border border-border bg-card p-4">
        <FilterRow label="Category" value={category} onChange={setCategory} options={[{ value: "all", label: "All categories" }, ...Object.entries(CATEGORY_LABELS).map(([value, label]) => ({ value, label }))]} />
        <FilterRow label="Year" value={year} onChange={setYear} options={[{ value: "all", label: "All years" }, ...years.map(y => ({ value: y, label: y }))]} />
        <FilterRow label="Person" value={personId} onChange={setPersonId} options={[{ value: "all", label: "All people" }, ...people.map(p => ({ value: p.id, label: p.name }))]} />
      </div>

      {/* Timeline */}
      <div className="mt-12 space-y-6">
        {filtered.length === 0 && (
          <div className="rounded-md border border-dashed border-border p-12 text-center text-sm text-muted-foreground">No events match the current filters.</div>
        )}
        {filtered.map((e, i) => <TimelineEventCard key={e.id} event={e} index={i} />)}
      </div>
    </div>
  );
}

function FilterRow({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="w-20 text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {options.map(o => (
          <button key={o.value} onClick={() => onChange(o.value)} className={clsx(
            "rounded-full px-3 py-1 text-xs transition-colors",
            value === o.value ? "bg-navy text-navy-foreground" : "bg-secondary text-foreground/75 hover:bg-secondary/70"
          )}>{o.label}</button>
        ))}
      </div>
    </div>
  );
}
