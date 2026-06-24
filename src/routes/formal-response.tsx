import { createFileRoute, Link } from "@tanstack/react-router";
import { PrintPdfButton } from "@/components/case/PrintPdfButton";
import { PrintEvidenceAppendix } from "@/components/case/PrintEvidenceAppendix";

export const Route = createFileRoute("/formal-response")({
  head: () => ({
    meta: [
      { title: "Charging Party's Formal Response — Harbin v. DFS Services LLC" },
      {
        name: "description",
        content:
          "Charging Party's formal letter response to Respondent's June 5, 2026 Position Statement (CRD-2026-0386 / EEOC 35A-2026-00320).",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: FormalResponsePage,
});

// Exhibits cited in this letter — bundled into the print appendix.
const CITED_EXHIBITS = [
  "EX-008",
  "EX-010",
  "EX-HR-CALL",
  "EX-041",
  "EX-042",
  "EX-043",
  "EX-044",
  "EX-045",
  "EX-046",
  "EX-048",
  "EX-040",
  "EX-002",
  "EX-003",
  "EX-004",
  "EX-005",
  "EX-006",
  "EX-019",
  "EX-049",
  "EX-050",
  "EX-051",
  "EX-052",
  "EX-053",
  "EX-055",
  "EX-056",
  "EX-057",
];

function Ex({ id }: { id: string }) {
  return (
    <Link
      to="/evidence"
      hash={`exhibit-${id}`}
      className="rounded-sm bg-navy px-1 py-0.5 align-baseline text-[10px] font-medium uppercase tracking-wider text-navy-foreground hover:bg-navy/80"
    >
      {id}
    </Link>
  );
}

function FormalResponsePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
      {/* Action bar (screen only) */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div className="text-[11px] uppercase tracking-[0.18em] text-accent">
          Formal Letter Response · For Submission
        </div>
        <PrintPdfButton
          label="Download Formal Response PDF"
          title="Harbin – Formal Response to Position Statement"
        />
      </div>

      {/* Letter body */}
      <article className="rounded-md border border-border bg-card px-8 py-10 font-serif text-[14px] leading-[1.7] text-foreground/90 sm:px-12 sm:py-14 print:border-0 print:px-0 print:py-0 print:shadow-none">
        {/* Letterhead */}
        <header className="border-b border-border pb-5 text-center">
          <div className="font-display text-xl tracking-tight">Shawnna Harbin</div>
          <div className="mt-1 text-[12px] text-foreground/70">
            Charging Party · Pro Se · Tucson, Arizona
          </div>
        </header>

        {/* Date & addressee block */}
        <div className="mt-8 space-y-1 text-[13px]">
          <div>June 24, 2026</div>
          <div className="pt-4">VIA EMAIL: LAUREN.BARRERA@AZAG.GOV</div>
          <div className="pt-4">Lauren Barrera</div>
          <div>Compliance Officer</div>
          <div>Office of the Arizona Attorney General</div>
          <div>Civil Rights Division</div>
          <div>2005 N. Central Avenue</div>
          <div>Phoenix, AZ 85004</div>
        </div>

        {/* Re line */}
        <div className="mt-8 text-[13px]">
          <div>
            <span className="font-semibold">Re:</span>{" "}
            <span>Shawnna Harbin v. DFS Services LLC / Capital One Financial Corporation</span>
          </div>
          <div className="pl-9">CRD No. CRD-2026-0386</div>
          <div className="pl-9">EEOC No. 35A-2026-00320</div>
          <div className="pl-9">
            Charging Party's Response to Respondent's Position Statement dated June 5, 2026
          </div>
        </div>

        <p className="mt-8">Dear Ms. Barrera:</p>

        <p className="mt-4">
          I submit this letter, on my own behalf, as Charging Party's formal response to the
          Position Statement filed on June 5, 2026 by Littler Mendelson, P.C. (Amanda M. Breemes)
          on behalf of DFS Services LLC and its successor, Capital One Financial Corporation
          (collectively, "Respondent" or "Discover"). Respondent's submission characterizes my
          claims as mere disagreement with "neutral" workplace processes. The evidence already in
          the investigative record establishes the opposite: Respondent applied its scheduling,
          performance, hiring, and hardship-fund processes inconsistently, in a manner that
          disadvantaged me and that post-dated protected activity of which the decisionmaker was
          admittedly aware.
        </p>

        <p className="mt-4">
          I respectfully request that the Division reject Respondent's request for a no-cause
          determination and proceed with a full investigation, including production of the
          documents identified at the end of this letter.
        </p>

        {/* Section I */}
        <h2 className="mt-10 font-display text-lg tracking-tight">I. Preliminary Statement</h2>
        <p className="mt-3">
          Respondent's Position Statement is built on three rhetorical moves. First, it treats its
          own missing records — no scheduling ticket, no documented "offer," no identified
          decisionmaker for any internal posting — as Charging Party's evidentiary failures.
          Second, it asserts a "neutral, centralized waitlist that managers cannot bypass," then
          relies on managerial discretion to explain every comparator who moved ahead.
          Third, it equates continued employment with the absence of any adverse action — a
          standard that the Supreme Court rejected twenty years ago in{" "}
          <em>Burlington Northern &amp; Santa Fe Ry. Co. v. White</em>, 548 U.S. 53 (2006).
        </p>
        <p className="mt-3">
          The factual record now before the Division contradicts the Position Statement on each of
          these points. The contradictions are summarized below and tied to specific exhibits
          already produced.
        </p>

        {/* Section II */}
        <h2 className="mt-10 font-display text-lg tracking-tight">
          II. Response to Respondent's Statement of Facts
        </h2>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          A. Response to Respondent's Characterization of Charging Party's Prior EEOC Charge
          (PS pp. 2–3, § I.B.1–2)
        </h3>
        <p className="mt-3">
          Respondent's description of Charging Party's prior EEOC charge is incomplete and
          misleading. The Position Statement characterizes the prior charge as limited to
          ordinary "workplace interactions" with a coworker and Charging Party's then-manager,
          Rosanna Blackson. That framing minimizes the seriousness of what was reported. The
          prior protected activity involved race discrimination, retaliation, hostile work
          environment concerns, medical leave and disability-related retaliation, a false
          job-abandonment issue, repeated denied transfer and schedule requests, and the
          failure to properly add Charging Party to the mid-shift waitlist.
        </p>
        <p className="mt-3">
          Respondent's reliance on the fact that its internal investigation "did not
          substantiate" the prior complaint is not dispositive. A non-substantiation finding
          by the employer does not establish that the underlying conduct did not occur, nor
          does it resolve the retaliation that followed. The contemporaneous record includes
          Charging Party's May 29, 2024 written complaint to multiple leaders and Employee
          Relations representatives, the May 31, 2024 HR intake call in which Charging Party
          reported race discrimination, retaliation, the false job-abandonment issue, project
          exclusion, and the waitlist/schedule issue, and HR's June 5, 2024 follow-up
          arranging Charging Party's reassignment away from Ms. Blackson's direct supervision
          to report through Mr. Glover effective July 1, 2024. That reassignment itself
          reflects Respondent's understanding that continued one-on-one interaction with
          Ms. Blackson was problematic during the pendency of the investigation. See{" "}
          <Ex id="EX-HR-CALL" />, <Ex id="EX-002" />.
        </p>
        <p className="mt-3">
          Charging Party also disputes Respondent's assertion that she "experienced no
          adverse action" during or after the prior charge. Continued employment is not the
          test. Under <em>Burlington Northern &amp; Santa Fe Ry. Co. v. White</em>, 548 U.S.
          53 (2006), the question is whether the challenged actions might dissuade a
          reasonable worker from making or supporting a charge of discrimination. The record
          identifies, among other things:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>
            Charging Party had requested mid-shift or earlier schedule movement but was not
            properly added to the waitlist when she should have been. See <Ex id="EX-008" />,{" "}
            <Ex id="EX-041" />, <Ex id="EX-042" />.
          </li>
          <li>
            Respondent later treated Charging Party's PM assignment as permanent even though
            it had been presented as temporary, and Respondent's own records continued to
            reflect temporary status. See <Ex id="EX-044" />, <Ex id="EX-045" />.
          </li>
          <li>
            After Charging Party's May 2024 EEOC charge and May 29, 2024 formal complaint,
            she remained fixed on the PM/closing schedule while other similarly situated
            leaders moved to AM, mid-shift, or otherwise more favorable schedules. See{" "}
            <Ex id="EX-010" />.
          </li>
          <li>
            In July 2024, after the protected activity, Charging Party was assigned
            low-performing employees who were already expected to be terminated; the delay
            in processing their corrective actions negatively affected her team's
            performance metrics.
          </li>
          <li>
            When Charging Party submitted termination recommendations that Employee
            Relations had approved, Mr. Carfagna blocked or delayed them at the director
            level based on a documentation/coaching requirement that HR later confirmed
            Charging Party had already satisfied. HR told Charging Party she "did exactly
            the right thing," confirming the issue was not her performance or process.
          </li>
          <li>
            In the first review cycle following the EEOC charge and formal complaint,
            Charging Party's overall rating was downgraded from Strong to Solid despite
            improved operational metrics, no goal rated below Solid, and a 124.36% bonus
            payout. See <Ex id="EX-049" />, <Ex id="EX-050" />, <Ex id="EX-051" />,{" "}
            <Ex id="EX-052" />, <Ex id="EX-053" />.
          </li>
          <li>
            The Solid rating reduced Charging Party's merit impact and, based on
            information provided to leadership, excluded her from the Department Manager
            training cohort — an internal promotional pipeline.
          </li>
          <li>
            Charging Party was excluded from internal opportunities, remained blocked from
            schedule movement, and was later told by Mr. Glover that there was a
            "blockade" preventing her from moving forward. See <Ex id="EX-055" />.
          </li>
        </ul>
        <p className="mt-3">
          Respondent's statement that Charging Party's "compensation, responsibilities, and
          opportunities remained unchanged" is therefore inaccurate. Compensation was
          affected by the 2024 downgrade because the merit percentage tied to the review was
          lower than it would have been at Strong, notwithstanding stronger measurable
          results. Opportunities were affected because the Solid rating excluded Charging
          Party from the Department Manager training cohort and because she remained on an
          unfavorable schedule while peers moved. Responsibilities and working conditions
          were affected by the transfer of low-performing employees to her team and by the
          continued requirement that she manage under conditions created by Respondent's
          failure to resolve the schedule, waitlist, and retaliation concerns.
        </p>
        <p className="mt-3">
          Respondent had actual, contemporaneous notice of these concerns. The May 29, 2024
          written complaint was directed to multiple leaders and Employee Relations
          representatives; the May 31, 2024 HR intake call placed the substance of the
          complaint on the record; and the June 5, 2024 follow-up confirmed Respondent's
          decision to separate Charging Party from Ms. Blackson during the investigation.
          See <Ex id="EX-HR-CALL" />. The relevant question is not whether Charging Party
          was immediately terminated or formally demoted, but whether, after protected
          activity, Respondent took actions or permitted conditions that would reasonably
          discourage a person from making or supporting a discrimination complaint. The
          record establishes that it did.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          B. The "no record of any prior request" assertion (PS p. 3, §I.B.3)
        </h3>

        <p className="mt-3">
          Respondent asserts that, upon Mr. Glover's assumption of supervision in July 2024,
          "there was no record of any such request in the centralized scheduling system." The
          absence of a record in a system Respondent solely controls cannot, without more,
          establish that no request was made. Respondent has not produced (a) the ticket Mr.
          Glover allegedly submitted on Charging Party's behalf, (b) the custodial chain through
          which it was processed (reportedly Edina Markus), or (c) the audit history showing
          additions, deletions, or status changes to Charging Party's entry. The same waitlist
          system Respondent characterizes as authoritative reflects Charging Party's name as{" "}
          <em>deleted</em> on February 22, 2025 and <em>re-added</em> on July 17, 2025 with a
          fresh request date — materially harming seniority. See <Ex id="EX-008" />,{" "}
          <Ex id="EX-041" />, <Ex id="EX-042" />, <Ex id="EX-043" />, <Ex id="EX-048" />.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          B. The "neutral, centralized waitlist" assertion (PS pp. 4–5, §§ I.B.6–7; p. 6, §II.A)
        </h3>
        <p className="mt-3">
          Respondent represents that "[m]anagers do not have authority to bypass the waitlist" and
          that any perceived differences are attributable to "separate roles, preexisting
          assignments, training obligations, or approved accommodations." Respondent's own Human
          Resources representative said the opposite during the November 6, 2025 follow-up call,
          stating that comparator movement occurred "because of leadership, not the waitlist."
          See <Ex id="EX-HR-CALL" />. That statement, made by Respondent's agent, is a direct
          admission that the process Respondent now describes as neutral was, in practice,
          discretionary. The May 12, 2026 Karena Lesure reassignment — granted, on the record,
          because Julie Cahoon "specifically asked" — confirms the same pattern.{" "}
          See <Ex id="EX-010" />, <Ex id="EX-019" />.
        </p>
        <p className="mt-3">
          Comparators were identified by name, role, start date, schedule history, and source in{" "}
          <Ex id="EX-010" />:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>
            <strong>Tyler Millisock</strong> — same start date and level as Charging Party; moved
            areas and schedules between January and October 2025; no waitlist ticket has been
            produced.
          </li>
          <li>
            <strong>Hunter Samuel</strong> — received the AM shift Charging Party would have
            accepted.
          </li>
          <li>
            <strong>Marc Case</strong> — on the same PM shift; routinely permitted to leave
            approximately one hour early while Charging Party covered his team.
          </li>
          <li>
            <strong>Marissa Mascarenas</strong> — earlier and mid-shift placements (8:00–4:30,
            10:00–6:30) without a waitlist explanation.
          </li>
          <li>
            <strong>Julie Cahoon / Karena Lesure</strong> — May 12, 2026 reassignment based on a
            specific request, contradicting the "not operationally feasible" rationale applied to
            Charging Party in September 2025.
          </li>
        </ul>
        <p className="mt-3">
          The Position Statement does not address any of these individuals by name. That silence
          is itself probative under standard comparator analysis.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          C. The "May 2025 day-shift offer" assertion (PS p. 4, § I.B.5; p. 7, § II.B)
        </h3>
        <p className="mt-3">
          Respondent represents that, in May 2025, a day-shift opportunity was offered and that
          Charging Party "declined the move, explaining that she preferred to remain on her
          current schedule due to her graduate school commitments." Charging Party disputes that
          any such offer was extended. Respondent has not produced (i) the name of the individual
          who allegedly made the offer, (ii) the specific shift offered, (iii) the date, or (iv)
          any written confirmation — email, Teams message, SharePoint ticket, or signed
          acknowledgment. The only contemporaneously recorded action in the same window is
          Charging Party's <em>re-entry</em> onto the waitlist on July 10, 2025 with a new request
          date — which Respondent later used to justify her diminished position. See{" "}
          <Ex id="EX-008" />, <Ex id="EX-041" />, <Ex id="EX-042" />, <Ex id="EX-045" />.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          D. The "no similarly situated comparator" assertion (PS pp. 2, 6, 10)
        </h3>
        <p className="mt-3">
          Respondent asserts that the Charge "does not identify any similarly situated
          comparator." That assertion is incorrect. The Comparator Movement &amp; Flexibility Map
          at <Ex id="EX-010" /> identifies, by name and role, each comparator and the favorable
          scheduling or assignment treatment each received. Respondent's failure to engage with
          any of those individuals — by, for example, producing their waitlist tickets and request
          dates — leaves the Charging Party's comparator showing unrebutted.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          E. The "continuously employed" assertion (PS pp. 2, 6, 8, 10)
        </h3>
        <p className="mt-3">
          Respondent repeatedly notes that Charging Party "remains employed" and characterizes
          that fact as dispositive. Under <em>Burlington Northern v. White</em>, 548 U.S. 53
          (2006), the question is whether the challenged action "well might have dissuaded a
          reasonable worker from making or supporting a charge of discrimination." Several
          actions in the record meet that standard:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>
            <strong>The 2024 overall-rating downgrade to "Solid."</strong> Every sub-rating in
            the same document was Solid or Strong; the bonus payout rose to 124.36%, IPF rose to
            120%, and the operational metrics improved year over year. The 2024 overall rating is
            the actionable evaluation, and the Position Statement omits it entirely. See{" "}
            <Ex id="EX-049" />, <Ex id="EX-050" />, <Ex id="EX-051" />, <Ex id="EX-052" />,{" "}
            <Ex id="EX-053" />.
          </li>
          <li>
            <strong>The February 22, 2025 deletion and July 17, 2025 re-addition</strong> of
            Charging Party's name on the waitlist with a new request date. See <Ex id="EX-008" />.
          </li>
          <li>
            <strong>The April 22, 2026 public questioning</strong> during a calibration meeting.
          </li>
          <li>
            <strong>The April 28, 2026 team-assignment change</strong> made after the initial
            movement worksheet had already been shown.
          </li>
          <li>
            <strong>The October 10, 2024 removal of authorship credit</strong> from a document
            Charging Party created.
          </li>
        </ul>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          F. The "Mr. Glover did not know the substance" assertion (PS p. 3, § I.B.2; p. 8, § II.B)
        </h3>
        <p className="mt-3">
          Respondent concedes that Mr. Glover "later became aware that Ms. Harbin had filed a
          prior EEOC charge." That admission is sufficient for retaliation causation under{" "}
          <em>Raad v. Fairbanks North Star Borough School District</em>, 323 F.3d 1185 (9th Cir.
          2003). Decisionmaker knowledge of the substance of the protected activity is not
          required; knowledge of its existence is. The adverse actions described in Section II.E
          above all post-date Mr. Glover's admitted awareness.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          G. The "same protected class" defense (PS p. 7, § II.A)
        </h3>
        <p className="mt-3">
          Respondent concedes this point is "not dispositive." It is also legally insufficient. In{" "}
          <em>Oncale v. Sundowner Offshore Services</em>, 523 U.S. 75 (1998), and{" "}
          <em>Castaneda v. Partida</em>, 430 U.S. 482 (1977), the Supreme Court confirmed that
          shared protected-class membership does not insulate a decisionmaker from a
          discrimination claim. The relevant inquiry is whether the conduct was based on a
          protected characteristic — not the demographic identity of the actor.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          H. The hardship-fund assertion (PS p. 6, § I.B.8)
        </h3>
        <p className="mt-3">
          Respondent represents that all hardship-fund applicants must submit documentation and
          that any payment delay relates only to the timeliness or completeness of that
          documentation. The hardship-fund timeline at <Ex id="EX-003" /> reflects extended delay
          inconsistent with Respondent's stated process, and the contemporaneous race-related
          comments at <Ex id="EX-004" /> are independently documented. Mr. Glover's denial is
          unsworn, uncorroborated, and does not address the documentary record.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          I. The HBCU-comment denial (PS p. 6, § I.B.8)
        </h3>
        <p className="mt-3">
          The comment is contemporaneously documented at <Ex id="EX-005" />. Whether Mr. Glover
          held a formal recruiting role is immaterial to whether the statement was made and to
          what it reflects.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          J. The system-recording assertion (PS pp. 5, 8)
        </h3>
        <p className="mt-3">
          Respondent represents that recording is "applied broadly" and not directed at any
          individual. The relevant question is the pattern of access during Charging Party's FMLA
          period. See <Ex id="EX-006" />. Respondent has not produced Verint monitoring access
          logs for that period, and that production would be dispositive of the broadly-applied
          claim.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          K. The chat-deletion assertion (PS p. 8, § II.D)
        </h3>
        <p className="mt-3">
          Respondent represents that chat deletion was "consistent with [its] retention policy."{" "}
          <Ex id="EX-002" /> documents October 2025 preservation concerns. A duty to preserve
          attached at the time of the May 2024 prior charge. Deletion after that point —
          regardless of routine policy — implicates spoliation, not policy compliance, and should
          be addressed by production of the litigation-hold notice and custodial activity log.
        </p>

        {/* Section III */}
        <h2 className="mt-10 font-display text-lg tracking-tight">III. Legal Standards</h2>
        <p className="mt-3">
          Respondent's Position Statement applies the wrong legal standards in several respects:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            <strong>Materially adverse action.</strong> <em>Burlington Northern v. White</em>,
            548 U.S. 53 (2006), governs — not termination alone.
          </li>
          <li>
            <strong>Causation knowledge.</strong> <em>Raad</em>, 323 F.3d 1185 (9th Cir. 2003) —
            awareness of the existence of protected activity is sufficient.
          </li>
          <li>
            <strong>Intra-group discrimination.</strong> <em>Oncale</em>, 523 U.S. 75 (1998);{" "}
            <em>Castaneda</em>, 430 U.S. 482 (1977).
          </li>
          <li>
            <strong>Hostile-environment totality.</strong> <em>Harris v. Forklift Sys.</em>, 510
            U.S. 17 (1993) — totality of circumstances, not incident-by-incident dismissal.
          </li>
          <li>
            <strong>Pretext.</strong> <em>Reeves v. Sanderson Plumbing Prods.</em>, 530 U.S. 133
            (2000) — inconsistent, shifting, or contradicted explanations support an inference of
            pretext, which is the pattern reflected in Respondent's own HR statements compared to
            its Position Statement.
          </li>
        </ul>

        {/* Section IV */}
        <h2 className="mt-10 font-display text-lg tracking-tight">
          IV. Documents the Division Should Request
        </h2>
        <p className="mt-3">
          To test the assertions on which the Position Statement relies, Charging Party
          respectfully requests that the Division direct Respondent to produce:
        </p>
        <ol className="mt-2 list-decimal space-y-1 pl-6">
          <li>
            Every waitlist ticket submitted on Charging Party's behalf (May 2024, July 2024, July
            2025), with author, submission date, and audit history.
          </li>
          <li>
            The complete unredacted Team Leader waitlist (2023–present), with request date,
            status, status-change history, and prior modifications.
          </li>
          <li>
            All documentation of the May 2025 day-shift "offer" — offeror, shift, date, channel,
            and Charging Party's recorded response.
          </li>
          <li>
            Director-level approval for the change from Temporary to Permanent status (required
            under the applicable SOW).
          </li>
          <li>The Team Ratios 2024 file change history (September 24, 2024 modification).</li>
          <li>The April 28, 2026 movement worksheets and any edit/authorship metadata.</li>
          <li>
            The Karena Lesure assignment-change approval and all related communications among
            Steve Seevers, Julie Cahoon, Amber Laye, and Michelle Swindell.
          </li>
          <li>
            All communications between Cyndy Smith and Michelle Swindell regarding the April 22,
            2026 calibration meeting.
          </li>
          <li>Verint monitoring access logs for Charging Party covering the FMLA period.</li>
          <li>
            For each internal posting Charging Party applied to: the hiring decisionmakers, the
            selected candidates, the qualification criteria used, and the demographic composition
            of the interview panels. See <Ex id="EX-055" />.
          </li>
          <li>
            The litigation-hold notice issued in connection with the May 2024 prior charge and
            all custodial deletion/retention activity since that date.
          </li>
        </ol>

        {/* Section V */}
        <h2 className="mt-10 font-display text-lg tracking-tight">V. Conclusion</h2>
        <p className="mt-3">
          Respondent's Position Statement does not rebut the Charge; it reframes it. It treats
          the absence of records Respondent controls as a failure of proof, it describes as
          "neutral" a process its own HR has admitted was driven by leadership discretion, and it
          omits the 2024 evaluation that is the principal performance action at issue.
          Charging Party has identified comparators by name, tied each material event to a
          specific exhibit, and described adverse actions that meet the{" "}
          <em>Burlington Northern</em> standard.
        </p>
        <p className="mt-3">
          For the reasons set forth above, Charging Party respectfully requests that the Arizona
          Civil Rights Division and the EEOC decline to issue a no-cause determination, direct
          Respondent to produce the records identified in Section IV, and proceed with a full
          investigation on the merits.
        </p>

        <p className="mt-8">Respectfully submitted,</p>
        <div className="mt-8">
          <div className="border-b border-foreground/40 pb-1 text-[13px] italic">
            /s/ Shawnna Harbin
          </div>
          <div className="mt-1 text-[12px]">Shawnna Harbin</div>
          <div className="text-[12px] text-foreground/70">Charging Party, Pro Se</div>
        </div>

        <div className="mt-10 border-t border-border pt-4 text-[11px] text-foreground/60">
          Enclosures: Evidence Appendix (cited exhibits, attached). cc: U.S. Equal Employment
          Opportunity Commission (EEOC No. 35A-2026-00320).
        </div>
      </article>

      {/* Print-only appendix — embeds cited exhibit images into the PDF */}
      <PrintEvidenceAppendix
        exhibitIds={CITED_EXHIBITS}
        title="Evidence Appendix — Formal Response to Position Statement"
      />
    </div>
  );
}
