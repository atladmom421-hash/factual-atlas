import type { Exhibit } from "./types";

export const exhibits: Exhibit[] = [
  {
    id: "EX-001",
    exhibitNumber: "EX-001",
    fileName: "2025-12-05 Harbin v. DFS Services — EMP COD",
    date: "December 5, 2025",
    category: "Filed pleading",
    peopleIds: ["harbin"],
    summary: "Filed Charge of Discrimination — Shawnna Harbin v. DFS Services LLC.",
    linkedEventIds: ["e-2025-09-19-complaint"],
    reliability: "confirmed-email",
    filePath: "/exhibits/EX-001-COD.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-002",
    exhibitNumber: "EX-002",
    fileName: "Oct 2025 — Record deletion / preservation concerns",
    date: "October 2025",
    category: "Records integrity",
    peopleIds: ["harbin", "jen-roy"],
    summary: "Documented concerns regarding deletion and preservation of waitlist and related records.",
    linkedEventIds: ["e-2025-02-22-jen-deleted", "e-2025-10-record-pres", "e-2025-10-readonly"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-002-record-deletion-oct-2025.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-003",
    exhibitNumber: "EX-003",
    fileName: "Nov–Dec 2026 — Hardship assistance delay / financial crisis timeline",
    date: "Nov–Dec 2026",
    category: "Hardship / financial",
    peopleIds: ["harbin"],
    summary: "Timeline of hardship-assistance delays and the resulting financial crisis.",
    linkedEventIds: [],
    reliability: "confirmed-email",
    filePath: "/exhibits/EX-003-hardship-timeline.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-004",
    exhibitNumber: "EX-004",
    fileName: "July 2025 — Race-related comments / hardship fund",
    date: "July 2025",
    category: "Protected activity context",
    peopleIds: ["harbin"],
    summary: "Documented race-related comments tied to hardship-fund context.",
    linkedEventIds: ["e-2025-07-race"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-004-race-comments-jul-2025.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-005",
    exhibitNumber: "EX-005",
    fileName: "August 2025 — HBCU recruiting comments / blockade",
    date: "August 2025",
    category: "Protected activity context",
    peopleIds: ["harbin"],
    summary: "HBCU recruiting comments and blockade conversation.",
    linkedEventIds: ["e-2025-08-hbcu"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-005-hbcu-aug-2025.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-006",
    exhibitNumber: "EX-006",
    fileName: "Oct 2025 — Verint monitoring / targeted screen recording / FMLA retaliation",
    date: "October 2025",
    category: "Surveillance / retaliation",
    peopleIds: ["harbin"],
    summary: "Documented concern that Verint monitoring was used for targeted screen recording in connection with FMLA-related events.",
    linkedEventIds: ["e-2025-10-verint"],
    reliability: "needs-confirmation",
    filePath: "/exhibits/EX-006-verint-monitoring.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-007",
    exhibitNumber: "EX-007",
    fileName: "October 2025 — Leave processing misclassification / access deactivation / FMLA notice deletion",
    date: "October 2025",
    category: "Leave administration",
    peopleIds: ["harbin"],
    summary: "Concerns documented around leave processing, access deactivation, and FMLA notice deletion.",
    linkedEventIds: ["e-2025-10-leave-misclass"],
    reliability: "needs-confirmation",
    filePath: "/exhibits/EX-007-leave-misclassification.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-008",
    exhibitNumber: "EX-008",
    fileName: "Temporary vs Permanent status inconsistency",
    date: "2024–2025",
    category: "Records inconsistency",
    peopleIds: ["harbin"],
    summary: "Analysis of the inconsistency between Respondent's representations that PM was permanent and its own records showing Temporary.",
    linkedEventIds: ["e-2023-temp-pm", "e-2024-10-14-shift-doc", "e-2025-02-18-still-temp", "e-2025-07-17-readded"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-008-temp-vs-perm.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-009",
    exhibitNumber: "EX-009",
    fileName: "April 2026 — Return-from-Leave events / disparate treatment / comparator evidence",
    date: "April 2026",
    category: "Post-leave timeline",
    peopleIds: ["harbin", "laye", "cyndy-smith", "swindell", "jake-smith", "currant", "watson", "mclaughlin"],
    summary: "Detailed memorandum of post-leave events, disparate-treatment and retaliation concerns, and comparator evidence.",
    linkedEventIds: [
      "e-2026-04-03-return", "e-2026-04-21-amber", "e-2026-04-22-calibration", "e-2026-04-23-cyndy-followup",
      "e-2026-04-23-jake", "e-2026-04-23-amber-mvmt", "e-2026-04-23-todd", "e-2026-04-27-jodi-hr",
      "e-2026-04-28-todd-no", "e-2026-04-28-initial", "e-2026-04-28-amber-changed", "e-2026-04-28-revised",
      "e-2026-04-28-call-amber", "e-2026-04-29-shawn", "e-2026-05-01-leave", "e-2026-05-12-karena",
    ],
    reliability: "confirmed-email",
    filePath: "/exhibits/EX-009-april-2026-return.docx",
    fileKind: "docx",
  },
  {
    id: "EX-010",
    exhibitNumber: "EX-010",
    fileName: "Comparator Movement & Flexibility Map",
    date: "May 2026",
    category: "Comparator analysis",
    peopleIds: ["harbin", "millisock", "samuel", "case", "cahoon"],
    summary: "Visual map of comparator movement and flexibility — schedule movement, department movement, waitlist/ticket treatment, performance, and flexibility.",
    linkedEventIds: ["e-2025-10-readonly", "e-2026-05-12-karena"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-010-comparator-map.png",
    fileKind: "image",
  },
  {
    id: "EX-HR-CALL",
    exhibitNumber: "EX-011",
    fileName: "November 6, 2025 — HR investigation follow-up call (transcript)",
    date: "November 6, 2025",
    category: "Transcript",
    peopleIds: ["harbin", "allan"],
    summary: "Full transcript of HR follow-up call regarding schedule/waitlist findings, comparator shift movement, and Allan removing himself from the team chat.",
    linkedEventIds: ["e-2025-11-06-hr-call"],
    reliability: "confirmed-transcript",
    fileKind: "transcript",
    transcriptText: `HR Investigation Follow-Up Call

Speaker 1 = HR
Speaker 2 = Shawnna Harbin

HR comments on Schedule / Waitlist Investigation Findings

Speaker 1: Regarding your schedule, I know this was previously investigated. I think you talked to Myron in the past, but I did research on my own because I wanted to make sure we did not miss any details. I looked at the case independently. Allan submitted two schedule change requests on your behalf, one in July of last year and one in July of this year. He said that in May of this year, a day shift was offered and you declined. If people are offered something and decline it, that is why they are pulled off the waitlist. But you were put back on as soon as you requested it in July, and you are still on there as of when I talked to him. This matches what Myron discovered in his case, because I looked this up and then looked up his case. They said they offered a different shift, but you could not take it.

Speaker 2: As far as I know, I have never spoken with Myron regarding this. I was never even added for mid-shift. This may have been a day shift. The shift I have been asking for for two years is mid-shift.

Speaker 1: Right, and I think they were offering you the next shift available.

Speaker 2: So if I am on the waitlist for PM and someone offers me AM and I say no, they can just take me off? That is not how it works.

Speaker 1: That is how it works.

Speaker 2: The second thing is, I was never offered that position. Ever. I was never offered it. Nothing. Seriously. Allan has lied to me this whole time.

Speaker 1: What has he lied to you about?

Speaker 2: That I was on the waitlist for mid-shift. So they are taking me off and I do not know that. I do not know what is happening. If he submitted me for mid-shift, which HR confirmed with me is what he should have done in May 2024, then their procedure says there should be a ticket. He filled out a ticket, right? Where is the ticket for my waitlist request? All I know is Rosanna, when I asked her to put me on the waitlist, that did not happen. So now I am number five after waiting for two years. What sense does that make?

HR comments on Comparator Shift Movement Discussion

Speaker 2: Everyone has moved. Tyler has moved. Did you check on that?

Speaker 1: I did. Let me pull up my notes. The three names you gave me transferred over to your team or another team, and they were already on day shift.

Speaker 2: That is not true. That is blatantly not true.

Speaker 1: I am looking for my notes. The names you gave me were Hunter Samuels, Candace Atkins, and Joshua Faulkner.

Speaker 2: Yes, and Tyler Milisock.

Speaker 1: Tyler was not one of the names you gave me. You gave me Hunter, Candace, and Joshua. So I asked about those three.

Speaker 2: Hunter was not on day shift when she came over here. She went from PM to day shift. Or she was on mid-shift and went from mid-shift to AM. Whoever told you that is lying to you. I just talked to her and she personally told me. Also, Cody Christensen moved to an AM shift. Everyone has been moving.

Speaker 1: If they are moving over, it has nothing to do with being on a waitlist. That may have to do with leadership. I do not know. But all I know is anybody on the waitlist above you is not moving.

Speaker 2: Now they are not, because I am back on the list. When I was on the list, everyone was moving, May through July of this year.

Speaker 1: You were on it in July last year when Allan put you on it initially, when you started working together.

Speaker 2: You said I was added in July of last year for mid-shift, which was what the ticket was submitted for, right? Is there a ticket? Can we get the ticket? I would like to see it. Edina said she has the tickets. Who has the ticket? Edina Markus?

Speaker 1: I do not think so. But as far as I can tell, if they offered another shift, regardless of what it was, and you declined—

Speaker 2: But I was not offered the shift. That is the problem. I was never offered the shift. If I was, I would not have declined it. You think I would be doing this for no reason? You think I would be away from my kid for fun? No. This is serious.

Speaker 1: I believe how serious this is for you. I am not saying this is not happening. I am telling you the information I have. I can ask for all the information and get what is available.

HR comments on Allan Removing Himself From Team Chat

Speaker 1: I did talk to Allan about removing himself from your team chat. He said he had no idea it happened initially. He was removing himself from a different chat, and he said he is not great with technology. Someone else brought it to his attention, and they helped him get re-added to your chat. He said he does want to participate in all your chats. He spoke very highly of you. He said you are the best team lead he has. He kept saying that repeatedly, and this was not anything I asked him to tell me.

Speaker 2: Yeah, okay.`,
  },
];

export const exhibitById = (id: string) => exhibits.find(e => e.id === id);
