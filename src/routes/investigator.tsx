import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/investigator")({
  head: () => ({
    meta: [
      { title: "Investigator Brief — Harbin Case File" },
      { name: "description", content: "Neutral, agency-format summary: protected activity, adverse actions, comparator evidence, open questions, and missing records." },
      { property: "og:title", content: "Investigator Brief — Harbin Case File" },
    ],
  }),
  component: BriefPage,
});

const sections: { title: string; items: string[] }[] = [
  {
    title: "Core issue",
    items: [
      "Whether schedule movement, department movement, assignment flexibility, waitlist/ticket processes, and workplace opportunities were applied consistently after protected complaints.",
      "Lashawnna Harbin remained on a PM / closing schedule despite strong performance, repeated schedule concerns, and disputed waitlist placement.",
    ],
  },
  {
    title: "Protected activity",
    items: [
      "May 7, 2024 — Prior EEOC charge.",
      "May 29, 2024 — Formal complaint regarding waitlist and retaliation sent to Greg Carfagna and others.",
      "September 19, 2025 — Sixth formal complaint to Ethics Oversight, Angie Francis, and Jen Roy.",
      "April 29, 2026 — Report to Shawn McLaughlin that Amber Laye's conduct appeared retaliatory and racially disparate.",
    ],
  },
  {
    title: "Alleged adverse actions",
    items: [
      "Continued PM closing schedule despite long-standing mid-shift request.",
      "Disputed waitlist placement; name deleted February 22, 2025 and re-added July 17, 2025 with new request date and Permanent status.",
      "April 22, 2026 public questioning during calibration meeting.",
      "April 28, 2026 team assignment change after initial movement was shown.",
      "Late January–early February 2025 'solid' rating despite strong performance.",
      "October 10, 2024 credit removed from a document Lashawnna created.",
    ],
  },
  {
    title: "Comparator evidence",
    items: [
      "Tyler Millisock — same start date and level, moved areas and schedules (Jan–Oct 2025), reportedly not on waitlist and no ticket identified.",
      "Hunter Samuel — received AM shift Lashawnna would have accepted.",
      "Marc Case — same PM shift, allowed to leave roughly one hour early; Lashawnna covered his team.",
      "Julie Cahoon — assignment-flexibility concession with Karena Lesure (May 12, 2026) despite the no-request rule applied to Lashawnna.",
      "Marissa Mascarenas — earlier/midshift schedule examples (8:00–4:30, 10:00–6:30).",
    ],
  },
  {
    title: "Respondent explanations to test",
    items: [
      "PM assignment was permanent — but records through Feb 18, 2025 show Temporary.",
      "Mid-shift waitlist ticket was submitted — no ticket has been produced; Edina Markus reportedly holds the tickets.",
      "Day shift was offered in May 2025 and declined — Lashawnna disputes ever being offered.",
      "Other TLs moved 'because of leadership, not the waitlist' (per Nov 6, 2025 HR call) — this concedes process flexibility outside the official waitlist.",
      "Todd could not move 'for business reasons' — yet Karena Lesure was moved because Julie 'specifically asked.'",
    ],
  },
  {
    title: "Evidence supporting inconsistency",
    items: [
      "EX-008 Temporary vs Permanent status inconsistency — internal records show Temporary while management represented Permanent.",
      "EX-002 October 2025 record-deletion / preservation concerns.",
      "EX-010 Comparator Movement & Flexibility Map.",
      "Nov 6, 2025 HR follow-up call transcript — HR's account turns on an offer-and-decline Lashawnna disputes; no ticket produced.",
      "Oct 3–4, 2025 read-only waitlist — showed Lashawnna had never been added as mid-shift; Nameer Khan said he was never on the waitlist either.",
    ],
  },
  {
    title: "Missing records to request",
    items: [
      "The waitlist ticket(s) Allan reportedly submitted (May 2024, July 2024, July 2025).",
      "Complete, unredacted waitlist with all fields (request date, status, history).",
      "Documentation of any offer made and declined in May 2025 — including who offered, the shift, and Lashawnna's response.",
      "Documentation/approval for the status change from Temporary to Permanent (SOW requires director approval).",
      "Team Ratios 2024 file change history (September 24, 2024 modification).",
      "April 28, 2026 movement worksheets and any edits/authorship metadata.",
      "Karena Lesure assignment-change approval and any related communications between Steve Seevers, Julie Cahoon, Amber Laye, and Michelle Swindell.",
      "Communications between Cyndy Smith and Michelle Swindell regarding the April 22 calibration meeting.",
      "Verint monitoring access logs for Lashawnna covering the FMLA period.",
    ],
  },
  {
    title: "Open questions",
    items: [
      "Why was Lashawnna's waitlist placement disputed across multiple HR cycles?",
      "What is the official process for schedule movement — and was a ticket required?",
      "Did Tyler have a ticket? Was Tyler on the waitlist?",
      "What process allowed Tyler to move? What process allowed Hunter to receive an AM shift?",
      "Why was Marc allowed early-leave flexibility while Lashawnna covered his team?",
      "Why was Julie allowed to request Karena if Lashawnna was told UMs could not request coaches?",
      "Who changed the April 28, 2026 movement?",
      "Why did Lashawnna's team assignment change after the initial movement was shown?",
      "Were deleted messages preserved?",
      "Were similarly situated leaders treated consistently?",
    ],
  },
  {
    title: "Strongest evidence points",
    items: [
      "Temporary-vs-Permanent inconsistency — Respondent's own records contradict the explanation given.",
      "July 17, 2025 reset of the request date — appears to materially harm seniority on the waitlist.",
      "Nov 6, 2025 HR call transcript — concedes that comparator movement happened 'because of leadership, not the waitlist.'",
      "May 12, 2026 Karena Lesure concession — directly contradicts the no-request rule applied to Lashawnna and Todd.",
      "April 28, 2026 unilateral movement change — 'I alone made the decision' admission.",
    ],
  },
];

function BriefPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Investigator Brief</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">Neutral summary for an investigator, attorney, mediator, or civil rights agency.</h1>
        <p className="mt-3 text-foreground/75">All items are framed as documented, reported, or alleged — and tied to attached evidence where applicable.</p>
      </div>

      <PerformanceEvaluationAnalysis />

      <div className="mt-12 space-y-10">
        {sections.map(s => (
          <section key={s.title}>
            <h2 className="font-display text-2xl tracking-tight">{s.title}</h2>
            <ul className="mt-4 space-y-2.5 border-l border-border pl-5">
              {s.items.map((it, i) => (
                <li key={i} className="text-[15px] leading-relaxed text-foreground/85">{it}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

// ── Performance Evaluation Analysis (EX-050 – EX-057) ─────────────────────
const yoyRows: { metric: string; y2023: string; y2024: string; direction: "down" | "up" | "flat" }[] = [
  { metric: "Overall rating",                y2023: "STRONG",     y2024: "SOLID",      direction: "down" },
  { metric: "Salary increase %",             y2023: "4.31%",      y2024: "3.39%",      direction: "down" },
  { metric: "Increase amount",               y2023: "$2,500.03",  y2024: "$2,049.99",  direction: "down" },
  { metric: "Individual Performance Factor", y2023: "115.02%",    y2024: "120.00%",    direction: "up" },
  { metric: "Bonus payout (% of target)",    y2023: "100.97%",    y2024: "124.36%",    direction: "up" },
];

const subRatings: { row: string; mgr: string; emp: string }[] = [
  { row: "Required Risk Goal",                 mgr: "Solid",  emp: "Strong" },
  { row: "Required DE&I Goal",                 mgr: "Strong", emp: "Outstanding" },
  { row: "Build Engaged Employees",            mgr: "Strong", emp: "Outstanding" },
  { row: "Create Efficiencies / Control Costs", mgr: "Strong", emp: "Strong" },
  { row: "Drive Effective Team Performance",   mgr: "Strong", emp: "Outstanding" },
  { row: "People Leadership (summary)",        mgr: "Strong", emp: "Outstanding" },
  { row: "We Play to Win",                     mgr: "Strong", emp: "Outstanding" },
  { row: "We Get Better Every Day",            mgr: "Solid",  emp: "Outstanding" },
  { row: "We Succeed Together",                mgr: "Solid",  emp: "Outstanding" },
];

const exhibitRefs = ["EX-049", "EX-050", "EX-051", "EX-052", "EX-053", "EX-056", "EX-057"];

function PerformanceEvaluationAnalysis() {
  return (
    <section className="mt-12 rounded-md border border-border bg-card">
      <header className="border-b border-border px-5 py-4">
        <div className="text-[11px] uppercase tracking-[0.18em] text-accent">Performance Evaluation Analysis</div>
        <h2 className="mt-1 font-display text-2xl tracking-tight">2023 → 2024 downgrade vs. underlying record</h2>
        <p className="mt-2 text-sm text-foreground/75">
          Strictly from the integrated exhibits (EX-049 – EX-057). The 2024 overall <span className="font-medium">SOLID</span> is inconsistent with every sub-rating in the same document, the bonus payout, the operational metrics, the TL scorecard, and the manager's own contemporaneous statement to HR.
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] uppercase tracking-wider">
          {exhibitRefs.map(id => (
            <Link key={id} to="/evidence" hash={`exhibit-${id}`} className="rounded-sm bg-navy px-1.5 py-0.5 text-navy-foreground hover:bg-navy/80">
              {id}
            </Link>
          ))}
        </div>
      </header>

      {/* 1. Year-over-year comp statement comparison */}
      <div className="border-b border-border px-5 py-5">
        <h3 className="font-display text-lg tracking-tight">1 · Year-over-year compensation comparison</h3>
        <p className="mt-1 text-xs text-muted-foreground">Source: EX-050 (2023 comp statement) · EX-051 (2024 comp statement)</p>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Metric</th>
                <th className="py-2 pr-4 font-medium">2023 (Rosanna Blackson)</th>
                <th className="py-2 pr-4 font-medium">2024 (Allan Glover, authored by Rosanna)</th>
                <th className="py-2 font-medium">Direction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {yoyRows.map(r => (
                <tr key={r.metric}>
                  <td className="py-2 pr-4 font-medium text-foreground">{r.metric}</td>
                  <td className="py-2 pr-4 text-foreground/85">{r.y2023}</td>
                  <td className="py-2 pr-4 text-foreground/85">{r.y2024}</td>
                  <td className="py-2">
                    <span className={
                      r.direction === "down" ? "rounded-sm bg-red-500/10 px-1.5 py-0.5 text-[11px] text-red-700 dark:text-red-300 ring-1 ring-red-500/30" :
                      r.direction === "up"   ? "rounded-sm bg-emerald-500/10 px-1.5 py-0.5 text-[11px] text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/30" :
                                               "rounded-sm bg-secondary px-1.5 py-0.5 text-[11px] text-foreground/70 ring-1 ring-border"
                    }>
                      {r.direction === "down" ? "Downgrade" : r.direction === "up" ? "Increase" : "Flat"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-foreground/80">
          A higher IPF (115.02% → <span className="font-medium">120.00%</span>) and a higher bonus payout (100.97% → <span className="font-medium">124.36%</span>) normally track with a higher, not lower, overall rating. The downgrade does not map to any specific sub-goal failure inside the document.
        </p>
      </div>

      {/* 2. Sub-rating table */}
      <div className="border-b border-border px-5 py-5">
        <h3 className="font-display text-lg tracking-tight">2 · Every sub-rating was Solid or Strong</h3>
        <p className="mt-1 text-xs text-muted-foreground">Source: EX-053 (2024 Year-End Review, 24 pp.)</p>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Sub-goal / Behavior</th>
                <th className="py-2 pr-4 font-medium">Manager (Allan)</th>
                <th className="py-2 font-medium">Employee (Harbin)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {subRatings.map(r => (
                <tr key={r.row}>
                  <td className="py-2 pr-4 text-foreground/90">{r.row}</td>
                  <td className="py-2 pr-4">
                    <span className={r.mgr === "Strong"
                      ? "rounded-sm bg-emerald-500/10 px-1.5 py-0.5 text-[11px] text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/30"
                      : "rounded-sm bg-amber-500/10 px-1.5 py-0.5 text-[11px] text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/30"
                    }>{r.mgr}</span>
                  </td>
                  <td className="py-2 text-foreground/85">{r.emp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-foreground/80">
          No failed goal. No failed behavior. Calibration / manager override is the only mechanism that explains an overall <span className="font-medium">SOLID</span> on this profile — and EX-057 confirms the scorecard system permits such overrides.
        </p>
      </div>

      {/* 3. Narrative shift */}
      <div className="border-b border-border px-5 py-5">
        <h3 className="font-display text-lg tracking-tight">3 · Narrative shifted from substance to style</h3>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div className="rounded-sm border border-border bg-background/50 p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">2023 comments (EX-052)</div>
            <p className="mt-1.5 text-sm text-foreground/85">"Strong leadership presence." Concrete contributions and metric-anchored praise.</p>
          </div>
          <div className="rounded-sm border border-border bg-background/50 p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">2024 comments (EX-053)</div>
            <p className="mt-1.5 text-sm text-foreground/85">"Power of the whirlwind," "dynamic personality," "keep your elements simple," "potential barriers." Style and tone — no failed metric cited.</p>
          </div>
        </div>
      </div>

      {/* 4. Quantified record */}
      <div className="border-b border-border px-5 py-5">
        <h3 className="font-display text-lg tracking-tight">4 · The quantified record contradicts the downgrade</h3>
        <ul className="mt-3 space-y-2 border-l border-border pl-4 text-sm text-foreground/85">
          <li><span className="font-medium">EX-056 TH Metrics (YoY)</span> — Compliance pass rate <span className="font-medium">82.61% → 89.50%</span> (RASCART) and <span className="font-medium">77.02% → 82.62%</span> (SHARBI1). Utilization up, ACW down, Direct Pays and Dialer Hours up. Maps to "Drive Effective Team Performance" and "Create Efficiencies and Control Costs" — both rated <span className="font-medium">STRONG</span> by Allan.</li>
          <li><span className="font-medium">EX-057 CAR 2025 TL Scorecard</span> — Monthly results 3.58 – 4.20; <span className="font-medium">YTD 3.93</span> on a 4.00-target scale.</li>
          <li><span className="font-medium">EX-049</span> — Allan separately told HR that Harbin was <span className="italic">"the best team lead he's got."</span></li>
        </ul>
      </div>

      {/* 5. Same author, different result */}
      <div className="border-b border-border px-5 py-5">
        <h3 className="font-display text-lg tracking-tight">5 · Same author, different result</h3>
        <p className="mt-2 text-sm text-foreground/85">
          EX-052 (2023) and EX-053 (2024) were both authored by Rosanna Blackson. The 2023 version is positive and substance-based; the 2024 version is vaguer and tone-based — under a nominally different manager-of-record (Allan Glover) but the same actual author. The constant is the author, not the manager-of-record.
        </p>
      </div>

      {/* Bottom line */}
      <div className="px-5 py-5 bg-secondary/40">
        <div className="text-[10px] uppercase tracking-wider text-accent">Bottom line the documents support</div>
        <p className="mt-1.5 text-sm text-foreground/90">
          The 2024 overall <span className="font-medium">SOLID</span> is inconsistent with (a) every sub-rating in the same document, (b) the bonus payout, (c) the TH operational metrics, (d) the TL scorecard YTD, and (e) the manager's own contemporaneous statement to HR. The downgrade is explainable only as a manager-level override of an otherwise STRONG profile, with the written justification leaning on style rather than measurable performance.
        </p>
      </div>
    </section>
  );
}
