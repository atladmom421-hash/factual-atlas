import { useState } from "react";
import { X } from "lucide-react";
import { clsx } from "clsx";

// Schedule workbook screenshots copied from the user's original "2023-2025 USE THIS Schedule (NEW)"
// SharePoint workbook. Each filename is the verbatim IMG number from the source upload so the
// chain of custody is preserved. Month labels marked "verified" were confirmed by inspecting the
// active sheet tab in the screenshot; the remaining shots are tagged "workbook capture" and the
// user can verify the month from the bottom tab bar visible in each image.
type Shot = {
  file: string;
  month: string;       // displayed label
  verified: boolean;   // whether month tag is confirmed
  note?: string;
};

const SHOTS: Shot[] = [
  // Verified from inspection
  { file: "IMG_7104.jpg", month: "Dec 2024",  verified: true,  note: "LVAR roster, Harbin on 130-10 closing" },
  { file: "IMG_7115.jpg", month: "May 2025",  verified: true,  note: "LVAR + Whitehall + TBAY, Harbin still 130-10" },
  { file: "IMG_7125.jpg", month: "Sep 2025",  verified: true,  note: "Whitehall TL + TBAY TL, Leslie McGregor 11:30-8" },
  { file: "IMG_7150.jpg", month: "Dec 2024",  verified: true,  note: "PRE-D / DBC right-side columns" },
  { file: "IMG_7160.jpg", month: "Feb 2025",  verified: true,  note: "Pay Pro — Nicole Rinard 745a-430p, Shontelle Buhler 8-430" },
  { file: "IMG_7180.jpg", month: "Jul 2025",  verified: true,  note: "TBAY/Whitehall TL block, Karena Lesure 130-10pm" },
  { file: "IMG_7193.jpg", month: "Oct 2025",  verified: true,  note: "Pay Pro Oct 2025 — Nicole Rinard / Shontelle Buhler 8-430" },

  // Workbook captures — month visible on bottom tab bar, user can confirm
  { file: "IMG_7105.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7107.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7108.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7109.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7110.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7111.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7112.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7113.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7114.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7116.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7118.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7119.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7120.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7121.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7122.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7123.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7124.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7126.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7131.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7146.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7147.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7148.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7149.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7151.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7152.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7153.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7154.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7155.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7156.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7157.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7158.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7159.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7161.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7162.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7163.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7164.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7165.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7166.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7167.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7168.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7169.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7170.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7171.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7172.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7173.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7174.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7175.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7176.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7177.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7178.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7179.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7181.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7182.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7183.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7184.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7185.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7186.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7187.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7188.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7189.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7190.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7191.jpg", month: "Workbook capture", verified: false },
  { file: "IMG_7192.jpg", month: "Workbook capture", verified: false },
];

export function ScheduleSourceGallery() {
  const [active, setActive] = useState<Shot | null>(null);

  const verifiedCount = SHOTS.filter(s => s.verified).length;

  return (
    <section className="rounded-md border border-border bg-card p-5">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Source screenshots</div>
          <h2 className="mt-1 font-display text-2xl tracking-tight">Schedule workbook captures</h2>
        </div>
        <div className="text-[11px] text-muted-foreground">
          {SHOTS.length} captures · {verifiedCount} month-verified · source: <span className="font-mono">2023-2025 USE THIS Schedule (NEW)</span>
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
        {SHOTS.map(s => (
          <button
            key={s.file}
            onClick={() => setActive(s)}
            className="group relative overflow-hidden rounded-md border border-border bg-secondary/40 ring-1 ring-transparent transition-all hover:ring-foreground/30"
            title={`${s.file} — ${s.month}${s.note ? " · " + s.note : ""}`}
          >
            <img
              src={`/exhibits/schedule-screenshots/${s.file}`}
              alt={`Schedule workbook ${s.file} (${s.month})`}
              loading="lazy"
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
