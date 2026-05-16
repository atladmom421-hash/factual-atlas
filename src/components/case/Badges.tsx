import { clsx } from "clsx";
import type { ConfidenceStatus } from "@/data/types";
import { STATUS_LABELS } from "@/data";

const STATUS_STYLES: Record<string, string> = {
  "confirmed-screenshot": "bg-navy text-navy-foreground",
  "confirmed-email": "bg-navy text-navy-foreground",
  "confirmed-transcript": "bg-navy text-navy-foreground",
  "confirmed": "bg-navy text-navy-foreground",
  "reported-witness": "bg-accent/10 text-accent ring-1 ring-accent/30",
  "reported-lashawnna": "bg-accent/10 text-accent ring-1 ring-accent/30",
  "reported": "bg-accent/10 text-accent ring-1 ring-accent/30",
  "needs-confirmation": "bg-muted text-muted-foreground ring-1 ring-border",
  "to-verify": "bg-muted text-muted-foreground ring-1 ring-border",
};

export function StatusBadge({ status, className }: { status: ConfidenceStatus | "confirmed" | "reported" | "needs-confirmation"; className?: string }) {
  return (
    <span className={clsx(
      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide",
      STATUS_STYLES[status] ?? "bg-muted text-muted-foreground",
      className,
    )}>
      <span className="size-1.5 rounded-full bg-current opacity-70" />
      {STATUS_LABELS[status] ?? status}
    </span>
  );
}

export function CategoryBadge({ category, className }: { category: string; className?: string }) {
  const label = ({
    "protected-activity": "Protected Activity",
    "hr-complaint": "HR / Ethics",
    "schedule-waitlist": "Schedule / Waitlist",
    "department-movement": "Department Movement",
    "comparator": "Comparator",
    "retaliation": "Retaliation",
    "performance": "Performance",
    "leave": "Leave",
    "internal-investigation": "Investigation",
    "deleted-evidence": "Deleted Evidence",
  } as Record<string, string>)[category] ?? category;
  return (
    <span className={clsx(
      "inline-flex items-center rounded-sm border border-border bg-secondary/60 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-secondary-foreground",
      className,
    )}>
      {label}
    </span>
  );
}
