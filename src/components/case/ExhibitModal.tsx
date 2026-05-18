import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { Exhibit } from "@/data/types";
import { StatusBadge } from "./Badges";
import { personById, eventById } from "@/data";

export function ExhibitModal({ exhibit, page, onClose }: { exhibit: Exhibit | null; page?: number; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {exhibit && (
        <motion.div
          className="fixed inset-0 z-50 flex items-stretch sm:items-center justify-center bg-charcoal/70 backdrop-blur-sm p-0 sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex w-[98vw] max-w-[1600px] h-[100dvh] sm:h-[95vh] flex-col overflow-hidden bg-card text-card-foreground sm:rounded-md shadow-2xl"
            initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-3 shrink-0">
              <div className="min-w-0">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <span className="rounded-sm bg-navy px-1.5 py-0.5 text-navy-foreground">{exhibit.exhibitNumber}</span>
                  <span>{exhibit.date}</span>
                  <span className="hidden sm:inline">{exhibit.category}</span>
                </div>
                <h2 className="mt-1 font-display text-xl tracking-tight truncate">{exhibit.fileName}</h2>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {exhibit.filePath && (
                  <a href={page ? `${exhibit.filePath}#page=${page}` : exhibit.filePath} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-sm px-2 py-1.5 text-xs hover:bg-secondary">
                    Open <ExternalLink className="size-3.5" />
                  </a>
                )}
                <button onClick={onClose} className="rounded-sm p-2 hover:bg-secondary"><X className="size-5" /></button>
              </div>
            </div>

            <div className="flex-1 min-h-0 overflow-auto bg-muted/40">
              {exhibit.fileKind === "pdf" && exhibit.filePath && (
                <iframe src={page ? `${exhibit.filePath}#page=${page}` : exhibit.filePath} title={exhibit.fileName} className="h-full w-full bg-muted" />
              )}
              {exhibit.fileKind === "image" && exhibit.filePath && (
                <div className="flex flex-col items-center">
                  <img src={exhibit.filePath} alt={exhibit.fileName} className="max-w-full" />
                  {exhibit.extraImagePaths?.map((p, i) => (
                    <img key={p} src={p} alt={`${exhibit.fileName} — page ${i + 2}`} className="max-w-full border-t border-border" />
                  ))}
                </div>
              )}
              {exhibit.fileKind === "docx" && exhibit.filePath && (
                <div className="p-8 text-sm">
                  <p className="text-muted-foreground">Word document — preview not embeddable.</p>
                  <a href={exhibit.filePath} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-accent hover:underline">
                    Download {exhibit.fileName} <ExternalLink className="size-3.5" />
                  </a>
                </div>
              )}
              {exhibit.fileKind === "transcript" && (
                <pre className="whitespace-pre-wrap p-8 font-sans text-[13px] leading-relaxed text-foreground/90">{exhibit.transcriptText}</pre>
              )}
            </div>

            <div className="grid gap-4 border-t border-border bg-secondary/40 px-6 py-4 text-[13px] md:grid-cols-3">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Reliability</div>
                <div className="mt-1"><StatusBadge status={exhibit.reliability} /></div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">People</div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {exhibit.peopleIds.map(id => {
                    const p = personById(id);
                    return p ? <span key={id} className="rounded-sm bg-card px-1.5 py-0.5 text-xs ring-1 ring-border">{p.name}</span> : null;
                  })}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Linked events</div>
                <ul className="mt-1 space-y-0.5">
                  {exhibit.linkedEventIds.slice(0, 4).map(id => {
                    const e = eventById(id);
                    return e ? <li key={id} className="text-xs text-foreground/80">{e.date} — {e.title}</li> : null;
                  })}
                  {exhibit.linkedEventIds.length > 4 && (
                    <li className="text-xs text-muted-foreground">+ {exhibit.linkedEventIds.length - 4} more</li>
                  )}
                </ul>
              </div>
            </div>

            {exhibit.summary && (
              <div className="border-t border-border px-6 py-4 text-sm text-foreground/85">{exhibit.summary}</div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
