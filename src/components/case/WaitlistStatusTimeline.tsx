import { clsx } from "clsx";
import { Check, X, AlertTriangle, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useExhibit } from "@/components/case/ExhibitProvider";

// Horizontal status timeline across the three preserved snapshots of the
// "Current TL Shifts" waitlist. Same source rows as WaitlistTimeline.tsx,
// re-projected as a per-TL tracker so Harbin's added → removed → still-gone
// arc is visible at a glance against the juniors who remain qualifying.

type SnapKey = "jan22" | "feb25" | "jul03";

const SNAPS: { key: SnapKey; label: string; date: string; exhibit: string; eventId: string; harbinEventId: string }[] = [
  { key: "jan22", label: "Jan 22, 2025", date: "9:36 AM",  exhibit: "EX-046", eventId: "e-2025-01-22-waitlist-harbin-row-6", harbinEventId: "e-2025-01-22-waitlist-harbin-row-6" },
  { key: "feb25", label: "Feb 25, 2025", date: "12:01 PM", exhibit: "EX-045", eventId: "e-2025-02-25-jen-removes-harbin", harbinEventId: "e-2025-02-25-jen-removes-harbin" },
  { key: "jul03", label: "Jul 3, 2025",  date: "2:28 PM",  exhibit: "EX-044", eventId: "e-2025-07-03-waitlist-harbin-absent", harbinEventId: "e-2025-07-03-waitlist-harbin-absent" },
];

type Row = {
  name: string;
  shiftReq: "AM" | "MID";
  dateReq: string; // mm/dd/yyyy
  // per-snapshot: present + qualifies (null = absent)
  jan22: { current: string; tp: "T" | "P" } | null;
  feb25: { current: string; tp: "T" | "P" } | null;
  jul03: { current: string; tp: "T" | "P" } | null;
  isHarbin?: boolean;
};

// Pulled directly from the three snapshots in WaitlistTimeline.tsx.
const ROWS: Row[] = [
  { name: "Nameer Khan",       shiftReq: "MID", dateReq: "2/28/2023",
    jan22: { current: "PM", tp: "P" }, feb25: { current: "PM", tp: "P" }, jul03: { current: "PM", tp: "P" } },
  { name: "Cody Christensen",  shiftReq: "AM",  dateReq: "1/2/2024",
    jan22: { current: "AM", tp: "T" }, feb25: { current: "AM", tp: "T" }, jul03: null },
  { name: "Kandace Adkins",    shiftReq: "AM",  dateReq: "1/23/2024",
    jan22: { current: "AM", tp: "T" }, feb25: { current: "AM", tp: "T" }, jul03: null },
  { name: "Kaitlin Reed",      shiftReq: "AM",  dateReq: "2/28/2024",
    jan22: { current: "MID", tp: "P" }, feb25: { current: "MID", tp: "P" }, jul03: null },
  { name: "Cory Galt",         shiftReq: "AM",  dateReq: "6/10/2024",
    jan22: { current: "MID", tp: "P" }, feb25: { current: "MID", tp: "P" }, jul03: null },
  { name: "Shawnna Harbin",    shiftReq: "AM",  dateReq: "6/26/2024", isHarbin: true,
    jan22: { current: "AM", tp: "T" }, feb25: null, jul03: null },
  { name: "Hunter Samuel",     shiftReq: "MID", dateReq: "7/1/2024",
    jan22: { current: "MID", tp: "T" }, feb25: { current: "AM", tp: "T" }, jul03: null },
  { name: "Jamie Fresh",       shiftReq: "AM",  dateReq: "7/19/2024",
    jan22: { current: "AM", tp: "T" }, feb25: null, jul03: null },
  { name: "Courtney Griffith", shiftReq: "AM",  dateReq: "8/13/2024",
    jan22: { current: "AM", tp: "T" }, feb25: { current: "MID", tp: "T" }, jul03: { current: "AM", tp: "T" } },
  { name: "Jarin Bell",        shiftReq: "AM",  dateReq: "10/15/2024",
    jan22: { current: "PM", tp: "P" }, feb25: null, jul03: null },
  // Jul 03 newcomers
  { name: "Caton Woods",        shiftReq: "AM",  dateReq: "9/1/2023",
    jan22: null, feb25: null, jul03: { current: "MID", tp: "T" } },
  { name: "Leslie ArreolaPena", shiftReq: "MID", dateReq: "5/20/2025",
    jan22: null, feb25: null, jul03: { current: "PM", tp: "P" } },
  { name: "Dominic Daniels",    shiftReq: "AM",  dateReq: "6/16/2025",
    jan22: null, feb25: null, jul03: { current: "PM", tp: "P" } },
];

// Date parse helper for "m/d/yyyy".
function toTime(s: string) {
  const [m, d, y] = s.split("/").map(Number);
  return new Date(y, m - 1, d).getTime();
}
const HARBIN_REQ = toTime("6/26/2024");

export function WaitlistStatusTimeline() {
  const { open } = useExhibit();

  // Sort by request date ascending so the seniority order is the y-axis.
  const sorted = [...ROWS].sort((a, b) => toTime(a.dateReq) - toTime(b.dateReq));

  return (
    <section className="rounded-md border border-border bg-card">
      <header className="border-b border-border p-4 sm:p-5">
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Waitlist status timeline · Jan 22 – Jul 3, 2025
        </div>
        <h2 className="mt-1 font-display text-2xl tracking-tight">
          Added, removed, still gone — while juniors stay on the list.
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-foreground/75">
          Each row is a TL on the "Current TL Shifts" waitlist, ordered top-to-bottom by
          request date (most senior first). The three columns are the three preserved
          SharePoint snapshots. Harbin's row shows the arc: <span className="font-medium text-foreground">present
          and qualifying on Jan 22</span> → <span className="font-medium text-foreground">removed by Feb 25</span> →
          <span className="font-medium text-foreground"> still absent on Jul 3</span>, while juniors who requested
          AM <em>after</em> her continue to appear and "Qualify."
        </p>

        <div className="mt-4 rounded-md border border-amber-500/40 bg-amber-500/[0.08] p-3 text-[12px] leading-relaxed text-foreground/90">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300">
            Misrepresentation between Jul 3 and Jul 17, 2025
          </div>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>
              <span className="font-medium">Jul 14 ~8:52 AM</span> — Jen Roy sends Allan a 5-row "Shift Change Request" snippet that
              <em> includes</em> Harbin (LVAR · PM → AM). Allan forwards it to Harbin as proof she is on the list.
              <button onClick={() => open("EX-041")} className="ml-1 rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] hover:bg-secondary/70">EX-041</button>
            </li>
            <li>
              <span className="font-medium">Same day</span> — the controlling SharePoint waitlist (last saved Jul 3, unchanged through Jul 16) does <em>not</em> contain Harbin.
              <button onClick={() => open("EX-044")} className="ml-1 rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] hover:bg-secondary/70">EX-044</button>
            </li>
            <li>
              The snippet strips every column the real waitlist uses to process candidates: <span className="font-mono">Date Requested · Months as CAR TL · Temp/Perm · Qualifies</span>.
            </li>
            <li>
              <span className="font-medium">Jul 16</span> — Edina Markus finally re-adds Harbin, with a "Date Requested" of
              <span className="font-mono"> 7/17/2025</span> — a date that <em>post-dates</em> Harbin's own inquiry and Jen's Jul 14 snippet (chronological impossibility for a legitimate intake), and silently flips status from Temporary to Permanent without ticket or director approval.
              <button onClick={() => open("EX-048")} className="ml-1 rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] hover:bg-secondary/70">EX-048</button>
              <Link to="/timeline" hash="evt-e-2025-07-17-readded" className="ml-1 inline-flex items-center gap-0.5 rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] hover:bg-secondary/70">timeline <ArrowUpRight className="size-2.5" /></Link>
            </li>
          </ul>
        </div>

      </header>

      {/* Grid */}
      <div className="overflow-x-auto p-4 sm:p-5">
        <table className="min-w-full text-[12px]">
          <thead>
            <tr className="text-[10px] uppercase tracking-wider text-muted-foreground">
              <th className="px-2 py-2 text-left font-medium">TL (by request date)</th>
              <th className="px-2 py-2 text-left font-medium">Req.</th>
              <th className="px-2 py-2 text-left font-medium">Date req.</th>
              {SNAPS.map(s => (
                <th key={s.key} className="px-2 py-2 text-left font-medium">
                  <div className="flex items-center gap-1.5">
                    <Link
                      to="/timeline"
                      hash={`evt-${s.eventId}`}
                      className="inline-flex items-center gap-0.5 hover:text-foreground"
                      title="Jump to Master Timeline event"
                    >
                      {s.label}
                      <ArrowUpRight className="size-3 opacity-60" />
                    </Link>
                    <button
                      onClick={() => open(s.exhibit)}
                      className="rounded-sm bg-secondary px-1 py-0.5 text-[9px] hover:bg-secondary/70"
                      title={`Open ${s.exhibit}`}
                    >
                      {s.exhibit}
                    </button>
                  </div>
                </th>
              ))}
              <th className="px-2 py-2 text-left font-medium">Vs. Harbin</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sorted.map(r => {
              const junior = !r.isHarbin && toTime(r.dateReq) > HARBIN_REQ;
              return (
                <tr key={r.name} className={clsx(r.isHarbin && "bg-emerald-500/[0.08]")}>
                  <td className={clsx(
                    "whitespace-nowrap px-2 py-2",
                    r.isHarbin && "font-semibold text-emerald-700 dark:text-emerald-300",
                  )}>
                    {r.name}
                  </td>
                  <td className="px-2 py-2 font-mono text-[11px]">{r.shiftReq}</td>
                  <td className="px-2 py-2 font-mono text-[11px]">{r.dateReq}</td>
                  {SNAPS.map(s => {
                    const cell = r[s.key];
                    const isHarbinRemoval = r.isHarbin && s.key !== "jan22";
                    const targetEventId = r.isHarbin ? s.harbinEventId : s.eventId;
                    const tip = r.isHarbin
                      ? (s.key === "jan22"
                          ? "Jump to Master Timeline — Harbin present at row 6, Qualifies = Yes"
                          : s.key === "feb25"
                            ? "Jump to Master Timeline — Jen Roy removes Harbin from waitlist"
                            : "Jump to Master Timeline — Harbin still absent from waitlist")
                      : `Jump to Master Timeline — ${s.label} waitlist snapshot`;
                    return (
                      <td key={s.key} className="px-2 py-2">
                        <Link
                          to="/timeline"
                          hash={`evt-${targetEventId}`}
                          title={tip}
                          className="group inline-block"
                        >
                          {cell ? (
                            <div className="inline-flex items-center gap-1.5 rounded-sm bg-emerald-500/15 px-1.5 py-0.5 text-[10px] text-emerald-700 ring-1 ring-emerald-500/30 group-hover:ring-emerald-500/60 dark:text-emerald-300">
                              <Check className="size-3" />
                              <span className="font-mono">{cell.current}/{cell.tp}</span>
                              <span className="opacity-70">qualifies</span>
                              <ArrowUpRight className="size-3 opacity-50 group-hover:opacity-100" />
                            </div>
                          ) : (
                            <div className={clsx(
                              "inline-flex items-center gap-1.5 rounded-sm px-1.5 py-0.5 text-[10px] ring-1",
                              isHarbinRemoval
                                ? "bg-red-500/20 text-red-700 ring-red-500/40 group-hover:ring-red-500/70 dark:text-red-300"
                                : "bg-muted text-muted-foreground ring-border group-hover:ring-foreground/40",
                            )}>
                              <X className="size-3" />
                              <span>{isHarbinRemoval ? "removed" : "not on list"}</span>
                              <ArrowUpRight className="size-3 opacity-50 group-hover:opacity-100" />
                            </div>
                          )}
                        </Link>
                      </td>
                    );
                  })}
                  <td className="px-2 py-2 text-[11px]">
                    {r.isHarbin ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-300">
                        <AlertTriangle className="size-3" /> reference row
                      </span>
                    ) : junior ? (
                      <span className="rounded-sm bg-amber-500/15 px-1.5 py-0.5 text-amber-700 ring-1 ring-amber-500/30 dark:text-amber-300">
                        junior — requested after 6/26/2024
                      </span>
                    ) : (
                      <span className="text-muted-foreground">senior to Harbin</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bottom takeaway strip */}
      <div className="grid gap-3 border-t border-border bg-background/40 p-4 sm:grid-cols-3 sm:p-5">
        {SNAPS.map(s => {
          const present = sorted.filter(r => r[s.key]).length;
          const juniorsPresent = sorted.filter(
            r => r[s.key] && !r.isHarbin && toTime(r.dateReq) > HARBIN_REQ,
          ).length;
          const harbinRow = sorted.find(r => r.isHarbin)!;
          const harbinHere = !!harbinRow[s.key];
          return (
            <div key={s.key} className="rounded-md border border-border bg-card p-3">
              <div className="flex items-baseline justify-between">
                <Link
                  to="/timeline"
                  hash={`evt-${s.eventId}`}
                  className="inline-flex items-center gap-1 font-medium hover:text-accent"
                  title="Jump to Master Timeline event"
                >
                  {s.label}
                  <ArrowUpRight className="size-3 opacity-60" />
                </Link>
                <button
                  onClick={() => open(s.exhibit)}
                  className="rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] hover:bg-secondary/70"
                >
                  {s.exhibit}
                </button>
              </div>
              <div className="mt-1 text-[10px] text-muted-foreground">{s.date}</div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                <Stat label="On list" value={present} />
                <Stat label="Juniors qualifying" value={juniorsPresent} accent="amber" />
                <Stat
                  label="Harbin"
                  value={harbinHere ? "Yes" : "No"}
                  accent={harbinHere ? "emerald" : "red"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Stat({
  label, value, accent,
}: { label: string; value: string | number; accent?: "amber" | "emerald" | "red" }) {
  return (
    <div>
      <div className={clsx(
        "font-display text-xl",
        accent === "amber"   && "text-amber-700 dark:text-amber-300",
        accent === "emerald" && "text-emerald-700 dark:text-emerald-300",
        accent === "red"     && "text-red-700 dark:text-red-300",
      )}>{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
