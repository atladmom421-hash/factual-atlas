import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { scheduleRows, SCHEDULE_TYPES, type ScheduleType } from "@/data/schedule-data";
import { LEADER_PROFILE_BY_NAME } from "@/data/leader-profiles";

// Compact tokens for the matrix cells (semantic-friendly via tailwind palette)
const CELL: Record<ScheduleType, { bg: string; label: string; abbr: string; printClass: string }> = {
  "AM":         { bg: "bg-emerald-500/70",  label: "AM (early)",            abbr: "AM",  printClass: "sched-cell-am" },
  "Midshift":   { bg: "bg-sky-500/70",      label: "Midshift",              abbr: "MID", printClass: "sched-cell-mid" },
  "Mid/Late":   { bg: "bg-amber-500/75",    label: "Mid/Late",              abbr: "M/L", printClass: "sched-cell-ml" },
  "PM/Closing": { bg: "bg-red-500/75",      label: "PM / Closing (10 PM)",  abbr: "PM",  printClass: "sched-cell-pm" },
};

// Coaches & non-TL noise to keep out of the matrix
const EXCLUDE = new Set<string>([
  "Kari Ross",
  "Tiffany Parks",
  "Multiple leaders",
  "Multiple LVAR/PRE-D leaders",
  "Shawnna Harbin TL row", // stray label, not a person
  "Ashley Beckwith",       // not a TL (per Harbin)
  "Candice Nesti",         // not a TL (per Harbin)
]);

// Display rename / merge
const NORMALIZE: Record<string, string> = {
  "Shawnna Harbin": "Shawnna Harbin (mgr)",
};

type Cell = { type: ScheduleType; timeRange: string; area: string; pages: string };

export function LeaderShiftMatrix() {
  const [hover, setHover] = useState<string | null>(null);

  // 1. Build the ordered month axis from sortKey
  const months = useMemo(() => {
    const m = new Map<string, string>(); // sortKey -> label
    for (const r of scheduleRows) {
      if (r.sortKey < "2024-12") continue;
      if (!m.has(r.sortKey)) m.set(r.sortKey, shortMonth(r.sortKey));
    }
    return Array.from(m.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, []);

  // 2. Build matrix: leader -> sortKey -> Cell
  const { matrix, leaderOrder } = useMemo(() => {
    const mx = new Map<string, Map<string, Cell>>();
    for (const r of scheduleRows) {
      for (const raw of r.leaders) {
        if (EXCLUDE.has(raw)) continue;
        const name = NORMALIZE[raw] ?? raw;
        if (!mx.has(name)) mx.set(name, new Map());
        const row = mx.get(name)!;
        // If conflicting entries for the same (leader, month), prefer the
        // most-restrictive schedule for Harbin (PM) and otherwise last-wins.
        const existing = row.get(r.sortKey);
        if (!existing) {
          row.set(r.sortKey, { type: r.scheduleType, timeRange: r.timeRange, area: r.area, pages: r.evidencePages });
        }
      }
    }

    // Order: Harbin first, then by # of observations desc, then alpha
    const list = Array.from(mx.keys());
    list.sort((a, b) => {
      if (a === "Lashawnna Harbin") return -1;
      if (b === "Lashawnna Harbin") return 1;
      const da = mx.get(a)!.size, db = mx.get(b)!.size;
      if (db !== da) return db - da;
      return a.localeCompare(b);
    });
    return { matrix: mx, leaderOrder: list };
  }, []);

  // 3. Per-leader movement count = number of distinct schedule types observed
  const movement = useMemo(() => {
    const m = new Map<string, number>();
    for (const [name, row] of matrix) {
      const set = new Set<ScheduleType>();
      for (const c of row.values()) set.add(c.type);
      m.set(name, set.size);
    }
    return m;
  }, [matrix]);

  return (
    <section className="rounded-md border border-border bg-card">
      <header className="border-b border-border p-4 sm:p-5">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Comparator schedule matrix</div>
            <h2 className="mt-1 font-display text-2xl tracking-tight">Leader × Month — schedule placement</h2>
          </div>
          <div className="text-[11px] text-muted-foreground max-w-md">
            One row per Team Lead. One column per month (Dec 2024 → May 2026). Cell colour = schedule type held that
            month. <span className="text-foreground/80 font-medium">Harbin's row holds a single shift band</span> while
            peer rows shift colour across the window — readers may draw their own inference.
          </div>

        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-3">
          {SCHEDULE_TYPES.map(t => (
            <div key={t} className="flex items-center gap-2 text-[11px]">
              <span className={clsx("inline-block size-3 rounded-sm ring-1 ring-border/50", CELL[t].bg, CELL[t].printClass)} />
              <span className="text-foreground/80">{CELL[t].label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-[11px]">
            <span className="inline-block size-3 rounded-sm border border-dashed border-border bg-transparent" />
            <span className="text-muted-foreground">No schedule observed this month</span>
          </div>
        </div>
      </header>

      <div className="overflow-x-auto p-2">
        <table className="min-w-full border-separate border-spacing-0 text-[11px]">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-card px-2 py-2 text-left font-medium text-foreground/70 align-bottom">
                <div>Team Lead</div>
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground">distinct shifts held</div>
              </th>
              {months.map(([key, label]) => (
                <th
                  key={key}
                  className={clsx(
                    "px-1 py-2 align-bottom text-center font-medium",
                    hover === key ? "text-foreground" : "text-muted-foreground",
                  )}
                  onMouseEnter={() => setHover(key)}
                  onMouseLeave={() => setHover(null)}
                >
                  <div className="rotate-[-50deg] origin-bottom-left translate-y-1 whitespace-nowrap text-[10px]">
                    {label}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leaderOrder.map(name => {
              const row = matrix.get(name)!;
              const isHarbin = name === "Lashawnna Harbin";
              const distinct = movement.get(name) ?? 0;
              return (
                <tr
                  key={name}
                  className={clsx(
                    "group",
                    isHarbin && "bg-red-500/[0.06]",
                  )}
                >
                  <th
                    scope="row"
                    className={clsx(
                      "sticky left-0 z-10 whitespace-nowrap px-2 py-1 text-left font-normal align-top",
                      isHarbin ? "bg-red-500/10 text-red-700 dark:text-red-300 font-medium" : "bg-card",
                    )}
                  >
                    {(() => {
                      const profile = LEADER_PROFILE_BY_NAME[name];
                      return (
                        <div className="flex flex-col gap-0.5 max-w-[260px]">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span>{name}</span>
                            {profile?.inLashawnnasDept && (
                              <span
                                className="rounded-sm bg-amber-500/15 px-1 py-[1px] text-[8px] uppercase tracking-wider text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/30"
                                title="Member of Harbin's LVAR department"
                              >
                                LVAR
                              </span>
                            )}
                            {profile && !profile.inLashawnnasDept && profile.dept !== "Other" && (
                              <span
                                className="rounded-sm bg-secondary px-1 py-[1px] text-[8px] uppercase tracking-wider text-foreground/60 ring-1 ring-border/50"
                                title={`Department: ${profile.dept}`}
                              >
                                {profile.dept}
                              </span>
                            )}
                            <span
                              className={clsx(
                                "rounded-full px-1.5 py-[1px] text-[9px] ring-1",
                                distinct === 1
                                  ? "bg-red-500/10 text-red-700 dark:text-red-300 ring-red-500/30"
                                  : distinct >= 3
                                  ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 ring-emerald-500/30"
                                  : "bg-secondary text-foreground/70 ring-border/50",
                              )}
                              title={`${distinct} distinct schedule type(s) observed across the 15-month window`}
                            >
                              {distinct}×
                            </span>
                          </div>
                          {(profile?.onSite || profile?.movement) && (
                            <div className="text-[9px] font-normal text-muted-foreground leading-snug">
                              {profile.onSite && <div>{profile.onSite}</div>}
                              {profile.movement && <div className="italic">{profile.movement}</div>}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </th>
                  {months.map(([key]) => {
                    const cell = row.get(key);
                    return (
                      <td
                        key={key}
                        className={clsx(
                          "h-6 w-6 border border-border/30 p-0",
                          hover === key && "outline outline-1 outline-foreground/30",
                        )}
                        onMouseEnter={() => setHover(key)}
                        onMouseLeave={() => setHover(null)}
                      >
                        {cell ? (
                          <div
                            className={clsx("h-full w-full", CELL[cell.type].bg)}
                            title={`${name} · ${shortMonth(key)} · ${cell.type} · ${cell.timeRange} · ${cell.area} · EX-022 ${cell.pages}`}
                          />
                        ) : null}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <footer className="border-t border-border px-4 py-3 text-[11px] text-muted-foreground">
        Hover any cell for the exact time range, area, and EX-022 page reference. Source: EX-022 — Schedule Movement,
        Flexibility & Comparator Timeline Evidence (Dec 2024 – May 2026).
      </footer>
    </section>
  );
}

function shortMonth(sortKey: string): string {
  // "2025-07" -> "Jul '25"
  const [y, m] = sortKey.split("-");
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const idx = parseInt(m, 10) - 1;
  return `${names[idx] ?? m} '${y.slice(2)}`;
}
