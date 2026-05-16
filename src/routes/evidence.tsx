import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { exhibits } from "@/data";
import { StatusBadge } from "@/components/case/Badges";
import { useExhibit } from "@/components/case/ExhibitProvider";
import { FileText, Image as ImageIcon, FileType, Mic, Search } from "lucide-react";
import { useHashFocus } from "@/components/case/useHashFocus";

export const Route = createFileRoute("/evidence")({
  head: () => ({
    meta: [
      { title: "Evidence Library — Harbin Case File" },
      { name: "description", content: "All attached exhibits with reliability status, linked timeline events, and people." },
      { property: "og:title", content: "Evidence Library — Harbin Case File" },
    ],
  }),
  component: EvidencePage,
});

function EvidencePage() {
  useHashFocus();
  const { open } = useExhibit();
  const [q, setQ] = useState("");
  const filtered = exhibits.filter(e => {
    const s = (e.fileName + " " + e.summary + " " + e.category + " " + e.date).toLowerCase();
    return s.includes(q.toLowerCase());
  });

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Evidence Library</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">Exhibits and source materials.</h1>
        <p className="mt-3 text-foreground/75">Every attached document, transcript, screenshot, and reference — with reliability status and links to the events it supports.</p>
      </div>

      <div className="no-print relative mt-8 max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search exhibits..." className="w-full rounded-sm border border-border bg-card py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(ex => (
          <button key={ex.id} id={`exhibit-${ex.id}`} onClick={() => open(ex.id)} className="group text-left rounded-md border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-md scroll-mt-24">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider">
                <span className="rounded-sm bg-navy px-1.5 py-0.5 text-navy-foreground">{ex.exhibitNumber}</span>
                <KindIcon kind={ex.fileKind} />
              </div>
              <StatusBadge status={ex.reliability} />
            </div>
            <div className="mt-3 font-display text-lg leading-tight tracking-tight">{ex.fileName}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">{ex.date} · {ex.category}</div>
            <p className="mt-3 line-clamp-3 text-sm text-foreground/75">{ex.summary}</p>
            <div className="mt-3 text-[11px] text-muted-foreground">{ex.linkedEventIds.length} linked events</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function KindIcon({ kind }: { kind: string }) {
  if (kind === "pdf") return <span className="inline-flex items-center gap-1 text-muted-foreground"><FileText className="size-3" /> PDF</span>;
  if (kind === "image") return <span className="inline-flex items-center gap-1 text-muted-foreground"><ImageIcon className="size-3" /> Image</span>;
  if (kind === "docx") return <span className="inline-flex items-center gap-1 text-muted-foreground"><FileType className="size-3" /> DOCX</span>;
  if (kind === "transcript") return <span className="inline-flex items-center gap-1 text-muted-foreground"><Mic className="size-3" /> Transcript</span>;
  return null;
}
