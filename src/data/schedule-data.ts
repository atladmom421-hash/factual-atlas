// Structured schedule-movement data extracted from EX-022
// (Schedule Movement, Flexibility & Comparator Timeline Evidence, 18 pp.)
// Each row links to the underlying evidence pages within the exhibit PDF.

export type ScheduleType =
  | "AM"          // Earlier AM: 7:45/8:00/8:30/9:00 AM–4:30/5:30 PM
  | "Midshift"    // 10:00–6:30 / 10:30–7:00
  | "Mid/Late"    // 11:00–7:30 / 11:30–8:00
  | "PM/Closing"; // 1:00/Closing shift ending 10:00 PM ET

export interface ScheduleRow {
  id: string;
  month: string;            // human readable
  sortKey: string;          // YYYY-MM for sorting
  area: string;
  scheduleType: ScheduleType;
  timeRange: string;
  leaders: string[];        // people IDs or display names
  exhibitId: string;        // EX-022
  evidencePages: string;    // page reference inside the exhibit
  significance: string;
  highlightHarbin?: boolean;
}

// Helper to build /exhibits/EX-022 deep link with #page=N
export const exhibitPageLink = (filePath: string, page: string) => {
  const first = page.match(/\d+/)?.[0] ?? "1";
  return `${filePath}#page=${first}`;
};

export const scheduleRows: ScheduleRow[] = [
  // ── Dec 2024 ─────────────────────────────────────────────
  { id: "s-2024-12-a", month: "December 2024", sortKey: "2024-12", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin"], exhibitId: "EX-022", evidencePages: "pp. 9–10", significance: "Harbin fixed on PM/closing — baseline.", highlightHarbin: true },
  { id: "s-2024-12-b", month: "December 2024", sortKey: "2024-12", area: "Whitehall / TBAY", scheduleType: "AM", timeRange: "8:00 AM–4:30 PM ET", leaders: ["Whitnee Kollar", "Bryan Robles", "Dylan Bryant", "Kandace Adkins", "Josh Faulkner", "Leslie McGregor"], exhibitId: "EX-022", evidencePages: "pp. 9–13", significance: "Earlier-AM schedules already widely in use across Whitehall/TBAY before the 2025 movement period — six TLs on 8:00–4:30." },
  { id: "s-2024-12-c", month: "December 2024", sortKey: "2024-12", area: "TBAY / Whitehall", scheduleType: "Mid/Late", timeRange: "11:30 AM–8:00 PM MST", leaders: ["Julie Cahoon"], exhibitId: "EX-022", evidencePages: "pp. 9–13", significance: "Julie Cahoon on fixed 11:30–8 MST mid/late — confirms a non-Harbin TL filled the mid/late slot." },
  { id: "s-2024-12-d", month: "December 2024", sortKey: "2024-12", area: "Cross-area", scheduleType: "Midshift", timeRange: "10:00 AM–6:30 PM", leaders: ["Marissa Mascarenas"], exhibitId: "EX-022", evidencePages: "pp. 9–10", significance: "Marissa rotating into 10–6:30 midshift — proves midshift TL coverage was in active rotation, not unavailable." },
  { id: "s-2024-12-e", month: "December 2024", sortKey: "2024-12", area: "LVAR", scheduleType: "PM/Closing", timeRange: "1:30 PM–10:00 PM ET (closing)", leaders: ["Shawnna Harbin", "Marc Case"], exhibitId: "EX-022", evidencePages: "pp. 9–10", significance: "Shawnna Harbin and Marc Case both anchored to closing — establishes the PM cohort." },

  // ── Jan 2025 ─────────────────────────────────────────────
  { id: "s-2025-01-a", month: "January 2025", sortKey: "2025-01", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin", "Tyler Millisock", "Marc Case"], exhibitId: "EX-022", evidencePages: "p. 5", significance: "Establishes that Tyler, Marc, and Harbin were all on the same PM-type schedule before movement.", highlightHarbin: true },
  { id: "s-2025-01-b", month: "January 2025", sortKey: "2025-01", area: "Cross-area", scheduleType: "AM", timeRange: "8:00 AM–4:30 PM / 10:00 AM–6:30 PM", leaders: ["Marissa Mascarenas"], exhibitId: "EX-022", evidencePages: "pp. 9–10", significance: "Earlier and midshift schedules confirmed available." },

  // ── Feb 2025 ─────────────────────────────────────────────
  { id: "s-2025-02-a", month: "February 2025", sortKey: "2025-02", area: "PRE-D / DBC", scheduleType: "Mid/Late", timeRange: "11:30 AM–8:00 PM", leaders: ["Tyler Millisock"], exhibitId: "EX-022", evidencePages: "pp. 5–7", significance: "Tyler's earlier/midshift placement appears after movement to PRE-D/DBC — without ticket, not on waitlist." },
  { id: "s-2025-02-b", month: "February 2025", sortKey: "2025-02", area: "Pay Pro", scheduleType: "AM", timeRange: "7:45–4:30 / 8:00–4:30", leaders: ["Nicole Rinard", "Shontelle Buhler"], exhibitId: "EX-022", evidencePages: "p. 14", significance: "Earlier-AM leadership schedules operationally available in adjacent area." },
  { id: "s-2025-02-c", month: "February 2025", sortKey: "2025-02", area: "PRE-D / DBC", scheduleType: "AM", timeRange: "8:00–4:30 / 8:30–4:30", leaders: ["Marla Boyd", "Kari Ross", "Jerry Clark"], exhibitId: "EX-022", evidencePages: "p. 14", significance: "AM leadership placements confirmed in PRE-D/DBC." },
  { id: "s-2025-02-d", month: "February 2025", sortKey: "2025-02", area: "PRE-D / DBC", scheduleType: "Mid/Late", timeRange: "11:00–7:30 / 11:30–8:00", leaders: ["Elisa MataAbarca", "Veronica Lopez", "Will Sandoval"], exhibitId: "EX-022", evidencePages: "p. 14", significance: "Mid/late options available; not just AM and PM extremes." },
  { id: "s-2025-02-e", month: "February 2025", sortKey: "2025-02", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin", "Nameer Khan", "Reggie Rogers"], exhibitId: "EX-022", evidencePages: "p. 14", significance: "Harbin remains on closing while peers across the area span 4 distinct schedule types.", highlightHarbin: true },

  // ── Mar 2025 ─────────────────────────────────────────────
  { id: "s-2025-03-a", month: "March 2025", sortKey: "2025-03", area: "PRE-D / DBC", scheduleType: "Mid/Late", timeRange: "11:30 AM–8:00 PM", leaders: ["Tyler Millisock"], exhibitId: "EX-022", evidencePages: "pp. 6–7", significance: "Tyler placed as MID TL on earlier-shift — March 2025 movement planning." },
  { id: "s-2025-03-b", month: "March 2025", sortKey: "2025-03", area: "Pay Pro / PRE-D", scheduleType: "AM", timeRange: "7:45–4:30 / 8:00–4:30", leaders: ["Nicole Rinard", "Shontelle Buhler", "Marla Boyd", "Kari Ross", "Jerry Clark"], exhibitId: "EX-022", evidencePages: "p. 14", significance: "AM availability continues across adjacent areas." },
  { id: "s-2025-03-c", month: "March 2025", sortKey: "2025-03", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin"], exhibitId: "EX-022", evidencePages: "pp. 5–7", significance: "Harbin remains tied to PM/closing.", highlightHarbin: true },

  // ── Apr 2025 ─────────────────────────────────────────────
  { id: "s-2025-04-a", month: "April 2025", sortKey: "2025-04", area: "PRE-D / DBC", scheduleType: "Mid/Late", timeRange: "11:30 AM–8:00 PM", leaders: ["Tyler Millisock"], exhibitId: "EX-022", evidencePages: "p. 6", significance: "Tyler's earlier schedule continues after department movement." },
  { id: "s-2025-04-b", month: "April 2025", sortKey: "2025-04", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin"], exhibitId: "EX-022", evidencePages: "p. 6", significance: "Harbin remains on closing.", highlightHarbin: true },

  // ── May 2025 ─────────────────────────────────────────────
  { id: "s-2025-05-a", month: "May 2025", sortKey: "2025-05", area: "PRE-D / DBC", scheduleType: "Mid/Late", timeRange: "11:30 AM–8:00 PM", leaders: ["Tyler Millisock"], exhibitId: "EX-022", evidencePages: "p. 6", significance: "Tyler 11:30–8 placement continues." },
  { id: "s-2025-05-b", month: "May 2025", sortKey: "2025-05", area: "PRE-D / DBC", scheduleType: "AM", timeRange: "8:00–4:30 / 8:30–4:30", leaders: ["Marla Boyd", "Kari Ross", "Jerry Clark"], exhibitId: "EX-022", evidencePages: "p. 14", significance: "AM availability persists." },
  { id: "s-2025-05-c", month: "May 2025", sortKey: "2025-05", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin"], exhibitId: "EX-022", evidencePages: "p. 6", significance: "Harbin remains on closing.", highlightHarbin: true },

  // ── Jun 2025 ─────────────────────────────────────────────
  { id: "s-2025-06-a", month: "June 2025", sortKey: "2025-06", area: "PRE-D / DBC", scheduleType: "Mid/Late", timeRange: "11:30 AM–8:00 PM", leaders: ["Tyler Millisock", "Elisa MataAbarca"], exhibitId: "EX-022", evidencePages: "pp. 6, 14", significance: "Multiple leaders on 11:30–8." },
  { id: "s-2025-06-b", month: "June 2025", sortKey: "2025-06", area: "PRE-D / DBC", scheduleType: "AM", timeRange: "8:00–4:30 / 8:30–4:30", leaders: ["Marla Boyd", "Kari Ross", "Jerry Clark"], exhibitId: "EX-022", evidencePages: "p. 14", significance: "AM availability persists." },
  { id: "s-2025-06-c", month: "June 2025", sortKey: "2025-06", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin", "Nameer Khan", "Reggie Rogers"], exhibitId: "EX-022", evidencePages: "p. 14", significance: "Harbin still on PM/closing.", highlightHarbin: true },

  // ── Jul 2025 ─────────────────────────────────────────────
  { id: "s-2025-07-a", month: "July 2025", sortKey: "2025-07", area: "PRE-D / DBC", scheduleType: "Mid/Late", timeRange: "11:30 AM–8:00 PM", leaders: ["Tyler Millisock"], exhibitId: "EX-022", evidencePages: "p. 6", significance: "Tyler continues 11:30–8 across summer." },
  { id: "s-2025-07-b", month: "July 2025", sortKey: "2025-07", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin"], exhibitId: "EX-022", evidencePages: "p. 6", significance: "Harbin on PM/closing — same month her waitlist record was 're-added' with July 17 date.", highlightHarbin: true },

  // ── Aug 2025 ─────────────────────────────────────────────
  { id: "s-2025-08-a", month: "August 2025", sortKey: "2025-08", area: "PRE-D / DBC", scheduleType: "Mid/Late", timeRange: "11:30 AM–8:00 PM", leaders: ["Tyler Millisock"], exhibitId: "EX-022", evidencePages: "p. 6", significance: "Continuity of Tyler's earlier-shift placement." },
  { id: "s-2025-08-b", month: "August 2025", sortKey: "2025-08", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin"], exhibitId: "EX-022", evidencePages: "p. 6", significance: "Harbin remains on closing.", highlightHarbin: true },

  // ── Sep 2025 ─────────────────────────────────────────────
  { id: "s-2025-09-a", month: "September 2025", sortKey: "2025-09", area: "PRE-D / DBC", scheduleType: "Mid/Late", timeRange: "11:30 AM–8:00 PM EST", leaders: ["Tyler Millisock"], exhibitId: "EX-022", evidencePages: "p. 6", significance: "Tyler continued earlier schedule." },
  { id: "s-2025-09-b", month: "September 2025", sortKey: "2025-09", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin"], exhibitId: "EX-022", evidencePages: "p. 6", significance: "Harbin remains on closing.", highlightHarbin: true },

  // ── Oct 2025 ─────────────────────────────────────────────
  { id: "s-2025-10-a", month: "October 2025", sortKey: "2025-10", area: "PRE-D / DBC", scheduleType: "Mid/Late", timeRange: "11:30 AM–8:00 PM EST", leaders: ["Tyler Millisock"], exhibitId: "EX-022", evidencePages: "p. 7", significance: "Final month before written notice to corporate investigator (Oct 7, 2025)." },
  { id: "s-2025-10-b", month: "October 2025", sortKey: "2025-10", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin"], exhibitId: "EX-022", evidencePages: "p. 7", significance: "Harbin still on closing.", highlightHarbin: true },

  // ── Feb 2026 ─────────────────────────────────────────────
  { id: "s-2026-02-a", month: "February 2026", sortKey: "2026-02", area: "Cross-area", scheduleType: "AM", timeRange: "8:00–4:30 / 8:30–4:30", leaders: ["Multiple LVAR/PRE-D leaders"], exhibitId: "EX-022", evidencePages: "p. 15", significance: "Earlier AM schedules continue into 2026." },
  { id: "s-2026-02-b", month: "February 2026", sortKey: "2026-02", area: "Cross-area", scheduleType: "Midshift", timeRange: "10:30 AM–7:00 PM", leaders: ["Tyler Millisock"], exhibitId: "EX-022", evidencePages: "p. 15", significance: "Tyler now on later-mid 10:30–7." },
  { id: "s-2026-02-c", month: "February 2026", sortKey: "2026-02", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin", "Reggie Rogers"], exhibitId: "EX-022", evidencePages: "p. 15", significance: "Harbin remains tied to PM/closing structure.", highlightHarbin: true },

  // ── Mar 2026 ─────────────────────────────────────────────
  { id: "s-2026-03-a", month: "March 2026", sortKey: "2026-03", area: "Cross-area", scheduleType: "AM", timeRange: "8:00–4:30 / 8:30–4:30 / 9:00–5:30", leaders: ["Multiple leaders"], exhibitId: "EX-022", evidencePages: "p. 15", significance: "Earlier schedules continuing across the leadership structure." },
  { id: "s-2026-03-b", month: "March 2026", sortKey: "2026-03", area: "Cross-area", scheduleType: "Midshift", timeRange: "10:30 AM–7:00 PM", leaders: ["Multiple leaders"], exhibitId: "EX-022", evidencePages: "p. 15", significance: "Midshift remains an active leadership schedule." },

  // ── Apr 2026 ─────────────────────────────────────────────
  { id: "s-2026-04-a", month: "April 2026", sortKey: "2026-04", area: "LVAR UM / PRE-D / DBC", scheduleType: "AM", timeRange: "8:00–4:30 / 8:30–4:30 / 9:30–5:30", leaders: ["Multiple leaders"], exhibitId: "EX-022", evidencePages: "p. 15", significance: "Available during the April 2026 return-from-leave / movement period." },
  { id: "s-2026-04-b", month: "April 2026", sortKey: "2026-04", area: "LVAR UM / PRE-D / DBC", scheduleType: "Midshift", timeRange: "10:30 AM–7:00 PM", leaders: ["Multiple leaders"], exhibitId: "EX-022", evidencePages: "p. 15", significance: "Midshift placements still in use." },
  { id: "s-2026-04-c", month: "April 2026", sortKey: "2026-04", area: "LVAR UM / PRE-D / DBC", scheduleType: "Mid/Late", timeRange: "11:30 AM–8:00 PM", leaders: ["Multiple leaders"], exhibitId: "EX-022", evidencePages: "p. 15", significance: "Mid/late available." },
  { id: "s-2026-04-d", month: "April 2026", sortKey: "2026-04", area: "LVAR UM / PRE-D / DBC", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin"], exhibitId: "EX-022", evidencePages: "p. 15", significance: "Harbin tied to PM during April 2026 movement decisions.", highlightHarbin: true },

  // ── May 2026 ─────────────────────────────────────────────
  { id: "s-2026-05-a", month: "May 2026", sortKey: "2026-05", area: "Cross-area", scheduleType: "AM", timeRange: "Mixed earlier schedules", leaders: ["Multiple leaders"], exhibitId: "EX-022", evidencePages: "p. 15", significance: "Earlier schedules continue into May 2026." },
  { id: "s-2026-05-b", month: "May 2026", sortKey: "2026-05", area: "Cross-area", scheduleType: "Midshift", timeRange: "Mixed midshift schedules", leaders: ["Multiple leaders"], exhibitId: "EX-022", evidencePages: "p. 15", significance: "Midshift continues." },
  { id: "s-2026-05-c", month: "May 2026", sortKey: "2026-05", area: "LVAR", scheduleType: "PM/Closing", timeRange: "Closing shift ending 10:00 PM ET", leaders: ["Lashawnna Harbin"], exhibitId: "EX-022", evidencePages: "p. 15", significance: "Harbin remains on closing throughout the 15-month range.", highlightHarbin: true },
];

export const SCHEDULE_TYPES: ScheduleType[] = ["AM", "Midshift", "Mid/Late", "PM/Closing"];

export const SCHEDULE_COLOR: Record<ScheduleType, string> = {
  "AM": "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 ring-emerald-500/30",
  "Midshift": "bg-sky-500/15 text-sky-700 dark:text-sky-300 ring-sky-500/30",
  "Mid/Late": "bg-amber-500/15 text-amber-700 dark:text-amber-300 ring-amber-500/30",
  "PM/Closing": "bg-red-500/15 text-red-700 dark:text-red-300 ring-red-500/30",
};
