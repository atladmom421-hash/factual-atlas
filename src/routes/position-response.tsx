import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Lock, ShieldAlert, KeyRound } from "lucide-react";
import { PrintPdfButton } from "@/components/case/PrintPdfButton";
import { PrintEvidenceAppendix } from "@/components/case/PrintEvidenceAppendix";

export const Route = createFileRoute("/position-response")({
  head: () => ({
    meta: [
      { title: "Position Statement Response — Harbin v. DFS Services LLC" },
      { name: "description", content: "Confidential point-by-point response to Discover/Capital One's June 5, 2026 Position Statement (CRD-2026-0386 / EEOC 35A-2026-00320)." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: GatedPage,
});

// ─────────────────────────────────────────────────────────────────
// Password gate (client-side; pragmatic for investigator handoff).
// Change PASSWORD below and re-deploy to rotate. SessionStorage only
// — closing the tab requires re-entry.
// ─────────────────────────────────────────────────────────────────
const PASSWORD = "harbin-truth-2026";
const STORAGE_KEY = "pr-unlocked-v1";

function GatedPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  if (!unlocked) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-5 py-12">
        <div className="rounded-md border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent">
            <Lock className="size-3.5" /> Confidential — Restricted Access
          </div>
          <h1 className="mt-2 font-display text-2xl tracking-tight">Position Statement Response</h1>
          <p className="mt-2 text-sm text-foreground/75">
            <span className="font-medium">Harbin v. DFS Services LLC</span> · CRD-2026-0386 · EEOC 35A-2026-00320.
            This page contains attorney-client and investigation-sensitive material. Enter the access password
            provided to the investigator to continue.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim() === PASSWORD) {
                sessionStorage.setItem(STORAGE_KEY, "1");
                setUnlocked(true);
                setErr(false);
              } else {
                setErr(true);
              }
            }}
            className="mt-5 space-y-3"
          >
            <label className="block text-xs font-medium text-foreground/80">Access password</label>
            <div className="flex items-center gap-2 rounded-md border-2 border-border bg-background px-2.5 py-1.5 focus-within:border-accent">
              <KeyRound className="size-4 text-muted-foreground" />
              <input
                type="password"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Enter password"
              />
            </div>
            {err && <p className="text-xs text-red-600">Incorrect password. Please contact the case owner.</p>}
            <button type="submit" className="w-full rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
              Unlock
            </button>
            <p className="text-[11px] text-muted-foreground">
              By unlocking, you acknowledge this material is confidential and submitted in connection with an
              active CRD/EEOC investigation. Do not redistribute.
            </p>
          </form>
        </div>
      </div>
    );
  }

  return <ResponseContent />;
}

// ─────────────────────────────────────────────────────────────────
// Point-by-point rebuttals, each anchored to a Discover assertion
// and tied to project exhibit IDs.
// ─────────────────────────────────────────────────────────────────
type Rebuttal = {
  topic: string;
  claim: string;            // What Discover asserts in the Position Statement
  citation: string;         // Page / section in their letter
  response: string;         // Our factual response
  evidence: string[];       // EX-IDs supporting the response
  bullets?: string[];       // Supporting facts
};

const REBUTTALS: Rebuttal[] = [
  {
    topic: "1. Prior schedule request — \"no record exists\"",
    citation: "PS p.3, §I.B.3 (Scheduling Process and Initial Placement)",
    claim:
      "“There was no record of any such request in the centralized scheduling system” when Mr. Glover took over in July 2024, so a new request was submitted on Ms. Harbin's behalf and she was placed 5th–6th on the waitlist.",
    response:
      "Discover cannot rely on the absence of a record it controls. No SharePoint ticket has been produced for the July 2024 submission Mr. Glover allegedly created on her behalf, and Edina Markus is reportedly the custodian of those tickets. The same scheduling system that allegedly had \"no record\" also reflects a Temporary status long after management told Ms. Harbin her assignment was Permanent — see EX-008.",
    evidence: ["EX-008", "EX-HR-CALL", "EX-041", "EX-042", "EX-043", "EX-044", "EX-045", "EX-046", "EX-048", "EX-040"],
    bullets: [
      "May 2024 prior complaint already raised the waitlist issue — Discover was on notice.",
      "Ms. Harbin's name was deleted from the waitlist on February 22, 2025 and re-added July 17, 2025 with a fresh request date, materially harming seniority.",
      "Read-only waitlist viewed October 3–4, 2025 showed Ms. Harbin had never been added as mid-shift; Nameer Khan reported the same.",
    ],
  },
  {
    topic: "2. \"Centralized, neutral waitlist — managers cannot bypass\"",
    citation: "PS p.5, §I.B.6–7; p.6 ¶1; pp.6–7 §II.A",
    claim:
      "“Managers do not have authority to bypass the waitlist… Any perceived differences in employee schedules are attributable to separate roles, preexisting assignments, training obligations, or approved accommodations.”",
    response:
      "Discover's own HR conceded the opposite on the November 6, 2025 follow-up call: comparator movement happened \"because of leadership, not the waitlist.\" That is a direct admission that the \"neutral\" process was bypassed for others. The May 12, 2026 Karena Lesure assignment-flexibility concession (granted because Julie Cahoon \"specifically asked\") further contradicts the no-request rule that was applied to Ms. Harbin and Todd.",
    evidence: ["EX-010", "EX-HR-CALL", "EX-044", "EX-045", "EX-046"],
    bullets: [
      "Tyler Millisock — same start date / level, moved areas and schedules Jan–Oct 2025; no ticket produced, reportedly not on waitlist.",
      "Hunter Samuel — received the AM shift Ms. Harbin would have accepted.",
      "Marc Case — same PM shift, allowed to leave ~1 hour early; Ms. Harbin covered his team.",
      "Marissa Mascarenas — earlier/mid-shift examples (8:00–4:30, 10:00–6:30).",
    ],
  },
  {
    topic: "3. \"Day shift offered in May 2025 and declined\"",
    citation: "PS p.4, §I.B.5; p.7 §II.B ¶3",
    claim:
      "“In May 2025… a day-shift opportunity became available… she declined the move, explaining that she preferred to remain on her current schedule due to her graduate school commitments.”",
    response:
      "Ms. Harbin disputes that any such offer was ever made. Discover has not produced (a) the identity of who extended the offer, (b) the specific shift offered, (c) the date, or (d) any written confirmation. A purported offer that exists only in a manager's later recollection — and that conveniently restarts the waitlist clock — cannot carry Discover's burden when documentary proof is in its sole custody.",
    evidence: ["EX-008", "EX-HR-CALL", "EX-041", "EX-042", "EX-045", "EX-044"],
    bullets: [
      "No email, Teams message, ticket, or signed acknowledgement has been produced.",
      "Re-entry on July 10, 2025 with a new request date is the actual recorded action — and it is what determined her later waitlist position.",
    ],
  },
  {
    topic: "4. \"No similarly situated comparator identified\"",
    citation: "PS p.2 ¶3; p.6 §II.A ¶3; p.10 §III ¶3",
    claim:
      "“The Charge does not identify any similarly situated comparator… any materially adverse action taken under circumstances suggesting discrimination, or any facts establishing a causal connection.”",
    response:
      "Comparators have been identified by name, role, and conduct. EX-010 (Comparator Movement & Flexibility Map) sets out each comparator's role, start date, schedule history, and source. The Position Statement does not engage with any of them.",
    evidence: ["EX-010", "EX-044", "EX-045", "EX-046"],
    bullets: [
      "Tyler Millisock, Hunter Samuel, Marc Case, Julie Cahoon, Marissa Mascarenas — each outside Ms. Harbin's protected class and each received scheduling or assignment flexibility she was denied.",
      "Discover's silence on these specific names is itself evidence of disparate treatment.",
    ],
  },
  {
    topic: "5. \"Continuously employed → no adverse action\"",
    citation: "PS p.2 ¶2; p.6 §II.A ¶2; p.8 §II.B ¶2; p.10 §III ¶2",
    claim:
      "Continuity of employment, unchanged compensation, and strong evaluations show there was no adverse action and no retaliation.",
    response:
      "Continuous employment is not a defense to materially adverse actions under Burlington Northern v. White, 548 U.S. 53 (2006). The standard is whether the action \"well might have dissuaded a reasonable worker from making or supporting a charge.\" The record reflects multiple such actions.",
    evidence: ["EX-008", "EX-010", "EX-002", "EX-050", "EX-051", "EX-053"],
    bullets: [
      "2024 overall rating downgraded to SOLID even though every sub-rating was Solid or Strong, the bonus payout rose to 124.36%, IPF rose to 120%, and operational metrics improved YoY (see Investigator Brief, §Performance Evaluation Analysis).",
      "Disputed waitlist placement; name deleted Feb 22, 2025 and re-added July 17, 2025 with a new request date.",
      "April 22, 2026 public questioning during a calibration meeting.",
      "April 28, 2026 team assignment change after the initial movement had already been shown.",
      "October 10, 2024 credit removed from a document Ms. Harbin created.",
    ],
  },
  {
    topic: "6. \"Mr. Glover did not know the substance of the prior charge\"",
    citation: "PS p.3 §I.B.2; p.8 §II.B ¶3",
    claim:
      "“Although Mr. Glover later became aware that Ms. Harbin had filed a prior EEOC charge, he was not informed of the substance… and did not make any employment decisions affecting Ms. Harbin based on the existence of that complaint.”",
    response:
      "Knowledge of the existence of a protected EEOC charge is sufficient for retaliation causation under Ninth Circuit law; specific knowledge of the substance is not required. Raad v. Fairbanks N. Star Borough Sch. Dist., 323 F.3d 1185 (9th Cir. 2003). Discover admits Mr. Glover knew the charge existed, and the adverse actions described above all post-date that knowledge.",
    evidence: ["EX-008", "EX-010", "EX-041", "EX-042"],
  },
  {
    topic: "7. \"Same protected class\" defense for Mr. Glover",
    citation: "PS p.7 §II.A ¶6",
    claim:
      "“Mr. Glover himself is a member of the same protected racial class, further undermining any inference that his actions were motivated by discriminatory animus.”",
    response:
      "Discover concedes this is \"not dispositive,\" and for good reason. Castaneda v. Partida, 430 U.S. 482 (1977) and Oncale v. Sundowner Offshore Services, 523 U.S. 75 (1998) both confirm that intra-group discrimination is actionable. The relevant inquiry is whether the conduct was based on a protected characteristic — not the demographic identity of the actor.",
    evidence: [],
  },
  {
    topic: "8. Hardship fund — \"documentation required of everyone\"",
    citation: "PS p.6 §I.B.8; p.6 ¶1",
    claim:
      "“Discover requires documentation for all hardship fund requests, and any issues regarding payments relate to the timeliness and completeness of the documentation provided. Mr. Glover denies making any statement relating to hardship-funds as it concerns race.”",
    response:
      "The hardship-fund timeline (EX-003) and contemporaneous race-related comments (EX-004) speak for themselves. The denial is unsworn and uncorroborated; the documentary timeline reflects extended delay and inconsistent treatment.",
    evidence: ["EX-003", "EX-004"],
  },
  {
    topic: "9. HBCU comment — \"denied; no role in recruitment\"",
    citation: "PS p.6 §I.B.8 ¶3",
    claim:
      "“Mr. Glover denies making this statement and he had no role in the recruitment of candidates.”",
    response:
      "The comment is contemporaneously documented in EX-005. Whether or not Mr. Glover had a formal recruiting role is irrelevant to whether the statement was made and reflects discriminatory animus.",
    evidence: ["EX-005"],
  },
  {
    topic: "10. System recording — \"standard practice, applied broadly\"",
    citation: "PS p.5 §I.B.8 ¶2; p.8 §II.D",
    claim:
      "“Recording is a standard operational tool… This functionality applies broadly to Team Leaders and is not directed at any individual employee.”",
    response:
      "The relevant question is access patterns during Ms. Harbin's FMLA period, not whether the tool exists. EX-006 documents Verint monitoring concerns; Discover has not produced access logs.",
    evidence: ["EX-006"],
    bullets: [
      "Discover should produce Verint monitoring access logs for Ms. Harbin covering the FMLA period to substantiate the \"applied broadly\" claim.",
    ],
  },
  {
    topic: "11. \"Strong 2025 rating shows no animus\"",
    citation: "PS p.4 §I.B.4; p.7 §II.A ¶4",
    claim:
      "“She received a 2025 performance rating equivalent to a 'Strong' (4 out of 5)… recognized as one of the stronger performers within her peer group.”",
    response:
      "The Position Statement strategically omits the 2024 SOLID downgrade. The investigator-brief analysis (EX-049 – EX-057) shows the 2024 overall rating is inconsistent with every sub-rating in the same document, the bonus payout, the TH operational metrics, and the manager's own contemporaneous statement to HR that Ms. Harbin was \"the best team lead he's got.\" That downgrade is the actionable evaluation, not the 2025 one.",
    evidence: ["EX-049", "EX-050", "EX-051", "EX-052", "EX-053", "EX-056", "EX-057"],
  },
  {
    topic: "12. Internal applications — \"competitive hiring, no decisionmaker knew\"",
    citation: "PS p.4 §I.B.4; p.7 §II.A ¶5",
    claim:
      "“Her non-selections were the result of competitive hiring decisions… no hiring decisionmaker would have known of her prior charge.”",
    response:
      "Discover should identify, by position: the hiring decisionmakers, the selected candidates, the qualification criteria used, and the demographic composition of the panels. Without that record, the assertion that no decisionmaker knew of the prior charge is unfalsifiable.",
    evidence: ["EX-055"],
  },
  {
    topic: "13. Chat deletion — \"consistent with retention policy\"",
    citation: "PS p.8 §II.D",
    claim:
      "“Chats are deleted consistent with Discover's retention policy.”",
    response:
      "EX-002 documents October 2025 record-deletion / preservation concerns. A litigation hold attached at the time of the May 2024 prior charge; deletion after that point — regardless of routine policy — implicates spoliation, not policy compliance.",
    evidence: ["EX-002"],
  },
  {
    topic: "14. September 2025 schedule change — \"not operationally feasible\"",
    citation: "PS p.5 §I.B.7 ¶2",
    claim:
      "“Following that review, it was determined that movement outside of established schedule assignments was not operationally feasible.”",
    response:
      "\"Not operationally feasible\" was contradicted weeks later by the Karena Lesure reassignment (May 12, 2026) accommodating Julie Cahoon's specific request. The rule was elastic for comparators and rigid for Ms. Harbin.",
    evidence: ["EX-010", "EX-019"],
  },

];

// All exhibit IDs cited above — feed into the print appendix.
const CITED_EXHIBITS = Array.from(
  new Set(REBUTTALS.flatMap((r) => r.evidence)),
);

function ResponseContent() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
      {/* Header / metadata */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent">
            <ShieldAlert className="size-3.5" /> Confidential · For Investigator Review
          </div>
          <h1 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">
            Response to Respondent's Position Statement
          </h1>
          <p className="mt-2 text-sm text-foreground/75">
            <span className="font-medium">Shawnna Harbin v. DFS Services LLC</span> ·
            CRD No. CRD-2026-0386 · EEOC No. 35A-2026-00320
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Responding to: Position Statement of Littler Mendelson, P.C. (Amanda M. Breemes), dated June 5, 2026
          </p>
        </div>
        <PrintPdfButton label="Download Response PDF" title="Harbin – Position Statement Response" />
      </div>

      {/* Executive summary */}
      <section className="mt-8 rounded-md border border-border bg-card p-5">
        <div className="text-[10px] uppercase tracking-wider text-accent">Executive Summary</div>
        <h2 className="mt-1 font-display text-xl tracking-tight">What the Position Statement gets wrong</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-[14px] leading-relaxed text-foreground/85">
          <li>
            It frames Discover's <strong>own missing records</strong> (no ticket, no offer documentation, no
            decisionmaker identification) as Charging Party's evidentiary failures. Records in Respondent's
            sole custody must be produced before that argument is available.
          </li>
          <li>
            It asserts a <strong>neutral, centralized waitlist</strong> that managers cannot bypass — directly
            contradicted by Discover HR's own November 6, 2025 statement that comparator movement happened
            "because of leadership, not the waitlist."
          </li>
          <li>
            It claims a May 2025 day-shift was <strong>offered and declined</strong>, with no offeror, no shift,
            no date, and no written confirmation. Charging Party disputes the offer ever occurred.
          </li>
          <li>
            It treats "<strong>continuously employed</strong>" as a complete defense, which is not the standard
            under <em>Burlington Northern v. White</em>, 548 U.S. 53 (2006).
          </li>
          <li>
            It omits the <strong>2024 SOLID downgrade</strong> entirely — the actionable evaluation —
            substituting the 2025 rating instead.
          </li>
          <li>
            It does not engage with any of the <strong>named comparators</strong> (Tyler Millisock, Hunter
            Samuel, Marc Case, Julie Cahoon, Marissa Mascarenas) catalogued in EX-010.
          </li>
        </ol>
      </section>

      {/* Point-by-point rebuttals */}
      <section className="mt-10">
        <h2 className="font-display text-2xl tracking-tight">Point-by-point response</h2>
        <p className="mt-2 text-sm text-foreground/75">
          Each item below restates a specific assertion from the Position Statement, identifies the page on
          which it appears, and ties Charging Party's response to record evidence already produced in this
          investigation.
        </p>

        <div className="mt-6 space-y-6">
          {REBUTTALS.map((r) => (
            <article
              key={r.topic}
              className="rounded-md border border-border bg-card avoid-break"
            >
              <header className="border-b border-border px-5 py-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{r.citation}</div>
                <h3 className="mt-1 font-display text-lg tracking-tight">{r.topic}</h3>
              </header>
              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-b border-border px-5 py-4 md:border-b-0 md:border-r">
                  <div className="text-[10px] uppercase tracking-wider text-red-700/80 dark:text-red-300/80">
                    Discover asserts
                  </div>
                  <p className="mt-1.5 text-[14px] italic leading-relaxed text-foreground/85">{r.claim}</p>
                </div>
                <div className="px-5 py-4">
                  <div className="text-[10px] uppercase tracking-wider text-emerald-700/80 dark:text-emerald-300/80">
                    Response
                  </div>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/90">{r.response}</p>
                </div>
              </div>
              {r.bullets && r.bullets.length > 0 && (
                <div className="border-t border-border px-5 py-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Supporting facts
                  </div>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[13px] leading-relaxed text-foreground/85">
                    {r.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
              {r.evidence.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 border-t border-border bg-secondary/40 px-5 py-3">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Tied to evidence:
                  </span>
                  {r.evidence.map((id) => (
                    <Link
                      key={id}
                      to="/evidence"
                      hash={`exhibit-${id}`}
                      className="rounded-sm bg-navy px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-navy-foreground hover:bg-navy/80"
                    >
                      {id}
                    </Link>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Records to request */}
      <section className="mt-10 rounded-md border border-border bg-card p-5">
        <h2 className="font-display text-xl tracking-tight">Records the investigator should request from Discover</h2>
        <p className="mt-2 text-sm text-foreground/75">
          The Position Statement repeatedly relies on processes and offers whose documentation is in Respondent's
          sole custody. To test those assertions:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[14px] leading-relaxed text-foreground/85">
          <li>Every waitlist ticket submitted on Ms. Harbin's behalf (May 2024, July 2024, July 2025) — including author, submission date, and audit history.</li>
          <li>Complete unredacted waitlist with request date, status, status-change history, and prior modifications for all Team Leaders 2023–present.</li>
          <li>Documentation of the May 2025 day-shift "offer" — offeror, shift, date, channel, and Ms. Harbin's response.</li>
          <li>Director-level approval for the change from Temporary to Permanent status (required under SOW).</li>
          <li>Team Ratios 2024 file change history (September 24, 2024 modification).</li>
          <li>April 28, 2026 movement worksheets and any edits/authorship metadata.</li>
          <li>Karena Lesure assignment-change approval and all related communications among Steve Seevers, Julie Cahoon, Amber Laye, and Michelle Swindell.</li>
          <li>Communications between Cyndy Smith and Michelle Swindell regarding the April 22, 2026 calibration meeting.</li>
          <li>Verint monitoring access logs for Ms. Harbin covering the FMLA period.</li>
          <li>Hiring decisionmakers, selected candidates, qualifications, and panel composition for each role Ms. Harbin was not selected for.</li>
          <li>Litigation-hold notice issued in connection with the May 2024 prior charge and all custodial deletion/retention activity since that date.</li>
        </ul>
      </section>

      {/* Legal posture */}
      <section className="mt-10 rounded-md border border-border bg-card p-5">
        <h2 className="font-display text-xl tracking-tight">Legal standard the Position Statement misapplies</h2>
        <ul className="mt-3 space-y-3 text-[14px] leading-relaxed text-foreground/85">
          <li>
            <strong>Adverse action.</strong> Under <em>Burlington Northern &amp; Santa Fe Ry. Co. v. White</em>, 548 U.S. 53 (2006),
            the retaliation standard is whether an action "well might have dissuaded a reasonable worker from
            making or supporting a charge of discrimination" — not whether the employee was fired.
          </li>
          <li>
            <strong>Causation knowledge.</strong> Under <em>Raad</em>, 323 F.3d 1185 (9th Cir. 2003), a decisionmaker's
            awareness of the existence of protected activity is sufficient — knowledge of the substance is
            not required. Respondent concedes Mr. Glover knew the charge existed.
          </li>
          <li>
            <strong>Intra-group discrimination.</strong> Under <em>Oncale</em>, 523 U.S. 75 (1998), and <em>Castaneda</em>,
            430 U.S. 482 (1977), shared protected-class membership does not insulate a decisionmaker from a
            discrimination claim.
          </li>
          <li>
            <strong>Comparator analysis.</strong> Respondent's claim that no comparator has been identified is
            incorrect; the comparators were named, their roles described, and their differential treatment
            documented (EX-010). Respondent's failure to address them is itself probative.
          </li>
          <li>
            <strong>Hostile work environment totality.</strong> Under <em>Harris v. Forklift Sys.</em>, 510 U.S. 17 (1993),
            severity and pervasiveness are evaluated under the totality of the circumstances — not by
            isolating each incident and dismissing it individually.
          </li>
          <li>
            <strong>Spoliation / litigation hold.</strong> Routine retention policies do not authorize destruction
            of relevant ESI after a duty to preserve has attached. The May 2024 prior charge triggered that
            duty. EX-002 documents October 2025 deletion concerns.
          </li>
        </ul>
      </section>

      {/* Cross-links */}
      <section className="mt-10 grid gap-3 sm:grid-cols-3">
        <Link to="/investigator" className="rounded-md border border-border bg-card p-4 hover:bg-secondary">
          <div className="text-[10px] uppercase tracking-wider text-accent">Companion document</div>
          <div className="mt-1 font-display text-base">Investigator Brief</div>
          <p className="mt-1 text-xs text-foreground/70">Neutral case summary, comparator evidence, missing records.</p>
        </Link>
        <Link to="/evidence" className="rounded-md border border-border bg-card p-4 hover:bg-secondary">
          <div className="text-[10px] uppercase tracking-wider text-accent">Evidence index</div>
          <div className="mt-1 font-display text-base">All Exhibits</div>
          <p className="mt-1 text-xs text-foreground/70">EX-001 – EX-058 with files and metadata.</p>
        </Link>
        <Link to="/timeline" className="rounded-md border border-border bg-card p-4 hover:bg-secondary">
          <div className="text-[10px] uppercase tracking-wider text-accent">Chronology</div>
          <div className="mt-1 font-display text-base">Timeline</div>
          <p className="mt-1 text-xs text-foreground/70">Protected activity and adverse actions in date order.</p>
        </Link>
      </section>

      <footer className="mt-10 border-t border-border pt-5 text-[11px] text-muted-foreground">
        Prepared for submission to the Arizona Civil Rights Division and EEOC. This page reproduces and rebuts
        the assertions in Littler Mendelson's June 5, 2026 Position Statement. All cited exhibits are part of
        the record already provided in this investigation.
      </footer>

      {/* Print-only evidence appendix — auto-attached when downloading PDF */}
      <PrintEvidenceAppendix exhibitIds={CITED_EXHIBITS} title="Evidence Appendix — Position Statement Response" />
    </div>
  );
}
