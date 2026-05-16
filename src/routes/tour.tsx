import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, AlertTriangle, Users, Calendar, FolderOpen, ExternalLink, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";

export const Route = createFileRoute("/tour")({
  head: () => ({
    meta: [
      { title: "Read this in 5 minutes — Harbin Case File" },
      { name: "description", content: "A five-step guided tour of the strongest evidence: brief, top inconsistencies, Tyler comparator, schedule pattern, and exhibit index." },
      { property: "og:title", content: "Read this in 5 minutes — Harbin Case File" },
      { property: "og:description", content: "A five-step guided tour through the strongest evidence in the Harbin matter." },
    ],
  }),
  component: TourPage,
});

type Step = {
  num: number;
  minutes: string;
  icon: typeof BookOpen;
  eyebrow: string;
  title: string;
  lead: string;
  bullets: string[];
  takeaway: string;
  primary: { label: string; to: string; hash?: string };
};

const steps: Step[] = [
  {
    num: 1,
    minutes: "60 sec",
    icon: BookOpen,
    eyebrow: "Step 1 of 5 · The brief",
    title: "What this case is about, in 60 seconds.",
    lead: "Lashawnna Harbin — Team Lead / Unit Manager, hired April 3, 2023 — was kept on the same PM closing schedule for 15+ months while peers were moved freely. After protected complaints (Jan 2024 race-discrimination complaint, May 7 2024 EEOC charge, multiple HR / Ethics emails), her performance rating dropped, her waitlist status was changed without notice, and the explanations she was given are contradicted by the records.",
    bullets: [
      "Protected activity: EEOC charge, formal HR complaints, Ethics Oversight complaint.",
      "Adverse pattern: schedule kept fixed, performance rating dropped, waitlist status silently flipped.",
      "Comparators: peers — including Tyler Millisock with the same April 3, 2023 start date — were moved across areas and schedules.",
    ],
    takeaway: "The case is about selective application of the rules: the same waitlist / ticket / performance gates that kept Lashawnna fixed were waived for others.",
    primary: { label: "Open full Investigator Brief", to: "/investigator" },
  },
  {
    num: 2,
    minutes: "60 sec",
    icon: AlertTriangle,
    eyebrow: "Step 2 of 5 · Top inconsistencies",
    title: "The five clearest contradictions.",
    lead: "Each of these is a thing Respondent said vs. a thing the records show. Any one is enough to question the neutral business explanation. Together, they cannot be reconciled.",
    bullets: [
      "Waitlist: Tyler Millisock NOT on the waitlist — still moved. Lashawnna's waitlist placement treated as a barrier.",
      "Ticket: NO ticket identified for Tyler's movement. Lashawnna was told a ticket was required.",
      "Temp → permanent: Verbally told her PM schedule was permanent while records still showed it as temporary; later re-added to the waitlist with the status silently flipped to permanent.",
      "July 17 date: Waitlist re-add showed request date of July 17, 2025 — even though the mid-shift request existed since 2024.",
      "Performance: Consistently high performer (often #1, history of 4 ratings) — rating dropped to \"solid\" after the EEOC charge.",
    ],
    takeaway: "Five independent contradictions, same direction, same person. That is the pattern.",
    primary: { label: "Open Evidence Index", to: "/evidence" },
  },
  {
    num: 3,
    minutes: "75 sec",
    icon: Users,
    eyebrow: "Step 3 of 5 · Tyler Millisock comparator",
    title: "The strongest single comparator — four axes fail at once.",
    lead: "Tyler Millisock is the cleanest comparator: same April 3, 2023 start date, same level, White, moved from a PM schedule into PRE-D / DBC on an earlier 11:30 AM–8:00 PM shift across Jan–Oct 2025. Four independent explanations for Lashawnna's treatment fail against him.",
    bullets: [
      "Waitlist: rule applied to Lashawnna, waived for Tyler.",
      "Ticket: required of Lashawnna, not produced for Tyler.",
      "Performance: weaker performer received the more favorable placement.",
      "Department movement: Tyler moved across areas; Lashawnna stayed fixed on PM closing for the entire 15-month window.",
    ],
    takeaway: "No single neutral defense can be reconciled with Tyler's documented movement.",
    primary: { label: "Open Tyler comparator panel", to: "/comparators" },
  },
  {
    num: 4,
    minutes: "60 sec",
    icon: Calendar,
    eyebrow: "Step 4 of 5 · Schedule pattern",
    title: "15 months of schedule screenshots — the pattern visualized.",
    lead: "EX-022 captures month-by-month schedules from Dec 2024 through May 2026. The filterable schedule table makes the disparate treatment visible in a single view: Lashawnna fixed on PM/Closing, peers moving freely across AM, Midshift, and Mid/Late shifts.",
    bullets: [
      "32-row dataset covering Dec 2024 – May 2026.",
      "Filter by schedule type, year, or \"Harbin only\" to isolate the contrast.",
      "Every row links back to the underlying EX-022 page reference.",
    ],
    takeaway: "Schedule availability existed across the whole period — Lashawnna simply did not receive it.",
    primary: { label: "Open Schedule Data table", to: "/schedule-data" },
  },
  {
    num: 5,
    minutes: "45 sec",
    icon: FolderOpen,
    eyebrow: "Step 5 of 5 · Exhibits index",
    title: "Where the underlying records live.",
    lead: "Every claim above is anchored to an exhibit. The Evidence Library is organized by category — schedule/waitlist, performance, department movement, deleted messages — so any investigator or attorney can verify the record directly.",
    bullets: [
      "Priority categories: Schedule/Waitlist, Performance, Department Movement, Deleted Messages.",
      "Each exhibit shows reliability status (confirmed by screenshot / email / transcript).",
      "Category tiles jump straight to the relevant Master Timeline slice.",
    ],
    takeaway: "Five minutes in, you should be able to verify any single claim in this tour against a named exhibit.",
    primary: { label: "Open Evidence Library", to: "/evidence" },
  },
];

function TourPage() {
  const [i, setI] = useState(0);
  const step = steps[i];
  const Icon = step.icon;
  const progress = useMemo(() => ((i + 1) / steps.length) * 100, [i]);
  const atFirst = i === 0;
  const atLast = i === steps.length - 1;

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-accent">Guided tour</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">Read this in 5 minutes.</h1>
        <p className="mt-3 text-foreground/75">Five steps. The strongest evidence in the Harbin matter, in the order an investigator or attorney should review it. Each step links to the full page if you want to go deeper.</p>
      </div>

      {/* Stepper */}
      <ol className="no-print mt-8 grid grid-cols-5 gap-1.5">
        {steps.map((s, idx) => {
          const done = idx < i;
          const active = idx === i;
          return (
            <li key={s.num}>
              <button
                onClick={() => setI(idx)}
                className={clsx(
                  "group w-full text-left",
                )}
              >
                <div className={clsx(
                  "h-1 w-full rounded-full transition-colors",
                  done && "bg-accent",
                  active && "bg-accent",
                  !done && !active && "bg-border group-hover:bg-foreground/30",
                )} />
                <div className="mt-2 flex items-center gap-1 text-[10px] uppercase tracking-wider">
                  {done && <CheckCircle2 className="size-3 text-accent" />}
                  <span className={clsx(
                    active ? "text-foreground font-medium" : "text-muted-foreground",
                  )}>
                    Step {s.num}
                  </span>
                </div>
                <div className={clsx(
                  "mt-0.5 hidden text-[11px] leading-tight sm:block",
                  active ? "text-foreground/85" : "text-muted-foreground",
                )}>
                  {s.eyebrow.split("·")[1]?.trim() ?? s.eyebrow}
                </div>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Step card */}
      <article className="mt-8 rounded-md border border-border bg-card">
        <header className="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
          <div className="flex items-start gap-3">
            <div className="rounded-md bg-accent/10 p-2 text-accent">
              <Icon className="size-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{step.eyebrow} · ~{step.minutes}</div>
              <h2 className="mt-1 font-display text-2xl tracking-tight sm:text-3xl">{step.title}</h2>
            </div>
          </div>
        </header>

        <div className="space-y-6 px-6 py-6">
          <p className="text-[15px] leading-relaxed text-foreground/85">{step.lead}</p>

          <ul className="space-y-2">
            {step.bullets.map((b, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-foreground/85">
                <span className="mt-1 inline-block size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-md border-l-2 border-accent bg-accent/5 px-4 py-3 text-sm text-foreground/85">
            <span className="font-medium text-foreground">Takeaway: </span>
            {step.takeaway}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Link
              to={step.primary.to}
              hash={step.primary.hash}
              className="inline-flex items-center gap-2 rounded-sm bg-navy px-4 py-2 text-sm text-navy-foreground hover:bg-navy/90"
            >
              {step.primary.label}
              <ExternalLink className="size-3.5 opacity-80" />
            </Link>
          </div>
        </div>

        <footer className="no-print flex items-center justify-between gap-3 border-t border-border px-6 py-4">
          <button
            onClick={() => setI(n => Math.max(0, n - 1))}
            disabled={atFirst}
            className={clsx(
              "inline-flex items-center gap-2 rounded-sm border border-border px-3 py-1.5 text-sm",
              atFirst ? "cursor-not-allowed text-muted-foreground opacity-50" : "hover:bg-secondary/60",
            )}
          >
            <ArrowLeft className="size-3.5" />
            Previous
          </button>

          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
            {i + 1} / {steps.length} · {Math.round(progress)}% complete
          </div>

          {atLast ? (
            <Link
              to="/evidence"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-3 py-1.5 text-sm text-accent-foreground hover:bg-accent/90"
            >
              Finish — open Evidence
              <ArrowRight className="size-3.5" />
            </Link>
          ) : (
            <button
              onClick={() => setI(n => Math.min(steps.length - 1, n + 1))}
              className="inline-flex items-center gap-2 rounded-sm bg-navy px-3 py-1.5 text-sm text-navy-foreground hover:bg-navy/90"
            >
              Next step
              <ArrowRight className="size-3.5" />
            </button>
          )}
        </footer>
      </article>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>Estimated read time: ~5 minutes end to end.</span>
        <Link to="/" className="hover:text-foreground">← Back to overview</Link>
      </div>
    </div>
  );
}
