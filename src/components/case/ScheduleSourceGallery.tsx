import { useState } from "react";
import { X } from "lucide-react";
import { clsx } from "clsx";

// Schedule workbook screenshots copied from the user's original "2023-2025 USE THIS Schedule (NEW)"
// SharePoint workbook. Each filename is the verbatim IMG number from the source upload so the
// chain of custody is preserved. Month labels marked "verified" were confirmed by inspecting the
// active sheet tab in the screenshot; the remaining shots are tagged "workbook capture" and the
// user can verify the month from the bottom tab bar visible in each image.
export type ScheduleShot = {
  file: string;
  month: string;       // displayed label
  verified: boolean;   // whether month tag is confirmed
  note?: string;
};

export const SCHEDULE_SHOTS: ScheduleShot[] = [
  // ===== December 2024 (Dec-24 tab) =====
  { file: "IMG_7104.jpg", month: "Dec 2024", verified: true, note: "LVAR Dec-24 — Harbin on 130-10 PM closing; comparator row visible" },
  { file: "IMG_7105.jpg", month: "Dec 2024", verified: true, note: "LVAR Dec-24 weeks 2–4 — Harbin 130-10; AM/MID comparators on 8-430 and 11:30-8 MST" },
  { file: "IMG_7146.jpg", month: "Dec 2024", verified: true, note: "LVAR Dec-24 full month — header row Whitnee Kollar / Ryan Ascarte / Bryan Robles / Shawnna Harbin / Marc Case / Marissa Mascarenas" },
  { file: "IMG_7147.jpg", month: "Dec 2024", verified: true, note: "LVAR Dec-24 second angle — confirms Harbin 130-10 ET across all weeks" },
  { file: "IMG_7148.jpg", month: "Dec 2024", verified: true, note: "Dec-24 LVAR / TBAY Coaches columns — Tiffany Parks, Candice Nesteruck, Justin Vibber, Daniel Blonde, Elvira Kendic, Todd Watson, Yesenia Felix, Rebekah Creighton, Jennifer Roth" },
  { file: "IMG_7149.jpg", month: "Dec 2024", verified: true, note: "Dec-24 PRE-D / DBC — Elisa MataAbarca, Marla Boyd, Coral Stahl, Will Sandoval, Kari Ross, Monique Atteberry, Jerry Clark, Nameer Khan, Reggie Rogers" },
  { file: "IMG_7150.jpg", month: "Dec 2024", verified: true, note: "Dec-24 PRE-D / DBC close-up — MID/AM 11:30-8PM EST and 8-4:30PM EST shifts visible" },
  { file: "IMG_7151.jpg", month: "Dec 2024", verified: true, note: "Dec-24 Pay Pro — Nicole Rinard 745a-430p AM, Shontelle Buhler 8-430 AM" },

  // ===== January 2025 (Jan-25 tab) =====
  { file: "IMG_7152.jpg", month: "Jan 2025", verified: true, note: "Jan-25 LVAR TL's — Whitnee Kollar, Ryan Ascarte, Bryan Robles, Shawnna Harbin (130-10 PM), Marc Case, Marissa Mascarenas, Travis Christiansen, Julie Cahoon" },
  { file: "IMG_7153.jpg", month: "Jan 2025", verified: true, note: "Jan-25 LVAR Coaches block — Tiffany Parks, Candice Nesteruck, Justin Vibber, Daniel Blonde, Elvira Kendic, Todd Watson, Carmen Case, Yesenia Felix, Rebekah Creighton, Karena Lesure, Jennifer Roth" },
  { file: "IMG_7154.jpg", month: "Jan 2025", verified: true, note: "Jan-25 PRE-D / DBC TEAM LEADERS — Elisa MataAbarca, Marla Boyd, Coral Stahl, Will Sandoval, Kari Ross, Monique Atteberry, Jerry Clark, Nameer Khan, Reggie Rogers, Veronica Lopez" },
  { file: "IMG_7155.jpg", month: "Jan 2025", verified: true, note: "Jan-25 Pay Pro — Nicole Rinard 745a-430p AM, Shontelle Buhler 8-430 AM" },

  // ===== February 2025 (Feb-25 tab) — month of Harbin's waitlist deletion =====
  { file: "IMG_7107.jpg", month: "Feb 2025", verified: true, note: "Feb-25 LVAR weeks 2–4 — Paul Nielsen 1:30-10PM ET, Harbin 130-10, AM comparators 8-430" },
  { file: "IMG_7108.jpg", month: "Feb 2025", verified: true, note: "Feb-25 LVAR wider view — Brittnee Walker now on roster (post-deletion month)" },
  { file: "IMG_7156.jpg", month: "Feb 2025", verified: true, note: "Feb-25 LVAR — Whitnee Kollar, Brittnee Walker, Paul Nielsen, Ryan Ascarte, Bryan Robles, Shawnna Harbin, Marc Case, Marissa Mascarenas, Travis Christiansen, Julie Cahoon, Dylan Bryant, Kandace Adkins, Josh Faulkner, Leslie McGregor" },
  { file: "IMG_7157.jpg", month: "Feb 2025", verified: true, note: "Feb-25 LVAR + Whitehall TL columns — confirms Harbin still 130-10 PM in Feb 2025" },
  { file: "IMG_7158.jpg", month: "Feb 2025", verified: true, note: "Feb-25 TBAY TL / Whitehall TL right side — Paul Nielsen / Kandace Adkins / Leslie McGregor / Josh Faulkner / Dylan Bryant / Tyler Millisock" },
  { file: "IMG_7159.jpg", month: "Feb 2025", verified: true, note: "Feb-25 PRE-D / DBC — Elisa MataAbarca, Marla Boyd, Veronica Lopez, Will Sandoval, Kari Ross, Monique Atteberry, Jerry Clark, Nameer Khan, Reggie Rogers" },
  { file: "IMG_7160.jpg", month: "Feb 2025", verified: true, note: "Feb-25 Pay Pro — Nicole Rinard 745a-430p, Shontelle Buhler 8-430" },

  // ===== March 2025 (Mar-25 tab) =====
  { file: "IMG_7109.jpg", month: "Mar 2025", verified: true, note: "Mar-25 LVAR + Whitehall TL — Harbin still PM 130-10; Whitehall comparators on 11:30-10p" },
  { file: "IMG_7110.jpg", month: "Mar 2025", verified: true, note: "Mar-25 LVAR — Utah Roadshow notations on AM TLs" },
  { file: "IMG_7111.jpg", month: "Mar 2025", verified: true, note: "Mar-25 Whitehall TL block — PHX TL Offsite and Personal Holiday entries" },
  { file: "IMG_7112.jpg", month: "Mar 2025", verified: true, note: "Mar-25 LVAR wider angle showing Week 3 PHX TL Offsite" },
  { file: "IMG_7161.jpg", month: "Mar 2025", verified: true, note: "Mar-25 LVAR + Whitehall TL full month — Whitehall comparators on EDGE / 1:30-10p (mid-shift) while Harbin remains 130-10 ET (PM)" },
  { file: "IMG_7162.jpg", month: "Mar 2025", verified: true, note: "Mar-25 LVAR — Week 5 SICK TIME marker on Harbin row" },
  { file: "IMG_7163.jpg", month: "Mar 2025", verified: true, note: "Mar-25 TBAY TL / Whitehall TL right-side columns" },
  { file: "IMG_7164.jpg", month: "Mar 2025", verified: true, note: "Mar-25 PRE-D / DBC — comparators on MID 11:30-8PM EST and 8:00-4:30 EST" },
  { file: "IMG_7165.jpg", month: "Mar 2025", verified: true, note: "Mar-25 Pay Pro — Nicole Rinard / Shontelle Buhler AM 745a-430 / 8-430" },

  // ===== April 2025 (Apr-25 tab) =====
  { file: "IMG_7113.jpg", month: "Apr 2025", verified: true, note: "Apr-25 TBAY TL / Whitehall TL — Virtual Roadshow and PD Course 9-5p entries" },
  { file: "IMG_7114.jpg", month: "Apr 2025", verified: true, note: "Apr-25 TBAY TL right side — Tyler Millisock, Tiffany Parks, Candice Nest." },
  { file: "IMG_7166.jpg", month: "Apr 2025", verified: true, note: "Apr-25 TBAY TL / Whitehall TL — Harbin 130-10; mid-shift 1:30-10p available to TBAY/Whitehall TLs" },
  { file: "IMG_7167.jpg", month: "Apr 2025", verified: true, note: "Apr-25 PRE-D / DBC — Elisa MataAbarca, Marla Boyd, Monique Atteberry, Reggie Rogers, Veronica Lopez, Will Sandoval, Kari Ross, Jerry Clark, Nameer Khan" },
  { file: "IMG_7168.jpg", month: "Apr 2025", verified: true, note: "Apr-25 PRE-D / DBC second angle — Sick Time / Bereavement entries" },
  { file: "IMG_7169.jpg", month: "Apr 2025", verified: true, note: "Apr-25 PRE-D / DBC wide view — full week-by-week PRE-D roster" },
  { file: "IMG_7170.jpg", month: "Apr 2025", verified: true, note: "Apr-25 Pay Pro — Nicole Rinard TRAVEL entries Apr 8–11 (AM TLs offsite)" },
  { file: "IMG_7171.jpg", month: "Apr 2025", verified: true, note: "Apr-25 LVAR full — Harbin still 130-10 PM; month before alleged 'May 2025 day-shift offer'" },

  // ===== May 2025 (May-25 tab) — month of Respondent's alleged 'offer/decline' =====
  { file: "IMG_7115.jpg", month: "May 2025", verified: true, note: "May-25 LVAR + Whitehall + TBAY — Harbin still 130-10 PM during the month Respondent claims a day-shift was offered and declined" },
  { file: "IMG_7116.jpg", month: "May 2025", verified: true, note: "May-25 PRE-D / DBC — Veronica Lopez 11-7:30pm EST, Will Sandoval 11:30-8PM EST mid shifts active" },
  { file: "IMG_7172.jpg", month: "May 2025", verified: true, note: "May-25 LVAR — Harbin 130-10 PM; OH ONSITE notations Week 3" },
  { file: "IMG_7173.jpg", month: "May 2025", verified: true, note: "May-25 PRE-D / DBC — full month, mid-shift comparators on 8:00-4:30 EST and 11:30-8PM EST" },
  { file: "IMG_7174.jpg", month: "May 2025", verified: true, note: "May-25 Pay Pro — Nicole Rinard / Shontelle Buhler AM 745a-430 / 8-4:30; no record of any Harbin AM offer or decline anywhere in workbook" },

  // ===== June 2025 (Jun-25 tab) =====
  { file: "IMG_7118.jpg", month: "Jun 2025", verified: true, note: "Jun-25 PRE-D / DBC — Veronica Lopez 11-7:30pm EST mid shift; Holiday entries Jun 19" },
  { file: "IMG_7119.jpg", month: "Jun 2025", verified: true, note: "Jun-25 Pay Pro — Nicole Rinard 745a-430p, Shontelle Buhler 8-430; Justin Vibber / Jeremy Stone 8:00-4:30 AZ and 1:30-10 ET" },
  { file: "IMG_7175.jpg", month: "Jun 2025", verified: true, note: "Jun-25 LVAR full — Whitnee Kollar, Brittnee Walker, Shawnna Harbin, Jarin Bell, Marissa Mascarenas, Julie Cahoon, Hunter Samuel, Michelle Swindells, Paul Nielsen, Dylan Bryant, Josh Faulkner" },
  { file: "IMG_7176.jpg", month: "Jun 2025", verified: true, note: "Jun-25 TBAY TL / Whitehall TL — Karena Lesure 130-10pm; Paul Nielson, Kandace Adkins, Leslie McGregor, Dylan Bryant, Josh Faulkner, Tyler Millisock" },
  { file: "IMG_7177.jpg", month: "Jun 2025", verified: true, note: "Jun-25 PRE-D / DBC — full month, mid-shift availability for comparators" },
  { file: "IMG_7178.jpg", month: "Jun 2025", verified: true, note: "Jun-25 Pay Pro — Nicole Rinard / Shontelle Buhler" },

  // ===== July 2025 (Jul-25 tab) — month of Harbin's re-addition to waitlist with reset date =====
  { file: "IMG_7120.jpg", month: "Jul 2025", verified: true, note: "Jul-25 Whitehall TL / TBAY — Brittnee Walker, Shawnna Harbin, Julie Cahoon, Jarin Bell, Marissa Mascarenas, Cody Christensen, Hunter Samuel, Paul Nielsen, Michelle Swindells, Dylan Bryant, Josh Faulkner — Harbin still 130-10P" },
  { file: "IMG_7121.jpg", month: "Jul 2025", verified: true, note: "Jul-25 PRE-D / DBC — full roster, Holiday entries Jul 4 weekend" },
  { file: "IMG_7179.jpg", month: "Jul 2025", verified: true, note: "Jul-25 LVAR full — confirms Harbin row in July 2025 even though waitlist was 'reset' in the same month" },
  { file: "IMG_7180.jpg", month: "Jul 2025", verified: true, note: "Jul-25 TBAY / Whitehall — Karena Lesure 130-10pm; Paul Nielson 1:30-10:00 EDGE shift" },
  { file: "IMG_7181.jpg", month: "Jul 2025", verified: true, note: "Jul-25 PRE-D / DBC — comparators on 130-10 est and mid 11:30-8 PM EST" },

  // ===== August 2025 (Aug-25 tab) =====
  { file: "IMG_7122.jpg", month: "Aug 2025", verified: true, note: "Aug-25 PRE-D / DBC — Veronica Lopez 11-7:30pm EST, Will Sandoval 11:30-8PM EST mid shifts still active" },
  { file: "IMG_7123.jpg", month: "Aug 2025", verified: true, note: "Aug-25 LVAR + Whitehall TL — Cody Christensen, Brittnee Walker, Hunter Samuel, Julie Cahoon, Shawnna Harbin, Jarin Bell, Marissa Mascarenas, Paul Nielsen, Michelle Swindells, Dylan Bryant, Josh Faulkner; Harbin row 130-10p" },
  { file: "IMG_7182.jpg", month: "Aug 2025", verified: true, note: "Aug-25 LVAR — Harbin 130-10P; PER HOL / PTO entries on AM comparators" },
  { file: "IMG_7183.jpg", month: "Aug 2025", verified: true, note: "Aug-25 TBAY TL / Whitehall TL / TBAY Coaches columns — Rachael Moultire, Jennifer Roth visible" },
  { file: "IMG_7184.jpg", month: "Aug 2025", verified: true, note: "Aug-25 PRE-D / DBC — wide view, mid-shift comparators 8:00-4:30 EST and 11-7:30pm EST" },
  { file: "IMG_7185.jpg", month: "Aug 2025", verified: true, note: "Aug-25 Pay Pro — Nicole Rinard / Shontelle Buhler AM" },

  // ===== September 2025 (Sep-25 tab) — month of Sept 19 Ethics complaint and Allan Glover Training Bay conversation =====
  { file: "IMG_7124.jpg", month: "Sep 2025", verified: true, note: "Sep-25 LVAR — Cody Christensen, Brittnee Walker, Shawnna Harbin, Jarin Bell, Marissa Mascarenas, Hunter Samuel, Julie Cahoon, Paul Nielsen, Michelle Swindells, Dylan Bryant, Josh Faulkner; Harbin still PM 130-10" },
  { file: "IMG_7125.jpg", month: "Sep 2025", verified: true, note: "Sep-25 Whitehall TL — adds 'TL in Training / TBay' column with Leslie McGregor 11:30-8 (Training Bay); directly relevant to EX-059 Training Bay 'no criteria' admission" },
  { file: "IMG_7186.jpg", month: "Sep 2025", verified: true, note: "Sep-25 LVAR — full month confirms Harbin row 130-10 PM through Sep 30, 2025" },
  { file: "IMG_7187.jpg", month: "Sep 2025", verified: true, note: "Sep-25 TBAY TL / Whitehall TL / 'TL in Training / TBay' column — Leslie McGregor placed in Training Bay 11:30-8:00 (mid-equivalent) while Harbin's waitlist request was being obstructed" },
  { file: "IMG_7188.jpg", month: "Sep 2025", verified: true, note: "Sep-25 PRE-D / DBC — mid-shift 11-7:30pm EST and 8:00-4:30 EST still active" },
  { file: "IMG_7189.jpg", month: "Sep 2025", verified: true, note: "Sep-25 Pay Pro — Nicole Rinard / Shontelle Buhler AM" },

  // ===== October 2025 (Oct-25 tab) =====
  { file: "IMG_7126.jpg", month: "Oct 2025", verified: true, note: "Oct-25 LVAR — Harbin still 130-10P; UT Roadshow notation Week 1; comparator mid 1:30-10PM entries" },
  { file: "IMG_7190.jpg", month: "Oct 2025", verified: true, note: "Oct-25 LVAR + Whitehall TL full month — confirms Harbin remained on PM 130-10 through October 2025 despite multiple complaints" },
  { file: "IMG_7191.jpg", month: "Oct 2025", verified: true, note: "Oct-25 TBAY Coaches columns — Tyler Millisock, Tiffany Parks, Candice Nesteruck, Marisol Valenzuela, Carmen Sanchez, Alese Amarel, Todd Watson, Yesenia Felix, Karena Lesure" },
  { file: "IMG_7192.jpg", month: "Oct 2025", verified: true, note: "Oct-25 PRE-D / DBC — Veronica Lopez 11-7:30pm EST, Will Sandoval 11:30-8PM EST; mid-shift remained available to PRE-D comparators in the same month Harbin was still PM" },
  { file: "IMG_7193.jpg", month: "Oct 2025", verified: true, note: "Oct-25 Pay Pro — Nicole Rinard / Shontelle Buhler AM 745a-430 / 8-430" },

  // ===== Team Ratios staffing workbook (separate file from master schedule) =====
  { file: "IMG_7131.jpg", month: "Team Ratios workbook (Jan 2025 view)", verified: true, note: "NOT the master schedule — this is the 'Team Ratios' staffing/ratio workbook. DM/TL/HC/Shifts/Preferences grid: Allan's group lists Cody Christensen AM, Shawnna Harbin PM, Julie Cahoon PM, Brittnee Walker AM, Hunter Samuel AM, Marissa Mascarenas AM, Jarin Bell AM; Amber's group lists Dylan Bryant AM, Paul Nielsen PM, Michelle Swindells PM, Josh Faulkner AM. Documents that Harbin is one of only two PM-designated TLs under Allan and corroborates the 'preferences' column referenced in the Team Ratios formula-change rebuttal." },
];

export function ScheduleSourceGallery() {
  const [active, setActive] = useState<ScheduleShot | null>(null);

  const verifiedCount = SCHEDULE_SHOTS.filter(s => s.verified).length;

  return (
    <section className="rounded-md border border-border bg-card p-5">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Source screenshots</div>
          <h2 className="mt-1 font-display text-2xl tracking-tight">Schedule workbook captures</h2>
        </div>
        <div className="text-[11px] text-muted-foreground">
          {SCHEDULE_SHOTS.length} captures · {verifiedCount} month-verified · source: <span className="font-mono">2023-2025 USE THIS Schedule (NEW)</span>
        </div>
      </header>

      <p className="mt-2 max-w-3xl text-sm text-foreground/75">
        Original phone screenshots of the live SharePoint schedule workbook used to build the matrix and the
        EX-022 comparator analysis above. Each tile opens the full-resolution capture. Month tags marked
        <span className="mx-1 inline-flex rounded-sm bg-emerald-500/15 px-1.5 text-[10px] text-emerald-700 dark:text-emerald-300">verified</span>
        were confirmed against the active sheet-tab in the image; for the rest, the active month tab is visible
        in the bottom of each screenshot.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {SCHEDULE_SHOTS.map(s => (
          <button
            key={s.file}
            onClick={() => setActive(s)}
            className="group relative overflow-hidden rounded-md border border-border bg-secondary/40 ring-1 ring-transparent transition-all hover:ring-foreground/30"
            title={`${s.file} — ${s.month}${s.note ? " · " + s.note : ""}`}
          >
            <img
              src={`/exhibits/schedule-screenshots/${s.file}`}
              alt={`Schedule workbook ${s.file} (${s.month})`}
              loading="eager"
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-2 pb-1.5 pt-6 text-[10px] text-white">
              <span className="font-mono opacity-80">{s.file.replace(".jpg", "")}</span>
              <span className={clsx(
                "rounded-sm px-1.5 py-0.5",
                s.verified ? "bg-emerald-500/80 text-white" : "bg-white/15 text-white/85",
              )}>{s.month}</span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20"
          >
            <X className="size-4" /> Close
          </button>
          <figure className="max-h-[92vh] max-w-[96vw]" onClick={e => e.stopPropagation()}>
            <img
              src={`/exhibits/schedule-screenshots/${active.file}`}
              alt={`Schedule workbook ${active.file}`}
              className="max-h-[88vh] max-w-[96vw] rounded-md object-contain shadow-2xl"
            />
            <figcaption className="mt-2 flex items-center justify-between text-[11px] text-white/80">
              <span className="font-mono">{active.file}</span>
              <span>
                <span className={clsx(
                  "rounded-sm px-1.5 py-0.5",
                  active.verified ? "bg-emerald-500/80 text-white" : "bg-white/15 text-white/85",
                )}>{active.month}</span>
                {active.note && <span className="ml-2 text-white/70">{active.note}</span>}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
