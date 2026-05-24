import { createFileRoute } from "@tanstack/react-router";
import { exhibits } from "@/data";
import { useExhibit } from "@/components/case/ExhibitProvider";

export const Route = createFileRoute("/performance")({
  head: () => ({
    meta: [
      { title: "Performance Evaluations — Harbin Case File" },
      { name: "description", content: "Year-over-year performance evaluations, sub-ratings, bonus payouts, and the metric record contradicting the 2024 downgrade." },
      { property: "og:title", content: "Performance Evaluations — Harbin Case File" },
    ],
  }),
  component: PerformancePage,
});

const PERF_EXHIBIT_IDS = ["EX-050", "EX-051", "EX-052", "EX-053", "EX-054", "EX-056", "EX-057"];

const compRows = [
  { year: "2023", manager: "Rosanna Blackson", overall: "STRONG", self: "OUTSTANDING", bonus: "—", payout: "—", exhibits: ["EX-050", "EX-052", "EX-054"] },
  { year: "2024", manager: "Allan Glover", overall: "SOLID", self: "OUTSTANDING", bonus: "Higher target", payout: "124.36% of target", exhibits: ["EX-051", "EX-053"] },
];

const subRatings = [
  { goal: "Required Risk Goal", y2023: "SOLID", y2024: "SOLID", self2024: "STRONG" },
  { goal: "Required DE&I Goal", y2023: "SOLID", y2024: "STRONG", self2024: "OUTSTANDING" },
  { goal: "Build Culture / Engaged Employees", y2023: "—", y2024: "STRONG", self2024: "OUTSTANDING" },
  { goal: "Create Efficiencies / Control Costs", y2023: "—", y2024: "STRONG", self2024: "STRONG" },
  { goal: "Drive Effective Team Performance", y2023: "SOLID", y2024: "STRONG", self2024: "OUTSTANDING" },
  { goal: "We Play to Win", y2023: "—", y2024: "STRONG", self2024: "OUTSTANDING" },
  { goal: "We Get Better Every Day", y2023: "—", y2024: "SOLID", self2024: "OUTSTANDING" },
  { goal: "We Succeed Together", y2023: "—", y2024: "SOLID", self2024: "OUTSTANDING" },
];

const metricRows = [
  { metric: "Compliance Pass (RASCART)", y2023: "82.61%", y2024: "89.50%", direction: "up" },
  { metric: "Compliance Pass (SHARBI1)", y2023: "77.02%", y2024: "82.62%", direction: "up" },
  { metric: "Utilization (RASCART)", y2023: "79.60%", y2024: "81.81%", direction: "up" },
  { metric: "Utilization (SHARBI1)", y2023: "78.49%", y2024: "80.31%", direction: "up" },
  { metric: "ACW % (RASCART) — lower is better", y2023: "15.86%", y2024: "12.27%", direction: "up" },
  { metric: "ACW % (SHARBI1) — lower is better", y2023: "17.51%", y2024: "14.79%", direction: "up" },
  { metric: "Direct Pays (RASCART)", y2023: "7,052", y2024: "12,473", direction: "up" },
  { metric: "Direct Pays (SHARBI1)", y2023: "4,873", y2024: "9,113", direction: "up" },
];

const scorecard = [
  { m: "Nov", v: 3.58 }, { m: "Dec", v: 3.64 }, { m: "Jan", v: 3.93 },
  { m: "Feb", v: 4.20 }, { m: "Mar", v: 4.18 }, { m: "Apr", v: 3.90 },
  { m: "May", v: 3.85 }, { m: "Jun", v: 4.15 }, { m: "Jul", v: 3.98 },
];

function RatingBadge({ value }: { value: string }) {
  const tone =
    value === "STRONG" || value === "OUTSTANDING" ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/40" :
    value === "SOLID" ? "bg-amber-500/15 text-amber-300 border-amber-500/40" :
    "bg-muted/30 text-muted-foreground border-border";
  return <span className={`inline-flex rounded-sm border px-2 py-0.5 font-mono text-[11px] tracking-wide ${tone}`}>{value}</span>;
}

function ExhibitChip({ id }: { id: string }) {
  const { open } = useExhibit();
  return (
    <button
      onClick={() => open(id)}
      className="rounded-sm border border-border bg-card px-2 py-0.5 font-mono text-[10px] text-foreground/80 hover:bg-accent hover:text-accent-foreground"
    >
      {id}
    </button>
  );
}

function PerformancePage() {
  const { open } = useExhibit();
  const perfExhibits = exhibits.filter(e => PERF_EXHIBIT_IDS.includes(e.id));

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-10">
      <header className="border-b-2 border-border pb-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Section 09 · Performance Record</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Performance Evaluations</h1>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          Year-over-year evaluations, manager vs. employee sub-ratings, objective team metrics, and the
          CAR 2025 TL Scorecard — assembled to test whether the 2024 "Solid" downgrade is supported by the record.
        </p>
      </header>

      {/* YoY snapshot */}
      <section className="mt-8">
        <h2 className="font-display text-2xl">Year-over-year snapshot</h2>
        <div className="mt-4 overflow-x-auto rounded-sm border-2 border-border">
          <table className="w-full text-sm">
            <thead className="bg-[color:var(--hud-panel)] text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2">Year</th>
                <th className="px-3 py-2">Manager</th>
                <th className="px-3 py-2">Overall (Mgr)</th>
                <th className="px-3 py-2">Self-rating</th>
                <th className="px-3 py-2">Bonus payout</th>
                <th className="px-3 py-2">Exhibits</th>
              </tr>
            </thead>
            <tbody>
              {compRows.map(r => (
                <tr key={r.year} className="border-t border-border align-top">
                  <td className="px-3 py-3 font-mono">{r.year}</td>
                  <td className="px-3 py-3">{r.manager}</td>
                  <td className="px-3 py-3"><RatingBadge value={r.overall} /></td>
                  <td className="px-3 py-3"><RatingBadge value={r.self} /></td>
                  <td className="px-3 py-3 font-mono text-xs">{r.payout}</td>
                  <td className="px-3 py-3"><div className="flex flex-wrap gap-1">{r.exhibits.map(x => <ExhibitChip key={x} id={x} />)}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Overall rating dropped one step (STRONG → SOLID) while bonus payout reached <span className="text-foreground font-medium">124.36% of target</span> —
          an internal contradiction: pay reflected performance, the headline label did not.
        </p>
      </section>

      {/* Sub-ratings */}
      <section className="mt-10">
        <h2 className="font-display text-2xl">Sub-ratings — manager vs. employee (2024)</h2>
        <p className="mt-2 text-sm text-muted-foreground">Every individual goal received SOLID or STRONG. Not a single goal was rated below SOLID, yet the overall headline was downgraded.</p>
        <div className="mt-4 overflow-x-auto rounded-sm border-2 border-border">
          <table className="w-full text-sm">
            <thead className="bg-[color:var(--hud-panel)] text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2">Goal / Behavior</th>
                <th className="px-3 py-2">2023 (Blackson)</th>
                <th className="px-3 py-2">2024 (Glover)</th>
                <th className="px-3 py-2">2024 Self</th>
              </tr>
            </thead>
            <tbody>
              {subRatings.map(r => (
                <tr key={r.goal} className="border-t border-border">
                  <td className="px-3 py-2">{r.goal}</td>
                  <td className="px-3 py-2"><RatingBadge value={r.y2023} /></td>
                  <td className="px-3 py-2"><RatingBadge value={r.y2024} /></td>
                  <td className="px-3 py-2"><RatingBadge value={r.self2024} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Objective metrics */}
      <section className="mt-10">
        <h2 className="font-display text-2xl">Objective team metrics (EX-056)</h2>
        <p className="mt-2 text-sm text-muted-foreground">Discover's own TH Metrics tool — same teams, year over year. Every key metric Allan flagged as a "continued focus area" improved.</p>
        <div className="mt-4 overflow-x-auto rounded-sm border-2 border-border">
          <table className="w-full text-sm">
            <thead className="bg-[color:var(--hud-panel)] text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2">Metric</th>
                <th className="px-3 py-2">2023</th>
                <th className="px-3 py-2">2024</th>
                <th className="px-3 py-2">Δ</th>
              </tr>
            </thead>
            <tbody>
              {metricRows.map(r => (
                <tr key={r.metric} className="border-t border-border">
                  <td className="px-3 py-2">{r.metric}</td>
                  <td className="px-3 py-2 font-mono">{r.y2023}</td>
                  <td className="px-3 py-2 font-mono">{r.y2024}</td>
                  <td className="px-3 py-2"><span className="text-emerald-400">▲ improved</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Scorecard */}
      <section className="mt-10">
        <h2 className="font-display text-2xl">CAR 2025 TL Scorecard — monthly overall (EX-057)</h2>
        <p className="mt-2 text-sm text-muted-foreground">YTD 3.93 · Q1 3.72 · Q2 4.09 · Q3 3.99. The scorecard explicitly notes data-driven results can be overridden by the direct manager in calibration.</p>
        <div className="mt-4 rounded-sm border-2 border-border bg-[color:var(--hud-panel)] p-4">
          <div className="grid grid-cols-9 gap-2">
            {scorecard.map(s => {
              const pct = ((s.v - 3) / 2) * 100;
              return (
                <div key={s.m} className="flex flex-col items-center gap-1">
                  <div className="flex h-32 w-full items-end rounded-sm bg-background/40">
                    <div className="w-full rounded-sm bg-gradient-to-t from-cyan-500/60 to-cyan-300/80" style={{ height: `${pct}%` }} />
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">{s.m}</div>
                  <div className="font-mono text-[11px] text-foreground">{s.v.toFixed(2)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="mt-10">
        <h2 className="font-display text-2xl">Six-point analysis</h2>
        <ol className="mt-4 space-y-3 text-sm">
          {[
            ["Internal contradiction", "Higher bonus payout (124.36%) in 2024 despite a lower headline rating than 2023."],
            ["Uniformly positive sub-ratings", "Every 2024 goal and behavior was SOLID or STRONG — no failed metric supports a downgrade."],
            ["Substance → style shift", "2023 narrative cited specific deliverables and metrics; 2024 narrative pivoted to vague style commentary ('power of the whirlwind', 'keep your elements simple')."],
            ["Quantified record", "TH Metrics show YoY improvement in Compliance, Utilization, ACW, and Direct Pays for both RASCART and SHARBI1."],
            ["Self-evaluation gap", "Manager's narrative omitted the specific accomplishments documented in Harbin's self-review."],
            ["Manager admission", "Allan separately told HR Harbin was 'the best team lead he's got' (EX-049), contradicting any performance-based defense of the downgrade."],
          ].map(([h, b], i) => (
            <li key={h} className="rounded-sm border-2 border-border bg-card p-4">
              <div className="font-mono text-[11px] text-muted-foreground">0{i + 1}</div>
              <div className="mt-1 font-display text-lg">{h}</div>
              <div className="mt-1 text-muted-foreground">{b}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* Source exhibits */}
      <section className="mt-10">
        <h2 className="font-display text-2xl">Source exhibits</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {perfExhibits.map(ex => (
            <button
              key={ex.id}
              onClick={() => open(ex.id)}
              className="rounded-sm border-2 border-border bg-card p-4 text-left hover:border-foreground/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{ex.exhibitNumber}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{ex.fileKind}</span>
              </div>
              <div className="mt-1 font-medium">{ex.fileName}</div>
              <div className="mt-1 line-clamp-3 text-xs text-muted-foreground">{ex.summary}</div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
