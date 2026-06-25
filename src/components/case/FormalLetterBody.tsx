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
          substitute for the documentary production identified in Section IV below.
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
