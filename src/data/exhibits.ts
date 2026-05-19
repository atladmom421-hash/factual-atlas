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
      "e-2025-07-16-waitlist-readded",
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
      "e-2025-07-16-readded",
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
];

export const exhibitById = (id: string) => exhibits.find(e => e.id === id);
