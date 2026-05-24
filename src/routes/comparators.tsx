import { createFileRoute, Link } from "@tanstack/react-router";
import { comparators, exhibitById } from "@/data";
import { StatusBadge } from "@/components/case/Badges";
import { useExhibit } from "@/components/case/ExhibitProvider";
import { PrintPdfButton } from "@/components/case/PrintPdfButton";
import { PrintEvidenceAppendix } from "@/components/case/PrintEvidenceAppendix";
import { AlertTriangle, FileText, ExternalLink, CalendarRange } from "lucide-react";
import { clsx } from "clsx";

function monthRange(start: string, end: string): string[] {
  // start/end in "YYYY-MM" format, inclusive
  const out: string[] = [];
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end.split("-").map(Number);
  let y = sy, m = sm;
  while (y < ey || (y === ey && m <= em)) {
    out.push(`${y}-${String(m).padStart(2, "0")}`);
    m++; if (m > 12) { m = 1; y++; }
  }
  return out;
}
function monthLabel(months: string[]): string {
  if (months.length === 1) return months[0];
  return `${months[0]} → ${months[months.length - 1]}`;
}

export const Route = createFileRoute("/comparators")({
  head: () => ({
    meta: [
      { title: "Comparator Matrix — Harbin Case File" },
      { name: "description", content: "Side-by-side comparator movement, waitlist, ticket, performance, and process matrix." },
      { property: "og:title", content: "Comparator Matrix — Harbin Case File" },
    ],
  }),
  component: ComparatorsPage,
});

function ComparatorsPage() {
  const { open } = useExhibit();
  const tyler = comparators.find(c => c.id === "c-millisock");
  const ex022 = exhibitById("EX-022");
  const ex010 = exhibitById("EX-010");

  const tylerAxes: { axis: string; lashawnna: string; tyler: string; inconsistency: string; months: string[]; monthSpanLabel: string; cite: { id: string; label: string }[] }[] = [
    {
      axis: "Waitlist",
      lashawnna: "Waitlist placement treated as a barrier to movement; status disputed and used to justify keeping her on PM closing.",
      tyler: "Stated he was NOT on the waitlist for the movement — yet was still moved to PRE-D / DBC on an earlier shift.",
      inconsistency: "If waitlist gated movement for Lashawnna, it cannot have been waived silently for Tyler. The rule was applied selectively.",
      months: monthRange("2025-01", "2025-02"),
      monthSpanLabel: "Jan–Feb 2025 movement window",
      cite: [
        { id: "EX-022", label: "EX-022 · §IV.A Tyler Millisock, §IX investigative questions" },
        { id: "EX-010", label: "EX-010 · waitlist context" },
      ],
    },
    {
      axis: "Ticket / process",
      lashawnna: "Told a ticket / formal process was required before any schedule or area change could be considered.",
      tyler: "NO ticket identified for Tyler's movement based on Lashawnna's understanding — movement happened without the gating process.",
      inconsistency: "The 'ticket required' explanation given to Lashawnna is contradicted by an actual movement that occurred without one.",
      months: monthRange("2025-01", "2025-02"),
      monthSpanLabel: "Jan–Feb 2025 movement window",
      cite: [
        { id: "EX-022", label: "EX-022 · §IV.A, §IX Q on ticket inconsistency" },
      ],
    },
    {
      axis: "Performance",
      lashawnna: "Consistently high performer — frequently #1 in Consumer Banking, history of 4 ratings, strong employee surveys. Post-EEOC 'solid' rating drop documented.",
      tyler: "Lower-to-medium performer per Lashawnna's understanding — yet received the broader / earlier-shift placement.",
      inconsistency: "Weaker performer received the more favorable placement. Performance cannot be the neutral explanation for keeping Lashawnna fixed.",
      months: monthRange("2024-12", "2025-10"),
      monthSpanLabel: "Dec 2024 – Oct 2025 (post-EEOC rating window)",
      cite: [
        { id: "EX-022", label: "EX-022 · §II performance history, §IV.A" },
      ],
    },
    {
      axis: "Department movement",
      lashawnna: "Remained in same general area and 1:30 PM–10:00 PM closing across the full 15-month window.",
      tyler: "Moved across areas to PRE-D / DBC on 11:30 AM–8:00 PM — visible Feb 2025 through Oct 2025 and continuing.",
      inconsistency: "Same April 3, 2023 start date and same level eliminates tenure/seniority as a neutral explanation for the difference.",
      months: monthRange("2025-02", "2025-10"),
      monthSpanLabel: "Feb 2025 – Oct 2025 visible movement",
      cite: [
        { id: "EX-022", label: "EX-022 · §IV.B month-by-month Jan–Oct 2025, §VIII comparator chart" },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Comparator Movement Matrix</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">Who moved, who stayed.</h1>
        <p className="mt-3 text-foreground/75">A side-by-side comparison of schedule, area, waitlist, ticket, performance, and process for each comparator leader.</p>
      </div>

      {/* Tyler Millisock — dedicated evidence panel */}
      {tyler && (
        <section className="mt-10 rounded-md border border-accent/40 bg-accent/5">
          <header className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-5 py-4">
            <div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent">
                <AlertTriangle className="size-3.5" />
                Featured comparator — four-axis inconsistency
              </div>
              <h2 className="mt-1 font-display text-2xl tracking-tight">Tyler Millisock vs. Lashawnna Harbin</h2>
              <p className="mt-1 text-xs text-foreground/70">
                Same April 3, 2023 start date · same level · White · {tyler.race ? "" : ""}moved across areas to PRE-D / DBC on 11:30 AM–8:00 PM while Lashawnna remained on PM closing.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {ex022 && (
                <button
                  onClick={() => open("EX-022")}
                  className="no-print inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs hover:bg-secondary/60"
                >
                  <FileText className="size-3.5" />
                  EX-022 — Schedule Movement & Comparator Timeline
                  <ExternalLink className="size-3 text-muted-foreground" />
                </button>
              )}
              {ex010 && (
                <button
                  onClick={() => open("EX-010")}
                  className="no-print inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs hover:bg-secondary/60"
                >
                  <FileText className="size-3.5" />
                  EX-010
                  <ExternalLink className="size-3 text-muted-foreground" />
                </button>
              )}
            </div>
          </header>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {tylerAxes.map(a => (
              <article key={a.axis} className="flex flex-col gap-3 bg-card p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-base">{a.axis}</h3>
                  <span className="rounded-sm bg-accent/15 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-accent">Inconsistent</span>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Lashawnna</div>
                  <p className="mt-1 text-xs text-foreground/85">{a.lashawnna}</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Tyler</div>
                  <p className="mt-1 text-xs text-foreground/85">{a.tyler}</p>
                </div>
                <div className="rounded-sm border-l-2 border-accent bg-accent/5 px-2 py-1.5">
                  <div className="text-[10px] uppercase tracking-wider text-accent">Why it's inconsistent</div>
                  <p className="mt-0.5 text-xs text-foreground/85">{a.inconsistency}</p>
                </div>
                <div className="mt-auto flex flex-col gap-1.5">
                  {a.cite.map(c => (
                    <button
                      key={c.id + c.label}
                      onClick={() => open(c.id)}
                      className="no-print inline-flex items-center gap-1.5 self-start rounded-sm border border-border bg-background px-2 py-1 text-[11px] text-foreground/85 hover:bg-secondary/60"
                    >
                      <FileText className="size-3" />
                      {c.label}
                      <ExternalLink className="size-2.5 text-muted-foreground" />
                    </button>
                  ))}
                  <Link
                    to="/timeline"
                    hash={`months-${a.months.join(",")}`}
                    className="no-print inline-flex items-center gap-1.5 self-start rounded-sm border border-accent/50 bg-accent/10 px-2 py-1 text-[11px] text-accent hover:bg-accent/20"
                    title={`Filter Master Timeline to ${a.months.length} month${a.months.length === 1 ? "" : "s"} (${monthLabel(a.months)})`}
                  >
                    <CalendarRange className="size-3" />
                    Jump to timeline · {a.monthSpanLabel}
                    <ExternalLink className="size-2.5 opacity-70" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <footer className="border-t border-border px-5 py-3 text-xs text-foreground/75">
            <strong className="text-foreground">Takeaway:</strong> All four axes fail independently in Lashawnna's direction. Any single defense (waitlist, ticket, performance, or no-cross-area-movement) is contradicted by Tyler's documented movement — so the four together cannot be reconciled as a neutral business explanation.
          </footer>
        </section>
      )}

      <div className="mt-10 overflow-x-auto rounded-md border border-border bg-card">
        <table className="min-w-full text-sm">
          <thead className="bg-secondary text-[10px] uppercase tracking-wider text-foreground/70">
            <tr>
              {["Person", "Role / Race", "Prior area / schedule", "Later area / schedule", "Moved", "Waitlist", "Ticket", "Performance", "Why it matters", "Status", "Evidence"].map(h => (
                <th key={h} className="px-3 py-3 text-left font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {comparators.map((c, i) => (
              <tr key={c.id} className={clsx(i === 0 && "bg-accent/5")}>
                <td className="px-3 py-4 align-top">
                  <div className="font-display text-base">{c.person}</div>
                </td>
                <td className="px-3 py-4 align-top text-xs text-foreground/75">
                  {c.role}{c.race ? <div className="text-[11px] text-muted-foreground">{c.race}</div> : null}
                </td>
                <td className="px-3 py-4 align-top text-foreground/85">{c.priorArea}</td>
                <td className="px-3 py-4 align-top text-foreground/85">{c.laterArea}</td>
                <td className="px-3 py-4 align-top text-xs text-foreground/70">{c.monthMoved ?? "—"}</td>
                <td className="px-3 py-4 align-top text-xs text-foreground/70">{c.waitlist}</td>
                <td className="px-3 py-4 align-top text-xs text-foreground/70">{c.ticket}</td>
                <td className="px-3 py-4 align-top text-xs text-foreground/70">{c.performance}</td>
                <td className="px-3 py-4 align-top text-foreground/85">{c.whyItMatters}</td>
                <td className="px-3 py-4 align-top"><StatusBadge status={c.status} /></td>
                <td className="px-3 py-4 align-top text-xs text-muted-foreground">{c.evidenceRef}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-md border-l-2 border-accent bg-accent/5 px-5 py-4 text-sm text-foreground/85">
        <strong className="text-foreground">Core question:</strong> If Respondent had the ability to move leaders across areas, place leaders into earlier or midshift schedules, allow early-leave flexibility, and make assignment exceptions, why was Lashawnna kept in the same general area and PM / closing schedule despite strong performance, documented schedule requests, disputed waitlist concerns, and protected complaints?
      </div>
    </div>
  );
}
