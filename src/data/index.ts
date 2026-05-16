export * from "./types";
export * from "./people";
export * from "./events";
export * from "./comparators";
export * from "./exhibits";
export * from "./chapters";
export * from "./exhibit-fulltext";
export * from "./schedule-data";

export const CATEGORY_LABELS: Record<string, string> = {
  "protected-activity": "Protected Activity",
  "hr-complaint": "HR / Ethics Complaint",
  "schedule-waitlist": "Schedule / Waitlist",
  "department-movement": "Department Movement",
  "comparator": "Comparator Evidence",
  "retaliation": "Retaliation Concern",
  "performance": "Performance Evidence",
  "leave": "Leave / Return from Leave",
  "internal-investigation": "Internal Investigation",
  "deleted-evidence": "Deleted Evidence Concern",
};

export const STATUS_LABELS: Record<string, string> = {
  "confirmed-screenshot": "Confirmed by screenshot",
  "confirmed-email": "Confirmed by email",
  "confirmed-transcript": "Confirmed by transcript",
  "reported-witness": "Reported by witness",
  "reported-lashawnna": "Reported by Lashawnna",
  "needs-confirmation": "Needs confirmation",
  "to-verify": "To be verified",
  "confirmed": "Confirmed",
  "reported": "Reported",
};
