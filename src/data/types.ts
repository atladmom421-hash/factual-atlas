export type ConfidenceStatus =
  | "confirmed-screenshot"
  | "confirmed-email"
  | "confirmed-transcript"
  | "reported-witness"
  | "reported-lashawnna"
  | "needs-confirmation"
  | "to-verify";

export type EventCategory =
  | "protected-activity"
  | "hr-complaint"
  | "schedule-waitlist"
  | "department-movement"
  | "comparator"
  | "retaliation"
  | "performance"
  | "leave"
  | "internal-investigation"
  | "deleted-evidence";

export interface TimelineEvent {
  id: string;
  date: string; // ISO or descriptive
  sortKey: string; // YYYY-MM-DD for sorting
  title: string;
  category: EventCategory;
  description: string;
  peopleIds: string[];
  evidenceIds: string[];
  whyItMatters?: string;
  status: ConfidenceStatus;
  chapterId?: string;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  category: "charging-party" | "comparator" | "leadership" | "hr" | "witness" | "other";
  relationshipToCase: string;
  race?: string;
  notes?: string;
}

export interface ComparatorRow {
  id: string;
  person: string;
  role: string;
  race?: string;
  priorArea: string;
  laterArea: string;
  monthMoved?: string;
  waitlist: string;
  ticket: string;
  performance: string;
  evidenceRef: string;
  whyItMatters: string;
  status: "confirmed" | "reported" | "needs-confirmation";
}

export interface MovementEdge {
  id: string;
  personId: string;
  personName: string;
  from: string;
  to: string;
  period: string;
  status: "confirmed" | "reported" | "needs-confirmation";
}

export interface Exhibit {
  id: string;
  exhibitNumber: string;
  fileName: string;
  date: string;
  category: string;
  peopleIds: string[];
  summary: string;
  linkedEventIds: string[];
  reliability: ConfidenceStatus;
  filePath?: string;
  fileKind: "pdf" | "image" | "docx" | "transcript" | "note";
  transcriptText?: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  intro: string;
  keyQuestion: string;
  eventIds: string[];
}
