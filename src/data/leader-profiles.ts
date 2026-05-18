// Department, on-site location, and transfer metadata for each Team Lead
// appearing in EX-022 / schedule-data.ts. Sourced from Harbin direct knowledge.
// Used by LeaderShiftMatrix to annotate names with dept badge + transfer notes.

export type DeptCode = "LVAR" | "PRE-D" | "DBC" | "PayPro" | "TBAY" | "Whitehall" | "HVAR" | "Other";

export interface LeaderProfile {
  /** Name as it appears in scheduleRows.leaders */
  name: string;
  /** Current / primary department membership */
  dept: DeptCode;
  /** True if this TL is part of Harbin's LVAR department (her direct peer group) */
  inLashawnnasDept: boolean;
  /** Site / building, if relevant */
  onSite?: string;
  /** Free-text transfer narrative — "Came from / Moved to" notes */
  movement?: string;
  /** True if this row is the charging party herself */
  isHarbin?: boolean;
}

// Single source of truth — anything not listed defaults to "Other / unknown dept".
export const LEADER_PROFILES: LeaderProfile[] = [
  // ── LVAR (Harbin's department) ─────────────────────────────
  { name: "Lashawnna Harbin", dept: "LVAR", inLashawnnasDept: true, isHarbin: true },
  { name: "Tyler Millisock", dept: "LVAR", inLashawnnasDept: true, movement: "Moved off LVAR PM/closing onto PRE-D/DBC Mid/Late in Feb 2025 without TL ticket; later 10:30–7 midshift through May 2026." },
  { name: "Marissa Mascarenas", dept: "LVAR", inLashawnnasDept: true },
  { name: "Brittnee Walker", dept: "LVAR", inLashawnnasDept: true, movement: "Confirmed always on AM throughout the 15-month window." },
  { name: "Julie Cahoon", dept: "LVAR", inLashawnnasDept: true },
  { name: "Paul Nielsen", dept: "LVAR", inLashawnnasDept: true },
  { name: "Whitney Collier", dept: "LVAR", inLashawnnasDept: true },
  { name: "Dylan Bryant", dept: "LVAR", inLashawnnasDept: true, movement: "Confirmed always on AM throughout the 15-month window." },
  { name: "Hunter Samuel", dept: "LVAR", inLashawnnasDept: true, movement: "Transferred IN from HVAR (midshift) July 2025 — placed directly onto AM and held it continuously after." },
  { name: "Michelle Swindells", dept: "LVAR", inLashawnnasDept: true },
  { name: "Jarin Bell", dept: "LVAR", inLashawnnasDept: true, movement: "Transferred IN from another dept (late shift / Maintenance) Sep 2025 — placed directly onto AM in LVAR." },
  { name: "Cody Christensen", dept: "LVAR", inLashawnnasDept: true, movement: "Transferred IN from HVAR (high-risk / late-stage collections, mid/late shift) July 2025 — placed directly onto AM in LVAR under Allan Glover." },
  { name: "Caitlin Portela", dept: "LVAR", inLashawnnasDept: true },
  { name: "Helen Ripley", dept: "LVAR", inLashawnnasDept: true, movement: "Transferred IN from another department." },
  { name: "Steve Seever", dept: "LVAR", inLashawnnasDept: true },
  { name: "Jodi Curran", dept: "LVAR", inLashawnnasDept: true, movement: "Transferred IN from another department." },
  { name: "Kandace Adkins", dept: "LVAR", inLashawnnasDept: true, onSite: "Sometimes on-site Whitehall (Ohio)", movement: "Moved to another department in April 2025." },
  { name: "Bryan Robles", dept: "LVAR", inLashawnnasDept: true },
  { name: "Marc Case", dept: "LVAR", inLashawnnasDept: true, movement: "Moved to another department in February 2025." },
  { name: "Travis Christiansen", dept: "LVAR", inLashawnnasDept: true },
  { name: "Gabriela Reyes", dept: "LVAR", inLashawnnasDept: true },

  // ── PRE-D / DBC ────────────────────────────────────────────
  { name: "Elisa MataAbarca", dept: "PRE-D", inLashawnnasDept: false, movement: "Moved from LVAR to PRE-D." },
  { name: "Veronica Lopez", dept: "PRE-D", inLashawnnasDept: false },
  { name: "Will Sandoval", dept: "PRE-D", inLashawnnasDept: false },
  { name: "Marla Boyd", dept: "PRE-D", inLashawnnasDept: false },
  { name: "Jerry Clark", dept: "PRE-D", inLashawnnasDept: false },
  { name: "Monique Atteberry", dept: "PRE-D", inLashawnnasDept: false },
  { name: "Whitnee Kollar", dept: "PRE-D", inLashawnnasDept: false, movement: "Moved off AM 8–4:30 → 11:30–8 PM mid/late (July 2025) → 9:00–5:30 midshift (Aug 2025) — two shift changes in two months." },
  { name: "Nameer Khan", dept: "PRE-D", inLashawnnasDept: false },
  { name: "Reggie Rogers", dept: "PRE-D", inLashawnnasDept: false },

  // ── Pay Pro ────────────────────────────────────────────────
  { name: "Nicole Rinard", dept: "PayPro", inLashawnnasDept: false },
  { name: "Shontelle Buhler", dept: "PayPro", inLashawnnasDept: false },

  // ── Whitehall / TBAY (sometimes on-site Ohio) ──────────────
  { name: "Leslie McGregor", dept: "TBAY", inLashawnnasDept: false, onSite: "On-site" },
  { name: "Josh Faulkner", dept: "TBAY", inLashawnnasDept: false, onSite: "On-site Whitehall (Ohio)" },
];

// Quick lookup map keyed by raw name.
export const LEADER_PROFILE_BY_NAME: Record<string, LeaderProfile> = Object.fromEntries(
  LEADER_PROFILES.map(p => [p.name, p]),
);

export const DEPT_LABEL: Record<DeptCode, string> = {
  "LVAR": "LVAR",
  "PRE-D": "PRE-D",
  "DBC": "DBC",
  "PayPro": "Pay Pro",
  "TBAY": "TBAY",
  "Whitehall": "Whitehall",
  "HVAR": "HVAR",
  "Other": "Other",
};
