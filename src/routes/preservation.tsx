import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, FileText, ShieldAlert } from "lucide-react";
import { eventById, exhibitById } from "@/data";
import { useExhibit } from "@/components/case/ExhibitProvider";
import { StatusBadge, CategoryBadge } from "@/components/case/Badges";

export const Route = createFileRoute("/preservation")({
  head: () => ({
    meta: [
      { title: "Preservation & Records Deletion — Harbin Case File" },
      { name: "description", content: "Step-by-step record of the October 2025 Microsoft Teams chat deletion sequence with supporting screenshots and email exhibits." },
      { property: "og:title", content: "Preservation & Records Deletion — Harbin Case File" },
    ],
  }),
  component: PreservationPage,
});

// Ordered preservation/records-deletion sequence
const STEP_IDS = [
  "e-2025-02-22-jen-deleted",
  "e-2025-10-07-reyes-timeline",
  "e-2025-10-13-fmla-request",
  "e-2025-10-14-fmla-notice",
  "e-2025-10-16-access-deactivated",
  "e-2025-10-21-verint-email",
  "e-2025-10-23-chat-missing",
  "e-2025-10-23-other-chats-visible",
  "e-2025-10-24-chat-cleared-phone",
] as const;

function PreservationPage() {
  const { open } = useExhibit();
  const steps = STEP_IDS.map(id => eventById(id)).filter(Boolean) as NonNullable<ReturnType<typeof eventById>>[];

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <ShieldAlert className="size-3.5" /> Preservation & Records Deletion
        </div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          The Teams chat that disappeared.
        </h1>
        <p className="mt-3 text-foreground/75">
          Each step below shows what happened, when it happened, and the screenshot or email exhibit that supports it.
          The sequence frames the preservation question: the Allan &amp; Amber chat — the chat that carried the FMLA notice —
          went blank after Respondent had detailed written notice of the underlying complaints.
        </p>
      </div>

      {/* Top callout */}
      <div className="mt-8 rounded-md border border-accent/40 bg-accent/5 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 text-accent" />
          <div className="text-sm text-foreground/85">
            <div className="font-display text-lg leading-tight text-foreground">Preservation duty triggered before the deletion.</div>
            <p className="mt-1">
              Formal written notice to the assigned HR investigator on <strong>October 7, 2025</strong>;
              FMLA notice in the same Teams chat on <strong>October 14</strong>;
              Verint/screen-recording complaint to HR on <strong>October 21</strong>.
              The chat went blank on the work computer on <strong>October 23</strong> and was cleared from the phone by <strong>October 24</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <ol className="mt-12 space-y-5">
        {steps.map((evt, i) => {
          const exhibits = evt.evidenceIds.map(id => exhibitById(id)).filter(Boolean);
          const isDeletion = evt.category === "deleted-evidence";
          return (
            <li
              key={evt.id}
              className={`relative rounded-md border bg-card p-5 shadow-sm transition-shadow hover:shadow-md ${
                isDeletion ? "border-accent/50 ring-1 ring-accent/20" : "border-border"
              }`}
            >
              <div className="flex flex-wrap items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-navy font-display text-navy-foreground">
                  {i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                    <time className="font-mono uppercase tracking-wider text-foreground/80">{evt.date}</time>
                    <span className="opacity-40">·</span>
                    <CategoryBadge category={evt.category} />
                    <StatusBadge status={evt.status} />
                  </div>
                  <h2 className="mt-1.5 font-display text-xl leading-tight tracking-tight">{evt.title}</h2>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-foreground/85">{evt.description}</p>

                  {evt.whyItMatters && (
                    <div className="mt-3 rounded-sm border-l-2 border-accent bg-accent/5 px-3 py-2 text-sm text-foreground/85">
                      <span className="font-medium text-foreground">Why this matters · </span>{evt.whyItMatters}
                    </div>
                  )}

                  {exhibits.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exhibits.map(ex => ex && (
                        <button
                          key={ex.id}
                          onClick={() => open(ex.id)}
                          className="group inline-flex max-w-full items-center gap-2 rounded-sm border border-border bg-secondary/60 px-2.5 py-1.5 text-left text-xs hover:bg-secondary"
                        >
                          <span className="rounded-sm bg-navy px-1.5 py-0.5 text-[10px] text-navy-foreground">{ex.exhibitNumber}</span>
                          <FileText className="size-3.5 text-muted-foreground" />
                          <span className="truncate font-medium text-foreground/90">{ex.fileName}</span>
                          <span className="hidden sm:inline text-muted-foreground">· {ex.fileKind.toUpperCase()}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 rounded-md border border-border bg-secondary/40 p-5 text-sm text-foreground/80">
        <div className="font-display text-base text-foreground">Bottom line</div>
        <p className="mt-1">
          Other Teams chats from the same retention window (Oct 10, 13, 15, 16, 17, 21) remained fully visible on the same work computer.
          Only the chat containing the FMLA notice and the leadership-isolation concerns went blank — on both the work computer and the phone —
          during an active corporate investigation period.
        </p>
      </div>
    </div>
  );
}
