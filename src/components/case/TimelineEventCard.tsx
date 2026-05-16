import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Scale } from "lucide-react";
import type { TimelineEvent } from "@/data/types";
import { personById, exhibitById, exhibits } from "@/data";
import { StatusBadge, CategoryBadge } from "./Badges";
import { useExhibit } from "./ExhibitProvider";

export function TimelineEventCard({ event, index }: { event: TimelineEvent; index: number }) {
  const [open, setOpen] = useState(false);
  const { open: openExhibit } = useExhibit();

  // Governing-rule exhibits that apply to this event (via reverse link or direct evidenceIds)
  const governingRules = exhibits.filter(ex =>
    ex.governingRule && (
      ex.linkedEventIds.includes(event.id) ||
      event.evidenceIds.includes(ex.id)
    ),
  );

  return (
    <motion.article
      id={`evt-${event.id}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.02, 0.2) }}
      className="relative pl-8 sm:pl-12 scroll-mt-24"
    >
      {/* timeline rail */}
      <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-border" aria-hidden />
      <div className="absolute left-[8px] sm:left-[12px] top-2 size-2 rounded-full bg-accent ring-4 ring-background" aria-hidden />

      <div className="rounded-md border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
          <time className="font-mono uppercase tracking-wider text-foreground/80">{event.date}</time>
          <span className="opacity-40">·</span>
          <CategoryBadge category={event.category} />
          <StatusBadge status={event.status} />
        </div>

        <h3 className="mt-2 font-display text-xl leading-tight tracking-tight text-foreground sm:text-2xl">{event.title}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-foreground/85">{event.description}</p>

        {governingRules.map(ex => (
          <button
            key={ex.id}
            onClick={() => openExhibit(ex.id)}
            className="mt-3 flex w-full items-start gap-2.5 rounded-sm border-l-2 border-amber-500 bg-amber-500/[0.07] px-3 py-2 text-left text-xs hover:bg-amber-500/[0.12]"
          >
            <Scale className="size-3.5 mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-wider text-amber-700/90 dark:text-amber-300/90">
                Governing rule · {ex.exhibitNumber}
              </div>
              <div className="mt-0.5 font-medium text-foreground">{ex.governingRule!.shortName}</div>
              <div className="mt-1 italic text-foreground/85">"{ex.governingRule!.rule}"</div>
              <div className="mt-1 text-foreground/65">{ex.governingRule!.citation}</div>
              {ex.governingRule!.appliedFrom && (
                <div className="mt-0.5 text-foreground/65">{ex.governingRule!.appliedFrom}</div>
              )}
            </div>
          </button>
        ))}

        {event.peopleIds.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-muted-foreground">People:</span>
            {event.peopleIds.map(id => {
              const p = personById(id);
              return p ? <span key={id} className="rounded-sm bg-secondary px-1.5 py-0.5 text-secondary-foreground">{p.name}</span> : null;
            })}
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {event.whyItMatters && (
            <button onClick={() => setOpen(o => !o)} className="inline-flex items-center gap-1 rounded-sm px-2 py-1 text-xs font-medium text-foreground/80 hover:bg-secondary">
              Why this matters <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
          )}
          {event.evidenceIds.map(id => {
            const ex = exhibitById(id);
            return ex ? (
              <button
                key={id}
                onClick={() => openExhibit(id)}
                className="inline-flex items-center gap-1.5 rounded-sm bg-navy px-2.5 py-1 text-xs font-medium text-navy-foreground hover:bg-navy/90"
              >
                <FileText className="size-3.5" /> {ex.exhibitNumber}
              </button>
            ) : null;
          })}
        </div>

        <AnimatePresence initial={false}>
          {open && event.whyItMatters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-3 rounded-sm border-l-2 border-accent bg-accent/5 px-3 py-2 text-sm text-foreground/85">
                {event.whyItMatters}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
