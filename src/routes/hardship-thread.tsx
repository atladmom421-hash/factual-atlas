import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, FileText, HeartPulse, ArrowRight, DollarSign, Brain, ExternalLink } from "lucide-react";
import { eventById, exhibitById } from "@/data";
import { useExhibit } from "@/components/case/ExhibitProvider";
import { StatusBadge, CategoryBadge } from "@/components/case/Badges";

export const Route = createFileRoute("/hardship-thread")({
  head: () => ({
    meta: [
      { title: "Hardship Assistance / Financial Crisis — Harbin Case File" },
      { name: "description", content: "Nov 13 – Dec 5, 2025 hardship-assistance delay: same-day HR/leadership notice, documentation demands, escalations, eviction, and funds received only at or after the housing loss." },
      { property: "og:title", content: "Hardship Assistance / Financial Crisis — Harbin Case File" },
    ],
  }),
  component: HardshipThreadPage,
});

const STEP_IDS = [
  "e-2025-11-13-hardship-submitted",
  "e-2025-11-13-sh-hardship-meeting",
  "e-2025-11-13-hadley-contact",
  "e-2025-11-17-hadley-meeting",
  "e-2025-11-17-docs-submitted",
  "e-2025-11-24-std-filed",
  "e-2025-11-26-beck-housing-email",
  "e-2025-11-26-beck-reply",
  "e-2025-11-28-beck-followup",
  "e-2025-12-01-eviction-escalation",
  "e-2025-12-01-eviction",
  "e-2025-12-05-hardship-received",
] as const;

const HARM_CHAIN: { title: string; body: string; eventIds: string[]; exhibitIds: string[] }[] = [
  {
    title: "Workplace conditions reduce income (intermittent FMLA, unpaid hours)",
    body: "Salaried but unpaid for partial-day intermittent-FMLA hours used for a condition the doctor connected to workplace environmental/interpersonal issues. Income was already dropping before the hardship request was even filed.",
    eventIds: ["e-2025-11-24-std-filed"],
    exhibitIds: ["EX-003", "EX-021", "EX-007"],
  },
  {
    title: "Hardship request submitted within policy — same-day notice to HR + Recovery leadership",
    body: "$4,950 request (below the $5,000 exception-only tier) with attestation completed Nov 13. The same morning, an 'SH Hardship' meeting appeared on Allan Glover's calendar with Marchinko and Carfagna; Cameron Hadley emailed the same day. There is no question Respondent knew.",
    eventIds: ["e-2025-11-13-hardship-submitted", "e-2025-11-13-sh-hardship-meeting", "e-2025-11-13-hadley-contact"],
    exhibitIds: ["EX-003", "EX-021"],
  },
  {
    title: "Additional documentation required — submitted same day",
    body: "Nov 17, Cameron Hadley required late-rent / bills / >$2,000 treatment receipt / police report before he would submit the request for approval consideration. The documentation was provided the same day. Under policy, complete documentation triggers a twice-weekly funding cadence.",
    eventIds: ["e-2025-11-17-hadley-meeting", "e-2025-11-17-docs-submitted"],
    exhibitIds: ["EX-003", "EX-021"],
  },
  {
    title: "Approval stalls — written notice of imminent housing loss ignored",
    body: "Nov 26 email to Lindsay Beck warning that Lashawnna and her child could be 'permanently without housing.' Beck confirms still no approval, blaming post-merger Capital One review. Follow-up Nov 28 reiterates rent/medical urgency. No funds released.",
    eventIds: ["e-2025-11-26-beck-housing-email", "e-2025-11-26-beck-reply", "e-2025-11-28-beck-followup"],
    exhibitIds: ["EX-003", "EX-021"],
  },
  {
    title: "Family sleeps in a car for ~one week pre-eviction",
    body: "Between the failed approval and the court date, Lashawnna and her minor son were sleeping in her car. This was disclosed in writing to HR and leadership the morning of the eviction hearing.",
    eventIds: ["e-2025-12-01-eviction-escalation"],
    exhibitIds: ["EX-003", "EX-021"],
  },
  {
    title: "Eviction hearing — judge requests employer status — no decision provided",
    body: "Dec 1 escalation to Beck, Glover, Palmer, Marchinko, and Hedrick noting the 11:00 a.m. MT hearing and the judge's specific request for an employer update on whether the hardship would be approved. No written status was provided in time.",
    eventIds: ["e-2025-12-01-eviction-escalation"],
    exhibitIds: ["EX-003", "EX-021"],
  },
  {
    title: "Eviction / housing loss",
    body: "Eviction occurred Dec 1, 2025 — after Respondent had actual written notice of the emergency and after documentation had been with HR for roughly two weeks.",
    eventIds: ["e-2025-12-01-eviction"],
    exhibitIds: ["EX-003", "EX-021"],
  },
  {
    title: "Hardship funds finally released — at or just after the harm",
    body: "Funds received on/about Dec 5, 2025 — ~22 days after the initial request and ~18 days after documentation was submitted, contrary to the policy's twice-weekly cadence. Too late to prevent the eviction-related harm.",
    eventIds: ["e-2025-12-05-hardship-received"],
    exhibitIds: ["EX-003", "EX-021"],
  },
  {
    title: "Compounding leave / pay collapse → loss of health insurance",
    body: "Same window: STD still under Hartford review (Dec 3 letter); no pay since early November; eventual loss of health insurance for Lashawnna and her son; forced to end STD earlier than medically appropriate because she could not afford follow-up visits.",
    eventIds: ["e-2025-12-15-correction-warning", "e-2025-12-22-to-jan-2-nopay", "e-2026-01-insurance-loss"],
    exhibitIds: ["EX-003", "EX-007"],
  },
];

const DAMAGES: { category: string; basis: string; low: number; high: number }[] = [
  {
    category: "Eviction-related housing costs",
    basis: "Court costs, late fees, lockout/storage fees, deposits/move-in costs for replacement housing, higher post-eviction rent premium.",
    low: 6000,
    high: 18000,
  },
  {
    category: "Temporary lodging / car-living period",
    basis: "Approx. one week of pre-eviction car-living plus any short-term lodging until stable housing was re-secured.",
    low: 1500,
    high: 5000,
  },
  {
    category: "Lost wages — unpaid intermittent-FMLA hours",
    basis: "Partial-day FMLA hours not paid despite salaried status, during the months leading up to and surrounding the hardship request.",
    low: 4000,
    high: 12000,
  },
  {
    category: "Lost wages — unpaid period awaiting STD approval",
    basis: "No pay from early November 2025 through Jan 2026 STD extension; delayed approval despite submitted paperwork.",
    low: 12000,
    high: 30000,
  },
  {
    category: "Out-of-pocket medical / treatment costs",
    basis: "Includes the >$2,000 treatment receipt and additional costs incurred after loss of insurance coverage.",
    low: 3000,
    high: 10000,
  },
  {
    category: "Loss of health insurance / coverage gap",
    basis: "Value of lost employer coverage for Lashawnna and her son during the coverage gap, including COBRA-equivalent or replacement-coverage cost.",
    low: 3000,
    high: 9000,
  },
  {
    category: "Property loss tied to the vehicle break-in / housing instability period",
    basis: "Stolen property (credit cards, watches, etc.) and items lost or damaged during the displacement period (per police report referenced in Cameron Hadley call).",
    low: 2000,
    high: 8000,
  },
  {
    category: "Family separation — son living with maternal grandmother (Aug 2025 →)",
    basis: "Starting the August 2025 school year, Lashawnna's minor son had to live with his maternal grandmother because Lashawnna's denied 1:30 PM–10:00 PM closing schedule ended at the same time school let out, she lived too far from the school to reach him during her lunch period, and the child's father was unavailable (separated, working at Wilson). Grandmother handled school drop-off, pick-up, after-school care, homework help, and daily caregiving Lashawnna would otherwise have provided. Damages include reasonable value of substitute caregiving, transportation/fuel reimbursement to grandmother, and incremental household costs.",
    low: 4000,
    high: 14000,
  },
  {
    category: "Childcare / school disruption costs for minor child",
    basis: "Additional childcare, transportation, and school-related costs caused by the housing displacement and unstable living arrangements through the Nov–Dec 2025 hardship/eviction period.",
    low: 1000,
    high: 4000,
  },
];

function HardshipThreadPage() {
  const { open } = useExhibit();
  const steps = STEP_IDS.map(id => eventById(id)).filter(Boolean) as NonNullable<ReturnType<typeof eventById>>[];

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <HeartPulse className="size-3.5" /> Hardship Assistance / Financial Crisis
        </div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          Approved too late to keep the home.
        </h1>
        <p className="mt-3 text-foreground/75">
          A neutral, dated thread of the November 13 – December 5, 2025 hardship-assistance request: same-day HR and
          Recovery-leadership notice, documentation demands, repeated written escalations about imminent housing loss,
          a December 1 eviction, and funds received only on or about December 5 — at or just after the eviction-related harm.
        </p>
      </div>

      {/* Pre-context */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-md border border-border bg-card p-5">
          <div className="font-display text-base text-foreground">Pre-hardship context</div>
          <p className="mt-1 text-sm text-foreground/80">
            Although salaried, Lashawnna was not paid for partial-day intermittent-FMLA hours used for a condition her doctor
            connected to workplace environmental/interpersonal issues and reported discrimination. That reduced income during
            the same window as the medical expenses, rent arrears, and housing instability that drove the hardship request.
          </p>
          <p className="mt-2 text-sm text-foreground/70">
            Chain of harm: workplace discrimination/retaliation → worsening medical/mental-health symptoms → intermittent FMLA →
            unpaid FMLA hours / reduced income → hardship request → delayed assistance → eviction-related harm.
          </p>
        </div>
        <div className="rounded-md border border-border bg-card p-5">
          <div className="font-display text-base text-foreground">Policy benchmarks</div>
          <ul className="mt-1 space-y-1 text-sm text-foreground/80">
            <li>· Request was ~<strong>$4,950</strong> — above the $1,000 attestation threshold, below the $5,000 exception-only threshold. Attestation completed Nov 13.</li>
            <li>· Once <em>complete documentation</em> is received, funds are processed twice weekly: Mon noon CT → Wed; Wed noon CT → Fri.</li>
            <li>· Documentation submitted Nov 17, 2025. Funds received on/about Dec 5, 2025 — ~18 days later.</li>
          </ul>
        </div>
      </div>

      {/* Top callout */}
      <div className="mt-6 rounded-md border border-accent/40 bg-accent/5 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 text-accent" />
          <div className="text-sm text-foreground/85">
            <div className="font-display text-lg leading-tight text-foreground">HR and Recovery leadership had same-day notice.</div>
            <p className="mt-1">
              On the morning of Nov 13, 2025, a meeting titled <em>"SH Hardship"</em> appeared on Allan Glover's calendar with
              Susan Marchinko and Greg Carfagna. Later that day, Cameron Hadley (Lead Employee Relations Consultant) emailed to
              schedule the hardship discussion. Repeated written warnings about imminent housing loss followed through Nov 26,
              Nov 28, and the morning of the Dec 1 eviction hearing.
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <ol className="mt-12 space-y-5">
        {steps.map((evt, i) => {
          const exhibits = evt.evidenceIds.map(id => exhibitById(id)).filter(Boolean);
          const isHarm = evt.id === "e-2025-12-01-eviction" || evt.id === "e-2025-12-05-hardship-received";
          return (
            <li
              key={evt.id}
              className={`relative rounded-md border bg-card p-5 shadow-sm transition-shadow hover:shadow-md ${
                isHarm ? "border-accent/50 ring-1 ring-accent/20" : "border-border"
              }`}
            >
              <div className="flex flex-wrap items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-navy font-display text-navy-foreground">
                  {i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                    <time className="font-mono uppercase tracking-wider text-foreground/80">{evt.date}</time>
                    <span className="opacity-40">·</span>
                    <CategoryBadge category={evt.category} />
                    <StatusBadge status={evt.status} />
                  </div>
                  <h2 className="mt-1.5 font-display text-xl leading-tight tracking-tight">{evt.title}</h2>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-foreground/85">{evt.description}</p>

                  {evt.whyItMatters && (
                    <div className="mt-3 rounded-sm border-l-2 border-accent bg-accent/5 px-3 py-2 text-sm text-foreground/85">
                      <span className="font-medium text-foreground">Why this matters · </span>{evt.whyItMatters}
                    </div>
                  )}

                  {exhibits.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exhibits.map(ex => ex && (
                        <button
                          key={ex.id}
                          onClick={() => open(ex.id)}
                          className="group inline-flex max-w-full items-center gap-2 rounded-sm border border-border bg-secondary/60 px-2.5 py-1.5 text-left text-xs hover:bg-secondary"
                        >
                          <span className="rounded-sm bg-navy px-1.5 py-0.5 text-[10px] text-navy-foreground">{ex.exhibitNumber}</span>
                          <FileText className="size-3.5 text-muted-foreground" />
                          <span className="truncate font-medium text-foreground/90">{ex.fileName}</span>
                          <span className="hidden sm:inline text-muted-foreground">· {ex.fileKind.toUpperCase()}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Harm chain mapping */}
      <section className="mt-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <ArrowRight className="size-3.5" /> Harm Chain — Delay → Eviction
          </div>
          <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">From the delay to the eviction.</h2>
          <p className="mt-3 text-foreground/75">
            Each link in the chain is tied to the specific event(s) and exhibit(s) that support it. The chain is sequential —
            each step is a foreseeable consequence of the prior step and of the delay in funding a hardship request that was
            within policy and supported by submitted documentation.
          </p>
        </div>

        <ol className="mt-8 space-y-3">
          {HARM_CHAIN.map((link, i) => {
            const linkedEvents = link.eventIds.map(id => eventById(id)).filter(Boolean) as NonNullable<ReturnType<typeof eventById>>[];
            const linkedExhibits = link.exhibitIds.map(id => exhibitById(id)).filter(Boolean);
            return (
              <li key={i} className="rounded-md border border-border bg-card p-5">
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-sm text-accent">
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-lg leading-tight tracking-tight">{link.title}</div>
                    <p className="mt-1.5 text-sm text-foreground/80">{link.body}</p>
                    {linkedEvents.length > 0 && (
                      <div className="mt-3">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Timeline events · click to jump</div>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {linkedEvents.map(e => (
                            <Link
                              key={e.id}
                              to="/timeline"
                              hash={`evt-${e.id}`}
                              className="group inline-flex items-center gap-1.5 rounded-sm border border-border bg-secondary px-2 py-1 text-[11px] text-foreground/80 transition hover:border-accent/60 hover:bg-accent/10 hover:text-foreground"
                            >
                              <span className="font-mono uppercase text-foreground/55">{e.date}</span>
                              <span className="opacity-40">·</span>
                              <span className="truncate max-w-[28ch]">{e.title}</span>
                              <ExternalLink className="size-3 opacity-50 transition group-hover:opacity-100" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {linkedExhibits.length > 0 && (
                      <div className="mt-3">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Exhibits · click to open</div>
                        <div className="mt-1.5 flex flex-wrap gap-2">
                          {linkedExhibits.map(ex => ex && (
                            <button
                              key={ex.id}
                              onClick={() => open(ex.id)}
                              className="group inline-flex items-center gap-2 rounded-sm border border-border bg-secondary/60 px-2.5 py-1 text-xs hover:border-accent/60 hover:bg-accent/10"
                            >
                              <span className="rounded-sm bg-navy px-1.5 py-0.5 text-[10px] text-navy-foreground">{ex.exhibitNumber}</span>
                              <FileText className="size-3.5 text-muted-foreground group-hover:text-accent" />
                              <span className="truncate max-w-[36ch]">{ex.fileName}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Damages estimate */}
      <section className="mt-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <DollarSign className="size-3.5" /> Estimated Damages
          </div>
          <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">Economic damages — preliminary estimate.</h2>
          <p className="mt-3 text-foreground/75">
            Preliminary, good-faith estimates based on the documented hardship sequence and known consequences. Final figures
            will depend on rent ledgers, court records, medical/insurance records, pay records, and treatment receipts.
            All ranges are framed as estimated and subject to documentation.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-md border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-2 text-left font-medium">Category</th>
                <th className="px-4 py-2 text-left font-medium">Basis</th>
                <th className="px-4 py-2 text-right font-medium">Low</th>
                <th className="px-4 py-2 text-right font-medium">High</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {DAMAGES.map((d, i) => (
                <tr key={i} className="align-top">
                  <td className="px-4 py-3 font-medium text-foreground">{d.category}</td>
                  <td className="px-4 py-3 text-foreground/75">{d.basis}</td>
                  <td className="px-4 py-3 text-right font-mono text-foreground/85">${d.low.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right font-mono text-foreground/85">${d.high.toLocaleString()}</td>
                </tr>
              ))}
              <tr className="bg-secondary/40">
                <td className="px-4 py-3 font-display text-base text-foreground" colSpan={2}>Subtotal — economic</td>
                <td className="px-4 py-3 text-right font-mono font-semibold text-foreground">
                  ${DAMAGES.reduce((s, d) => s + d.low, 0).toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right font-mono font-semibold text-foreground">
                  ${DAMAGES.reduce((s, d) => s + d.high, 0).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Excludes punitive damages, attorneys' fees, costs, prejudgment interest, and any front-pay / future-loss component.
        </p>
      </section>

      {/* Mental health damages */}
      <section className="mt-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <Brain className="size-3.5" /> Emotional Distress / Mental Health
          </div>
          <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">Mental-health and emotional-distress harm.</h2>
          <p className="mt-3 text-foreground/75">
            Non-economic harm associated with the hardship delay and the resulting housing loss, while Lashawnna and her son were
            also navigating an unresolved short-term-disability claim and a workplace investigation.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-md border border-border bg-card p-5">
            <div className="font-display text-base text-foreground">Documented and reported symptoms</div>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
              <li>· Severe acute anxiety tied to the investigation process (told an investigator she felt like she was having a heart attack).</li>
              <li>· Worsening mental-health symptoms supporting intermittent FMLA and later short-term disability through Hartford.</li>
              <li>· Acute stress and humiliation from sleeping in a car with a minor child for ~one week pre-eviction.</li>
              <li>· Loss of safety/stability for a minor child — heightened distress from parental responsibility.</li>
              <li>· <strong>Forced separation from her son starting August 2025</strong> — the denied PM/closing schedule ended at the same time school let out, leaving her unable to pick him up, help with homework, or be present after school. Son had to live with maternal grandmother for the school year; father unavailable (separated, working at Wilson). Severe loss of day-to-day parenting, daily bonding, and ordinary household life with her child — directly caused by the schedule denial that comparator TLs were not subjected to.</li>
              <li>· Loss of health insurance during the same window — interruption of mental-health care, inability to afford additional doctor visits.</li>
              <li>· Reasonable fear of further retaliation after raising the race-coded "example," Verint/screen-recording, and Edward Reyes concerns.</li>
              <li>· <strong>Heightened scrutiny across multiple Operations Managers in late 2024</strong> — on Oct 4, 2024 Operations Manager Michelle Scozzari pressed Harbin on Eprob-Pervasive coaching completion in a tone Harbin contemporaneously identified in writing as "accusatory" (EX-047). This is the same window in which Allan Glover was applying race-coded scrutiny and Jen Roy was about to remove Harbin from the LVAR waitlist — corroborating a pattern of disparate managerial attention preceding the schedule-denial harm.</li>
            </ul>
          </div>
          <div className="rounded-md border border-border bg-card p-5">
            <div className="font-display text-base text-foreground">Emotional-distress range (preliminary)</div>
            <p className="mt-2 text-sm text-foreground/80">
              Conservative range for emotional distress / pain and suffering associated with the schedule-denial parenting loss,
              the hardship delay, and the eviction-related harm. Final number depends on treatment records, provider testimony,
              and jury instructions in the forum of suit.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-sm bg-secondary/60 p-3 text-center">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Low</div>
                <div className="mt-0.5 font-display text-2xl text-foreground">$100,000</div>
              </div>
              <div className="rounded-sm bg-secondary/60 p-3 text-center">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">High</div>
                <div className="mt-0.5 font-display text-2xl text-foreground">$325,000</div>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Range reflects (1) ~10 months of forced separation from a minor child caused directly by the denied schedule, (2)
              one week of homelessness with that child, (3) employer notice before the housing harm occurred, and (4) the context
              of contemporaneous protected-activity reports.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-10 rounded-md border border-border bg-secondary/40 p-5 text-sm text-foreground/80">
        <div className="font-display text-base text-foreground">Bottom line</div>
        <p className="mt-1">
          The request was within the policy's standard tier (below the $5,000 exception threshold), the attestation was completed
          on day one, the documentation Cameron Hadley requested was provided on Nov 17, and HR was given repeated written notice
          that a child was at risk of losing housing. Funds nevertheless did not arrive until on or about Dec 5, 2025 — at or just
          after the eviction-related harm. The open questions are why additional documentation was required, whether the same
          requirements were applied consistently to other employees, when this request was treated as "complete," and why the
          policy's twice-weekly funding cadence did not apply once documentation was received.
        </p>
      </div>
    </div>
  );
}
