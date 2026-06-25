import { Link } from "@tanstack/react-router";
import { PrintPdfButton } from "@/components/case/PrintPdfButton";
import { PrintEvidenceAppendix } from "@/components/case/PrintEvidenceAppendix";
import { exhibitById, exhibits } from "@/data";



// Evidentiary rebuttal: ALL exhibits are reproduced in full in the appendix —
// raw transcripts, raw screenshots, raw documents. No references to external
// files; the document is self-contained.
const CITED_EXHIBITS = exhibits
  .slice()
  .sort((a, b) => a.exhibitNumber.localeCompare(b.exhibitNumber, undefined, { numeric: true }))
  .map(e => e.id);


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

/**
 * InlineExhibits — renders a compact, captioned strip of exhibit screenshots
 * directly inside the response body so the PDF is self-contained. Each item
 * supports a short relevance line per the requested label format.
 *
 * Pass either a list of exhibit IDs (image exhibits will render their primary
 * filePath) or a list of explicit {id, relevance} pairs.
 */
type InlineExhibitItem = { id: string; relevance?: string; label?: string };

function InlineExhibits({
  items,
  heading = "Evidence cited above",
}: {
  items: InlineExhibitItem[];
  heading?: string;
}) {
  const resolved = items
    .map((it) => ({ it, ex: exhibitById(it.id) }))
    .filter((r): r is { it: InlineExhibitItem; ex: NonNullable<ReturnType<typeof exhibitById>> } => Boolean(r.ex));

  if (resolved.length === 0) return null;

  return (
    <aside
      className="no-print my-6 break-inside-avoid rounded-md border border-border bg-secondary/30 p-4 print:hidden"
      aria-label={heading}
    >
      <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/70">
        {heading} <span className="font-normal normal-case tracking-normal text-foreground/55">— full exhibits attached in PDF appendix</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {resolved.map(({ it, ex }) => {
          const label = it.label ?? ex.fileName;
          const showImage = ex.fileKind === "image" && ex.filePath;
          return (
            <figure
              key={it.id}
              className="break-inside-avoid rounded border-2 border-foreground/30 bg-card p-3 print:border-black/60"
              style={{ pageBreakInside: "avoid" }}
            >
              <div className="mb-2 border-b-2 border-foreground/40 pb-2 print:border-black/70">
                <div className="font-mono text-[15px] font-extrabold uppercase leading-tight tracking-wider text-foreground">
                  EXHIBIT {ex.exhibitNumber} — {label}
                </div>
                <div className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-foreground/60">
                  {ex.date}{ex.category ? ` · ${ex.category}` : ""}
                </div>
              </div>
              {showImage ? (
                <img
                  src={ex.filePath}
                  alt={label}
                  loading="eager"
                  className="block max-h-[360px] w-full rounded border border-border object-contain print:max-h-none"
                />
              ) : (
                <div className="rounded border border-dashed border-border bg-secondary/40 p-3 text-[11px] text-foreground/70">
                  {ex.fileKind.toUpperCase()} on file · {ex.filePath || "see appendix"}
                </div>
              )}
              <figcaption className="mt-2 text-[11px] leading-snug text-foreground/85">
                {it.relevance && (
                  <div className="text-foreground/75">
                    <span className="font-semibold">Relevance:</span> {it.relevance}
                  </div>
                )}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </aside>
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
          <Ex id="EX-HR-CALL" />. Named Team Leader comparators — Tyler Millisock,
          Hunter Samuel, Cody Christensen, Marc Case, Marissa Mascarenas, Whitnee Kollar,
          Leslie McGregor, and Jarin Bell — received favorable scheduling and department
          assignment treatment that Charging Party was denied under the same purportedly
          "neutral" process. See <Ex id="EX-010" />. A process that produced these outcomes
          was not applied uniformly to Charging Party.
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
          goal rated below Solid, an Individual Performance Factor of 96.49%, a Company
          Performance Factor of 128.90%, and a bonus payout of 124.36% of target. See <Ex id="EX-049" />, <Ex id="EX-050" />, <Ex id="EX-051" />,{" "}
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

        <InlineExhibits
          heading="Performance evidence — 2024 review cycle"
          items={[
            { id: "EX-050", relevance: "2023 compensation statement reflecting Strong rating before protected activity." },
            { id: "EX-051", relevance: "2024 compensation statement reflecting Solid downgrade with 124.36% of-target bonus payout, 96.49% Individual Performance Factor, and 128.90% Company Performance Factor." },
            { id: "EX-052", relevance: "2023 year-end review (Strong) for comparison with 2024." },
            { id: "EX-053", relevance: "2024 year-end review reflecting overall Solid rating despite Solid/Strong sub-ratings." },
          ]}
        />



        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          B. Response to Respondent's Characterization of Charging Party's Prior EEOC Charge
          (PS pp. 2–3, § I.B.1)
        </h3>

        <p className="mt-3">
          Respondent's description of my prior EEOC charge is incomplete and misleading. Respondent attempts to characterize the prior charge as limited to "workplace interactions" and ordinary concerns involving a coworker and my then-manager, Rosanna Blackson. That framing minimizes the seriousness of what was reported. My prior protected activity involved race discrimination, retaliation, hostile work environment concerns, medical leave/disability-related retaliation, a false job-abandonment issue, repeated denied transfer/schedule requests, and the failure to properly add me to the mid-shift waitlist.
        </p>
        <p className="mt-3">
          Respondent's claim that the prior investigation "did not substantiate" my claims does not mean the conduct did not occur, nor does it resolve the retaliation issues that followed. The fact that Respondent internally chose not to substantiate the complaint should be weighed against the actual record, including my contemporaneous written complaint, HR's follow-up, and the actions taken after my complaint. In fact, after my complaint, HR arranged for me to move away from Rosanna's direct supervision and report through Allan Glover effective July 1, 2024. That action itself shows Respondent understood the seriousness of the situation and that continued one-on-one interaction with Rosanna was problematic during the investigation.
        </p>
        <p className="mt-3">
          I also dispute Respondent's statement that I "experienced no adverse action" during or after the prior charge. Remaining employed does not mean I was not negatively impacted. After my protected activity, I continued to experience schedule-related harm, waitlist issues, loss of opportunity, performance-rating harm, and other retaliatory treatment.
        </p>
        <p className="mt-3">Examples include:</p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>I had already requested mid-shift/earlier schedule movement, but I was not properly added to the waitlist when I should have been.</li>
          <li>Respondent later treated my PM assignment as permanent, even though it had been presented to me as temporary and Respondent's own records later continued to reflect temporary status.</li>
          <li>After my May 2024 EEOC charge and May 29, 2024 formal complaint, I remained fixed on PM/closing while other similarly situated leaders moved to AM, midshift, or other more favorable schedules.</li>
          <li>In July 2024, after my protected activity, I was assigned low-performing employees who were already expected to be terminated. The delay in processing their corrective actions negatively affected my team's performance results.</li>
          <li>When I submitted termination recommendations that Employee Relations approved, Greg Carfagna blocked or delayed them at the director level based on a documentation/coaching requirement that HR later confirmed I had already satisfied. HR later told me I "did exactly the right thing," confirming the issue was not my performance or process.</li>
          <li>In the first review cycle after my EEOC charge and formal complaint, my overall rating was downgraded from Strong to Solid, despite improved operational metrics, no goal rated below Solid, and a 124.36% bonus payout.</li>
          <li>The Solid rating had consequences beyond a label. It reduced my merit impact and, based on information provided to leadership, excluded me from the Department Manager training cohort, which was an internal promotional pipeline.</li>
          <li>My internal opportunities and advancement were not "unchanged." I was excluded from opportunities, remained blocked from schedule movement, and was later told by Allan there was a "blockade" preventing me from moving forward.</li>
        </ul>
        <p className="mt-3">
          Respondent also states that my "compensation, responsibilities, and opportunities remained unchanged." I dispute that. My compensation was affected by the 2024 downgrade because the merit percentage tied to my review was lower than it would have been had I remained Strong, despite stronger measurable results. My opportunities were affected because the Solid rating excluded me from the Department Manager training cohort and because I remained stuck on an unfavorable schedule while peers moved. My responsibilities and working conditions were also affected by the transfer of low-performing employees to my team and the continued requirement that I manage under conditions created by Respondent's failure to resolve the schedule/waitlist and retaliation concerns.
        </p>
        <p className="mt-3">
          Respondent's position also omits that HR had notice of these concerns in real time. My May 29, 2024 complaint was sent to multiple leaders and Employee Relations representatives. On May 31, 2024, I participated in an HR intake call and reported race discrimination, retaliation, the false job-abandonment issue, project exclusion, and the waitlist/schedule issue. On June 5, 2024, HR followed up and arranged the move away from Rosanna during the investigation. These events show that Respondent had actual notice of protected activity and the underlying issues.
        </p>
        <p className="mt-3">
          The performance-rating timeline is also important. In 2023, before my EEOC charge and formal complaints, I received a Strong rating. In 2024, after my protected activity, my rating dropped to Solid, even though my measurable performance improved, my bonus paid out at 124.36% of target, and no goal was rated below Solid. Then, in 2025, after the events at issue and after Respondent was already defending its actions, I was rated Strong again. This Strong → Solid → Strong pattern supports my position that the 2024 Solid rating was not a neutral reflection of my actual performance. It was the only year in that sequence that followed my protected activity, and it had real consequences. It reduced my merit impact and excluded me from the Department Manager training cohort/promotion pipeline. Respondent cannot fairly claim my "compensation, responsibilities, and opportunities remained unchanged" when the 2024 downgrade affected both pay and advancement opportunity.
        </p>
        <p className="mt-3">
          For these reasons, Respondent's statement that I remained employed and therefore experienced no adverse action is not accurate. The relevant issue is not whether I was immediately terminated or formally demoted. The relevant issue is whether, after protected activity, Respondent took actions or allowed conditions that would reasonably discourage a person from making or supporting a discrimination complaint. The record shows that it did.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          C. The "no record of any prior request" / "day-shift" assertion (PS p. 3, §I.B.3; p. 4, §I.B.5)
        </h3>

        <p className="mt-3">
          I dispute Respondent's characterization of my scheduling history, my original request, and the reason I was placed into the later scheduling process. Respondent states that when Allan Glover assumed responsibility for my team, he became aware that I "believed" I had previously requested a "day-shift schedule," but that there was no record of the request in the centralized scheduling system. That framing is incomplete and misleading.
        </p>
        <p className="mt-3">
          My issue was not merely that I "believed" I had requested a day shift. My original request was to return to my mid-shift schedule. The fact that Respondent claims there was no record in the centralized system does not prove that I failed to request the schedule. It supports my position that Respondent failed to properly document or process my request.
        </p>
        <p className="mt-3">
          This waitlist failure was already part of my May 2024 protected activity. In my May 29, 2024 written complaint, I specifically raised that I had repeatedly requested to move to a different role, department, or schedule, and that I had been assured I would be placed on a waitlist for a new schedule, but that this did not happen. This was not a new issue that first arose after Allan became my manager. It was part of the protected complaint that triggered HR involvement.
        </p>
        <p className="mt-3">
          The May 31, 2024 HR intake call also confirms this. During that call, Susan Marcinko asked me about the waitlist and schedule-change issue. I explained that Rosanna had told me I was placed on the waitlist, but when I contacted Ryan Tafoya, a Department Manager, to check my status, he confirmed I was not on the mid-shift waitlist. I also have a screenshot of that April 26, 2024 exchange with Ryan, where I asked him to check whether I was on the waitlist for mid-shift and he responded that I was not currently on the MID shift list.
        </p>
        <p className="mt-3">
          This is important because Respondent's Position Statement repeatedly reframes the issue as a "day-shift" request. My original and documented request was mid-shift. HR was aware of that issue, it was included in my complaint, and HR later told me the issue would be addressed through the move to Allan's organization. The later placement on an AM/day-shift waitlist did not accurately reflect my original mid-shift request.
        </p>
        <p className="mt-3">
          Respondent's statement that Allan placed me on the "day-shift waitlist" also fails to explain why I was not placed on the correct mid-shift waitlist after HR was already on notice that my mid-shift request had not been properly processed. If Respondent's position is that there was no record of my prior request, Respondent should explain why there was no record after I had requested the schedule, after Ryan confirmed I was not on the MID list, after I raised it in my May 29 complaint, and after HR discussed it with me on May 31.
        </p>
        <p className="mt-3">
          Respondent also omits that my PM assignment was originally presented to me as temporary. After my protected activity, Respondent later treated or described that PM assignment as permanent. However, Respondent's own records continued to reflect temporary status through at least February 2025. When I was later re-added to the waitlist in July 2025, my status appeared as PM / Permanent with a new July 17, 2025 request date, without clear notice, explanation, ticket, approval, or documentation. That inconsistency matters because Respondent's own process treats temporary and permanent shift movement differently.
        </p>
        <p className="mt-3">
          I also dispute Respondent's statement that management "took steps to bring me closer to my desired schedule" by moving me to a four-day, ten-hour schedule beginning at 9:00 a.m. That statement makes it sound as though management proactively gave me a favorable schedule adjustment. That is not what happened.
        </p>
        <p className="mt-3">
          After I was not moved to the mid-shift schedule I had requested, I asked Allan whether I could work a four-day, ten-hour schedule and have one weekday off so I could at least have one day with my son. I was still closing, and the schedule did not give me the mid-shift or traditional day schedule I had requested. I was initially told no, and I was told the only way it could happen was if everyone on my team agreed to move to that schedule. I then had to go to my team and ask them to agree. My team ultimately signed on to the schedule. My understanding is that Greg was surprised I was able to accomplish that.
        </p>
        <p className="mt-3">
          Therefore, the four-day, ten-hour schedule was not a management-created remedy to bring me closer to my desired schedule. It was a compromise I had to organize myself after Respondent failed to properly place me on the mid-shift waitlist and after Respondent failed to move me to the schedule I had requested. It required me to work longer ten-hour days, and it still left me stuck in an unfavorable closing-shift situation. Respondent should not present this as evidence that it treated me favorably or resolved the schedule issue.
        </p>
        <p className="mt-3">
          Respondent also states that I was positioned approximately fifth or sixth on a lengthy waitlist. I request that Respondent produce the complete underlying records supporting that claim, including the ticket number, request date, requested shift type, current shift, temporary/permanent status, waitlist ranking, and all version history. The records I have preserved show major inconsistencies: I was not on the MID shift list when I should have been; Respondent later placed me under an AM/day-shift category rather than my original mid-shift request; my status appeared as Temporary; my waitlist row was later removed; and I remained absent from the controlling waitlist while other employees continued to qualify.
        </p>
        <p className="mt-3">
          For these reasons, Respondent's statement does not accurately describe the scheduling issue. The evidence shows that I requested mid-shift, that my failure to be added to the mid-shift waitlist was part of my May 2024 protected complaint, that HR was aware of the issue, that Respondent later placed me under the wrong schedule category, and that the four-day, ten-hour schedule was not a true remedy but a compromise I had to pursue myself while still being denied the schedule movement I had requested.
        </p>
        <p className="mt-3"><strong>Requested records for this issue:</strong></p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>The complete ticket Allan Glover allegedly submitted on my behalf in July 2024.</li>
          <li>Any document showing whether that request was entered as mid-shift, AM/day shift, or another schedule category.</li>
          <li>All records showing why my original mid-shift request was not recorded as mid-shift.</li>
          <li>All communications between Rosanna Blackson, Ryan Tafoya, Susan Marcinko, Greg Carfagna, Allan Glover, Jen Roy, Edina Markus, and HR regarding my mid-shift request.</li>
          <li>The complete waitlist entry showing my request date, requested shift, current shift, temporary/permanent status, months as TL, and qualifies status.</li>
          <li>All SharePoint version history and audit logs for the Current TL Shifts / waitlist file from April 2024 through July 2025.</li>
          <li>Any documentation explaining why my status changed from Temporary to Permanent.</li>
          <li>Any documentation explaining why my request date was later reflected as July 17, 2025 despite my mid-shift request and complaint predating that date.</li>
          <li>Any documentation regarding the four-day, ten-hour schedule, including who requested it, whether I was initially told no, whether team approval was required, and whether I had to obtain agreement from my team before it was implemented.</li>
          <li>Any records showing that the four-day schedule was considered a substitute for, or resolution of, my mid-shift request.</li>
        </ul>

        <InlineExhibits
          heading="Waitlist evidence — mid-shift request and version history"
          items={[
            { id: "EX-043", relevance: "April 26, 2024 Ryan Tafoya confirmation that Harbin was not on the MID-shift list." },
            { id: "EX-046", relevance: "January 22, 2025 saved waitlist showing Harbin on the list with June 26, 2024 request date and PM/Temporary status." },
            { id: "EX-045", relevance: "February 25, 2025 waitlist after Jen Roy's edits — Harbin's row removed while junior employees remained." },
            { id: "EX-042", relevance: "Allan Glover acknowledging Harbin had been on the waitlist for approximately two years." },
          ]}
        />

        {/* Ticket-Requirement / Version-History rebuttal */}
        <div className="mt-5 rounded-md border-2 border-foreground/40 bg-foreground/5 p-4">
          <h4 className="font-display text-base font-semibold tracking-tight">
            The Waitlist Document Itself Requires a CFS Ticket — Respondent Has Not Produced One
          </h4>
          <p className="mt-3">
            The waitlist document states on its face: <em>"DM must open ticket with CFS to request TL shift change/placement on waitlist."</em> See <Ex id="EX-068" /> and the header of the Current TL Shifts / waitlist file reflected in <Ex id="EX-077" />. This is significant because Respondent relies on scheduling and waitlist explanations, but has not produced the underlying CFS tickets, request records, routing history, approval records, or audit logs supporting (1) my original mid-shift request; (2) the alleged May 2025 offer and alleged decline; (3) my February 2025 removal from the waitlist; (4) my July 17, 2025 re-addition and reset request date; (5) my change from PM/Temporary to PM/Permanent; or (6) the comparator movements Respondent attributes to "the waitlist" or "leadership decisions."
          </p>
          <p className="mt-3">
            The version-history records further show that my waitlist history was not static. The February 25, 2025 version reflects edits by Jen Roy, and my name does not appear in the visible waitlist records from that version. See <Ex id="EX-072" /> and <Ex id="EX-079" />. The earlier January 22, 2025 and February 18, 2025 versions show I was still present on the list. See <Ex id="EX-076" /> and <Ex id="EX-078" />. The March 19, 2025 and July 3, 2025 versions show I remained absent. See <Ex id="EX-080" /> and <Ex id="EX-071" />. The July 16, 2025 and September 22, 2025 versions then list me with a new request date of July 17, 2025, a requested shift of AM, a current shift of PM, and a Permanent designation — none of which reflects my original long-standing mid-shift request. See <Ex id="EX-070" /> and <Ex id="EX-075" />.
          </p>
          <p className="mt-3">
            Taken together, the waitlist document's own ticket requirement and the version-history chain narrow the deletion window to February 18–25, 2025, identify the editors (Jen Roy, Edina Markus, Lily Cano), and confirm that my July 2025 re-entry was a reset, not a continuation of my prior request. Respondent should be required to produce the native SharePoint file, the complete version history, all CFS tickets and routing records, audit logs, editor metadata, and all communications explaining the February 2025 removal, the July 2025 re-addition, the request-date reset, and the Temporary-to-Permanent status change.
          </p>
          <p className="mt-3 rounded-md border-l-4 border-foreground/60 bg-background/60 px-3 py-2 font-medium">
            Respondent cannot rely on a scheduling/waitlist process while refusing to produce the tickets and source records that the waitlist document itself says are required.
          </p>
          <div className="mt-3">
            <InlineExhibits
              heading="Ticket requirement and version-history chain"
              items={[
                { id: "EX-068", relevance: "CAR TL Shift Changes SOW — requires DM to open a CFS ticket for any TL shift change or waitlist placement." },
                { id: "EX-066", relevance: "Official TL Shift Change Process (Tyler Wilding) — PM is default; DMs/AMs control moves via waitlist; all moves require a CAR Field Support ticket." },
                { id: "EX-077", relevance: "Nov 21, 2024 HR Current Roster Shifts — authoritative HR record listing Harbin under Allan/Greg, LVAR, PM, Eligible-for-AM = Yes." },
                { id: "EX-076", relevance: "Jan 22, 2025 waitlist version — Harbin still present." },
                { id: "EX-078", relevance: "Feb 18, 2025 waitlist version — Harbin still present." },
                { id: "EX-072", relevance: "Feb 25, 2025 12:01 PM version (Jen Roy edits) — Harbin removed." },
                { id: "EX-079", relevance: "Feb 25, 2025 10:53 AM version — Harbin already absent, tightening the deletion window." },
                { id: "EX-080", relevance: "Mar 19, 2025 version — Harbin still absent, well before the alleged May 2025 offer." },
                { id: "EX-071", relevance: "July 3, 2025 version — Harbin still absent." },
                { id: "EX-070", relevance: "July 16, 2025 version — Harbin re-added with reset request date of 7/17/2025." },
                { id: "EX-075", relevance: "Sept 22, 2025 version — Harbin listed with AM requested, PM current, 7/17/2025 request date, Temp/Perm flipped to Permanent." },
              ]}
            />
          </div>
        </div>







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
          discretionary.
        </p>
        <p className="mt-3">
          The Team Leader comparators identified below all hold the same Team Leader role as
          Charging Party, in the same Vehicle Assistance line of business, under the same
          purportedly centralized scheduling and waitlist process. Each comparator's actual
          department, shift hours, days off, and movement history is set out at the schedule-by-schedule
          level in the post-complaint timeline (§ II.O.1 below) and the supporting comparator matrix.
          See <Ex id="EX-010" />, <Ex id="EX-022" />.
        </p>
        <p className="mt-3">
          Comparators were identified by name, role, start date, schedule history, and source in{" "}
          <Ex id="EX-010" />:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>
            <strong>Tyler Millisock</strong> (Team Leader, LVAR → PRE-D/DBC) — same April 3, 2023
            start date and same TL level as Charging Party; moved from LVAR PM/closing
            (1:30 p.m.–10:00 p.m., Sun–Thu) to PRE-D/DBC 11:30 a.m.–8:00 p.m. between January and
            October 2025; stated he was not on the waitlist; no waitlist ticket has been produced.
          </li>
          <li>
            <strong>Hunter Samuel</strong> (Team Leader, HVAR → LVAR/Whitehall) — cross-department
            transfer in June–July 2025 placed directly into AM (approximately 8:00 a.m.–4:30 p.m.,
            weekday core schedule) in Charging Party's own department while Charging Party remained
            on PM/closing.
          </li>
          <li>
            <strong>Cody Christensen</strong> (Team Leader, HVAR → LVAR/Whitehall) — cross-department
            transfer in June–July 2025 placed directly into AM in Charging Party's department; carried
            a "Temporary" designation rather than going through the permanent waitlist Charging Party
            was held to.
          </li>
          <li>
            <strong>Marc Case</strong> (Team Leader, LVAR PM) — on the same 1:30 p.m.–10:00 p.m. PM
            closing schedule as Charging Party; routinely permitted to leave approximately one hour
            early (typically by 9:00 p.m.) while Charging Party was required to cover his team.
          </li>
          <li>
            <strong>Marissa Mascarenas</strong> (Team Leader, LVAR) — held rotating 10:00 a.m.–6:30
            p.m. mid-shift (March 2025), an active mid-shift TL placement (April 2025), and
            8:00 a.m.–4:30 p.m. AM placement (September 2025), without a waitlist explanation,
            during the same period Charging Party's mid-shift request remained unresolved.
          </li>
          <li>
            <strong>Whitnee Kollar</strong> (Team Leader, LVAR) — placed on a dedicated
            9:00 a.m.–5:30 p.m. mid-shift in August 2025, confirming mid-shift Team Leader
            placements existed during the same window Charging Party was told no mid-shift was
            available.
          </li>
          <li>
            <strong>Leslie McGregor</strong> (Team Leader / TL-in-Training, Training Bay) — placed
            into 11:30 a.m.–8:00 p.m. in TBay / TL-in-Training in September 2025, the same earlier
            schedule envelope Charging Party had been requesting since 2024.
          </li>
          <li>
            <strong>Jarin Bell</strong> (Team Leader, Maintenance → LVAR/Whitehall) — transferred
            from a late shift in Maintenance directly into AM in Charging Party's department in
            September 2025.
          </li>
        </ul>
        <p className="mt-3">
          The Position Statement does not address any of these individuals by name. That silence
          is itself probative under standard comparator analysis.
        </p>

        <InlineExhibits
          heading="Comparator evidence"
          items={[
            { id: "EX-010", relevance: "Comparator Movement & Flexibility Map — Millisock, Samuel, Christensen, Case, Mascarenas, Kollar, McGregor, Bell." },
            { id: "EX-022", relevance: "Schedule Movement Data — actual department, shift hours, and days for each Team Leader comparator." },
          ]}
        />



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
          E.1. November 6, 2025 HR Follow-Up Call — Alleged AM Offer Used to Justify Removal From Mid-Shift Waitlist
        </h3>
        <p className="mt-3">
          Respondent's explanation regarding the alleged May 2025 shift offer is internally
          inconsistent and unsupported by the record. During the November 6, 2025 HR follow-up
          call, HR relayed Allan Glover's account that a day-shift offer was allegedly made in
          May 2025 and declined, and that two schedule-change requests had been submitted on my
          behalf. HR then stated that if employees are offered something and decline it, that is
          why they are pulled off the waitlist.
        </p>
        <p className="mt-3">
          I immediately disputed that explanation. I explained that my long-standing request was
          for mid-shift, that I had never been offered a mid-shift position, and that I had never
          been offered or declined an AM/day-shift position. I also challenged the logic of
          removing someone from a waitlist for one shift based on an alleged offer of a different
          shift. HR responded that "that is how it works" and characterized the practice as
          offering the "next shift available."
        </p>
        <p className="mt-3">
          This explanation is not credible without supporting records. Respondent should be
          required to produce the alleged May 2025 offer, including the date it was made, the
          person who made it, the shift offered, the department/group, the communication method,
          the alleged decline, the associated ticket, the waitlist-removal record, the written
          policy authorizing removal from a mid-shift waitlist based on an alleged day-shift
          offer, and any notice provided to me that I had been removed.
        </p>
        <p className="mt-3">
          This issue is especially important because the preserved waitlist version-history
          evidence shows my name was deleted from the waitlist in February 2025 — months before
          the alleged May 2025 offer. Respondent cannot rely on a May 2025 alleged offer to
          explain a February 2025 deletion. If Respondent now claims a different, earlier offer
          occurred, it should be required to explain why its Position Statement and the
          November 6, 2025 HR follow-up both identified May 2025, and to produce the
          contemporaneous records supporting any revised explanation. See <Ex id="EX-008" />,{" "}
          <Ex id="EX-045" />, <Ex id="EX-046" />.
        </p>
        <p className="mt-3">
          Later in the same November 6, 2025 call, HR further stated that if employees were
          moving over, it "may have nothing to do with being on a waitlist" and "may have to do
          with leadership." That admission directly undercuts Respondent's representation that
          the waitlist is a neutral, centralized process that managers cannot bypass.
        </p>

        <div className="mt-4 border-l-4 border-foreground/60 bg-muted/40 p-4">
          <p className="font-display text-[13px] font-semibold tracking-tight">
            Key Contradiction
          </p>
          <p className="mt-2 text-[13px]">
            Respondent claims I was removed from the waitlist because I declined an alleged
            May 2025 day-shift offer. But my request was for mid-shift, I disputed ever receiving
            or declining an AM or mid-shift offer, and the version-history evidence shows my name
            was deleted in February 2025 — before the alleged May 2025 offer.
          </p>
          <p className="mt-3 font-display text-[13px] font-semibold tracking-tight">
            Question for the Investigator
          </p>
          <p className="mt-2 text-[13px]">
            What written policy allowed Respondent to remove me from a mid-shift waitlist
            because of an alleged day-shift offer, and where is the record showing that offer,
            decline, removal, and notice?
          </p>
        </div>



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
            the same document was Solid or Strong; the bonus payout was 124.36% of target,
            Individual Performance Factor was 96.49%, Company Performance Factor was 128.90%,
            and the operational metrics improved year over year. The 2024 overall rating is
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
          I dispute Respondent's attempt to distance Allan Glover from my protected activity and the actions that followed. Respondent states that Mr. Glover did not become my manager until July 2024, that the prior charge did not involve him, and that he was not informed of the substance of the allegations. This framing is incomplete and misleading.
        </p>
        <p className="mt-3">
          My position is not that Mr. Glover caused every event that led to my original EEOC charge. My position is that after I engaged in protected activity, Respondent placed me under Mr. Glover's management and he became involved in decisions and communications that affected my schedule, waitlist status, performance, advancement, corrective-action processing, and working conditions. Respondent cannot avoid liability by saying Mr. Glover was not the original subject of the prior charge when the adverse treatment continued after he became my manager.
        </p>
        <p className="mt-3">
          Respondent also omits that my move to Allan Glover's organization was not an ordinary transfer with no context. HR specifically arranged the move because I had complained about Rosanna Blackson and because HR wanted to limit my one-on-one interactions with Rosanna during the investigation. Susan Marcinko told me she had spoken with Greg Carfagna about moving me to Allan's organization effective July 1, 2024, and that in the interim I could go to Allan for one-on-one direction instead of Rosanna. This shows that Allan's involvement began in the context of an active HR investigation and protected complaint, not as a neutral management change with no connection to the underlying issues.
        </p>
        <p className="mt-3">
          Respondent's statement that Mr. Glover "was not informed of the substance" of the allegations should be investigated. At minimum, the company and leadership had actual knowledge of the substance of my complaint. My May 29, 2024 formal complaint was sent to multiple HR and leadership recipients and described race discrimination, retaliation, the alleged racial slur by Rosanna, denied transfer/schedule requests, and the failure to properly place me on the mid-shift waitlist. HR then discussed the matter with Greg Carfagna and arranged my move to Allan's organization. If Respondent claims Allan was deliberately kept uninformed of the substance of the investigation while being assigned as my interim and then direct manager, Respondent should produce the communications showing what Allan was told, what Greg told him, what Susan told him, and what information was provided to him before he began managing me.
        </p>
        <p className="mt-3">
          I also directly notified Allan of my protected activity. I let Allan know over a Microsoft Teams video meeting that I had made a complaint against Rosanna and that this could be why she was treating me the way she was. Allan told me that he confronted Rosanna and even swore at her and told her to correct the issue. That admission shows Allan in fact knew about my complaint and the conduct it concerned, contrary to Respondent's representation that he was not informed of the substance.
        </p>
        <p className="mt-3">
          Even if Allan was not involved in the original events, he later became the decisionmaker or participant in several disputed issues, including my schedule movement, waitlist status, alleged shift offer, performance review administration, internal opportunity discussions, Training Bay movement discussions, and later FMLA/leave-related communications. Respondent's claim that he did not make decisions "based on" the prior complaint is a conclusion, not proof. The record shows that after protected activity, I remained blocked from schedule movement, my waitlist history was disputed and later reset, my 2024 rating dropped from Strong to Solid, and other leaders received schedule movement that I did not receive.
        </p>
        <p className="mt-3">
          Respondent also cannot isolate Mr. Glover from the broader company knowledge. Retaliation does not require the final manager to have been the original actor in the discrimination complaint. The relevant question is whether Respondent, through its managers, HR, and leadership, had knowledge of my protected activity and then subjected me to materially adverse treatment. Here, HR, Greg Carfagna, and other leadership had actual notice. Allan then became the manager through whom many of the later disputed decisions and explanations were communicated.
        </p>
        <p className="mt-3">
          For these reasons, I dispute Respondent's suggestion that Allan Glover's later actions are insulated from the prior protected activity merely because he was not named in the original charge. The evidence shows that he became involved because of the protected complaint, served as the management contact during the investigation period, and later participated in or communicated decisions that are central to my retaliation and discrimination claims.
        </p>
        <p className="mt-3"><strong>Requested records related to this issue:</strong></p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>All communications between Susan Marcinko, Greg Carfagna, Allan Glover, and HR regarding my move to Allan's organization in June/July 2024.</li>
          <li>Any instructions given to Allan regarding my reporting arrangement, schedule request, prior complaint, Rosanna Blackson, or the ongoing investigation.</li>
          <li>Any communications showing what Allan was told or not told about my May 2024 complaint and EEOC charge.</li>
          <li>Any documents identifying who decided Allan would become my manager and why.</li>
          <li>Any communications between Allan, Greg, HR, Employee Relations, or scheduling administrators regarding my waitlist placement, alleged shift offer, schedule movement, and performance rating after July 2024.</li>
        </ul>

        <InlineExhibits
          heading="Glover transition / knowledge evidence (PS § I.B.2)"
          items={[
            { id: "EX-061", relevance: "May 31, 2024 HR intake call (Susan Marcinko) — verbatim transcript in which Harbin reports the March 28, 2024 racial slur by Rosanna Blackson ('you're my N word'), the January 2024 retaliation threat ('do you want me to bring up your adjustment compliance issue?'), the false job-abandonment processing, the waitlist failure confirmed by Ryan Tafoya, and total exclusion from projects; HR acknowledges the seriousness and commits to investigate and explore moving Harbin to another team." },
            { id: "EX-062", relevance: "June 5, 2024 HR follow-up call (Susan Marcinko) — verbatim transcript confirming Susan had spoken with Greg Carfagna that morning and arranged for Harbin to report through Allan Glover in the interim and to move officially to Allan's organization effective July 1, 2024 so that Harbin would not have one-on-one interaction with Rosanna during the investigation; Greg Carfagna was directly involved in the move logistics." },
            { id: "EX-016", relevance: "June 5, 2024 HR follow-up showing Charging Party's reassignment to Allan Glover's organization was arranged by HR during the active investigation of the May 29, 2024 complaint." },
            { id: "EX-HR-CALL", relevance: "Susan Marcinko confirmation that she had spoken with Greg Carfagna about moving Charging Party to Mr. Glover's organization effective July 1, 2024 because of the protected complaint." },
            { id: "EX-042", relevance: "Allan Glover Teams thread reflecting his ongoing knowledge of the schedule/waitlist issue raised in the prior complaint." },
          ]}
        />





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
          Respondent's "Performance and Advancement" section confirms an important fact: I was a strong performer. Respondent acknowledges that I continued performing at a high level, that my manager recognized my strong results, and that I later received a 2025 rating equivalent to Strong. I agree that I was a strong performer. That is not disputed.
        </p>
        <p className="mt-3">
          What is disputed is Respondent's attempt to use my strong performance as proof that I was not harmed. My strong performance makes the later treatment harder to explain, not easier. If I was consistently performing at a high level, Respondent should explain why I was downgraded in 2024, excluded from advancement pipelines, left out of project opportunities, repeatedly denied internal mobility, and kept fixed on PM/closing while other employees continued moving across departments, schedules, and opportunities.
        </p>
        <p className="mt-3">
          Respondent selectively relies on my 2025 Strong rating while omitting the most important rating event in the record: the 2024 downgrade. Before my protected activity, I received a 2023 overall rating of Strong. In the first review cycle after my May 2024 EEOC charge and May 29, 2024 formal internal complaint, my overall rating dropped to Solid. That downgrade occurred despite improved measurable performance, no individual goal rated below Solid, improved team metrics, and a 124.36% bonus payout. After the events at issue, and after Respondent was already defending its actions, my rating returned to Strong in 2025.
        </p>
        <p className="mt-3">
          That Strong → Solid → Strong pattern is central to this Charge. The 2024 Solid rating was the outlier. It occurred after protected activity, it did not match the underlying metrics, and it carried consequences.
        </p>
        <p className="mt-3">
          The 2024 Solid rating was not harmless. Shortly after the 2024 reviews were issued, leadership communicated that Unit Managers / Team Leaders needed a rating of 4 Strong or 5 Outstanding to be eligible for the TL Plus / Department Manager training cohort, which was an internal development pipeline for Department Manager or Area Manager advancement. Because I received a 3 Solid rating in 2024, I was excluded from that pipeline. Respondent's statement that my opportunities remained unchanged is therefore inaccurate. The rating affected both compensation and advancement opportunity.
        </p>
        <p className="mt-3">
          Respondent also states that promotions were handled through a formal posting and interview process. I do not dispute that internal postings existed. However, the existence of a formal posting process does not prove the process was applied fairly, consistently, or without retaliation. My application history reflects nearly 50 internal applications from approximately February 2023 through April 2025. Despite strong performance, leadership experience, operational knowledge, process expertise, and repeated efforts to advance internally, I was not selected for advancement opportunities. Respondent has not produced the decisionmakers, selected candidates, interview notes, scoring criteria, recruiter notes, comparative qualifications, or communications explaining those decisions.
        </p>
        <p className="mt-3">
          Respondent's statement that "another candidate was determined to be the best fit" is conclusory. It does not identify who made that determination, what qualifications were compared, what business need was applied, whether interview scoring was used, whether calibration occurred, whether the decisionmaker knew of my protected activity, or whether the selected candidate had comparable performance, tenure, ratings, experience, protected-activity history, or internal visibility. Without those records, Respondent's "best fit" explanation should not be accepted as a neutral reason.
        </p>
        <p className="mt-3">
          Respondent also asserts that "no hiring decisionmaker would have known of her prior charge." That statement is unsupported. Respondent has not identified the hiring decisionmakers for each role, the interview panels, the recruiters, the managers involved, or the communications related to those applications. My May 29, 2024 formal complaint was sent to multiple leaders and Employee Relations representatives, and my schedule, transfer, project, performance, and advancement concerns were repeatedly raised thereafter. Respondent cannot defeat causation by making a broad knowledge denial while withholding the records that would show who participated in each hiring decision and what they knew.
        </p>
        <p className="mt-3">
          Respondent's advancement narrative is also too narrow because it treats advancement as only formal job postings. At Discover, advancement did not happen only through posted roles. Advancement also happened through leadership visibility, project assignments, process-improvement work, Department Manager development cohorts, cross-department movement, schedule flexibility, and opportunities to present or be credited for operational work. Those opportunities mattered because they created exposure, sponsorship, and credibility for future promotion.
        </p>
        <p className="mt-3">
          After my protected activity, I was excluded from those types of opportunities despite my performance and process knowledge. I had previously been involved in operational process work and had created tools and ideas intended to improve performance, compliance, and call flow. I created a Compliance Check concept and related materials, but later raised concerns that Cyndy Smith's group recreated or used the idea while excluding me from related meetings and credit. I was not included in the meetings where the work was discussed or advanced, even though the concept originated from my work and I had created related materials.
        </p>
        <p className="mt-3">
          I also created and developed call-flow/process tools because I was trying to create visibility and solve operational problems even while I was being left out of normal advancement channels. I had a scheduled meeting to present the Call Flow tool to Greg Carfagna, but Greg did not attend. That matters because I was attempting to show leadership concrete process-improvement work, yet the opportunity did not result in meaningful sponsorship, visibility, or advancement support.
        </p>
        <p className="mt-3">
          This was not happening in a vacuum. During the same general period, other employees continued receiving movement across departments and schedules. Employees moved across LVAR, MVAR, HVAR, PRE-D/DBC, Training Bay, and other areas while I remained fixed on PM/closing and continued to be told that movement was unavailable, waitlist-controlled, or not operationally feasible. Respondent cannot separate "advancement" from those opportunities because schedule movement, department movement, project exposure, and leadership visibility all affected career development.
        </p>
        <p className="mt-3">
          Respondent's position therefore creates a contradiction. On one hand, Respondent admits I was a strong performer. On the other hand, Respondent asks the Division to accept that my lack of advancement, project exclusion, 2024 rating downgrade, TL Plus exclusion, and continued schedule immobility were all neutral and unrelated to protected activity. The record does not support that conclusion without further investigation.
        </p>
        <p className="mt-3">
          Respondent should be required to explain why the only rating downgrade occurred after protected activity; why the 2024 Solid rating did not match the underlying performance metrics; why that rating excluded me from the TL Plus / Department Manager development pipeline; why nearly 50 internal applications did not result in advancement; why project opportunities and credit were withheld; why leadership did not support my process-improvement work; why Greg Carfagna did not attend the scheduled Call Flow tool presentation; and why other employees continued receiving movement and opportunity while I remained blocked.
        </p>
        <p className="mt-3">
          For these reasons, Respondent's "Performance and Advancement" section does not rebut the Charge. It confirms my strong performance while failing to explain the adverse actions, blocked opportunities, and inconsistent advancement treatment that followed my protected activity.
        </p>
        <p className="mt-3">
          Respondent should be required to produce: (1) my complete internal application history; (2) all job postings for which I applied; (3) recruiter notes; (4) interview notes; (5) interview scoring rubrics; (6) names of all hiring decisionmakers, interviewers, recruiters, and managers involved in each role; (7) documents showing whether each decisionmaker knew or had access to information about my protected activity; (8) selected candidates' qualifications, ratings, tenure, internal experience, schedule history, and protected-activity history; (9) communications regarding my applications; (10) TL Plus / Department Manager training cohort eligibility rules; (11) the list of employees selected for that cohort; (12) documents showing how the 2024 Solid rating affected eligibility; (13) all communications regarding the Compliance Check project, Cyndy Smith's group, and related meetings; (14) calendar invites and attendance records for my Call Flow tool presentation; (15) documents showing project assignments, project invitations, and project participation for Unit Managers from May 2024 through 2026; and (16) records showing cross-department movement, schedule movement, and project assignments for similarly situated Unit Managers during the same period.
        </p>

        {/* Section II.O - May 2025 Shift Opportunity */}
        <h3 className="mt-8 font-display text-base tracking-tight">
          O. Response to Respondent's "May 2025 Shift Opportunity" Assertion
        </h3>
        <p className="mt-3">
          Respondent's "May 2025 Shift Opportunity" assertion is disputed. Respondent states that a day-shift opportunity became available to me in May 2025, that I declined it because of graduate school commitments at the University of Arizona, and that I was removed from the waitlist consistent with standard procedure. That is not what happened.
        </p>
        <p className="mt-3">
          I did not receive a May 2025 shift offer. I was not offered an AM shift, a mid-shift, or any other shift movement opportunity in May 2025. I did not decline any shift opportunity because of graduate school. I have not been offered any shift since being placed on or associated with the waitlist.
        </p>
        <p className="mt-3">
          Respondent has not produced any documentation supporting the alleged May 2025 offer. Respondent has not identified the person who allegedly made the offer, the exact shift offered, the department or role involved, the date and time of the offer, the method of communication, the person who allegedly confirmed my decline, or where my alleged decline was recorded. Respondent also has not produced a Teams message, email, ticket, calendar invite, written confirmation, or any written decline.
        </p>
        <p className="mt-3">
          The timeline also contradicts Respondent's explanation. Respondent states that I was removed from the waitlist after declining a May 2025 opportunity. However, the preserved waitlist evidence shows I had already been removed months earlier. The January 22, 2025 saved waitlist version showed me on the list, with a June 26, 2024 request date, PM/Temporary status, and Qualifies = Yes. Respondent's records still showed me as PM/Temporary through February 18, 2025. Then, after Jen Roy edited the waitlist multiple times on February 25, 2025, my row was removed while junior employees remained on the list and continued to qualify.
        </p>
        <p className="mt-3">
          That chronology matters. If Respondent's position is that I was removed because I declined a May 2025 offer, Respondent must explain why I was already removed from the waitlist in February 2025. A May 2025 alleged decline cannot explain a February 2025 removal.
        </p>
        <p className="mt-3">
          Respondent's reference to "standard procedure" is also unsupported. The waitlist/SOW records reflect that a DM must open a ticket with CFS to request a TL shift change or placement on the waitlist. If Allan Glover allegedly submitted schedule-change requests on my behalf, Respondent should produce those tickets. If a May 2025 shift opportunity was allegedly offered and declined, Respondent should produce the ticket, offer communication, decline documentation, and audit trail showing the offer, the response, and the resulting removal.
        </p>
        <p className="mt-3">
          This section addresses only Respondent's May 2025 offer/decline assertion. The separate July 2025 waitlist screenshot, the limited five-row snippet, the July re-add, the July 17 request date, and the PM/Permanent status issue will be addressed separately. However, even without the July evidence, Respondent's May 2025 explanation is not supported by the February waitlist records.
        </p>
        <p className="mt-3">
          Respondent's May 2025 assertion therefore raises material factual disputes. If I was removed because I declined an alleged May 2025 offer, why was I already removed in February 2025? If an offer was made, where is the written offer or ticket? If I declined, where is my written or recorded decline? If removal after a declined offer was standard procedure, where is the policy and the audit trail showing that procedure was followed?
        </p>
        <p className="mt-3">
          For these reasons, Respondent's May 2025 shift-opportunity assertion should not be accepted without production of the underlying records.
        </p>
        <p className="mt-3">
          Respondent's schedule materials also appear to misstate my actual schedule. To the extent Respondent's exhibit or screenshot suggests that I worked an 11:30 a.m.–8:00 p.m. schedule, that is incorrect. The preserved schedule records show that I remained on the PM/closing schedule ending at 10:00 p.m. The 11:30 a.m.–8:00 p.m. schedule was associated with comparators such as Tyler Millisock, not me. This matters because Respondent's scheduling defense depends on accurate schedule history. If Respondent's own exhibit incorrectly attributes an earlier 11:30 a.m.–8:00 p.m. schedule to me, that further undermines its claim that the scheduling process was accurately documented, neutral, and uniformly applied.
        </p>
        <p className="mt-3">
          If Respondent later changes its explanation and claims the alleged shift offer occurred in February 2025 rather than May 2025, Respondent should be required to explain why its Position Statement identified May 2025 and produce the contemporaneous February offer, decline, ticket, and removal records. A later change in the alleged date would be a shifting explanation, not a correction supported by the current record.
        </p>

        <p className="mt-3">
          Respondent should be required to produce: (1) the alleged May 2025 offer communication; (2) the exact shift, department, and role allegedly offered; (3) the name and title of the person who allegedly made the offer; (4) the date, time, and method of the alleged offer; (5) any written or recorded statement showing I declined because of University of Arizona graduate school commitments; (6) the waitlist record showing my position immediately before the alleged offer; (7) the waitlist record showing my removal and the reason code or explanation for removal; (8) the full SharePoint version history for the waitlist from January 2025 through May 2025; (9) the July 2024 ticket Allan allegedly submitted; (10) any ticket connected to the alleged May 2025 opportunity; (11) any SOW, policy, or procedure requiring removal after declining a shift; and (12) documentation explaining why I was removed in February 2025 if the alleged decline occurred in May 2025.
        </p>

        <InlineExhibits
          heading="May 2025 / waitlist removal evidence"
          items={[
            { id: "EX-046", relevance: "January 22, 2025 saved waitlist — Harbin listed with June 26, 2024 request date." },
            { id: "EX-045", relevance: "February 25, 2025 Jen Roy edit removing Harbin while junior employees remained and continued to qualify." },
            { id: "EX-048", relevance: "Mid-shift waitlist version-history narrative documenting placement, removal, absence, and re-add." },
            { id: "EX-022", relevance: "Respondent's schedule materials appear to suggest Harbin worked 11:30 a.m.–8:00 p.m.; preserved schedule records show Harbin remained on PM/closing ending 10:00 p.m., while Tyler Millisock and other comparators held the 11:30 a.m.–8:00 p.m. schedule." },
          ]}
        />

        {/* Section II.O.1 — Post-Complaint Schedule and Department Movement Timeline */}
        <h3 className="mt-8 font-display text-base tracking-tight">
          O.1. Post-Complaint Schedule and Department Movement Timeline
        </h3>
        <p className="mt-3">
          Respondent's schedule records should be evaluated as a timeline, not as isolated screenshots. The evidence shows that after my protected complaints, schedule and department movement continued for other leaders while I remained fixed on PM/closing ending at 10:00 p.m. This undermines Respondent's claim that no movement was available, that the waitlist was an absolute barrier, or that managers lacked practical influence over schedule movement.
        </p>
        <p className="mt-3">
          The point is not that movement stopped across the business. Movement continued. It stopped for me. Other leaders continued moving across departments, schedules, Training Bay, AM, mid-shift, 10:00–6:30, 11:30–8, and PRE-D/DBC placements while my request remained unresolved, my waitlist history changed, and my status and request date were later reset. Respondent should be required to explain, comparator by comparator, whether each movement occurred through the waitlist, a manager request, a training assignment, a preexisting assignment, an accommodation, or another process.
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-[12px]">
            <thead>
              <tr className="border-b-2 border-foreground/40 bg-foreground/5 text-left">
                <th className="px-2 py-2 font-display font-semibold">Month / Date</th>
                <th className="px-2 py-2 font-display font-semibold">Team Leader (Role)</th>
                <th className="px-2 py-2 font-display font-semibold">Prior Dept. / Shift Hours / Days</th>
                <th className="px-2 py-2 font-display font-semibold">New Dept. / Shift Hours / Days</th>
                <th className="px-2 py-2 font-display font-semibold">Shift Category</th>
                <th className="px-2 py-2 font-display font-semibold">Temp / Perm</th>
                <th className="px-2 py-2 font-display font-semibold">Evidence</th>
                <th className="px-2 py-2 font-display font-semibold">Why It Matters</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-foreground/15">
                <td className="px-2 py-2">Jan–Oct 2025</td>
                <td className="px-2 py-2">Tyler Millisock (Team Leader; April 3, 2023 start — same as Harbin)</td>
                <td className="px-2 py-2">LVAR · 1:30 p.m.–10:00 p.m. PM/closing · Sun–Thu</td>
                <td className="px-2 py-2">PRE-D/DBC · 11:30 a.m.–8:00 p.m. · weekday core</td>
                <td className="px-2 py-2">PM → earlier PM (PRE-D/DBC)</td>
                <td className="px-2 py-2">No waitlist ticket produced</td>
                <td className="px-2 py-2">EX-010; EX-022</td>
                <td className="px-2 py-2">Stated he was not on the waitlist; same TL role and start date as Harbin; directly contradicts the "neutral waitlist controls all movement" claim.</td>
              </tr>
              <tr className="border-b border-foreground/15">
                <td className="px-2 py-2">June–July 2025</td>
                <td className="px-2 py-2">Hunter Samuel (Team Leader)</td>
                <td className="px-2 py-2">HVAR · non-AM (mid/late) shift</td>
                <td className="px-2 py-2">LVAR/Whitehall (Harbin's dept.) · ~8:00 a.m.–4:30 p.m. AM · weekday core</td>
                <td className="px-2 py-2">AM</td>
                <td className="px-2 py-2">Transfer placed directly into AM (no waitlist position produced)</td>
                <td className="px-2 py-2">EX-022</td>
                <td className="px-2 py-2">Cross-department transfer placed straight into the AM schedule Harbin had requested.</td>
              </tr>
              <tr className="border-b border-foreground/15">
                <td className="px-2 py-2">June–July 2025</td>
                <td className="px-2 py-2">Cody Christensen (Team Leader)</td>
                <td className="px-2 py-2">HVAR · mid/late shift</td>
                <td className="px-2 py-2">LVAR/Whitehall (Harbin's dept.) · ~8:00 a.m.–4:30 p.m. AM · weekday core</td>
                <td className="px-2 py-2">AM</td>
                <td className="px-2 py-2">"T" (Temporary) designation while in AM</td>
                <td className="px-2 py-2">EX-022</td>
                <td className="px-2 py-2">Allowed into AM via "Temporary" status while Harbin was held to permanent-waitlist mechanics for the same shift.</td>
              </tr>
              <tr className="border-b border-foreground/15">
                <td className="px-2 py-2">August 2025</td>
                <td className="px-2 py-2">Whitnee Kollar (Team Leader, LVAR)</td>
                <td className="px-2 py-2">Prior non-mid placement</td>
                <td className="px-2 py-2">LVAR · 9:00 a.m.–5:30 p.m. mid-shift · weekday core</td>
                <td className="px-2 py-2">MID</td>
                <td className="px-2 py-2">Permanent mid placement</td>
                <td className="px-2 py-2">EX-022</td>
                <td className="px-2 py-2">Confirms TL-level mid-shift placements existed in LVAR while Harbin was told no mid-shift was available.</td>
              </tr>
              <tr className="border-b border-foreground/15">
                <td className="px-2 py-2">Mar–Sep 2025</td>
                <td className="px-2 py-2">Marissa Mascarenas (Team Leader, LVAR)</td>
                <td className="px-2 py-2">Rotating 10:00 a.m.–6:30 p.m. mid-shift (Mar 2025)</td>
                <td className="px-2 py-2">Active mid-shift TL (Apr 2025) → 8:00 a.m.–4:30 p.m. AM (Sep 2025)</td>
                <td className="px-2 py-2">MID → AM</td>
                <td className="px-2 py-2">Mid stated as preference; AM placement without waitlist record produced</td>
                <td className="px-2 py-2">EX-010; EX-022; EX-085</td>
                <td className="px-2 py-2">Three favorable schedule placements in six months under the same "neutral" process Harbin was held to.</td>
              </tr>
              <tr className="border-b border-foreground/15">
                <td className="px-2 py-2">September 2025</td>
                <td className="px-2 py-2">Leslie McGregor (TL-in-Training, Training Bay)</td>
                <td className="px-2 py-2">Prior placement</td>
                <td className="px-2 py-2">Training Bay · 11:30 a.m.–8:00 p.m.</td>
                <td className="px-2 py-2">Earlier PM (TBay)</td>
                <td className="px-2 py-2">Training-Bay placement (Allan: "no criteria")</td>
                <td className="px-2 py-2">EX-022; EX-059</td>
                <td className="px-2 py-2">Fresh placement into the exact earlier-PM envelope Harbin had requested; Allan admitted Training Bay selection had "no criteria."</td>
              </tr>
              <tr className="border-b border-foreground/15">
                <td className="px-2 py-2">September 2025</td>
                <td className="px-2 py-2">Jarin Bell (Team Leader)</td>
                <td className="px-2 py-2">Maintenance · late shift</td>
                <td className="px-2 py-2">LVAR/Whitehall (Harbin's dept.) · ~8:00 a.m.–4:30 p.m. AM</td>
                <td className="px-2 py-2">AM</td>
                <td className="px-2 py-2">Transfer placed directly into AM</td>
                <td className="px-2 py-2">EX-022</td>
                <td className="px-2 py-2">Confirms the pattern: TL transfers into Harbin's department received AM while Harbin stayed on closing.</td>
              </tr>
              <tr className="border-b border-foreground/15">
                <td className="px-2 py-2">2025 (ongoing)</td>
                <td className="px-2 py-2">Brittnee Walker, Dylan Bryant, Josh Faulkner (Team Leaders)</td>
                <td className="px-2 py-2">Various LVAR/Whitehall placements</td>
                <td className="px-2 py-2">AM or earlier-shift placements in LVAR/Whitehall / TBay</td>
                <td className="px-2 py-2">AM / earlier</td>
                <td className="px-2 py-2">Permanent AM-area placements</td>
                <td className="px-2 py-2">EX-010; EX-022</td>
                <td className="px-2 py-2">AM TL availability persisted in Harbin's own area throughout the period her request remained unresolved.</td>
              </tr>
              <tr>
                <td className="px-2 py-2 font-semibold">Same period</td>
                <td className="px-2 py-2 font-semibold">Shawnna Harbin (Team Leader — Charging Party)</td>
                <td className="px-2 py-2">LVAR · 1:30 p.m.–10:00 p.m. PM/closing · Sun–Thu</td>
                <td className="px-2 py-2">LVAR · 1:30 p.m.–10:00 p.m. PM/closing · Sun–Thu (no movement)</td>
                <td className="px-2 py-2">PM (closing)</td>
                <td className="px-2 py-2">"P" (Permanent) — converted without ticket</td>
                <td className="px-2 py-2">EX-022; EX-044; EX-045; EX-046; EX-048</td>
                <td className="px-2 py-2">While TL comparators above moved across AM, MID, PRE-D/DBC, and Training Bay placements, Harbin's status, request date, and waitlist position were altered or reset.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          Read at the schedule-by-schedule level, the June–September 2025 records are especially
          probative. Tyler Millisock, Elisa, and Will appear on 11:30 a.m.–8:00 p.m. in PRE-D/DBC
          while Harbin remained on 1:30 p.m.–10:00 p.m. closing in LVAR. Hunter Samuel and Cody
          Christensen transferred from HVAR non-AM shifts into ~8:00 a.m.–4:30 p.m. AM placements
          in Harbin's department. In August 2025, Whitnee Kollar moved to 9:00 a.m.–5:30 p.m. MID
          in LVAR. In September 2025, Leslie McGregor moved to 11:30 a.m.–8:00 p.m. in
          TBay/TL-in-Training, and Jarin Bell transferred from a late shift in Maintenance
          directly into AM. Across that same window, Brittnee Walker, Dylan Bryant, Marissa
          Mascarenas, and Josh Faulkner held AM or earlier-shift placements in Harbin's own area.
          Harbin did not.
        </p>

        <InlineExhibits
          heading="Post-complaint movement timeline — visual evidence"
          items={[
            { id: "EX-022", relevance: "Schedule Movement Data — Harbin pinned to PM/closing ending 10:00 p.m. while Tyler, Hunter, Cody, Whitnee, Leslie, Jarin, and others moved to AM, mid-shift, 9:00–5:30, 10:00–6:30, 11:30–8, PRE-D/DBC, and Training Bay placements." },
            { id: "EX-010", relevance: "Comparator matrix — similarly situated TLs received schedule and department movement Harbin was denied; supports comparator-by-comparator analysis of how each movement occurred." },
          ]}
        />


        {/* Section II.P - July 2025 Waitlist Status */}
        <h3 className="mt-8 font-display text-base tracking-tight">
          P. Response to Respondent's "July 2025 Waitlist Status" Assertion
        </h3>
        <p className="mt-3">
          Respondent's "July 2025 Waitlist Status" section is incomplete and misleading. Respondent states that, in July 2025, I informed Allan Glover that my circumstances had changed and that I "now" needed to move to a day schedule. That framing is not accurate.
        </p>
        <p className="mt-3">
          July 2025 was not the beginning of my schedule request. My original request was for mid-shift, and I understood that I was already supposed to be on the waitlist for mid-shift. In June 2025, after remaining stuck on PM/closing and after Respondent failed to resolve the mid-shift issue, I asked to also be considered for AM shifts in addition to the mid-shift request. I did not abandon the mid-shift request. I expanded the request because Respondent had still not moved me and I needed any earlier schedule that would allow me to better manage my family and childcare obligations.
        </p>
        <p className="mt-3">
          Respondent's statement that a "new request" was submitted on July 10, 2025 ignores what had already happened. I had requested mid-shift in 2024, discovered in April 2024 that I had not been added to the MID-shift waitlist, raised that issue in my May 29, 2024 formal complaint, and later had records showing I was on a waitlist with a June 26, 2024 request date. Respondent's own records also showed me as PM/Temporary through February 2025. Then, after Jen Roy edited the waitlist multiple times on February 25, 2025, my name was removed from the waitlist while other employees remained listed and continued to qualify.
        </p>
        <p className="mt-3">
          That February removal matters. By the time I asked Allan in July 2025 where I stood on the waitlist, I was asking about a process I believed I had already been placed into, but the underlying record shows I had been removed months earlier. Respondent cannot fairly characterize July 2025 as a clean "new request" without explaining why I had been removed in February, why I was not on the controlling waitlist in July, and why the earlier request date was not preserved.
        </p>
        <p className="mt-3">
          In July 2025, I asked Allan for my specific numbered position on the waitlist. That request triggered the Jen Roy screenshot issue. On July 14, 2025, Allan contacted Jen Roy and asked where I fell on the waitlist. Within approximately one minute, Jen sent Allan a limited screenshot showing a five-row "Shift Change Request" list that included "LVAR — Shawnna Harbin — PM → AM." Allan thanked her within that same minute and later forwarded the screenshot to me.
        </p>
        <p className="mt-3">
          That screenshot was not the complete waitlist. It omitted the material fields needed to verify my actual position and whether Respondent was applying the process correctly, including Date Requested, Months as CAR TL, Temporary/Permanent status, and Qualifies = Yes/No. Those fields were not minor. They were the exact fields needed to determine whether the process was chronological, whether I qualified, whether my earlier request date was preserved, and whether my temporary/permanent status had been changed.
        </p>
        <p className="mt-3">
          The timing of the exchange is also significant. Allan asked Jen where I was on the waitlist, and Jen provided the limited screenshot within approximately sixty seconds. The exchange then ended with Allan saying thank you. That speed, combined with the omitted columns, raises a serious question about whether the screenshot was a selective or prepared view rather than the complete controlling source record.
        </p>
        <p className="mt-3">
          The July 14 screenshot also did not match the actual SharePoint waitlist record. The controlling "Current TL Shifts" SharePoint waitlist on or around that time did not contain my name. The July 3, 2025 saved version, co-edited by Edina Markus and Jen Roy, showed other employees listed and qualifying while I remained absent. I was not actually re-added to the live waitlist until July 16, 2025, and the record then showed a new July 17, 2025 request date.
        </p>
        <p className="mt-3">
          That July 17 request date is another material inconsistency. My mid-shift request existed since 2024. The January 2025 waitlist snapshot reflected a June 26, 2024 request date. Yet after I asked Allan where I stood and after Jen produced the July 14 screenshot, I was re-added with a July 17, 2025 request date. That appears to reset my seniority and materially harm my ability to receive the schedule movement I had been seeking.
        </p>
        <p className="mt-3">
          Respondent also changed or reflected my status as PM/Permanent without explanation. My PM assignment had been presented to me as temporary, and Respondent's own records continued to show PM/Temporary status. When I was later re-added, my status appeared as PM/Permanent without notice, ticket, approval documentation, or explanation. That matters because Respondent's own shift-change process distinguishes between temporary and permanent movement.
        </p>
        <p className="mt-3">
          Respondent's assertion that the process was "centralized and uniformly applied" is further contradicted by the movement occurring around the same period. While I was removed, omitted, re-added, and reset, other employees remained on the list, continued qualifying, or moved across schedules/departments. The February 2025 version history showed my row removed while employees such as Cody Christensen, Hunter Samuel, and Courtney Griffith remained and continued to qualify. Comparator evidence also shows that employees such as Tyler Millisock were able to move shifts or departments without the same waitlist barriers being applied to me.
        </p>
        <p className="mt-3">
          Respondent's statement that managers "do not control" the process is also disputed by Respondent's own later explanations. During the September 19, 2025 conversation with Allan, Allan stated there "wasn't a criteria" for Training Bay movement and identified himself, Amber, Trevor, and Dan as part of the decision-making group. When I raised that other employees had moved while I remained stuck, Allan did not provide a clear waitlist-based explanation. In the November 6, 2025 HR follow-up call, HR also discussed the waitlist and comparator movement, including Tyler, and acknowledged the explanation she had been given by Allan. Those later discussions show that Respondent's "strict centralized process" narrative did not resolve the actual movement decisions or the comparator inconsistencies.
        </p>
        <p className="mt-3">
          For these reasons, Respondent's July 2025 waitlist explanation should not be accepted as evidence of transparency or uniform application. July 2025 was not a new scheduling issue. It was the point at which I asked where I stood on a waitlist I believed I was already on, after Respondent had failed to properly process my mid-shift request, after I had been removed in February, and after I had expanded my request in June to include AM in addition to mid-shift.
        </p>
        <p className="mt-3">
          Respondent should be required to produce: (1) the alleged July 10, 2025 SharePoint request; (2) the full metadata and audit history for that request; (3) the complete source file from which Jen Roy produced the July 14 screenshot; (4) all columns omitted from the July 14 screenshot, including Date Requested, Months as CAR TL, Temporary/Permanent status, and Qualifies = Yes/No; (5) the full SharePoint version history showing my January 2025 placement, February 2025 removal, July 3 absence, July 14 status, and July 16–17 re-addition; (6) documentation explaining why my request date changed from June 26, 2024 to July 17, 2025; (7) documentation explaining why my status changed from PM/Temporary to PM/Permanent; (8) all tickets Allan allegedly submitted on my behalf; (9) all communications between Allan Glover, Jen Roy, Edina Markus, HR, and scheduling administrators regarding my waitlist status; and (10) comparator movement records showing whether employees such as Tyler Millisock, Hunter Samuel, Cody Christensen, Courtney Griffith, and others moved through the same waitlist process, a separate manager request, a preexisting assignment, training obligation, or accommodation.
        </p>

        <InlineExhibits
          heading="July 2025 waitlist evidence"
          items={[
            { id: "EX-041", relevance: "Jen Roy's July 14, 2025 limited five-row screenshot sent to Allan Glover — omits Date Requested, Months as CAR TL, Temporary/Permanent status, and Qualifies." },
            { id: "EX-044", relevance: "July 3, 2025 controlling 'Current TL Shifts' SharePoint waitlist — Harbin absent while other employees listed and qualifying." },
            { id: "EX-040", relevance: "Shift-Change SOW revisions showing the documented process for ticket-based waitlist movement." },
          ]}
        />



        {/* Section II.Q - August–September 2025 Events */}
        <h3 className="mt-8 font-display text-base tracking-tight">
          Q. Response to Respondent's "August–September 2025 Events" Narrative
        </h3>
        <p className="mt-3">
          Respondent's "August–September 2025 Events" section is incomplete and contradicted by the recorded September 19, 2025 conversation Respondent itself appears to reference.
        </p>
        <p className="mt-3">
          Respondent first states that Allan Glover continued to support my career development in August 2025 by encouraging me to apply for additional opportunities, including a role within the DNA organization. I do not dispute that I applied for internal opportunities, including opportunities Allan encouraged me to pursue. However, encouraging me to apply for a role does not rebut my claim that I was being blocked from meaningful advancement, schedule movement, project visibility, and internal mobility. Respondent has not produced the DNA posting, selected candidate information, interview notes, scoring criteria, recruiter notes, hiring decisionmakers, or communications showing why I was not selected. The statement that another candidate was "more qualified" is conclusory unless Respondent produces the records supporting that claim.
        </p>
        <p className="mt-3">
          Respondent's August framing also omits the broader context of my August 2025 conversation with Allan. During that time, I raised the impact of my fixed PM/closing schedule on my family, including the effect on my son's school schedule and my inability to be present during normal evening hours. I also raised concerns about being stuck on the waitlist, not receiving projects, not being selected for opportunities, and not being able to move despite strong performance. Allan told me, in substance, that there was a "blockade" and that he did not believe I would be able to get past it. That is not consistent with Respondent's current position that I was receiving normal support and opportunities.
        </p>
        <p className="mt-3">
          Respondent next states that in September 2025, management evaluated possible movement within T-Bay operations and determined movement outside existing schedule assignments was not operationally feasible. Respondent should be required to produce the September 18, 2025 meeting invite, attendees, notes, decision criteria, coverage worksheets, schedule data, and all communications reflecting that determination. Respondent should also identify who made the decision, what options were considered, what criteria were used, and why I was excluded.
        </p>
        <p className="mt-3">
          The September 19, 2025 recorded conversation directly contradicts Respondent's description of a strict, uniform, policy-controlled process. During that conversation, Allan identified multiple people moving into Training Bay, including Michelle, Steve, Marissa, and Josh. When I asked what criteria were used to select people for Training Bay, Allan stated that there "wasn't a criteria." When I asked who the final decisionmaker was, Allan stated it was "all of us," and when I asked who "all of us" meant, he identified "myself, Amber, Trevor, Dan." That statement is inconsistent with Respondent's claim that movement was strictly centralized, uniformly applied, and outside manager control.
        </p>
        <p className="mt-3">
          The September 19 transcript also confirms that my concern was not simply disagreement with one decision. I explained to Allan that I was raising the lack of availability to move to a different shift, that there had been shift movement, and that I was on the waitlist to go to mid-shift. Allan responded "Yes," confirming that he understood the issue as a mid-shift waitlist issue. This is important because Respondent's Position Statement repeatedly attempts to reframe my request as a later day-shift request or a July 2025 re-entry, rather than the unresolved mid-shift/waitlist problem that had existed since 2024.
        </p>
        <p className="mt-3">
          When Allan then stated, "Shawnna, I offered you—," I immediately disputed that statement. I stated that he had never offered me mid-shift and asked when it occurred. Allan then clarified, "No—well—it was mornings." I again disputed that any AM offer had been made and asked when it happened, what position it was, and what group it involved. Allan did not identify a date, position, department, written offer, ticket, or communication. That exchange directly undermines Respondent's current claim that I declined a prior day-shift opportunity in May 2025. If that offer actually occurred, Respondent should produce the documentation.
        </p>
        <p className="mt-3">
          Respondent also states that management explained other team leaders were hired for night shifts but had to attend day classes for onboarding and would later transition to night schedules. The September 19 transcript does not resolve the comparator issue. During that conversation, I identified specific employees who had moved shifts or worked multiple schedules, including Tyler Millisock, Josh, and Hunter. I explained that Tyler had worked mid-shift, AM, and PM; that Josh had worked mid-shift and PM; and that Hunter came from HVAR, outside our director's area, and moved from mid-shift in HVAR to AM in my area. Allan responded that he was "not aware of that." That response is not a substantive explanation. It does not show that the process was uniform, and it does not rebut the comparator evidence.
        </p>
        <p className="mt-3">
          Respondent's statement that no employee moved ahead of the waitlist outside established policy is unsupported. The recorded conversation shows Allan acknowledging movement into Training Bay and stating there was no criteria for selecting people. It also shows management-level involvement in the decision through Allan, Amber, Trevor, and Dan. Respondent cannot rely on the September 19 conversation as support for its position while omitting the parts of that conversation showing discretionary selection, unclear criteria, and management involvement.
        </p>
        <p className="mt-3">
          Respondent's statement that movement outside existing schedules was not operationally feasible also requires scrutiny because it appears to have been made after I repeatedly raised that other employees were moving across shifts and departments while I remained fixed on PM/closing. Respondent should explain why movement suddenly became "not operationally feasible" when I requested it, even though other employees were moving into Training Bay, across areas, or across schedules. Respondent should also produce all records showing whether those employees moved through the waitlist, through manager request, through training assignment, through preexisting assignment, through accommodation, or through another process.
        </p>
        <p className="mt-3">
          Respondent again relies on the alleged May 2025 day-shift offer and the claim that I re-entered the waitlist on July 10, 2025. I dispute both characterizations for the reasons already stated. I did not receive or decline any May 2025 shift offer. I had not been properly placed on the mid-shift waitlist, I had been removed from the waitlist in February 2025, and the July 2025 request was not a clean new request; it was part of the same unresolved schedule issue. In the November 6, 2025 HR follow-up call, HR repeated Allan's explanation that he submitted two schedule-change requests and that a day shift had allegedly been offered and declined. I disputed that in real time, explained that I had never been offered the shift, and asked for the underlying ticket. No ticket has been produced.
        </p>
        <p className="mt-3">
          For these reasons, Respondent's August–September 2025 narrative should not be accepted at face value. The evidence does not show a neutral process that I simply disagreed with. It shows that after I repeatedly raised schedule and opportunity concerns, Respondent held a leadership review, denied movement as not operationally feasible, and then relied on explanations that are contradicted by the recorded September 19 conversation. That transcript shows there was no formal criteria for Training Bay selection, that managers participated in the decision, that movement was occurring, that I disputed the alleged offer in real time, and that Allan could not provide the basic details of any alleged AM or mid-shift offer.
        </p>
        <p className="mt-3">
          Respondent should be required to produce: (1) all records regarding the DNA role, including the job posting, selected candidate qualifications, interview notes, scoring criteria, recruiter notes, decisionmaker names, and communications; (2) all notes, Teams messages, calendar invites, and follow-up communications regarding the August 2025 conversation with Allan; (3) all documents regarding Allan's "blockade" statement and any related communications; (4) the September 18, 2025 leadership meeting invite, attendee list, agenda, notes, schedule worksheets, and decision records; (5) all communications among Allan, Amber, Trevor, Dan, and any scheduling or HR personnel regarding Training Bay movement; (6) the criteria used to select Michelle, Steve, Marissa, Josh, or any other employee for Training Bay; (7) all documents showing whether those employees kept or changed schedules; (8) all records explaining why my movement was deemed not operationally feasible; (9) all comparator records for Tyler Millisock, Josh, Hunter, Michelle, Steve, Marissa, and any other similarly situated Team Leader who moved areas, schedules, or Training Bay assignments; (10) the alleged May 2025 offer communication and decline documentation; and (11) all tickets Allan allegedly submitted on my behalf.
        </p>

        {/* Marissa Mascarenas Comparator Deep Dive */}
        <div className="mt-6 rounded-md border-2 border-foreground/40 bg-foreground/5 p-4">
          <h4 className="font-display text-base font-semibold tracking-tight">
            Marissa Mascarenas Comparator Deep Dive — Schedule Flexibility and Training Bay
          </h4>
          <p className="mt-3">
            Marissa Mascarenas should be evaluated as a separate comparator because her schedule history reflects the type of flexibility Respondent denied to me. The preserved schedule records show Marissa in mid-shift and earlier-shift placements before the September 2025 Training Bay decision. Those records support that mid-shift coverage existed and that earlier-shift movement was available to other Team Leaders while I remained fixed on PM/closing.
          </p>
          <p className="mt-3">
            This matters because Respondent later relied on "same schedule" or "not operationally feasible" as a reason I could not move into Training Bay. However, during the September 19, 2025 conversation, Allan Glover identified Marissa as moving into Training Bay and stated there was no formal criteria for Training Bay selection. When asked who made the decision, he identified himself, Amber, Trevor, and Dan. That evidence contradicts Respondent's claim that movement was strictly neutral, centralized, or outside management control.
          </p>
          <p className="mt-3">
            The issue is not only that Marissa received Training Bay. The issue is that Marissa's schedule history shows prior flexibility, mid-shift/earlier-shift placement, and later Training Bay selection, while I remained fixed on PM/closing despite a long-standing mid-shift request, protected complaints, strong performance, and documented waitlist issues.
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead className="bg-foreground/10">
                <tr>
                  <th className="border border-foreground/20 px-2 py-2 text-left">Date / Month</th>
                  <th className="border border-foreground/20 px-2 py-2 text-left">Marissa's Schedule / Role</th>
                  <th className="border border-foreground/20 px-2 py-2 text-left">Evidence Source</th>
                  <th className="border border-foreground/20 px-2 py-2 text-left">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-foreground/20 px-2 py-2 align-top">March 2025</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Rotating 10:00 a.m.–6:30 p.m. mid-shift / active mid-shift TL coverage</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">EX-022</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Confirms mid-shift TL coverage existed and was operationally feasible.</td>
                </tr>
                <tr>
                  <td className="border border-foreground/20 px-2 py-2 align-top">April 2025</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Active mid-shift TL placement (9:30–6:00 / 10:00–6:30 coverage, alongside Leslie McGregor)</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">EX-022</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Mid-shift placements continued through Spring 2025, contradicting "no mid-shift available."</td>
                </tr>
                <tr>
                  <td className="border border-foreground/20 px-2 py-2 align-top">September 2025</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Listed among AM 8:00–4:30 leaders while Harbin remained on PM/closing ending 10:00 p.m.</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">EX-022</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Earlier-shift movement was available to Marissa over time; not available to Harbin.</td>
                </tr>
                <tr>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Sept. 19, 2025</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Allan identifies Marissa as moving into Training Bay</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">EX-059</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Direct admission that Marissa was selected for Training Bay.</td>
                </tr>
                <tr>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Sept. 19, 2025</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Allan: "There wasn't a criteria" for Training Bay selection</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">EX-059</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Confirms Training Bay selection was discretionary, not policy-driven.</td>
                </tr>
                <tr>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Sept. 19, 2025</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Allan identifies decisionmakers: "Myself, Amber, Trevor, Dan"</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">EX-059</td>
                  <td className="border border-foreground/20 px-2 py-2 align-top">Confirms manager-level discretion controlled Training Bay placement.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3">
            Marissa Mascarenas is significant because her schedule history shows earlier-shift and mid-shift flexibility before the September 2025 Training Bay decision. When Charging Party raised the lack of availability to move shifts, Respondent relied on "same schedule" / operational feasibility explanations. But the September 19 transcript shows Training Bay selection was discretionary, had no formal criteria, and involved management decisionmakers. Respondent should therefore be required to produce the records showing why Marissa was selected for Training Bay and why Harbin was excluded despite her long-standing mid-shift request.
          </p>

          <p className="mt-3">
            Respondent should be required to produce: (1) Marissa Mascarenas's complete schedule history from 2024 through 2026; (2) Marissa's shift-change tickets and waitlist records; (3) Training Bay selection criteria, if any exist; (4) the September 18/19, 2025 Training Bay decision records, including invites, attendee lists, agendas, and decision notes; (5) all communications among Allan Glover, Amber, Trevor, Dan, Michelle, Steve, Marissa, Josh, and HR/scheduling personnel regarding Training Bay; (6) Training Bay class schedules, participant workload records, team-assignment records, and role duties; and (7) records showing whether Training Bay participants retained teams, lost teams, had reduced workloads, or had active training classes.
          </p>

          <p className="mt-3 rounded-md border-l-4 border-foreground/60 bg-background/60 px-3 py-2 font-medium">
            Respondent cannot rely on "same schedule" or "operational feasibility" to exclude me from Training Bay while refusing to produce the records showing how Training Bay participants were selected, what schedules they held, what duties they performed, and whether management discretion controlled the decision.
          </p>

          <div className="mt-3">
            <InlineExhibits items={[
              { id: "EX-022", relevance: "Schedule Movement Data — Marissa Mascarenas in rotating 10:00 a.m.–6:30 p.m. mid-shift (March 2025), active mid-shift TL placement (April 2025), and AM 8:00–4:30 placement (September 2025) while Harbin remained on PM/closing." },
              { id: "EX-059", relevance: "September 19, 2025 transcript — Allan identifies Marissa as moving into Training Bay, states there 'wasn't a criteria' for Training Bay selection, and identifies decisionmakers as 'myself, Amber, Trevor, Dan.'" },
              { id: "EX-010", relevance: "Comparator Matrix — Marissa Mascarenas comparator data alongside other similarly situated Team Leaders." },
            ]} />
          </div>
        </div>



        <div className="mt-4 rounded-md border-2 border-foreground/40 bg-foreground/5 p-4">
          <div className="font-display text-sm font-semibold tracking-tight">
            Key Transcript Excerpts — EX-059 (September 19, 2025, Allan Glover)
          </div>
          <dl className="mt-3 space-y-3 text-sm">
            <div>
              <dt className="font-semibold">Criteria:</dt>
              <dd className="mt-1 pl-3">
                <span className="italic">Me:</span> "What was the criteria on picking someone?"<br />
                <span className="italic">Allan:</span> "There wasn't a criteria."
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Decisionmakers:</dt>
              <dd className="mt-1 pl-3">
                <span className="italic">Me:</span> "Who's all of us?"<br />
                <span className="italic">Allan:</span> "Myself, Amber, Trevor, Dan."
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Mid-shift waitlist:</dt>
              <dd className="mt-1 pl-3">
                <span className="italic">Me:</span> "I was on the waitlist to go on mid shift, right?"<br />
                <span className="italic">Allan:</span> "Yes."
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Alleged offer:</dt>
              <dd className="mt-1 pl-3">
                <span className="italic">Allan:</span> "Shawnna, I offered you—"<br />
                <span className="italic">Me:</span> "You never offered me mid shift."<br />
                <span className="italic">Allan:</span> "No—well—it was mornings."<br />
                <span className="italic">Me:</span> "You did not offer me AM… When? What position? What group?"
              </dd>
            </div>
          </dl>
        </div>

        <p>
          This conversation is significant because Allan Glover was not merely a passive messenger. For months, I had asked Allan who controlled schedule movement, why my long-standing mid-shift request remained unresolved, and why other leaders were moving while I remained fixed on PM/closing. Allan repeatedly presented himself as someone trying to assist or advocate regarding my schedule concerns.
        </p>
        <p>
          However, during the September 19, 2025 Training Bay / shift movement conversation, Allan stated that Training Bay selection had no formal criteria and identified the decision-making group as "myself, Amber, Trevor, Dan." This was the first time he clearly identified himself as part of the group making these decisions. That statement is important because Respondent's Position Statement characterizes schedule movement as neutral, centralized, and outside manager discretion. Allan's own statements contradict that framing.
        </p>
        <p>
          The timing is also important. Allan's calendar reflects that he met with Susan Marchinko immediately before this conversation. Respondent should therefore produce the calendar invite, meeting records, notes, chats, emails, and any follow-up communications related to that HR meeting. Allan's statements after that meeting should be evaluated in the context of HR knowledge, management coordination, Training Bay selection, comparator movement, and the alleged shift offer Respondent now relies on.
        </p>

        <p className="mt-3 rounded-md border-l-4 border-foreground/60 bg-foreground/5 px-3 py-2 font-medium">
          The key issue is not tone. The key issue is that Allan identified no criteria, named management decisionmakers, acknowledged my mid-shift waitlist request, and could not identify the date, role, group, ticket, or communication for the alleged offer. The audio should be reviewed with the transcript because Allan's hesitation and shifting explanation are relevant to credibility.
        </p>

        <h4 className="mt-5 font-display text-sm font-semibold tracking-tight">
          Allan Glover's Reaction to Process Questions
        </h4>
        <p>
          Allan Glover's responses should be evaluated in context. In both the July 10, 2025 hardship-fund discussion and the September 19, 2025 Training Bay / shift movement conversation, Allan responded to my clarification questions by asking, in substance, "What are you trying to get to?" Those questions were not inappropriate. I was asking for clarification regarding race-related hardship-fund comments, Training Bay selection criteria, decisionmakers, comparator movement, and the alleged shift offer Respondent now relies on.
        </p>
        <p className="mt-3">
          This pattern is relevant because Respondent's Position Statement portrays the processes as neutral, uniform, and well-documented. However, when I asked the manager directly involved to explain the criteria, decisionmakers, and alleged offer, he did not provide clear documentation or a consistent explanation. Instead, he treated basic process questions as suspicious or confrontational. That supports further investigation into whether Respondent's stated reasons are complete, accurate, and supported by contemporaneous records.
        </p>
        <p className="mt-3">
          The July 10, 2025 reaction is independently corroborated by a contemporaneous same-day text-message thread to a coworker (<Ex id="EX-064" />) sent at 2:15 PM, immediately after the meeting with Allan. In that thread I wrote, in real time, that Allan "was insinuating that I was only helping Black people," that the meeting "felt very weird," that Allan "was like that's a problem," and that when I asked "what are you trying to say who did what I'm confused . . . he didn't clarify." A follow-up message later that afternoon recorded that when I pressed Allan for clarification, he said he "was just speaking in general" and that I was "misinterpreting" him, but offered no clarification of the underlying example. This contemporaneous record eliminates any argument that the race-coded character of Allan's hardship-fund comments, his "that's a problem" remark, or his refusal to clarify were reconstructed after the fact.
        </p>


        <h4 className="mt-5 font-display text-sm font-semibold tracking-tight">
          Additional Record Integrity Issue — Team Ratios / Formula Change
        </h4>
        <p>
          Respondent's Position Statement does not meaningfully address the version-history evidence showing that the Team Ratios 2024 file was modified on September 24, 2024 and that the LVAR mid-shift staffing formula was altered. This is relevant because Respondent relies on scheduling, staffing, and waitlist explanations to justify why I remained fixed on PM/closing while other leaders moved to AM, midshift, Training Bay, PRE-D/DBC, and other earlier-shift placements.
        </p>
        <p className="mt-3">
          The formula-change evidence should be evaluated together with the broader waitlist record: I was confirmed not on the mid-shift list on April 26, 2024; my May 29, 2024 complaint included the schedule/waitlist issue; ER later assured me I would be added; the October 14, 2024 TL Shift &amp; Waitlist document showed me as PM/Temporary waiting for AM rather than reflecting my original mid-shift request; I remained PM/Temporary through February 2025; I was removed by Jen Roy in February 2025; and I was later re-added in July 2025 with a new request date and PM/Permanent status.
        </p>
        <p className="mt-3">
          Respondent should be required to produce the original Team Ratios 2024 file, complete version history, formula history, edit history, author/editor metadata, SharePoint audit logs, and any communications explaining why the LVAR mid-shift staffing formula was changed. Respondent should also explain whether that formula change affected mid-shift availability, waitlist eligibility, staffing ratios, or the stated business reasons for denying my shift movement.
        </p>

        <h4 className="mt-5 font-display text-sm font-semibold tracking-tight">
          Team Ratios Workbook — MID Work Continued Under Other Team Leaders After the September 24, 2024 Formula Changes
        </h4>
        <p>
          The Team Ratios workbook further contradicts Respondent's position that my schedule issue was simply a matter of neutral availability or lack of mid-shift options. The workbook contains monthly tabs for January through December 2024 (EX-086, EX-087), and the later-month roster data shows that MID shifts and MID agents continued to exist in the same operational planning period — including MID agents assigned or redistributed under other Team Leaders.
        </p>
        <p className="mt-3">
          The Sept 24, 2024 7:14 PM version (EX-086) shows the LVAR TL Shift Split with <strong>MID = 0 / 0.0%</strong>, the Agent Shift Split with <strong>MID = 0 / 0.0%</strong>, and the TL Ratio cell for MID returning <strong>#DIV/0!</strong>. Three weeks later, the Oct 10, 2024 11:47 AM version (EX-087) shows the same LVAR MID = 0 / #DIV/0! pattern in both CURRENT and PLAN — confirming this was a sustained state, not a transient edit. Yet the very same Oct 10 workbook shows PreD CURRENT with <strong>MID = 36 agents / 2 TLs / ratio 18</strong>, proving MID staffing was operationally viable in the same workbook, the same business unit, and the same day.
        </p>
        <p className="mt-3">
          The agent-level roster data is even more direct. Marissa Mascarenas's team detail (EX-088) shows at least six MID-scheduled agents — Khadijah Marks (11:30-20:00), Alyssa Rocha (10:00-18:30), Jason Heyder (10:00-18:30), Joanna Quintanilla (08:00-16:30), Deron Sutton (08:00-16:30), Nathalie Austin (11:30-20:00), Ariane Smith (11:30-20:00), Rashanna Burley (08:30-17:00 and 11:30-20:00). Ryan Ascarte's team detail (EX-089) shows additional MID-scheduled agents — Ashley Rochester (09:00-17:30), Lanaja Jernigan (08:00-16:30), Kendra King (10:30-19:00), Amy Minshall (11:30-20:00), Tityana Walker (08:00-16:30). Both Marissa and Ryan report to Rosanna Blackson. The "Move To," "FWW/JA," "On TERM File," "Left LVAR/CAR," and "Moved to Fraud" columns confirm Respondent operated a formal movement mechanism during this same period.
        </p>
        <p className="mt-3">
          The version-history evidence reflects activity associated with Allan Glover, Darren Hunt, Scott McLaughlin, Trevor Howe, and Rosanna Blackson during the window in which the LVAR mid-shift formula/ratio fields changed (EX-086, EX-087). I do not assert from the screenshots alone that any particular individual changed any particular cell; the native file, cell-level edit history, formula history, and SharePoint audit logs are required to resolve that question — which is precisely why Respondent should be required to produce them.
        </p>
        <p className="mt-3">
          The record does not support a simple "no mid-shift availability" explanation. Respondent's own Team Ratios workbook shows MID schedules continued to exist and were being allocated to other Team Leaders' agent teams after my protected complaints, while the LVAR mid-shift ratio fields under my line of leadership were zeroed out or left in formula-error state. Respondent should be required to produce the native Team Ratios workbook, complete version history, cell-level edit history, formula history, author/editor metadata, SharePoint audit logs, and communications explaining (i) why the LVAR MID staffing formulas or ratio calculations were changed on or around September 24, 2024; (ii) why MID agents were assigned or redistributed under other Team Leaders during the same period; and (iii) why those MID opportunities were not used to resolve my long-standing mid-shift request.
        </p>

        <InlineExhibits
          heading="Team Ratios workbook — MID continuity & version-history activity"
          items={[
            { id: "EX-086", relevance: "Sept 24, 2024 7:14 PM version — LVAR TL Shift Split MID=0/0.0%, Agent Shift Split MID=0/0.0%, TL Ratio MID=#DIV/0!; Version History shows same-day edits by Allan Glover, Darren Hunt, Scott McLaughlin, Trevor Howe." },
            { id: "EX-087", relevance: "Oct 10, 2024 11:47 AM version — LVAR MID=0/#DIV/0! sustained three weeks later in CURRENT and PLAN; same workbook shows PreD MID=36 agents/2 TLs/ratio 18, proving MID staffing was operationally viable; Rosanna Blackson edit activity logged." },
            { id: "EX-088", relevance: "Marissa Mascarenas team detail — 6+ MID-scheduled agents (11:30-20:00, 10:00-18:30, 08:00-16:30) on a comparator TL's team under Rosanna during the same period Respondent claims no MID availability existed." },
            { id: "EX-089", relevance: "Ryan Ascarte team detail — 5 additional MID-scheduled agents (09:00-17:30, 08:00-16:30, 10:30-19:00, 11:30-20:00) on a second comparator TL's team under Rosanna; 'Moved to Fraud' / 'Left LVAR/CAR' notes confirm an active agent-movement mechanism." },
            { id: "EX-048", relevance: "Original Team Ratios formula/ratio change reference — September 24, 2024 modification narrative." },
          ]}
        />

        <h4 className="font-semibold mt-6 mb-2">
          Team Ratios Workbook — October Version Activity and MID Formula Discrepancies
        </h4>
        <p>
          The Team Ratios workbook raises additional record-integrity concerns. The October 2024 version history reflects modification activity associated with Rosanna Blackson and other users in the same workbook where MID staffing and ratio fields appear to have been changed, reduced, zeroed out, or affected by formula errors. I am not asserting, based on the visible version-history screenshot alone, that Rosanna personally changed a specific formula cell. However, her appearance in the October version history is relevant and should be investigated through the native file and audit history.
        </p>
        <p className="mt-3">
          The workbook shows a discrepancy between the summary/ratio fields and the detailed roster/planning data. In certain versions, MID appears as zero or produces formula errors such as <strong>"#DIV/0!"</strong> in staffing ratio sections. At the same time, the detailed monthly planning sections continue to show MID agents and MID schedules assigned under other Team Leaders, including later-month planning involving Marissa Mascarenas's team. This indicates that mid-shift work continued to exist even while the summary/ratio fields reflected MID differently.
        </p>
        <p className="mt-3">
          This is significant because Respondent relies on staffing, schedule availability, and waitlist explanations to justify why I remained on PM/closing while other Team Leaders and agents continued to receive or work MID, AM, Training Bay, and earlier-shift placements. Respondent should be required to produce the native Team Ratios workbook, complete version history, cell-level edit history, formula history, SharePoint audit logs, author/editor metadata, and communications explaining who changed the MID ratio/formula fields, why those changes were made, and whether those changes affected my mid-shift availability, waitlist position, schedule eligibility, or the stated business reasons for denying my schedule movement.
        </p>
        <p className="mt-3 text-sm italic">
          To attribute any specific formula-cell change to any specific individual, the following native records are required: (i) Excel "Show Changes" detail for the specific cell or range; (ii) SharePoint / Microsoft 365 audit-log entries showing cell or range modifications; (iii) the native workbook with full version-compare history; (iv) the workbook's formula history; and (v) author/editor metadata for the exact cell or range. Until those records are produced, I state only that Rosanna Blackson appears in the October version history of the workbook and that the file shows MID formula/ratio discrepancies during the same period — not that any particular person edited any particular formula cell.
        </p>




        <InlineExhibits
          heading="August–September 2025 evidence — HBCU/blockade & Sept 19 transcript"
          items={[
            { id: "EX-059", relevance: "September 19, 2025 verbatim transcript — Allan admits no formal criteria for Training Bay; first claims he 'offered' Harbin a shift then changes to 'mornings'; Harbin disputes any AM/mid-shift offer; identifies Tyler Millisock, Josh, and Hunter as comparators who moved; references Allan's own prior 'blockade' statement." },
            { id: "EX-060", relevance: "Allan Glover / Susan Marchinko calendar meeting immediately preceding the September 19, 2025 conversation — production request. Relevant to HR knowledge, management coordination, and the credibility of Allan's explanations regarding Training Bay, shift movement, and the alleged offer." },
            { id: "EX-005", relevance: "August 2025 HBCU recruiting comments and 'blockade' conversation with Allan Glover during the discussion about blocked advancement and schedule restrictions." },
            { id: "EX-042", relevance: "Allan Glover Teams thread — 'I've been requesting midshift for 2 years' / 'Demoting to a coach?' context surrounding the August–September discussions." },
            { id: "EX-019", relevance: "September 19, 2025 HR ticket summary referencing Greg-retaliation context tied to the recorded Allan conversation." },
            { id: "EX-010", relevance: "Comparator movement showing Tyler Millisock, Hunter, Josh and others received movement Charging Party was told was unavailable." },
          ]}
        />

        <h4 className="mt-6 font-display text-sm font-semibold tracking-tight">
          Temp/Perm Designations — Inconsistent Application Across Team Leaders
        </h4>
        <p>
          The Temp/Perm designations on the waitlist create another inconsistency Respondent has not explained. The waitlist records show other Team Leaders — including Cody Christensen (requested AM, current shift AM, marked "T") and Hunter Samuel (requested MID, current shift MID, marked "T") — listed with temporary shift designations while actually working the very shifts reflected in the waitlist records. The waitlist document itself states: "DM must open ticket with CFS to request TL shift change/placement on waitlist" (EX-068), which means Temp/Perm entries should be supported by produced tickets.
        </p>
        <p className="mt-3">
          Respondent has treated my PM assignment, and later my PM/Permanent designation, as if it were a neutral or settled scheduling outcome. But other employees appear to have remained in temporary or flexible shift placements during the same period, while my PM/Temporary status was later converted to PM/Permanent without clear notice, approval documentation, or a produced ticket. Respondent should be required to explain what "temporary" and "permanent" meant in practice, who decided when a temporary shift became permanent, what ticket or approval was required, and why my conversion to PM/Permanent occurred without the records the waitlist document itself says are required.
        </p>
        <p className="mt-3">
          Respondent should produce the CFS tickets, approval records, audit history, and communications for Cody Christensen, Hunter Samuel, and any other Team Leader whose shift was marked temporary while they were working AM or MID placements, as well as the CFS ticket or approval record documenting the conversion of my PM/Temporary status to PM/Permanent.
        </p>
        <p className="mt-3 font-medium">
          Respondent cannot rely on Temp/Perm designations as neutral records while refusing to explain why other leaders were allowed to remain in temporary AM/MID placements and my PM/Temporary assignment was later converted to PM/Permanent without clear notice, approval documentation, or a produced ticket.
        </p>

        <h4 className="mt-6 font-display text-sm font-semibold tracking-tight">
          Nameer Khan — Mid-Shift Waitlist Integrity Issue
        </h4>
        <p>
          The mid-shift waitlist records also raise a specific concern regarding Nameer Khan. The version-history evidence reflects Nameer Khan listed for MID ahead of me. However, I have corroborating evidence that Nameer stated he never requested to be placed on the mid-shift waitlist and was never offered mid-shift.
        </p>
        <p className="mt-3">
          This is significant because Respondent could rely on Nameer's placement to claim that I was not next in line for mid-shift. If Nameer did not actually request mid-shift and was not offered mid-shift, then his placement on the list functioned as a paper barrier rather than a genuine, neutral waitlist position. That supports the broader concern that the waitlist did not operate as a neutral, accurate, or uniformly applied system, and that inaccurate or non-actioned entries on the list should be tested through source records.
        </p>
        <p className="mt-3">
          Respondent should be required to produce the CFS ticket, request record, approval history, communications, and audit trail showing when and why Nameer Khan was placed on the mid-shift waitlist, whether he requested that placement, whether he was ever offered mid-shift, and whether his listing was used to justify denying or delaying my mid-shift request.
        </p>




        {/* Section II.R - Complaints, Recording, and Hardship Fund */}
        <h3 className="mt-8 font-display text-base tracking-tight">

          R. Response to Respondent's "Complaints, Recording, and Hardship Fund" Narrative
        </h3>
        <p className="mt-3">
          Respondent's "Complaints, Recording, and Hardship Fund" section omits material facts and relies on broad statements that are contradicted by the records.
        </p>
        <p className="mt-3">
          First, Respondent states that my September 2025 Ethical Concerns complaint was processed through standard procedures and that Discover concluded I had been offered a schedule change but declined it. I dispute that conclusion. I did not receive or decline a May 2025 shift offer. I was not offered AM, mid-shift, or any other shift opportunity in May 2025. Respondent has not produced the alleged offer, the alleged decline, the ticket, the shift details, the communication, or the person who allegedly recorded my response.
        </p>
        <p className="mt-3">
          That conclusion also ignores the waitlist records. My original request was for mid-shift. I was not properly placed on the MID-shift waitlist. I was removed from the waitlist in February 2025. Later records reflected inconsistent request dates and status changes. Respondent cannot rely on a "standard procedure" conclusion without producing the actual tickets, audit trail, waitlist version history, offer documentation, or alleged decline documentation.
        </p>
        <p className="mt-3">
          Second, Respondent states that system recording is a standard operational tool that applies broadly to Team Leaders and was not directed at me. That does not address the records. My Verint evidence shows my PC/profile appearing on live monitor while other Team Leaders in my same department were logged in and active, but their profiles did not show live monitoring active. That is the issue. Respondent is not simply being asked whether Verint exists. Respondent is being asked why my profile was visible when other similarly situated Team Leaders were not.
        </p>
        <p className="mt-3">
          After I reported the issue, other profiles later began appearing activated or visible. That sequence matters because it supports that my profile appeared differently first, and broader visibility appeared only after I complained.
        </p>
        <p className="mt-3">
          HR later confirmed this was not simply my misunderstanding. In the HR follow-up conversation, HR stated there was a technical problem and that I had "more visibility than" I should have had. HR also stated the issue had been turned over to product owners, the vendor, and the BT team; that they did not know what happened; that they did not know who did it; and that they were trying to backtrack permissions.
        </p>
        <p className="mt-3">
          Those facts contradict Respondent's statement that there is no indication I was treated differently. The screenshots show different visibility. HR admitted I had more visibility than I should have had. HR admitted they did not know what changed, who changed it, or why. Respondent should produce the Verint audit logs, permissions history, access records, product-owner communications, vendor communications, and BT escalation records.
        </p>
        <p className="mt-3">
          Third, the Verint issue overlaps with the Teams deletion evidence. On October 7, 2025, I sent HR investigator Edward Reyes a formal written timeline regarding my waitlist history, retaliation concerns, and Allan Glover's comments. On October 14, 2025, I notified Allan Glover and Amber in Teams that I had filed FMLA. That same Teams conversation also documented leadership-support concerns after Allan removed himself from my team chat.
        </p>
        <p className="mt-3">
          On October 21, 2025, I emailed HR and complained that my screen was being recorded or monitored through Verint. On October 23, 2025, the Allan/Amber Teams chat was blank on my work computer. The only visible message stated that older messages had been deleted due to the organization's retention policy. However, other Teams chats from the same period remained visible, including chats dated October 10, October 13, October 15, October 16, October 17, and October 21. The October 13 Alese Amarel chat remained visible and included messages discussing Allan leaving the chat and FMLA/LOA-related issues. By October 24, 2025, the same Allan/Amber chat was also cleared from my phone.
        </p>
        <p className="mt-3">
          Those facts support a preservation issue. The relevant Allan/Amber chat disappeared after protected activity, FMLA notice, the Verint complaint, and an active HR investigation, while other same-period chats remained visible. Respondent should produce Teams retention logs, deletion logs, audit history, and any legal-hold or preservation records.
        </p>
        <p className="mt-3">
          Fourth, Respondent states that Discover requires documentation for all hardship fund requests. That is not true based on my direct personal knowledge. Shortly before the July 10, 2025 incident, I personally assisted Brandi Cordi, a White employee on my team, with a hardship-fund request because she was facing eviction. Brandi was not required to submit supporting documentation. She was required to identify what she needed assistance for and provide a list or explanation of the requested need. Allan Glover was aware of and assisted with that request. No concern was raised.
        </p>
        <p className="mt-3">
          Shortly afterward, I asked Allan about helping Araksan Dide, a Black employee who was homeless and needed housing support. Allan responded differently. Instead of assisting with the request in the same manner, Allan told me to hold off and gave an example involving Black employees, stating in substance that if one Black employee told another Black employee and that person tried to access the hardship fund, it could be a serious problem.
        </p>
        <p className="mt-3">
          That is direct comparator evidence. A White employee's hardship request was handled without supporting documentation and without a warning. A Black employee's potential hardship request triggered hesitation and a race-related warning. Respondent's statement that documentation was required for all hardship requests is contradicted by my direct involvement in Brandi's request.
        </p>
        <p className="mt-3">
          Fifth, Respondent states that Allan Glover's involvement was limited to gathering information and forwarding it through the appropriate chain of review. The records do not support minimizing his involvement that way. On November 13, 2025, I submitted my hardship assistance request and completed the required attestation the same day. That same morning, a meeting titled "SH Hardship" appeared on Allan Glover's calendar involving Susan Marchinko, Allan Glover, and Greg Carfagna. Later that same day, Cameron Hadley from Employee Relations emailed me to schedule a discussion regarding my hardship request.
        </p>
        <p className="mt-3">
          That timeline shows the hardship request was immediately escalated to HR, operations leadership, director-level leadership, and Employee Relations the same day it was submitted. Respondent cannot fairly characterize Allan's involvement as minor or disconnected when the hardship request appeared on his calendar as "SH Hardship" with HR and director-level leadership the same day I submitted it.
        </p>
        <p className="mt-3">
          On November 17, 2025, I spoke with Cameron Hadley from Employee Relations. During that conversation, he stated that my request could not be submitted for approval consideration without additional documentation. I questioned why that documentation was being required of me because I had direct knowledge of other hardship-fund requests being handled without the same requirement. After that conversation, I submitted the requested documentation the same day or shortly thereafter.
        </p>
        <p className="mt-3">
          These facts matter because Respondent now claims any payment issue was only about timeliness and completeness of documentation. The record shows something different: the request was submitted and escalated on November 13, leadership and HR were aware of it that same day, Employee Relations became involved immediately, documentation was demanded on November 17, and the funds were not received until after significant housing harm had already occurred.
        </p>
        <p className="mt-3">
          Sixth, Respondent states that Allan denies making any race-related hardship-fund statement. That denial does not match the contemporaneous record. Immediately after the July 10 meeting, I texted a coworker because I was shocked by Allan's example. I then messaged Allan in Teams and stated that I was caught off guard and confused by the example he used. Allan did not deny using an example. He responded that he was "just providing an example of what could happen." When I asked, "What exactly are you saying?" Allan called me directly and asked, "What exactly are you trying to get to?" I also disclosed the incident to coworkers the same day.
        </p>
        <p className="mt-3">
          Those facts support that the race-related hardship conversation occurred. Respondent should produce the Teams thread, call records, witness statements, hardship records for Brandi Cordi, hardship records for Araksan Dide, and all communications regarding hardship-fund access.
        </p>
        <p className="mt-3">
          Seventh, Respondent states that Allan denies saying Discover attended an HBCU recruiting event without intending to hire anyone, and that Allan had no role in recruiting. That does not resolve the factual dispute. Allan discussed the HBCU recruiting event during the same August 2025 conversation where I raised my lack of opportunities, lack of projects, blocked advancement, schedule restrictions, and family impact. Allan also made the "blockade" statement during that conversation, telling me in substance that there was a blockade and that he did not think I could get past it.
        </p>
        <p className="mt-3">
          Allan's lack of formal recruiting authority does not determine whether the statement was made. The issue is whether he made the statement, why he made it in a conversation about blocked opportunity, and whether the company's HBCU recruiting activity resulted in actual hires. Respondent should produce the HBCU event records, attendees, candidate lists, interview outcomes, rejection reasons, and hiring outcomes.
        </p>
        <p className="mt-3">
          Respondent's response relies on broad denials: "standard procedure," "standard operational tool," "documentation required for all," "limited involvement," "Allan denies," and "no role." The documents show specific contrary facts: no documented May 2025 offer, unequal Verint visibility, HR admission of excess visibility, missing Teams messages while other chats remained visible, unequal hardship-fund documentation treatment, same-day leadership and HR involvement in my hardship request, same-day documentation of Allan's race-related hardship example, and a documented HBCU/blockade conversation.
        </p>
        <p className="mt-3">
          Respondent should be required to produce: (1) the complete Ethical Concerns file for my September 2025 schedule/waitlist complaint; (2) all records supporting the alleged May 2025 shift offer and alleged decline; (3) all waitlist tickets and audit history relied on in that investigation; (4) Verint screenshots, live-monitoring records, access logs, screen-recording logs, permission-change history, product-owner communications, BT escalation records, and vendor communications; (5) records showing which Team Leaders were visible or active in Verint before and after my complaint; (6) Teams retention logs, deletion logs, audit history, and preservation/legal-hold records for the Allan/Amber chat; (7) hardship records for Brandi Cordi, Araksan Dide, and my hardship request; (8) documentation showing what each hardship applicant was required to submit; (9) the November 13, 2025 "SH Hardship" calendar invite, attendee list, notes, and communications; (10) the November 17, 2025 Cameron Hadley conversation recording/transcript and related notes; (11) the July 10, 2025 Teams thread with Allan regarding the hardship-fund discussion; (12) call records and witness statements regarding the July 10 follow-up call; (13) communications involving Allan Glover, Susan Marchinko, Greg Carfagna, Cameron Hadley, Lindsay Beck, and Employee Relations regarding hardship assistance; (14) HBCU recruiting-event records, including attendance, candidate submissions, interview outcomes, rejection reasons, and hiring outcomes; and (15) all communications or notes regarding Allan's August 2025 "blockade" and HBCU-related conversation.
        </p>

        <InlineExhibits
          heading="Ancillary-allegations evidence — Verint, Teams, leave, hardship"
          items={[
            { id: "EX-006", relevance: "Verint monitoring evidence — Harbin's profile visibility versus other Team Leaders." },
            { id: "EX-002", relevance: "October 2025 record-deletion / preservation concerns documented to HR." },
            { id: "EX-007", relevance: "October 2025 FMLA misclassification as STD and resulting system-access deactivation." },
            { id: "EX-003", relevance: "Hardship-fund timeline — Cordi, Dide, and Harbin requests; same-day escalation to HR, ER, and director-level leadership." },
            { id: "EX-004", relevance: "July 10, 2025 race-related hardship-fund comments and same-day documentation." },
            { id: "EX-005", relevance: "August 2025 HBCU recruiting and 'blockade' statement context." },
          ]}
        />



        {/* Section II.A–II.D — Response to Respondent's Discussion (Legal Argument) */}
        <h2 className="mt-10 font-display text-lg tracking-tight">
          III. Response to Respondent's Section II — Discussion (Legal Argument)
        </h2>
        <p className="mt-3">
          Respondent's legal discussion does not resolve the Charge. It attempts to characterize the evidence as ordinary workplace disagreement, but the record shows materially disputed facts involving schedule access, waitlist manipulation, comparator movement, performance-rating impact, advancement barriers, project exclusion, race-related comments, and inconsistent application of workplace processes.
        </p>

        <h4 className="mt-6 font-display text-[15px] tracking-tight">
          A. Respondent Has Not Rebutted Race Discrimination
        </h4>
        <p className="mt-3">Respondent argues that I cannot establish race discrimination because I supposedly did not suffer a materially adverse employment action. That is incorrect.</p>
        <p className="mt-3">I was kept on PM/closing for an extended period despite repeated requests to return to mid-shift or move to an earlier schedule. That schedule affected my family obligations, childcare, ability to be present for my son, internal mobility, and access to development opportunities. I was also removed from the waitlist, later shown an incomplete screenshot that did not match the controlling SharePoint waitlist, re-added with a later request date, and changed from PM/Temporary to PM/Permanent without a clear ticket, notice, or approval documentation.</p>
        <p className="mt-3">Respondent cannot defeat this issue by saying I remained employed, kept my pay, or received strong evaluations. Under Title VII, an employee does not have to show termination, demotion, or loss of pay to show harm. Schedule, assignments, access to opportunity, visibility, and working conditions can be terms or conditions of employment. Here, the record shows harm to my schedule, advancement path, project access, performance rating, and career mobility.</p>
        <p className="mt-3">Respondent also states that I received strong evaluations. That is incomplete. Before my protected activity, I received a 2023 overall rating of Strong. In the first review cycle after my May 2024 EEOC charge and May 29, 2024 formal internal complaint, my overall rating dropped to Solid. That downgrade occurred despite strong underlying metrics, no goal rated below Solid, and a 124.36% bonus payout. My rating later returned to Strong in 2025. The issue is the Strong → Solid → Strong pattern and the timing of the 2024 downgrade.</p>
        <p className="mt-3">The 2024 Solid rating was not harmless. Leadership later communicated that Unit Managers / Team Leaders needed a rating of 4 Strong or 5 Outstanding to be eligible for the TL Plus / Department Manager training cohort. A 3 Solid rating excluded me from that advancement pipeline. Respondent's statement that I maintained my responsibilities and was not precluded from advancement ignores the actual consequence of the 2024 rating.</p>
        <p className="mt-3">Respondent further claims that I failed to identify similarly situated employees outside my protected class who were treated more favorably. That is also incorrect. Comparator evidence includes employees who received schedule movement, department movement, or other opportunities while I remained fixed on PM/closing. Tyler Millisock is a key comparator because he had the same April 3, 2023 start date, was at the same level, is outside my protected class, and moved from LVAR PM/closing to PRE-D/DBC 11:30 a.m.–8:00 p.m. while I remained stuck on PM/closing. Tyler also stated he was not on the waitlist. That directly contradicts Respondent's claim that movement was strictly controlled by a centralized waitlist and that no employee moved outside the established system.</p>
        <p className="mt-3">The waitlist records also show inconsistent treatment. I requested mid-shift in 2024, discovered on April 26, 2024 that I was not on the MID-shift waitlist, and raised that issue in my May 29, 2024 formal complaint and May 31, 2024 HR intake call. Respondent's own January 22, 2025 waitlist snapshot showed me on the list with a June 26, 2024 request date, PM/Temporary status, and Qualifies = Yes. By February 25, 2025, after Jen Roy edited the waitlist multiple times, my row was removed while other employees remained and continued to qualify. Respondent has not explained who authorized my removal, why I was removed, or why no ticket has been produced.</p>
        <p className="mt-3">Respondent's claim that I was offered a day-shift opportunity in May 2025 and declined it is false. I did not receive a May 2025 shift offer. I was not offered AM, mid-shift, or any other shift opportunity in May 2025. Respondent has not produced the alleged offer, the alleged decline, the ticket, the communication, the shift details, or the person who allegedly recorded my response. Respondent also cannot explain how I was supposedly removed for declining a May 2025 offer when the records show I had already been removed from the waitlist in February 2025.</p>
        <p className="mt-3">Respondent's claim that I was "reentered" onto the waitlist on July 10, 2025 based on a new request is also misleading. July 2025 was not the beginning of my schedule issue. I had already requested mid-shift in 2024. In June 2025, after being stuck on PM/closing, I asked to also be considered for AM in addition to the mid-shift request I believed was already pending. In July, I asked Allan Glover where I was on the waitlist. Allan contacted Jen Roy, and within approximately one minute Jen provided a limited five-row screenshot. That screenshot omitted the material fields needed to verify placement, including Date Requested, Months as CAR TL, Temporary/Permanent status, and Qualifies = Yes/No. The controlling SharePoint waitlist did not contain my name at that time. I was later re-added with a July 17, 2025 request date, which reset the earlier June 26, 2024 date reflected in the January 2025 snapshot.</p>
        <p className="mt-3">Respondent says managers did not control the process. The record contradicts that. During the September 19, 2025 recorded conversation, Allan discussed Training Bay movement and stated there "wasn't a criteria" for that movement. When asked who was involved in the decision, he identified "myself, Amber, Trevor, Dan." That is not a strictly neutral, automatic, centralized process. It shows management involvement and discretionary decision-making.</p>
        <p className="mt-3">Respondent also says that any differences in schedules were due to separate roles, preexisting assignments, training obligations, or accommodations. That explanation is unsupported without the underlying records. If that is Respondent's position, it should produce the comparator movement records, tickets, accommodations, training assignments, onboarding records, and schedules for the employees it claims are distinguishable. Respondent should not be permitted to rely on generalized explanations while withholding the documents that would show whether those explanations are true.</p>
        <p className="mt-3">Respondent's performance and advancement argument is also incomplete. I applied for nearly 50 internal roles from approximately February 2023 through April 2025. Respondent has not produced the postings, selected candidates, interview notes, scoring criteria, recruiter notes, decisionmaker names, or comparative qualifications. Respondent's statement that other candidates were "more qualified" is conclusory. It cannot rebut discrimination without the records showing who was selected, why they were selected, who made the decision, and whether the decisionmakers knew of my protected activity or my complaints.</p>
        <p className="mt-3">Respondent also ignores project exclusion. Advancement at Discover was not limited to formal job postings. Advancement also came through project visibility, operational tools, process-improvement work, leadership exposure, and internal sponsorship. After my protected activity, I was excluded from project-related opportunities and credit. I raised concerns that my Compliance Check concept and related materials were used or recreated by Cyndy Smith's group while I was excluded from related meetings and credit. I also created call-flow/process tools and attempted to present them to leadership, including Greg Carfagna, but did not receive meaningful support or visibility. Those facts are relevant to advancement and opportunity.</p>
        <p className="mt-3">Respondent's argument that Mr. Glover is in the "same protected racial class" does not defeat the claim. First, the decisions at issue were not made by Allan alone. The record involves Rosanna Blackson, Greg Carfagna, Jen Roy, Edina Markus, Amber, Trevor, Dan, HR, Employee Relations, scheduling administrators, and other leaders. Second, the law does not presume that a person cannot discriminate against someone who shares a protected trait or some portion of a protected identity. That argument does not erase the comparator evidence, timing, inconsistent records, race-related comments, or unequal application of process.</p>
        <p className="mt-3">Respondent also attempts to dismiss the hardship-fund and HBCU comments as isolated and disconnected. They are not disconnected. The hardship-fund evidence shows different treatment in the same general process. Shortly before the July 10, 2025 incident, I personally assisted Brandi Cordi, a White employee on my team, with a hardship-fund request. Brandi was not required to submit supporting documentation. She only had to identify what she needed assistance for and provide a list or explanation of the requested need. Allan was aware of and assisted with that request. No concern was raised.</p>
        <p className="mt-3">Shortly afterward, I asked Allan about helping Araksan Dide, a Black employee who was homeless and needed housing support. Allan responded differently. Instead of assisting in the same manner, he told me to hold off and gave an example involving Black employees, stating in substance that if one Black employee told another Black employee and that person tried to access the hardship fund, it could be a serious problem. I documented the issue immediately, followed up with Allan in Teams, and Allan responded that he was "just providing an example of what could happen." That is not vague or disconnected. It is direct evidence of race entering a workplace benefit/access discussion. A contemporaneous same-day text thread to a coworker (<Ex id="EX-064" />) memorialized, in real time, my perception that Allan "was insinuating that I was only helping Black people" and his statement that "that's a problem."</p>
        <p className="mt-3">The HBCU comment is also relevant. Allan discussed HBCU recruiting during a broader conversation about blocked opportunity, lack of advancement, lack of projects, schedule restrictions, and my inability to get past barriers in the organization. He also made the "blockade" statement during that conversation. Respondent's statement that Allan had no formal recruiting role does not answer whether the statement was made, why it was made, or whether HBCU recruiting resulted in actual hiring.</p>
        <p className="mt-3">Respondent's legal argument depends on accepting its version of disputed facts. That is not appropriate at this stage. The record contains multiple facts supporting an inference of discrimination: similarly situated employees receiving movement while I remained stuck; inconsistent waitlist records; a missing ticket; a false May 2025 offer/decline explanation; a 2024 downgrade after protected activity; exclusion from the TL Plus / Department Manager pipeline; nearly 50 unsuccessful internal applications despite strong performance; project exclusion and lack of credit; different hardship-fund treatment for a White employee and a Black employee; same-day documentation of Allan's race-related hardship example; and HBCU/blockade comments tied to opportunity and advancement.</p>
        <p className="mt-3">For these reasons, Respondent has not shown that the Charge fails as a matter of law. At minimum, the evidence creates material factual disputes requiring further investigation and production of the underlying records.</p>

        <InlineExhibits
          heading="Race-discrimination evidence (PS § II.A)"
          items={[
            { id: "EX-059", relevance: "September 19, 2025 transcript — Allan names Tyler Millisock, Josh, and Hunter context; admits no formal criteria for Training Bay; identifies management decisionmakers (Allan, Amber, Trevor, Dan); supports comparator/differential-movement analysis." },
            { id: "EX-010", relevance: "Comparator Movement & Flexibility Map — Tyler Millisock (same start date, same level, outside protected class, moved from LVAR PM/closing to PRE-D/DBC) and additional comparators receiving movement Charging Party was denied." },

            { id: "EX-051", relevance: "2024 compensation statement — Solid downgrade after protected activity with 124.36% bonus payout, 96.49% IPF, 128.90% CPF." },
            { id: "EX-053", relevance: "2024 year-end review showing every sub-goal and Discover Behavior rated Solid or Strong despite overall Solid downgrade." },
            { id: "EX-004", relevance: "July 10, 2025 race-related hardship-fund comments — Cordi (White) hardship handled without documentation; Dide (Black) request triggered race-coded 'example.'" },
            { id: "EX-005", relevance: "August 2025 HBCU-recruiting and 'blockade' comments during conversation about blocked opportunity." },
            { id: "EX-014", relevance: "May 29, 2024 formal complaint reporting racial slur attributed to Rosanna Blackson and the underlying race-discrimination concerns." },
          ]}
        />

        <h4 className="mt-6 font-display text-[15px] tracking-tight">
          B. Respondent Has Not Rebutted Retaliation
        </h4>

        <p className="mt-3">Respondent does not dispute that I engaged in protected activity. I filed an EEOC charge in May 2024 and made multiple internal complaints regarding race discrimination, retaliation, schedule equity, project exclusion, and related workplace concerns. Respondent's position is that no materially adverse action occurred and that there is no causation. The record does not support that argument.</p>
        <p className="mt-3">Respondent's argument depends on an artificially narrow view of retaliation. A retaliation claim does not require termination, demotion, or loss of pay. Under <em>Burlington Northern &amp; Santa Fe Railway Co. v. White</em>, a materially adverse action in the retaliation context is one that could dissuade a reasonable worker from making or supporting a charge of discrimination. The facts here meet that standard.</p>
        <p className="mt-3">After protected activity, I was kept on PM/closing despite repeated requests to return to mid-shift or move to an earlier schedule. I was not properly placed on the MID-shift waitlist. I was later removed from the waitlist. Respondent then relied on an alleged May 2025 shift offer and decline that I dispute and that Respondent has not documented. My request date was later reset, my status changed from PM/Temporary to PM/Permanent, and no clear ticket or approval record has been produced. These are not minor disagreements with routine scheduling. These are disputed schedule, waitlist, and record-integrity events affecting my working conditions, family obligations, childcare, advancement access, and ability to remain in the role.</p>
        <p className="mt-3">Respondent states that I remained employed, continued performing, and kept my compensation and responsibilities. That does not defeat retaliation. An employee can be retaliated against while still employed. An employee can be retaliated against through schedule restrictions, blocked internal movement, rating consequences, project exclusion, increased scrutiny, record manipulation, monitoring, or denial of support. Respondent's "she remained employed" argument does not answer the actual adverse actions in the record.</p>
        <p className="mt-3">Respondent also claims the timeline is "dispositive." It is not. The timeline supports retaliation. My May 29, 2024 formal complaint was sent to multiple leaders and Employee Relations representatives, including Greg Carfagna and Susan Marcinko. That complaint specifically raised race discrimination, retaliation, schedule issues, transfer denials, and the failure to place me on the mid-shift waitlist. Shortly afterward, HR moved me out of Rosanna Blackson's reporting line during the investigation, confirming that the complaint was known and serious.</p>
        <p className="mt-3">After that protected activity, adverse events continued. In July 2024, after ER approved my rec-for-term paperwork, Greg Carfagna blocked the process at the director step by requiring additional coaching documentation that peer Team Leaders reported they had not been required to provide. Anita later confirmed I had completed the process correctly and that the issue was that approvers did not know how to access the linked documentation. That delay forced me to keep low-performing employees longer and affected my scorecard.</p>
        <p className="mt-3">In the 2024 review cycle after my protected activity, my overall rating dropped from Strong to Solid despite strong underlying metrics, no individual goal rated below Solid, and a 124.36% bonus payout. That downgrade mattered because leadership later communicated that Unit Managers / Team Leaders needed a 4 Strong or 5 Outstanding rating to be eligible for the TL Plus / Department Manager development cohort. A 3 Solid rating excluded me from that advancement pipeline. Respondent's statement that I experienced no change to opportunities is therefore inaccurate.</p>
        <p className="mt-3">Respondent also states that the scheduling process was neutral and consistent. The records contradict that. My original request was for mid-shift. I discovered on April 26, 2024 that I had not been added to the MID-shift waitlist. I raised that issue in my May 29, 2024 complaint and May 31, 2024 HR intake. A January 22, 2025 waitlist snapshot later showed me on the list with a June 26, 2024 request date, PM/Temporary status, and Qualifies = Yes. By February 25, 2025, after multiple Jen Roy edits, my row was removed while other employees remained listed and continued to qualify. Respondent has not explained who authorized that removal or produced the ticket.</p>
        <p className="mt-3">Respondent's May 2025 offer/decline explanation is also disputed. I did not receive or decline a May 2025 shift offer. I was not offered AM, mid-shift, or any other shift opportunity in May 2025. Respondent has not produced the alleged offer, alleged decline, ticket, shift details, communication, or person who allegedly recorded my response. Respondent's explanation is also illogical because the records show I had already been removed from the waitlist in February 2025, months before the alleged May 2025 offer.</p>
        <p className="mt-3">Respondent further claims I reentered the waitlist on July 10, 2025 through a new request. That is misleading. July 2025 was not the beginning of my schedule issue. I had already requested mid-shift in 2024, complained about not being added, and had a January 2025 waitlist record showing a June 26, 2024 request date. In June 2025, I asked to also be considered for AM in addition to the mid-shift request I believed was already pending. In July, when I asked Allan Glover for my specific waitlist position, Jen Roy sent a limited five-row screenshot within approximately one minute. That screenshot omitted the material fields needed to verify my placement: Date Requested, Months as CAR TL, Temporary/Permanent status, and Qualifies = Yes/No. The controlling SharePoint waitlist did not contain my name at that time. I was later re-added with a July 17, 2025 request date.</p>
        <p className="mt-3">These inconsistencies support pretext. Respondent's stated reason depends on a missing May 2025 offer, a missing decline, missing tickets, an unexplained February 2025 removal, an incomplete July 2025 screenshot, and a reset request date. Under <em>Reeves v. Sanderson Plumbing Products</em>, evidence that an employer's stated explanation is false or inconsistent may support an inference of unlawful motive. Here, Respondent's explanations are not supported by the underlying records.</p>
        <p className="mt-3">Respondent also argues that Allan Glover did not know the substance of the prior EEOC charge and did not make decisions based on it. This does not defeat causation. First, the decisionmakers were not limited to Allan. The record involves Rosanna Blackson, Greg Carfagna, Jen Roy, Edina Markus, Amber, Trevor, Dan, HR, Employee Relations, scheduling administrators, and other leaders. Second, my protected activity was not limited to the prior EEOC charge. I made repeated internal complaints that were known to leadership, HR, and Employee Relations. Third, Allan became involved after HR moved me into his organization because of the complaint. He was also directly involved in later schedule, waitlist, hardship, and leave-related communications.</p>
        <p className="mt-3">Respondent's lack-of-knowledge argument also ignores the documents. My May 29, 2024 complaint was sent to leadership and HR. My May 31 HR intake addressed the same issues. My July 19, 2024 Anita complaint addressed Greg blocking performance paperwork after protected activity. My September 2025 Ethical Concerns complaint addressed the waitlist and schedule issue again. My October 2025 communications addressed FMLA, Verint monitoring, and record-preservation concerns. Respondent cannot isolate one EEOC charge and ignore the repeated protected activity that followed.</p>
        <p className="mt-3">Respondent states that I continued to be encouraged to apply for internal opportunities. That does not rebut retaliation. Encouraging me to apply while blocking or failing to select me is not proof of non-retaliation. I applied for nearly 50 internal roles from approximately February 2023 through April 2025. Respondent has not produced the selected candidates, recruiter notes, interview scoring, decisionmaker names, comparative qualifications, or communications. Respondent's statement that I remained free to apply does not explain why I was not selected, why projects were withheld, why my rating dropped, or why development opportunities were unavailable.</p>
        <p className="mt-3">The record also includes additional retaliatory events after continued protected activity. In October 2025, I raised concerns about Verint monitoring and unusual screen visibility. My evidence shows my PC/profile appearing on live monitor while other Team Leaders in my department were logged in and active but did not show live monitoring active. HR later stated there was a technical problem and that I had "more visibility than" I should have had. HR also stated they did not know what changed, who did it, or why and were trying to backtrack permissions. That is evidence of unequal visibility and unresolved access changes, not a routine process conclusively applied to everyone.</p>
        <p className="mt-3">The Verint issue also overlaps with the Teams deletion evidence. After I sent HR investigator Edward Reyes a formal timeline on October 7, 2025; after I notified Allan and Amber of FMLA in Teams on October 14; and after I complained about Verint monitoring on October 21, the Allan/Amber Teams chat was blank on October 23. Other same-period Teams chats remained visible, including chats dated October 10, October 13, October 15, October 16, October 17, and October 21. The same Allan/Amber chat was also cleared from my phone by October 24. Those facts support a preservation issue and support an inference that records tied to protected activity were treated differently.</p>
        <p className="mt-3">The hardship-fund events also occurred after extensive protected activity. On November 13, 2025, I submitted a hardship request and completed the required attestation the same day. That same morning, an "SH Hardship" meeting appeared on Allan Glover's calendar involving Susan Marchinko, Allan Glover, and Greg Carfagna. Later that day, Cameron Hadley from Employee Relations contacted me to discuss the request. On November 17, Cameron stated that my request could not proceed without additional documentation. I had direct knowledge that Brandi Cordi, a White employee I had helped with a hardship request shortly before the July 10 hardship/race incident, was not required to submit the same type of supporting documentation. Respondent's statement that all hardship requests required documentation is therefore disputed.</p>
        <p className="mt-3">Respondent says routine business processes were applied consistently before, during, and after protected activity. The record shows the opposite. The same types of processes repeatedly broke against me after protected activity: waitlist placement, waitlist removal, request dates, performance rating, project credit, internal applications, schedule movement, Verint visibility, Teams preservation, leave processing, and hardship assistance. The pattern, timing, missing records, inconsistent explanations, and comparator evidence support causation and pretext.</p>
        <p className="mt-3">Respondent also argues that there is no "but for" causation. But-for causation does not require protected activity to be the only cause. The question is whether the challenged actions would have occurred in the same way absent the protected activity. Here, the record supports that they would not have. Before and during protected activity, I was raising race discrimination, retaliation, schedule equity, and HR concerns. After that activity, my schedule remained blocked, my waitlist records changed, my performance rating dropped, development access was affected, project access diminished, monitoring concerns arose, protected Teams messages disappeared, and hardship assistance was handled differently.</p>
        <p className="mt-3">For these reasons, Respondent has not rebutted retaliation. Its argument depends on disputed facts and unsupported conclusions. At minimum, the evidence creates material factual disputes requiring further investigation and production of the underlying records.</p>
        <p className="mt-3">Respondent should be required to produce: (1) all records relating to my May 2024 EEOC charge and May 29, 2024 internal complaint; (2) all communications showing who knew about my protected activity and when; (3) all schedule-change tickets submitted on my behalf; (4) all records supporting the alleged May 2025 offer and alleged decline; (5) the complete waitlist SharePoint file and version history; (6) all documents explaining the February 2025 waitlist removal and July 2025 re-addition; (7) performance calibration records and TL Plus / Department Manager eligibility records; (8) all records regarding Greg Carfagna's July 2024 block of the rec-for-term process; (9) all internal application records, selected-candidate records, interview notes, scoring rubrics, recruiter notes, and decisionmaker communications; (10) project-assignment and project-credit records; (11) Verint access logs, screen-recording logs, permission-change history, product-owner communications, vendor communications, and BT escalation records; (12) Teams retention logs, deletion logs, audit history, and preservation/legal-hold records for the Allan/Amber chat; (13) leave-processing records relating to the October 2025 FMLA/STD misclassification and access deactivation; and (14) hardship-fund records, including the November 13 "SH Hardship" meeting, the Cameron Hadley communications, and hardship records for Brandi Cordi, Araksan Dide, and my request.</p>

        <InlineExhibits
          heading="Retaliation evidence (PS § II.B)"
          items={[
            { id: "EX-059", relevance: "September 19, 2025 transcript — after protected activity, Allan could not provide date, position, group, ticket, or written record for the alleged shift offer; admits no formal criteria for Training Bay; confronts Allan with prior 'blockade' statement, which he does not substantively explain." },
            { id: "EX-014", relevance: "May 29, 2024 protected internal complaint distributed to leadership and Employee Relations." },

            { id: "EX-016", relevance: "June 5, 2024 HR move away from Rosanna Blackson during the active investigation." },
            { id: "EX-017", relevance: "July 19, 2024 complaint to Anita re: Greg Carfagna blocking rec-for-term paperwork after protected activity." },
            { id: "EX-051", relevance: "2024 Solid downgrade after protected activity — excluded Charging Party from TL Plus / Department Manager pipeline." },
            { id: "EX-045", relevance: "February 25, 2025 Jen Roy waitlist edit removing Harbin while juniors remained and continued to qualify." },
            { id: "EX-041", relevance: "July 14, 2025 limited five-row screenshot omitting Date Requested, Months as CAR TL, Temporary/Permanent, and Qualifies." },
            { id: "EX-006", relevance: "Verint monitoring evidence and HR admission that Harbin had 'more visibility than' she should have had." },
            { id: "EX-002", relevance: "October 2025 Teams deletion / preservation concerns documented to HR." },
            { id: "EX-007", relevance: "October 2025 FMLA misclassification, wrong paperwork, and resulting system-access deactivation." },
            { id: "EX-003", relevance: "November 13, 2025 hardship request escalated same day to HR, Employee Relations, Allan Glover, Susan Marcinko, and Greg Carfagna." },
          ]}
        />


        <h4 className="mt-6 font-display text-[15px] tracking-tight">
          C. Respondent Has Not Rebutted the Hostile Work Environment Claim
        </h4>
        <p className="mt-3">Respondent argues that the hostile work environment claim fails because the conduct was not severe or pervasive and was not based on race. That argument misstates the record.</p>
        <p className="mt-3">This is not a claim based only on scheduling disputes, performance disagreements, promotion frustration, or ordinary management conflict. The record includes race-based conduct, repeated protected complaints, schedule and waitlist obstruction, project exclusion, performance consequences, unusual monitoring, deleted Teams messages, leave-processing issues, hardship-fund unequal treatment, and race-related comments. These facts must be viewed together, not separated into isolated events.</p>
        <p className="mt-3">Under <em>Harris v. Forklift Systems</em>, the hostile work environment analysis considers the totality of the circumstances, including frequency, severity, humiliation, and interference with work performance. Under <em>National Railroad Passenger Corp. v. Morgan</em>, a hostile environment claim is based on the cumulative effect of individual acts. Respondent cannot defeat the claim by isolating each event and labeling it ordinary.</p>
        <p className="mt-3">The record includes a serious race-based allegation involving Rosanna Blackson. In my May 29, 2024 formal complaint, I reported that Rosanna used the racial slur "nigger" during a one-on-one conversation, which my mother witnessed. That is not a vague scheduling dispute or ordinary workplace disagreement. A racial slur by a manager or supervisor is severe evidence of race-based hostility. Respondent's Position Statement does not meaningfully address that allegation.</p>
        <p className="mt-3">The record also shows that HR treated the May 29 complaint as serious. On June 5, 2024, HR confirmed that I would be moved away from Rosanna's reporting line during the investigation so I would not have one-on-one interactions with her. That response supports that the company understood the seriousness of the issues I reported.</p>
        <p className="mt-3">The environment did not end with the Rosanna complaint. After I raised race discrimination and retaliation concerns, I continued experiencing schedule obstruction, waitlist inconsistencies, project exclusion, and adverse treatment tied to the same protected issues. My original mid-shift request was not properly processed. I later discovered I was not on the MID-shift list. I raised that in protected complaints. I was then removed from the waitlist in February 2025, shown an incomplete screenshot in July 2025, re-added with a later request date, and changed from PM/Temporary to PM/Permanent without clear documentation. Those facts are part of the overall environment because the schedule issue was repeatedly tied to my protected complaints and race-related treatment concerns.</p>
        <p className="mt-3">Respondent also minimizes Allan Glover's race-related hardship-fund comment. That comment was not vague. I had recently assisted Brandi Cordi, a White employee on my team, with a hardship-fund request. Brandi was not required to submit supporting documentation, and no concern was raised. Shortly afterward, I asked Allan about assisting Araksan Dide, a Black employee who was homeless and needed housing support. Allan responded differently and gave an example involving Black employees, stating in substance that if one Black employee told another Black employee and that person tried to access the hardship fund, it could be a serious problem.</p>
        <p className="mt-3">I documented that immediately. I texted a coworker because I was shocked. I then messaged Allan in Teams and stated that I was caught off guard and confused by the example he used. Allan did not deny using an example. He responded that he was "just providing an example of what could happen." When I asked, "What exactly are you saying?" Allan called me directly and asked, "What exactly are you trying to get to?" I also disclosed the incident to coworkers the same day. That is not an isolated, unsupported remark. It is a documented race-related workplace interaction connected to access to an employee benefit.</p>
        <p className="mt-3">Respondent also dismisses the HBCU comment as isolated and disconnected. It was not disconnected. Allan discussed HBCU recruiting during a broader August 2025 conversation about lack of advancement, lack of projects, blocked opportunity, schedule restrictions, and my inability to move forward in the organization. During that same conversation, Allan made the "blockade" statement, telling me in substance that there was a blockade and that he did not believe I could get past it. Respondent's statement that Allan had no formal recruiting role does not answer whether he made the statement or why he made it during a conversation about blocked opportunity.</p>
        <p className="mt-3">Respondent also argues that system recording, chat deletion, and leave processing are not tied to race. That is too narrow. These events occurred after repeated protected complaints about race discrimination, retaliation, schedule equity, and HR handling. They are part of the same course of conduct and may be considered as part of the total environment and retaliatory context. The issue is not whether each event used racial language. The issue is whether the total environment became hostile after I raised race discrimination and retaliation concerns.</p>
        <p className="mt-3">The Verint evidence is specific. My profile appeared on live monitor while other Team Leaders in my same department were logged in and active but did not show live monitoring active. HR later acknowledged there was a technical problem and that I had "more visibility than" I should have had. HR also stated they did not know what changed, who did it, or why. That is not simply a standard operational tool being applied uniformly.</p>
        <p className="mt-3">The Teams deletion evidence is also specific. After I sent HR a formal written timeline, notified Allan and Amber of FMLA in Teams, and complained about Verint monitoring, the Allan/Amber Teams chat disappeared. Other Teams chats from the same period remained visible, including chats dated October 10, October 13, October 15, October 16, October 17, and October 21. The same Allan/Amber chat was also cleared from my phone. That is a record-preservation issue tied to the same protected-activity and leave period.</p>
        <p className="mt-3">The leave-processing evidence is also part of the total environment. After I requested intermittent FMLA, the leave was mishandled or misclassified, my system access was deactivated, and related Teams messages disappeared. These facts occurred after I had repeatedly raised race discrimination, retaliation, and HR concerns.</p>
        <p className="mt-3">Respondent's argument that the conduct was not severe or pervasive ignores both severity and duration. The conduct began with race discrimination concerns involving Rosanna, included a reported racial slur, continued through HR intervention, continued through waitlist and schedule obstruction, continued through project exclusion and performance consequences, included later race-related hardship-fund and HBCU/blockade comments, and continued into monitoring, record-preservation, leave-processing, and hardship-fund issues. This was not one isolated comment. It was a continuing pattern.</p>
        <p className="mt-3">The conduct also interfered with my work and working conditions. I remained fixed on PM/closing despite repeated requests and family/childcare impact. I was excluded from advancement-related opportunities and project credit. My 2024 rating dropped after protected activity and affected eligibility for the TL Plus / Department Manager development pipeline. I had to repeatedly escalate basic schedule, HR, monitoring, leave, and hardship issues. The environment affected my ability to perform, advance, and remain stable in the workplace.</p>
        <p className="mt-3">Respondent's legal conclusion depends on accepting its own disputed facts and ignoring the cumulative record. The hostile work environment claim should not be dismissed as ordinary workplace disagreement. The record contains race-based conduct, race-related comments, protected complaints, repeated escalation, management involvement, inconsistent records, and workplace actions that affected my conditions of employment.</p>
        <p className="mt-3">For these reasons, Respondent has not shown that the hostile work environment claim fails as a matter of law. At minimum, the evidence creates factual disputes requiring further investigation.</p>
        <p className="mt-3">Respondent should be required to produce: (1) all records regarding the May 29, 2024 complaint involving Rosanna Blackson; (2) all HR investigation notes regarding the racial slur allegation; (3) all communications regarding the decision to move me away from Rosanna during the investigation; (4) all waitlist, schedule, and ticket records; (5) all communications regarding my project exclusion and Compliance Check concerns; (6) all records regarding Allan Glover's July 10, 2025 hardship-fund example; (7) hardship-fund records for Brandi Cordi, Araksan Dide, and my request; (8) all records regarding Allan's HBCU and "blockade" statements; (9) Verint access logs and permission-change records; (10) Teams deletion, retention, and preservation records; and (11) leave-processing records related to my October 2025 FMLA request, access deactivation, and related communications.</p>

        <InlineExhibits
          heading="Hostile work environment evidence (PS § II.C)"
          items={[
            { id: "EX-014", relevance: "May 29, 2024 formal complaint reporting racial slur attributed to Rosanna Blackson." },
            { id: "EX-015", relevance: "May 31, 2024 HR intake call placing the substance of the racial-slur and retaliation complaint on the record." },
            { id: "EX-016", relevance: "June 5, 2024 HR follow-up moving Charging Party away from Rosanna's reporting line — confirming HR treated the complaint as serious." },
            { id: "EX-004", relevance: "July 10, 2025 race-related hardship-fund 'example' from Allan Glover after Cordi (White) hardship was handled without concern." },
            { id: "EX-005", relevance: "August 2025 HBCU recruiting and 'blockade' comments during conversation about blocked opportunity." },
            { id: "EX-006", relevance: "October 2025 Verint monitoring / unequal visibility cumulative-environment evidence." },
          ]}
        />


        <h4 className="mt-6 font-display text-[15px] tracking-tight">
          D. Respondent's "Ancillary Allegations" Argument Is Incorrect
        </h4>
        <p className="mt-3">Respondent's argument that my Teams deletion, system recording, leave processing, and hardship-fund allegations are "ancillary," speculative, unsupported, and unrelated is incorrect. These events are documented, specific, and connected to the same protected-activity timeline.</p>
        <p className="mt-3">First, the Teams deletion issue is not based on assumption. The record shows that on October 7, 2025, I sent HR investigator Edward Reyes a written timeline regarding my waitlist history, retaliation concerns, and Allan Glover's comments. On October 14, 2025, I notified Allan Glover and Amber in Teams that I had filed FMLA. That same Teams chat also documented concerns about leadership support after Allan removed himself from my team chat. On October 21, 2025, I emailed HR regarding Verint/screen-recording concerns.</p>
        <p className="mt-3">On October 23, 2025, the Allan/Amber Teams chat was blank on my work computer. The only visible message stated that older messages had been deleted due to the organization's retention policy. See <Ex id="EX-091" />. However, other Teams chats from the same general period remained visible in the very same Teams client and on the very same account, including chats dated October 10, October 13, October 15, October 16, October 17, and October 21. The October 13 Alese Amarel chat — captured in the same screenshot session — retained an intact message history from 10/13/2025 12:43–12:51 PM, including discussion of Allan leaving the chat and FMLA/LOA-related issues. See <Ex id="EX-092" />. The contrast between EX-091 and EX-092 is dispositive: a uniform organization-wide retention policy would not have wiped only the Allan/Amber chat while leaving other same-period chats untouched. By October 24, 2025, the same Allan/Amber chat was also cleared from my phone. The chat-removal event itself is independently documented on a separate, non-work-controlled device — my personal iMessage thread with Allan and Amber dated October 14, 2025, in which I asked whether the removal reflected a team-structure change and Amber Laye confirmed Allan had removed himself ("chat cleanup … or … in error"). See <Ex id="EX-093" />.</p>
        <p className="mt-3">Those facts are specific. The relevant Allan/Amber chat disappeared after protected activity, after FMLA notice, after a written HR timeline, and after my Verint complaint, while other same-period chats remained visible. Respondent cannot dismiss that as a generic retention-policy issue without producing the retention logs, deletion logs, audit history, and preservation records.</p>
        <p className="mt-3">Second, the Verint/system-recording issue is not speculative. Respondent states that recording is a standard operational tool. That does not answer the evidence. My records show my PC/profile appearing on live monitor while other Team Leaders in the same department were logged in and active but did not show live monitoring active. That is the factual issue: my profile appeared differently than similarly situated Team Leaders.</p>
        <p className="mt-3">HR later confirmed this was not simply a misunderstanding. HR stated there was a technical problem and that I had "more visibility than" I should have had. HR also stated the issue had been turned over to product owners, the vendor, and the BT team; that they did not know what happened; that they did not know who did it; and that they were trying to backtrack permissions. Those statements contradict Respondent's claim that there is no indication I was treated differently.</p>
        <p className="mt-3">Third, the leave-processing issue is connected to protected activity and is not outside the case simply because a centralized leave administrator was involved. I requested intermittent FMLA on or about October 13, 2025. I notified Allan and Amber in Teams on October 14. My doctor completed paperwork documenting that my condition was related to workplace environmental or interpersonal issues and that I had reported discrimination at work. Instead of the leave being handled cleanly as intermittent FMLA, the leave process was mishandled or misclassified, the wrong paperwork was sent, and my system access was deactivated. Allan later confirmed that the communication he received stated "short term" and warned that systems could be disabled again.</p>
        <p className="mt-3">Respondent cannot avoid the issue by saying leave administration was centralized. The relevant facts are that the leave issue occurred immediately after protected activity and FMLA notice, involved communications to management, resulted in system-access consequences, and overlapped with the disappearance of the Allan/Amber Teams chat.</p>
        <p className="mt-3">Fourth, the hardship-fund issue is not speculative and is not merely about payment timing. Respondent states that hardship-fund requests require documentation and involve multiple levels of review. That does not match how the process was applied in my direct experience. Shortly before the July 10, 2025 race-related hardship-fund incident, I personally assisted Brandi Cordi, a White employee on my team, with a hardship-fund request. Brandi was not required to submit supporting documentation. She only had to identify what she needed assistance for and provide a list or explanation of the requested need. Allan Glover was aware of and assisted with that request. No concern was raised.</p>
        <p className="mt-3">Shortly afterward, I asked Allan about helping Araksan Dide, a Black employee who was homeless and needed housing support. Allan responded differently. He told me to hold off and gave an example involving Black employees, stating in substance that if one Black employee told another Black employee and that person tried to access the hardship fund, it could be a serious problem. I documented that immediately through a text to a coworker, a Teams follow-up to Allan, Allan's response that he was "just providing an example of what could happen," and same-day disclosure to coworkers.</p>
        <p className="mt-3">Those facts directly tie the hardship-fund issue to race and unequal treatment. A White employee's hardship request was handled without supporting documentation and without warning. A Black employee's potential hardship request triggered hesitation and a race-related warning. Respondent's generalized statement that hardship requests required documentation does not answer that comparator evidence.</p>
        <p className="mt-3">Fifth, my own hardship request was immediately known to HR, Employee Relations, and leadership. On November 13, 2025, I submitted my hardship assistance request and completed the required attestation the same day. That same morning, an "SH Hardship" meeting appeared on Allan Glover's calendar involving Susan Marchinko, Allan Glover, and Greg Carfagna. Later that day, Cameron Hadley from Employee Relations contacted me to discuss the request. On November 17, Cameron stated that my request could not proceed without additional documentation. I provided the requested documentation the same day or shortly thereafter. The funds were not received until after significant housing harm had already occurred.</p>
        <p className="mt-3">Those facts contradict Respondent's effort to minimize the hardship issue as ordinary payment timing. The hardship request was known, escalated, and discussed by HR, Employee Relations, operations leadership, and director-level leadership the same day it was submitted. Respondent should produce the meeting invite, attendee list, notes, communications, approval chain, documentation requests, completion date, approval date, and payment date.</p>
        <p className="mt-3">Respondent also argues that none of these events would constitute an adverse employment action. That is too narrow, especially for retaliation. Under <em>Burlington Northern</em>, a retaliation claim can include actions that might dissuade a reasonable worker from making or supporting a charge of discrimination. Targeted or unequal monitoring, deletion or disappearance of relevant protected-activity communications, leave-processing errors causing access deactivation, and delayed hardship assistance during a housing crisis are not trivial. They are materially relevant to retaliation, pretext, hostile environment, and credibility.</p>
        <p className="mt-3">These allegations are not disconnected from protected activity. They occurred after my May 2024 EEOC charge, after my May 29, 2024 formal internal complaint, after repeated schedule/waitlist complaints, after my September 2025 Ethical Concerns complaint, after my October 2025 FMLA notice, and after my written HR timeline. The timing and documentation matter.</p>
        <p className="mt-3">Respondent's "ancillary allegations" section should therefore be rejected. The records show specific facts: the Allan/Amber Teams chat disappeared while other same-period chats remained visible; my Verint profile showed visibility other Team Leaders did not show; HR admitted I had more visibility than I should have had; my leave was mishandled or misclassified after FMLA notice; my system access was deactivated; a White employee's hardship request was handled without supporting documentation; a Black employee's potential hardship request triggered a race-related warning; and my own hardship request was escalated to HR, Employee Relations, operations leadership, and director-level leadership the day it was submitted.</p>
        <p className="mt-3">Respondent should be required to produce: (1) Teams retention logs, deletion logs, audit history, and preservation/legal-hold records for the Allan/Amber chat; (2) Verint access logs, live-monitoring records, screen-recording logs, permission-change history, product-owner communications, BT escalation records, and vendor communications; (3) records showing which Team Leaders were visible or active in Verint before and after my complaint; (4) leave-processing records relating to my October 2025 intermittent FMLA request, STD misclassification, wrong paperwork, and system-access deactivation; (5) hardship records for Brandi Cordi, Araksan Dide, and my hardship request; (6) documentation showing what each hardship applicant was required to submit; (7) the November 13, 2025 "SH Hardship" calendar invite, attendee list, notes, and communications; (8) the November 17, 2025 Cameron Hadley conversation recording/transcript and related notes; and (9) all communications involving Allan Glover, Susan Marchinko, Greg Carfagna, Cameron Hadley, Lindsay Beck, and Employee Relations regarding hardship assistance.</p>

        <InlineExhibits
          heading="Ancillary-allegations evidence (PS § II.D)"
          items={[
            { id: "EX-091", relevance: "Oct 23, 2025 Teams screenshot — Allan/Amber chat showing only the retention-deletion notice; left-rail shows other chats from same period still listed with intact previews." },
            { id: "EX-092", relevance: "Oct 23, 2025 Teams screenshot (same session, same client, same account) — Alese Amarel chat retains intact 10/13/2025 message history, disproving any uniform retention-deletion explanation." },
            { id: "EX-093", relevance: "Oct 14, 2025 iMessage to Allan and Amber — Harbin questioning chat removal; Amber Laye confirms Allan removed himself; same-day FMLA notice on a separate, non-work-controlled device." },
            { id: "EX-006", relevance: "Verint visibility evidence — Harbin's profile live-monitored while same-department Team Leaders were not." },
            { id: "EX-002", relevance: "October 2025 record-deletion / preservation concerns — Allan/Amber chat missing while same-period chats remained visible." },
            { id: "EX-081", relevance: "Email to Edward Reyes (HR) re: Allan Glover removing himself from team chat during active investigation." },
            { id: "EX-007", relevance: "FMLA preliminary designation / leave correction / access deactivation evidence." },
            { id: "EX-ALLAN-OCT24", relevance: "October 24, 2025 call with Allan Glover confirming the leave communication stated 'short term' and that systems could be disabled again." },
            { id: "EX-003", relevance: "Hardship-assistance timeline — November 13 'SH Hardship' meeting (Marcinko / Glover / Carfagna) and Employee Relations escalation." },
          ]}
        />


        {/* Section IV — Response to Respondent's Section III — Conclusion */}
        <h2 className="mt-10 font-display text-lg tracking-tight">
          IV. Response to Respondent's Section III — Conclusion
        </h2>
        <p className="mt-3">Respondent's request for dismissal should be rejected. Respondent's conclusion is not supported by the record. It depends on disputed facts, missing documents, incomplete explanations, and broad denials that are contradicted by Respondent's own records.</p>
        <p className="mt-3">This case is not about routine workplace disagreement. The record shows protected activity followed by schedule obstruction, waitlist removal, inconsistent request dates, comparator movement, a post-complaint rating downgrade, exclusion from advancement opportunities, project exclusion, unusual Verint visibility, deleted Teams messages, leave-processing problems, hardship-fund inconsistency, and race-related comments involving hardship assistance and HBCU recruiting.</p>
        <p className="mt-3">Respondent repeatedly states that I remained employed and continued performing well. That does not defeat my claims. It confirms that I was qualified and performing. The issue is why a strong performer was kept fixed on PM/closing, removed from the waitlist, shown an incomplete waitlist screenshot, re-added with a new request date, denied movement while comparators moved, downgraded after protected activity, excluded from the TL Plus / Department Manager pipeline, and forced to repeatedly escalate issues that Respondent now claims were neutral.</p>
        <p className="mt-3">Respondent's scheduling defense is directly contradicted by the records. I requested mid-shift in 2024, learned I was not on the MID-shift list, raised that failure in protected complaints, appeared on a January 2025 waitlist snapshot, was removed by February 2025, remained absent in July 2025, and was later re-added with a July 17, 2025 request date. Respondent's claim that I declined a May 2025 day-shift opportunity is unsupported. I did not receive or decline that offer. Respondent has not produced the offer, the ticket, the shift details, the communication, or the alleged decline. A May 2025 alleged decline also cannot explain why I was already removed from the waitlist in February 2025.</p>
        <p className="mt-3">Respondent's comparator argument also fails. The record identifies similarly situated employees who received schedule movement, department movement, AM placement, midshift placement, Training Bay movement, or more favorable flexibility while I remained fixed on PM/closing. Tyler Millisock is a direct comparator: same start date, same level, outside my protected class, moved from LVAR PM/closing to PRE-D/DBC on an earlier schedule, and stated he was not on the waitlist. Respondent cannot claim the waitlist was an absolute barrier for me while employees outside my protected class moved without the same barrier.</p>
        <p className="mt-3">Respondent's performance and advancement defense is also misleading. My 2024 rating dropped from Strong to Solid in the first review cycle after my protected activity, despite strong metrics, no goal below Solid, and a 124.36% bonus payout. That rating was not harmless. It excluded me from the TL Plus / Department Manager development pipeline. Respondent also fails to explain nearly 50 internal applications, repeated non-selection, project exclusion, missing interview records, and unsupported "more qualified candidate" explanations.</p>
        <p className="mt-3">Respondent's retaliation defense ignores the actual sequence of events. After protected activity, the same types of processes repeatedly broke against me: schedule movement, waitlist placement, waitlist removal, request dates, performance rating, project credit, internal applications, Verint visibility, Teams preservation, leave processing, system access, and hardship assistance. That pattern is not speculation. It is documented.</p>
        <p className="mt-3">Respondent's hostile work environment defense also fails because it isolates each event and strips out the cumulative impact. My May 29, 2024 complaint reported a racial slur, retaliation, false job abandonment, and failure to place me on the waitlist. HR moved me away from Rosanna during the investigation. Later, Allan made race-related hardship-fund comments, discussed HBCU recruiting, and made a "blockade" statement during a conversation about my lack of opportunities. The environment continued through monitoring, record-preservation, leave, and hardship issues.</p>
        <p className="mt-3">Respondent's effort to label Verint, Teams deletion, leave processing, and hardship assistance as "ancillary" is also wrong. These issues caused real harm and are tied to the same protected-activity timeline. My Verint evidence showed different visibility from other Team Leaders, and HR later admitted I had more visibility than I should have had. The Allan/Amber Teams chat disappeared while other same-period chats remained visible. My intermittent FMLA request was mishandled as short-term/continuous leave, affecting my system access. My hardship request was escalated to HR, Employee Relations, Allan Glover, Susan Marchinko, and Greg Carfagna the day it was submitted.</p>
        <p className="mt-3">The harm was not theoretical. The workplace conditions and Respondent's handling of my complaints contributed to serious mental-health deterioration, PTSD symptoms, panic attacks, FMLA use, reduced income, financial crisis, time away from my child, housing instability, loss of housing, transportation instability, and severe emotional distress. Respondent's conclusion attempts to minimize those consequences as ordinary workplace processes. They were not ordinary, and they were not harmless.</p>
        <p className="mt-3">The record does not confirm that Discover treated me fairly, consistently, or in accordance with legitimate business practices. It shows the opposite: inconsistent rules, missing tickets, altered waitlist records, comparator movement, unsupported denials, HR admissions, and documented harm. Respondent has not rebutted discrimination, retaliation, or hostile work environment. The Division should reject Respondent's request for dismissal and issue findings consistent with the documented record.</p>

        <InlineExhibits
          heading="Visual evidence summary — Section IV Conclusion"
          items={[
            { id: "EX-014", relevance: "Protected activity — May 29, 2024 formal internal complaint and prior EEOC charge." },
            { id: "EX-046", relevance: "Waitlist contradiction — January 22, 2025: Harbin listed with June 26, 2024 request date." },
            { id: "EX-045", relevance: "Waitlist contradiction — February 25, 2025: Harbin removed by Jen Roy while juniors remained." },
            { id: "EX-044", relevance: "Waitlist contradiction — July 3, 2025: Harbin absent from controlling SharePoint waitlist." },
            { id: "EX-041", relevance: "Waitlist contradiction — July 14, 2025 limited screenshot omitting material fields; July 17, 2025 re-add date." },
            { id: "EX-010", relevance: "Comparator movement — Tyler Millisock and other comparators received movement Harbin was denied." },
            { id: "EX-051", relevance: "Performance contradiction — Strong → Solid downgrade with 124.36% bonus payout." },
            { id: "EX-006", relevance: "Verint admission — HR stated Harbin had 'more visibility than' she should have had." },
            { id: "EX-002", relevance: "Teams deletion — Allan/Amber chat missing while other same-period chats remained visible." },
            { id: "EX-003", relevance: "Hardship harm — SH Hardship meeting / delayed funds / housing loss." },
          ]}
        />

        {/* Damages and Harm */}
        <h2 className="mt-10 font-display text-lg tracking-tight">
          IV.A. Damages and Harm — Physical, Mental, Financial, and Personal Impact
        </h2>
        <p className="mt-3">
          Respondent's Position Statement minimizes the harm by emphasizing that I remained
          employed. That framing is incomplete and misleading. Remaining employed did not mean I
          was unharmed. The cumulative impact of Respondent's actions affected my schedule,
          income stability, career advancement, health, housing, family life, and emotional
          well-being.
        </p>
        <p className="mt-3">
          The harm included, but was not limited to, prolonged placement on PM/closing despite a
          long-standing mid-shift request; loss of normal evening parenting time with my child;
          exclusion from advancement opportunities (TL Plus, Department Manager cohort, project
          assignments, and leadership visibility); a post-complaint performance-rating downgrade
          from Strong to Solid; reduced income and unpaid or reduced-pay periods connected to
          the FMLA/STD misclassification; financial crisis; housing instability and loss of
          housing; medical distress requiring emergency care (severe stomach pain and an ER
          visit in early October 2025); worsening psychiatric symptoms; panic attacks; PTSD
          symptoms; intrusive or distorted thoughts; sleep disruption; ongoing therapy and
          psychiatric treatment; FMLA/STD leave; and severe emotional distress.
        </p>
        <p className="mt-3">
          These damages were not isolated or temporary. The schedule and retaliation issues
          continued over an extended period — from the late-2023 schedule issue, to the May 2024
          protected complaint, through the 2024 and 2025 retaliation pattern, to the
          October/November 2025 mental-health, leave, and housing collapse. The cumulative
          effect was destabilizing. Respondent's explanation that I remained employed does not
          rebut the documented harm to my working conditions, career path, family life, physical
          health, mental health, and housing stability.
        </p>
        <p className="mt-3">
          The damages also included forced separation from my child and disruption to the most
          important relationship in my life. My child and I had never been separated for more
          than a very short period before these events. The housing instability, financial
          crisis, schedule harm, and mental-health deterioration caused a level of instability
          and loss of innocence that affected both of us and continues to affect our
          relationship.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          IV.A.1. Economic and Out-of-Pocket Damages
        </h3>
        <p className="mt-3">
          The economic harm includes unpaid or reduced income during the FMLA/STD
          misclassification period; missed pay, delayed pay, and benefits disruption; the
          hardship-fund request timeline and denial; eviction and loss of housing; storage and
          moving costs; late fees, utility issues, overdrafts, and credit damage; transportation
          instability; medical bills (including ambulance/ER and ongoing care); therapy and
          psychiatry costs; medication costs; and career and advancement harm, including
          exclusion from TL Plus, the Department Manager pathway, project assignments, and
          cohort opportunities.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          IV.A.2. Emotional and Mental-Health Damages
        </h3>
        <p className="mt-3">
          The emotional and mental-health harm is documented through therapy records, psychiatry
          records, FMLA/STD paperwork, and diagnosis and treatment notes. Symptoms include panic
          attacks, PTSD symptoms, intrusive or distorted thoughts, insomnia, crying episodes,
          severe stomach pain, an ER visit, and worsening psychiatric symptoms. The impact
          extended to my ability to parent and spend normal time with my child, loss of normal
          life activities, isolation, fear, humiliation, loss of trust, and loss of work
          identity and confidence.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          IV.A.3. Career Damages
        </h3>
        <p className="mt-3">
          I remained employed, but my career path and working conditions were materially harmed.
          That harm includes the post-complaint Strong-to-Solid rating downgrade; blocked TL
          Plus and Department Manager eligibility; project exclusion; schedule immobility;
          reduced advancement visibility; missed leadership opportunities; and being forced into
          survival mode rather than career growth during the period in which similarly situated
          comparators advanced.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          IV.A.4. Impact on Parenting and Separation From My Child
        </h3>
        <p className="mt-3">
          One of the most severe harms was the impact on my relationship with my child. Before
          these events, my child and I had never been separated for more than a very short
          period of time. The cumulative workplace stress, schedule obstruction, leave issues,
          financial crisis, and housing instability ultimately led to periods of separation and
          instability that were deeply traumatic for both of us.
        </p>
        <p className="mt-3">
          This was not an abstract inconvenience. The loss of housing and instability disrupted
          my ability to provide the consistent home environment and emotional security my child
          had always known. It affected our daily routine, our sense of safety, and our
          relationship. There was a level of innocence and stability that was lost during that
          period, and the impact has continued beyond the immediate crisis.
        </p>
        <p className="mt-3">
          Respondent's Position Statement emphasizes that I remained employed, but that does not
          address the real harm caused by the cumulative events. Remaining employed did not
          prevent the loss of housing, separation from my child, deterioration of my mental and
          physical health, or the lasting emotional impact on my family life.
        </p>

        <h3 className="mt-6 font-display text-[15px] tracking-tight">
          IV.A.5. Legal Framework for Damages
        </h3>
        <p className="mt-3">
          EEOC remedies are intended to place the charging party in the position she would have
          been in if the discrimination had not occurred. Available remedies include back pay
          and benefits, job-placement or promotion-type relief, attorney's fees and costs,
          compensatory damages, and punitive damages where allowed. Compensatory damages cover
          out-of-pocket costs such as medical expenses, and non-economic harm such as mental
          anguish, inconvenience, and loss of enjoyment of life. For a large employer, Title VII
          compensatory and punitive damages are capped at $300,000, but that cap does not
          include back pay, benefits, front pay, equitable relief, attorney's fees, or costs.
        </p>








        {/* Section V */}
        <h2 className="mt-10 font-display text-lg tracking-tight">V. Legal Standards</h2>
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
          <li>
            <strong>No heightened-harm requirement.</strong> <em>Muldrow v. City of St. Louis</em>,
            601 U.S. 346 (2024) — Title VII does not require a heightened "significant harm"
            showing; harm to an identifiable term or condition of employment is sufficient.
            Schedule restrictions, blocked advancement opportunities, rating consequences, changed
            working conditions, and loss of access to development opportunities are legally
            meaningful even without termination or demotion.
          </li>
        </ul>

        {/* Section VI */}
        <h2 className="mt-10 font-display text-lg tracking-tight">
          VI. Documents the Division Should Request
        </h2>
        <p className="mt-3">
          To test the assertions on which the Position Statement relies, Charging Party
          respectfully requests that the Division direct Respondent to produce:
        </p>
        <ol className="mt-2 list-decimal space-y-2 pl-6">
          <li>
            <strong>Waitlist records, tickets, SharePoint version history, and audit logs.</strong>{" "}
            Every waitlist ticket submitted on Charging Party's behalf (May 2024, July 2024,
            July 2025) with author, submission date, and audit history; the complete unredacted
            Team Leader waitlist (2023–present) with request date, current status, and full
            status-change history; the complete SharePoint version history and audit logs for
            the Current TL Shifts / waitlist file from April 2024 through July 2025 (including
            the February 25, 2025 Jen Roy edits, July 3, 2025 state, July 14, 2025 state, and
            July 16–17, 2025 re-addition); the complete source file from which Jen Roy produced
            the July 14, 2025 screenshot sent to Allan Glover and all columns omitted from that
            screenshot (Date Requested, Months as CAR TL, Temporary/Permanent, Qualifies =
            Yes/No); and the Team Ratios 2024 file change history (September 24, 2024 modification).
          </li>
          <li>
            <strong>May 2025 alleged shift offer and alleged decline records.</strong> All
            documentation of the alleged May 2025 day-shift "offer" — offeror, shift,
            department, role, date, time, channel, and Charging Party's recorded response; any
            written or recorded statement showing Charging Party declined a May 2025 shift
            because of University of Arizona graduate school commitments and the identity of
            the person who recorded the alleged decline; any ticket connected to the alleged
            opportunity; and any SOW, policy, or procedure requiring removal from the waitlist
            after declining a shift, together with documentation showing that procedure was
            followed in Charging Party's case. Documentation also explaining why Charging Party
            was removed from the waitlist in February 2025 if the alleged decline did not occur
            until May 2025.
          </li>
          <li>
            <strong>Comparator movement and schedule-change records.</strong> Records showing
            schedule movement, department movement, AM/midshift placement, Training Bay
            movement, and flexibility for Team Leader comparators Tyler Millisock, Hunter Samuel,
            Cody Christensen, Whitnee Kollar, Marissa Mascarenas, Leslie McGregor, Jarin Bell,
            Brittnee Walker, Dylan Bryant, and Josh Faulkner from May 2024 through 2026, with
            actual shift hours, days off, department, and Temp/Perm designation for each
            placement; and the April 28, 2026 movement worksheets with edit/authorship metadata.
          </li>
          <li>
            <strong>Temporary vs. permanent status records and approvals.</strong>{" "}
            Director-level approval for the change from Temporary to Permanent status (required
            under the applicable SOW); documentation explaining why Charging Party's status
            changed from Temporary to Permanent; documentation explaining why her request date
            was later reflected as July 17, 2025 despite her mid-shift request and complaint
            predating that date; and records regarding the four-day, ten-hour schedule
            (requester, initial denial, team-approval requirement, and whether it was treated
            as a substitute for or resolution of her mid-shift request).
          </li>
          <li>
            <strong>Performance calibration and TL Plus / Department Manager cohort records.</strong>{" "}
            All communications between Cyndy Smith and Michelle Swindell regarding the April 22,
            2026 calibration meeting; TL Plus / Department Manager training cohort eligibility
            rules; the list of employees selected for the cohort; and documents showing how
            Charging Party's 2024 Solid rating affected her eligibility.
          </li>
          <li>
            <strong>Internal application, hiring, recruiter, interview, and selected-candidate
            records.</strong> Charging Party's complete internal application history from
            February 2023 through April 2025, including all postings applied to, recruiter
            notes, interview notes, scoring rubrics, and the names of all hiring decisionmakers,
            interviewers, recruiters, and managers; for each posting, documents showing whether
            decisionmakers knew or had access to information about Charging Party's protected
            activity and the selected candidates' qualifications, ratings, tenure, internal
            experience, schedule history, and protected-activity history; and all related
            recruiter, hiring-manager, and HR communications. See <Ex id="EX-055" />.
          </li>
          <li>
            <strong>Project assignment and project credit records.</strong> All communications
            regarding the Compliance Check project, Cyndy Smith's group, and related meetings,
            including documents reflecting the origin of the concept and participants in
            subsequent meetings; calendar invites and attendance records for Charging Party's
            scheduled Call Flow tool presentation to Greg Carfagna; and documents showing
            project assignments, invitations, and participation for similarly situated Unit
            Managers from May 2024 through 2026, including cross-department movement and
            schedule movement during that period.
          </li>
          <li>
            <strong>Greg Carfagna / Anita HR rec-for-term records.</strong> All communications
            and documents reflecting Greg Carfagna's involvement in the July 19, 2024 Anita
            complaint, blocked performance paperwork after protected activity, and any
            recommendation for termination or adverse action against Charging Party.
          </li>
          <li>
            <strong>Verint access, monitoring, visibility, permission, vendor, BT, and
            product-owner records.</strong> Verint monitoring access logs, permission-change
            records, visibility settings, and screen-recording records for Charging Party
            (including the FMLA period); communications with the Verint vendor, BT, and
            product owner regarding Charging Party's profile and PC visibility; and records
            comparing Charging Party's Verint visibility to other Team Leaders during the same
            period.
          </li>
          <li>
            <strong>Microsoft Teams deletion, retention, audit, and preservation/legal-hold
            records.</strong> The litigation-hold notice issued in connection with the May 2024
            prior charge and all custodial deletion/retention activity since that date; full
            retention logs, deletion logs, and audit history for the Allan/Amber Teams chat
            and for all same-period Teams chats that remained visible (October 10, 13, 15, 16,
            17, and 21, 2025); and records showing why the Allan/Amber chat disappeared from
            both work computer and phone while other chats remained.
          </li>
          <li>
            <strong>FMLA / leave processing / STD misclassification / access deactivation
            records.</strong> All leave-processing records relating to Charging Party's
            October 2025 intermittent FMLA request, the STD misclassification, the wrong
            paperwork sent, the system-access deactivation, and all related communications
            among Allan Glover, Amber, HR, and the leave administrator.
          </li>
          <li>
            <strong>Hardship-fund records for Brandi Cordi, Araksan Dide, and Shawnna Harbin.</strong>{" "}
            All hardship-fund applications, supporting documentation requirements,
            approvals/denials, processing timelines, and communications for Brandi Cordi,
            Araksan Dide, and Charging Party, including documentation showing what each
            applicant was required to submit.
          </li>
          <li>
            <strong>November 13, 2025 "SH Hardship" meeting records.</strong> The "SH Hardship"
            calendar invite, attendee list, agenda, notes, and all related communications
            among Susan Marchinko, Allan Glover, Greg Carfagna, and Employee Relations.
          </li>
          <li>
            <strong>November 17, 2025 Cameron Hadley conversation records.</strong> The
            recording or transcript of the November 17, 2025 conversation, related notes,
            and all communications between Cameron Hadley and Charging Party regarding
            documentation requirements for the hardship request.
          </li>
          <li>
            <strong>July 10, 2025 hardship-fund race-related comment records.</strong> All
            records regarding Allan Glover's July 10, 2025 hardship-fund example, including
            the Teams follow-up exchange, Allan's "just providing an example of what could
            happen" response, and any same-day disclosures to coworkers.
          </li>
          <li>
            <strong>HBCU recruiting records and Allan Glover "blockade" records.</strong> All
            records regarding Allan Glover's HBCU recruiting statements and "blockade"
            statement made during the conversation about Charging Party's lack of
            opportunities, including any follow-up Teams messages.
          </li>
          <li>
            <strong>HR / Employee Relations investigation files.</strong> Complete
            investigation files for the May 29, 2024 complaint, the May 31, 2024 HR intake,
            the July 19, 2024 Anita complaint, the September 2025 Ethical Concerns complaint,
            the October 2025 communications, and the October 7, 2025 written timeline to
            investigator Edward Reyes.
          </li>
          <li>
            <strong>Communications showing who knew about protected activity and when.</strong>{" "}
            All communications reflecting what management, HR, and Employee Relations knew
            about Charging Party's May 6, 2024 EEOC charge, the May 29, 2024 internal
            complaint, and subsequent protected activity — including what Allan Glover was
            told (or deliberately not told) before and after he assumed supervision.
          </li>
          <li>
            <strong>June–July 2024 reassignment from Rosanna Blackson to Allan Glover.</strong>{" "}
            All communications between Susan Marcinko, Greg Carfagna, Allan Glover, and
            Human Resources / Employee Relations concerning the June–July 2024 reassignment;
            any instructions provided to Mr. Glover regarding Charging Party's reporting
            arrangement, schedule request, prior internal complaint, Ms. Blackson, or the
            ongoing HR investigation (including any onboarding briefing or written guidance);
            and all documents identifying who decided that Mr. Glover would become Charging
            Party's manager and the reasons stated.
          </li>
          <li>
            <strong>Training Bay movement and September 2025 leadership review.</strong>{" "}
            All records regarding Training Bay movement, the September 19, 2025 conversation
            in which Allan stated there "wasn't a criteria" and identified "myself, Amber,
            Trevor, Dan," and the September 2025 leadership review of schedule and
            assignment decisions.
          </li>
          <li>
            <strong>Mid-shift request records and the Glover July 2024 ticket.</strong> The
            complete ticket Mr. Glover allegedly submitted on Charging Party's behalf in
            July 2024 (including whether the request was entered as mid-shift, AM/day shift,
            or another category) and all records showing why Charging Party's original
            mid-shift request was not recorded as mid-shift; all communications between
            Rosanna Blackson, Ryan Tafoya, Susan Marcinko, Greg Carfagna, Allan Glover, Jen
            Roy, Edina Markus, and Human Resources regarding Charging Party's mid-shift
            request.
          </li>
          <li>
            <strong>October–November 2025 overlap records (Teams, Verint, leave, and
            hardship).</strong> All records showing the temporal overlap among the Teams
            deletion, Verint complaint, FMLA filing, system-access deactivation, hardship
            request, and "SH Hardship" meeting from October 7, 2025 through November 17, 2025.
          </li>
        </ol>









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

        {/* Evidence Crosswalk — supplemental table; does not alter body text */}
        <section className="mt-12 break-inside-avoid">
          <h2 className="font-display text-lg tracking-tight">
            Evidence Crosswalk by Respondent Position Statement Section
          </h2>
          <p className="mt-2 text-[12px] text-foreground/70">
            Cross-reference of Respondent's Position Statement sections to Charging Party's
            response sections and the supporting exhibits embedded above and in the appendix.
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-[11px]">
              <thead>
                <tr className="bg-secondary/40 text-left">
                  <th className="border border-border px-2 py-1">Respondent Section</th>
                  <th className="border border-border px-2 py-1">Charging Party Response</th>
                  <th className="border border-border px-2 py-1">Exhibits Included</th>
                  <th className="border border-border px-2 py-1">What the Evidence Shows</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr>
                  <td className="border border-border px-2 py-1">I.B (Employment Narrative)</td>
                  <td className="border border-border px-2 py-1">II.A</td>
                  <td className="border border-border px-2 py-1">EX-050, EX-051, EX-052, EX-053</td>
                  <td className="border border-border px-2 py-1">2024 Solid downgrade despite IPF 96.49%, CPF 128.90%, 124.36% bonus payout, no goal below Solid.</td>
                </tr>
                <tr>
                  <td className="border border-border px-2 py-1">I.B.1 (Prior EEOC Charge)</td>
                  <td className="border border-border px-2 py-1">II.B</td>
                  <td className="border border-border px-2 py-1">EX-HR-CALL, EX-002, EX-008, EX-041, EX-042</td>
                  <td className="border border-border px-2 py-1">May 2024 protected activity, HR-arranged reassignment, waitlist non-placement.</td>
                </tr>
                <tr>
                  <td className="border border-border px-2 py-1">I.B.2 (Glover Role / Knowledge)</td>
                  <td className="border border-border px-2 py-1">II.H</td>
                  <td className="border border-border px-2 py-1">EX-HR-CALL, EX-002</td>
                  <td className="border border-border px-2 py-1">Reassignment context; Glover's admitted awareness of prior charge.</td>
                </tr>
                <tr>
                  <td className="border border-border px-2 py-1">I.B.3 (No prior request)</td>
                  <td className="border border-border px-2 py-1">II.C</td>
                  <td className="border border-border px-2 py-1">EX-008, EX-043, EX-001, EX-002</td>
                  <td className="border border-border px-2 py-1">Mid-shift request raised in May 29, 2024 complaint; Tafoya April 26, 2024 confirmation.</td>
                </tr>
                <tr>
                  <td className="border border-border px-2 py-1">I.B.5 (May 2025 Day-Shift Offer)</td>
                  <td className="border border-border px-2 py-1">II.E / II.O</td>
                  <td className="border border-border px-2 py-1">EX-045, EX-046, EX-048</td>
                  <td className="border border-border px-2 py-1">February 2025 removal predates alleged May 2025 decline; no ticket or offer produced.</td>
                </tr>
                <tr>
                  <td className="border border-border px-2 py-1">I.B.6–7 (Neutral Waitlist)</td>
                  <td className="border border-border px-2 py-1">II.D</td>
                  <td className="border border-border px-2 py-1">EX-010, EX-022, EX-HR-CALL</td>
                  <td className="border border-border px-2 py-1">Comparator movement "because of leadership, not the waitlist"; TL comparators received AM/MID/PRE-D/TBay placements while Harbin remained on PM/closing.</td>
                </tr>
                <tr>
                  <td className="border border-border px-2 py-1">I.B.7 (July 2025 Waitlist Status)</td>
                  <td className="border border-border px-2 py-1">II.P</td>
                  <td className="border border-border px-2 py-1">EX-041, EX-044, EX-040</td>
                  <td className="border border-border px-2 py-1">Limited five-row Jen Roy screenshot; July 3 SharePoint waitlist absence; SOW process.</td>
                </tr>
                <tr>
                  <td className="border border-border px-2 py-1">I.B.8 (Hardship / HBCU)</td>
                  <td className="border border-border px-2 py-1">II.J / II.K</td>
                  <td className="border border-border px-2 py-1">EX-003, EX-004, EX-005</td>
                  <td className="border border-border px-2 py-1">Cordi/Dide disparate documentation; race-related hardship comment; HBCU/blockade.</td>
                </tr>
                <tr>
                  <td className="border border-border px-2 py-1">II.A (Race Discrimination)</td>
                  <td className="border border-border px-2 py-1">III.A</td>
                  <td className="border border-border px-2 py-1">EX-010, EX-051, EX-053, EX-055</td>
                  <td className="border border-border px-2 py-1">Tyler Millisock comparator; 2024 downgrade; ~50 internal applications.</td>
                </tr>
                <tr>
                  <td className="border border-border px-2 py-1">II.B (Retaliation)</td>
                  <td className="border border-border px-2 py-1">III.B</td>
                  <td className="border border-border px-2 py-1">EX-001, EX-002, EX-006, EX-007, EX-045</td>
                  <td className="border border-border px-2 py-1">Post-protected-activity adverse events: waitlist removal, rating, Verint, FMLA, Teams.</td>
                </tr>
                <tr>
                  <td className="border border-border px-2 py-1">II.C (Performance / Advancement)</td>
                  <td className="border border-border px-2 py-1">II.N / III.A</td>
                  <td className="border border-border px-2 py-1">EX-049, EX-051, EX-053, EX-055, EX-057</td>
                  <td className="border border-border px-2 py-1">Strong→Solid→Strong; TL Plus / Department Manager pipeline exclusion.</td>
                </tr>
                <tr>
                  <td className="border border-border px-2 py-1">II.D (Ancillary Allegations)</td>
                  <td className="border border-border px-2 py-1">III.D</td>
                  <td className="border border-border px-2 py-1">EX-002, EX-006, EX-007, EX-003, EX-004</td>
                  <td className="border border-border px-2 py-1">Verint visibility; Allan/Amber chat deletion; FMLA mishandling; hardship escalation.</td>
                </tr>
                <tr>
                  <td className="border border-border px-2 py-1">III (Conclusion)</td>
                  <td className="border border-border px-2 py-1">IV</td>
                  <td className="border border-border px-2 py-1">All cited exhibits</td>
                  <td className="border border-border px-2 py-1">Cumulative pattern of disputed facts, missing records, and documented harm.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>


      {/* Print-only appendix — embeds cited exhibit images into the PDF */}
      <PrintEvidenceAppendix
        exhibitIds={CITED_EXHIBITS}
        title="Evidence Appendix — Formal Response to Position Statement"
      />
    </div>
  );
}
