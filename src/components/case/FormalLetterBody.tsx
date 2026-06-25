import { Link } from "@tanstack/react-router";
import { PrintPdfButton } from "@/components/case/PrintPdfButton";
import { PrintEvidenceAppendix } from "@/components/case/PrintEvidenceAppendix";


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

export function FormalLetterBody() {
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
          A. Response to Respondent's Narrative of Charging Party's Employment
          (PS pp. 2–3, § I.B — "Ms. Harbin's Employment with Discover")
        </h3>
        <p className="mt-3">
          Respondent opens Section I.B with the assertion that Charging Party "worked within
          established operational and supervisory structures and was subject to the same
          performance management, scheduling, and internal mobility processes that applied
          uniformly to all similarly situated employees." That sentence is the foundation on
          which the remainder of the Position Statement rests, and it is contradicted by the
          investigative record.
        </p>
        <p className="mt-3">
          The "uniform application" framing cannot be reconciled with the comparator and
          process evidence already produced. Respondent's own Human Resources representative
          told Charging Party on the November 6, 2025 follow-up call that comparator
          movement occurred "because of leadership, not the waitlist." See{" "}
          <Ex id="EX-HR-CALL" />. The May 12, 2026 Karena Lesure reassignment was granted
          because Julie Cahoon "specifically asked." See <Ex id="EX-019" />. Named
          comparators — Tyler Millisock, Hunter Samuel, Marc Case, Marissa Mascarenas, and
          Karena Lesure — received favorable scheduling and assignment treatment that
          Charging Party was denied under the same purportedly "neutral" process. See{" "}
          <Ex id="EX-010" />. A process that produced these outcomes was not applied
          uniformly to Charging Party.
        </p>
        <p className="mt-3">
          Respondent's representation that Charging Party "performed her role without
          incident" from April 2023 through mid-2024 is consistent with Charging Party's
          position and with the contemporaneous record. It is also legally significant: it
          forecloses any later suggestion that pre-existing performance concerns explain the
          adverse actions that followed her May 6, 2024 EEOC charge and May 29, 2024 formal
          internal complaint. Whatever changed in late 2024 and 2025, it was not Charging
          Party's underlying performance.
        </p>
        <p className="mt-3">
          Respondent's reference to "monthly scorecards that roll into annual performance
          ratings" likewise undercuts its own narrative. The monthly scorecards, IPF
          calculations, and bonus payout for 2024 reflect improved operational metrics, no
          goal rated below Solid, an IPF of approximately 120%, and a bonus payout of
          124.36%. See <Ex id="EX-049" />, <Ex id="EX-050" />, <Ex id="EX-051" />,{" "}
          <Ex id="EX-052" />, <Ex id="EX-053" />. The overall rating of "Solid" attached to
          Exhibit B of the Position Statement is therefore not a neutral summation of the
          scorecards Respondent cites; it is a downward departure from them. That
          departure — the first review cycle after the EEOC charge and the formal
          complaint — is itself an adverse action under <em>Burlington Northern v. White</em>,
          548 U.S. 53 (2006), because it reduced merit impact and excluded Charging Party
          from the Department Manager training cohort, an internal promotional pipeline.
        </p>
        <p className="mt-3">
          The temporal pattern of the overall ratings reinforces this point. In 2023, before
          any protected activity, Charging Party received an overall rating of{" "}
          <strong>Strong</strong>. In 2024, the first review cycle following her May 6, 2024
          EEOC charge and May 29, 2024 formal internal complaint, the overall rating dropped
          to <strong>Solid</strong> — even though her measurable performance improved, her
          bonus paid out at 124.36% of target, and no individual goal was rated below Solid.
          In 2025, after the events at issue and after Respondent was already defending its
          actions in this matter, the overall rating returned to <strong>Strong</strong>.
          See <Ex id="EX-049" />, <Ex id="EX-050" />, <Ex id="EX-051" />,{" "}
          <Ex id="EX-052" />, <Ex id="EX-053" />.
        </p>
        <p className="mt-3">
          The Strong → Solid → Strong sequence is probative for two reasons. First, 2024 is
          the only year in the sequence that followed protected activity, and it is the only
          year in which the overall rating departed downward from the underlying scorecards,
          IPF, and bonus payout. Under <em>Reeves v. Sanderson Plumbing Prods., Inc.</em>,
          530 U.S. 133 (2000), an evaluation that is inconsistent with the contemporaneous
          metrics it purports to summarize supports an inference of pretext. Second, the
          consequences of the 2024 Solid rating were not cosmetic: it reduced Charging
          Party's merit impact and excluded her from the Department Manager training
          cohort — the internal promotion pipeline. Respondent's representation that
          Charging Party's "compensation, responsibilities, and opportunities remained
          unchanged" cannot be squared with a downgrade that affected both pay and
          advancement opportunity in the single review cycle that immediately followed her
          protected activity.
        </p>

        <p className="mt-3">
          Respondent's procedural caveats in the same section — that it "does not waive…
          any and all substantive and procedural defenses" and that "any efforts to contact
          its current managers be directed through its counsel" — are noted. They do not,
          however, supply factual content responsive to the Charge, and they cannot
          substitute for the documentary production identified in Section V below.
          Charging Party respects Respondent's right to route witness contact through
          counsel and asks only that the Division ensure such routing does not delay or
          obstruct the production of records the Position Statement places at issue.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          B. Response to Respondent's Characterization of Charging Party's Prior EEOC Charge
          (PS pp. 2–3, § I.B.1)
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
          C. The "no record of any prior request" / "day-shift" assertion (PS p. 3, §I.B.3; p. 4, §I.B.5)
        </h3>

        <p className="mt-3">
          Charging Party disputes Respondent's characterization of her scheduling history, her
          original request, and the reason she was later placed into the AM/day-shift waitlist
          process. Respondent represents that when Mr. Glover assumed responsibility for
          Charging Party's team he became aware that she "believed" she had previously requested
          a "day-shift schedule," but that "there was no record of any such request in the
          centralized scheduling system." That framing is incomplete and misleading in three
          respects.
        </p>

        <p className="mt-3">
          <strong>First, the original request was mid-shift, not day shift.</strong> Charging
          Party's documented request was to return to her mid-shift schedule. The absence of a
          record in a system Respondent solely controls does not establish that no request was
          made; it supports Charging Party's position that Respondent failed to properly
          document or process her mid-shift request. Recasting that request as a "day-shift"
          request — and then placing Charging Party on an AM/day-shift waitlist — does not
          neutralize the original mid-shift issue, it confirms it.
        </p>

        <p className="mt-3">
          <strong>Second, the waitlist failure was already part of the May 2024 protected
          activity.</strong> In her May 29, 2024 written complaint, Charging Party specifically
          raised that she had repeatedly requested to move to a different role, department, or
          schedule, that she had been assured she would be placed on a waitlist for a new
          schedule, and that "unfortunately this never happened." See <Ex id="EX-001" />. The
          May 31, 2024 HR intake call with Susan Marcinko confirms the same: Charging Party
          explained that Ms. Blackson had told her she was placed on the waitlist, but that
          when she contacted Ryan Tafoya, a Department Manager, he confirmed she was not on
          the mid-shift list. See <Ex id="EX-002" />. Charging Party has preserved the
          April 26, 2024 exchange in which Mr. Tafoya confirmed she was not currently on the
          MID-shift list. See <Ex id="EX-008" />. HR's June 5, 2024 follow-up then arranged
          Charging Party's reassignment to Mr. Glover's organization effective July 1, 2024 —
          confirming HR was actively addressing the waitlist/schedule complaint, not routing
          her through a routine neutral process. See <Ex id="EX-002" />.
        </p>

        <p className="mt-3">
          <strong>Third, the September 19, 2025 conversation with Mr. Glover confirms the
          issue was mid-shift.</strong> Charging Party directly challenged Mr. Glover's
          characterization that he had "offered" her a shift; the contemporaneous record
          reflects the issue was mid-shift, not "day shift." See <Ex id="EX-005" />.
        </p>

        <p className="mt-3">
          Respondent has not produced (a) the ticket Mr. Glover allegedly submitted on
          Charging Party's behalf in July 2024, (b) any document showing whether that request
          was entered as mid-shift, AM/day shift, or another category, (c) the custodial chain
          through which it was processed (reportedly Edina Markus), or (d) the audit history
          showing additions, deletions, or status changes to Charging Party's entry. If
          Respondent's position is that there was no record of the prior request, Respondent
          should explain why no record exists after Charging Party requested the schedule,
          after Mr. Tafoya confirmed she was not on the MID list, after she raised it in her
          May 29, 2024 complaint, and after HR discussed it with her on May 31, 2024.
        </p>

        <p className="mt-3">
          Respondent also omits that the PM assignment was originally presented as
          <em> temporary</em>. After Charging Party's protected activity, Respondent later
          treated or described that PM assignment as permanent, yet Respondent's own records
          continued to reflect temporary status through at least February 2025. When Charging
          Party was re-added to the waitlist on July 10/17, 2025, her status appeared as
          PM / Permanent with a new July 17, 2025 request date — without notice, ticket,
          approval, or documentation. That inconsistency matters because Respondent's own
          process treats temporary and permanent shift movement differently. See{" "}
          <Ex id="EX-008" />, <Ex id="EX-041" />, <Ex id="EX-042" />, <Ex id="EX-043" />,{" "}
          <Ex id="EX-048" />.
        </p>

        <p className="mt-3">
          Charging Party further disputes Respondent's statement that management "took steps
          to bring [her] closer to [her] desired schedule" by moving her to a four-day,
          ten-hour schedule beginning at 9:00 a.m. That framing presents a management-created
          remedy. The record is otherwise. After Charging Party was not moved to the
          mid-shift schedule she had requested, she asked Mr. Glover whether she could work a
          four-day, ten-hour schedule with one weekday off so she could have at least one day
          with her son. She was initially told no and told the only path was full team
          agreement. Charging Party then had to canvass her team and secure their consent
          herself; her understanding is that Mr. Carfagna was surprised she was able to
          accomplish it. The four-day, ten-hour schedule was therefore a compromise Charging
          Party organized after Respondent failed to place her on the mid-shift waitlist and
          failed to move her to the schedule she had actually requested. It required longer
          ten-hour days, kept her in an unfavorable closing posture, and should not be
          presented as evidence of favorable treatment or resolution of the schedule issue.
        </p>

        <p className="mt-3">
          Respondent also states that Charging Party was positioned approximately "fifth or
          sixth" on a lengthy waitlist. Charging Party requests the complete underlying
          records supporting that representation, including ticket number, request date,
          requested shift type, current shift, temporary/permanent status, waitlist ranking,
          and full version history. The preserved record reflects material inconsistencies:
          Charging Party was not on the MID-shift list when she should have been; Respondent
          later placed her under an AM/day-shift category rather than her original mid-shift
          request; her status appeared as Temporary; her waitlist row was later removed; and
          she remained absent from the controlling waitlist while other employees continued
          to qualify and move. See <Ex id="EX-008" />, <Ex id="EX-041" />, <Ex id="EX-042" />,{" "}
          <Ex id="EX-043" />, <Ex id="EX-048" />.
        </p>

        <p className="mt-3">
          For these reasons, Respondent's statement does not accurately describe the
          scheduling issue. The evidence shows that Charging Party requested mid-shift, that
          her failure to be added to the mid-shift waitlist was part of her May 2024
          protected complaint, that HR was on actual notice, that Respondent later placed her
          under the wrong schedule category, and that the four-day, ten-hour schedule was a
          self-organized compromise — not a remedy — while Charging Party continued to be
          denied the schedule movement she had requested.
        </p>


        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          D. The "neutral, centralized waitlist" assertion (PS pp. 4–5, §§ I.B.6–7; p. 6, §II.A)
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
          E. The "May 2025 day-shift offer" assertion (PS p. 4, § I.B.5; p. 7, § II.B)
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
          F. The "no similarly situated comparator" assertion (PS pp. 2, 6, 10)
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
          G. The "continuously employed" assertion (PS pp. 2, 6, 8, 10)
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
          H. Response to Respondent's Characterization of Mr. Glover's Role and Knowledge
          (PS p. 3, § I.B.2; p. 8, § II.B)
        </h3>
        <p className="mt-3">
          Charging Party disputes Respondent's attempt to distance Allan Glover from her
          protected activity and the adverse treatment that followed. Respondent represents
          that Mr. Glover did not become Charging Party's manager until July 2024, that the
          prior charge did not involve him, and that he "was not informed of the substance"
          of the allegations. That framing is incomplete and misleading.
        </p>
        <p className="mt-3">
          Charging Party's position is not that Mr. Glover caused the events that gave rise
          to the original EEOC charge. Charging Party's position is that, after she engaged
          in protected activity, Respondent placed her under Mr. Glover's management and he
          became the manager through whom decisions and communications affecting her
          schedule, waitlist status, performance evaluation, advancement, corrective-action
          processing, and working conditions were made or transmitted. Respondent cannot
          insulate itself from liability by observing that Mr. Glover was not the original
          subject of the prior charge when the adverse treatment continued — and in several
          respects escalated — after he became her manager.
        </p>
        <p className="mt-3">
          Respondent also omits the circumstances in which Mr. Glover became Charging
          Party's manager. The reassignment to Mr. Glover's organization was not an ordinary
          rotation untethered from the protected activity. HR specifically arranged the move
          because Charging Party had complained about Rosanna Blackson and because HR
          wanted to limit her one-on-one interactions with Ms. Blackson during the
          investigation. Susan Marcinko told Charging Party that she had spoken with Greg
          Carfagna about moving Charging Party to Mr. Glover's organization effective
          July 1, 2024, and that, in the interim, Charging Party could go to Mr. Glover for
          one-on-one direction in place of Ms. Blackson. See <Ex id="EX-HR-CALL" />,{" "}
          <Ex id="EX-002" />. Mr. Glover's involvement therefore began in the context of an
          active HR investigation into a protected complaint — not as a neutral management
          change disconnected from the underlying issues.
        </p>
        <p className="mt-3">
          Respondent's assertion that Mr. Glover "was not informed of the substance" of the
          allegations should be tested by the documentary record. At a minimum, Respondent
          — through its HR function and leadership — had actual knowledge of the substance
          of the complaint. The May 29, 2024 formal complaint was directed to multiple HR
          and leadership recipients and described race discrimination, retaliation, an
          alleged racial slur attributed to Ms. Blackson, denied transfer and schedule
          requests, and the failure to properly place Charging Party on the mid-shift
          waitlist. HR then discussed the matter with Mr. Carfagna and arranged the move to
          Mr. Glover's organization. If Respondent maintains that Mr. Glover was
          deliberately kept uninformed of the substance of the investigation while being
          assigned as Charging Party's interim and then direct manager, Respondent should
          produce the communications showing what Mr. Glover was told — by Mr. Carfagna,
          Ms. Marcinko, Employee Relations, or anyone else — before he began managing
          Charging Party.
        </p>
        <p className="mt-3">
          The record also reflects that Charging Party herself put Mr. Glover on notice of
          the substance of the prior complaint. In a Microsoft Teams video meeting,
          Charging Party informed Mr. Glover that she had filed a complaint against
          Ms. Blackson and explained that the ongoing conduct she was experiencing could be
          retaliatory in nature. Mr. Glover responded that he had confronted Ms. Blackson
          about the issue — using profanity in doing so — and had directed her to correct
          the conduct. That contemporaneous exchange is direct evidence that Mr. Glover
          knew (a) Charging Party had engaged in protected activity directed at Ms. Blackson
          and (b) the conduct at issue was ongoing and required corrective intervention.
          Respondent's representation that Mr. Glover "was not informed of the substance"
          cannot be reconciled with his own statement that he confronted the subject of the
          complaint about that very conduct.
        </p>
        <p className="mt-3">
          Even setting aside the substance question, Respondent concedes that Mr. Glover
          "later became aware that Ms. Harbin had filed a prior EEOC charge." Under{" "}
          <em>Raad v. Fairbanks North Star Borough School District</em>, 323 F.3d 1185 (9th
          Cir. 2003), decisionmaker awareness of the existence of protected activity is
          sufficient to establish the knowledge element of retaliation causation; awareness
          of every factual particular is not required. The adverse actions described in
          Section II.G above all post-date Mr. Glover's admitted awareness.
        </p>
        <p className="mt-3">
          Mr. Glover later became the decisionmaker or participant in several of the
          disputed issues at the center of this Charge, including Charging Party's schedule
          movement, waitlist status, the alleged May 2025 day-shift "offer," administration
          of the 2024 performance review, internal-opportunity discussions, Training Bay
          movement discussions, and FMLA- and leave-related communications. Respondent's
          conclusory representation that he did not act "based on" the prior complaint is
          not evidence. The contemporaneous record shows that after protected activity,
          Charging Party remained blocked from schedule movement, her waitlist history was
          disputed and later reset, her 2024 overall rating dropped from Strong to Solid,
          and other leaders received schedule movement she did not. See{" "}
          <Ex id="EX-008" />, <Ex id="EX-010" />, <Ex id="EX-041" />, <Ex id="EX-042" />,{" "}
          <Ex id="EX-049" />, <Ex id="EX-050" />, <Ex id="EX-051" />, <Ex id="EX-052" />,{" "}
          <Ex id="EX-053" />.
        </p>
        <p className="mt-3">
          Finally, retaliation liability does not depend on the final-line manager having
          been the original actor in the underlying discrimination complaint. The relevant
          inquiry is whether Respondent, acting through its managers, HR, and leadership,
          had knowledge of Charging Party's protected activity and thereafter subjected her
          to materially adverse treatment. HR, Mr. Carfagna, and other members of
          leadership indisputably had actual notice. Mr. Glover then became the manager
          through whom many of the later disputed decisions and explanations were
          communicated. His later actions are therefore not insulated from the prior
          protected activity merely because he was not named in the original charge.
        </p>


        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          I. The "same protected class" defense (PS p. 7, § II.A)
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
          J. The hardship-fund assertion (PS p. 6, § I.B.8)
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
          K. The HBCU-comment denial (PS p. 6, § I.B.8)
        </h3>
        <p className="mt-3">
          The comment is contemporaneously documented at <Ex id="EX-005" />. Whether Mr. Glover
          held a formal recruiting role is immaterial to whether the statement was made and to
          what it reflects.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          L. The system-recording assertion (PS pp. 5, 8)
        </h3>
        <p className="mt-3">
          Respondent represents that recording is "applied broadly" and not directed at any
          individual. The relevant question is the pattern of access during Charging Party's FMLA
          period. See <Ex id="EX-006" />. Respondent has not produced Verint monitoring access
          logs for that period, and that production would be dispositive of the broadly-applied
          claim.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          M. The chat-deletion assertion (PS p. 8, § II.D)
        </h3>
        <p className="mt-3">
          Respondent represents that chat deletion was "consistent with [its] retention policy."{" "}
          <Ex id="EX-002" /> documents October 2025 preservation concerns. A duty to preserve
          attached at the time of the May 2024 prior charge. Deletion after that point —
          regardless of routine policy — implicates spoliation, not policy compliance, and should
          be addressed by production of the litigation-hold notice and custodial activity log.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          N. Response to Respondent's "Performance and Advancement" Narrative (PS § II.C)
        </h3>
        <p className="mt-3">
          Respondent's "Performance and Advancement" section confirms an important fact:
          Charging Party was a strong performer. Respondent acknowledges that she continued
          performing at a high level, that her manager recognized her strong results, and that
          she later received a 2025 rating equivalent to Strong. Charging Party does not
          dispute that she was a strong performer. What is disputed is Respondent's attempt to
          use that strong performance as proof that no harm occurred. Strong performance makes
          the later treatment <em>harder</em> to explain, not easier. If Charging Party was
          consistently performing at a high level, Respondent should explain why she was
          downgraded in 2024, excluded from advancement pipelines, left out of project
          opportunities, repeatedly denied internal mobility, and kept fixed on PM/closing
          while other employees continued moving across departments, schedules, and
          opportunities.
        </p>
        <p className="mt-3">
          Respondent selectively relies on the 2025 Strong rating while omitting the most
          important rating event in the record: the 2024 downgrade. Before protected activity,
          Charging Party received a 2023 overall rating of <strong>Strong</strong>. In the
          first review cycle after her May 2024 EEOC charge and May 29, 2024 formal internal
          complaint, her overall rating dropped to <strong>Solid</strong>. That downgrade
          occurred despite improved measurable performance, no individual goal rated below
          Solid, improved team metrics, and a 124.36% bonus payout.{" "}
          <Ex id="EX-052" />, <Ex id="EX-053" />. After the events at issue, and after
          Respondent was already defending its actions, the rating returned to{" "}
          <strong>Strong</strong> in 2025. The Strong → Solid → Strong pattern is central to
          this Charge. The 2024 Solid rating was the outlier: it followed protected activity,
          it did not match the underlying metrics, and it carried consequences.
        </p>
        <p className="mt-3">
          The 2024 Solid rating was not harmless. Shortly after the 2024 reviews were issued,
          leadership communicated that Unit Managers / Team Leaders needed a rating of
          4 Strong or 5 Outstanding to be eligible for the TL Plus / Department Manager
          training cohort — an internal development pipeline for Department Manager or Area
          Manager advancement. Because Charging Party received a 3 Solid rating in 2024, she
          was excluded from that pipeline. Respondent's statement that her opportunities
          remained unchanged is therefore inaccurate. The rating affected both compensation
          and advancement opportunity.
        </p>
        <p className="mt-3">
          Respondent also states that promotions were handled through a formal posting and
          interview process. The existence of a formal process does not prove the process was
          applied fairly, consistently, or without retaliation. Charging Party's application
          history reflects nearly 50 internal applications from approximately February 2023
          through April 2025. <Ex id="EX-055" />. Despite strong performance, leadership
          experience, operational knowledge, process expertise, and repeated efforts to
          advance internally, she was not selected. Respondent has not produced the
          decisionmakers, selected candidates, interview notes, scoring criteria, recruiter
          notes, comparative qualifications, or communications explaining those decisions.
          Respondent's statement that "another candidate was determined to be the best fit" is
          conclusory: it identifies no decisionmaker, no qualifications compared, no business
          need, no interview scoring, no calibration, no knowledge analysis, and no comparison
          of the selected candidate's tenure, performance, ratings, experience, or
          protected-activity history.
        </p>
        <p className="mt-3">
          Respondent's further assertion that "no hiring decisionmaker would have known of
          [Charging Party's] prior charge" is unsupported. Respondent has not identified the
          hiring decisionmakers, interview panels, recruiters, or managers for each role, nor
          produced the communications related to those applications. The May 29, 2024 formal
          complaint was distributed to multiple leaders and Employee Relations representatives,
          and Charging Party's schedule, transfer, project, performance, and advancement
          concerns were repeatedly raised thereafter. Respondent cannot defeat causation by a
          broad knowledge denial while withholding the records that would show who participated
          in each decision and what they knew.
        </p>
        <p className="mt-3">
          Respondent's advancement narrative is also too narrow because it treats advancement
          as only formal job postings. At Discover, advancement also occurred through
          leadership visibility, project assignments, process-improvement work, Department
          Manager development cohorts, cross-department movement, schedule flexibility, and
          opportunities to present or be credited for operational work. After protected
          activity, Charging Party was excluded from those opportunities despite her
          performance and process knowledge. She had created a Compliance Check concept and
          related materials, but Cyndy Smith's group later recreated or used the idea while
          excluding her from related meetings and credit. She also developed a Call Flow /
          process tool and had a scheduled meeting to present it to Greg Carfagna, but
          Mr. Carfagna did not attend — eliminating an opportunity to demonstrate concrete
          process-improvement work to leadership.
        </p>
        <p className="mt-3">
          This was not happening in isolation. During the same period, other employees
          continued receiving movement across LVAR, MVAR, HVAR, PRE-D/DBC, Training Bay, and
          other areas while Charging Party remained fixed on PM/closing and was told movement
          was unavailable, waitlist-controlled, or not operationally feasible. Respondent
          cannot separate "advancement" from those opportunities because schedule movement,
          department movement, project exposure, and leadership visibility all affected career
          development.
        </p>
        <p className="mt-3">
          Respondent's position therefore creates a contradiction. Respondent admits Charging
          Party was a strong performer, yet asks the Division to accept that her lack of
          advancement, project exclusion, 2024 rating downgrade, TL Plus exclusion, and
          continued schedule immobility were all neutral and unrelated to protected activity.
          Respondent should be required to explain why the only rating downgrade occurred
          after protected activity; why the 2024 Solid rating did not match the underlying
          metrics; why that rating excluded Charging Party from the TL Plus / Department
          Manager development pipeline; why nearly 50 internal applications did not result in
          advancement; why project opportunities and credit were withheld; why leadership did
          not support her process-improvement work; why Mr. Carfagna did not attend the
          scheduled Call Flow tool presentation; and why other employees continued receiving
          movement and opportunity while Charging Party remained blocked. The "Performance and
          Advancement" section does not rebut the Charge — it confirms strong performance
          while failing to explain the adverse actions that followed protected activity.
        </p>

        {/* Section II.O - May 2025 Shift Opportunity */}
        <h3 className="mt-8 font-display text-base tracking-tight">
          O. Response to Respondent's "May 2025 Shift Opportunity" Assertion
        </h3>
        <p className="mt-3">
          Respondent's "May 2025 Shift Opportunity" assertion is disputed. Respondent states
          that a day-shift opportunity became available to Charging Party in May 2025, that
          she declined it because of graduate school commitments at the University of Arizona,
          and that she was removed from the waitlist consistent with standard procedure. That
          is not what happened.
        </p>
        <p className="mt-3">
          Charging Party did not receive a May 2025 shift offer. She was not offered an AM
          shift, a mid-shift, or any other shift movement opportunity in May 2025. She did
          not decline any shift opportunity because of graduate school. She has not been
          offered any shift since being placed on or associated with the waitlist.
        </p>
        <p className="mt-3">
          Respondent has not produced any documentation supporting the alleged May 2025
          offer. Respondent has not identified the person who allegedly made the offer, the
          exact shift offered, the department or role involved, the date and time of the
          offer, the method of communication, the person who allegedly confirmed her
          decline, or where her alleged decline was recorded. Respondent also has not
          produced a Teams message, email, ticket, calendar invite, written confirmation, or
          any written decline.
        </p>
        <p className="mt-3">
          The timeline also contradicts Respondent's explanation. Respondent states that
          Charging Party was removed from the waitlist after declining a May 2025
          opportunity. However, the preserved waitlist evidence shows she had already been
          removed months earlier. The January 22, 2025 saved waitlist version showed
          Charging Party on the list, with a June 26, 2024 request date, PM/Temporary
          status, and Qualifies = Yes. Respondent's records still showed her as
          PM/Temporary through February 18, 2025. Then, after Jen Roy edited the waitlist
          multiple times on February 25, 2025, Charging Party's row was removed while
          junior employees remained on the list and continued to qualify.
        </p>
        <p className="mt-3">
          That chronology matters. If Respondent's position is that Charging Party was
          removed because she declined a May 2025 offer, Respondent must explain why she
          was already removed from the waitlist in February 2025. A May 2025 alleged
          decline cannot explain a February 2025 removal.
        </p>
        <p className="mt-3">
          Respondent's reference to "standard procedure" is also unsupported. The
          waitlist/SOW records reflect that a DM must open a ticket with CFS to request a
          TL shift change or placement on the waitlist. If Allan Glover allegedly submitted
          schedule-change requests on Charging Party's behalf, Respondent should produce
          those tickets. If a May 2025 shift opportunity was allegedly offered and
          declined, Respondent should produce the ticket, offer communication, decline
          documentation, and audit trail showing the offer, the response, and the
          resulting removal.
        </p>
        <p className="mt-3">
          This section addresses only Respondent's May 2025 offer/decline assertion. The
          separate July 2025 waitlist screenshot, the limited five-row snippet, the July
          re-add, the July 17 request date, and the PM/Permanent status issue are addressed
          separately. However, even without the July evidence, Respondent's May 2025
          explanation is not supported by the February waitlist records.
        </p>
        <p className="mt-3">
          Respondent's May 2025 assertion therefore raises material factual disputes. If
          Charging Party was removed because she declined an alleged May 2025 offer, why
          was she already removed in February 2025? If an offer was made, where is the
          written offer or ticket? If she declined, where is her written or recorded
          decline? If removal after a declined offer was standard procedure, where is the
          policy and the audit trail showing that procedure was followed? For these
          reasons, Respondent's May 2025 shift-opportunity assertion should not be accepted
          without production of the underlying records identified in Section IV.
        </p>

        {/* Section II.P - July 2025 Waitlist Status */}
        <h3 className="mt-8 font-display text-base tracking-tight">
          P. Response to Respondent's "July 2025 Waitlist Status" Assertion
        </h3>
        <p className="mt-3">
          Respondent's "July 2025 Waitlist Status" section is incomplete and misleading.
          Respondent states that, in July 2025, Charging Party informed Allan Glover that
          her circumstances had changed and that she "now" needed to move to a day
          schedule. That framing is not accurate.
        </p>
        <p className="mt-3">
          July 2025 was not the beginning of Charging Party's schedule request. Her
          original request was for mid-shift, and she understood that she was already
          supposed to be on the waitlist for mid-shift. In June 2025, after remaining
          stuck on PM/closing and after Respondent failed to resolve the mid-shift issue,
          she asked to also be considered for AM shifts in addition to the mid-shift
          request. She did not abandon the mid-shift request. She expanded the request
          because Respondent had still not moved her and she needed any earlier schedule
          that would allow her to better manage her family and childcare obligations.
        </p>
        <p className="mt-3">
          Respondent's statement that a "new request" was submitted on July 10, 2025
          ignores what had already happened. Charging Party had requested mid-shift in
          2024, discovered in April 2024 that she had not been added to the mid-shift
          waitlist, raised that issue in her May 29, 2024 formal complaint, and later
          had records showing she was on a waitlist with a June 26, 2024 request date.
          Respondent's own records also showed her as PM/Temporary through February 2025.
          Then, after Jen Roy edited the waitlist multiple times on February 25, 2025,
          Charging Party's name was removed from the waitlist while other employees
          remained listed and continued to qualify.
        </p>
        <p className="mt-3">
          That February removal matters. By the time Charging Party asked Allan in July
          2025 where she stood on the waitlist, she was asking about a process she
          believed she had already been placed into, but the underlying record shows she
          had been removed months earlier. Respondent cannot fairly characterize July
          2025 as a clean "new request" without explaining why she had been removed in
          February, why she was not on the controlling waitlist in July, and why the
          earlier request date was not preserved.
        </p>
        <p className="mt-3">
          In July 2025, Charging Party asked Allan for her specific numbered position on
          the waitlist. That request triggered the Jen Roy screenshot issue. On July 14,
          2025, Allan contacted Jen Roy and asked where Charging Party fell on the
          waitlist. Within approximately one minute, Jen sent Allan a limited screenshot
          showing a five-row "Shift Change Request" list that included "LVAR — Shawnna
          Harbin — PM → AM." Allan thanked her within that same minute and later
          forwarded the screenshot to Charging Party.
        </p>
        <p className="mt-3">
          That screenshot was not the complete waitlist. It omitted the material fields
          needed to verify her actual position and whether Respondent was applying the
          process correctly, including Date Requested, Months as CAR TL,
          Temporary/Permanent status, and Qualifies = Yes/No. Those fields were not
          minor. They were the exact fields needed to determine whether the process was
          chronological, whether she qualified, whether her earlier request date was
          preserved, and whether her temporary/permanent status had been changed.
        </p>
        <p className="mt-3">
          The timing of the exchange is also significant. Allan asked Jen where Charging
          Party was on the waitlist, and Jen provided the limited screenshot within
          approximately sixty seconds. The exchange then ended with Allan saying thank
          you. That speed, combined with the omitted columns, raises a serious question
          about whether the screenshot was a selective or prepared view rather than the
          complete controlling source record.
        </p>
        <p className="mt-3">
          The July 14 screenshot also did not match the actual SharePoint waitlist
          record. The controlling "Current TL Shifts" SharePoint waitlist on or around
          that time did not contain Charging Party's name. The July 3, 2025 saved
          version, co-edited by Edina Markus and Jen Roy, showed other employees listed
          and qualifying while Charging Party remained absent. She was not actually
          re-added to the live waitlist until July 16, 2025, and the record then showed
          a new July 17, 2025 request date.
        </p>
        <p className="mt-3">
          That July 17 request date is another material inconsistency. Charging Party's
          mid-shift request existed since 2024. The January 2025 waitlist snapshot
          reflected a June 26, 2024 request date. Yet after she asked Allan where she
          stood and after Jen produced the July 14 screenshot, she was re-added with a
          July 17, 2025 request date. That appears to reset her seniority and materially
          harm her ability to receive the schedule movement she had been seeking.
        </p>
        <p className="mt-3">
          Respondent also changed or reflected her status as PM/Permanent without
          explanation. Charging Party's PM assignment had been presented to her as
          temporary, and Respondent's own records continued to show PM/Temporary status.
          When she was later re-added, her status appeared as PM/Permanent without
          notice, ticket, approval documentation, or explanation. That matters because
          Respondent's own shift-change process distinguishes between temporary and
          permanent movement.
        </p>
        <p className="mt-3">
          Respondent's assertion that the process was "centralized and uniformly
          applied" is further contradicted by the movement occurring around the same
          period. While Charging Party was removed, omitted, re-added, and reset, other
          employees remained on the list, continued qualifying, or moved across
          schedules/departments. The February 2025 version history showed her row
          removed while employees such as Cody Christensen, Hunter Samuel, and Courtney
          Griffith remained and continued to qualify. Comparator evidence also shows
          that employees such as Tyler Millisock were able to move shifts or departments
          without the same waitlist barriers being applied to Charging Party.
        </p>
        <p className="mt-3">
          Respondent's statement that managers "do not control" the process is also
          disputed by Respondent's own later explanations. During the September 19, 2025
          conversation with Allan, Allan stated there "wasn't a criteria" for Training
          Bay movement and identified himself, Amber, Trevor, and Dan as part of the
          decision-making group. When Charging Party raised that other employees had
          moved while she remained stuck, Allan did not provide a clear waitlist-based
          explanation. In the November 6, 2025 HR follow-up call, HR also discussed the
          waitlist and comparator movement, including Tyler, and acknowledged the
          explanation she had been given by Allan. Those later discussions show that
          Respondent's "strict centralized process" narrative did not resolve the actual
          movement decisions or the comparator inconsistencies.
        </p>
        <p className="mt-3">
          For these reasons, Respondent's July 2025 waitlist explanation should not be
          accepted as evidence of transparency or uniform application. July 2025 was not
          a new scheduling issue. It was the point at which Charging Party asked where
          she stood on a waitlist she believed she was already on, after Respondent had
          failed to properly process her mid-shift request, after she had been removed
          in February, and after she had expanded her request in June to include AM in
          addition to mid-shift.
        </p>

        {/* Section II.Q - August–September 2025 Events */}
        <h3 className="mt-8 font-display text-base tracking-tight">
          Q. Response to Respondent's "August–September 2025 Events" Narrative
        </h3>
        <p className="mt-3">
          Respondent's "August–September 2025 Events" section is incomplete and
          contradicted by the recorded September 19, 2025 conversation Respondent itself
          appears to reference.
        </p>
        <p className="mt-3">
          Respondent first states that Allan Glover continued to support Charging
          Party's career development in August 2025 by encouraging her to apply for
          additional opportunities, including a role within the DNA organization.
          Charging Party does not dispute that she applied for internal opportunities,
          including opportunities Allan encouraged her to pursue. Encouraging her to
          apply for a role, however, does not rebut the claim that she was being blocked
          from meaningful advancement, schedule movement, project visibility, and
          internal mobility. Respondent has not produced the DNA posting, selected
          candidate information, interview notes, scoring criteria, recruiter notes,
          hiring decisionmakers, or communications showing why she was not selected. The
          statement that another candidate was "more qualified" is conclusory unless
          Respondent produces the records supporting that claim.
        </p>
        <p className="mt-3">
          Respondent's August framing also omits the broader context of the August 2025
          conversation with Allan. During that time, Charging Party raised the impact of
          her fixed PM/closing schedule on her family, including the effect on her son's
          school schedule and her inability to be present during normal evening hours.
          She also raised concerns about being stuck on the waitlist, not receiving
          projects, not being selected for opportunities, and not being able to move
          despite strong performance. Allan told her, in substance, that there was a
          "blockade" and that he did not believe she would be able to get past it. That
          is not consistent with Respondent's current position that she was receiving
          normal support and opportunities.
        </p>
        <p className="mt-3">
          Respondent next states that in September 2025, management evaluated possible
          movement within T-Bay operations and determined movement outside existing
          schedule assignments was not operationally feasible. Respondent should be
          required to produce the September 18, 2025 meeting invite, attendees, notes,
          decision criteria, coverage worksheets, schedule data, and all communications
          reflecting that determination, and to identify who made the decision, what
          options were considered, what criteria were used, and why Charging Party was
          excluded.
        </p>
        <p className="mt-3">
          The September 19, 2025 recorded conversation directly contradicts Respondent's
          description of a strict, uniform, policy-controlled process. During that
          conversation, Allan identified multiple people moving into Training Bay,
          including Michelle, Steve, Marissa, and Josh. When Charging Party asked what
          criteria were used to select people for Training Bay, Allan stated that there
          "wasn't a criteria." When she asked who the final decisionmaker was, Allan
          stated it was "all of us," and when she asked who "all of us" meant, he
          identified "myself, Amber, Trevor, Dan." That statement is inconsistent with
          Respondent's claim that movement was strictly centralized, uniformly applied,
          and outside manager control.
        </p>
        <p className="mt-3">
          The September 19 transcript also confirms that Charging Party's concern was
          not simply disagreement with one decision. She explained to Allan that she was
          raising the lack of availability to move to a different shift, that there had
          been shift movement, and that she was on the waitlist to go to mid-shift.
          Allan responded "Yes," confirming that he understood the issue as a mid-shift
          waitlist issue. This is important because Respondent's Position Statement
          repeatedly attempts to reframe her request as a later day-shift request or a
          July 2025 re-entry, rather than the unresolved mid-shift/waitlist problem that
          had existed since 2024.
        </p>
        <p className="mt-3">
          When Allan then stated, "Shawnna, I offered you—," Charging Party immediately
          disputed that statement. She stated that he had never offered her mid-shift
          and asked when it occurred. Allan then clarified, "No—well—it was mornings."
          Charging Party again disputed that any AM offer had been made and asked when
          it happened, what position it was, and what group it involved. Allan did not
          identify a date, position, department, written offer, ticket, or
          communication. That exchange directly undermines Respondent's current claim
          that she declined a prior day-shift opportunity in May 2025. If that offer
          actually occurred, Respondent should produce the documentation.
        </p>
        <p className="mt-3">
          Respondent also states that management explained other team leaders were hired
          for night shifts but had to attend day classes for onboarding and would later
          transition to night schedules. The September 19 transcript does not resolve
          the comparator issue. During that conversation, Charging Party identified
          specific employees who had moved shifts or worked multiple schedules,
          including Tyler Millisock, Josh, and Hunter. She explained that Tyler had
          worked mid-shift, AM, and PM; that Josh had worked mid-shift and PM; and that
          Hunter came from HVAR, outside their director's area, and moved from mid-shift
          in HVAR to AM in her area. Allan responded that he was "not aware of that."
          That response is not a substantive explanation. It does not show that the
          process was uniform, and it does not rebut the comparator evidence.
        </p>
        <p className="mt-3">
          Respondent's statement that no employee moved ahead of the waitlist outside
          established policy is unsupported. The recorded conversation shows Allan
          acknowledging movement into Training Bay and stating there was no criteria for
          selecting people. It also shows management-level involvement in the decision
          through Allan, Amber, Trevor, and Dan. Respondent cannot rely on the
          September 19 conversation as support for its position while omitting the parts
          of that conversation showing discretionary selection, unclear criteria, and
          management involvement.
        </p>
        <p className="mt-3">
          Respondent's statement that movement outside existing schedules was not
          operationally feasible also requires scrutiny because it appears to have been
          made after Charging Party repeatedly raised that other employees were moving
          across shifts and departments while she remained fixed on PM/closing.
          Respondent should explain why movement suddenly became "not operationally
          feasible" when she requested it, even though other employees were moving into
          Training Bay, across areas, or across schedules. Respondent should also
          produce all records showing whether those employees moved through the
          waitlist, through manager request, through training assignment, through
          preexisting assignment, through accommodation, or through another process.
        </p>
        <p className="mt-3">
          Respondent again relies on the alleged May 2025 day-shift offer and the claim
          that Charging Party re-entered the waitlist on July 10, 2025. She disputes
          both characterizations for the reasons already stated. She did not receive or
          decline any May 2025 shift offer. She had not been properly placed on the
          mid-shift waitlist, she had been removed from the waitlist in February 2025,
          and the July 2025 request was not a clean new request; it was part of the same
          unresolved schedule issue. In the November 6, 2025 HR follow-up call, HR
          repeated Allan's explanation that he submitted two schedule-change requests
          and that a day shift had allegedly been offered and declined. She disputed
          that in real time, explained that she had never been offered the shift, and
          asked for the underlying ticket. No ticket has been produced.
        </p>
        <p className="mt-3">
          For these reasons, Respondent's August–September 2025 narrative should not be
          accepted at face value. The evidence does not show a neutral process that
          Charging Party simply disagreed with. It shows that after she repeatedly
          raised schedule and opportunity concerns, Respondent held a leadership review,
          denied movement as not operationally feasible, and then relied on explanations
          that are contradicted by the recorded September 19 conversation. That
          transcript shows there was no formal criteria for Training Bay selection, that
          managers participated in the decision, that movement was occurring, that
          Charging Party disputed the alleged offer in real time, and that Allan could
          not provide the basic details of any alleged AM or mid-shift offer.
        </p>

        {/* Section II.R - Complaints, Recording, and Hardship Fund */}
        <h3 className="mt-8 font-display text-base tracking-tight">
          R. Response to Respondent's "Complaints, Recording, and Hardship Fund" Narrative
        </h3>
        <p className="mt-3">
          Respondent's "Complaints, Recording, and Hardship Fund" section omits material
          facts and relies on broad statements that are contradicted by the records.
        </p>
        <p className="mt-3">
          First, Respondent states that Charging Party's September 2025 Ethical Concerns
          complaint was processed through standard procedures and that Discover concluded
          she had been offered a schedule change but declined it. Charging Party disputes
          that conclusion. She did not receive or decline a May 2025 shift offer. She was
          not offered AM, mid-shift, or any other shift opportunity in May 2025.
          Respondent has not produced the alleged offer, the alleged decline, the ticket,
          the shift details, the communication, or the person who allegedly recorded her
          response. That conclusion also ignores the waitlist records: Charging Party's
          original request was for mid-shift, she was not properly placed on the MID-shift
          waitlist, she was removed from the waitlist in February 2025, and later records
          reflected inconsistent request dates and status changes. Respondent cannot rely
          on a "standard procedure" conclusion without producing the actual tickets,
          audit trail, waitlist version history, offer documentation, or alleged decline
          documentation.
        </p>
        <p className="mt-3">
          Second, Respondent states that system recording is a standard operational tool
          that applies broadly to Team Leaders and was not directed at Charging Party.
          That does not address the records. Charging Party's Verint evidence shows her
          PC/profile appearing on live monitor while other Team Leaders in her same
          department were logged in and active, but their profiles did not show live
          monitoring active. Respondent is not simply being asked whether Verint exists;
          Respondent is being asked why Charging Party's profile was visible when other
          similarly situated Team Leaders were not. After she reported the issue, other
          profiles later began appearing activated or visible — a sequence that supports
          that her profile appeared differently first, and broader visibility appeared
          only after she complained. HR later confirmed this was not simply Charging
          Party's misunderstanding. In the HR follow-up conversation, HR stated there
          was a technical problem and that she had "more visibility than" she should
          have had; that the issue had been turned over to product owners, the vendor,
          and the BT team; that they did not know what happened; that they did not know
          who did it; and that they were trying to backtrack permissions. Those facts
          contradict Respondent's statement that there is no indication Charging Party
          was treated differently.
        </p>
        <p className="mt-3">
          Third, the Verint issue overlaps with the Teams deletion evidence. On October
          7, 2025, Charging Party sent HR investigator Edward Reyes a formal written
          timeline regarding her waitlist history, retaliation concerns, and Allan
          Glover's comments. On October 14, 2025, she notified Allan Glover and Amber in
          Teams that she had filed FMLA; that same Teams conversation also documented
          leadership-support concerns after Allan removed himself from her team chat. On
          October 21, 2025, she emailed HR and complained that her screen was being
          recorded or monitored through Verint. On October 23, 2025, the Allan/Amber
          Teams chat was blank on her work computer, with only a message stating that
          older messages had been deleted due to the organization's retention policy.
          However, other Teams chats from the same period remained visible, including
          chats dated October 10, October 13, October 15, October 16, October 17, and
          October 21. The October 13 Alese Amarel chat remained visible and included
          messages discussing Allan leaving the chat and FMLA/LOA-related issues. By
          October 24, 2025, the same Allan/Amber chat was also cleared from her phone.
          The relevant Allan/Amber chat disappeared after protected activity, FMLA
          notice, the Verint complaint, and an active HR investigation, while other
          same-period chats remained visible.
        </p>
        <p className="mt-3">
          Fourth, Respondent states that Discover requires documentation for all
          hardship fund requests. That is not true based on Charging Party's direct
          personal knowledge. Shortly before the July 10, 2025 incident, Charging Party
          personally assisted Brandi Cordi, a White employee on her team, with a
          hardship-fund request because Brandi was facing eviction. Brandi was not
          required to submit supporting documentation; she was required to identify
          what she needed assistance for and provide a list or explanation of the
          requested need. Allan Glover was aware of and assisted with that request, and
          no concern was raised. Shortly afterward, Charging Party asked Allan about
          helping Araksan Dide, a Black employee who was homeless and needed housing
          support. Allan responded differently. Instead of assisting with the request
          in the same manner, Allan told her to hold off and gave an example involving
          Black employees, stating in substance that if one Black employee told another
          Black employee and that person tried to access the hardship fund, it could be
          a serious problem. That is direct comparator evidence: a White employee's
          hardship request was handled without supporting documentation and without a
          warning, while a Black employee's potential hardship request triggered
          hesitation and a race-related warning.
        </p>
        <p className="mt-3">
          Fifth, Respondent states that Allan Glover's involvement was limited to
          gathering information and forwarding it through the appropriate chain of
          review. The records do not support minimizing his involvement that way. On
          November 13, 2025, Charging Party submitted her hardship assistance request
          and completed the required attestation the same day. That same morning, a
          meeting titled "SH Hardship" appeared on Allan Glover's calendar involving
          Susan Marchinko, Allan Glover, and Greg Carfagna. Later that same day,
          Cameron Hadley from Employee Relations emailed Charging Party to schedule a
          discussion regarding her hardship request. That timeline shows the hardship
          request was immediately escalated to HR, operations leadership,
          director-level leadership, and Employee Relations the same day it was
          submitted. On November 17, 2025, Charging Party spoke with Cameron Hadley
          from Employee Relations. During that conversation, he stated that her request
          could not be submitted for approval consideration without additional
          documentation. Charging Party questioned why that documentation was being
          required of her because she had direct knowledge of other hardship-fund
          requests being handled without the same requirement. After that conversation,
          she submitted the requested documentation the same day or shortly thereafter.
          The record shows the request was submitted and escalated on November 13,
          leadership and HR were aware of it that same day, Employee Relations became
          involved immediately, documentation was demanded on November 17, and the
          funds were not received until after significant housing harm had already
          occurred.
        </p>
        <p className="mt-3">
          Sixth, Respondent states that Allan denies making any race-related
          hardship-fund statement. That denial does not match the contemporaneous
          record. Immediately after the July 10 meeting, Charging Party texted a
          coworker because she was shocked by Allan's example. She then messaged Allan
          in Teams and stated that she was caught off guard and confused by the example
          he used. Allan did not deny using an example. He responded that he was "just
          providing an example of what could happen." When Charging Party asked, "What
          exactly are you saying?" Allan called her directly and asked, "What exactly
          are you trying to get to?" Charging Party also disclosed the incident to
          coworkers the same day. Those facts support that the race-related hardship
          conversation occurred.
        </p>
        <p className="mt-3">
          Seventh, Respondent states that Allan denies saying Discover attended an HBCU
          recruiting event without intending to hire anyone, and that Allan had no role
          in recruiting. That does not resolve the factual dispute. Allan discussed the
          HBCU recruiting event during the same August 2025 conversation where Charging
          Party raised her lack of opportunities, lack of projects, blocked
          advancement, schedule restrictions, and family impact. Allan also made the
          "blockade" statement during that conversation, telling her in substance that
          there was a blockade and that he did not think she could get past it. Allan's
          lack of formal recruiting authority does not determine whether the statement
          was made. The issue is whether he made the statement, why he made it in a
          conversation about blocked opportunity, and whether the company's HBCU
          recruiting activity resulted in actual hires.
        </p>
        <p className="mt-3">
          Respondent's response relies on broad denials: "standard procedure,"
          "standard operational tool," "documentation required for all," "limited
          involvement," "Allan denies," and "no role." The documents show specific
          contrary facts: no documented May 2025 offer, unequal Verint visibility, HR
          admission of excess visibility, missing Teams messages while other chats
          remained visible, unequal hardship-fund documentation treatment, same-day
          leadership and HR involvement in Charging Party's hardship request, same-day
          documentation of Allan's race-related hardship example, and a documented
          HBCU/blockade conversation.
        </p>

        {/* Section III - Discussion: Response to Respondent's Legal Argument */}
        <h2 className="mt-10 font-display text-lg tracking-tight">
          III. Discussion — Response to Respondent's Legal Argument
        </h2>
        <p className="mt-3">
          Respondent's legal discussion does not resolve the Charge. It attempts to
          characterize the evidence as ordinary workplace disagreement, but the record
          shows materially disputed facts involving schedule access, waitlist
          manipulation, comparator movement, performance-rating impact, advancement
          barriers, project exclusion, race-related comments, and inconsistent
          application of workplace processes.
        </p>

        <h4 className="mt-6 font-display text-[15px] tracking-tight">
          A. Respondent Has Not Rebutted Race Discrimination
        </h4>
        <p className="mt-3">
          Respondent argues that Charging Party cannot establish race discrimination
          because she supposedly did not suffer a materially adverse employment action.
          That is incorrect. Charging Party was kept on PM/closing for an extended
          period despite repeated requests to return to mid-shift or move to an earlier
          schedule. That schedule affected her family obligations, childcare, ability
          to be present for her son, internal mobility, and access to development
          opportunities. She was also removed from the waitlist, later shown an
          incomplete screenshot that did not match the controlling SharePoint
          waitlist, re-added with a later request date, and changed from PM/Temporary
          to PM/Permanent without a clear ticket, notice, or approval documentation.
        </p>
        <p className="mt-3">
          Respondent cannot defeat this issue by saying Charging Party remained
          employed, kept her pay, or received strong evaluations. Under Title VII, an
          employee does not have to show termination, demotion, or loss of pay to show
          harm. Schedule, assignments, access to opportunity, visibility, and working
          conditions can be terms or conditions of employment. Here, the record shows
          harm to Charging Party's schedule, advancement path, project access,
          performance rating, and career mobility.
        </p>
        <p className="mt-3">
          Respondent also states that Charging Party received strong evaluations. That
          is incomplete. Before her protected activity, she received a 2023 overall
          rating of Strong. In the first review cycle after her May 2024 EEOC charge
          and May 29, 2024 formal internal complaint, her overall rating dropped to
          Solid. That downgrade occurred despite strong underlying metrics, no goal
          rated below Solid, and a 124.36% bonus payout. Her rating later returned to
          Strong in 2025. The issue is the Strong → Solid → Strong pattern and the
          timing of the 2024 downgrade.
        </p>
        <p className="mt-3">
          The 2024 Solid rating was not harmless. Leadership later communicated that
          Unit Managers / Team Leaders needed a rating of 4 Strong or 5 Outstanding to
          be eligible for the TL Plus / Department Manager training cohort. A 3 Solid
          rating excluded Charging Party from that advancement pipeline. Respondent's
          statement that she maintained her responsibilities and was not precluded
          from advancement ignores the actual consequence of the 2024 rating.
        </p>
        <p className="mt-3">
          Respondent further claims that Charging Party failed to identify similarly
          situated employees outside her protected class who were treated more
          favorably. That is also incorrect. Comparator evidence includes employees who
          received schedule movement, department movement, or other opportunities while
          Charging Party remained fixed on PM/closing. Tyler Millisock is a key
          comparator because he had the same April 3, 2023 start date, was at the
          same level, is outside Charging Party's protected class, and moved from
          LVAR PM/closing to PRE-D/DBC 11:30 a.m.–8:00 p.m. while she remained stuck
          on PM/closing. Tyler also stated he was not on the waitlist. That directly
          contradicts Respondent's claim that movement was strictly controlled by a
          centralized waitlist and that no employee moved outside the established
          system.
        </p>
        <p className="mt-3">
          The waitlist records also show inconsistent treatment. Charging Party
          requested mid-shift in 2024, discovered on April 26, 2024 that she was not
          on the MID-shift waitlist, and raised that issue in her May 29, 2024 formal
          complaint and May 31, 2024 HR intake call. Respondent's own January 22, 2025
          waitlist snapshot showed her on the list with a June 26, 2024 request date,
          PM/Temporary status, and Qualifies = Yes. By February 25, 2025, after Jen
          Roy edited the waitlist multiple times, her row was removed while other
          employees remained and continued to qualify. Respondent has not explained
          who authorized her removal, why she was removed, or why no ticket has been
          produced.
        </p>
        <p className="mt-3">
          Respondent's claim that Charging Party was offered a day-shift opportunity in
          May 2025 and declined it is false. She did not receive a May 2025 shift
          offer. She was not offered AM, mid-shift, or any other shift opportunity in
          May 2025. Respondent has not produced the alleged offer, the alleged
          decline, the ticket, the communication, the shift details, or the person who
          allegedly recorded her response. Respondent also cannot explain how Charging
          Party was supposedly removed for declining a May 2025 offer when the records
          show she had already been removed from the waitlist in February 2025.
        </p>
        <p className="mt-3">
          Respondent's claim that Charging Party was "reentered" onto the waitlist on
          July 10, 2025 based on a new request is also misleading. July 2025 was not
          the beginning of the schedule issue. Charging Party had already requested
          mid-shift in 2024. In June 2025, after being stuck on PM/closing, she asked
          to also be considered for AM in addition to the mid-shift request she
          believed was already pending. In July, she asked Allan Glover where she was
          on the waitlist. Allan contacted Jen Roy, and within approximately one
          minute Jen provided a limited five-row screenshot. That screenshot omitted
          the material fields needed to verify placement, including Date Requested,
          Months as CAR TL, Temporary/Permanent status, and Qualifies = Yes/No. The
          controlling SharePoint waitlist did not contain her name at that time. She
          was later re-added with a July 17, 2025 request date, which reset the
          earlier June 26, 2024 date reflected in the January 2025 snapshot.
        </p>
        <p className="mt-3">
          Respondent says managers did not control the process. The record contradicts
          that. During the September 19, 2025 recorded conversation, Allan discussed
          Training Bay movement and stated there "wasn't a criteria" for that
          movement. When asked who was involved in the decision, he identified
          "myself, Amber, Trevor, Dan." That is not a strictly neutral, automatic,
          centralized process. It shows management involvement and discretionary
          decision-making.
        </p>
        <p className="mt-3">
          Respondent also says that any differences in schedules were due to separate
          roles, preexisting assignments, training obligations, or accommodations.
          That explanation is unsupported without the underlying records. If that is
          Respondent's position, it should produce the comparator movement records,
          tickets, accommodations, training assignments, onboarding records, and
          schedules for the employees it claims are distinguishable. Respondent should
          not be permitted to rely on generalized explanations while withholding the
          documents that would show whether those explanations are true.
        </p>
        <p className="mt-3">
          Respondent's performance and advancement argument is also incomplete.
          Charging Party applied for nearly 50 internal roles from approximately
          February 2023 through April 2025. Respondent has not produced the postings,
          selected candidates, interview notes, scoring criteria, recruiter notes,
          decisionmaker names, or comparative qualifications. Respondent's statement
          that other candidates were "more qualified" is conclusory. It cannot rebut
          discrimination without the records showing who was selected, why they were
          selected, who made the decision, and whether the decisionmakers knew of
          Charging Party's protected activity or her complaints.
        </p>
        <p className="mt-3">
          Respondent also ignores project exclusion. Advancement at Discover was not
          limited to formal job postings. Advancement also came through project
          visibility, operational tools, process-improvement work, leadership
          exposure, and internal sponsorship. After her protected activity, Charging
          Party was excluded from project-related opportunities and credit. She raised
          concerns that her Compliance Check concept and related materials were used
          or recreated by Cyndy Smith's group while she was excluded from related
          meetings and credit. She also created call-flow/process tools and attempted
          to present them to leadership, including Greg Carfagna, but did not receive
          meaningful support or visibility. Those facts are relevant to advancement
          and opportunity.
        </p>
        <p className="mt-3">
          Respondent's argument that Mr. Glover is in the "same protected racial
          class" does not defeat the claim. First, the decisions at issue were not
          made by Allan alone. The record involves Rosanna Blackson, Greg Carfagna,
          Jen Roy, Edina Markus, Amber, Trevor, Dan, HR, Employee Relations,
          scheduling administrators, and other leaders. Second, the law does not
          presume that a person cannot discriminate against someone who shares a
          protected trait or some portion of a protected identity. That argument does
          not erase the comparator evidence, timing, inconsistent records,
          race-related comments, or unequal application of process.
        </p>
        <p className="mt-3">
          Respondent also attempts to dismiss the hardship-fund and HBCU comments as
          isolated and disconnected. They are not disconnected. The hardship-fund
          evidence shows different treatment in the same general process. Shortly
          before the July 10, 2025 incident, Charging Party personally assisted
          Brandi Cordi, a White employee on her team, with a hardship-fund request.
          Brandi was not required to submit supporting documentation. She only had to
          identify what she needed assistance for and provide a list or explanation of
          the requested need. Allan was aware of and assisted with that request. No
          concern was raised.
        </p>
        <p className="mt-3">
          Shortly afterward, Charging Party asked Allan about helping Araksan Dide, a
          Black employee who was homeless and needed housing support. Allan responded
          differently. Instead of assisting in the same manner, he told her to hold
          off and gave an example involving Black employees, stating in substance that
          if one Black employee told another Black employee and that person tried to
          access the hardship fund, it could be a serious problem. Charging Party
          documented the issue immediately, followed up with Allan in Teams, and Allan
          responded that he was "just providing an example of what could happen." That
          is not vague or disconnected. It is direct evidence of race entering a
          workplace benefit/access discussion.
        </p>
        <p className="mt-3">
          The HBCU comment is also relevant. Allan discussed HBCU recruiting during a
          broader conversation about blocked opportunity, lack of advancement, lack of
          projects, schedule restrictions, and Charging Party's inability to get past
          barriers in the organization. He also made the "blockade" statement during
          that conversation. Respondent's statement that Allan had no formal
          recruiting role does not answer whether the statement was made, why it was
          made, or whether HBCU recruiting resulted in actual hiring.
        </p>
        <p className="mt-3">
          Respondent's legal argument depends on accepting its version of disputed
          facts. That is not appropriate at this stage. The record contains multiple
          facts supporting an inference of discrimination: similarly situated
          employees receiving movement while Charging Party remained stuck;
          inconsistent waitlist records; a missing ticket; a false May 2025
          offer/decline explanation; a 2024 downgrade after protected activity;
          exclusion from the TL Plus / Department Manager pipeline; nearly 50
          unsuccessful internal applications despite strong performance; project
          exclusion and lack of credit; different hardship-fund treatment for a White
          employee and a Black employee; same-day documentation of Allan's
          race-related hardship example; and HBCU/blockade comments tied to
          opportunity and advancement.
        </p>
        <p className="mt-3">
          For these reasons, Respondent has not shown that the Charge fails as a
          matter of law. At minimum, the evidence creates material factual disputes
          requiring further investigation and production of the underlying records.
        </p>

        <h4 className="mt-6 font-display text-[15px] tracking-tight">
          B. Respondent Has Not Rebutted Retaliation
        </h4>
        <p className="mt-3">
          Respondent does not dispute that Charging Party engaged in protected
          activity. She filed an EEOC charge in May 2024 and made multiple internal
          complaints regarding race discrimination, retaliation, schedule equity,
          project exclusion, and related workplace concerns. Respondent's position is
          that no materially adverse action occurred and that there is no causation.
          The record does not support that argument.
        </p>
        <p className="mt-3">
          Respondent's argument depends on an artificially narrow view of retaliation.
          A retaliation claim does not require termination, demotion, or loss of pay.
          Under <em>Burlington Northern &amp; Santa Fe Railway Co. v. White</em>, a
          materially adverse action in the retaliation context is one that could
          dissuade a reasonable worker from making or supporting a charge of
          discrimination. The facts here meet that standard.
        </p>
        <p className="mt-3">
          After protected activity, Charging Party was kept on PM/closing despite
          repeated requests to return to mid-shift or move to an earlier schedule.
          She was not properly placed on the MID-shift waitlist. She was later
          removed from the waitlist. Respondent then relied on an alleged May 2025
          shift offer and decline that Charging Party disputes and that Respondent
          has not documented. Her request date was later reset, her status changed
          from PM/Temporary to PM/Permanent, and no clear ticket or approval record
          has been produced. These are not minor disagreements with routine
          scheduling. These are disputed schedule, waitlist, and record-integrity
          events affecting her working conditions, family obligations, childcare,
          advancement access, and ability to remain in the role.
        </p>
        <p className="mt-3">
          Respondent states that Charging Party remained employed, continued
          performing, and kept her compensation and responsibilities. That does not
          defeat retaliation. An employee can be retaliated against while still
          employed. An employee can be retaliated against through schedule
          restrictions, blocked internal movement, rating consequences, project
          exclusion, increased scrutiny, record manipulation, monitoring, or denial
          of support. Respondent's "she remained employed" argument does not answer
          the actual adverse actions in the record.
        </p>
        <p className="mt-3">
          Respondent also claims the timeline is "dispositive." It is not. The
          timeline supports retaliation. Charging Party's May 29, 2024 formal
          complaint was sent to multiple leaders and Employee Relations
          representatives, including Greg Carfagna and Susan Marcinko. That
          complaint specifically raised race discrimination, retaliation, schedule
          issues, transfer denials, and the failure to place her on the mid-shift
          waitlist. Shortly afterward, HR moved her out of Rosanna Blackson's
          reporting line during the investigation, confirming that the complaint was
          known and serious.
        </p>
        <p className="mt-3">
          After that protected activity, adverse events continued. In July 2024,
          after ER approved Charging Party's rec-for-term paperwork, Greg Carfagna
          blocked the process at the director step by requiring additional coaching
          documentation that peer Team Leaders reported they had not been required
          to provide. Anita later confirmed Charging Party had completed the process
          correctly and that the issue was that approvers did not know how to access
          the linked documentation. That delay forced her to keep low-performing
          employees longer and affected her scorecard.
        </p>
        <p className="mt-3">
          In the 2024 review cycle after her protected activity, Charging Party's
          overall rating dropped from Strong to Solid despite strong underlying
          metrics, no individual goal rated below Solid, and a 124.36% bonus payout.
          That downgrade mattered because leadership later communicated that Unit
          Managers / Team Leaders needed a 4 Strong or 5 Outstanding rating to be
          eligible for the TL Plus / Department Manager development cohort. A 3
          Solid rating excluded Charging Party from that advancement pipeline.
          Respondent's statement that she experienced no change to opportunities is
          therefore inaccurate.
        </p>
        <p className="mt-3">
          Respondent also states that the scheduling process was neutral and
          consistent. The records contradict that. Charging Party's original request
          was for mid-shift. She discovered on April 26, 2024 that she had not been
          added to the MID-shift waitlist. She raised that issue in her May 29, 2024
          complaint and May 31, 2024 HR intake. A January 22, 2025 waitlist snapshot
          later showed her on the list with a June 26, 2024 request date,
          PM/Temporary status, and Qualifies = Yes. By February 25, 2025, after
          multiple Jen Roy edits, her row was removed while other employees remained
          listed and continued to qualify. Respondent has not explained who
          authorized that removal or produced the ticket.
        </p>
        <p className="mt-3">
          Respondent's May 2025 offer/decline explanation is also disputed. Charging
          Party did not receive or decline a May 2025 shift offer. She was not
          offered AM, mid-shift, or any other shift opportunity in May 2025.
          Respondent has not produced the alleged offer, alleged decline, ticket,
          shift details, communication, or person who allegedly recorded her
          response. Respondent's explanation is also illogical because the records
          show she had already been removed from the waitlist in February 2025,
          months before the alleged May 2025 offer.
        </p>
        <p className="mt-3">
          Respondent further claims Charging Party reentered the waitlist on July
          10, 2025 through a new request. That is misleading. July 2025 was not the
          beginning of the schedule issue. She had already requested mid-shift in
          2024, complained about not being added, and had a January 2025 waitlist
          record showing a June 26, 2024 request date. In June 2025, she asked to
          also be considered for AM in addition to the mid-shift request she
          believed was already pending. In July, when she asked Allan Glover for her
          specific waitlist position, Jen Roy sent a limited five-row screenshot
          within approximately one minute. That screenshot omitted the material
          fields needed to verify her placement: Date Requested, Months as CAR TL,
          Temporary/Permanent status, and Qualifies = Yes/No. The controlling
          SharePoint waitlist did not contain her name at that time. She was later
          re-added with a July 17, 2025 request date.
        </p>
        <p className="mt-3">
          These inconsistencies support pretext. Respondent's stated reason depends
          on a missing May 2025 offer, a missing decline, missing tickets, an
          unexplained February 2025 removal, an incomplete July 2025 screenshot,
          and a reset request date. Under <em>Reeves v. Sanderson Plumbing
          Products</em>, evidence that an employer's stated explanation is false or
          inconsistent may support an inference of unlawful motive. Here,
          Respondent's explanations are not supported by the underlying records.
        </p>
        <p className="mt-3">
          Respondent also argues that Allan Glover did not know the substance of
          the prior EEOC charge and did not make decisions based on it. This does
          not defeat causation. First, the decisionmakers were not limited to Allan.
          The record involves Rosanna Blackson, Greg Carfagna, Jen Roy, Edina
          Markus, Amber, Trevor, Dan, HR, Employee Relations, scheduling
          administrators, and other leaders. Second, Charging Party's protected
          activity was not limited to the prior EEOC charge. She made repeated
          internal complaints that were known to leadership, HR, and Employee
          Relations. Third, Allan became involved after HR moved her into his
          organization because of the complaint. He was also directly involved in
          later schedule, waitlist, hardship, and leave-related communications.
        </p>
        <p className="mt-3">
          Respondent's lack-of-knowledge argument also ignores the documents.
          Charging Party's May 29, 2024 complaint was sent to leadership and HR.
          Her May 31 HR intake addressed the same issues. Her July 19, 2024 Anita
          complaint addressed Greg blocking performance paperwork after protected
          activity. Her September 2025 Ethical Concerns complaint addressed the
          waitlist and schedule issue again. Her October 2025 communications
          addressed FMLA, Verint monitoring, and record-preservation concerns.
          Respondent cannot isolate one EEOC charge and ignore the repeated
          protected activity that followed.
        </p>
        <p className="mt-3">
          Respondent states that Charging Party continued to be encouraged to apply
          for internal opportunities. That does not rebut retaliation. Encouraging
          her to apply while blocking or failing to select her is not proof of
          non-retaliation. She applied for nearly 50 internal roles from
          approximately February 2023 through April 2025. Respondent has not
          produced the selected candidates, recruiter notes, interview scoring,
          decisionmaker names, comparative qualifications, or communications.
          Respondent's statement that she remained free to apply does not explain
          why she was not selected, why projects were withheld, why her rating
          dropped, or why development opportunities were unavailable.
        </p>
        <p className="mt-3">
          The record also includes additional retaliatory events after continued
          protected activity. In October 2025, Charging Party raised concerns about
          Verint monitoring and unusual screen visibility. Her evidence shows her
          PC/profile appearing on live monitor while other Team Leaders in her
          department were logged in and active but did not show live monitoring
          active. HR later stated there was a technical problem and that she had
          "more visibility than" she should have had. HR also stated they did not
          know what changed, who did it, or why and were trying to backtrack
          permissions. That is evidence of unequal visibility and unresolved access
          changes, not a routine process conclusively applied to everyone.
        </p>
        <p className="mt-3">
          The Verint issue also overlaps with the Teams deletion evidence. After
          Charging Party sent HR investigator Edward Reyes a formal timeline on
          October 7, 2025; after she notified Allan and Amber of FMLA in Teams on
          October 14; and after she complained about Verint monitoring on October
          21, the Allan/Amber Teams chat was blank on October 23. Other same-period
          Teams chats remained visible, including chats dated October 10, October
          13, October 15, October 16, October 17, and October 21. The same
          Allan/Amber chat was also cleared from her phone by October 24. Those
          facts support a preservation issue and support an inference that records
          tied to protected activity were treated differently.
        </p>
        <p className="mt-3">
          The hardship-fund events also occurred after extensive protected activity.
          On November 13, 2025, Charging Party submitted a hardship request and
          completed the required attestation the same day. That same morning, an
          "SH Hardship" meeting appeared on Allan Glover's calendar involving Susan
          Marchinko, Allan Glover, and Greg Carfagna. Later that day, Cameron
          Hadley from Employee Relations contacted her to discuss the request. On
          November 17, Cameron stated that her request could not proceed without
          additional documentation. Charging Party had direct knowledge that Brandi
          Cordi, a White employee she had helped with a hardship request shortly
          before the July 10 hardship/race incident, was not required to submit the
          same type of supporting documentation. Respondent's statement that all
          hardship requests required documentation is therefore disputed.
        </p>
        <p className="mt-3">
          Respondent says routine business processes were applied consistently
          before, during, and after protected activity. The record shows the
          opposite. The same types of processes repeatedly broke against Charging
          Party after protected activity: waitlist placement, waitlist removal,
          request dates, performance rating, project credit, internal applications,
          schedule movement, Verint visibility, Teams preservation, leave
          processing, and hardship assistance. The pattern, timing, missing
          records, inconsistent explanations, and comparator evidence support
          causation and pretext.
        </p>
        <p className="mt-3">
          Respondent also argues that there is no "but for" causation. But-for
          causation does not require protected activity to be the only cause. The
          question is whether the challenged actions would have occurred in the
          same way absent the protected activity. Here, the record supports that
          they would not have. Before and during protected activity, Charging Party
          was raising race discrimination, retaliation, schedule equity, and HR
          concerns. After that activity, her schedule remained blocked, her
          waitlist records changed, her performance rating dropped, development
          access was affected, project access diminished, monitoring concerns
          arose, protected Teams messages disappeared, and hardship assistance was
          handled differently.
        </p>
        <p className="mt-3">
          For these reasons, Respondent has not rebutted retaliation. Its argument
          depends on disputed facts and unsupported conclusions. At minimum, the
          evidence creates material factual disputes requiring further
          investigation and production of the underlying records.
        </p>

        {/* Section III */}
        <h2 className="mt-10 font-display text-lg tracking-tight">IV. Legal Standards</h2>
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
          V. Documents the Division Should Request
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
          <li>
            All communications between Susan Marcinko, Greg Carfagna, Allan Glover, and
            Human Resources / Employee Relations concerning the June–July 2024 reassignment
            of Charging Party to Mr. Glover's organization.
          </li>
          <li>
            Any instructions provided to Mr. Glover regarding Charging Party's reporting
            arrangement, schedule request, prior internal complaint, Ms. Blackson, or the
            ongoing HR investigation, including any onboarding briefing or written guidance.
          </li>
          <li>
            All communications reflecting what Mr. Glover was told — or was deliberately
            not told — about Charging Party's May 29, 2024 internal complaint and May 6,
            2024 EEOC charge before and after he assumed supervision.
          </li>
          <li>
            All documents identifying who decided that Mr. Glover would become Charging
            Party's manager and the reasons stated for that decision.
          </li>
          <li>
            All communications between Mr. Glover, Mr. Carfagna, Human Resources, Employee
            Relations, and scheduling administrators concerning Charging Party's waitlist
            placement, the alleged May 2025 day-shift offer, schedule movement, and
            performance rating from July 2024 forward.
          </li>
          <li>
            The complete ticket Mr. Glover allegedly submitted on Charging Party's behalf in
            July 2024, including any document showing whether the request was entered as
            mid-shift, AM/day shift, or another schedule category, and all records showing why
            Charging Party's original mid-shift request was not recorded as mid-shift.
          </li>
          <li>
            All communications between Rosanna Blackson, Ryan Tafoya, Susan Marcinko, Greg
            Carfagna, Allan Glover, Jen Roy, Edina Markus, and Human Resources regarding
            Charging Party's mid-shift request.
          </li>
          <li>
            The complete waitlist entry for Charging Party showing request date, requested
            shift, current shift, temporary/permanent status, months as TL, and qualifies
            status, together with all SharePoint version history and audit logs for the
            Current TL Shifts / waitlist file from April 2024 through July 2025.
          </li>
          <li>
            Any documentation explaining why Charging Party's status changed from Temporary
            to Permanent, and why her request date was later reflected as July 17, 2025
            despite her mid-shift request and complaint predating that date.
          </li>
          <li>
            Any documentation regarding the four-day, ten-hour schedule, including who
            requested it, whether Charging Party was initially told no, whether team
            approval was required, whether she had to obtain agreement from her team before
            it was implemented, and any records reflecting that the four-day schedule was
            treated as a substitute for, or resolution of, her mid-shift request.
          </li>
          <li>
            Charging Party's complete internal application history from February 2023 through
            April 2025, including all job postings applied to, recruiter notes, interview
            notes, interview scoring rubrics, and the names of all hiring decisionmakers,
            interviewers, recruiters, and managers involved in each role.
          </li>
          <li>
            For each posting, documents showing whether the decisionmaker(s) knew or had
            access to information about Charging Party's protected activity, and the selected
            candidates' qualifications, ratings, tenure, internal experience, schedule
            history, and protected-activity history.
          </li>
          <li>
            All communications regarding Charging Party's internal applications, including
            recruiter, hiring-manager, and HR communications.
          </li>
          <li>
            TL Plus / Department Manager training cohort eligibility rules, the list of
            employees selected for that cohort, and documents showing how the 2024 Solid
            rating affected eligibility.
          </li>
          <li>
            All communications regarding the Compliance Check project, Cyndy Smith's group,
            and related meetings, including any documents reflecting the origin of the
            concept and the participants in subsequent meetings.
          </li>
          <li>
            Calendar invites and attendance records for Charging Party's scheduled Call Flow
            tool presentation to Greg Carfagna.
          </li>
          <li>
            Documents showing project assignments, project invitations, and project
            participation for Unit Managers from May 2024 through 2026, and records showing
            cross-department movement, schedule movement, and project assignments for
            similarly situated Unit Managers during the same period.
          </li>
          <li>
            The alleged May 2025 shift-offer communication, including the exact shift,
            department, and role allegedly offered; the name and title of the person who
            allegedly made the offer; and the date, time, and method of the alleged offer.
          </li>
          <li>
            Any written or recorded statement showing Charging Party declined a May 2025
            shift opportunity because of University of Arizona graduate school commitments,
            and the identity of the person who recorded the alleged decline.
          </li>
          <li>
            The waitlist record showing Charging Party's position immediately before the
            alleged May 2025 offer, and the waitlist record showing her removal together
            with the reason code or explanation for removal.
          </li>
          <li>
            The full SharePoint version history for the waitlist from January 2025 through
            May 2025, including the February 25, 2025 edits by Jen Roy.
          </li>
          <li>
            Any ticket connected to the alleged May 2025 opportunity, and any SOW, policy,
            or procedure requiring removal from the waitlist after declining a shift,
            together with documentation showing that procedure was followed in Charging
            Party's case.
          </li>
          <li>
            Documentation explaining why Charging Party was removed from the waitlist in
            February 2025 if the alleged decline did not occur until May 2025.
          </li>
          <li>
            The alleged July 10, 2025 SharePoint request, including the full metadata
            and audit history for that request (author, submission date/time, device,
            and all subsequent edits).
          </li>
          <li>
            The complete source file from which Jen Roy produced the July 14, 2025
            screenshot sent to Allan Glover, and all columns omitted from that
            screenshot, including Date Requested, Months as CAR TL, Temporary/Permanent
            status, and Qualifies = Yes/No.
          </li>
          <li>
            The full SharePoint version history for the Current TL Shifts / waitlist
            file showing Charging Party's January 2025 placement, February 2025
            removal, July 3, 2025 absence, July 14, 2025 status, and July 16–17, 2025
            re-addition.
          </li>
          <li>
            Documentation explaining why Charging Party's waitlist request date changed
            from June 26, 2024 to July 17, 2025, and why her status changed from
            PM/Temporary to PM/Permanent, including all approvals, tickets, and
            notifications.
          </li>
          <li>
            All tickets Allan Glover allegedly submitted on Charging Party's behalf, and
            all communications between Allan Glover, Jen Roy, Edina Markus, Human
            Resources, and scheduling administrators regarding Charging Party's
            waitlist status from January 2025 through the present.
          </li>
          <li>
            Comparator movement records showing whether employees such as Tyler
            Millisock, Hunter Samuel, Cody Christensen, Courtney Griffith, and others
            moved through the same waitlist process, a separate manager request, a
            preexisting assignment, a training obligation, or an accommodation.
          </li>
          <li>
            All records regarding the DNA role Charging Party applied for in August
            2025, including the job posting, selected candidate qualifications,
            interview notes, scoring criteria, recruiter notes, decisionmaker names,
            and all related communications.
          </li>
          <li>
            All notes, Teams messages, calendar invites, and follow-up communications
            regarding the August 2025 conversation between Charging Party and Allan
            Glover, and all documents regarding Allan's "blockade" statement and any
            related communications.
          </li>
          <li>
            The September 18, 2025 leadership meeting invite, attendee list, agenda,
            notes, schedule/coverage worksheets, decision criteria, and decision
            records, and all communications among Allan Glover, Amber, Trevor, Dan,
            and any scheduling or HR personnel regarding Training Bay movement and
            the determination that Charging Party's movement was "not operationally
            feasible."
          </li>
          <li>
            The criteria used to select Michelle, Steve, Marissa, Josh, or any other
            employee for Training Bay, and all documents showing whether those
            employees kept or changed schedules in connection with the Training Bay
            assignment.
          </li>
          <li>
            Comparator records for Tyler Millisock, Josh, Hunter, Michelle, Steve,
            Marissa, and any other similarly situated Team Leader who moved areas,
            schedules, or Training Bay assignments, including the process by which
            each moved (waitlist, manager request, training assignment, preexisting
            assignment, accommodation, or otherwise).
          </li>
          <li>
            The complete Ethical Concerns file for Charging Party's September 2025
            schedule/waitlist complaint, including all intake notes, investigator
            assignments, interview notes, evidence gathered, findings, and final
            disposition.
          </li>
          <li>
            All records supporting the alleged May 2025 shift offer and alleged
            decline, and all waitlist tickets and audit history relied on in that
            investigation.
          </li>
          <li>
            All Verint screenshots, live-monitoring records, access logs,
            screen-recording logs, permission-change history, product-owner
            communications, BT escalation records, and vendor communications relating
            to Charging Party, together with records showing which Team Leaders were
            visible or active in Verint before and after Charging Party's complaint.
          </li>
          <li>
            Microsoft Teams retention logs, deletion logs, audit history, and any
            preservation or legal-hold records covering the Allan Glover / Amber chat
            and Charging Party's account from October 1, 2025 forward.
          </li>
          <li>
            Hardship-fund records for Brandi Cordi, Araksan Dide, and Charging Party,
            including the application materials submitted, what each applicant was
            required to submit, all reviewer notes, and the outcome of each request.
          </li>
          <li>
            The November 13, 2025 "SH Hardship" calendar invite, attendee list, agenda,
            notes, and all communications among Allan Glover, Susan Marchinko, Greg
            Carfagna, Cameron Hadley, Lindsay Beck, and Employee Relations regarding
            Charging Party's hardship assistance request.
          </li>
          <li>
            The November 17, 2025 Cameron Hadley conversation recording or transcript
            and related notes, and all communications between Employee Relations and
            Charging Party regarding hardship documentation requirements.
          </li>
          <li>
            The July 10, 2025 Teams thread between Charging Party and Allan Glover
            regarding the hardship-fund discussion, the call records and any witness
            statements regarding the July 10 follow-up call, and Charging Party's
            same-day text/Teams communications with coworkers about the incident.
          </li>
          <li>
            HBCU recruiting-event records, including attendance, candidate submissions,
            interview outcomes, rejection reasons, and hiring outcomes, together with
            all communications or notes regarding Allan Glover's August 2025
            "blockade" and HBCU-related conversation with Charging Party.
          </li>
          <li>
            The complete waitlist SharePoint file and full version history from 2023
            through the present, including every edit, editor, and timestamp.
          </li>
          <li>
            All shift-change tickets allegedly submitted on Charging Party's behalf,
            together with author, submission date, routing history, and disposition.
          </li>
          <li>
            All records supporting the alleged May 2025 day-shift offer and decline,
            including the offer communication, the recorded decline, the ticket, and
            the identity of the person who recorded the response.
          </li>
          <li>
            All comparator movement records for Tyler Millisock and other similarly
            situated Unit Managers, including the process by which each moved
            (waitlist, manager request, training assignment, preexisting assignment,
            accommodation, or otherwise).
          </li>
          <li>
            All documents explaining Charging Party's February 2025 waitlist removal
            and July 2025 re-addition, including approval records, notifications,
            ticket numbers, and audit history.
          </li>
          <li>
            The complete 2024 rating calibration records and the TL Plus / Department
            Manager training cohort eligibility records, including the rating
            thresholds, calibration participants, calibration notes, and the list of
            employees selected for that cohort.
          </li>
          <li>
            All internal application records covering Charging Party's nearly 50
            applications from February 2023 through April 2025, including postings,
            selected-candidate records, interview notes, scoring rubrics, recruiter
            notes, and decisionmaker communications.
          </li>
          <li>
            All project-assignment and project-credit records involving the
            Compliance Check concept, Cyndy Smith's group, and Charging Party's
            call-flow/process tools, including any presentation materials, meeting
            invites, attendance records, and authorship metadata.
          </li>
          <li>
            Hardship-fund records for Brandi Cordi, Araksan Dide, and Charging
            Party's own request, including application materials, documentation
            requirements applied to each applicant, reviewer notes, and outcomes.
          </li>
          <li>
            All communications regarding Allan Glover's July 10, 2025 hardship-fund
            example, including the Teams thread, call records, and Charging Party's
            same-day communications with coworkers.
          </li>
          <li>
            HBCU recruiting-event records, including event attendance, candidate
            submissions, interview outcomes, rejection reasons, and hiring outcomes.
          </li>
          <li>
            All communications or notes regarding Allan Glover's August 2025
            "blockade" and HBCU-related statements, including any contemporaneous
            notes, follow-up messages, and references in HR investigation files.
          </li>
          <li>
            All records relating to Charging Party's May 2024 EEOC charge and May
            29, 2024 internal complaint, including intake documents, routing,
            investigator notes, and disposition.
          </li>
          <li>
            All communications showing who knew about Charging Party's protected
            activity and when, including distribution lists, forwards, and HR
            briefings.
          </li>
          <li>
            All schedule-change tickets submitted on Charging Party's behalf, with
            author, submission date, routing history, and disposition.
          </li>
          <li>
            All records supporting the alleged May 2025 day-shift offer and alleged
            decline, including the offer communication, the recorded decline, and
            the identity of the person who recorded the response.
          </li>
          <li>
            The complete waitlist SharePoint file and full version history from
            2023 through the present.
          </li>
          <li>
            All documents explaining Charging Party's February 2025 waitlist
            removal and July 2025 re-addition, including approval records,
            notifications, tickets, and audit history.
          </li>
          <li>
            Performance calibration records for 2023, 2024, and 2025, and the TL
            Plus / Department Manager eligibility records, including rating
            thresholds, calibration participants, and the list of employees
            selected for the cohort.
          </li>
          <li>
            All records regarding Greg Carfagna's July 2024 block of Charging
            Party's rec-for-term process, including the additional coaching
            documentation requested, the documentation requirements applied to
            peer Team Leaders, and all approver communications.
          </li>
          <li>
            All internal application records for Charging Party's nearly 50
            applications from February 2023 through April 2025, including
            postings, selected-candidate records, interview notes, scoring
            rubrics, recruiter notes, and decisionmaker communications.
          </li>
          <li>
            Project-assignment and project-credit records involving Charging
            Party, including Compliance Check, Cyndy Smith's group, and
            call-flow/process tools.
          </li>
          <li>
            Verint access logs, screen-recording logs, permission-change history,
            product-owner communications, vendor communications, and BT escalation
            records relating to Charging Party and to similarly situated Team
            Leaders before and after her October 2025 complaint.
          </li>
          <li>
            Microsoft Teams retention logs, deletion logs, audit history, and
            preservation or legal-hold records for the Allan Glover / Amber chat
            and Charging Party's account from October 1, 2025 forward.
          </li>
          <li>
            Leave-processing records relating to the October 2025 FMLA/STD
            misclassification and access deactivation, including system
            timestamps, status changes, approvers, and notifications.
          </li>
          <li>
            Hardship-fund records, including the November 13, 2025 "SH Hardship"
            calendar invite and notes, the Cameron Hadley communications, and the
            hardship records for Brandi Cordi, Araksan Dide, and Charging Party's
            own request.
          </li>
        </ol>






        {/* Section V */}
        <h2 className="mt-10 font-display text-lg tracking-tight">VI. Conclusion</h2>
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
