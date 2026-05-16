import { createFileRoute } from "@tanstack/react-router";

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
