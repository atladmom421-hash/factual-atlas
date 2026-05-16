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
    linkedEventIds: ["e-2025-02-22-jen-deleted", "e-2025-10-07-reyes-timeline", "e-2025-10-14-fmla-notice", "e-2025-10-23-chat-missing", "e-2025-10-23-other-chats-visible", "e-2025-10-24-chat-cleared-phone", "e-2025-10-record-pres", "e-2025-10-readonly"],
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
  {
    id: "EX-CYNDY-FOLLOWUP",
    exhibitNumber: "EX-012",
    fileName: "April 22, 2026 — Follow-up conversation with Cyndy Smith (transcript)",
    date: "April 22, 2026",
    category: "Transcript",
    peopleIds: ["harbin", "cyndy-smith", "mclaughlin", "lesure"],
    summary: "Follow-up conversation with Cyndy Smith after the leadership calibration meeting where Lashawnna's Direct Pay / customer disclosure practices were publicly questioned. Cyndy confirms concerns about whether customers were fully educated, and states she reached out to Shawn McLaughlin for a call example. Lashawnna states the disclosures were still being read, the practice had been used for over three years without compliance defects, and that the public framing made her feel her integrity as a manager was being questioned. She also raises unequal treatment in the group and asks that future concerns be addressed privately.",
    linkedEventIds: ["e-2026-04-22-calibration", "e-2026-04-23-cyndy-followup", "e-2025-02-cyndy-prior"],
    reliability: "confirmed-transcript",
    fileKind: "transcript",
    transcriptText: `Follow-up Conversation with Cyndy Smith — April 22, 2026
Re: Leadership calibration discussion of Direct Pay / customer disclosure practices

Lashawnna Harbin: Hello. Yeah, how's that going? Are you over on the Capital One side more now? Are you guys just moved? Is that what happened?

Cyndy Smith: Our team officially moved over to the Capital One side. However, we still support a lot of the [unclear] because we haven't been through training or anything like that.

Lashawnna Harbin: Okay.

Cyndy Smith: Personally, I support [unclear] and DPL.

Lashawnna Harbin: Oh, very cool. So, [unclear] and DPL, are they kind of linked together? Are they under the same umbrella now? Is that what it is, or no?

Cyndy Smith: They're separate. Separate Director, separate DM.

Lashawnna Harbin: Oh, wow.

Cyndy Smith: But DPL is pretty small, so that's how they're going to do them. But still have some work to do compliance-wise.

Lashawnna Harbin: Yeah, yeah. I'm still trying to get a full picture of all the changes that have taken place over the past five months. So yeah, it's been a lot.

So, I know in the calibration we were talking about the Direct Pay placement, and I was a little caught off guard. Not caught off guard exactly, but I was just like, "Dang, I hope I'm not doing anything that's against policy."

I definitely felt a little caught off guard because I don't want anyone to think I'm doing anything unethical or without integrity. That's really important to me. I just try to do the best I can and communicate best practices to my agents.

So I was a little worried, like, "Am I doing something wrong?" What is the suggested call flow? How should we be doing this?

Cyndy Smith: Well, I would say the suggested call flow is what is published, right? Policies, procedures. This process has gone through compliance. It has gone through the same as how we want our flow to be.

Lashawnna Harbin: Okay.

Cyndy Smith: I have concerns about how your layout is, just because I don't know that the customer is 100% educated that they're signing up for two separate things.

They're signing up for a payment, and they're signing up for automatic payments. You suggested that some of the talk-off is, "Now that I've reestablished your account, let's go ahead and use that bank account."

Lashawnna Harbin: So the talk-off is, "Okay, great. So we'll set up the payment for $100. That'll be paid on April 30th. Then, going forward, it looks like you have excellent payment history. Something that can help you out with that is Direct Pay. It's our form of autopay," or whatever the script is for that.

So they kind of go into it from there like that. And then if they get a yes, like, "Yeah, I'd like to sign up for that," they still read the payment disclosure, right? So the customer hears the full payment disclosure and the payment information. Then they collect the payment information for Direct Pay.

Cyndy Smith: Yeah, and I would just be very careful that they are using the approved talk-off, especially for Massachusetts accounts. That's completely—

Lashawnna Harbin: Oh yeah. Yeah, I'm familiar with that.

Cyndy Smith: And based on what you had, it wasn't in line with what is acceptable for the Massachusetts accounts, simply.

Lashawnna Harbin: Right. I agree.

Cyndy Smith: And I had reached out to Shawn to get a call example of where it was successful and sounded great, or even where there were some extra questions from the customer after it flowed this way, to take it to compliance and take it to process and have them listen to it and get their opinion.

Lashawnna Harbin: Okay. Now, on calls where my agents have done it in the past, there's never been a compliance defect or anything like that. My agents have been doing this for over three years now.

So we've never had — I mean, I've shared it with all the D-grades and the Ryans. I think they've heard it. Everyone has heard it. So that's why I was definitely a little taken aback with the verbiage. I think you said "unethical," right?

Cyndy Smith: Why?

Lashawnna Harbin: Or "not transparent."

Cyndy Smith: Yeah, I just, you know—

Lashawnna Harbin: Well, I feel like a lot of the times when me or Karena bring up something, you speak like that, or you add in that type of adjective into describing what we're doing specifically.

So when you bring up things like, "You're not being transparent," well, no — when you're questioning my integrity as a manager, that's not your job. You know that, right?

Cyndy Smith: I wasn't questioning your integrity.

Lashawnna Harbin: But you are, and you've done that several times in several meetings.

Cyndy Smith: That's not my intention.

Lashawnna Harbin: Well, that's what I wanted to say, because I'm looking to you as a source of information, knowledge, and guidance on things like this. That's why you're here in the meeting.

So when I feel like if I bring up something, which I have in the past, and you've addressed me in that manner in front of the group in the past, it feels like, one, I shouldn't feel comfortable bringing things up because I could be personally attacked on my integrity or how I'm coaching my team.

It makes me uncomfortable. So that's why I wanted to reach out to you.

And Karena has expressed the same thing to me as far as you addressing her in public as well. And yeah, the coach, so.

But for me personally, I just got back from leave. I'm just bringing up something that I've done in the past and that I thought I had talked to you about in the past as well.

So when you brought that up, and then obviously you felt the need to go to Shawn as well, I just felt like, wow, is that the working relationship that we have? Because if so, that doesn't feel comfortable for me. It feels like you're attacking me.

And then also, you're very dismissive of my concern, so that's also very concerning.

Cyndy Smith: I'm not dismissive of your concern. I apologize for the way you felt. That was not my intention.

Lashawnna Harbin: Right. And I just ask that in the future — no, let me just finish what I'm saying. I'm just asking, I'm just asking—

Cyndy Smith: I'm not going to communicate if I can't finish the statement.

Lashawnna Harbin: I'm just asking in the future, if you do have a concern like that, pull me to the side. Or I don't know, go to Shawn and have a conversation with me and Shawn, or whatever.

Yeah, I just feel like I'm not being treated equally in the group.

Cyndy Smith: Have you had that conversation with everybody else that brought up the concern?

Lashawnna Harbin: No, I haven't yet. I reached out to you because you're the compliance manager. You have [oversight / responsibility] over their team leads. And I'm sure we'll all converse about it in our own separate meeting.

But you know, you're not a unit manager — or you are, right? But I just wanted to talk to you in your own capacity as a leader in the compliance space.

Cyndy Smith: I just felt like I was questioning from a compliance standpoint of, are we doing what we should be doing for the customer? And that's all I was trying to do. I wasn't trying to test your integrity in any way.

Lashawnna Harbin: Well, I just wanted to be clear on that, because I definitely — anything that I want to address, I want to feel comfortable coming to you. And also, if anything needs to be addressed, I definitely will.

So I just want to be clear on that. Okay?

Well, I have to run to my next meeting, but thanks for taking the time to speak with me. I appreciate it. Okay.`,
  },
  {
    id: "EX-ALLAN-OCT24",
    exhibitNumber: "EX-013",
    fileName: "October 24, 2025 — Call with Allan Glover re: leave misclassification (transcript)",
    date: "October 24, 2025",
    category: "Transcript",
    peopleIds: ["harbin", "allan", "hartford"],
    summary: "Call in which Allan confirms the email he received that morning indicated Lashawnna was 'going on a leave effective yesterday' and 'says short term', that he believed she would not be returning until November, and warns that 'the next thing they're going to do' would be to disable her systems again. Lashawnna explains she requested intermittent FMLA, the leave administrator coded it as continuous / short-term disability, the wrong form was sent to her doctor, and despite multiple corrective calls the records had not been updated.",
    linkedEventIds: ["e-2025-10-24-allan-call", "e-2025-10-13-fmla-request", "e-2025-10-16-access-deactivated", "e-2025-10-23-hartford-correction"],
    reliability: "confirmed-transcript",
    fileKind: "transcript",
    transcriptText: `Call with Allan Glover — October 24, 2025
Re: Intermittent FMLA misclassified as short-term disability / continuous leave

Shawnna: Other than that, there was an issue with PALS. I requested my intermittent FMLA. They put it in as short-term disability. Did they tell you about that?

Allan: No, they didn't share that with me. The only thing I received was one today. I didn't think you were going to be here because I got an email first thing this morning that said you were going on a leave effective yesterday.

Shawnna: Really?

Allan: Yes. That's what I received from them.

Shawnna: That's the same thing that happened last time.

Allan: So they don't disable you again like they did last time.

Shawnna: Right. They shouldn't disable me. I'm intermittent.

Allan: I'll send you the email they sent me today.

Shawnna: The message I sent PALS and Employee Relations basically said they coded my request for intermittent as continuous and short-term disability. They sent my doctor the wrong form and required me to have an unnecessary appointment.

I called back two days later because I noticed they put in the wrong type of leave. I didn't go off, but I let them know, "Don't even play with this. This is intermittent." They told me, "We're putting it in as intermittent."

I called back again later that day to make sure. They said, "We canceled it. We're putting in intermittent. We opened a ticket." I called yesterday. They never changed it. They never sent the papers to my doctor.

I said I'm approaching the 15-day certification window from the 13th. Please convert this to intermittent. I want reimbursement for my expensive doctor's appointment.

When I talked to Hartford, they said, "Oh my gosh, we see all the notes in here. We have no idea why this would even happen. This is crazy. We apologize."

I let them know I am in a super bad position at work right now, and this is putting me in an even worse situation because I was supposed to be out on FMLA. They said they would reach out and communicate it.

This has happened to me once with my agents in the past, and they were able to take care of it, but it was a little back and forth.

That email is helpful because I had no idea that was even happening.

Allan: The bad news is, I just sent you the email I received, which led me to believe you weren't going to be here today. It may look like they're doing it again because this email says short term.

Shawnna: Are you serious?

Allan: I just sent you the email. It says, "We wanted to let you know that The Hartford created a leave of absence claim for Lashawnna Harbin on 10/23."

It says the projected return-to-work date is based on the date that Lashawnna provided during the claim initiation process. The date may change if new information becomes available. It says they expect to make a claim decision on or before November 10.

All I have is this email, which led me to believe you were not going to be here and, at minimum, you weren't going to be returning until November.

Shawnna: What? Yeah, no. That has never even been a thing. I don't know where any of that came from.

Allan: You may want to follow up with them because the next thing they're going to do—

Shawnna: Is disable all my systems.

Allan: Right…

Shawnna: Well, that's okay. They can do that. Wow. Oh my God. I'm glad I know this because I would not know that was even happening. Looks like I have to call Hartford.

Allan: Yeah, I'll look into this too.

Shawnna: Of course. Thanks for this info.`,
  },
];

export const exhibitById = (id: string) => exhibits.find(e => e.id === id);
