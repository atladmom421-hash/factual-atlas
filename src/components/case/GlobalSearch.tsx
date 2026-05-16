import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, User, Calendar, FileText, GitBranch, Tag, Building2 } from "lucide-react";
import { clsx } from "clsx";
import {
  people,
  events,
  exhibits,
  comparators,
  exhibitFullText,
  CATEGORY_LABELS,
} from "@/data";

type ResultKind = "person" | "event" | "exhibit" | "date" | "category" | "department";

interface Result {
  kind: ResultKind;
  id: string;
  title: string;
  subtitle?: string;
  haystack: string;
  /** Long-form body text (transcripts, parsed PDF/OCR). Used for snippet preview only. */
  body?: string;
  to: string;
  hash?: string;
}

// Known department / area tokens used in this case file.
const DEPARTMENTS = [
  "LVAR", "TBAY", "Whitehall", "PRE-D", "DBC", "Training",
  "Ohio", "Onsite", "PM", "AM", "Midshift", "Pay Pro",
];

function buildIndex(): Result[] {
  const out: Result[] = [];

  for (const p of people) {
    out.push({
      kind: "person",
      id: p.id,
      title: p.name,
      subtitle: [p.role, p.category].filter(Boolean).join(" · "),
      haystack: [p.name, p.role, p.category, p.relationshipToCase, p.race, p.notes].filter(Boolean).join(" ").toLowerCase(),
      to: "/people",
      hash: `person-${p.id}`,
    });
  }

  for (const e of events) {
    out.push({
      kind: "event",
      id: e.id,
      title: e.title,
      subtitle: `${e.date} · ${CATEGORY_LABELS[e.category] ?? e.category}`,
      haystack: [e.title, e.description, e.date, e.sortKey, e.whyItMatters, CATEGORY_LABELS[e.category]].filter(Boolean).join(" ").toLowerCase(),
      to: "/timeline",
      hash: `evt-${e.id}`,
    });
  }

  for (const ex of exhibits) {
    const ocr = exhibitFullText[ex.id] ?? "";
    const body = [ex.transcriptText, ocr].filter(Boolean).join("\n\n");
    out.push({
      kind: "exhibit",
      id: ex.id,
      title: `${ex.exhibitNumber} — ${ex.fileName}`,
      subtitle: `${ex.date} · ${ex.category}`,
      haystack: [
        ex.exhibitNumber, ex.fileName, ex.summary, ex.category, ex.date,
        ex.transcriptText, ocr,
      ].filter(Boolean).join(" ").toLowerCase(),
      body: body || undefined,
      to: "/evidence",
      hash: `exhibit-${ex.id}`,
    });
  }

  for (const [value, label] of Object.entries(CATEGORY_LABELS)) {
    out.push({
      kind: "category",
      id: value,
      title: label,
      subtitle: "Event category",
      haystack: `${label} ${value}`.toLowerCase(),
      to: "/timeline",
      hash: `cat-${value}`,
    });
  }

  // Departments — derived from comparators + fixed list
  const seen = new Set<string>();
  const compText = comparators.map(c => `${c.priorArea} ${c.laterArea}`).join(" ").toLowerCase();
  for (const d of DEPARTMENTS) {
    if (seen.has(d.toLowerCase())) continue;
    seen.add(d.toLowerCase());
    const mentions = compText.includes(d.toLowerCase());
    out.push({
      kind: "department",
      id: d,
      title: d,
      subtitle: mentions ? "Department / area" : "Schedule / area reference",
      haystack: d.toLowerCase(),
      to: "/movement-map",
    });
  }

  // Distinct dates from events
  const dates = new Map<string, string>(); // sortKey -> nice date
  for (const e of events) if (!dates.has(e.sortKey)) dates.set(e.sortKey, e.date);
  for (const [sortKey, nice] of dates) {
    out.push({
      kind: "date",
      id: sortKey,
      title: nice,
      subtitle: "Timeline date",
      haystack: `${nice} ${sortKey}`.toLowerCase(),
      to: "/timeline",
      hash: `date-${sortKey}`,
    });
  }

  return out;
}

const KIND_META: Record<ResultKind, { label: string; Icon: typeof User }> = {
  person: { label: "Person", Icon: User },
  event: { label: "Event", Icon: Calendar },
  exhibit: { label: "Exhibit", Icon: FileText },
  date: { label: "Date", Icon: Calendar },
  category: { label: "Category", Icon: Tag },
  department: { label: "Department", Icon: Building2 },
};

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const index = useMemo(buildIndex, []);

  // Open via Cmd/Ctrl+K, or custom event from header button
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(o => !o);
      } else if (e.key === "/" && !open && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-global-search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-global-search", onOpen);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setQ("");
      setCursor(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) {
      // Show a curated default mix
      const sample: Result[] = [];
      const want: ResultKind[] = ["person", "event", "exhibit", "category", "department"];
      for (const k of want) {
        sample.push(...index.filter(r => r.kind === k).slice(0, 3));
      }
      return sample;
    }
    const tokens = term.split(/\s+/).filter(Boolean);
    const scored = index
      .map(r => {
        let score = 0;
        for (const t of tokens) {
          if (!r.haystack.includes(t)) return { r, score: -1 };
          if (r.title.toLowerCase().includes(t)) score += 5;
          if (r.title.toLowerCase().startsWith(t)) score += 3;
          score += 1;
        }
        return { r, score };
      })
      .filter(x => x.score >= 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 40)
      .map(x => x.r);
    return scored;
  }, [q, index]);

  useEffect(() => { setCursor(0); }, [q]);

  const go = (r: Result) => {
    setOpen(false);
    const hash = r.hash ? `#${r.hash}` : "";
    // Use router navigate then set hash so useHashFocus picks it up
    navigate({ to: r.to }).then(() => {
      if (hash) {
        if (window.location.hash === hash) {
          // force re-fire
          window.dispatchEvent(new HashChangeEvent("hashchange"));
        } else {
          window.location.hash = hash;
        }
      }
    });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setCursor(c => Math.min(c + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setCursor(c => Math.max(c - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); const r = results[cursor]; if (r) go(r); }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/60 backdrop-blur-sm px-4 pt-[10vh]"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                value={q}
                onChange={e => setQ(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search people, dates, departments, exhibits, categories…"
                className="w-full bg-transparent py-4 text-[15px] outline-none placeholder:text-muted-foreground"
              />
              <kbd className="hidden sm:inline-block rounded-sm border border-border bg-secondary px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">Esc</kbd>
              <button onClick={() => setOpen(false)} className="rounded-sm p-1 text-muted-foreground hover:bg-secondary"><X className="size-4" /></button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <div className="px-5 py-10 text-center text-sm text-muted-foreground">
                  No matches across people, events, exhibits, dates, departments, or categories.
                </div>
              ) : (
                <ul className="py-2">
                  {results.map((r, i) => {
                    const { label, Icon } = KIND_META[r.kind];
                    const active = i === cursor;
                    return (
                      <li key={`${r.kind}-${r.id}`}>
                        <button
                          onMouseEnter={() => setCursor(i)}
                          onClick={() => go(r)}
                          className={clsx(
                            "flex w-full items-center gap-3 px-4 py-2.5 text-left",
                            active ? "bg-secondary" : "hover:bg-secondary/60"
                          )}
                        >
                          <span className={clsx(
                            "flex size-7 shrink-0 items-center justify-center rounded-sm",
                            active ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground/70"
                          )}>
                            <Icon className="size-3.5" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[14px] font-medium text-foreground">{r.title}</span>
                            {r.subtitle && <span className="block truncate text-[11.5px] text-muted-foreground">{r.subtitle}</span>}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border bg-secondary/40 px-4 py-2 text-[11px] text-muted-foreground">
              <div className="flex items-center gap-3">
                <span><kbd className="rounded-sm border border-border bg-background px-1">↑</kbd> <kbd className="rounded-sm border border-border bg-background px-1">↓</kbd> navigate</span>
                <span><kbd className="rounded-sm border border-border bg-background px-1">↵</kbd> open</span>
              </div>
              <div className="flex items-center gap-1"><GitBranch className="size-3" /> {index.length} items indexed</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function openGlobalSearch() {
  window.dispatchEvent(new Event("open-global-search"));
}
