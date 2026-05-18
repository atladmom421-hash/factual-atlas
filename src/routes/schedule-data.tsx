import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ExternalLink, FileText } from "lucide-react";
import { clsx } from "clsx";
import { scheduleRows, SCHEDULE_TYPES, SCHEDULE_COLOR, type ScheduleType } from "@/data/schedule-data";
import { exhibitById } from "@/data";
import { useExhibit } from "@/components/case/ExhibitProvider";
import { LeaderShiftMatrix } from "@/components/case/LeaderShiftMatrix";
import { WaitlistTimeline } from "@/components/case/WaitlistTimeline";
import { WaitlistStatusTimeline } from "@/components/case/WaitlistStatusTimeline";
import { AllanChatThreads } from "@/components/case/AllanChatThreads";
import { ScheduleSourceGallery } from "@/components/case/ScheduleSourceGallery";

export const Route = createFileRoute("/schedule-data")({
  head: () => ({
    meta: [
      { title: "Schedule Movement Data — Harbin Case File" },
      { name: "description", content: "Structured 15-month schedule movement table (Dec 2024–May 2026) — month, schedule type, leaders, and direct links to underlying evidence pages in EX-022." },
      { property: "og:title", content: "Schedule Movement Data — Harbin Case File" },
    ],
  }),
  component: ScheduleDataPage,
});

function ScheduleDataPage() {
  const { open } = useExhibit();
  const [type, setType] = useState<ScheduleType | "all">("all");
  const [year, setYear] = useState<string>("all");
  const [onlyHarbin, setOnlyHarbin] = useState(false);

  const years = useMemo(() => Array.from(new Set(scheduleRows.map(r => r.sortKey.slice(0, 4)))).sort(), []);

  const filtered = useMemo(() => scheduleRows
    .filter(r => (type === "all" || r.scheduleType === type))
    .filter(r => (year === "all" || r.sortKey.startsWith(year)))
    .filter(r => (!onlyHarbin || r.highlightHarbin))
    .sort((a, b) => a.sortKey.localeCompare(b.sortKey)),
  [type, year, onlyHarbin]);

  // Group by month for the table
  const grouped = useMemo(() => {
    const map = new Map<string, typeof scheduleRows>();
    for (const r of filtered) {
      const arr = map.get(r.month) ?? [];
      arr.push(r);
      map.set(r.month, arr);
    }
    return Array.from(map.entries());
  }, [filtered]);

  // Count summary per schedule type for current filter
  const summary = useMemo(() => {
    const c: Record<ScheduleType, number> = { "AM": 0, "Midshift": 0, "Mid/Late": 0, "PM/Closing": 0 };
    for (const r of filtered) c[r.scheduleType] += 1;
    return c;
  }, [filtered]);

  const ex022 = exhibitById("EX-022");

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Schedule Movement Data</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">15 months of who got which schedule.</h1>
        <p className="mt-3 text-foreground/75">
          Structured table built from EX-022 — schedule screenshots covering December 2024 through May 2026.
          Each row shows the month, schedule type, area, affected leaders, and a direct link to the underlying
          evidence pages inside the exhibit PDF.
        </p>
      </div>

      {/* Source exhibit */}
      {ex022 && (
        <button
          onClick={() => open("EX-022")}
          className="no-print mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm hover:bg-secondary/60"
        >
          <FileText className="size-4" />
          Open source exhibit — {ex022.exhibitNumber}: {ex022.fileName}
          <ExternalLink className="size-3.5 text-muted-foreground" />
        </button>
      )}

      {/* Investigator matrix — the headline visual */}
      <div className="mt-10">
        <LeaderShiftMatrix />
      </div>

      {/* Waitlist timeline — three snapshots + chats */}
      <div className="mt-10">
        <WaitlistTimeline />
      </div>

      {/* Per-TL status tracker across the three snapshots */}
      <div className="mt-10">
        <WaitlistStatusTimeline />
      </div>

      {/* Verbatim Allan Glover chat threads */}
      <div className="mt-10">
        <AllanChatThreads />
      </div>

      {/* Source schedule workbook screenshots (verified user uploads) */}
      <div className="mt-10">
        <ScheduleSourceGallery />
      </div>

      {/* Summary chips */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {SCHEDULE_TYPES.map(t => (
          <div key={t} className={clsx("rounded-md p-3 ring-1", SCHEDULE_COLOR[t])}>
            <div className="text-[10px] uppercase tracking-wider opacity-80">{t}</div>
            <div className="mt-1 font-display text-2xl">{summary[t]}</div>
            <div className="text-[11px] opacity-75">data points in view</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="no-print mt-6 space-y-3 rounded-md border border-border bg-card p-4">
        <FilterRow label="Type" value={type} onChange={(v) => setType(v as ScheduleType | "all")} options={[{ value: "all", label: "All schedules" }, ...SCHEDULE_TYPES.map(t => ({ value: t, label: t }))]} />
        <FilterRow label="Year" value={year} onChange={setYear} options={[{ value: "all", label: "All years" }, ...years.map(y => ({ value: y, label: y }))]} />
        <div className="flex items-center gap-2 pt-1">
          <label className="flex items-center gap-2 text-xs text-foreground/80">
            <input type="checkbox" checked={onlyHarbin} onChange={e => setOnlyHarbin(e.target.checked)} className="size-3.5" />
            Show only rows including Lashawnna Harbin
          </label>
        </div>
      </div>

      {/* Table */}
      <div className="mt-8 overflow-x-auto rounded-md border border-border bg-card">
        <table className="min-w-full text-sm">
          <thead className="bg-secondary text-[10px] uppercase tracking-wider text-foreground/70">
            <tr>
              <th className="px-3 py-3 text-left font-medium w-[10%]">Month</th>
              <th className="px-3 py-3 text-left font-medium w-[12%]">Schedule type</th>
              <th className="px-3 py-3 text-left font-medium w-[14%]">Time range</th>
              <th className="px-3 py-3 text-left font-medium w-[12%]">Area</th>
              <th className="px-3 py-3 text-left font-medium w-[22%]">Affected leaders</th>
              <th className="px-3 py-3 text-left font-medium w-[20%]">Significance</th>
              <th className="px-3 py-3 text-left font-medium w-[10%]">Evidence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {grouped.length === 0 && (
              <tr><td colSpan={7} className="px-3 py-12 text-center text-sm text-muted-foreground">No rows match the current filters.</td></tr>
            )}
            {grouped.map(([month, rows]) => (
              rows.map((r, i) => (
                <tr key={r.id} className={clsx(r.highlightHarbin && "bg-red-500/[0.04]")}>
                  <td className="px-3 py-3 align-top">
                    {i === 0 ? <div className="font-medium">{month}</div> : <div className="text-muted-foreground text-xs">↳</div>}
                  </td>
                  <td className="px-3 py-3 align-top">
                    <span className={clsx("inline-flex rounded-full px-2 py-0.5 text-[11px] ring-1", SCHEDULE_COLOR[r.scheduleType])}>{r.scheduleType}</span>
                  </td>
                  <td className="px-3 py-3 align-top font-mono text-[12px]">{r.timeRange}</td>
                  <td className="px-3 py-3 align-top text-xs">{r.area}</td>
                  <td className="px-3 py-3 align-top">
                    <div className="flex flex-wrap gap-1">
                      {r.leaders.map(l => (
                        <span key={l} className={clsx(
                          "rounded-sm px-1.5 py-0.5 text-[11px]",
                          l === "Lashawnna Harbin" ? "bg-red-500/15 text-red-700 dark:text-red-300 font-medium" : "bg-secondary text-foreground/80",
                        )}>{l}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-3 py-3 align-top text-xs text-foreground/80">{r.significance}</td>
                  <td className="px-3 py-3 align-top">
                    <button
                      onClick={() => open(r.exhibitId, Number(r.evidencePages.match(/\d+/)?.[0] ?? 1))}
                      className="inline-flex items-center gap-1 rounded-sm bg-secondary px-2 py-1 text-[11px] hover:bg-secondary/70"
                      title={`Open ${r.exhibitId} at ${r.evidencePages}`}
                    >
                      <FileText className="size-3" />
                      {r.exhibitId}
                      <span className="text-muted-foreground">· {r.evidencePages}</span>
                    </button>
                  </td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Source: EX-022 — Schedule Movement, Flexibility & Comparator Timeline Evidence (18 pp.).
        Page references point to the section of the exhibit PDF where the underlying screenshot or chart appears.
      </p>
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
            value === o.value ? "bg-navy text-navy-foreground" : "bg-secondary text-foreground/75 hover:bg-secondary/70",
          )}>{o.label}</button>
        ))}
      </div>
    </div>
  );
}
