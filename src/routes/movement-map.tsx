import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { scheduleRows, SCHEDULE_TYPES, type ScheduleType } from "@/data/schedule-data";
import { useExhibit } from "@/components/case/ExhibitProvider";
import { clsx } from "clsx";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/movement-map")({
  head: () => ({
    meta: [
      { title: "Shift Movement Matrix — Harbin Case File" },
      { name: "description", content: "One row per Team Lead, 18 months across (Dec 2024 → May 2026), colored by shift placement each month. Derived directly from EX-022." },
      { property: "og:title", content: "Shift Movement Matrix — Harbin Case File" },
    ],
  }),
  component: MovementPage,
});

// Fixed shift color tokens — kept simple, semantic, consistent with schedule-data table
const SHIFT_COLOR: Record<ScheduleType, string> = {
  "AM": "bg-emerald-500",
  "Midshift": "bg-sky-500",
  "Mid/Late": "bg-amber-500",
  "PM/Closing": "bg-rose-500",
};
const SHIFT_TEXT: Record<ScheduleType, string> = {
  "AM": "text-emerald-700 dark:text-emerald-300",
  "Midshift": "text-sky-700 dark:text-sky-300",
  "Mid/Late": "text-amber-700 dark:text-amber-300",
  "PM/Closing": "text-rose-700 dark:text-rose-300",
};

type Cell = { sortKey: string; month: string; shift: ScheduleType; area: string; evidencePages: string };
type Row = { name: string; cells: Map<string, Cell>; total: number; distinctShifts: number };

function normalize(name: string): string {
  // Treat the two spellings used in EX-022 as one person
  if (name === "Shawnna Harbin" || name === "Lashawnna Harbin") return "Lashawnna Harbin";
  return name.trim();
}

function MovementPage() {
  const { open } = useExhibit();
  const [highlight, setHighlight] = useState<ScheduleType | "all">("all");
  const [sort, setSort] = useState<"moves" | "name">("moves");

  // Build the full month axis from the data
  const months = useMemo(() => {
    const set = new Set<string>();
    scheduleRows.forEach(r => set.add(r.sortKey));
    return Array.from(set).sort();
  }, []);
  const monthLabel = (sortKey: string) => {
    const [y, m] = sortKey.split("-");
    return { y, m: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Number(m)-1] };
  };

  // Build per-person rows from scheduleRows
  const rows: Row[] = useMemo(() => {
    const map = new Map<string, Row>();
    for (const r of scheduleRows) {
      for (const leader of r.leaders) {
        const name = normalize(leader);
        // Skip composite group labels
        if (name.includes("Pay Pro") || name.includes("group") || name.length > 50) continue;
        let row = map.get(name);
        if (!row) { row = { name, cells: new Map(), total: 0, distinctShifts: 0 }; map.set(name, row); }
        // Keep first cell per month (or override if Harbin highlight row)
        if (!row.cells.has(r.sortKey)) {
          row.cells.set(r.sortKey, { sortKey: r.sortKey, month: r.month, shift: r.scheduleType, area: r.area, evidencePages: r.evidencePages });
        }
      }
    }
    // Compute movement metric = number of shift-type transitions across the timeline
    for (const row of map.values()) {
      const sorted = months.map(m => row.cells.get(m)).filter(Boolean) as Cell[];
      let transitions = 0;
      for (let i = 1; i < sorted.length; i++) if (sorted[i].shift !== sorted[i-1].shift) transitions++;
      row.total = transitions;
      row.distinctShifts = new Set(sorted.map(c => c.shift)).size;
    }
    // Keep only TLs with at least 2 months of data so the matrix stays meaningful
    return Array.from(map.values()).filter(r => r.cells.size >= 2);
  }, [months]);

  const sortedRows = useMemo(() => {
    const r = [...rows];
    if (sort === "moves") {
      r.sort((a, b) => {
        if (a.name === "Lashawnna Harbin") return -1; // pin Harbin to top for direct comparison
        if (b.name === "Lashawnna Harbin") return 1;
        if (b.total !== a.total) return b.total - a.total;
        return a.name.localeCompare(b.name);
      });
    } else {
      r.sort((a, b) => {
        if (a.name === "Lashawnna Harbin") return -1;
        if (b.name === "Lashawnna Harbin") return 1;
        return a.name.localeCompare(b.name);
      });
    }
    return r;
  }, [rows, sort]);

  // Aggregate stats
  const totalTransitions = rows.filter(r => r.name !== "Lashawnna Harbin").reduce((s, r) => s + r.total, 0);
  const peersWithMoves = rows.filter(r => r.name !== "Lashawnna Harbin" && r.total > 0).length;
  const harbinRow = rows.find(r => r.name === "Lashawnna Harbin");

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <header className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Shift Movement Matrix · EX-022</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">One row. Eighteen months. Every TL.</h1>
        <p className="mt-3 text-foreground/75">
          Each row is one Team Lead. Each column is one month from December 2024 to May 2026. The colored block is the shift that TL held that month, taken directly from the named-TL grids in EX-022. Harbin sits at the top.
        </p>
      </header>

      {/* Stats — small, factual */}
      <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">
        <Stat label="TLs in matrix" value={`${rows.length}`} />
        <Stat label="Months covered" value={`${months.length}`} />
        <Stat label="Shift transitions (peers)" value={`${totalTransitions}`} />
        <Stat label="Harbin transitions" value={`${harbinRow?.total ?? 0}`} accent />
      </dl>

      {/* Legend + controls */}
      <div className="mt-6 flex flex-wrap items-center gap-3 rounded-md border border-border bg-card px-3 py-2">
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Shift</span>
        <button
          onClick={() => setHighlight("all")}
          className={clsx("rounded-sm border px-2 py-1 text-[11px]", highlight === "all" ? "border-foreground/40 bg-secondary" : "border-border")}
        >All</button>
        {SCHEDULE_TYPES.map(s => (
          <button
            key={s}
            onClick={() => setHighlight(highlight === s ? "all" : s)}
            className={clsx(
              "inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 text-[11px]",
              highlight === s ? "border-foreground/40 bg-secondary" : "border-border"
            )}
          >
            <span className={clsx("inline-block size-2.5 rounded-[2px]", SHIFT_COLOR[s])} />
            <span className={SHIFT_TEXT[s]}>{s}</span>
          </button>
        ))}
        <span className="ml-auto text-[11px] uppercase tracking-wider text-muted-foreground">Sort</span>
        <select
          value={sort}
          onChange={e => setSort(e.target.value as "moves" | "name")}
          className="rounded-sm border border-border bg-background px-2 py-1 text-xs"
        >
          <option value="moves">Most transitions first</option>
          <option value="name">Name (A–Z)</option>
        </select>
      </div>

      {/* Matrix */}
      <div className="mt-4 overflow-x-auto rounded-md border border-border bg-card">
        <table className="min-w-full border-separate border-spacing-0 text-xs">
          <thead className="sticky top-0 z-10 bg-card">
            <tr>
              <th className="sticky left-0 z-20 bg-card px-3 py-2 text-left font-medium text-muted-foreground">Team Lead</th>
              <th className="px-2 py-2 text-right font-medium text-muted-foreground">Moves</th>
              {months.map(m => {
                const { y, m: mm } = monthLabel(m);
                const isYearStart = mm === "Jan" || m === months[0];
                return (
                  <th key={m} className={clsx("px-1 py-2 text-center font-normal text-[10px] text-muted-foreground", isYearStart && "border-l border-border")}>
                    <div>{mm}</div>
                    <div className="text-[9px] text-muted-foreground/60">'{y.slice(2)}</div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map(row => {
              const isHarbin = row.name === "Lashawnna Harbin";
              return (
                <tr key={row.name} className={clsx("group", isHarbin && "bg-amber-500/5")}>
                  <td className={clsx(
                    "sticky left-0 z-10 whitespace-nowrap border-t border-border bg-card px-3 py-2 font-medium",
                    isHarbin && "bg-amber-500/10 text-foreground"
                  )}>
                    {row.name}
                    {isHarbin && <span className="ml-2 rounded-sm bg-amber-500/20 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-300">Charging party</span>}
                  </td>
                  <td className={clsx("border-t border-border px-2 py-2 text-right tabular-nums", row.total === 0 ? "text-muted-foreground" : "text-foreground")}>{row.total}</td>
                  {months.map(m => {
                    const cell = row.cells.get(m);
                    const { m: mm } = monthLabel(m);
                    const isYearStart = mm === "Jan" || m === months[0];
                    if (!cell) {
                      return <td key={m} className={clsx("border-t border-border px-0.5 py-2", isYearStart && "border-l")}><div className="mx-auto h-5 w-5 rounded-[2px] bg-secondary/40" /></td>;
                    }
                    const dim = highlight !== "all" && cell.shift !== highlight;
                    return (
                      <td key={m} className={clsx("border-t border-border px-0.5 py-2", isYearStart && "border-l")}>
                        <button
                          onClick={() => open("EX-022")}
                          title={`${cell.month} · ${cell.shift} · ${cell.area} · ${cell.evidencePages}`}
                          className={clsx(
                            "mx-auto block h-5 w-5 rounded-[2px] transition-opacity hover:ring-2 hover:ring-foreground/40",
                            SHIFT_COLOR[cell.shift],
                            dim && "opacity-25"
                          )}
                          aria-label={`${row.name} — ${cell.month} — ${cell.shift}`}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-[11px] text-muted-foreground">
        Click any cell to open EX-022 at the underlying schedule grid. Hover for the month, shift, area, and evidence page reference.
      </p>

      {/* Reading the matrix — plain text, no decoration */}
      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-md border border-border bg-card p-5">
          <h2 className="font-display text-lg">How to read this matrix</h2>
          <ul className="mt-3 space-y-2 text-sm text-foreground/80">
            <li>One color change in a row = one shift transition. The <strong>Moves</strong> column counts those.</li>
            <li>Harbin's row is a single uninterrupted color — <span className={clsx("inline-block size-2.5 rounded-[2px]", SHIFT_COLOR["PM/Closing"])} /> PM/Closing — across the entire 18-month window.</li>
            <li>Empty cells mean that TL was not visible on the EX-022 grid that month (e.g. pre-transfer, LOA, or off-grid area).</li>
            <li>Every cell is sourced directly from a named-TL screenshot in EX-022.</li>
          </ul>
        </div>
        <div className="rounded-md border border-accent/40 bg-accent/5 p-5">
          <h2 className="font-display text-lg">What the matrix shows</h2>
          <ul className="mt-3 space-y-2 text-sm text-foreground/85">
            <li><strong>{peersWithMoves}</strong> of {rows.length - 1} peer TLs changed shifts at least once across the window.</li>
            <li><strong>{totalTransitions}</strong> total peer transitions through AM, midshift, mid/late, and closing.</li>
            <li><strong>Three cross-department transfers</strong> (Samuel, Christensen, Bell) landed directly on LVAR AM — the shift Harbin requested.</li>
            <li><strong>Harbin transitions: {harbinRow?.total ?? 0}.</strong> Same shift, same area, December 2024 through May 2026.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={() => open("EX-022")} className="no-print inline-flex items-center gap-1.5 rounded-sm border border-border bg-card px-2.5 py-1.5 text-[11px] hover:bg-secondary/60">
              <FileText className="size-3" /> Open EX-022
            </button>
            <Link to="/comparators" className="no-print inline-flex items-center gap-1.5 rounded-sm border border-border bg-card px-2.5 py-1.5 text-[11px] hover:bg-secondary/60">
              Comparator matrix →
            </Link>
            <Link to="/schedule-data" className="no-print inline-flex items-center gap-1.5 rounded-sm border border-border bg-card px-2.5 py-1.5 text-[11px] hover:bg-secondary/60">
              Underlying schedule rows →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={clsx("bg-card px-4 py-3", accent && "bg-amber-500/5")}>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={clsx("mt-1 font-display text-2xl tracking-tight tabular-nums", accent && "text-amber-700 dark:text-amber-300")}>{value}</div>
    </div>
  );
}
