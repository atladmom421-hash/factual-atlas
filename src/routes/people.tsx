import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { people, events } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Person } from "@/data/types";
import { clsx } from "clsx";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "People Directory — Harbin Case File" },
      { name: "description", content: "Directory of every leader, comparator, HR contact, and witness referenced in the case file." },
      { property: "og:title", content: "People Directory — Harbin Case File" },
    ],
  }),
  component: PeoplePage,
});

const CAT_LABELS: Record<string, string> = {
  "charging-party": "Charging Party",
  comparator: "Comparator",
  leadership: "Leadership",
  hr: "HR / Ethics",
  witness: "Witness",
  other: "Other",
};

function PeoplePage() {
  const [active, setActive] = useState<Person | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const filtered = filter === "all" ? people : people.filter(p => p.category === filter);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">People Directory</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">Who's in the case file.</h1>
        <p className="mt-3 text-foreground/75">Click any person to see their role, relationship to the case, and the events they appear in.</p>
      </div>

      <div className="no-print mt-8 flex flex-wrap gap-1.5">
        {[["all", "All"], ...Object.entries(CAT_LABELS)].map(([v, l]) => (
          <button key={v} onClick={() => setFilter(v)} className={clsx(
            "rounded-full px-3 py-1 text-xs transition",
            filter === v ? "bg-navy text-navy-foreground" : "bg-secondary text-foreground/75 hover:bg-secondary/70"
          )}>{l}</button>
        ))}
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (
          <button key={p.id} onClick={() => setActive(p)} className="group text-left rounded-md border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className={clsx(
                "flex size-10 shrink-0 items-center justify-center rounded-full font-display text-base",
                p.category === "charging-party" ? "bg-accent text-accent-foreground" :
                p.category === "comparator" ? "bg-navy text-navy-foreground" :
                "bg-secondary text-secondary-foreground"
              )}>{initials(p.name)}</div>
              <div className="min-w-0">
                <div className="font-display text-lg leading-tight tracking-tight">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.role}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-foreground/60">{CAT_LABELS[p.category]}</div>
              </div>
            </div>
            <p className="mt-3 line-clamp-3 text-sm text-foreground/75">{p.relationshipToCase}</p>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-charcoal/70 p-0 sm:p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div onClick={e => e.stopPropagation()}
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
              className="w-full max-w-2xl rounded-t-lg sm:rounded-md bg-card text-card-foreground shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{CAT_LABELS[active.category]}</div>
                  <h2 className="mt-1 font-display text-2xl tracking-tight">{active.name}</h2>
                  <div className="text-sm text-muted-foreground">{active.role}{active.race ? ` · ${active.race}` : ""}</div>
                </div>
                <button onClick={() => setActive(null)} className="rounded-sm p-2 hover:bg-secondary"><X className="size-5" /></button>
              </div>
              <div className="space-y-5 px-6 py-5 text-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Relationship to case</div>
                  <p className="mt-1 text-foreground/85">{active.relationshipToCase}</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Appears in</div>
                  <ul className="mt-2 space-y-1.5">
                    {events.filter(e => e.peopleIds.includes(active.id)).map(e => (
                      <li key={e.id} className="rounded-sm bg-secondary/60 px-3 py-2">
                        <div className="text-[11px] font-mono uppercase text-muted-foreground">{e.date}</div>
                        <div className="text-[13.5px] text-foreground/90">{e.title}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function initials(name: string) {
  return name.split(" ").map(s => s[0]).slice(0, 2).join("").toUpperCase();
}
