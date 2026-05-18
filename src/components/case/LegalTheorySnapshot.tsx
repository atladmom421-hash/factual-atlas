import { Link } from "@tanstack/react-router";

const PILLARS: { label: string; body: string; href?: string; hash?: string }[] = [
  {
    label: "Protected Activity",
    body: "Internal complaints and HR engagement on race, schedule equity, and Cyndy Smith's group dynamics.",
    href: "/timeline",
    hash: "#cat-protected-activity",
  },
  {
    label: "Adverse Action",
    body: "Schedule fixed on PM/closing; denied movement to AM/midshift; post-EEOC rating downgrade.",
    href: "/timeline",
    hash: "#cat-schedule-waitlist",
  },
  {
    label: "Comparator Treatment",
    body: "Similarly situated peers (same start date, same level) received AM, midshift, and lateral moves.",
    href: "/comparators",
  },
  {
    label: "Record Integrity",
    body: "Waitlist entries added then removed; ticket not produced; Team Ratios formula change; deleted Teams messages.",
    href: "/timeline",
    hash: "#cat-deleted-evidence",
  },
  {
    label: "Retaliation Timing",
    body: "Adverse changes follow complaints and return-from-leave windows; tone-policing in writing.",
    href: "/timeline",
    hash: "#cat-retaliation",
  },
  {
    label: "Damages / Hardship",
    body: "Childcare displacement (Aug 2025–present), lost bonding, substitute caregiving costs, paper-downgrade impact.",
    href: "/hardship-thread",
  },
];

export function LegalTheorySnapshot() {
  return (
    <section className="rounded-md border border-border bg-card">
      <header className="border-b border-border px-5 py-4">
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Legal theory snapshot</div>
        <h2 className="mt-1 font-display text-2xl tracking-tight">Core theory</h2>
        <p className="mt-2 max-w-3xl text-sm text-foreground/80">
          After protected activity and HR complaints, Harbin remained fixed on PM/closing while similarly situated
          peers received AM, midshift, lateral movement, or more favorable placement. Internal records also raise
          concerns regarding waitlist changes, missing tickets, and inconsistent documentation.
        </p>
      </header>
      <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map(p => (
          <Link
            key={p.label}
            to={p.href ?? "/timeline"}
            hash={p.hash?.replace(/^#/, "")}
            className="group bg-card p-4 transition-colors hover:bg-secondary/40"
          >
            <div className="text-[10px] uppercase tracking-[0.16em] text-accent">{p.label}</div>
            <div className="mt-1.5 text-[13px] leading-relaxed text-foreground/85">{p.body}</div>
            <div className="mt-2 text-[11px] text-muted-foreground group-hover:text-foreground">View evidence →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
