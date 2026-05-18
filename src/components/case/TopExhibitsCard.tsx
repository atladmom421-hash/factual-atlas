import { useExhibit } from "@/components/case/ExhibitProvider";
import { exhibits } from "@/data";
import { useState } from "react";
import { clsx } from "clsx";

// Ranked starter pack — most load-bearing exhibits for a first-pass reviewer.
const TOP: { id: string; why: string }[] = [
  { id: "EX-022", why: "18-page comparator schedule statement, Dec 2024 → May 2026" },
  { id: "EX-048", why: "Mid-shift / waitlist record + SharePoint version history" },
  { id: "EX-049", why: "Nov 6, 2025 HR close-out call — admissions re: Verint + missing ticket" },
  { id: "EX-008", why: "Temporary vs. permanent assignment framing" },
  { id: "EX-040", why: "Comparator chain — Tyler Millisock movement" },
  { id: "EX-041", why: "Other-leader schedule movement (Faulkner / McGregor named in EX-022 grids; excluded from primary comparator roster)" },
  { id: "EX-047", why: "Oct 4, 2024 Scozzari Teams thread — tone policing" },
  { id: "EX-006", why: "Verint monitoring concern" },
  { id: "EX-053", why: "2024 Year-End review (paper downgrade with rising bonus)" },
  { id: "EX-057", why: "CAR 2025 TL Scorecard — YTD 3.93 contradicting the rating" },
];

export function TopExhibitsCard() {
  const { open } = useExhibit();
  const [expanded, setExpanded] = useState(false);
  const items = TOP.map(t => ({ ...t, ex: exhibits.find(e => e.exhibitNumber === t.id) })).filter(t => t.ex);
  const visible = expanded ? items : items.slice(0, 5);

  return (
    <section className="rounded-md border border-border bg-card">
      <header className="flex items-baseline justify-between gap-3 border-b border-border px-5 py-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Starter pack</div>
          <h2 className="mt-1 font-display text-xl tracking-tight">Top 10 exhibits</h2>
        </div>
        <button
          onClick={() => setExpanded(v => !v)}
          className="text-[11px] text-muted-foreground hover:text-foreground"
        >
          {expanded ? "Show 5" : "Show all 10"}
        </button>
      </header>
      <ol className="divide-y divide-border">
        {visible.map((t, i) => (
          <li key={t.id}>
            <button
              onClick={() => open(t.id)}
              className="group flex w-full items-start gap-3 px-5 py-3 text-left transition-colors hover:bg-secondary/40"
            >
              <span className="mt-0.5 w-5 shrink-0 text-right font-mono text-[11px] text-muted-foreground">{i + 1}</span>
              <span className={clsx(
                "shrink-0 rounded-sm bg-navy px-1.5 py-0.5 font-mono text-[11px] text-navy-foreground"
              )}>{t.id}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] text-foreground/90">{t.ex!.fileName}</span>
                <span className="mt-0.5 block text-[11px] text-muted-foreground">{t.why}</span>
              </span>
              <span className="shrink-0 text-[11px] text-muted-foreground group-hover:text-foreground">Open →</span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
