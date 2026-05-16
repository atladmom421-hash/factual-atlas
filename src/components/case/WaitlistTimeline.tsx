import { clsx } from "clsx";
import { useExhibit } from "@/components/case/ExhibitProvider";

// Three snapshots from the SharePoint version history of the
// "Current TL Shifts" waitlist, plus the supporting chat exhibits.
// Each entry preserves the exact roster Lashawnna can prove from screenshots.

type Row = {
  name: string;
  shiftReq: string;
  dateReq: string;
  current: string;
  tempPerm: "T" | "P";
  qualifies: "Yes" | "No";
  isHarbin?: boolean;
};

type Snapshot = {
  id: string;
  date: string;
  exhibit: string;
  editors: string;
  note: string;
  rows: Row[];
  harbinPresent: boolean;
};

const SNAPSHOTS: Snapshot[] = [
  {
    id: "snap-jan-22",
    date: "Jan 22, 2025 · 9:36 AM",
    exhibit: "EX-046",
    editors: "Lilly Cano, Edina Markus",
    note: "Harbin sits at row 6 — AM requested, dated 6/26/2024, Temporary, Qualifies = Yes.",
    harbinPresent: true,
    rows: [
      { name: "Nameer Khan",       shiftReq: "MID", dateReq: "2/28/2023",  current: "PM",  tempPerm: "P", qualifies: "Yes" },
      { name: "Cody Christensen",  shiftReq: "AM",  dateReq: "1/2/2024",   current: "AM",  tempPerm: "T", qualifies: "Yes" },
      { name: "Kandace Adkins",    shiftReq: "AM",  dateReq: "1/23/2024",  current: "AM",  tempPerm: "T", qualifies: "Yes" },
      { name: "Kaitlin Reed",      shiftReq: "AM",  dateReq: "2/28/2024",  current: "MID", tempPerm: "P", qualifies: "Yes" },
      { name: "Cory Galt",         shiftReq: "AM",  dateReq: "6/10/2024",  current: "MID", tempPerm: "P", qualifies: "Yes" },
      { name: "Shawnna Harbin",    shiftReq: "AM",  dateReq: "6/26/2024",  current: "AM",  tempPerm: "T", qualifies: "Yes", isHarbin: true },
      { name: "Hunter Samuel",     shiftReq: "MID", dateReq: "7/1/2024",   current: "MID", tempPerm: "T", qualifies: "Yes" },
      { name: "Jamie Fresh",       shiftReq: "AM",  dateReq: "7/19/2024",  current: "AM",  tempPerm: "T", qualifies: "Yes" },
      { name: "Courtney Griffith", shiftReq: "AM",  dateReq: "8/13/2024",  current: "AM",  tempPerm: "T", qualifies: "Yes" },
      { name: "Jarin Bell",        shiftReq: "AM",  dateReq: "10/15/2024", current: "PM",  tempPerm: "P", qualifies: "Yes" },
    ],
  },
  {
    id: "snap-feb-25",
    date: "Feb 25, 2025 · 12:01 PM",
    exhibit: "EX-045",
    editors: "Jen Roy (5 edits this day: 10:53 AM, 12:01 PM, 12:46 PM, 7:22 PM, 7:31 PM)",
    note: "Harbin has been REMOVED. Juniors who requested AM after her remain and continue to qualify.",
    harbinPresent: false,
    rows: [
      { name: "Nameer Khan",       shiftReq: "MID", dateReq: "2/28/2023",  current: "PM",  tempPerm: "P", qualifies: "Yes" },
      { name: "Cody Christensen",  shiftReq: "AM",  dateReq: "1/2/2024",   current: "AM",  tempPerm: "T", qualifies: "Yes" },
      { name: "Kandace Adkins",    shiftReq: "AM",  dateReq: "1/23/2024",  current: "AM",  tempPerm: "T", qualifies: "Yes" },
      { name: "Kaitlin Reed",      shiftReq: "AM",  dateReq: "2/28/2024",  current: "MID", tempPerm: "P", qualifies: "Yes" },
      { name: "Cory Galt",         shiftReq: "AM",  dateReq: "6/10/2024",  current: "MID", tempPerm: "P", qualifies: "Yes" },
      { name: "Hunter Samuel",     shiftReq: "MID", dateReq: "7/1/2024",   current: "AM",  tempPerm: "T", qualifies: "Yes" },
      { name: "Courtney Griffith", shiftReq: "AM",  dateReq: "8/13/2024",  current: "MID", tempPerm: "T", qualifies: "Yes" },
    ],
  },
  {
    id: "snap-jul-03",
    date: "Jul 3, 2025 · 2:28 PM",
    exhibit: "EX-044",
    editors: "Edina Markus, Jen Roy",
    note: "Five months later — Harbin is still absent. Five juniors with later request dates all 'Qualify.'",
    harbinPresent: false,
    rows: [
      { name: "Nameer Khan",        shiftReq: "MID", dateReq: "2/28/2023",  current: "PM",  tempPerm: "P", qualifies: "Yes" },
      { name: "Courtney Griffith",  shiftReq: "AM",  dateReq: "8/13/2024",  current: "AM",  tempPerm: "T", qualifies: "Yes" },
      { name: "Caton Woods",        shiftReq: "AM",  dateReq: "9/1/2023",   current: "MID", tempPerm: "T", qualifies: "Yes" },
      { name: "Leslie ArreolaPena", shiftReq: "MID", dateReq: "5/20/2025",  current: "PM",  tempPerm: "P", qualifies: "Yes" },
      { name: "Dominic Daniels",    shiftReq: "AM",  dateReq: "6/16/2025",  current: "PM",  tempPerm: "P", qualifies: "Yes" },
    ],
  },
];

// Supporting chat / contemporaneous evidence shown to the side of the snapshots.
const SUPPORT = [
  {
    exhibit: "EX-040",
    date: "Jul 3, 2023",
    title: "Shift Changes SOW — '1 year as TL' rule (KaTrina Williams)",
    body: "\"TLs need to be in TL role for 1 year before a permanent shift adjustment can be made.\" Harbin became a TL on Apr 3, 2023 — she has satisfied this prerequisite since Apr 3, 2024 and for the entire window below.",
  },
  {
    exhibit: "EX-043",
    date: "Apr 26, 2024 · 1:56 PM",
    title: "Ryan Tafoya iMessage — 'you not currently on the MID shift list'",
    body: "Peer TL Ryan Tafoya checks in real time and tells Harbin in writing: 'I just confirmed that you not currently on the MID shift list. I can submit on your behalf.' Foundational proof that the placement Harbin was told existed was, in fact, missing.",
  },
  {
    exhibit: "EX-041",
    date: "Jul 14, 2025 · 8:52 AM",
    title: "Jen Roy → Allan Glover — 'LVAR · Shawnna Harbin · PM → AM'",
    body: "Allan asks where Harbin falls on the waitlist. Jen sends a 5-row 'Shift Change Request' table including Harbin requesting LVAR PM → AM. Eleven days after the Jul 3 snapshot in which Harbin does not appear at all.",
  },
  {
    exhibit: "EX-042",
    date: "Mid-2025 (Teams thread)",
    title: "Allan Glover acknowledgment — 'I will check'",
    body: "Harbin: 'I may have to resign … I've been requesting midshift for 2 years.' Allan: 'I understand and keep pushing.' Harbin asks about demoting to a coach for an earlier schedule. Allan: 'I can check for sure' / 'I will check.' He does not dispute the 2-year figure.",
  },
];

export function WaitlistTimeline() {
  const { open } = useExhibit();

  return (
    <section className="rounded-md border border-border bg-card">
      <header className="border-b border-border p-4 sm:p-5">
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Waitlist manipulation — controlling record
        </div>
        <h2 className="mt-1 font-display text-2xl tracking-tight">
          Three snapshots. Same file. Harbin disappears.
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-foreground/75">
          The "Current TL Shifts" SharePoint file is the single record that decides who gets an earlier
          schedule. Below are the three preserved versions of its <span className="font-medium text-foreground">Current
          Waitlist</span> table — January 22, 2025; February 25, 2025; and July 3, 2025 — alongside the
          contemporaneous chats that frame them. Between January and February, after five same-day edits by
          Jen Roy, Harbin's row vanishes. Five months later she is still gone, while juniors with later
          request dates continue to "Qualify."
        </p>
      </header>

      <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[2fr_1fr]">
        {/* LEFT — three snapshots stacked */}
        <div className="space-y-4">
          {SNAPSHOTS.map((snap, i) => (
            <div key={snap.id} className="rounded-md border border-border bg-background/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-3 py-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] text-muted-foreground">#{i + 1}</span>
                  <span className="font-medium">{snap.date}</span>
                  <button
                    onClick={() => open(snap.exhibit)}
                    className="rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] hover:bg-secondary/70"
                    title={`Open ${snap.exhibit}`}
                  >
                    {snap.exhibit}
                  </button>
                  <span className={clsx(
                    "rounded-full px-2 py-0.5 text-[10px] ring-1",
                    snap.harbinPresent
                      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 ring-emerald-500/30"
                      : "bg-red-500/15 text-red-700 dark:text-red-300 ring-red-500/30",
                  )}>
                    {snap.harbinPresent ? "Harbin on list" : "Harbin absent"}
                  </span>
                </div>
                <div className="text-[11px] text-muted-foreground">Editors: {snap.editors}</div>
              </div>
              <div className="px-3 pt-2 text-[11px] text-foreground/75">{snap.note}</div>
              <div className="overflow-x-auto p-3">
                <table className="min-w-full text-[11px]">
                  <thead className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-2 py-1 text-left font-medium">TL</th>
                      <th className="px-2 py-1 text-left font-medium">Shift Req.</th>
                      <th className="px-2 py-1 text-left font-medium">Date Req.</th>
                      <th className="px-2 py-1 text-left font-medium">Current</th>
                      <th className="px-2 py-1 text-left font-medium">T/P</th>
                      <th className="px-2 py-1 text-left font-medium">Qualifies</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {snap.rows.map(r => (
                      <tr key={r.name} className={clsx(r.isHarbin && "bg-emerald-500/[0.08]")}>
                        <td className={clsx("px-2 py-1", r.isHarbin && "font-semibold text-emerald-700 dark:text-emerald-300")}>
                          {r.name}
                        </td>
                        <td className="px-2 py-1 font-mono">{r.shiftReq}</td>
                        <td className="px-2 py-1 font-mono">{r.dateReq}</td>
                        <td className="px-2 py-1 font-mono">{r.current}</td>
                        <td className="px-2 py-1 font-mono">{r.tempPerm}</td>
                        <td className="px-2 py-1">{r.qualifies}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — supporting evidence */}
        <aside className="space-y-3">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Supporting contemporaneous record
          </div>
          {SUPPORT.map(s => (
            <div key={s.exhibit} className="rounded-md border border-border bg-background/40 p-3">
              <div className="flex items-baseline justify-between gap-2">
                <div className="text-[11px] font-medium">{s.title}</div>
                <button
                  onClick={() => open(s.exhibit)}
                  className="rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] hover:bg-secondary/70"
                  title={`Open ${s.exhibit}`}
                >
                  {s.exhibit}
                </button>
              </div>
              <div className="mt-0.5 text-[10px] text-muted-foreground">{s.date}</div>
              <p className="mt-2 text-[11px] leading-relaxed text-foreground/80">{s.body}</p>
            </div>
          ))}
        </aside>
      </div>

      <footer className="border-t border-border px-4 py-3 text-[11px] text-muted-foreground">
        All snapshots are saved versions from the SharePoint Version History of the same file
        ("Current TL Shifts.xlsx"). Editor attributions are taken directly from that history.
      </footer>
    </section>
  );
}
