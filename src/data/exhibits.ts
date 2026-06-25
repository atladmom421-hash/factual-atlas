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
    "e-2025-12-15-correction-warning", "e-2025-12-22-to-jan-2-nopay", "e-2026-01-02-emergency-approval", "e-2026-01-05-std-extension", "e-2026-01-insurance-loss"],
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
    linkedEventIds: ["e-2025-10-verint", "e-2025-10-21-verint-email"],
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
    linkedEventIds: ["e-2025-10-leave-misclass", "e-2025-10-13-fmla-request", "e-2025-10-15-fmla-paperwork", "e-2025-10-wrong-paperwork", "e-2025-10-16-access-deactivated", "e-2025-10-23-hartford-correction", "e-2025-10-23-fmla-designation", "e-2025-10-24-allan-call", "e-2025-11-18-last-day", "e-2025-11-24-std-filed", "e-2025-12-08-doctor-std", "e-2025-12-15-correction-warning", "e-2025-12-22-corrected", "e-2026-01-02-emergency-approval", "e-2026-01-05-std-extension", "e-2026-01-insurance-loss", "e-2025-10-14-fmla-notice", "e-2025-12-22-to-jan-2-nopay"],
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
    linkedEventIds: ["e-2023-temp-pm", "e-2024-10-14-shift-doc", "e-2025-02-18-still-temp", "e-2025-07-17-readded", "e-2024-05-permanent-pm-misrepresentation", "e-2026-04-22-jake-wave2-transcript"],
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
    "e-2026-04-23-frankie"],
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
    linkedEventIds: ["e-2025-10-24-allan-call", "e-2025-10-13-fmla-request", "e-2025-10-16-access-deactivated", "e-2025-10-23-hartford-correction", "e-2025-10-wrong-paperwork"],
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
    transcriptText: `July 19, 2024 — Complaint Call with Anita (HR)
Participants: Shawnna Harbin and Anita (HR)
Topic: Greg Carfagna blocking ER-approved rec-for-term paperwork based on a "coaching documentation" requirement not applied to peer TLs

[Opening small talk re: Arizona heat, family, travel]

HR Anita: Okay, so I'm going to start with what you wrote just so I can take notes based off of each piece of it, if that makes sense. Because I have gone over it. I do have some questions but I think I'll go back and forth if I start with whatever I want. So anyway.
Me: Can I ask you a question real quick? Because, oh, man, honestly, like, even bringing this up, like, it's really put me under, like, just a weird headspace and just like a lot of anxiety and whatnot, to be honest. And after I wrote, I really felt like, you know, maybe I should just, you know, because I don't know. I just feel like, you know, making complaints or whatever, even though I really feel like shady things are happening. I just feel like I don't even know if it's worth it to say anything anymore at this point, you know? Honestly.

HR Anita: Well, let me just skip to one piece of it. Okay. So when you say about the documentation, I'm assuming it's for performance and it's for a termination, a rec for term versus a final or a formal, right?
Me: Right.
HR Anita: Okay, so my first question is, who in ER did you talk to? Because we have different roles. The advisors are the ones that look at all the corrective action. My understanding for non-exempts — I get it for exempts, which are far between because that's the caliber of an exempt versus a non-exempt — but my understanding, and I'll have to get clarification because I'm not the expert, but my understanding on a performance rec for term, documentation is required, which —
Me: Correct. It is.
HR Anita: Maybe the difference is coaching versus documentation to show that you're treating everyone the same. Because I thought they had to, in the rec for term, you had to add the documentation that says, well, not only Joe Schmo, but Susie and whatever, and they're also not meeting, but they're not at the same point in the process. So you're correct. I have that right, right?
Me: Right. It's just the coaching.

HR Anita: So for clarification, it's just the coaching piece that you feel is added on or nuanced, right? Carfagna is requiring this, yet it's not been a requirement for some of your peers.
Me: Right, yeah. When I met with all of the other TLs and they were like, I've never had to provide this information, never heard of it. Like, where did you hear that?

HR Anita: I see exactly where you're saying. I'm wondering — you mentioned that the other team leader left the company, and that's why you got these employees that aren't making your staff.
Me: So they actually went to another TL who's here, and then they moved from her to me, but she's still here.
HR Anita: And how long did the other TL in between have them?
Me: She had them one month.
HR Anita: One month. Okay. So the team leader that the issue started with isn't here anymore. I don't know if this is a case — I wouldn't tell you if that team leader was let go.
Me: Well, she wasn't let go. She had another job already lined up.
HR Anita: I was just thinking, if it was a team leader that really wasn't doing their job in coaching and making sure coaches were providing the coaching, maybe that was the concern for Carfagna. I don't know.

Me: So just to give you a little context on the coaching part — this is something we would coach to as TLs. Let's say they don't meet utilization, inbound or outbound. We'll meet with them and let them know, hey, this is something that could lead to corrective action. So he's asking for that documented conversation, but what I want to tell you is that no TL documents that at this time. So that's not even a thing.

HR Anita: So let me step back. Did you submit some rec for terms, so it went through up to ER. Did ER approve it?
Me: ER approved it. Right.
HR Anita: ER approved it, then the last person for a rec for term is the director, so it would be Carfagna. And then he kicked it back? I got that right?
Me: Yes. So I submitted it on the 7th and it's been by-passed again.
HR Anita: How many did you have?
Me: Two.
HR Anita: Two. So you had two rec for terms that went through all the approvals up until the last approval, which is Carfagna, and Carfagna declined it or wouldn't approve it.
Me: Correct.

HR Anita: Okay. And so basically that's the evidence for you that leads you that — where you feel, hey, does this have something to do with my prior complaints? Because it's out of the norm from what you understand from other leads. Is that right?
Me: Right. And I've even submitted a performance termination and had it approved in the past with just the same information. So that's why I felt so confident. I'm like, okay, cool, we're good to go. And then I got that feedback. There is a difference on the documentation that is standard between the conduct or work-avoidance related stuff, where we're giving more context and describing the conversation we're having with them.
HR Anita: Right. Different kind of detail included in that.
Me: Yes. He's using that as an example. Like, he wants that. But I'm like, this is the standard and this is what's been happening. And nobody else is doing it. When I talked to all the other TLs, they were like, we don't do that. So what's going to happen to our terms?
HR Anita: When you say you've talked to all of them, are they everybody in Carfagna's organization?
Me: All in my call channel, in LVAR.

HR Anita: Okay, so let me tell you what I would like to do. I can start with — who did you say you report to?
Me: Allan.
HR Anita: Okay. I can start with Allan or go straight to Carfagna. It doesn't really matter. I want your preference, but I want to understand the situation — is there confusion — and give them the opportunity to speak to it. Whether that's your DM Allan or just go straight to Carfagna, because I don't know the answer. I don't know if this is new for Carfagna or just getting rolled out, but to your point, it needs to be consistent across all the team leaders. I do know it's just like with this painful attendance requirement that was paused until May and then got pushed until now and is finally back. Some businesses already had the requirement that is now in place since the 15th — documenting that you had a conversation with the employee and provided the PIPs information. In some businesses they already had that requirement, and if they weren't doing it, the team leader was getting deemed and coached. So there are some business units that require more regardless of what the requirements are from an HR perspective. It doesn't sound like you're aware of that or the team leaders are aware of that. Who's the name of the two employees that you submitted it for?
Me: Adrian Rose and DeJuan Jones.
HR Anita: DeJuan?
Me: Yep, D-E-J-U-A-N.
HR Anita: Yeah, I would never have gotten that right. What'd you say the last name was?
Me: Jones.

HR Anita: All right, so that is where I would take it at this point. I just want to make sure we're on the same page.
Me: Yeah, definitely, because I just feel like I'm not getting a straight answer. I would just like to know what is the requirement then? Because it's very mysterious and unclear, you know? I'm just not getting straight answers. So if you could talk to Greg, I mean —
HR Anita: Yeah. Okay, I will do that. It's Friday. But I will get on the schedule now. Does Greg have an admin? Do you know?
Me: Yes. I can look it up.
HR Anita: I have access to look it up. But sometimes it's easier to go through the admin. I will do that next week. I just want to give you my timeline — I usually take a lot of days off the last two weeks of July, one because it's a state holiday on Wednesday the 24th. And then it's my son's birthday, he's coming home from school Tuesday of next week and home through Monday the 29th. So I've got some intermittent time off. I don't want you to think I'm not getting to it.

HR Anita: Carfagna is in Arizona too, isn't he?
Me: Yep, he's in Arizona.
[Brief small talk re: Arizona/California travel, Disneyland, San Diego, Oregon trip, landscaping/AC]

HR Anita: Okay, so that will be my next step, and I will follow up with you as soon as I can get on his schedule. I'd rather get back to you next week than the following week at the end of the week when I'm back. So I will get back to you so I can better understand. I'm glad I have the names. So they had a formal, a final, where they didn't meet — and you guys are collections — so they didn't meet, they hit the formal three out of five months.
Me: Right.
HR Anita: Then they hit the final when they didn't hit two out of five months.
Me: Yeah.
HR Anita: And then they hit the rec for term when they missed one more, right?
Me: Right. Four months. Yep. And then I got them.
HR Anita: All right. I will look into it so I have an understanding and then I'll follow back up with you.
Me: Sounds good. Thank you so much.
HR Anita: Okay. Take care. Stay cool.

[Closing small talk re: weather, Google Nest thermostat, an unrelated workforce-management JAban case ("Robin"), end of week]
HR Anita: All right. Take care, Shawnna, and we'll talk to you soon.
Me: All right.`,
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
    "e-2025-marcinko-reyes-report"],
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
      "Eighteen-page comparator evidence statement covering 15 months of schedule screenshots (Dec 2024–May 2026). Documents that while Lashawnna — a consistently high-performing Black leader, frequently #1 in Consumer Banking with a history of 4 ratings — remained fixed on the closing schedule (ending 10:00 PM ET), multiple non-Black peers received earlier AM, midshift, and department-movement placements (7:45/8:00/8:30 AM–4:30 PM; 10:00–6:30; 11:30 AM–8:00 PM). Key sections: (II) background and performance history including the post-EEOC 'solid' rating drop; (III) schedule data reviewed; (IV.A) Tyler Millisock — same April 3, 2023 start date, White, lower-to-medium performer, stated he was NOT on the waitlist, NO ticket identified, yet moved to PRE-D / DBC on earlier shift; (IV.B) Tyler month-by-month schedule comparison Jan 2025–Oct 2025; (IV.C) March 2025 movement planning; (IV.D) Hunter Samuel — moved from another department into AM shift Lashawnna would have accepted; (IV.E) Marc Case — same-shift flexibility, allowed to leave ~1 hr early while Lashawnna absorbed the work; (IV.F) Julie Cahoon — Karena Lesure coach-request concession; (V) other-leader movement patterns (Walker, McGregor, Faulkner, Pay Pro/PRE-D group); (VIII) consolidated comparator chart; (IX) investigative questions on waitlist, ticket, performance, and movement inconsistencies. Directly defeats any 'no flexibility was available' or 'PM was the only leadership schedule' defense.",
    linkedEventIds: [
      "e-2024-04-26-not-on-waitlist",
      "e-2025-02-22-jen-deleted",
      "e-2025-07-17-readded",
    "e-2026-04-22-jake-wave2-transcript"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-022-schedule-movement-comparator-evidence.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-040",
    exhibitNumber: "EX-040",
    fileName: "Shift Changes SOW — Revision History (KaTrina Williams → Tyler Wilding, 1/17/23 – 3/25/25)",
    date: "Jan 17, 2023 – Mar 25, 2025",
    category: "Policy / governing rule",
    peopleIds: ["katrina-williams", "tyler-wilding"],
    summary: "Revision-history page of Discover's internal 'Shift Changes SOW' governing TL shift change requests and the waitlist. Key 7/3/2023 revision by KaTrina Williams: 'Added word \"permanent\" to sentence: TLs need to be in TL role for 1 year before a permanent shift adjustment can be made.' Harbin became a TL on April 3, 2023 — meaning by April 3, 2024 she had satisfied the company's own prerequisite for a permanent shift adjustment, and has continued to satisfy it for the entire 2024–2026 window at issue. Tyler Wilding took ownership 1/3/2024 with subsequent risk-rating and process updates (1/4/2024, 4/5/2024, 3/25/2025). Establishes that there is in fact a written policy governing the very process from which Harbin was repeatedly excluded.",
    linkedEventIds: [
      "e-2023-07-03-sow-1yr-rule",
      "e-2024-04-03-harbin-1yr",
      "e-2024-04-26-not-on-waitlist",
      "e-2024-05-permanent-pm-misrepresentation",
      "e-2025-02-22-jen-deleted",
      "e-2025-07-14-jen-allan-waitlist",
      "e-2025-07-17-readded",
      "e-2025-mid-allan-2yrs-thread",
    ],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-040-shift-change-sow-revisions.png",
    fileKind: "image",
    governingRule: {
      shortName: "Shift Changes SOW — 1-year-in-role rule",
      rule: "TLs need to be in TL role for 1 year before a permanent shift adjustment can be made.",
      citation: "Discover internal 'Shift Changes SOW,' revised 7/3/2023 by KaTrina Williams (added the word 'permanent'); current owner Tyler Wilding (1/3/2024 – 3/25/2025).",
      appliedFrom: "Harbin: TL since April 3, 2023 — prerequisite satisfied April 3, 2024 and continuously thereafter.",
    },
  },
  {
    id: "EX-041",
    exhibitNumber: "EX-041",
    fileName: "July 14, 2025 — Jen Roy waitlist message to Allan Glover (Harbin: LVAR PM → AM)",
    date: "July 14, 2025",
    category: "Schedule / waitlist",
    peopleIds: ["jen-roy", "allan", "harbin", "samuel"],
    summary: "Teams thread: Allan Glover asks Jen Roy where Harbin falls on the waitlist; Jen replies with a five-row 'Shift Change Request' snapshot listing Nameer Khan (PreD, PM→MID), Courtney Griffith (Chat, MID→AM), Caton Woods (HVAR, MID→AM), Dominic Daniels (MVAR, PM→AM), and 'Shawnna Harbin LVAR PM → AM.' Confirms (a) Harbin was actively requesting AM as of July 14, 2025, (b) Jen Roy personally maintained and circulated the list, and (c) Harbin appears at the bottom of the request stack even though the Feb 25 and Jul 3 waitlist snapshots show juniors with later request dates ahead of her.",
    linkedEventIds: ["e-2025-07-14-jen-allan-waitlist", "e-2025-07-14-screenshot", "e-2025-07-17-readded", "e-2025-07-03-waitlist-harbin-absent"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-041-jen-roy-waitlist-to-allan-2025-07-14.jpg",
    fileKind: "image",
  },
  {
    id: "EX-042",
    exhibitNumber: "EX-042",
    fileName: "Allan Glover Teams thread — 'I've been requesting midshift for 2 years' / 'Demoting to a coach?'",
    date: "Mid-2025 (Wednesday 3:12 PM – Yesterday 5:31 PM)",
    category: "Protected activity / acknowledgment",
    peopleIds: ["harbin", "allan"],
    summary: "Teams chat in which Harbin tells Allan Glover: 'I may have to resign unfortunately if I'm unable to work a different schedule. It sucks but I just miss seeing Atlas and this just isn't right. I've been requesting midshift for 2 years lol.' Allan replies 'I understand and keep pushing.' Harbin then asks whether anyone would switch schedules permanently, or whether she could move to a coach role to get an earlier schedule. Allan answers 'I can check for sure' / 'I will check.' Establishes (1) Harbin's own contemporaneous statement that the request had been pending for two years, (2) management acknowledgment of the request and resignation/demotion risk without dispute of the two-year figure, and (3) Harbin's willingness to demote in order to access the earlier schedules being granted to less-senior White peers.",
    linkedEventIds: ["e-2025-mid-allan-2yrs-thread"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-042-allan-acknowledges-two-years-waitlist.jpg",
    fileKind: "image",
  },
  {
    id: "EX-043",
    exhibitNumber: "EX-043",
    fileName: "April 26, 2024 — Ryan Tafoya iMessage: 'you not currently on the MID shift list'",
    date: "April 26, 2024",
    category: "Schedule / waitlist",
    peopleIds: ["harbin", "ryan-tafoya"],
    summary: "iMessage thread, April 26, 2024 1:56 PM. Harbin to Ryan Tafoya: '…wanted to confirm that I'm on the wait the for mid-shift.' Ryan replies: 'Let me check fo you. One moment,' then: 'I just confirmed that you not currently on the MID shift list. I can submit on your behalf. Can you send me a quick email and ill get submitted?' Also captures Harbin's prior question to Shawnna H.: 'If any agent moves to Midshift is there any possibility that they could stay on my team?' — answered 'Possibly, We want to ensure they are supported from a shift perspective, and they dont go long without Tl coverage.' Contemporaneous, third-party-witnessed proof that despite Harbin's requests, she was NOT on the waitlist on April 26, 2024 — the foundational fact of the entire waitlist dispute.",
    linkedEventIds: ["e-2024-04-26-not-on-waitlist"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-043-ryan-tafoya-waitlist-check-2024-04-26.jpg",
    fileKind: "image",
  },
  {
    id: "EX-044",
    exhibitNumber: "EX-044",
    fileName: "July 3, 2025 — Current TL Shifts waitlist snapshot (Harbin absent; 5 juniors qualify)",
    date: "July 3, 2025 (snapshot taken 10/4/2025)",
    category: "Schedule / waitlist",
    peopleIds: ["jen-roy", "markus", "harbin"],
    summary: "SharePoint 'Current TL Shifts August 2025.xlsx' Version History viewer, captured 10/4/2025 at 10:43 PM, viewing the July 3, 2025 2:28 PM saved version (co-edited by Edina Markus and Jen Roy). The 'Current Waitlist' table contains five TLs — Nameer Khan (MID, 2/28/2023, 28.77 months, PM, Permanent, Qualifies Yes), Courtney Griffith (AM, 8/13/2024, 25.27 months, AM, Temporary, Yes), Caton Woods (AM, 9/1/2023, 22.23 months, MID, Temporary, Yes), Leslie ArreolaPena (MID, 5/20/2025, 26.43 months, PM, Permanent, Yes), Dominic Daniels (AM, 6/16/2025, 21.40 months, PM, Permanent, Yes). Harbin is NOT on this list — despite the July 14, 2025 Jen Roy chat (EX-041) showing she was actively requesting LVAR PM → AM, and despite having been on the January 22, 2025 list (EX-046) at position 6.",
    linkedEventIds: ["e-2025-07-03-waitlist-harbin-absent", "e-2025-07-14-screenshot", "e-2025-07-14-jen-allan-waitlist", "e-2026-04-22-jake-wave2-transcript"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-044-waitlist-2025-07-03.jpg",
    fileKind: "image",
  },
  {
    id: "EX-045",
    exhibitNumber: "EX-045",
    fileName: "Feb 25, 2025 — Jen Roy waitlist edit removing Harbin (8-row list, 4 of 5 edits this day by Jen Roy)",
    date: "February 25, 2025",
    category: "Deleted / altered records",
    peopleIds: ["jen-roy", "markus", "harbin"],
    summary: "SharePoint Version History panel for the Current TL Shifts file showing FIVE separate Jen Roy edits on Feb 25, 2025 (10:53 AM, 12:01 PM, 12:46 PM, 7:22 PM, 7:31 PM) — plus an earlier Lilly Cano / Edina Markus edit at 10:27 AM. The visible 12:01 PM version of the 'Current Waitlist' table contains 8 highlighted rows (Nameer Khan MID, Cody Christensen AM, Kandace Adkins AM, Kaitlin Reed AM, Cory Galt AM, Hunter Samuel MID, Courtney Griffith AM, plus one more) — and Lashawnna Harbin is NO LONGER ON THE LIST, even though she appeared at row 6 of the January 22, 2025 snapshot (EX-046) with shift requested AM, date 6/26/2024, Temporary status, Qualifies = Yes. Establishes: (1) Harbin was on the waitlist in January, (2) Jen Roy made multiple edits to the file on Feb 25, 2025, and (3) by 12:01 PM that day Harbin had been removed.",
    linkedEventIds: ["e-2025-02-25-jen-removes-harbin"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-045-waitlist-2025-02-25-jen-removes-harbin.jpg",
    fileKind: "image",
  },
  {
    id: "EX-046",
    exhibitNumber: "EX-046",
    fileName: "Jan 22, 2025 — Current TL Shifts waitlist snapshot (Harbin row 6, AM requested 6/26/2024, Qualifies = Yes)",
    date: "January 22, 2025 (9:36 AM saved version)",
    category: "Schedule / waitlist",
    peopleIds: ["markus", "harbin", "samuel"],
    summary: "SharePoint Version History viewer showing the January 22, 2025 9:36 AM saved version of the Current Waitlist (co-edited by Lilly Cano and Edina Markus — Jen Roy NOT yet on this version). 10-row table: Nameer Khan (MID, 2/28/2023, PM, P, Yes), Cody Christensen (AM, 1/2/2024, 21.23, AM, T, Yes), Kandace Adkins (AM, 1/23/2024, 14.70, AM, T, Yes), Kaitlin Reed (AM, 2/28/2024, 26.03, MID, P, Yes), Cory Galt (AM, 6/10/2024, 14.80, MID, P, Yes), **Shawnna Harbin (AM, 6/26/2024, 17.87, AM, T, Yes)** at row 6, Hunter Samuel (MID, 7/1/2024, 19.83, MID, T, Yes), Jamie Fresh (AM, 7/19/2024, 19.83, AM, T, Yes), Courtney Griffith (AM, 8/13/2024, 17.73, AM, T, Yes), Jarin Bell (AM, 10/15/2024, 40.23, PM, P, Yes). Combined with EX-045 (Feb 25, 2025 — Harbin removed) and EX-044 (Jul 3, 2025 — Harbin still absent while 5 juniors with later request dates 'Qualify'), this is the documentary spine of the waitlist-manipulation claim.",
    linkedEventIds: ["e-2025-01-22-waitlist-harbin-row-6", "e-2025-07-17-readded", "e-2025-02-25-jen-removes-harbin", "e-2026-04-22-jake-wave2-transcript"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-046-waitlist-2025-01-22.jpg",
    fileKind: "image",
  },
  {
    id: "EX-047",
    exhibitNumber: "EX-047",
    fileName: "Oct 4, 2024 — Michelle Scozzari Teams thread (Eprob-Pervasive coaching pressure → 'accusatory tone' exchange)",
    date: "October 4, 2024",
    category: "Protected activity",
    peopleIds: ["scozzari", "harbin"],
    summary: "Five-image Teams thread between Operations Manager Michelle Scozzari and Harbin on October 4, 2024. (1) 1:52 PM — Scozzari: 'Each month every TL is responsible for ensuring that anyone on their team (new or existing) has all Eprob-Pervasive coachings done regardless of when the original audit request came out. Trying to understand the confusion?' 1:53 PM Harbin: 'Is there anyway you can give a call.' 1:57 PM Scozzari: 'Go aheda and call me I am free.' (2) 5:32 PM (edited) Harbin: 'Hi Michelle! I wanted to follow up and let you know that I gained clarification on the proccess we discussed. I appreciate the insight and have learned from the misunderstanding. I'll make sure it doesn't happen again. That being said, I would appreciate it if, moving forward, we approach situation with shared information rather than an accusatory tone. I believe this well us work together more effectively. Thank you for you support and understanding.' (3) 5:56 PM Scozzari: 'Oh, I am so sorry you feel that way Shawna. I didn't feel I had an accusatory tone? I asked for insight and after you shared that insight with me I reached out and shared feedback on what you shared with me that others might not be aware. Again, apologies you felt that way. Happy to jump on a call if you'd like to clear anything up. ❤️' (4) 6:31 PM Harbin: thanks Scozzari, reiterates intention was collaborative, notes the tone 'came across to me in that moment,' confirms taken to heart. (5) 9:25 PM Scozzari: 'I appreciate you sharing that with me. Thank you 😊' + heart reaction. 9:27 PM Harbin forwards Scozzari's reply and adds 'Have a wonderful weekend Michelle!' 9:37 PM Scozzari: 'You too sunshine!' Documents a second Operations Manager applying heightened scrutiny to Harbin's coaching completion in October 2024 — the same window in which Jen Roy was preparing to remove Harbin's name from the LVAR waitlist (Feb 25, 2025, EX-045).",
    linkedEventIds: ["e-2024-10-04-scozzari-tone"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-047-scozzari-1-coaching-dispute.png",
    extraImagePaths: [
      "/exhibits/EX-047-scozzari-2-go-ahead-call.png",
      "/exhibits/EX-047-scozzari-3-sorry-you-feel-that-way.png",
      "/exhibits/EX-047-scozzari-4-thread.png",
      "/exhibits/EX-047-scozzari-5-closeout.png",
    ],
    fileKind: "image",
  },
  {
    id: "EX-048",
    exhibitNumber: "EX-048",
    fileName: "Mid-Shift Waitlist / Shift Request — Version History Evidence (Harbin narrative, 31 pp.)",
    date: "Late 2023 → November 2025",
    category: "HR complaint / formal notice",
    peopleIds: ["harbin", "rosanna", "carfagna", "hedrick", "anita", "allan", "jen-roy", "markus", "millisock", "samuel", "adkins", "faulkner", "reyes", "marcinko"],
    summary: "Harbin-authored 31-page evidence narrative compiling the full Mid-Shift / Waitlist record: (a) Late 2023 temporary PM assignment later recharacterized as permanent after protected complaints; (b) April 26, 2024 — Ryan Tafoya confirms Harbin not on waitlist; (c) May 29, 2024 formal complaint email (full text, addressees: Carfagna, Capozzi, Palmer, Marcinko, Hedrick, McNerney, Breisch) including Rosanna racial-slur allegation and EEOC notice; (d) June 2024 ER assurance she would be added; (e) Sept 24, 2024 — Team Ratios 2024 file modified, LVAR mid-shift staffing formula altered; (f) Oct 10, 2024 credit removal; (g) Oct 14, 2024 — TL Shift & Waitlist doc created showing Harbin as PM/Temporary waiting for AM (mid-shift request not reflected); (h) Jan–Feb 2025 'solid' rating; (i) Feb 18, 2025 records still PM/Temporary; (j) Feb 22, 2025 Jen Roy deletion; (k) June 2025 request expanded to AM; (l) July 2025 position request → Allan/Jen Roy chat; (m) July 16–17, 2025 re-added with new request date as Permanent PM; (n) Sept 19, 2025 sixth complaint to EthicalConcernsOversight + Allan training-bay transcript; (o) Nov 6, 2025 HR Investigation follow-up call transcript; (p) Allan removing himself from team chat; (q) Shift Changes SOW revision history. Includes embedded screenshots of waitlist version history and SharePoint metadata.",
    linkedEventIds: ["e-2024-04-26-not-on-waitlist", "e-2024-05-29-formal-complaint", "e-2024-09-24-ratios", "e-2024-10-10-credit", "e-2024-10-14-shift-doc", "e-2025-02-22-jen-deleted", "e-2025-02-25-jen-removes-harbin", "e-2025-07-14-screenshot", "e-2025-07-14-jen-allan-waitlist", "e-2025-09-19-complaint", "e-2025-09-19-allan", "e-2025-11-06-hr-call", "e-2025-07-17-readded", "e-2026-04-22-jake-wave2-transcript"],
    reliability: "confirmed-email",
    filePath: "/exhibits/EX-048-midshift-waitlist-version-history-narrative.pdf",
    fileKind: "pdf",
  },
  {
    id: "EX-049",
    exhibitNumber: "EX-049",
    fileName: "Nov 6, 2025 HR Investigation Close-Out Call — Transcript (Harbin / Sean, HR)",
    date: "November 6, 2025",
    category: "Internal investigation / HR close-out",
    peopleIds: ["harbin", "allan", "reyes", "samuel", "adkins", "faulkner", "millisock", "christensen", "markus", "rosanna"],
    summary:
      "Cleaned-up transcript of the Nov 6, 2025 phone call in which HR (Sean) closed out the internal investigation. Key admissions captured on the call: (1) Verint — HR confirmed a real technical issue gave Harbin more visibility than she should have had, that the issue was NOT limited to her team, and that it had been escalated to the vendor / BT team and was actively being worked. (2) Edward Reyes — HR stated no policy was violated but confirmed feedback was given to Reyes about how his conduct came across. (3) Schedule / Waitlist — HR relayed Allan's account that two requests were submitted (July 2024 and July 2025) and that Harbin was removed in May 2025 for declining an offered shift; Harbin disputed this in real time, stating she was never offered a shift, never declined one, had been requesting a midshift for ~2 years, and asked to see the actual ticket. HR could not produce the ticket on the call and committed to follow up with Edina Markus. (4) Comparators — HR was told Hunter Samuel, Kandace Adkins, and Josh Faulkner were 'already on day shift'; Harbin disputed this on the call (Hunter moved from PM/midshift to AM; Cody Christensen also moved to AM). HR's only stated explanation for lower-ranked movers was an 'onsite Ohio' requirement. (5) Allan removing himself from the team chat — confirmed by HR; Allan admitted doing it but claimed it was accidental. (6) Performance — Allan repeatedly described Harbin to HR as 'the best team lead he's got,' unprompted. Harbin closed the call by stating she would pursue legal resources.",
    linkedEventIds: [
      "e-2025-11-06-hr-call",
      "e-2025-10-verint",
      "e-2025-10-21-verint-email",
      "e-2024-04-26-not-on-waitlist",
      "e-2025-02-22-jen-deleted",
      "e-2025-07-14-screenshot",
      "e-2025-09-19-complaint",
    ],
    reliability: "confirmed-transcript",
    fileKind: "transcript",
    transcriptText: `NOVEMBER 6, 2025 — HR INVESTIGATION CLOSE-OUT CALL
Participants: Shawnna Harbin; Sean (HR Representative)

— Opening —

Shawnna: Hello?
Sean: Hello. Hey, Shawnna, how are you?
Shawnna: Hey, I'm doing well. How are you?
Sean: Good. I'm sorry, I'm barely able to use my voice.
Shawnna: No, the same thing happened to me. I never lost my voice before, and I lost it. I was sounding crazy. Everybody in my house is coming down with something, and I've been on meetings all morning with no issue.
Sean: Hopefully the tea that I'm already drinking helps.
Shawnna: Yes, yeah.

— Investigation Wrap-Up / Verint Issue —

Sean: Well, a couple of things I want to make sure I follow up with you on. My investigation is all done. I wanted to touch base with you to tell you where I landed on everything.
Shawnna: Okay.
Sean: First off, the Verint issue — thank you so much for escalating that. There is a technical problem where you have more visibility than you should. But nothing has changed as far as hearing. Nobody can hear you when you're offline or locked in. The only time anybody can hear anything in Verint is when you are active in a customer call. I confirmed with the product owners, and they said that is the only time audio is available. So if you were on a Teams call and I could see your screen, I couldn't hear anything.
Shawnna: Right.
Sean: So that has not changed. But Verint did actually reach out to the vendor. They turned this over to our BT team. They're handling it. I don't know if there will be a fix by the end of the year. Whatever the issue is, they have actively been working on it. This is week two. I just wanted to let you know I handed that over, and I appreciate you letting us know because it's not just impacting your team. It's impacting others too, which we didn't know about yet.
Shawnna: Hmm.
Sean: So it's not just your team. We don't know who all it applies to. When I got ahold of the Verint product owners for Discover, they said something changed. They don't know what happened, who did it, or why. It's on the vendor side. They have confirmed this is not anything anyone here has done. I'm really glad you brought it forward so we can get the vendor on top of it. I did confirm everything about the privacy issues you brought forward. They assured me that Jabber calls, Teams calls, none of that can be listened to. You can only hear the customer interaction.
Shawnna: Oh, yeah.

— Edward Reyes —

Sean: Let's see. I'm just going down a list of all the things you brought forward to make sure I didn't miss anything.
Shawnna: Oh, yeah. Let me wipe off my camera. It's all weird. Sorry.
Sean: So, Edward. I did speak to Edward, and no policies were violated, but I did provide feedback to him about how things came across. So he and I did have a conversation about that.

— Schedule / Waitlist —

Sean: Regarding your schedule, I know this was previously investigated. I think you talked to Myron in the past, but I did go ahead and do research of my own. So I did look at the case independently. Allan did submit two schedule change requests on your behalf — one in July of last year and one in July of this year. He said in May of this year, a day shift was offered and you declined. Due to anything, if they're offered something and they decline it, that's why you were pulled off of that waitlist. But you were put back on as soon as you requested it in July, and you're still number five as of when I talked to him. This matches what Myron discovered in his case. They said they offered a different shift, but you couldn't take it.
Shawnna: So, Myron, as far as I know, I never spoke with him regarding this ever. Also, I was never even added for a midshift ever. This may have been a day shift. The shift that he confirmed with me that I was on the waitlist for — the shift that I've been asking for for two years — is a midshift.
Sean: Right, and I think they were offering you the next shift available.
Shawnna: So if I'm on the waitlist for PM, and someone offers me an AM and I go, "No," they can just take me off? That's not how it works.
Sean: So that's how it works.
Shawnna: And the second thing is, I was never offered that position. Ever. Never was offered. Not only that, Allan has lied to me this whole time.
Sean: What did he lie to you about?
Shawnna: That I was on the waitlist for midshift. If he submitted me for a midshift, which HR confirmed with me that's what he should have done in May 2024, then their procedure says there's a ticket, right? He filled out a ticket. Where is the ticket for my waitlist request? All I know is that when I asked Rosanna about being put on a waitlist, that did not happen. So now I'm number five after waiting for two years. What sense does that make? Nobody's moving, right?
Sean: Everyone has?
Shawnna: Everyone has. Tyler has moved. Did you check on that?
Sean: I did, and let me pull up my notes. So the three names you gave me transferred over to your team or another team, and they were already on day shift. I'm looking up the notes.
Shawnna: That's a lie. That's blatantly not true. Whoever told you that is bold-faced lying to you.
Sean: I'm looking for my notes.
Shawnna: Okay.
Sean: The names you gave me were Hunter Samuel, Candice Atkins, and Joshua Faulkner.
Shawnna: Yep. Tyler Millisock.
Sean: Tyler wasn't the name you gave me. You gave me Hunter, Candice, and Joshua. So I asked about those three.
Shawnna: Hunter was not on day shift when she came over here. She went from PM to day shift. That is not true. Whoever told you that is not true. I just talked to her, and she personally told me she went from PM. My coach reached out to her and was like, "Hey, you should come here." She was on PM or a midshift, and she went from midshift to AM.
Sean: Was she training when she was on the other shift?
Shawnna: No. She was not. Also, Cody Christensen moved to an AM shift. Everyone has been moving. That's what I'm telling you.
Sean: If they're moving over, it has nothing to do with being on a waitlist. That may have to do with leadership. I don't know. But all I know is anybody on a waitlist above you is not moving.
Shawnna: Well, now they're not, but that's because I'm back on the list. When I was on the list, everyone was moving — May through July of this year.
Sean: You were on it in July last year when Allan put you on it initially, when you guys started working together.
Shawnna: Right. You said I was added in July of last year for my midshift, which was what the ticket was submitted for, right? Is there a ticket? Can we get the ticket? Because I would like to see the ticket.
Sean: Who has the ticket?
Shawnna: Edina Markus. She said she has the tickets.
Sean: Oh yeah, I don't think so. But as far as I can tell, if they offered another shift, regardless of what it was, and you declined it—
Shawnna: But I wasn't offered the shift. That is the problem. I never was offered the shift. You think I would be doing this for no reason? You think I would be away from my kid for fun? No. This is dead serious.
Sean: I believe you. I believe how serious this is for you. I'm not saying this is not happening. I'm telling you this is the information that I have.
Shawnna: I understand.
Sean: I'll ask her for all the information and see what she has available.
Sean: The only other thing I was told that made the impact was that some people lower on the waitlist than you were moved because it was required to be onsite in Ohio. That was the only reason they got moved to those other shifts, because it was physically in the building. I don't know if that impacts any of the other folks or not, but I will dig into it. I'll reach out to Edina Markus and find out what tangible information they have — evidence I can review.

— Allan Removing Himself From Team Chat —

Sean: I did talk to Allan about removing himself from your team chat. He said he had no idea that it happened initially. He was removing himself from a different chat. He said Teams is not great with technology, and someone else brought it to his attention. He said it was like two days later or so, and they helped him get re-added to your chat. So him removing himself, he said he did do it, but he didn't realize that it happened. He said he does want to participate in all your chats. He spoke very highly of you. He said you're the best team lead he's got. He kept saying that repeatedly, and this was not anything I asked him to tell me.
Shawnna: Yeah, yeah. Okay.

— Intermittent Leave / FMLA —

Sean: I did see that you have an intermittent leave of absence. Is that three days a week that you can take per week if you need to?
Shawnna: I'll have to double check. I can't remember.
Sean: I just looked at it briefly this morning to see that you were good to go. It looks like it was approved. My notes say it was potentially three days a week. As long as you call in FMLA and report it to The Hartford, The Hartford will let Allan know it's approved, and he'll code your time card appropriately. I asked him to mark it FMLA if The Hartford approves those dates so you can track that too.
Shawnna: Okay.

— Closing the Case —

Sean: So I still need to follow up with you about the schedule piece after I circle back with Edina. Other than that, I think—
Shawnna: I'm not even worried about the schedule at this point.
Sean: I still want to get you an answer, though.
Shawnna: The answer — I already know the answer. So, yeah.
Sean: Do you want me to circle back with Edina?
Shawnna: No, no. I'm fine. Well, I'm not fine, but yeah, I'm just going to have to handle this legally, apparently.
Sean: What do you mean by handling it legally?
Shawnna: Definitely looking at every resource available to me, for sure.
Sean: That works for me. I will go ahead and get this case wrapped up. If you have anything else, feel free to open another case for me. I'm still here if you've got questions or concerns.
Shawnna: Alrighty.
Sean: All right. Well, thank you, Shawnna. I hope you get to feeling better.
Shawnna: All right. Well, thanks.
Sean: Thanks. Have a good one.

— END OF CALL —

KEY ADMISSIONS / DISPUTES (summary for the record)

1. Verint — HR confirmed a real technical issue (Harbin had more visibility than she should have), confirmed it was NOT limited to her team, and confirmed escalation to vendor / BT.
2. Edward Reyes — HR confirmed feedback was provided to Reyes about how his conduct came across, even though HR did not classify it as a policy violation.
3. Schedule / Waitlist — HR relayed that Allan submitted two requests (July 2024, July 2025) and that Harbin was removed in May 2025 for declining a shift. Harbin disputed in real time: never offered a shift, never declined one, has been requesting midshift ~2 years. HR could not produce the ticket; committed to follow up with Edina Markus.
4. Comparators — HR was told Hunter Samuel, Kandace Adkins, and Josh Faulkner were "already on day shift." Harbin disputed: Hunter moved from PM/midshift to AM; Cody Christensen also moved to AM. HR's only stated explanation for lower-ranked movers was an "onsite Ohio" requirement.
5. Allan team-chat removal — HR confirmed it happened; Allan admitted it but claimed it was accidental.
6. Performance — Allan, unprompted, repeatedly told HR that Harbin is "the best team lead he's got."
7. Harbin closed by stating she will pursue legal resources.`,
  },
  {
    id: "EX-050",
    exhibitNumber: "EX-050",
    fileName: "2023/2024 Annual Compensation Statement — Performance Rating: STRONG",
    date: "FY2023 plan year (issued early 2024)",
    category: "Performance / compensation record",
    peopleIds: ["harbin", "allan"],
    summary:
      "Discover 2023/2024 Annual Compensation Statement for Shawnna Harbin (3591E). FY2023 Performance Rating: STRONG. Base salary $58,000 → $60,500.03 (4.31% merit / $2,500.03). 2023 Bonus: target 5% / $2,169.04; Company PF 87.80%; INDIVIDUAL PF 115.02%; bonus payout $2,190.00 (100.97% of target). Establishes Harbin's pre-protected-activity baseline rating as STRONG with an above-target individual performance factor.",
    linkedEventIds: ["e-2024-02-2023-rating-strong"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-050-2023-comp-statement-strong.jpeg",
    fileKind: "image",
  },
  {
    id: "EX-051",
    exhibitNumber: "EX-051",
    fileName: "2024/2025 Annual Compensation Statement — Performance Rating downgraded to SOLID",
    date: "As of 01/24/2025",
    category: "Performance / compensation record",
    peopleIds: ["harbin", "allan"],
    summary:
      "Discover 2024/2025 Annual Compensation Statement for Shawnna Harbin (3591E). FY2024 Performance Rating: SOLID — a DOWNGRADE from FY2023's STRONG rating, occurring in the first review cycle after the May 7, 2024 EEOC charge and May 29, 2024 formal complaint. Despite the rating downgrade: base $60,500.03 → $62,550.02 (3.39% merit); 2024 bonus target $3,025; Company PF 128.90%; INDIVIDUAL PF 96.49%; bonus payout $3,762.00 (124.36% of target). The bonus mechanics contradict any performance-based justification — payout went UP while the headline rating went DOWN.",
    linkedEventIds: ["e-2025-02-solid", "e-2025-01-24-comp-statement"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-051-2024-comp-statement-solid.jpeg",
    fileKind: "image",
  },
  {
    id: "EX-052",
    exhibitNumber: "EX-052",
    fileName: "2023 Year-End Review (Common) — Overall STRONG / Outstanding (Manager: Rosanna Blackson)",
    date: "Review period 01/01/2023 – 12/31/2023; acknowledged 01/15/2024 01:13 PM",
    category: "Performance review",
    peopleIds: ["harbin", "rosanna", "allan"],
    summary:
      "2023 Year-End Review – Common. Manager and Evaluator: Rosanna Blackson (FD740). Organization: Field CAR. Location: Home – US – AZ.\n\nOVERALL — Manager rating: STRONG ('Consistently delivers results including some beyond expectations'). Employee self-rating: OUTSTANDING. Manager narrative directs Harbin to 'continue to grow into her role here at Discover, asking for support when needed and maintaining that strong leadership presence with all leaders, sharing best practices, learning and leveraging their strengths, knowledge.' Continued focus areas: (1) Reducing Regulatory defects; (2) Consistently leverage TL standard work on driving efficiency metrics; (3) Improving the employee experience. Acknowledged by Shawnna Harbin (3591E) on 01/15/2024 01:13 PM.\n\nDE&I GOAL — Manager: SOLID / Employee: OUTSTANDING. Manager comment: 'Shawnna supported Discover volunteer events and ERG activities as well as encouraged others. She also ensured that she completed all required DE&I trainings as well as her team.' Employee comment highlights team cookbook initiative, mentorship of diverse team members, BOLD ERG Juneteenth feature, participation in Strive/Hola! ERGs.\n\nRESULTS — Manager: SOLID / Employee: OUTSTANDING. Manager comment: 'Shawnna consistently achieved and in some instances exceeded her team performance results. Her daily strategies that she had were effective and at times recognized by others for sharing best practices to help drive performance.' Employee documents contributions: Work Avoidance Instructions Guide, agent shadowing, work avoidance templates, LVAR Agent expectations, TL Coaching Alignment doc, Welcome to LVAR Email, CAR Agent Journey Visual, Blackson department SharePoint, new hire training materials, Iris dialer training, direct pay training, secured-handling training.\n\nKEY EVIDENTIARY POINT: Establishes the pre-protected-activity baseline as STRONG with growth-oriented coaching — NOT a performance concern — under a DIFFERENT manager (Rosanna Blackson) than the one who issued the FY2024 downgrade (Allan Glover, EX-053). The same employee, performing the same role with documented sub-goal results consistent with FY2024, was rated one full step higher before the EEOC charge and formal complaint.",
    linkedEventIds: ["e-2024-02-2023-rating-strong"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-052-2023-year-end-review.jpeg",
    extraImagePaths: [
      "/exhibits/EX-052-2023-review-p2-overall-dei.jpeg",
      "/exhibits/EX-052-2023-review-p3-dei-results.jpeg",
      "/exhibits/EX-052-2023-review-p4-results.jpeg",
      "/exhibits/EX-052-2023-review-p5-get-better.jpeg",
      "/exhibits/EX-052-2023-review-p6-succeed-together.jpeg",
      "/exhibits/EX-052-2023-review-p7-play-to-win.jpeg",
      "/exhibits/EX-052-2023-review-p8-behaviors-summary.jpeg",
      "/exhibits/EX-052-2023-review-p9-overall-full.jpeg",
    ],
    fileKind: "image",
  },
  {
    id: "EX-053",
    exhibitNumber: "EX-053",
    fileName: "2024 Year-End Review — Full review (Overall SOLID; every sub-goal & every Discover Behavior Solid or Strong)",
    date: "Review period 01/01/2024 – 12/31/2024; acknowledged 01/08/2025",
    category: "Performance review",
    peopleIds: ["harbin", "allan"],
    summary:
      "2024 Year-End Review. Manager: Allan Glover (26841). Evaluated By: Allan Glover (26841). Organization: Field CAR. Location: Home – US – AZ.\n\nOVERALL — Manager rating: SOLID; Employee self-rating: OUTSTANDING. Acknowledged by Shawnna Harbin (3591E) on 01/08/2025. The newly added full overall page shows Allan's narrative centers on style and presentation ('power of the whirlwind,' 'dynamic personality,' 'bring a new way forward,' 'keep your elements simple') rather than documented failure to hit goals.\n\nSUB-GOAL RATINGS (Manager / Employee):\n• Required Risk Goal — SOLID / STRONG. Full narrative confirms proactive risk assessment, timely training completion without DM oversight, leveraging iSuggest, influencing standards, and creating a safe escalation environment.\n• Required DE&I Goal — STRONG / OUTSTANDING. Full narrative explicitly praises Harbin for confidence to speak up, challenge the status quo, educate peers, and push leadership on blind spots.\n• Build A Culture That Creates Engaged Employees — STRONG / OUTSTANDING. Added page shows concrete engagement metrics/goals and Allan still rated the section Strong.\n• Create Efficiencies and Control Costs — STRONG / STRONG. Added page shows the goal was tied to utilization, active log, and ACW, and Allan rated it Strong.\n• Drive Effective Team Performance — STRONG / OUTSTANDING. Added page shows explicit scorecard-based expectations and Allan rated the section Strong.\n• People Leadership section summary — STRONG / OUTSTANDING. Full results narrative states Goal one averaged 3.75 with 4.00+ in 8 of 12 months; Goal two 2.90 (myVoice 3.88 vs Employee First 2.36); Goal three 2.62.\n\nDISCOVER BEHAVIORS (Manager / Employee):\n• We Play to Win — STRONG / OUTSTANDING. Added screenshots show manager rating Strong with behavior language tied to ambitious goals, transparency, accountability, and regulatory obligations.\n• We Get Better Every Day (Curious / Innovate & Simplify / Develop Ourselves) — SOLID / OUTSTANDING. Added pages show manager rating Solid while acknowledging Harbin demonstrates the behaviors and applies them to support the culture.\n• We Succeed Together (Good Partners / Positive Energy / Develop Others) — SOLID / OUTSTANDING. Added pages show 'Develop Others' separately reflected, with manager praise that Harbin leveraged assertiveness productively and earned multiple Bravo recognitions.\n• Development — Full development page confirms Allan wrote that Harbin focused on personal and professional development and should continue stretch assignments tied to compliance opportunities.\n\nKEY EVIDENTIARY POINT: Every individual sub-goal received SOLID or STRONG from the manager and every Discover Behavior received SOLID or STRONG, yet the OVERALL rating was downgraded to SOLID — a step down from the FY2023 STRONG rating (EX-050, EX-052, under a different manager). The added full pages make the mismatch sharper: Allan's own detailed narratives praise performance, leadership, DE&I advocacy, and scorecard execution, while the overall downgrade relies on vague style commentary rather than a failed metric or failed goal. Bonus payout (EX-051) was 124.36% of target; metrics exhibits (EX-056, EX-057) align with strong goal-level ratings; and Allan had separately told HR Harbin was 'the best team lead he's got' (EX-049).",
    linkedEventIds: ["e-2025-02-solid"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-053-2024-review-p1-overall.jpeg",
    extraImagePaths: [
      "/exhibits/EX-053-2024-review-p2-risk.jpeg",
      "/exhibits/EX-053-2024-review-p3-dei.jpeg",
      "/exhibits/EX-053-2024-review-p4-results.jpeg",
      "/exhibits/EX-053-2024-review-p5-people.jpeg",
      "/exhibits/EX-053-2024-review-p6-play-to-win.jpeg",
      "/exhibits/EX-053-2024-review-p7-get-better.jpeg",
      "/exhibits/EX-053-2024-review-p8-succeed-together.jpeg",
      "/exhibits/EX-053-2024-review-p9-development.jpeg",
      "/exhibits/EX-053-2024-review-p10-play-to-win-detail.jpeg",
      "/exhibits/EX-053-2024-review-p11-stay-ahead-curious.jpeg",
      "/exhibits/EX-053-2024-review-p12-develop-succeed.jpeg",
      "/exhibits/EX-053-2024-review-p13-develop-others-summary.jpeg",
      "/exhibits/EX-053-2024-review-p14-development-response.jpeg",
      "/exhibits/EX-053-2024-review-p15-team-perf-advance.jpeg",
      "/exhibits/EX-053-2024-review-p16-engaged-employees.jpeg",
      "/exhibits/EX-053-2024-review-p17-risk-full.jpeg",
      "/exhibits/EX-053-2024-review-p18-dei-full.jpeg",
      "/exhibits/EX-053-2024-review-p19-results-full.jpeg",
      "/exhibits/EX-053-2024-review-p20-behaviors-play.jpeg",
      "/exhibits/EX-053-2024-review-p21-behaviors-better.jpeg",
      "/exhibits/EX-053-2024-review-p22-behaviors-succeed.jpeg",
      "/exhibits/EX-053-2024-review-p23-development-full.jpeg",
      "/exhibits/EX-053-2024-review-p24-overall-full.jpeg",
    ],
    fileKind: "image",
  },
  {
    id: "EX-054",
    exhibitNumber: "EX-054",
    fileName: "2023 Q2 & Q3 myCheck-Ins (Manager: Rosanna Blackson) — pre-EEOC trajectory",
    date: "Q2: 04/01/2023 – 06/30/2023; Q3: 07/01/2023 – 09/30/2023",
    category: "Performance review",
    peopleIds: ["harbin", "rosanna"],
    summary:
      "Two quarterly myCheck-Ins completed by Manager Rosanna Blackson (FD740) under Field CAR during 2023, before Allan Glover took over the role and before any EEOC activity.\n\n2023 Q2 (Apr–Jun 2023) — Manager Response: 'Shawna has done a good job in transitioning into her new role within CAR. I encourage her to continue to be curious, leveraging her peers and manager as a resource for support.' No performance concern flagged.\n\n2023 Q3 (Jul–Sep 2023) — Manager Response: 'Shawnna has done a great job acclimating to her new role in LVAR. She has done this by: ensuring she leverages tools/resources; has a strong understanding of her goals and a daily plan to meet; built relationships with her peers and direct reports.' Improvement note: 'Identifying more time to interact more with team. Compliance — Shawnna needs to continue to work to find ways to reduce our Compliance risk as a team and organization.'\n\nKEY EVIDENTIARY POINT: 2023 quarterly check-ins documented a positive trajectory under Rosanna Blackson with only normal coaching notes around compliance — the SAME 'continued focus area' that appears in the 2023 Year-End STRONG rating (EX-052) and that remains the SAME area in the 2024 review (still rated SOLID by Allan on Risk). This rebuts any argument that the FY2024 overall downgrade was the natural progression of pre-existing concerns; the concerns are unchanged in scope while only the headline rating changed — after protected activity.",
    linkedEventIds: ["e-2024-02-2023-rating-strong"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-054-2023-q2-checkin.jpeg",
    extraImagePaths: ["/exhibits/EX-054-2023-q3-checkin.jpeg"],
    fileKind: "image",
  },
  {
    id: "EX-057",
    exhibitNumber: "EX-057",
    fileName: "CAR 2025 TL Scorecard — monthly and quarterly scorecard results for Allan Glover / Shawnna Harbin / SHARBI1",
    date: "Scorecard view shown for July in Q4; monthly rows visible November through July; file name indicates 2024 scorecard snapshot",
    category: "Performance metrics",
    peopleIds: ["harbin", "allan"],
    summary:
      "Two screenshots of the CAR 2025 TL Scorecard filtered to Direct Manager Allan Glover, Team Leader Shawnna Harbin, RACF SHARBI1, PCF LVAR. The scorecard explicitly states that italicized metrics are non-scoring and that data-driven results can be overridden by the leader's direct manager in calibration.\n\nVisible monthly overall ratings: November 3.58; December 3.64; January 3.93; February 4.20; March 4.18; April 3.90; May 3.85; June 4.15; July 3.98. Quarterly overall ratings shown: Q1 3.72; Q2 4.09; Q3 3.99; YTD 3.93. Visible weighted components include Business 50%, Risk 15%, Leadership Inclusion, Behaviors 35%, Effectiveness 60%, Experience 25%, MyVoice, Attrition, Employee First, Voice of the Customer, Efficiency, We Play to Win, We Get Better Every Day, We Succeed Together, Operational Accuracy, Coached in SLA, and Adjustments in SLA.\n\nKEY EVIDENTIARY POINT: This scorecard visually corroborates Allan's FY2024 review narratives and section ratings with quantified month-by-month results clustered around roughly 3.6 to 4.2 and YTD 3.93 — data that reads as strong/near-strong performance, not a performance collapse. It also highlights that manager override/calibration was built into the scoring system, which is important when comparing objective scorecard data to the downgraded overall year-end label.",
    linkedEventIds: ["e-2025-02-solid"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-057-car-2025-tl-scorecard-overview.jpeg",
    extraImagePaths: [
      "/exhibits/EX-057-car-2025-tl-scorecard-detail.jpeg",
    ],
    fileKind: "image",
  },
  {
    id: "EX-055",
    exhibitNumber: "EX-055",
    fileName: "My Applications history — repeated internal applications, withdrawals, and non-selection outcomes",
    date: "Visible entries span 12/13/2023 – 4/14/2025",
    category: "Internal applications / mobility record",
    peopleIds: ["harbin"],
    summary:
      "Four screenshots of Harbin's 'My Applications' workbook showing a long run of internal applications across 2023–2025, with statuses repeatedly listed as 'Withdrawn' or 'No Longer Under Consideration.' Visible entries include: 4/14/2025 — R46036 CSE Team Leader Withdawn ~ PM Shift (Withdrawn); 3/26/2025 — R44999 Vendor Relationship Manager (No Longer Under Consideration); 3/25/2025 — R44893 Lead Business Process Excellence (No Longer Under Consideration); 11/7/2024 — R42277 Team Leader ~ Internal Strategy Team (NRC) (No Longer Under Consideration); 10/8/2024 — R40497 Lead Vendor Management Specialist (Withdrawn); 10/5/2024 — R41319 Team Leader ~ High Risk Verification (Withdrawn); 9/16/2024 — R40500 Lead Vendor Management Specialist (Withdrawn); 9/16/2024 — R40927 Team Leader (No Longer Under Consideration); 9/12/2024 — R40808 Team Leader – CSE (PM Shift) (No Longer Under Consideration); plus additional visible postings dating back to December 2023. The screenshots corroborate repeated efforts to move internally rather than remain indefinitely in the existing role/schedule arrangement.",
    linkedEventIds: ["e-2025-04-14-my-applications-history"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-055-my-applications-1.jpeg",
    extraImagePaths: [
      "/exhibits/EX-055-my-applications-2.jpeg",
      "/exhibits/EX-055-my-applications-3.jpeg",
      "/exhibits/EX-055-my-applications-4.jpeg",
    ],
    fileKind: "image",
  },
  {
    id: "EX-056",
    exhibitNumber: "EX-056",
    fileName: "TH Metrics 2025 – Team Report Level (RASCART & SHARBI1) — objective team performance under Harbin",
    date: "Reporting windows 04/01/2023 – 12/21/2023 and 11/21/2023 – 11/21/2024",
    category: "Performance metrics",
    peopleIds: ["harbin", "rosanna", "allan"],
    summary:
      "Three Custom Reporting screenshots (TH Metrics 2025 – Display, Team Report Level) covering Harbin's teams across both review years. All values pulled directly from Discover's enterprise reporting tool.\n\n2023 PERIOD (04/01/2023 – 12/21/2023) — under Manager Rosanna Blackson:\n• RASCART — Accounts Presented 164,373; RPCCT/Active Hr 5.51; IB Effective $/RPCCT Now Due 47.74%; OB Effective $/RPCCT Now Due 38.20%; DPay/RPCCT (30+ Day) 19.76%; No Pays 8,041; Compliance Pass 82.61%; Overall Trust Mastery 2.913; Utilization 79.60%; ACW 15.86%; Dialer Hours 10,264.35; Direct Pays 7,052.\n• SHARBI1 — Accounts Presented 77,430; RPCCT 4.90; IB Eff 47.26%; OB Eff 37.46%; DPay 19.35%; No Pays 4,281; Compliance 77.02%; Trust Mastery 2.889; Utilization 78.49%; ACW 17.51%; Dialer Hours 9,361.39; Direct Pays 4,873.\n\n2024 PERIOD (11/21/2023 – 11/21/2024) — under Manager Allan Glover:\n• RASCART — Accounts Presented 216,037; RPCCT 5.72; IB Eff 46.69%; OB Eff 39.20%; DPay 18.40%; No Pays 13,633; Compliance 89.50%; Trust Mastery 2.921; Utilization 81.81%; ACW 12.27%; Dialer Hours 15,197.70; Direct Pays 12,473; RO Opportunities 69.\n• SHARBI1 — Accounts Presented 192,240; RPCCT 4.98; IB Eff 44.90%; OB Eff 39.17%; DPay 19.36%; No Pays 6,075; Compliance 82.62%; Trust Mastery 2.881; Utilization 80.31%; ACW 14.79%; Dialer Hours 13,377.87; Direct Pays 9,113; RO Opportunities 47.\n\nKEY EVIDENTIARY POINT: Year-over-year, Harbin's teams IMPROVED on the operational metrics Allan flagged as 'continued focus areas' in the FY2024 review. Compliance Pass rose from 82.61% → 89.50% (RASCART) and 77.02% → 82.62% (SHARBI1). Utilization improved on both teams; ACW (a key efficiency metric) dropped (better) on both teams; Direct Pays and Dialer Hours both grew. These are the SAME metrics on which the manager rated her STRONG on 'Drive Effective Team Performance' and STRONG on 'Create Efficiencies and Control Costs' in EX-053, yet the overall headline was downgraded from STRONG (2023) to SOLID (2024). Objective data refutes any performance-based justification for the downgrade.",
    linkedEventIds: ["e-2025-02-solid", "e-2024-02-2023-rating-strong"],
    reliability: "confirmed-screenshot",
    filePath: "/exhibits/EX-056-th-metrics-rascart-2024.jpeg",
    extraImagePaths: [
      "/exhibits/EX-056-th-metrics-sharbi1-2024.jpeg",
      "/exhibits/EX-056-th-metrics-2023-rascart-sharbi1.jpeg",
    ],
    fileKind: "image",
  },
  {
    id: "EX-058",
    exhibitNumber: "EX-058",
    fileName: "April 22, 2026 — Director Jake (Recovery) all-hands transcript: Backbook Wave 2 selection and schedule-based placement",
    date: "April 22, 2026 (live meeting, exempt leadership audience)",
    category: "Acquisition transition / selection criteria",
    peopleIds: ["harbin", "allan"],
    summary:
      "Verbatim transcript of an April 22, 2026 leadership meeting led by Jake, Director of Recovery on the legacy Discover side, announcing Backbook Wave 2 selections for transition to the Capital One ('blue') side of the post-acquisition org. Key admissions on the record:\n\n• PRIORITIZATION: First priority is staffing legacy 'orange' (Discover) customers; second is releasing excess agent capacity to 'blue' (Capital One). Selection began 'with the Lens of the agent' and looked at where there was 'excess capacity of agent staffing over all of our hours.'\n\n• SCHEDULE AS A SELECTION CRITERION (direct quotes): 'We looked at what shifts did they work. And how many of them are on unique teams and tried to keep as much as we could together to make this selection process to move through.' Later, when asked specifically about schedule mechanics: 'When we looked at schedule placement, we looked basically at the start time of their schedules… we looked at the start time of the shift for placement.' Jake also said the teams are 'focused very much on schedule alignment.'\n\n• NAMES ANNOUNCED FOR WAVE 2 (legacy Recovery → Capital One): Department Managers — Darren Hunt, Trevor Howe (joining Scott and Michelle already on the Capital One side). Unit Managers / TLs called out by name include Jare, Julie, Gabby, Steve, Will (early stage), Envelope/Crystal/Michelle (MVAR/CVAR per context), and — for HVAR — Alex and Cody. Coaches will be aligned 1-for-1 with teams that move, per Jake's planned Friday meeting.\n\n• TRAINING CADENCE: 3-week training cycles run May / June / July 2026. Wave 2 transition goes live at end of July 2026. CAR teams are in the June and July training cohorts.\n\n• REPORTING: Selected agents continue to report to legacy 'orange' (Jake's) org through the training months and only switch reporting lines to the new 'blue' UMs in May (early stage) or June (MR teams) ahead of the end-of-July go-live.\n\n• SELECTION PROCESS COMMUNICATIONS: Leaders were read in the week of April 21, 2026 ('I got read into this on Monday'). Selected and non-selected agents both receive emails the following Tuesday; final work and training schedules are released by May 1, 2026.\n\n• OPERATING MODEL DIFFERENCE: Capital One side uses a blended inbound/outbound team structure (outbound = legacy-collections approach; inbound = ~10–20% outbound blend plus servicing/universal inquiry mix). This means schedule and shift placement on the legacy side directly drives which Capital One team structure a leader can be slotted into.\n\nKEY EVIDENTIARY POINT: Director-level, on-the-record admission that shift start time and schedule alignment were primary inputs to Wave 2 selection. Harbin has been locked on PM/Closing on the LVAR side since February 2024 despite the documented waitlist record (EX-008, EX-022, EX-044, EX-046, EX-048) and despite repeated requests dating to 2023. That same schedule the employer controlled is now the gate for who moves to the post-acquisition Capital One side. Cody Christensen — a direct AM-anchored comparator on the schedule matrix — was named as a Wave 2 selectee for HVAR; Harbin (LVAR, pinned PM) was not. Converts the schedule denial from a quality-of-life complaint into a tangible adverse action affecting post-acquisition placement.",
    linkedEventIds: ["e-2026-04-22-jake-wave2-transcript"],
    reliability: "confirmed-screenshot",
    filePath: "",
    fileKind: "transcript",
  },
  {
    id: "EX-059",
    exhibitNumber: "EX-059",
    fileName: "September 19, 2025 — Conversation with Allan Glover re: Training Bay selection and shift movement (transcript)",
    date: "September 19, 2025",
    category: "Transcript",
    peopleIds: ["harbin", "allan"],
    summary:
      "Verbatim transcript of a September 19, 2025 conversation with Allan Glover regarding Training Bay selection, shift movement, and Harbin's long-standing mid-shift waitlist request. Allan identified several employees moving into Training Bay, including Michelle, Steve, Marissa, and Josh. When asked what criteria were used to select employees for Training Bay, Allan stated that there 'wasn't a criteria.' When asked who made the decision, Allan identified 'myself, Amber, Trevor, Dan.' Relevant because Respondent's Position Statement describes scheduling and movement decisions as neutral, centralized, and outside manager discretion; Allan's statements contradict that framing by showing Training Bay selection involved management discretion and had no formal criteria. The transcript also documents that Allan acknowledged Harbin was on the waitlist to go to mid-shift. When Allan began to state that he had offered Harbin a shift, Harbin immediately disputed that any mid-shift offer had been made. Allan then clarified, 'No—well—it was mornings.' Harbin again disputed that any AM offer had been made and asked when it occurred, what position it was, and what group it involved. Allan did not identify a date, role, department, ticket, written offer, or communication. Harbin also identified comparators — Tyler Millisock, Josh, and Hunter — who had moved shifts or worked mid-shift/AM/PM schedules while she remained on PM/closing; Allan responded that he was not aware of those examples but did not provide a waitlist-based explanation. The transcript further documents that Harbin confronted Allan about his prior 'blockade' statement, which Allan did not substantively explain in this conversation ('What blockade?'). Supports claims regarding inconsistent schedule movement, lack of documentation for any alleged offer, unclear selection criteria, comparator movement, management discretion, and retaliation.",

    linkedEventIds: [],
    reliability: "confirmed-transcript",
    filePath: "",
    fileKind: "transcript",
    transcriptText: `Conversation with Allan Glover — September 19, 2025
Re: Training Bay selection / shift-movement / mid-shift waitlist

Shawnna: So, so what happened with Training Bay?

Allan: So no one is — no one's moving. The only person — well, people are moving, but they stay in their shift.

Shawnna: This time, right? Mm hmm.

Allan: Yeah. Michelle is moving to Training Bay. So she's at night. Steve is moving to Training Bay. He works at night. Marissa is moving to Training Bay, so she works days, and Josh is going to be in Training Bay and he works —

Shawnna: Yeah, what does he work? Just curious. So maybe he works a little bit of everything, I think, right?

Allan: So he does. So, yes. So, um —

Shawnna: What is the criteria, or what exactly are you guys looking for as far as moving to Training Bay? Like, what was the criteria on picking someone? It just seems so random.

Allan: There wasn't a criteria. That's why I asked you. My thought was, in all honesty, like I said to you before, was that I wanted to make sure that we had the right people. I said that's why I asked Marissa, right? And that's why I asked you about it as well, because that was my thought.

Shawnna: So who, I guess, is the final decision maker?

Allan: I guess, all of us at the end of the day.

Shawnna: Who's all of us?

Allan: Myself, Amber, Trevor, Dan. Okay. What are you trying to get to?

Shawnna: What I'm getting into is the lack of availability of moving to a different shift. So, there has been moves in shifts, right? I was on the the wait list to go on mid-shift, right?

Allan: Yes.

Shawnna: What happened with that?

Allan: Shawnna, I offered you —

Shawnna: You never offered me mid-shift. You never offered me mid-shift. When was it? What was it?

Allan: No — well — it was mornings.

Shawnna: Allan, you did not offer me AM. You did not offer that to me. You did not offer that to me. When? When, what was that? What position was it? What group?

Allan: Are you serious right now?

Shawnna: Yeah, I'm serious, because I'm looking at the schedule, and what I see is people moving to mid-shifts and to AM shifts. Why am I the only person that's not moving?

Allan: Who are these people?

Shawnna: Tyler Millisock. So he's worked mid-shift, AM, and PM.

Allan: Okay?

Shawnna: Josh has worked the same thing. Mid-shift and PM. I have a whole list. Hunter came from HVAR, which is outside of our director's area. She went from mid-shift in HVAR to AM over here.

Allan: I'm not aware of that.

Shawnna: Yes, that is the truth. That is the truth. There's a ton of other cases where that's happened, too. That is not fair. That is putting me in a really messed-up situation. I'm really starting to feel like you guys are purposely doing it. That's how I really feel.

Allan: Okay.

Shawnna: That's not okay. I have a ton of cases. I have a ton of examples. I have a ton of examples from other TLs where they've been offered different shifts — mid-shift that I've been waiting for two years for, that was my original shift that I was supposed to be working. Like, this is not a joke. Dude, I miss my kid. It's not a joke, Allan. It's not a joke. And I don't know what you're up to. I don't know what you're up to or what you're trying to present, but trust me — facts. Facts of the straight retaliation from Greg to Rosanna to the whole entire group. Clearly.

Allan: Okay.

Shawnna: Yeah, not okay. It's not okay. It's not okay. Seriously, not okay. You have anything to say? What is the discrepancy? Why have I been on a wait list for two years and so many people have gotten mid-shift?

Allan: I'm not aware of all these people.

Shawnna: Well, you're my manager. You're the one making the decisions. You just said you and the group are making the decisions. How do you not know?

Allan: First of all, hold on. I don't understand you being upset.

Shawnna: Yeah, no, I am very upset. I've been going through this for two years of straight-up retaliation. I don't want this. I don't.

Allan: Don't talk to me like that.

Shawnna: Okay. I'm not talking to you anyway, but you're acting like you're pretending that what I'm saying isn't the case. You're pretending to act like you don't know that there is a blockade in front of me that is prohibiting me from going past that, right? You yourself said that I can't get past that blockade.

Allan: What blockade?

Shawnna: Okay. Allan, if that's how you're going to play this, clearly you're not even being honest with yourself, and you're not the person you think you are.

Allan: You're entitled to your opinion, that's fine.

Shawnna: Okay. Any news for me? Anything else?

Allan: No.`,
  },
  {
    id: "EX-060",
    exhibitNumber: "EX-060",
    fileName: "Allan Glover / Susan Marchinko Calendar Meeting — pre-September 19, 2025 (production request)",
    date: "September 2025",
    category: "Calendar / HR Communications",
    peopleIds: ["allan", "susan"],
    summary:
      "Production request placeholder for Allan Glover's calendar invite, attendee list, meeting title, meeting notes, Teams/chat communications, emails, and any follow-up records for a meeting with Susan Marchinko immediately preceding the September 19, 2025 Training Bay / shift movement conversation (EX-059). Relevance: if the calendar record reflects that Allan met with HR (Susan Marchinko) immediately before speaking with Harbin, the September 19 conversation should not be treated as an isolated or spontaneous manager discussion. The timing would establish HR knowledge and management coordination immediately before Allan gave the explanations documented in EX-059 — including that Training Bay selection had 'no criteria' and that the decision group consisted of Allan, Amber, Trevor, and Dan — and bears directly on the credibility of Allan's explanations regarding Training Bay, shift movement, and the alleged offer.",
    linkedEventIds: [],
    reliability: "to-verify",
    filePath: "",
    fileKind: "note",
  },
  {
    id: "EX-061",
    exhibitNumber: "EX-061",
    fileName: "May 31, 2024 — HR Intake Call with Susan Marcinko (transcript)",
    date: "May 31, 2024",
    category: "Transcript",
    peopleIds: ["harbin", "susan"],
    summary:
      "Verbatim transcript of the May 31, 2024 HR intake call with Susan Marcinko following Charging Party's internal complaint and EEOC charge. Harbin reported race discrimination, retaliation, disability/medical leave issues, false 'job abandonment' processing, hostile work environment, project exclusion, and schedule/waitlist concerns. Key admissions and content: (1) Harbin reported that on March 28, 2024 Rosanna Blackson used the N-word in an impromptu phone call after Harbin asked about Allan Glover coming to LVAR ('you're my N word'), with a witness (Harbin's mother) overhearing; (2) Harbin reported a prior incident in which Rosanna referred to an Asian agent as 'Chang'; (3) Harbin described being threatened by Rosanna in January 2024 with a 'compliance adjustment' issue after stating she would report discrimination to HR ('do you want me to bring up your adjustment compliance issue?' / 'I wouldn't be here at Discover anymore'); (4) Harbin reported that after her February 21–March 25, 2024 medical absence, her systems were disabled and a job abandonment was falsely processed before the PALs/Hartford documentation window closed; (5) Harbin reported that HR rep Anita Spence told her Rosanna had 'experienced the same level of stress and emotional trauma'; (6) Harbin reported she was placed on the schedule waitlist on April 1, 2024 but Department Manager Ryan Tafoya confirmed she had never been added; (7) Harbin reported total exclusion from special projects since the January complaint while every other peer received projects (work-availability board shows everyone red/orange, Harbin green); (8) Harbin confirmed she had filed an EEOC charge and was represented by counsel. Susan Marcinko stated she would investigate, would interview Tammy and Anita, and would 'inquire about moving you to another team' during the investigation. Relevance: contemporaneous HR-recorded confirmation of the protected activity, the racial slur, the retaliation threat, the false job-abandonment processing, the waitlist manipulation, the project exclusion, and HR's acknowledgment of the seriousness of the matter — directly rebuts Respondent's framing of these events as routine or unsupported.",
    linkedEventIds: [],
    reliability: "confirmed-transcript",
    filePath: "",
    fileKind: "transcript",
    transcriptText: `May 31, 2024 HR Conversation Transcript
Participants: Shawnna Harbin and HR, Susan Marcinko
Topic: Follow-up after protected complaint / EEOC charge / hostile work environment / schedule and waitlist concerns

HR intake call following my internal complaint and EEOC activity. In this call, I reported race discrimination, retaliation, disability/medical leave issues, alleged job abandonment, hostile work environment, project exclusion, and schedule/waitlist concerns. HR acknowledged the seriousness of the situation and discussed moving me to another team while investigating.

Opening / Technical Issues

Me: Man. I can hear you. Yes, that was so that was so weird.
HR, Susan Marcinko: Yeah. Yeah, Teams is sometimes funky, so. Man. Let me see here. Make sure all my systems are working. Can you hear me okay?
Me: Yep, I can hear you.
HR, Susan Marcinko: Okay, great. And is your camera working?
Me: It is. I have like a sinus, weird infection, and I got swollen eyes and stuff, so. But yeah, my, it looks like my internet went out and it came back up again.
HR, Susan Marcinko: Okay. All right.

HR states purpose of call

HR, Susan Marcinko: So I had received the email that you had said, and I appreciate you getting back to me so quickly. Just trying to understand, you know, what all transpired, you know, the things that you mentioned in the email seemed really serious, and I'm trying to get an understanding of it sort of of like how this all, you know, has evolved and what you've experienced. So, you pull up the email that you had sent actually because it thought I had that pulled up, but stuff gets around between my screens.
Me: Yeah. No, I totally. Totally understand.
HR, Susan Marcinko: Okay. So, you wrote that there had been a previous complaint.
Me: Right.
HR, Susan Marcinko: And then, you know, you had gone out on Bel leave and then when you came back on your leave, you were seeking another shift, it looks like.
Me: Right.
HR, Susan Marcinko: And that in the conversation with your manager that she used the racial slur.
Me: Correct.

HR asks about leave / job abandonment

HR, Susan Marcinko: And I was trying to kind of piece together, you know, ahead of our call, you know, if I could see like, when was your leave and that kind of stuff so I could kind of get a sense of timing for everything. But I didn't see a lead in Workday for you. So I wasn't sure whether you had taken like a significant amount of time off or whether you had just taken a couple days. I just, I get out from the system. Yeah. I don't have any access to your leave information.
Me: No, yeah, if I was out for a month.
HR, Susan Marcinko: Help me with the dates for that?
Me: It was February 21st, and the day that I had initially returned was the 15th. But when I came back, my systems were disabled and a job abandonment had been executed on my account.
HR, Susan Marcinko: Okay. And I'm just taking notes while we're talking so I can kind of keep up. So, and there have been a JA. Okay.
Me: Right.
HR, Susan Marcinko: So like you said, I was looking in Workday. I don't know if you're familiar, like when you look at your own employees, you can see on their time off record if there's, you know, a period of leave or, you know, what kind of absences. But I didn't see a leave and that was what was confusing to me if I was reading through your email. So you were out for about a month, you say. And that wasn't on a leave through the Hartford.
Me: Correct.
HR, Susan Marcinko: Okay. Was that leave through an accommodation with the PALs team?
Me: I'm not sure exactly how Rosanna ended up getting it worked out. Um, but I had some internal bleeding. And, um, after that, I went through, you know, like a spot of depression, anxiety, but it was a very serious issue where like, you know, I couldn't.
HR, Susan Marcinko: I'm sorry, I don't mean to interrupt you because I don't want you to share medical information with me, so I just want to, you know, stop you before you share.
Me: Well, I guess, well, the reason that I do want to, you know, kind of just give more information on that is just to, I guess, highlight the severity and, you know, make sure that it is known that I wasn't able to, you know, get out of bed. I wasn't able to, you know, take care of myself. So, yeah, it wasn't.
HR, Susan Marcinko: Did you contact PALs about a leave?
Me: Yes, I did speak with them.
HR, Susan Marcinko: Because I understand probably the timing of this, looking at your hire date, you probably weren't yet eligible for FMLA at that time, but you might have been eligible for short-term disability, or, you know, a covered leave had gone for a month, and that would have been paid.
Me: Correct.
HR, Susan Marcinko: You met the criteria for it?
Me: Correct.
HR, Susan Marcinko: Okay. But PALs did not open a leave for you?
Me: They, I'm not sure if they did or not. So we, there was the window was open, right? So they give you the window of, et cetera, to send your information in. But unfortunately, I didn't even get that opportunity because a job abandonment had been processed, which was also falsely input into the system.

HR asks about schedule change request

HR, Susan Marcinko: So when you were. Okay. I mean, I don't want to get caught up in the details of that right this minute. Let me come back to it. Because again, I wanted to speak with you before I started digging into anything. I wanted to, you know, talk with you first, if I could.
Me: Sure.
HR, Susan Marcinko: And I'll see what I can find out about the leave and all that stuff. But so you come back from this time off and then you want to go to another schedule. Was the reason for another schedule related to your medical situation or was it other courses, first classes, something like that? What was the request about?
Me: So when I had initially come back after I did, you know, provide the information to HR in order to cancel out the job abandonment. So I had to, you know, submit information proving that, you know, I did report my absences correctly. So after that, I did tell them that I did not feel comfortable working under Rosanna and in my email during the job abandonment process, I did let them know that I felt like she was retaliating against me for the initial complaint that I made back in January when she threatened me. So I did ask them, um, to you know, change leadership or go to the department, change my schedule, anything. And I was told that, um, you know, basically, that I'm going to be going back to work under Rosanna, and that she actually had experienced as severe emotional distress that I experienced while she was retaliating against me.
HR, Susan Marcinko: I'm, I understand what that means. Can you maybe explain that a little bit more for me?
Me: Yes. So when I spoke to the HR representative, you know, I was in tears. Like, when I tell you, it was really, really stressful. I can, I can't even really explain. I did not know if I was going to have my job, or, you know, I just felt totally, I just couldn't believe that that was happening, honestly. And I told them, I don't feel comfortable going back to work for her after she's done this. And, you know, obviously, if she's willing to take these steps to provide false information or whatever, I don't know even what she's capable next, you know, and this has really just impacted me a lot. And they told me that she has actually experienced the same level of stress and emotional trauma that I was going through. And, you know, that she just wants to make sure that I'm okay. And, yeah, that she was actually the person who was experiencing the emotional stress.
HR, Susan Marcinko: Who said that with you?
Me: Anita Spence. But yeah, I could not believe. But anyways.

Timeline correction: March 25 / March 27

HR, Susan Marcinko: Okay. So. Do you remember, like, when that conversation was?
Me: Yes.
HR, Susan Marcinko: You said it was when you were coming back.
Me: Well, she called me. Initially came back on the 15th. Right. I came back on the 15th. My systems were disabled. At that time, they asked me to prove, you know, that I had requested my time off, which I did. They could not give me an answer when I could return back to work or not, or whether I would be paid for the time. I believe on, I want to say it was like maybe three days later, Anita called me first thing in the morning and said that I had provided adequate information and that I was able to return back to work.
HR, Susan Marcinko: Okay.
Me: But at that time, I did express, you know, obviously, that I do not feel comfortable going back to work under Rosanna.
HR, Susan Marcinko: So I'm just trying to nail down a timeline if I can. It helps me keep my information organized.
Me: Sure.
HR, Susan Marcinko: So you initially came back on the 15th. That was a Friday in March.
Me: Or you know what, actually. Let me pull up. I'm sorry, I had that date wrong.
HR, Susan Marcinko: Okay. This is why I kind of walk through that. You know, it's hard to keep dates straight, especially, you know, a couple months ago, certainly.
Me: Yes. Let me take a look here. So it was. So the day that she called me back to say that I could come back to work was on March 27th. The day that I had returned to work was the 25th, I'm sorry.
HR, Susan Marcinko: So you returned, the initial day you returned to work was the 25th, not the 15th, is that what you mean?
Me: Correct.
HR, Susan Marcinko: Okay, so 3/25. And the day that you spoke to Anita initially, was that on the 27th?
Me: I spoke to her on the 25th. I spoke to her every day up until the 27th.
HR, Susan Marcinko: Okay. And you provided documents that she said, "Okay, you're able to return."
Me: Correct.

Alleged racial slur conversation with Rosanna

HR, Susan Marcinko: All right. So on the 25th, talk to her, then you came back on a Wednesday, I guess. So the conversation with Rosanna, where she used the racial slur, was that on the 27th? Or was that some days after?
Me: That was some days after. That was on, I believe it was on the first, but I'd have to check my notes, because, you know, obviously I noted all of this down.
HR, Susan Marcinko: Okay. Yeah, if you could confirm that for me, that would be helpful.
Me: Sure. And I'm sorry, it was March 28th that that happened.
HR, Susan Marcinko: Okay. So, when you had the conversation with her, we'll say it was the first for right now. I understand you're not positive was the exact thing. You know, were you in a scheduled meeting? Were you just in a chat? Did you have a call? Like, how did this all kind of come together?
Me: Yeah. It was not. I messaged her and I asked her if Alan Glover was coming to LVAR and she just called me. So it was an impromptu conversation.
HR, Susan Marcinko: So you sent her a message asking about some sort of business process or something.
Me: Right.
HR, Susan Marcinko: And instead of messaging you back, she called you back.
Me: Right.
HR, Susan Marcinko: Did she call you back immediately or was it some time later?
Me: It was like immediately. Probably a couple minutes.
HR, Susan Marcinko: Okay. Tell me about that conversation. If you could just sort of take me from the beginning to the end of it.
Me: Yeah, well, we got on the phone. She, you know, it was, it was a, I guess an uncomfortable conversation just because I just returned back, right? And the rest of the situation had happened. But we just talked about Alan Glover coming to the department. And I expressed to her that I was interested in going to his department and, you know, I just really liked his presence in our department meetings. And, you know, maybe I could, you know, go help him out. And she said, well, you're my, my, well, she said, you're my N word. And I don't know if she was with other people because it sounded like she was in a car driving or something. But she just had like a good chuckle about it. And I was just blown away. I didn't even really say anything. I had no response. She just kept talking, like, as if she were like a friend from down the street. She started telling me about, um, you know, she had a migraine and she didn't want to do her makeup today, and, you know, XYZ. So, yeah, it was not the typical conversation that I would have had with her. Usually when we speak, it's very business focused.
HR, Susan Marcinko: How long did that conversation go on for?
Me: I want to say it was about 10 minutes.
HR, Susan Marcinko: Do you know if that call was recorded or did you record the call?
Me: I did not record the call, but, you know, I do have people that live in my house and my mom was here and she heard her say that and my mom was like, who is that? Like, she could not believe. And I was like, that was my boss. But yeah, we were all shocked and just beyond disgusted.
HR, Susan Marcinko: Had you ever heard her say anything like that before?
Me: Um, she's used other slurs, I'll say, related to other employees I've heard in the past. In a meeting.
HR, Susan Marcinko: Tell me more about this.
Me: It was just one time she did call one of our Asian agents. She called him Chang. That's not his name. But, yeah, and she kind of did the same thing at that time as well. A laugh, you know, a little giggle laugh. And I was alarmed about that as well.
HR, Susan Marcinko: And there were other times, you said?
Me: That was the only other instance that I can remember at this time.
HR, Susan Marcinko: Okay. All right. So you said she sounded like she was in a car. Could she have been outside? I don't know whether she works on site or whether you work on site and haven't, you know, gone to look at your work arrangements or anything. I'm just trying to think of why she would have been on the phone in her car.
Me: I'm not sure. I believe when I was talking to her, she indicated she was going to, I think, one of her kids' softball games or something.
HR, Susan Marcinko: Okay. The comment that you say she made about this other agent calling him Chang, was anybody else a witness to that?
Me: No, that was a one-on-one meeting.
HR, Susan Marcinko: Okay. About how long ago was that?
Me: I believe it was back in November, December. It was a while back.
HR, Susan Marcinko: Okay. And I understand. You're just, you know, trying to remember, and it's hard to pull exact dates and stuff out of that. You know, the behavior that you're describing, you know, in my experience, you know, if people commonly engage in these kinds of comments, other people might have observed it or heard it. Is there anybody else that you think I should talk to who might have information that can help me?
Me: You know, I don't know anyone else that would have this information. I'm not sure. But I agree with you that, you know, if someone's conducting themselves like this, it's probably, um, you know, consistent.

Retaliation / threat after January complaint

Me: Also, I do just want to highlight and make sure that it is recognized that when I initially made my complaint about one of my colleagues discriminating against an employee, that she did threaten me. She threatened, you know, that if I did say something about the discrimination issue, because I had brought it up multiple times over months. And I did tell her I was going to HR. She did threaten me saying that, well, do you want me to bring up your adjustment compliance issue? And then she indicated that I wouldn't be here at Discover anymore. And directly after that, I had a conversation with Tammy McNurney in HR.
HR, Susan Marcinko: You said adjustment, something?
Me: Yeah. There was a compliance adjustment. I never even heard of it until that time. And she never mentioned it to me after the fact. But yeah, she did threaten to blackmail me with that and was saying, well, if I'm no longer with the company, like she wishes me luck. And I was like, what are you talking about? Where did that even come from? And I directly asked her that at that time. Why would you say that? When I just asked you about reporting a discrimination issue to HR, where did you even, how did you even get to that when I just said this to you? So I asked her point blank, why would you even say that?
HR, Susan Marcinko: And what was her response?
Me: She was like, well, I just wanted you to know, like, I know there was that adjustment compliance issue. And, you know, I just want to let you know, like, it's not a problem. It's not a problem. And this is, so I'm literally telling her, I'm going to HR to make a complaint about this. And she says that to me. Do you see what I'm saying? So, like, when that happens, I'm alarmed.
HR, Susan Marcinko: Sorry, I'm just trying to capture exactly the way you described it to me.
Me: Yes. Okay. Yes.

Loss of projects / exclusion after complaint

Me: So, since January, she has been. I haven't worked on any projects. I used to work on all of the projects, very engaged in my department. I haven't had any opportunities like that since then. Yeah, just really, really hard. Yeah, and I have a meeting with her right after this.
HR, Susan Marcinko: Okay. Are you still good on time? I want to make sure I understand what's going on.
Me: Yes.
HR, Susan Marcinko: And I had a couple more questions, if you don't mind.
Me: Sure.

Waitlist / schedule change details

HR, Susan Marcinko: When you wrote in your email something about you were waitlisted for the schedule change. Is the wait list like through workforce management? Is it something that's just like in the department? Help me understand what the wait list is.
Me: The wait list is through our admin. So field support. So there is a wait list. I admin. I believe Cindy Wickert, Lily Co, and I believe Adina Marcus is the manager of that group at this time. So I did request a schedule change. Rosanna informed me that I was put on the wait list that day.
HR, Susan Marcinko: Well, what day was that?
Me: That was, um, I want to say, April 1st. Formally on paper, I'll say. But I was. Yes. During that time, so obviously, I'm on the wait list, right? While Rosanna was out, I reached out to another department manager to check on the status of me being on the wait list and he said that I was never added to the wait list.
HR, Susan Marcinko: Who was that?
Me: That was Ryan Tafoya.
HR, Susan Marcinko: Can you spell the last for me?
Me: T-A-F-O-I-A.
HR, Susan Marcinko: And he said you were never on the wait list.
Me: Correct.
HR, Susan Marcinko: Gotcha. Okay. And the procedure to get on a wait list like that is you tell your manager, your manager lets the admins know that you're interested?
Me: Yep.

HR asks about project exclusion

HR, Susan Marcinko: All right. You said since January, you used to be on a lot of projects, but nothing since. Were other people put on projects? Are you aware of anybody else working special projects?
Me: Yes, everyone, except for me. Actually, to the point where if you go and look at our work availability board, everyone is red or orange and I'm green. I have no special projects. And I definitely put it out there that, you know, I'm interested in working and developing myself and, you know, collaborating with my peers. But those opportunities have not been available to me since I've made my complaint about her.
HR, Susan Marcinko: And when you've asked Rosanna about projects or, you know, opportunities, what has her explanation been?
Me: I mean, she doesn't really have an explanation. She just tells me, you know, like, you're still down for the cause, right? And I'm like, yeah, you know, I'm here to support you in any way possible. And I know there are other folks in our department that, you know, have multiple projects, you know, three, four projects.
HR, Susan Marcinko: So what does that comment, though, "you're still down for the cause" mean to you?
Me: Just, you know, supporting her team and helping us reach our performance goals.
HR, Susan Marcinko: Okay. And others had multiple projects.
Me: Correct.
HR, Susan Marcinko: Do you know if any of them received those projects to do since you made your complaint back in January? Were they already on those projects beforehand?
Me: Yes, there's been a multitude of projects since then. But none more given to you. Right, and none.
HR, Susan Marcinko: Okay. Gotcha.

Leave timeline follow-up

HR, Susan Marcinko: All right, let me just take it real quick, run through my questions. Some of this you've already answered, I didn't have to ask you. You just provided it for me as you were talking. Let's see. You said your leave began February 21st. Was that the first day that you missed?
Me: Um, you know what? Yes. Yes. Correct. Yep, February 21st.
HR, Susan Marcinko: Had you missed any time prior to that recently?
Me: Recently? Um, no, not unapproved or unplanned time.
HR, Susan Marcinko: Okay. So you were out from roughly 2/21 until 3/25 when you attempted to come back.
Me: Correct.
HR, Susan Marcinko: While you were out, were you keeping in contact with Rosanna or anybody else in the management team?
Me: Yes, Rosanna. I kept in contact with her.
HR, Susan Marcinko: Was that, like, for agents, we require them to call every day. Technically, I guess, our exempt staff is supposed to do the same thing, unless they're on an approved leave. So were you contacting her regularly? Were you contacting her by phone? Were you sending her emails?
Me: Yeah, I contacted her by phone and I would let her know or text phone texted. And I would let her know, hey, you know, I'll be out for sure until here. I'll keep you updated, and so on.
HR, Susan Marcinko: Okay. And you didn't officially open a leave with Hartford?
Me: Hartford? No, I did not have a leave open with Hartford.
HR, Susan Marcinko: Yeah, they manage all of our leaves of absence.
Me: All right, well, then I don't know if I. I can't say whether I did or did not. I know I did talk to PALs.
HR, Susan Marcinko: Yeah, you would have had to fill out forms. Your doctor would have had to provide documentation.
Me: So I did fill out a form. The time for my doctor to fill out the documentation, the period had not closed by the time I came back. So it was still open for me to be processed through the leave process. But the job abandonment was input during that window of time that I was going to be, whether I would or would not provide the information. Right. So I didn't even get the opportunity to submit information.
HR, Susan Marcinko: So, you know, with the leave of absence, the first five days are, you know, what they call a waiting period, and that has to come out of your PTO bucket. And then generally, if you're approved for a leave, even conditionally approved for leave, you know, the leave process starts and, um, if you're eligible for short-term disability and they're on that concurrently if somebody has FMLA. But you never provided documents to them. Is that correct?
Me: Correct. At the time the job abandonment was initiated, I had not provided any information, but also the time frame that they gave me was still open, right? So I still had time to submit the paperwork.
HR, Susan Marcinko: All right. Maybe what I'm missing here is when did you contact PALs or Hartford to begin that process?
Me: Oh, let's see. I'm going to have to pull or get into my personal email. Let me see. Yeah, I don't have that note available right here. But yeah, I can pull it up in my personal email and provide it to you.
HR, Susan Marcinko: You know, if you could just confirm that for me, I just, we're trying to understand again. I'm just trying to piece together a time frame of, you know, when things occurred to help me understand all the different facts of the situation.
Me: Sure.

Anita / Tammy / HR contacts

HR, Susan Marcinko: Let me see, make sure there's anything else I needed to capture here. Okay. You mentioned that you contacted Tammy, I recall.
Me: Yes.
HR, Susan Marcinko: And that was immediately after the comment, the racial slur comment?
Me: Yes, I submitted a human resource consultation form.
HR, Susan Marcinko: Okay. And she responded back to, you know, the information I had put. Okay. And then you mentioned something about you were speaking to Anita.
Me: Right.
HR, Susan Marcinko: And she had told you that Rosanna was experiencing, I guess, the same emotional concern about you? Help me understand that a little bit better.
Me: Yeah. Um, you know, I told her that this was one of the most traumatic experiences that I've ever experienced in my life. And, you know, I expressed to her that I was very upset. And she said, well, I just want you to know that Rosanna has went through just as much as you have, you know, just the, you know, her having to go through this, like, it's really had a strong impact on her. So basically saying that, yes, she had equal amount of emotional stress as I had while I was not knowing whether I was going to have a job or not.
HR, Susan Marcinko: Okay. And how did you come to talk to Anita? I thought you said Tammy was the person who talked to you about the consult that you have been adopted. Or there's two separate things?
Me: Two separate incidents. Tammy, I spoke to her regarding my initial complaint, regarding Rosanna. Anita ended up taking over that in January or February. The job abandonment issue.
HR, Susan Marcinko: Oh, that's what it was. It was the job abandonment that took. Okay. Yeah. All right. Now it's making sense. I do much better when I've got all the dates in a row.
Me: Yes. I'll go back and start checking the dates and stuff.

HR asks for documents / evidence

HR, Susan Marcinko: All right. Do you have any documents, recordings, snips, text messages, screenshots of texts, anything that you want to share with me, anything that you think I should look at?
Me: Um, the only thing that I guess I can really say right now, um, and, you know, this has been well documented over time since January, is that I really, and I've spoken to so many people about this, about working in this type of environment, having a manager that is constantly retaliating against me, really putting me through daily emotional stress, literally traumatic every day. I really, really hope that you guys finally take this seriously because what is being allowed to happen right now is abusive and I just don't think that this should be accepted and I really don't feel like I should be subjected to this any further. I mean, it's just gone on too long.
HR, Susan Marcinko: So I will, you know, look at what we can do in the interim while this is being reviewed and investigated. It may be possible to move you to another team. Is there a particular team within your department that you would be comfortable going to?
Me: Um, I mean, for me, I don't even. Anywhere but here at this point, you know, like.
HR, Susan Marcinko: Okay. I had started to ask if you had any text messages, emails, um, any kind of evidence that you think might show the way that she's been interacting with you. Do you have anything like that that you want me to see?
Me: Um. I do have notes and things like that, but I probably, at this time, you know, because I did file a charge with the EEOC, I don't feel comfortable sharing that at this time. But of course, I'm open to, you know, help us get to the bottom of this. And I do want to be proactive in getting this issue resolved, of course. But, you know, I just need to check my resources and things on that.

Attorney / EEOC charge mentioned

HR, Susan Marcinko: Okay. So you mentioned that you had filed a charge. If you are represented by an attorney, I just need you to let me know because it changes the way that, you know, you engage.
Me: Yes, I do have an attorney. And he did send out a letter of representation to you guys as well.
HR, Susan Marcinko: Okay. And I'm not involved in anything related to the charge, so that wouldn't come to me. So I just want to, you know, check in with you. So you do have an attorney.
Me: Right.
HR, Susan Marcinko: And if they've sent a letter, then the attorneys will be involved with that. I don't need to be involved in that. All right. If you would, you know, definitely check with your attorney, then it would be helpful to me if you do have things that shows any kind of, you know, inappropriate or misconduct on her part that lets me get, you know, hopefully to a conclusion more quickly.
Me: Right.
HR, Susan Marcinko: You know, I can certainly understand not being comfortable sharing it until, you know, you've checked with your resources.

HR asks who else to interview

HR, Susan Marcinko: So is there anybody else that you think that, you know, I should talk to? Is there anybody else that you think might have similar experiences or similar knowledge?
Me: You know, I think the best folks for you to talk to just to get clarification on my specific issue would be Tammy, Anita, the folks that I have consistently made complaints to. I feel like they're fully aware of the entire timeline. I mean, as I've said, this has been going on since January, right? So we're like six months into this.
HR, Susan Marcinko: And I can, I will certainly, you know, do my due diligence there. I just mean if there was anybody else, any other peers, any other coworkers, any other employees that you think might be able to support some of the things that you've shared or may have had their own experiences even that, you know, you think I should talk to?
Me: You know, I can't say anyone in particular.
HR, Susan Marcinko: Okay. And that's fine. You know, you may not know anybody. I just want to make sure I'm, you know, doing as thorough of an investigation as possible.

Closing / HR says she will check in and inquire about moving Shawnna

HR, Susan Marcinko: All right. If you think of anything else that I need to know, and if you, you know, recall anything that we've talked about, that maybe you want to provide some additional details about, let me know. And if it's something you can send, feel free to email me. If you would rather, you know, have a conversation about it too, that's fine. We can schedule time to do that, okay?
Me: Okay.
HR, Susan Marcinko: All right. And I will let you know if I need any more clarification or need some follow-up on any of the information that you've given me. You've given me a lot, so it's probably going to take me a little bit of time to sort through and try and get, you know, an idea of what's transpired. But I will check in with you next week just to, you know, keep you up to date on where I'm at, okay?
Me: Okay.
HR, Susan Marcinko: All righty. And I will inquire about moving you to another team if possible while this is being investigated, okay?
Me: Yes. Anything that would, you know, finally just make the work day less hostile, I guess, you would say, would be fantastic. Like I said, this has been going on since January. Very stressful situation to be in on a daily basis when my direct manager is carrying out, you know, these.`,
  },
  {
    id: "EX-062",
    exhibitNumber: "EX-062",
    fileName: "June 5, 2024 — HR Follow-Up Call with Susan Marcinko re: Interim Move (transcript)",
    date: "June 5, 2024",
    category: "Transcript",
    peopleIds: ["harbin", "susan", "allan", "carfagna"],
    summary:
      "Verbatim transcript of the June 5, 2024 HR follow-up call with Susan Marcinko. Susan confirmed she had spoken with Greg Carfagna earlier that day and arranged an interim reporting arrangement so Harbin would not have to have one-on-one interactions with Rosanna Blackson during the investigation. Key statements on the record: (1) Greg confirmed Harbin could be officially moved to Allan Glover's organization effective July 1, 2024, per the department's monthly move cadence; (2) In the interim (June), Harbin would route one-on-one manager direction to Allan rather than Rosanna; (3) Harbin would still be expected to attend planned team meetings shared with Rosanna's broader group but could log off if a morning touch-base became one-on-one with Rosanna; (4) Harbin's team would move with her to Allan's org as 'least disruptive,' per Greg; (5) Susan stated she would maintain confidentiality and did not see a reason to brief Allan on the underlying complaint; (6) Susan confirmed the investigation was ongoing and that she had 'interviews planned.' Relevance: (a) confirms HR's contemporaneous acknowledgment that interim separation from Rosanna was warranted — itself an HR-level recognition that the May 29, 2024 complaint and racial-slur allegation were serious; (b) establishes that Greg Carfagna was directly involved in the move logistics in June 2024, contradicting any later Respondent suggestion that Greg was uninvolved in Harbin's placement decisions; (c) documents that Harbin was favorably moved into Allan Glover's organization in July 2024, which is the same organization in which the later retaliation events (Training Bay selection, schedule blocks, the 'blockade' comments) occurred; (d) supports the protected-activity / knowledge-by-decisionmakers element of the retaliation and hostile work environment claims.",
    linkedEventIds: [],
    reliability: "confirmed-transcript",
    filePath: "",
    fileKind: "transcript",
    transcriptText: `June 5, 2024 HR Follow-Up Transcript
Participants: Shawnna Harbin and HR, Susan Marcinko
Topic: Interim move away from Rosanna during investigation

Opening / Technical Issues

HR, Susan Marcinko: Have a seat here. Up. Hi there. For some reason, my mic's not working.
Me: Yeah, I can't hear you.
HR, Susan Marcinko: How do you say? It just shows you a mute. Let me... Settings. I made a sound. There. There we go. Okay. Hello.
Me: Hi.

HR explains purpose of call

HR, Susan Marcinko: All right. This won't take long. I just wanted to catch you. I'm trying to work out a potential move for you so that, you know, you don't have to have one-on-one interaction with Rosanna while we're working on your investigation. Okay?
Me: Sure.
HR, Susan Marcinko: I had some conversation with Greg Kfanya earlier today, and you know, your department makes moves officially on the first of the month.
Me: Right.
HR, Susan Marcinko: So he can definitely have you officially moved by 7/1. However, I asked him, you know, since you had spoken favorably about, you know, working under Allen's organization, if it would be possible, one, to move you to that organization effective with July 1st. And he said, yeah, that wouldn't be a problem. But in the interim, because what I wanted to do is try and make it so that, you know, you don't have to have one-on-one interactions, you know, you, you're, you know, clearly very upset about this. And, you know, I just want to make sure that, you know, I'm trying to make this as easy as possible for you while we're, you know, taking our time to do a thorough investigation.
Me: Right.

Interim reporting arrangement through Allan

HR, Susan Marcinko: So we can, according to Greg, he can set it up so that, you know, you'll still have to attend any team meetings for the rest of June that are already planned, where your team joins the rest of Rosanna's teams. I don't know what that looks like. There might be situations. There might not be. I have no idea. But, you know, if you need one-on-one direction from a manager, what I'd like to do is set it up so if you can go to Alan in the interim. Okay. Would that be, you know, helpful for you?
Me: Yes, I do have, so we have like, um, we have a group manager meeting every morning with Rosanna. And sometimes it'll just be like me, myself, and maybe like one other manager in the department and we meet with her and, you know, might play a game or, you know, we just talk about our day and things like that. And I would, to me, that's one of like almost a one-on-one type of interaction where it's just very very uncomfortable for myself. And, you know, I don't want to not go to them because I don't want to, you know, look like I'm not really participating or, you know, being proactive about, you know, my day. But would that be something that I would still need to attend? Or, no.

Morning meetings with Rosanna

HR, Susan Marcinko: So is it a forum where you're bringing up anything that's planned for the day, any issues or concerns that Rosanna would need to know about in order to with the team? Or is this just sort of a touch base in the morning?
Me: Yeah, just a morning touch base. And it's really supposed to be non-work related. So more like, you know, like personal banter.
HR, Susan Marcinko: Right.
Me: Yeah, it could be just me sometimes. It depends on, you know, if the other TLs have availability or, you know, whatever it may be. But because I come in almost right when it begins. So within like the first 15 minutes, usually I always have availability because I'm just getting in. So it could be me and her one-on-one. It could be, you know, someone else in the department as well.
HR, Susan Marcinko: All right. And those are every single morning?
Me: Right. Mm-hmm.
HR, Susan Marcinko: All right. Um. I'm going to say, I will leave it up to you, okay, with what you feel comfortable doing as far as that morning meeting. Okay. You know, there may be information that's being shared. I don't know, and I don't want you to, you know, miss that if that's something that you want to attend. I'm also trying to make this as, you know, seamless as possible, you know, for you so that it's, you know, you don't have to be on a call with her one-on-one.
Me: Right.
HR, Susan Marcinko: So, you know, perhaps if you are in a one-on-one situation on that call and you want to log off, you know, I would say, you know, that's fine. If you think you could be on the call with your peers and, you know, there's something valuable to learn or share, then I'll leave that up to you on whether you want to attend that or not.
Me: Sure.

Official move to Allan's team

HR, Susan Marcinko: But as far as moving permanently, well, I can't say permanently because we constantly reorder. But with the next monthly moves, moving to Alan's team, is that going to be something that you think is appealing to you that you can, you know, be successful at?
Me: Yes.
HR, Susan Marcinko: Okay. All right. I am going to send you a follow-up email just to kind of recap that, and I just need you to respond back so that I have it in writing, essentially that you acknowledge that you're going to go to a new team. I just want it to be clear so that, you know, if there's any question later, that you have that in writing from me.
Me: Sure.
HR, Susan Marcinko: We were making that offer for you.

Interim issues before July move

HR, Susan Marcinko: Is there anything else that you can think of in the interim that you might have to deal with in June that I need to know about right now?
Me: Not that I can think of right now. The only other question that I have would be, is if, and you may or may not know this, I'm not sure, but if my team would go with me to Alex, or would I just be restarting with a new group of folks?
HR, Susan Marcinko: I know, I believe you're going to carry your team with you. I think that's the least disruptive from what Greg said.
Me: Right. Okay, great.
HR, Susan Marcinko: I know, I'm not in the weeds, so I don't know all the, like how moves happen in your org, but he said it would be, you know, the least disruptive if we can have your team stay with you.
Me: Okay.
HR, Susan Marcinko: And, you know, the move impacts others as well. So that's why they tend to make these moves just on the first of the month.
Me: Right. Okay.

Confidentiality / limited sharing

HR, Susan Marcinko: All righty. I don't know how soon we can get all this communicated because, you know, I'm trying to maintain confidentiality as well on, you know, who needs information in order to be able to, you know, do jobs.
Me: Right. Right.
HR, Susan Marcinko: So, you know, obviously, you had copied, um, Greg on your email, so he was aware of the concerns. But I don't see any reason for why Alan would have to be involved in, you know, getting that information. So that's still private for you.
Me: Okay.

Closing / HR confirms investigation is ongoing

HR, Susan Marcinko: Okay. That was all I needed. I just wanted to see. I'll send you a real quick follow-up and then I'll let Greg know so that he can try and put some of that stuff in the works. If you, you know, bear with me while we try and get this finalized, you might have some sort of interaction with Rosanna in the interim, but it should be professional and it should be about business. Yep. Right?
Me: Yeah, definitely.
HR, Susan Marcinko: Okay. If anything else pops out, let me know. And I'm still working on, you know, your case. So I have some interviews planned, but hopefully I'll be able to follow up with you. Okay.
Me: All right, great.
HR, Susan Marcinko: All, any questions before we go?
Me: Nope. Nothing as of right now. If I think of anything, I'll, you know, shoot you an email or something.
HR, Susan Marcinko: Yeah, sure. Email me or we can, you know, try and find time. My calendar is a little crazy this week. I've got a lot of training and I have some medical appointments for myself. So, but email is probably the fastest way of getting a hold of me. But let me know if anything else happens, okay?
Me: Okay, great.
HR, Susan Marcinko: All right. Well, thank you. I appreciate it.
Me: Thanks. Talk to you soon.
HR, Susan Marcinko: Bye.
Me: Bye.`,
  },
  {
    id: "EX-064",
    exhibitNumber: "EX-064",
    fileName: "July 10, 2025 — Contemporaneous Text Messages to Amber (post-Allan meeting)",
    date: "July 10, 2025",
    category: "Contemporaneous communication",
    peopleIds: ["harbin", "allan"],
    summary:
      "Same-day iMessage thread with coworker Amber sent at 2:15 PM on July 10, 2025 — immediately after Harbin's meeting with Allan Glover regarding the hardship fund. Verbatim text: \"Girlll / Did you mention something about the hardship fund? I just met with Allan and I felt like he was insinuating that I was only helping Black people. I offered the same thing to anyone and everyone. / The meeting just felt very weird. He was like that's a problem. / I was like what are you trying to say who did what I'm confused and he didn't clarify.\" Amber replies: \"No u told me u would look into it. I was just waiting on u.\" At 4:21 PM Harbin follows up: \"Lol girl. I had to ask him what he was saying. He was like I was just speaking in general, but you're misinterpreting what I said. I was like OK but I don't know it was just weird. It seemed like he had a major attitude.\" Relevance: (1) contemporaneous corroboration — sent the same day as the meeting, eliminating reconstruction or hindsight-bias arguments; (2) directly corroborates the hostile work environment / race element by showing Harbin perceived Allan's hardship-fund comments as racially targeted (\"only helping Black people\") in real time; (3) corroborates the \"What are you trying to get to / say?\" deflection pattern attributed to Allan, and Allan's \"that's a problem\" remark; (4) pairs with the Teams chat follow-up where Allan replied \"I did not think that / I weas just providing an example of what could happen\"; (5) the second message confirms Allan refused to clarify when directly asked, consistent with the pattern shown in the September 19, 2025 Training Bay transcript.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-064-text-amber-jul10.png",
    fileKind: "image",
  },
  {
    id: "EX-065",
    exhibitNumber: "EX-065",
    fileName: "Teams Chat with Rosanna Blackson — \"Never Added to the Waitlist\"",
    date: "2025 (Teams screenshot, 8:04 AM / 10:11 AM timestamps)",
    category: "Contemporaneous communication",
    peopleIds: ["harbin", "rosanna"],
    summary:
      "Teams chat with Rosanna Blackson (then-manager). (1) 8:04 AM — Rosanna writes: \"Good morning! In Greg's meeting and reviewing TL completion for Monthends and Compliance Trainings. I thought you had completed these.\" with an embedded LearningHub screenshot showing \"14 INCOMPLETE\" against an 11-required / 3-recommended baseline. (2) 10:11 AM — Harbin replies: \"Yes, I can completed all of the ones that are due around 7 trainings. The remaining trainings were not due until October. Did you want me to do all of those as well?\" (3) Harbin then writes: \"I need to call out today, I'll but using my personal holiday but I did want to let you know I reached out to Ryan and field support about my schedule time change. Going from p.m. to mid shift. They said that I was never added to the waitlist.\" Relevance: (1) contemporaneous, in-writing statement from Discover field support — relayed by Harbin to her manager the same day — that Harbin was never added to the mid-shift waitlist, directly contradicting Respondent's position that Harbin was on the waitlist, was offered a slot, and declined; (2) supports the February 2025 waitlist removal and July 2025 reset-date evidence; (3) documents same-day stress impact (use of personal holiday to call out) tied to the schedule/waitlist dispute, supporting damages; (4) shows Harbin escalated through proper channels (Ryan / field support).",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-065-rosanna-waitlist.png",
    fileKind: "image",
  },
  {
    id: "EX-066",
    exhibitNumber: "EX-066",
    fileName: "Official Discover \"TL Shift Change Process\" (Tyler Wilding)",
    date: "Internal Discover policy document",
    category: "Employer policy document",
    peopleIds: ["harbin"],
    summary:
      "Official Discover internal policy document titled \"TL Shift Change Process\" authored by Tyler Wilding. Key verbatim policy text under \"TL Shift Change Request — Did you know?\": (1) \"All TLs start in a permanent PM shift, unless a business need requires starting them in a temporary shift.\" (2) \"DMs and AMs can make temporary moves, permanent moves, or put the TL on a waitlist.\" (3) \"Once a TL discusses the desired [shift] with their DM/AM, the DM/AM will open a ticket within the Car Field Support Request Form.\" (4) Bold red callout: \"ALL MOVES REQUIRE A CAR FIELD SUPPORT TICKET TO BE SUBMITTED.\" The document also shows the CAR Field Support Request Form ticket-type dropdown including \"Team Leader Shift/Status Change.\" Relevance: (1) anchors that PM is the default permanent assignment — Harbin's PM schedule is the policy baseline, not a punishment or unfilled accommodation; (2) DMs and AMs (not a centralized neutral HR process) control all movement decisions, corroborating Allan Glover's September 19, 2025 admission that the decisionmakers were \"myself, Amber, Trevor, Dan\" (EX-059); (3) \"ALL MOVES REQUIRE A CAR FIELD SUPPORT TICKET\" — Respondent must produce a ticket for (a) the alleged May 2025 day-shift offer, (b) the February 2025 waitlist removal, and (c) every comparator move cited in EX-022 / EX-010; absence of a ticket = no policy-compliant offer or move occurred; (4) supports the Section III.E.1 \"Key Contradiction\" rebuttal of the November 6, 2025 HR call.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-066-tl-shift-change-process.png",
    fileKind: "image",
  },
  {
    id: "EX-067",
    exhibitNumber: "EX-067",
    fileName: "Teams Chat with Allan Glover — LVAR Recognition Document Credit Removal",
    date: "Teams chat (8:29 AM timestamp; Allan \"Out of office\" status)",
    category: "Contemporaneous communication",
    peopleIds: ["harbin", "allan", "rosanna"],
    summary:
      "Teams chat between Harbin and Allan Glover regarding the removal of Harbin's name and credit from an LVAR Recognition document she created. Verbatim exchange — Harbin: \"I hope you're doing well. I noticed that Rosanna removed my name and credit from the LVAR Recognition document that I created. This is concerning to me, as I worked hard on it, and it's important that contributions are properly acknowledged. Could we possibly follow up on this issue? I'd appreciate your help in addressing it.\" Allan replies in four separate messages: \"Ugh...I'm sorry and yes let's discuss.\" / \"I'm very sorry!!\" / \"The point of placing your name on their is to acknowledge intellectual property and providing credit\" / \"I'm really sorry.\" Harbin responds: \"Yes, I'm just really frustrated by this situation. It's really important that my work is recognized as it has not been in the past. Thanks for understanding though.\" Allan replies: \"Of course I understand and again, I'm very sorry\" (Harbin reacts with a heart). Relevance: (1) concrete, documented instance of project-credit erasure by Rosanna Blackson — the same manager named in the May 29, 2024 racial slur complaint (EX-061); Allan's admission that the purpose of the name is to \"acknowledge intellectual property and providing credit\" confirms the removal stripped Harbin of formal recognition; (2) Allan's repeated apologies function as an admission by a management decisionmaker that the removal was improper; (3) Harbin's contemporaneous statement that her work \"has not been [recognized] in the past\" establishes pattern, not isolated incident; (4) directly rebuts Respondent's \"no materially adverse action\" position by documenting a tangible adverse action (loss of recognition / IP credit); (5) supports Section III.B (retaliation) and III.C (hostile work environment) as cumulative-conduct evidence involving Rosanna.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-067-allan-lvar-credit.png",
    fileKind: "image",
  },
  {
    id: "EX-068",
    exhibitNumber: "EX-068",
    fileName: "CAR TL Shift Changes SOW.pdf — Standard Work Documentation",
    date: "Last Update shown: 3/26/2025",
    category: "Employer policy document",
    peopleIds: ["harbin"],
    summary:
      "Screenshot of an internal PDF titled \"CAR TL Shift Changes SOW.pdf\" showing formal standard-work documentation for Team Lead shift changes. The document header reads \"CAR TL SHIFT CHANGES\" and identifies Tyler Wilding as Content Owner and Edina Markus as Manager. The SOW Description states: \"The purpose of this standard work is to ensure the process for Team Lead (TL) shift changes is followed correctly.\" Process Step A states: \"A Department/Area manager completes a TL Shift/Status Change ticket\" and the comments specify: \"DMs always submit the ticket, but a permanent shift move requires their director's approval. DMs can approve temporary shifts alone.\" Process Step B states that the CAR Analyst will \"Confirm TL has been a CAR TL for at least 12 months\" and, if qualified, \"review list to see if there are other TLs that qualify,\" then \"Respond with closure of ticket whether the shift change is permanent, temporary or further consideration is needed, with reasoning.\" Additional comments state: \"≥12 months tenure as a CAR TL allows for a permanent shift change\" and \"Requests should be handled in chronological order.\" Relevance: (1) this is stronger policy evidence than the prior overview screenshot because it is a formal SOW document with identified owner/manager and a 3/26/2025 update date; (2) confirms a required ticket-based process plus director approval for permanent moves, directly undermining any undocumented alleged offer/decline narrative; (3) confirms a 12-month tenure qualification rule and chronological-order handling, supporting Harbin's argument that waitlist treatment should be traceable and comparator-consistent; (4) supports production requests for the TL Shift/Status Change ticket(s), closure reasoning, staffing-sheet updates, and chronology records; (5) reinforces that any claimed move, removal, or offer should leave documentary artifacts in the CAR process records.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-068-car-tl-shift-changes-sow.png",
    fileKind: "image",
  },
  {
    id: "EX-069",
    exhibitNumber: "EX-069",
    fileName: "Teams Chat — Allan Glover forwarding Jen Roy waitlist screenshot",
    date: "7/14 (11:48 AM / 11:54 AM timestamps shown)",
    category: "Contemporaneous communication",
    peopleIds: ["harbin", "allan"],
    summary:
      "Teams chat screenshot in which Allan Glover sends Harbin a screenshot of a message thread with Jen Roy. Allan writes: \"Edina is still out so, I asked Jen:\" The embedded screenshot shows Jen Roy responding to the question \"Silly question, do you know where she falls on the waitlist by chance?\" with a table labeled \"Shift Change Request\" listing names, current shifts, and requested shifts. The table includes \"Shawnna Harbin\" with Current: \"PM\" and Requested: \"AM.\" Other entries shown include Nameer Khan (PM→MID), Courtney Griffith (MID→AM), Caton Woods (MID→AM), and Dominic Daniels (PM→AM). Harbin replies: \"Not too shabby! Thank you for the update!\" and Allan responds: \"You bet!\" Relevance: (1) management was actively consulting the waitlist/shift-request records and discussing where Harbin \"falls on the waitlist,\" which rebuts any claim that the record status was unknowable or informal; (2) the screenshot shows Harbin listed as PM requesting AM, helping document how management internally characterized her request at that moment; (3) this creates a comparison point against later versions and version history showing deletions/re-additions, supporting the record-integrity argument; (4) supports production of the underlying Jen Roy communication, the source spreadsheet/workbook, and associated ticket records; (5) corroborates Allan's personal involvement in obtaining and relaying waitlist status information.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-069-allan-jen-waitlist-chat.png",
    fileKind: "image",
  },
  {
    id: "EX-070",
    exhibitNumber: "EX-070",
    fileName: "Current TL Shifts August 2025 — waitlist version history showing Harbin entry on July 16, 2025",
    date: "Screenshot taken 10/4/2025; selected version dated July 16, 12:53 PM",
    category: "Business record / version history",
    peopleIds: ["harbin"],
    summary:
      "Screenshot of the SharePoint/Excel version history for the workbook \"Current TL Shifts August 2025.xlsx\" with the version dated \"July 16, 12:53 PM\" selected. The visible table header reads: \"Current Waitlist (Eligibility Definition = In role 12+ months, next in line on waitlist, current business need for requested shift)\" and includes the note: \"**DM must open ticket with CFS to request TL shift change/placement on waitlist**.\" The visible rows list Nameer Khan, Courtney Griffith, Caton Woods, Leslie ArreolaPena, Dominic Daniels, and Shawnna Harbin. Harbin's row shows Shift Requested: \"AM\" and Date Requested: \"7/17/2025\" with Months as CAR TL: \"27.83\", Current Shift: \"PM\", Temp/Perm: \"P\", Qualifies: \"Yes.\" The right-side version pane shows later edits by Edina Markus on August 12 and August 18 and earlier edits including July 3 and multiple February/March entries by Jen Roy and Edina Markus. Relevance: (1) documents Harbin's reappearance on the waitlist in mid-July 2025 with a reset date of 7/17/2025, supporting the claim that she was re-added rather than continuously maintained; (2) the workbook itself states that DM/CFS ticketing is required for placement on the waitlist, reinforcing the missing-record problem for any alleged offer/removal; (3) the version history identifies key custodians/editors (Jen Roy, Edina Markus) and timestamps relevant to the February deletion / July re-addition timeline; (4) supports the record-integrity argument that the waitlist was manipulated and later repopulated with a new date rather than preserved accurately.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-070-waitlist-version-history-jul16.png",
    fileKind: "image",
  },
  {
    id: "EX-071",
    exhibitNumber: "EX-071",
    fileName: "Current TL Shifts August 2025 — earlier version history view showing July 3, 2025 state",
    date: "Screenshot taken 10/4/2025; selected version dated July 3, 2:28 PM",
    category: "Business record / version history",
    peopleIds: ["harbin"],
    summary:
      "Second screenshot of the same SharePoint/Excel version history for \"Current TL Shifts August 2025.xlsx\" with the version dated \"July 3, 2:28 PM\" selected. The visible waitlist table shows Nameer Khan, Courtney Griffith, Caton Woods, Leslie ArreolaPena, and Dominic Daniels — but not Shawnna Harbin. The same header appears: \"Current Waitlist (Eligibility Definition = In role 12+ months, next in line on waitlist, current business need for requested shift)\" and the same note states: \"**DM must open ticket with CFS to request TL shift change/placement on waitlist**.\" The right-side version history shows numerous earlier February 25 entries modified by Jen Roy, plus later July 16, August 12, and August 18 edits. Relevance: (1) this screenshot is a direct contrast exhibit to EX-070, showing that as of July 3, 2025 Harbin was not listed on the current waitlist, while by July 16 she appears with a new 7/17/2025 request date; (2) that contrast supports Harbin's claim of removal and later re-addition with a reset date; (3) the repeated ticket-note in the workbook strengthens the demand for the corresponding CFS ticket(s); (4) the version pane identifies the time window and custodians whose edits should be audited to determine when and why Harbin's entry was removed and later restored.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-071-waitlist-version-history-jul3.png",
    fileKind: "image",
  },
  {
    id: "EX-072",
    exhibitNumber: "EX-072",
    fileName: "Current TL Shifts — waitlist version dated February 25, 12:01 PM (Jen Roy modified)",
    date: "Screenshot taken 10/4/2025; selected version dated February 25, 12:01 PM",
    category: "Business record / version history",
    peopleIds: ["harbin"],
    summary:
      "SharePoint/Excel version-history view with the February 25, 12:01 PM version selected (modified by Jen Roy). The visible Current Waitlist table lists only: Nameer Khan (MID), Cody Christensen (AM, 2/28/2023), Kandace Adkins (AM, 1/2/2024), Kaitlin Reed (AM, 1/23/2024), Cory Galt (AM, 2/28/2024), Hunter Samuel (MID, 6/10/2024), and Courtney Griffith (AM, 7/1/2024) — Shawnna Harbin is NOT on the list. The right-side version pane shows a dense cluster of February 25 edits by Jen Roy (10:53 AM, 12:01 PM, 12:46 PM, 7:22 PM, 7:31 PM) plus earlier Feb 18 edits by Lilly Cano and Edina Markus, and later edits on March 19, July 3, and July 16. Relevance: (1) direct evidence that as of February 25, 2025 Harbin's name had been removed from the waitlist; (2) identifies Jen Roy as the editor making repeated changes that day, supporting the manipulation/removal narrative; (3) anchors the February 2025 deletion claim with a timestamped business record; (4) combined with EX-070 (July 16 re-addition) and EX-071 (July 3 still absent), establishes the deletion → re-addition with reset date pattern.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-072-waitlist.png",
    fileKind: "image",
  },
  {
    id: "EX-073",
    exhibitNumber: "EX-073",
    fileName: "Current TL Shifts — waitlist version dated January 14, 4:26 PM (Harbin present)",
    date: "Screenshot taken 10/4/2025; selected version dated January 14, 2025 4:26 PM",
    category: "Business record / version history",
    peopleIds: ["harbin"],
    summary:
      "SharePoint/Excel version-history view with the January 14, 2025 4:26 PM version selected (modified by Lilly Cano and Edina Markus). The visible Current Waitlist includes: Nameer Khan, Cody Christensen, Kandace Adkins, Kaitlin Reed, Cory Galt, **Shawnna Harbin (AM, 6/26/2024, 19.83 months as CAR TL, current shift PM, Temp/Perm T, Qualifies Yes)**, Hunter Samuel, Jamie Fresh, Courtney Griffith, and Jarin Bell. The browser URL bar confirms the file is hosted at discoverfinancial-my.sharepoint.com under edinamarkus_discover_com. The version pane shows preceding edits in December 2024 by Lilly Cano, Darren Hunt, Tyler Wilding, Edina Markus, and Keshia Runyon. Relevance: (1) **direct documentary proof Harbin was ON the waitlist as of January 14, 2025** with a request date of 6/26/2024 and her requested shift as AM (not MID-only as Respondent suggests) — though her later request was for mid-shift; (2) when paired with EX-072 (Feb 25, 2025, Harbin removed), this establishes the February 2025 deletion occurred between Jan 14 and Feb 25, well before the alleged May 2025 offer; (3) confirms file custodianship and identifies the editors active in the relevant window; (4) the file path identifies Edina Markus's OneDrive as the host, supporting the production demand for the complete version history.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-073-waitlist.png",
    fileKind: "image",
  },
  {
    id: "EX-074",
    exhibitNumber: "EX-074",
    fileName: "Current TL Shifts — waitlist version dated November 21, 2024 3:37 PM (Harbin present)",
    date: "Screenshot taken 10/4/2025; selected version dated November 21, 2024 3:37 PM",
    category: "Business record / version history",
    peopleIds: ["harbin"],
    summary:
      "SharePoint/Excel version-history view with the November 21, 2024 3:37 PM version selected (modified by Edina Markus). The Current Waitlist table on this version shows: Nameer Khan, Cody Christensen, Kandace Adkins, Kaitlin Reed, Cory Galt, **Shawnna Harbin (AM, 6/26/2024, 19.83 mos, Current PM, T, Qualifies Yes)**, Hunter Samuel, Jamie Fresh, Courtney Griffith, and Jarin Bell. The left side of the screen shows the HR Current Roster Shifts tab with eligibility data (CAR TL Start Date, Months as CAR TL, Current Shift, Temp/Perm, Eligible for AM?). The version pane on the right lists edits from November 21 through February 18, 2025. Relevance: (1) shows Harbin was on the waitlist as far back as the November 21, 2024 version — confirming continuous presence from at least Nov 2024 through Jan 14, 2025 (EX-073) before the February 2025 deletion (EX-072); (2) the parallel HR Roster Shifts tab establishes the eligibility data structure that determined waitlist placement; (3) the version history identifies Edina Markus as the editor on this specific date and shows the broader editing pattern across multiple custodians.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-074-waitlist.png",
    fileKind: "image",
  },
  {
    id: "EX-075",
    exhibitNumber: "EX-075",
    fileName: "Current TL Shifts — waitlist version dated September 22, 2025 12:34 PM (Harbin re-added with 7/17/2025 reset date)",
    date: "Screenshot taken; selected version dated September 22, 2025 12:34 PM",
    category: "Business record / version history",
    peopleIds: ["harbin"],
    summary:
      "SharePoint/Excel version-history view with the September 22, 2025 12:34 PM version selected (modified by Edina Markus). The visible Current Waitlist shows: Nameer Khan (MID, 2/28/2023), Courtney Griffith (AM, 8/13/2024), Caton Woods (AM, 9/1/2024), Leslie ArreolaPena (MID, 5/20/2025), Dominic Daniels (AM, 6/16/2025), **Shawnna Harbin (AM, 7/17/2025, 27.83 mos as CAR TL, Current PM, P, Qualifies Yes)**, Michelle Swindells (AM, 7/21/2025), and Crystal Pullman (AM, 8/21/2025). A yellow \"OPEN TICKET\" badge is visible in the header area. The right-side version pane shows edits dated September 22, September 10 (Edina Markus, Lilly Cano), August 18, August 12, July 16, July 3, March 19, February 25 (Jen Roy), and earlier — a complete editing timeline. Relevance: (1) **direct proof of the July 17, 2025 reset date** applied to Harbin's waitlist entry after the February 2025 deletion; (2) Harbin's new request date (7/17/2025) places her behind employees with much later eligibility, illustrating the harm from the reset; (3) Temp/Perm has changed from \"T\" (Nov 2024 / Jan 2025 versions) to \"P\" — a permanent classification change worth explanation; (4) the version pane provides a comprehensive custodial timeline (Edina Markus, Lilly Cano, Jen Roy) tying together all four waitlist version-history exhibits (EX-070 through EX-075) into a single chronology: present Nov 2024 → present Jan 2025 → removed by Feb 25, 2025 → still absent July 3, 2025 → re-added with reset date by July 16, 2025 → still on list with 7/17/2025 date as of September 22, 2025.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-075-waitlist.png",
    fileKind: "image",
  },
  {
    id: "EX-076",
    exhibitNumber: "EX-076",
    fileName: "Current TL Shifts — waitlist version dated January 22, 2025 9:36 AM (Lilly Cano / Edina Markus)",
    date: "Screenshot taken 10/4/2025; selected version dated January 22, 9:36 AM",
    category: "Business record / version history",
    peopleIds: ["harbin"],
    summary:
      "SharePoint/Excel version-history view with the January 22, 2025 9:36 AM version selected (modified by Lilly Cano and Edina Markus). The visible Current Waitlist table lists: Nameer Khan (MID, 2/28/2023), Cody Christensen (AM, 1/2/2024), Kandace Adkins (AM, 1/23/2024), Kaitlin Reed (AM, 2/28/2024), Cory Galt (AM, 6/10/2024), **Shawnna Harbin (AM, 6/26/2024, 19.83 mos as CAR TL, Current PM, T, Qualifies Yes)**, Hunter Samuel (MID, 7/1/2024), Jamie Fresh (AM, 7/19/2024), Courtney Griffith (AM, 8/13/2024), and Jarin Bell (AM, 10/15/2024). The right-side version pane shows surrounding edits on Feb 25, Feb 18, Jan 22, Jan 15, Jan 14, and Dec 19, 2024. Relevance: (1) confirms Harbin was present on the waitlist as of January 22, 2025 with original request date 6/26/2024 — narrowing the deletion window to between Jan 22 and Feb 25, 2025; (2) original Temp/Perm classification was \"T\" (temporary), which later versions flipped to \"P\" without explanation; (3) corroborates EX-073 (Jan 14) continuous presence and contrasts directly with EX-072 (Feb 25 removal).",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-076-waitlist-jan22.png",
    fileKind: "image",
  },
  {
    id: "EX-077",
    exhibitNumber: "EX-077",
    fileName: "HR Current Roster Shifts — November 21, 2024 view showing Harbin assigned to Allan Glover / LVAR / PM",
    date: "Screenshot taken 10/4/2025; selected version dated November 21, 2024 3:37 PM",
    category: "Business record / roster",
    peopleIds: ["harbin", "allan"],
    summary:
      "Screenshot of the \"HR Current Roster Shifts\" tab of the Current TL Shifts workbook with the November 21, 2024 3:37 PM version selected. Row 4 (Shawnna Harbin / sharbi1) shows: Status \"Active,\" DM/AM \"Allan Glover,\" Director \"Greg Carfagna,\" Current PCF \"LVAR,\" Current PCF Date \"7/1/2023,\" Months in PCF \"16.87,\" TL Start Date \"4/3/2023,\" Months as TL \"19.83,\" CAR TL Start Date \"4/3/2023,\" Months as CAR TL \"19.83,\" Current Shift \"PM,\" Temp/Perm \"T,\" Eligible for AM? \"Yes.\" The surrounding rows show comparator TLs across multiple DM/AM groups (Amber Laye, Chase Devey, Darren Hunt, Dianna Maloney, Doug Martin, Mario Vasquez, Matthew Cad—) and their respective shift assignments and eligibility statuses. Relevance: (1) authoritative HR-side roster record confirming Harbin's reporting line (Allan Glover → Greg Carfagna), PCF (LVAR), PM assignment, and \"Eligible for AM? Yes\" status as of late November 2024; (2) provides a complete comparator population on the same sheet for shift-equity and movement analysis; (3) Temp/Perm \"T\" is consistent with the contemporaneous waitlist (EX-073/EX-076) and contradicts later \"P\" reclassification (EX-075); (4) supports production of the full HR Current Roster Shifts version history for the relevant window.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-077-roster-nov21.png",
    fileKind: "image",
  },
  {
    id: "EX-078",
    exhibitNumber: "EX-078",
    fileName: "Current TL Shifts — waitlist version dated February 18, 2025 4:06 PM (Lilly Cano / Edina Markus)",
    date: "Screenshot taken 10/4/2025; selected version dated February 18, 4:06 PM",
    category: "Business record / version history",
    peopleIds: ["harbin"],
    summary:
      "SharePoint/Excel version-history view with the February 18, 2025 4:06 PM version selected (modified by Lilly Cano and Edina Markus). The visible Current Waitlist table lists: Nameer Khan (MID, 2/28/2023), Cody Christensen (AM, 1/2/2024), Kandace Adkins (AM, 1/23/2024), Kaitlin Reed (AM, 2/28/2024), Cory Galt (AM, 6/10/2024), **Shawnna Harbin (AM, 6/26/2024, 19.83 mos as CAR TL, Current PM, T, Qualifies Yes)**, Hunter Samuel (MID, 7/1/2024), Jamie Fresh (AM, 7/19/2024), Courtney Griffith (AM, 8/13/2024), and Jarin Bell (AM, 10/15/2024). The right-side version pane shows surrounding edits on July 16, July 3, March 19, February 25 (Jen Roy / Lilly Cano / Edina Markus), February 18, January 22, January 15, January 14, and December 19, 2024. Relevance: (1) **narrows the deletion window to a one-week span between Feb 18 and Feb 25, 2025** — Harbin was still present with original 6/26/2024 request date as of Feb 18, then absent by the Feb 25 12:01 PM Jen Roy edit (EX-072); (2) tight timing makes the removal traceable to specific edits and editors during that week; (3) Temp/Perm still \"T\" at this point, before the later \"P\" reclassification; (4) strengthens production demand for the Feb 18–Feb 25, 2025 edit history, including any CFS tickets, emails, or Teams messages by Jen Roy, Lilly Cano, or Edina Markus referencing Harbin in that window.",
    linkedEventIds: [],
    reliability: "confirmed-screenshot",
    filePath: "/src/assets/exhibits/ex-078-waitlist-feb18.png",
    fileKind: "image",
  },
];

export const exhibitById = (id: string) => exhibits.find(e => e.id === id);

