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
  { year: "2023", manager: "Rosanna Blackson (author & admin)", overall: "STRONG", self: "OUTSTANDING", bonus: "—", payout: "—", exhibits: ["EX-050", "EX-052", "EX-054"] },
  { year: "2024", manager: "Rosanna Blackson (author) · Allan Glover (admin)", overall: "SOLID", self: "OUTSTANDING", bonus: "Higher target", payout: "124.36% of target", exhibits: ["EX-051", "EX-053"] },
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

/** Render evidence image thumbnails inline next to a point. */
function EvidenceThumbs({
  items,
  size = "md",
}: {
  items: { exhibitId: string; src: string; caption?: string }[];
  size?: "sm" | "md";
}) {
  const { open } = useExhibit();
  const dim = size === "sm" ? "h-20 w-28" : "h-32 w-44";
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it, i) => (
        <button
          key={i}
          onClick={() => open(it.exhibitId)}
          className={`group relative overflow-hidden rounded-sm border-2 border-border bg-black/40 ${dim} hover:border-cyan-400/60`}
          title={`${it.exhibitId}${it.caption ? " — " + it.caption : ""}`}
        >
          <img src={it.src} alt={it.caption || it.exhibitId} className="h-full w-full object-cover object-top transition group-hover:scale-105" loading="lazy" />
          <span className="absolute bottom-0 left-0 right-0 bg-black/70 px-1 py-0.5 text-left font-mono text-[9px] text-cyan-200">
            {it.exhibitId}{it.caption ? ` · ${it.caption}` : ""}
          </span>
        </button>
      ))}
    </div>
  );
}


function PerformancePage() {
  const { open } = useExhibit();
  const perfExhibits = exhibits.filter(e => PERF_EXHIBIT_IDS.includes(e.id));

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-10">
      <header className="border-b-2 border-border pb-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Section 09 · Performance</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Performance Reviews</h1>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          Two years of reviews, the manager's scores vs. Harbin's scores, the team numbers, and the
          monthly scorecard — does the 2024 rating drop match what the record actually shows?
        </p>
      </header>

      {/* YoY snapshot */}
      <section className="mt-8">
        <h2 className="font-display text-2xl">2023 vs. 2024 at a glance</h2>
        <div className="mt-4 overflow-x-auto rounded-sm border-2 border-border">
          <table className="w-full text-sm">
            <thead className="bg-[color:var(--hud-panel)] text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2">Year</th>
                <th className="px-3 py-2">Who wrote it</th>
                <th className="px-3 py-2">Manager's score</th>
                <th className="px-3 py-2">Harbin's score</th>
                <th className="px-3 py-2">Bonus paid</th>
                <th className="px-3 py-2">Proof</th>
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
          The rating dropped one level (Strong → Solid), but the bonus paid out at <span className="text-foreground font-medium">124.36% of target</span>.
          The paycheck says she performed; the label says she didn't.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-sm border-2 border-emerald-500/30 bg-emerald-500/5 p-3">
            <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-emerald-300">2023 · Strong · Written by Rosanna</div>
            <EvidenceThumbs items={[
              { exhibitId: "EX-050", src: "/exhibits/EX-050-2023-comp-statement-strong.jpeg", caption: "Comp statement" },
              { exhibitId: "EX-052", src: "/exhibits/EX-052-2023-year-end-review.jpeg", caption: "Year-end p1" },
              { exhibitId: "EX-052", src: "/exhibits/EX-052-2023-review-p9-overall-full.jpeg", caption: "Overall" },
              { exhibitId: "EX-054", src: "/exhibits/EX-054-2023-q2-checkin.jpeg", caption: "Q2 check-in" },
            ]} />
          </div>
          <div className="rounded-sm border-2 border-amber-500/30 bg-amber-500/5 p-3">
            <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-amber-300">2024 · Solid · Written by Rosanna · Delivered by Allan</div>
            <EvidenceThumbs items={[
              { exhibitId: "EX-051", src: "/exhibits/EX-051-2024-comp-statement-solid.jpeg", caption: "Comp · 124.36%" },
              { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p1-overall.jpeg", caption: "Overall p1" },
              { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p24-overall-full.jpeg", caption: "Overall full" },
            ]} />
          </div>
        </div>
      </section>

      {/* Peer comparator: Ryan Descarte */}
      <section className="mt-10">
        <h2 className="font-display text-2xl">Peer comparator · Ryan Descarte</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ryan Descarte is another Unit Manager promoted into the role at the same time as Harbin.
          His operational numbers track closely with hers — but his 2024 overall rating came in at
          <span className="text-foreground font-medium"> Outstanding (5)</span> while Harbin received
          <span className="text-foreground font-medium"> Solid (3)</span>.
        </p>
        <div className="mt-4 overflow-x-auto rounded-sm border-2 border-border">
          <table className="w-full text-sm">
            <thead className="bg-[color:var(--hud-panel)] text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2">&nbsp;</th>
                <th className="px-3 py-2">Harbin Quintero</th>
                <th className="px-3 py-2">Ryan Descarte</th>
              </tr>
            </thead>
            <tbody className="text-foreground">
              <tr className="border-t border-border"><td className="px-3 py-2 text-muted-foreground">Role</td><td className="px-3 py-2">Unit Manager (TL)</td><td className="px-3 py-2">Unit Manager (TL)</td></tr>
              <tr className="border-t border-border"><td className="px-3 py-2 text-muted-foreground">Promoted into role</td><td className="px-3 py-2">Same cycle</td><td className="px-3 py-2">Same cycle</td></tr>
              <tr className="border-t border-border"><td className="px-3 py-2 text-muted-foreground">Operational numbers</td><td className="px-3 py-2">Comparable</td><td className="px-3 py-2">Comparable</td></tr>
              <tr className="border-t border-border bg-amber-500/5"><td className="px-3 py-2 text-muted-foreground">2024 overall rating</td><td className="px-3 py-2"><RatingBadge value="SOLID" /> <span className="ml-1 text-xs text-muted-foreground">(3)</span></td><td className="px-3 py-2"><RatingBadge value="OUTSTANDING" /> <span className="ml-1 text-xs text-muted-foreground">(5)</span></td></tr>
              <tr className="border-t border-border"><td className="px-3 py-2 text-muted-foreground">Filed EEOC charge?</td><td className="px-3 py-2 text-amber-200">Yes — May 2024</td><td className="px-3 py-2">No</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Same role, same start, similar metrics — two-step rating gap. The one variable that differs is Harbin's protected activity.
        </p>
      </section>




      {/* Sub-ratings */}
      <section className="mt-10">
        <h2 className="font-display text-2xl">Goal-by-goal scores (2024)</h2>
        <p className="mt-2 text-sm text-muted-foreground">Every single goal was scored Solid or Strong. None were Needs Improvement. So why was the overall rating lowered?</p>
        <div className="mt-3 rounded-sm border-2 border-rose-500/40 bg-rose-500/5 p-3 text-xs text-rose-100">
          <span className="font-mono uppercase tracking-wider text-rose-300">Who scored it · </span>
          The 2024 review was <span className="font-semibold">written by Rosanna Blackson</span> — the same manager Harbin first complained about —
          and just delivered by Allan Glover. When Harbin asked Allan why she was downgraded after a strong year, he said
          <span className="font-semibold"> Rosanna set the rating</span> and he couldn't explain it.
        </div>
        <div className="mt-3 grid gap-2 md:grid-cols-3 text-[11px]">
          <div className="rounded-sm border border-border bg-card p-2"><span className="font-mono text-muted-foreground">Wrote the review</span><div className="text-foreground">Rosanna Blackson</div></div>
          <div className="rounded-sm border border-border bg-card p-2"><span className="font-mono text-muted-foreground">Delivered the review</span><div className="text-foreground">Allan Glover</div></div>
          <div className="rounded-sm border border-border bg-card p-2"><span className="font-mono text-muted-foreground">Allan's reason</span><div className="text-foreground">"Rosanna did this" — no further answer</div></div>
        </div>
        <div className="mt-4 overflow-x-auto rounded-sm border-2 border-border">
          <table className="w-full text-sm">
            <thead className="bg-[color:var(--hud-panel)] text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2">Goal</th>
                <th className="px-3 py-2">2023 score</th>
                <th className="px-3 py-2">2024 score</th>
                <th className="px-3 py-2">Harbin's score</th>
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
        <div className="mt-4 rounded-sm border-2 border-border bg-card p-3">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Screenshots of every goal page (EX-053)</div>
          <EvidenceThumbs size="sm" items={[
            { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p2-risk.jpeg", caption: "Risk" },
            { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p3-dei.jpeg", caption: "DE&I" },
            { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p4-results.jpeg", caption: "Results" },
            { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p5-people.jpeg", caption: "People" },
            { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p6-play-to-win.jpeg", caption: "Play to Win" },
            { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p7-get-better.jpeg", caption: "Get Better" },
            { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p8-succeed-together.jpeg", caption: "Succeed Together" },
            { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p15-team-perf-advance.jpeg", caption: "Team Perf" },
            { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p16-engaged-employees.jpeg", caption: "Engagement" },
          ]} />
        </div>
      </section>


      {/* Objective metrics */}
      <section className="mt-10">
        <h2 className="font-display text-2xl">Team numbers — 2023 vs. 2024 (EX-056)</h2>
        <p className="mt-2 text-sm text-muted-foreground">These are Discover's own team metrics. Every number Allan called a "focus area" actually got better year over year.</p>
        <div className="mt-4 overflow-x-auto rounded-sm border-2 border-border">
          <table className="w-full text-sm">
            <thead className="bg-[color:var(--hud-panel)] text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2">Metric</th>
                <th className="px-3 py-2">2023</th>
                <th className="px-3 py-2">2024</th>
                <th className="px-3 py-2">Direction</th>
              </tr>
            </thead>
            <tbody>
              {metricRows.map(r => (
                <tr key={r.metric} className="border-t border-border">
                  <td className="px-3 py-2">{r.metric}</td>
                  <td className="px-3 py-2 font-mono">{r.y2023}</td>
                  <td className="px-3 py-2 font-mono">{r.y2024}</td>
                  <td className="px-3 py-2"><span className="text-emerald-400">▲ better</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-sm border-2 border-border bg-card p-3">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">TH Metrics screenshots (EX-056)</div>
          <EvidenceThumbs items={[
            { exhibitId: "EX-056", src: "/exhibits/EX-056-th-metrics-2023-rascart-sharbi1.jpeg", caption: "2023 RASCART/SHARBI1" },
            { exhibitId: "EX-056", src: "/exhibits/EX-056-th-metrics-rascart-2024.jpeg", caption: "2024 RASCART" },
            { exhibitId: "EX-056", src: "/exhibits/EX-056-th-metrics-sharbi1-2024.jpeg", caption: "2024 SHARBI1" },
          ]} />
        </div>
      </section>


      {/* Scorecard */}
      <section className="mt-10">
        <h2 className="font-display text-2xl">2025 monthly scorecard (EX-057)</h2>
        <p className="mt-2 text-sm text-muted-foreground">Year-to-date 3.93 out of 5. Scores stayed strong every month. The scorecard itself says a manager can override these numbers during calibration — which is what happened here.</p>
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
        <div className="mt-4 rounded-sm border-2 border-border bg-card p-3">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Scorecard screenshots (EX-057)</div>
          <EvidenceThumbs items={[
            { exhibitId: "EX-057", src: "/exhibits/EX-057-car-2025-tl-scorecard-overview.jpeg", caption: "Overview" },
            { exhibitId: "EX-057", src: "/exhibits/EX-057-car-2025-tl-scorecard-detail.jpeg", caption: "Detail" },
          ]} />
        </div>
      </section>

      {/* Analysis */}
      <section className="mt-10">
        <h2 className="font-display text-2xl">What the record actually shows</h2>
        <ol className="mt-4 space-y-3 text-sm">
          {([
            { h: "The paycheck and the label don't match", b: "She was paid 124.36% of target in 2024 — above target — but the rating dropped from Strong to Solid. You don't pay someone above target for poor performance.",
              thumbs: [
                { exhibitId: "EX-050", src: "/exhibits/EX-050-2023-comp-statement-strong.jpeg", caption: "2023 Strong" },
                { exhibitId: "EX-051", src: "/exhibits/EX-051-2024-comp-statement-solid.jpeg", caption: "2024 · 124.36%" },
              ] },
            { h: "Every goal was Solid or Strong", b: "Not a single goal was rated below Solid. There's no failed goal to point to that would explain the overall downgrade.",
              thumbs: [
                { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p2-risk.jpeg", caption: "Risk · Solid" },
                { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p3-dei.jpeg", caption: "DE&I · Strong" },
                { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p4-results.jpeg", caption: "Results · Strong" },
              ] },
            { h: "Real numbers replaced with vague comments", b: "The 2023 review listed actual results and numbers. The 2024 review switched to vague phrases like 'power of the whirlwind' and 'keep your elements simple' — no specifics.",
              thumbs: [
                { exhibitId: "EX-052", src: "/exhibits/EX-052-2023-review-p4-results.jpeg", caption: "2023 — specifics" },
                { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p24-overall-full.jpeg", caption: "2024 — vague" },
                { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p9-development.jpeg", caption: "Development" },
              ] },
            { h: "The team numbers went up", b: "Compliance, Utilization, ACW, and Direct Pays all improved year over year for both teams. The data says she did better, not worse.",
              thumbs: [
                { exhibitId: "EX-056", src: "/exhibits/EX-056-th-metrics-2023-rascart-sharbi1.jpeg", caption: "2023 baseline" },
                { exhibitId: "EX-056", src: "/exhibits/EX-056-th-metrics-rascart-2024.jpeg", caption: "2024 RASCART" },
                { exhibitId: "EX-056", src: "/exhibits/EX-056-th-metrics-sharbi1-2024.jpeg", caption: "2024 SHARBI1" },
                { exhibitId: "EX-057", src: "/exhibits/EX-057-car-2025-tl-scorecard-overview.jpeg", caption: "Scorecard 3.93" },
              ] },
            { h: "Her self-review wasn't reflected", b: "Specific wins Harbin listed in her own self-review never made it into the manager's narrative.",
              thumbs: [
                { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p19-results-full.jpeg", caption: "Self vs. manager" },
                { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p18-dei-full.jpeg", caption: "DE&I full" },
                { exhibitId: "EX-054", src: "/exhibits/EX-054-2023-q3-checkin.jpeg", caption: "Q3 check-in" },
              ] },
            { h: "Allan privately said she was the best", b: "In a separate HR conversation (EX-049), Allan told HR Harbin was 'the best team lead he's got.' That doesn't match the rating he delivered.",
              thumbs: [] },
            { h: "The person being complained about wrote the review", b: "Rosanna — the same manager Harbin first complained about — wrote the 2024 review. Allan only delivered it. When Harbin asked Allan why she was downgraded, he said Rosanna set the rating and he couldn't explain why. The subject of a complaint should not be the person scoring the complainant.",
              thumbs: [
                { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p1-overall.jpeg", caption: "2024 overall" },
                { exhibitId: "EX-053", src: "/exhibits/EX-053-2024-review-p24-overall-full.jpeg", caption: "Final narrative" },
              ] },
          ]).map((row, i) => (
            <li key={row.h} className="rounded-sm border-2 border-border bg-card p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="md:max-w-xl">
                  <div className="font-mono text-[11px] text-muted-foreground">0{i + 1}</div>
                  <div className="mt-1 font-display text-lg">{row.h}</div>
                  <div className="mt-1 text-muted-foreground">{row.b}</div>
                </div>
                {row.thumbs.length > 0 && (
                  <div className="md:flex-shrink-0">
                    <EvidenceThumbs size="sm" items={row.thumbs} />
                  </div>
                )}
              </div>
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
