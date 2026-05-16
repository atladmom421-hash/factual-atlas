import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { chapters, events } from "@/data";
import { TimelineEventCard } from "@/components/case/TimelineEventCard";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Story Mode — Harbin Case File" },
      { name: "description", content: "Documentary-style chapter walkthrough of the Harbin case." },
      { property: "og:title", content: "Story Mode — Harbin Case File" },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  const [idx, setIdx] = useState(0);
  const chapter = chapters[idx];
  const chapterEvents = events.filter(e => e.chapterId === chapter.id).sort((a, b) => a.sortKey.localeCompare(b.sortKey));
  const progress = ((idx + 1) / chapters.length) * 100;

  return (
    <div className="relative">
      <div className="no-print sticky top-[60px] z-30 h-1 bg-border">
        <motion.div className="h-full bg-accent" animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
      </div>

      <div className="mx-auto max-w-5xl px-5 py-14">
        <AnimatePresence mode="wait">
          <motion.div key={chapter.id}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Chapter {chapter.number} of {chapters.length}</div>
            <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">{chapter.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/80">{chapter.intro}</p>

            <div className="mt-6 rounded-md border-l-2 border-accent bg-accent/5 px-5 py-4 text-sm">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Key question</div>
              <div className="mt-1 font-display text-lg text-foreground">{chapter.keyQuestion}</div>
            </div>

            {chapterEvents.length > 0 && (
              <div className="mt-12 space-y-6">
                {chapterEvents.map((e, i) => <TimelineEventCard key={e.id} event={e} index={i} />)}
              </div>
            )}

            <div className="no-print mt-14 flex items-center justify-between gap-3 border-t border-border pt-6">
              <button onClick={() => setIdx(i => Math.max(0, i - 1))} disabled={idx === 0}
                className="inline-flex items-center gap-1 rounded-sm px-4 py-2 text-sm text-foreground/80 hover:bg-secondary disabled:opacity-30">
                <ChevronLeft className="size-4" /> Previous
              </button>
              <div className="flex gap-1">
                {chapters.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)} aria-label={`Chapter ${i + 1}`}
                    className={`h-1.5 w-6 rounded-full transition ${i === idx ? "bg-accent" : "bg-border hover:bg-muted-foreground/40"}`} />
                ))}
              </div>
              <button onClick={() => setIdx(i => Math.min(chapters.length - 1, i + 1))} disabled={idx === chapters.length - 1}
                className="inline-flex items-center gap-1 rounded-sm bg-navy px-4 py-2 text-sm text-navy-foreground hover:bg-navy/90 disabled:opacity-30">
                Next chapter <ChevronRight className="size-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
