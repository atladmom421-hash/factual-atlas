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
    filePath: "/exhibits/EX-002-record-deletion-oct-2025.docx",
    fileKind: "docx",
  },
  {
    id: "EX-003",
    exhibitNumber: "EX-003",
    fileName: "Nov–Dec 2025 — Hardship assistance delay / financial crisis timeline",
    date: "Nov–Dec 2025",
    category: "Hardship / financial",
    peopleIds: ["harbin", "hadley", "beck", "allan", "carfagna", "marcinko", "palmer", "hedrick"],
    summary: "Timeline of the Nov 13, 2025 hardship-assistance request, same-day 'SH Hardship' meeting on Allan Glover's calendar, Cameron Hadley's documentation requirements, Lindsay Beck's confirmation that approval was delayed under post-merger Capital One review, repeated escalations about imminent housing loss, and funds not received until on/around Dec 5, 2025 — at or after the eviction-related harm.",
    linkedEventIds: [
      "e-2025-11-13-hardship-submitted",
      "e-2025-11-13-sh-hardship-meeting",
      "e-2025-11-13-hadley-contact",
      "e-2025-11-17-hadley-meeting",
      "e-2025-11-17-docs-submitted",
      "e-2025-11-26-beck-housing-email",
      "e-2025-11-26-beck-reply",
      "e-2025-11-28-beck-followup",
      "e-2025-12-01-eviction-escalation",
      "e-2025-12-01-eviction",
      "e-2025-12-05-hardship-received",
    ],
    reliability: "confirmed-email",
    filePath: "/exhibits/EX-003-hardship-timeline.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-004",
    exhibitNumber: "EX-004",
    fileName: "July 10, 2025 — Race-related comments / hardship fund (narrative + Teams screenshots)",
    date: "July 10, 2025",
    category: "Protected activity",
    peopleIds: ["harbin", "allan", "cordi", "dide", "murphy"],
    summary: "Narrative + Teams-message record of the July 10, 2025 meeting in which Allan Glover gave a race-coded 'example' about Black employees and the hardship fund after Lashawnna asked about hardship-fund assistance for Araksan Dide (Black employee, homeless) — two weeks after she had assisted Brandi Cordi (White employee) with the same fund without any concern being raised. Includes the immediate post-meeting text to a coworker; the Teams follow-up exchange with Allan ('I was just providing an example of what could happen'); Allan's subsequent angry phone call ('What exactly are you trying to get to?'); same-day disclosure to Alison Murphy; and the parallel Reg Z/TILA-type compliance concern (returned mail, statement non-receipt, late fees) Allan met with 'keep your head down.'",
    linkedEventIds: [
      "e-2025-06-cordi-hardship",
      "e-2025-07-10-dide-housing-ask",
      "e-2025-07-10-allan-meeting",
      "e-2025-07-10-coworker-text",
      "e-2025-07-10-teams-followup",
      "e-2025-07-10-allan-call",
      "e-2025-07-10-coworker-witness",
    ],
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
    linkedEventIds: ["e-2025-10-leave-misclass", "e-2025-10-13-fmla-request", "e-2025-10-15-fmla-paperwork", "e-2025-10-wrong-paperwork", "e-2025-10-16-access-deactivated", "e-2025-10-23-hartford-correction", "e-2025-10-23-fmla-designation", "e-2025-10-24-allan-call", "e-2025-11-18-last-day", "e-2025-11-24-std-filed", "e-2025-12-08-doctor-std", "e-2025-12-15-correction-warning", "e-2025-12-22-corrected", "e-2026-01-02-emergency-approval", "e-2026-01-05-std-extension", "e-2026-01-insurance-loss"],
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
  {
    id: "EX-014",
    exhibitNumber: "EX-014",
    fileName: "May 29, 2024 — Formal complaint email \"Serious issues at work\"",
    date: "May 29, 2024",
    category: "HR complaint / formal notice",
    peopleIds: ["harbin", "carfagna", "rosanna", "marcinko", "anita"],
    summary: "Email to Anita Breisch, Dan Capozzi, Greg Carfagna, Susan Marcinko, Tracy Hedrick, Tammie McNerney, and Dea Palmer documenting Jan 2024 race-discrimination complaint, the racial slur used by Rosanna in a one-on-one witnessed by Lashawnna's mother, false job-abandonment finding during medical leave, repeated denied transfer/schedule requests, mid-shift waitlist failure, and the resulting EEOC charge.",
    linkedEventIds: ["e-2024-05-29-formal-complaint"],
    reliability: "confirmed-email",
    filePath: "/exhibits/EX-014-may29-2024-email.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-015",
    exhibitNumber: "EX-015",
    fileName: "May 31, 2024 — HR intake call with Susan Marcinko (transcript)",
    date: "May 31, 2024",
    category: "Transcript",
    peopleIds: ["harbin", "marcinko", "rosanna"],
    summary: "HR intake call transcript covering the racial slur, retaliation, the false job-abandonment finding during medical leave, project exclusion after the January complaint, and the mid-shift waitlist failure.",
    linkedEventIds: ["e-2024-05-31-hr"],
    reliability: "confirmed-transcript",
    filePath: "/exhibits/EX-015-may31-2024-hr-transcript.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-016",
    exhibitNumber: "EX-016",
    fileName: "June 5, 2024 — HR follow-up: interim move from Rosanna (transcript)",
    date: "June 5, 2024",
    category: "Transcript",
    peopleIds: ["harbin", "marcinko", "carfagna", "allan", "rosanna"],
    summary: "Susan Marcinko confirms a July 1 move to Allan Glover's organization after discussion with Greg Carfagna, with interim reporting through Allan so Lashawnna avoids one-on-one interactions with Rosanna during the investigation. Team moves with her.",
    linkedEventIds: ["e-2024-06-05-hr"],
    reliability: "confirmed-transcript",
    filePath: "/exhibits/EX-016-june5-2024-followup.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-017",
    exhibitNumber: "EX-017",
    fileName: "July 19, 2024 — Complaint to Anita re: Greg blocking rec-for-terms (transcript)",
    date: "July 19, 2024",
    category: "Transcript",
    peopleIds: ["harbin", "anita", "carfagna", "allan"],
    summary: "Lashawnna reports ER approved her rec-for-term paperwork but Greg Carfagna blocked it at the director step on a 'coaching documentation' requirement that peer TLs confirmed they were never asked to provide. Notes the rec-for-term was submitted on the 7th and kicked back; identifies peer comparators (Adrian Rose, DeJuan Jones); ties to prior protected activity.",
    linkedEventIds: ["e-2024-07-07-rec-term-submitted", "e-2024-07-19-anita", "e-2024-06-late-greg-assignment"],
    reliability: "confirmed-transcript",
    filePath: "/exhibits/EX-017-july19-2024-complaint.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-018",
    exhibitNumber: "EX-018",
    fileName: "July 19, 2024 — Anita follow-up: \"You did exactly the right thing\" (transcript)",
    date: "July 19, 2024",
    category: "Transcript",
    peopleIds: ["harbin", "anita", "carfagna", "allan"],
    summary: "After speaking with Greg, Allan, and ER's Nancy, Anita confirms Lashawnna's rec-for-term linking method was correct and was the standard, TL-faster path. The director-level objection was due to approvers not knowing how to navigate the linked disciplinary actions. No changes required; resubmit after confirming links. Lashawnna notes the delay forced her to retain low-performing employees an extra month, hurting her scorecard.",
    linkedEventIds: ["e-2024-07-19-anita-followup", "e-2024-07-07-rec-term-submitted"],
    reliability: "confirmed-transcript",
    filePath: "/exhibits/EX-018-july19-2024-followup.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-019",
    exhibitNumber: "EX-019",
    fileName: "Sept 19, 2025 — HR ticket summary referencing Greg retaliation (screenshot)",
    date: "September 19, 2025",
    category: "HR complaint / screenshot",
    peopleIds: ["harbin", "carfagna", "rosanna", "allan"],
    summary: "Screenshot of the HR complaint-ticket narrative: late-June 2024 notice that termination-bound employees would be moved onto Lashawnna's team in July; Greg Carfagna's refusal to process terminations without 'documented coaching'; HR's confirmation that no such documentation was required; peer-TL corroboration that no standard procedure mandated or suggested it; and Lashawnna's belief this was retaliation tied to her prior complaint against Rosanna and the EEOC charge.",
    linkedEventIds: ["e-2024-06-late-greg-assignment", "e-2024-07-07-rec-term-submitted", "e-2024-07-19-anita", "e-2025-09-19-complaint"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-019-sept2025-hr-ticket-screenshot.png",
    fileKind: "image",
  },
  {
    id: "EX-020",
    exhibitNumber: "EX-020",
    fileName: "July 10–17, 2024 — Peer TL conversations re: Greg's coaching-documentation requirement (transcripts)",
    date: "July 10–17, 2024",
    category: "Transcript",
    peopleIds: ["harbin", "adkins", "mata", "ascarte", "carfagna", "allan", "rosanna"],
    summary: "Contemporaneous notes from three separate peer-TL conversations — Kandace Adkins (July 10, 2024), Elisa MataAbarca (July 2024), and Ryan Ascarte (July 17, 2024) — each independently confirming that Greg Carfagna's additional 'documented coaching' requirement for performance terminations was not standard procedure, was never communicated to team leaders, was not in the Standard of Work or People Leader Guide, and was not being required of other TLs. Peers state HR confirmed month-end documentation was sufficient, that other TLs were able to process terms without the extra documentation, and that the inconsistent demand looked like targeting. Supports the inference that an additional, undisclosed requirement was selectively applied to Lashawnna's termination recommendations after her protected complaints, causing low-performing employees to remain on her team and depress her scorecard.",
    linkedEventIds: ["e-2024-07-07-rec-term-submitted", "e-2024-07-19-anita", "e-2024-07-19-anita-followup", "e-2024-06-late-greg-assignment"],
    reliability: "confirmed-transcript",
    fileKind: "transcript",
    transcriptText: `Peer TL Conversations re: Greg Carfagna's "Documented Coaching" Requirement
Contemporaneous notes — July 10–17, 2024

==========================================================
1) Transcript — Kandace Adkins & Shawnna Harbin — July 10, 2024
==========================================================

Kandace: Sooo they haven't met all of the criteria on the fact report. Our corrective action is: if you're not meeting the required months, that's termination. That's what the PAC report is for, to show.

Shawnna: Right.

Kandace: What confuses me is this: in the corrective action policy for performance term (showing CA policy on screen) it says nothing about coaching. Whether you coached or didn't, if they didn't meet, there's still a need for termination because their performance isn't where it needs to be. So what is the "extra" for?

Shawnna: Exactly. I'm confused too. Elisa said she had a term as well, and she didn't have any of this information. She even asked Rosanna in their department meeting, and Rosanna basically said, "Then we're just not terming them." She didn't really know what to say, but was like, "Yeah, going forward, that's what we're doing."

Kandace: See, that's the thing. When was this communicated to us as TLs? Because the expectation was always: use the pact report. If they're not meeting and you've had the conversations and corrective actions, put in the PAC report.

Shawnna: Exactly.

Shawnna: So I told Alan, "This is not normally something we'd need for termination." He was shocked .. said he had no idea. He told me Greg is looking for coaching documentation with dates.

Kandace: Right.

Shawnna: I don't know if Alan will come back to me with more, but we set a meeting. I told him I was concerned because everyone else is able to term their agents, and mine are being held up for something I had no control over. I don't even know what documentation they're talking about.

Alan said he'd talk to Greg to see if you had anything, since Greg told him that's what was needed. But I only had them for a month.

Kandace: Yeah. We can just wait for Alan to talk to Greg. I already let him know: "No one knows about this. It hasn't been communicated." So if we don't have that information, what's Greg going to do now?

Shawnna: Exactly.

Kandace: I think I only have one coaching for Adrian. But here's the thing: when Adrian came to me, Courtney had already left the company. I couldn't go back to her for documentation. I only had what she handed off.

When Adrian came to me in June, she said she'd been needing a docking station for months. She and Courtney had contacted GSD, but GSD wouldn't send one until her old one completely crashed. So she'd been struggling.

I called GSD myself, explained the situation, and they said they'd never heard of such a requirement. They sent her a new docking station right away. She had it within about five days.

So when she showed up on util, I didn't do an in-depth audit because the issue wasn't her — it was equipment. I reset expectations: "You've got your equipment now, get it together by the end of the month."

Shawnna: That makes sense. That's realistic.

Kandace: Exactly. I have chats, GSD tickets, and incident dates. But I only did maybe one formal coaching, since it was a known equipment issue.

For May, I thought she was term-eligible, but the handoff said May was a "free month" because her corrective was late. That blocked me from recommending termination then. So my plan was: in July, after June stats finalized, I'd do the RFT. But she got moved to you.

Shawnna: Right. And if she had been yours earlier, she wouldn't have made it this far.

Kandace: Exactly. He's been here a year already. Honestly, this is my first time doing a performance termination. Most TLs don't document coachings outside of month-ends. We keep chats and documentation, but not formal "coaching logs" for every little thing.

And with Adrian's attendance in June alone, she called off eight times. The only week she didn't call off, I was on vacation. When I came back, she was only present two of three days. I've barely seen her. So there's hardly anything to document anyway.

Shawnna: Right.

Kandace: Honestly, if they expect "coaching documentation" on top of PAC reports and month-ends, then where is that communication? Because month-ends are supposed to be the documented performance conversation.

Shawnna: Exactly.

Shawnna: I even talked to HR. They confirmed all my documents were there. Yet Greg is holding it up.

Kandace: That's unfair. If others can process terms without it, but yours are being blocked, that looks like targeting.

Shawnna: Exactly my concern.

Kandace: Allan seems supportive, though. He said, "Hold us accountable as leaders if we're not doing the right things." So now is the time … he needs to fight for you.

Shawnna: Yes, I did push back with him. I told him these agents should never have even come to me. They should've been gone under their previous TL. But the accountability wasn't there. Now I'm stuck with the fallout.

Kandace: That's unfair.

Shawnna: Exactly.

Kandace: Have you checked the Standard of Work?

Shawnna: Yes, I went through it. There's nothing in there about needing documented coachings beyond month-ends. HR told me: if it were a requirement, it would have to be across the business, not something Greg suddenly decides.

Kandace: Right.

Kandace: So, HR has approved everything. If Greg wants a new process, it has to be updated in Standard of Work and communicated.

Shawnna: Exactly.

Shawnna: Elisa asked in her meeting whether month-ends count as coachings, and Rosanna said no. Which makes no sense — month-ends are documented TL-to-agent conversations about performance. If those don't count, then why do we do them?

Kandace: Exactly! So yeah … this feels like targeting. I was even going to take today off, but when I saw all this, I knew I had to get everything lined up.

Shawnna: I get it. This is exhausting.

Kandace: Yeah. But I'll keep pushing. I'll give you what I do have, and we'll let Allan advocate.

Shawnna: Perfect. Thanks for your insight.

Kandace: Of course. You've got my support — and other TLs feel the same way.

Shawnna: Good. Okay, I'll let you know what happens.

==========================================================
2) Transcript — Elisa MataAbarca & Shawnna Harbin — July 2024
==========================================================

Elisa: This is the most stupid thing ever. Like, I was mad. I just wasn't even trying to hide it anymore at that point. Because literally, I'm just avoiding risk and stuff. I was like, "Okay, so what about the people we fired in the past where documentation wasn't required?"

And she goes, "We just need to cover your back … liability in case of something."

I was like, "Whatever." Then I asked, "So is this going to be the expectation moving forward? Because if so, we need to have a bigger conversation about this with everybody." Because I can tell you right now, nobody knows this is an expectation.

Is the expectation to document coaching? Yes. Are we the best at that? Probably not. Even Courtney said, "I'm not the best at it."

And she told me, "As long as you coach it this month, that will suffice for your situation."

I said, "We cover this in month-end." She replied, "Well, it would be documentation, but it wouldn't be enough — it should be done through Linked as a coaching."

Well, and in Workday, when we do the final, you have to talk about it, right? I can't even administer it without the agent acknowledging it — they get a notification. Like, what?

I'm just so over this. I'm annoyed. I'm already pissed. I asked her that because it's stupid. I said, "You need to make sure this is communicated to everyone, because I was not under the impression that this was the case, and it hasn't been in the past."

Me: Exactly. Yeah, like today's the first day everyone is basically hearing about this new expectation —

Elisa: — and that's only because you brought it up.

Me: Right! If I hadn't said anything, no one would've known.

Elisa: But apparently, she's like, "Greg is not going to approve it." And I'm like, "So what, we just let the agent impact our stats moving forward?"

And she couldn't answer that. She doesn't know what happens if Greg declines it but HR approves it. So I'm like, "What now?" Because then HR's going to get on us for, "Hey, why didn't you term this agent when you should have?"

Me: Exactly. That's what I told HR — I don't want to get held liable for anything. That's why I needed to know if this was specific to me or if it's an actual procedure.

Elisa: See, I don't think it's procedure. I think it's just something they made up.

Me: Exactly! But they haven't communicated it until now. I'm the first person who's even heard of this.

Elisa: Exactly. We talk to them about their stats every day — utilization, DPA, all of it. Month-end is documentation. Like, how can you say it's not?

Me: And these agents — honestly, they're some of the worst I've ever had. So we're just going to let them keep impacting our numbers because someone suddenly decided we need extra paperwork? That makes no sense.

Elisa: Right.

Me: And I talked to Allan too — he said, "Hmm, interesting…" Like even he didn't know what to say. He told me, "I'll try to figure it out, I'll take care of it."

Elisa: Because yeah, if you're not going to approve it, then what happens next?

Me: Exactly — so no one's getting fired anymore? Is that what's happening?

Elisa: Right! Like, what?! And I know Rosanna's just mad I fought her on it. But I don't care. If it's going to impact my performance, I need to know about it.

If you've got a new expectation, communicate it. Say, "Hey, moving forward, we're not going to approve terms unless you have documentation." Then fine, we'll do it moving forward.

Me: But don't suddenly say, "Oh, we didn't tell you, but now we're holding you to it."

Elisa: Exactly. And they're always saying it's "in the standard of work" or "in the people leader guide."

Me: Right. And HR already said once something's approved, we're covered. Nancy literally shared her screen and said, "Yeah, this is all we ever need — you're good to go."

Elisa: Oh wow.

Me: Exactly. Poor Allan's caught in the middle. I told him, "My butt's covered — I did everything right. If the agent's still here, that's on you." And the agents in question — one has like 2% DPay and the other is chronically underutilized. They're legendary for being bad. That's insane.

Elisa: Yeah, it's ridiculous. So I fought her on it, and she said she'd ask about it. I told her, "You better, because they're not going to just pull this out of nowhere."

Me: Right. We need answers.

==========================================================
3) Transcript — Ryan Ascarte & Shawnna Harbin — July 17, 2024
==========================================================

Ryan: You talked about it, it was on their month end and they signed their month end. So regardless, and as long as the month end said "can result in disciplinary action" —

Me: Which I put in every month end..

Ryan: Then there should be no issue.

Me: Right. That's exactly what I'm saying. And I know there's other people who had performance terms that didn't have to provide that information. So I'm like, okay, well, so why is this happening now? You know, like — what's up with that?

Ryan: So, uh, yeah, I don't know. That's weird. From my understanding, you don't ever have to put any of that. So unless it's just Greg's exception — but at the same time, if that's how it is, then why wasn't this rolled out to everybody? Like, every team leader should instantly be able to tell you, "oh yeah, you need to include your documented link coachings." You ask every team leader, nobody's going to say that.

Me: Right, right. That's what I'm saying. So I'm like, okay, so why is it just me having to provide this? You know? Like, that doesn't make sense to me.

Ryan: And they're just dragging down your stats this month?

Me: Right. And these are, like, really bad agents. Like, I just got them. You know? Like, I just got them. So I'm like, what?

Ryan: So once you get rid of them, you're just going to sweep everybody.

Me: Man, just going all in. Yeah. I was going to say, I think I'm going to be holding on to try not to get last place next month, but it's fine. Let's struggle.

Ryan: I doubt you'll be in last place. You're always in like top three at least. Honestly, if I was ever last place, I'd be freaking out. I wouldn't even talk to anybody. I'd just be auditing people all day yelling at people. You and I just seem like that way — we're just competitive.

Me: Yeah.

Ryan: Yeah, I would keep fighting on it, bother Greg, or set a meeting with Greg and be like, "Well, you can put a survey out to all team leaders, because I've talked to X amount and not a single person has mentioned that. So like, when was this communicated?" I mean, ultimately I'd be like, "it's your department, you can do whatever you want," but at the same time, it's not necessarily fair that we're treating this agent one way when we fired other people for the same thing.

Me: Right, right. Exactly. Exactly, yeah. And I mean, it just has to be across the board, you know? Like, it can't be like, "Well, Shawnna, you need to provide all these other ex." And these — it would be different if they were like my people. But I got them as like, "you have to term them when you get them," basically, you know?

Ryan: Oh, well, and that's a good point, Shawnna. That's actually especially an exception. It's like, "well, this wasn't even my person, so how can I send you documentation when I wasn't in charge of this?" I shouldn't be, like, you know. I have no clue on that. That's just — that's crazy.

Me: Well, I'm glad I'm not hallucinating because I was like, I could have swore this was what you needed to provide.

Ryan: Yeah. I can't believe it's not approved. Yeah. Yeah, yeah. When did you do this?

Me: Well, I submitted it on the 7th I think.

Ryan: So it's been like a cool 10 days. Was it for Util?

Me: Yeah, both for Util.

Ryan: Oh, okay.

Me: Yeah, I mean, but they're just like terrible. You know, like 9, 8% Direct pay. Like, just ridiculous. They're aware that they're up for termination, you know? So they're asking me, like, "What's going on? Like, am I losing my job or not or what?" And I'm like, honestly, like, I don't even have a clear answer for you right now because it's just under review, you know? So like, they're waiting to see, you know — I'm waiting to see. And it's just like a hot mess, dude.`,
  },
  {
    id: "EX-021",
    exhibitNumber: "EX-021",
    fileName: "Hardship Assistance / Financial Crisis Timeline (narrative)",
    date: "Nov 13 – Dec 5, 2025",
    category: "Hardship / financial",
    peopleIds: ["harbin", "hadley", "beck", "allan", "carfagna", "marcinko", "palmer", "hedrick"],
    summary: "Narrative timeline tying together: pre-hardship loss of income from unpaid intermittent-FMLA hours (salaried but unpaid for partial-day FMLA); Nov 13, 2025 hardship request and attestation (~$4,950, above $1,000 attestation threshold and below $5,000 exception-only threshold); same-morning 'SH Hardship' calendar meeting with Marchinko / Allan Glover / Carfagna; Cameron Hadley contact and Nov 17 documentation requirements (rent, bills, treatment receipt, police report); same-day documentation submission; Nov 24 STD filing; Nov 26 urgent housing email to Lindsay Beck and her reply citing post-merger Capital One review; Nov 28 follow-up; Dec 1 escalation to Beck, Glover, Palmer, Marchinko and Hedrick before the 11:00 a.m. MT eviction hearing, noting Lashawnna and her son had been sleeping in her car; Dec 1 eviction; Dec 3 STD still under Hartford review; funds received ~Dec 5, 2025 — at or just after the eviction-related harm. Approximately 22 days after the initial request and 18 days after documentation was submitted, contrary to the policy's twice-weekly funding cadence once complete documentation is received.",
    linkedEventIds: [
      "e-2025-11-13-hardship-submitted",
      "e-2025-11-13-sh-hardship-meeting",
      "e-2025-11-13-hadley-contact",
      "e-2025-11-17-hadley-meeting",
      "e-2025-11-17-docs-submitted",
      "e-2025-11-24-std-filed",
      "e-2025-11-26-beck-housing-email",
      "e-2025-11-26-beck-reply",
      "e-2025-11-28-beck-followup",
      "e-2025-12-01-eviction-escalation",
      "e-2025-12-01-eviction",
      "e-2025-12-05-hardship-received",
    ],
    reliability: "confirmed-email",
    filePath: "/exhibits/EX-021-hardship-financial-crisis-timeline.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-022",
    exhibitNumber: "EX-022",
    fileName: "Dec 2024 – May 2026 — Schedule Movement, Flexibility & Comparator Timeline Evidence",
    date: "Dec 2024 – May 2026",
    category: "Comparator / schedule evidence",
    peopleIds: ["harbin", "millisock", "samuel", "case", "cahoon", "walker", "mcgregor", "faulkner", "mascarenas", "rinard", "buhler", "mata", "boyd", "ross", "clark", "lesure"],
    summary:
      "Eighteen-page comparator evidence statement covering 15 months of schedule screenshots (Dec 2024–May 2026). Documents that while Lashawnna — a consistently high-performing Black leader, frequently #1 in Consumer Banking with a history of 4 ratings — remained fixed on the 1:30 PM–10:00 PM closing schedule, multiple non-Black peers received earlier AM, midshift, and department-movement placements (7:45/8:00/8:30 AM–4:30 PM; 10:00–6:30; 11:30 AM–8:00 PM). Key sections: (II) background and performance history including the post-EEOC 'solid' rating drop; (III) schedule data reviewed; (IV.A) Tyler Millisock — same April 3, 2023 start date, White, lower-to-medium performer, stated he was NOT on the waitlist, NO ticket identified, yet moved to PRE-D / DBC on earlier shift; (IV.B) Tyler month-by-month schedule comparison Jan 2025–Oct 2025; (IV.C) March 2025 movement planning; (IV.D) Hunter Samuel — moved from another department into AM shift Lashawnna would have accepted; (IV.E) Marc Case — same-shift flexibility, allowed to leave ~1 hr early while Lashawnna absorbed the work; (IV.F) Julie Cahoon — Karena Lesure coach-request concession; (V) other-leader movement patterns (Walker, McGregor, Faulkner, Pay Pro/PRE-D group); (VIII) consolidated comparator chart; (IX) investigative questions on waitlist, ticket, performance, and movement inconsistencies. Directly defeats any 'no flexibility was available' or 'PM was the only leadership schedule' defense.",
    linkedEventIds: [
      "e-2024-04-26-not-on-waitlist",
      "e-2025-02-22-jen-deleted",
      "e-2025-07-16-waitlist-readded",
    ],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-022-schedule-movement-comparator-evidence.pdf",
    fileKind: "pdf",
  },
];

export const exhibitById = (id: string) => exhibits.find(e => e.id === id);
