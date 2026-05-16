import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, FileText, GitBranch, Users } from "lucide-react";
import { eventById, exhibitById } from "@/data";
import { useExhibit } from "@/components/case/ExhibitProvider";
import { StatusBadge, CategoryBadge } from "@/components/case/Badges";

export const Route = createFileRoute("/greg-anita-thread")({
  head: () => ({
    meta: [
      { title: "Greg / Anita 2024 Retaliation Thread — Harbin Case File" },
      { name: "description", content: "Chronological thread of the 2024 Greg Carfagna / Anita HR sequence: protected complaint → assignment of termination-bound employees → director-level block of rec-for-terms → HR confirmation that Lashawnna's process was correct." },
      { property: "og:title", content: "Greg / Anita 2024 Retaliation Thread — Harbin Case File" },
    ],
  }),
  component: GregAnitaThreadPage,
});

// Ordered thread — protected activity → operational setup → director block → HR resolution → later HR ticket
const THREAD_IDS = [
  "e-2024-05-07-eeoc",
  "e-2024-05-29-formal-complaint",
  "e-2024-05-31-hr",
  "e-2024-06-05-hr",
  "e-2024-06-late-greg-assignment",
  "e-2024-07-07-rec-term-submitted",
  "e-2024-07-19-anita",
  "e-2024-07-19-anita-followup",
  "e-2025-09-19-complaint",
] as const;

function GregAnitaThreadPage() {
  const { open } = useExhibit();
  const steps = THREAD_IDS
    .map(id => eventById(id))
    .filter(Boolean) as NonNullable<ReturnType<typeof eventById>>[];

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <GitBranch className="size-3.5" /> 2024 Retaliation Thread
        </div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          Greg Carfagna &amp; Anita — the rec-for-term block.
        </h1>
        <p className="mt-3 text-foreground/75">
          A single, chronological thread of every event in the 2024 sequence: the protected
          complaint that named Greg as a recipient, the late-June assignment of
          termination-bound employees to Lashawnna's team, the director-level block of the
          resulting rec-for-terms on an undocumented "coaching documentation" requirement,
          and HR's own confirmation that Lashawnna's process was correct.
        </p>
      </div>

      {/* Org context */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-md border border-border bg-card p-5">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <Users className="size-3.5" /> Reporting line
          </div>
          <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
            <li><span className="font-mono text-xs text-muted-foreground">VP·CB</span> &nbsp;Angie Francis — VP, Card Business</li>
            <li className="pl-4"><span className="font-mono text-xs text-muted-foreground">BM</span> &nbsp;Jen Roy — Business Manager to the VP</li>
            <li className="pl-8"><span className="font-mono text-xs text-muted-foreground">DIR</span> &nbsp;<strong>Greg Carfagna — Director</strong></li>
            <li className="pl-12"><span className="font-mono text-xs text-muted-foreground">OPS</span> &nbsp;Allan Glover · Amber Laye · Shawn McLaughlin · Rosanna — Dept / Op Managers</li>
            <li className="pl-16"><span className="font-mono text-xs text-muted-foreground">UM/TL</span> &nbsp;<strong>Lashawnna Harbin — Unit Manager / TL</strong></li>
            <li className="pl-20"><span className="font-mono text-xs text-muted-foreground">COACH</span> &nbsp;Coaches (assistants to Unit Managers) — e.g. Karena Lesure, Todd Watson</li>
            <li className="pl-24"><span className="font-mono text-xs text-muted-foreground">AGT</span> &nbsp;Phone agents</li>
          </ul>
        </div>
        <div className="rounded-md border border-accent/40 bg-accent/5 p-5">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent">
            <AlertTriangle className="size-3.5" /> Why the line matters
          </div>
          <p className="mt-3 text-sm text-foreground/85">
            Greg sits between Lashawnna's department/op-manager chain (Allan) and the VP-level
            business office (Jen Roy → Angie Francis). The rec-for-term workflow goes
            <em> TL → Op Manager → Employee Relations → Director</em>. ER (Nancy) approved.
            The block occurred at the <strong>director step</strong> — Greg's — on a requirement
            other TLs confirmed they had never been asked to meet.
          </p>
        </div>
      </div>

      {/* Neutral synopsis */}
      <div className="mt-8 rounded-md border border-border bg-secondary/40 p-5">
        <div className="font-display text-lg text-foreground">Neutral synopsis</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground/85">
          On May 7, 2024 Lashawnna filed an EEOC charge. On May 29 she sent a formal complaint
          email to seven HR and leadership recipients including Greg Carfagna. HR (Susan
          Marcinko) opened an investigation, arranged interim separation from Rosanna, and
          moved Lashawnna's team to Allan Glover's organization effective July 1. In late June
          Lashawnna was informed that termination-bound employees from another leader would be
          moved onto her team in July. She submitted the resulting rec-for-terms on July 7
          using the standard linking method. Employee Relations approved. Greg blocked the
          terminations at the director step on a "documented coaching" requirement.
          Three peer TLs — Kandace Adkins, Elisa MataAbarca, and Ryan Ascarte — each
          independently stated the requirement was not standard, was not in the Standard of
          Work or People Leader Guide, was never communicated, and was not being applied to
          other TLs. Anita confirmed Lashawnna "did exactly the right thing" and that the
          objection came from approvers not knowing how to navigate the linked documentation.
          The delay forced Lashawnna to retain low-performing employees an additional month,
          depressing her scorecard.
        </p>
      </div>

      {/* Thread */}
      <ol className="mt-12 space-y-5">
        {steps.map((evt, i) => {
          const exhibits = evt.evidenceIds
            .map(id => exhibitById(id))
            .filter(Boolean);
          const isBlock =
            evt.id === "e-2024-07-07-rec-term-submitted" ||
            evt.id === "e-2024-06-late-greg-assignment";
          return (
            <li
              key={evt.id}
              className={`relative rounded-md border bg-card p-5 shadow-sm transition-shadow hover:shadow-md ${
                isBlock ? "border-accent/50 ring-1 ring-accent/20" : "border-border"
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

      {/* Peer corroboration callout */}
      <div className="mt-10 rounded-md border border-border bg-card p-5">
        <div className="font-display text-base text-foreground">Peer corroboration — EX-020</div>
        <p className="mt-1 text-sm text-foreground/80">
          Three independent peer-TL transcripts (Kandace Adkins · July 10, 2024; Elisa
          MataAbarca · July 2024; Ryan Ascarte · July 17, 2024) confirm the "documented
          coaching" requirement was not standard procedure, was not in the Standard of Work
          or People Leader Guide, was never communicated to TLs, and was not being required
          of other TLs processing performance terms.
        </p>
        <div className="mt-3">
          <button
            onClick={() => open("EX-020")}
            className="inline-flex items-center gap-2 rounded-sm border border-border bg-secondary/60 px-2.5 py-1.5 text-xs hover:bg-secondary"
          >
            <span className="rounded-sm bg-navy px-1.5 py-0.5 text-[10px] text-navy-foreground">EX-020</span>
            <FileText className="size-3.5 text-muted-foreground" />
            <span className="font-medium text-foreground/90">Peer TL conversations re: Greg's coaching-documentation requirement</span>
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-md border border-border bg-secondary/40 p-5 text-sm text-foreground/80">
        <div className="font-display text-base text-foreground">Bottom line</div>
        <p className="mt-1">
          The director-level requirement was undocumented, uncommunicated, and inconsistently
          applied. ER approved the rec-for-terms. HR confirmed Lashawnna's process was
          correct. The block kept underperforming employees on her team an extra month,
          producing measurable scorecard harm during the same window in which Respondent had
          actual notice of her protected complaints against Rosanna and her EEOC charge.
        </p>
      </div>
    </div>
  );
}
