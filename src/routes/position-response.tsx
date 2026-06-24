import { createFileRoute } from "@tanstack/react-router";
import { FormalLetterBody } from "@/components/case/FormalLetterBody";
import { useEffect, useState } from "react";
import { Lock, ShieldAlert, KeyRound } from "lucide-react";
import { PrintPdfButton } from "@/components/case/PrintPdfButton";
import { PrintEvidenceAppendix } from "@/components/case/PrintEvidenceAppendix";

export const Route = createFileRoute("/position-response")({
  head: () => ({
    meta: [
      { title: "Position Statement Response — Harbin v. DFS Services LLC" },
      { name: "description", content: "Confidential point-by-point response to Discover/Capital One's June 5, 2026 Position Statement (CRD-2026-0386 / EEOC 35A-2026-00320)." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: GatedPage,
});

// ─────────────────────────────────────────────────────────────────
// Password gate (client-side; pragmatic for investigator handoff).
// Change PASSWORD below and re-deploy to rotate. SessionStorage only
// — closing the tab requires re-entry.
// ─────────────────────────────────────────────────────────────────
const PASSWORD = "K@rmakid42113";
const STORAGE_KEY = "pr-unlocked-v1";

function GatedPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  if (!unlocked) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-5 py-12">
        <div className="rounded-md border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent">
            <Lock className="size-3.5" /> Confidential — Restricted Access
          </div>
          <h1 className="mt-2 font-display text-2xl tracking-tight">Position Statement Response</h1>
          <p className="mt-2 text-sm text-foreground/75">
            <span className="font-medium">Harbin v. DFS Services LLC</span> · CRD-2026-0386 · EEOC 35A-2026-00320.
            This page contains attorney-client and investigation-sensitive material. Enter the access password
            provided to the investigator to continue.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim() === PASSWORD) {
                sessionStorage.setItem(STORAGE_KEY, "1");
                setUnlocked(true);
                setErr(false);
              } else {
                setErr(true);
              }
            }}
            className="mt-5 space-y-3"
          >
            <label className="block text-xs font-medium text-foreground/80">Access password</label>
            <div className="flex items-center gap-2 rounded-md border-2 border-border bg-background px-2.5 py-1.5 focus-within:border-accent">
              <KeyRound className="size-4 text-muted-foreground" />
              <input
                type="password"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Enter password"
              />
            </div>
            {err && <p className="text-xs text-red-600">Incorrect password. Please contact the case owner.</p>}
            <button type="submit" className="w-full rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
              Unlock
            </button>
            <p className="text-[11px] text-muted-foreground">
              By unlocking, you acknowledge this material is confidential and submitted in connection with an
              active CRD/EEOC investigation. Do not redistribute.
            </p>
          </form>
        </div>
      </div>
    );
  }

  return <FormalLetterBody />;
}
