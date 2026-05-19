// Verbatim Teams chat transcripts, keyed by the timeline event they document.
// Each thread is the literal message-by-message extraction from the source
// screenshot exhibit (EX-041, EX-042). Used to attach the underlying chat
// content directly to its protected-activity / acknowledgment event.

export type ChatSpeakerRole = "harbin" | "allan" | "jen-roy";

export interface ChatMessage {
  speaker: string;            // display name as it appears in Teams
  role: ChatSpeakerRole;
  timestamp: string;          // verbatim from the screenshot
  text: string;               // verbatim message text
  attachment?: string;        // description of an embedded image / table
  reaction?: string;          // e.g. "❤"
  emphasis?: boolean;         // highlight as the operative admission line
}

export interface ChatThread {
  id: string;                 // matches timeline event id
  exhibitId: string;
  title: string;
  dateLabel: string;
  participants: string[];
  context: string;            // 1-2 sentence framing
  significance: string;       // why this thread matters to the case
  messages: ChatMessage[];
}

export const chatThreads: ChatThread[] = [
  {
    id: "e-2025-07-14-jen-allan-waitlist",
    exhibitId: "EX-041",
    title: "Allan Glover ↔ Jen Roy — waitlist position inquiry",
    dateLabel: "July 14, 2025 · 8:51 AM – 11:54 AM",
    participants: ["Allan Glover", "Jen Roy", "Lashawnna Harbin (subject)"],
    context:
      "Lashawnna had asked Allan where she stood on the mid-shift waitlist. Allan forwarded the question up to Jen Roy (Business Manager to the Recovery VP), then relayed Jen's answer back.",
    significance:
      "Direct misrepresentation in writing. On the date of this chat the controlling 'Current TL Shifts' SharePoint waitlist (EX-044, last saved July 3, 2025 and unchanged through July 16) did NOT contain Harbin's name — yet Jen Roy hands Allan a 5-row 'Shift Change Request' snippet that includes her, and Allan forwards it to Harbin as confirmation she is on the list. The snippet also strips every column the real waitlist uses to process candidates (Date Requested, Months as CAR TL, Temporary/Permanent, Qualifies = Yes/No), preventing Harbin from comparing her seniority against juniors. Harbin was not actually added to the live waitlist until Edina Markus re-added her on July 16 with a backdated 'Date Requested' of July 17, 2025 — a date that post-dates this very conversation.",
    messages: [
      {
        speaker: "Allan Glover",
        role: "allan",
        timestamp: "7/14 8:51 AM (to Jen Roy)",
        text: "Silly question, do you know where she falls on the waitlist by chance?",
      },
      {
        speaker: "Jen Roy",
        role: "jen-roy",
        timestamp: "7/14 8:52 AM",
        text: "[table attachment]",
        attachment:
          "Shift Change Request — 5 rows:  PreD · Nameer Khan · Current PM → Requested MID  |  Chat · Courtney Griffith · MID → AM  |  HVAR · Caton Woods · MID → AM  |  MVAR · Dominic Daniels · PM → AM  |  LVAR · Shawnna Harbin · PM → AM",
        reaction: "❤",
      },
      {
        speaker: "Allan Glover",
        role: "allan",
        timestamp: "7/14 8:52 AM",
        text: "Thank you",
      },
      {
        speaker: "Jen Roy",
        role: "jen-roy",
        timestamp: "7/14 8:52 AM",
        text: "No problem",
      },
      {
        speaker: "Allan Glover",
        role: "allan",
        timestamp: "7/14 11:48 AM (to Lashawnna)",
        text: "Totally",
      },
      {
        speaker: "Allan Glover",
        role: "allan",
        timestamp: "7/14 11:48 AM",
        text: "Edina is still out so, I asked Jen:",
        attachment: "[Allan forwards Jen's 5-row screenshot to Lashawnna]",
        emphasis: true,
      },
      {
        speaker: "Lashawnna Harbin",
        role: "harbin",
        timestamp: "7/14 11:54 AM",
        text: "Not too shabby! Thank you for the update!",
        reaction: "❤",
      },
      {
        speaker: "Allan Glover",
        role: "allan",
        timestamp: "7/14 11:54 AM",
        text: "You bet!",
      },
    ],
  },

  {
    id: "e-2025-mid-allan-2yrs-thread",
    exhibitId: "EX-042",
    title: "Lashawnna ↔ Allan Glover — '2 years' / demote-to-coach thread",
    dateLabel: "Mid-2025 — Wednesday 3:12 PM – 5:49 PM (one continuous chat)",
    participants: ["Lashawnna Harbin", "Allan Glover"],
    context:
      "Lashawnna messages Allan directly, escalating the long-standing schedule issue. She raises possible resignation, asks whether anyone would swap permanently, and asks whether she could demote to a coach role to obtain an earlier schedule.",
    significance:
      "Direct contemporaneous statement of the 2-year duration of the mid-shift request — and Allan's management-level acknowledgment ('I understand and keep pushing,' 'I can check for sure,' 'I will check') without ever disputing the 2-year figure. The demote-to-coach question demonstrates Harbin's willingness to accept a lower role to escape PM, which is itself an adverse-conditions data point.",
    messages: [
      {
        speaker: "Lashawnna Harbin",
        role: "harbin",
        timestamp: "Wednesday 3:11 PM",
        text:
          "I may have to resign unfortunately if I'm unable to work a different schedule. It sucks but I just miss seeing Atlas and this just isn't right. I've been requesting midshift for 2 years lol",
        emphasis: true,
      },
      {
        speaker: "Allan Glover",
        role: "allan",
        timestamp: "Wednesday 3:12 PM",
        text: "I understand and keep pushing",
        emphasis: true,
      },
      {
        speaker: "Lashawnna Harbin",
        role: "harbin",
        timestamp: "Wednesday 5:17 PM",
        text:
          "Allan would it be too much to see if anyone would be willing to switch schedules permanently? Or is that even an option, if someone would take my schedule?",
      },
      {
        speaker: "Allan Glover",
        role: "allan",
        timestamp: "Wednesday 5:17 PM",
        text: "I can check for sure",
        reaction: "❤",
      },
      {
        speaker: "Lashawnna Harbin",
        role: "harbin",
        timestamp: "Wednesday 5:18 PM",
        text:
          "Yes, if not maybe changing to a different role like a coach if they have availability?",
      },
      {
        speaker: "Allan Glover",
        role: "allan",
        timestamp: "Wednesday 5:20 PM",
        text: "What?",
      },
      {
        speaker: "Lashawnna Harbin",
        role: "harbin",
        timestamp: "Wednesday 5:21 PM",
        text: "Demoting to a coach?",
        emphasis: true,
      },
      {
        speaker: "Lashawnna Harbin",
        role: "harbin",
        timestamp: "Wednesday 5:21 PM",
        text:
          "I've heard of a few people doing that. If they have early schedule availability, I would do that.",
      },
      {
        speaker: "Allan Glover",
        role: "allan",
        timestamp: "Wednesday 5:24 PM",
        text: "I will check",
        reaction: "❤",
        emphasis: true,
      },
      {
        speaker: "Lashawnna Harbin",
        role: "harbin",
        timestamp: "Wednesday 5:25 PM",
        text: "Thank you so much!",
      },
      {
        speaker: "Lashawnna Harbin",
        role: "harbin",
        timestamp: "Wednesday 5:37 PM",
        text:
          "sorry for all of the messages lol but I just sent Bruce's PE over via workday for your approval.",
      },
      {
        speaker: "Allan Glover",
        role: "allan",
        timestamp: "Wednesday 5:38 PM",
        text: "On it and give me a few",
      },
      {
        speaker: "Lashawnna Harbin",
        role: "harbin",
        timestamp: "Wednesday 5:39 PM",
        text: "No rush at all",
      },
      {
        speaker: "Allan Glover",
        role: "allan",
        timestamp: "Wednesday 5:45 PM",
        text: "Done",
      },
      {
        speaker: "Lashawnna Harbin",
        role: "harbin",
        timestamp: "Wednesday 5:47 PM",
        text: "Thank you!",
      },
      {
        speaker: "Allan Glover",
        role: "allan",
        timestamp: "Wednesday 5:49 PM",
        text: "You're welcome",
      },
    ],
  },
];

export const chatThreadByEventId = (eventId: string) =>
  chatThreads.find((t) => t.id === eventId);
