import { createFileRoute } from "@tanstack/react-router";
import { comparators, exhibitById } from "@/data";
import { StatusBadge } from "@/components/case/Badges";
import { useExhibit } from "@/components/case/ExhibitProvider";
import { AlertTriangle, FileText, ExternalLink } from "lucide-react";
import { clsx } from "clsx";

export const Route = createFileRoute("/comparators")({
  head: () => ({
    meta: [
      { title: "Comparator Matrix — Harbin Case File" },
      { name: "description", content: "Side-by-side comparator movement, waitlist, ticket, performance, and process matrix." },
      { property: "og:title", content: "Comparator Matrix — Harbin Case File" },
    ],
  }),
  component: ComparatorsPage,
});

function ComparatorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Comparator Movement Matrix</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">Who moved, who stayed.</h1>
        <p className="mt-3 text-foreground/75">A side-by-side comparison of schedule, area, waitlist, ticket, performance, and process for each comparator leader.</p>
      </div>

      <div className="mt-10 overflow-x-auto rounded-md border border-border bg-card">
        <table className="min-w-full text-sm">
          <thead className="bg-secondary text-[10px] uppercase tracking-wider text-foreground/70">
            <tr>
              {["Person", "Role / Race", "Prior area / schedule", "Later area / schedule", "Moved", "Waitlist", "Ticket", "Performance", "Why it matters", "Status", "Evidence"].map(h => (
                <th key={h} className="px-3 py-3 text-left font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {comparators.map((c, i) => (
              <tr key={c.id} className={clsx(i === 0 && "bg-accent/5")}>
                <td className="px-3 py-4 align-top">
                  <div className="font-display text-base">{c.person}</div>
                </td>
                <td className="px-3 py-4 align-top text-xs text-foreground/75">
                  {c.role}{c.race ? <div className="text-[11px] text-muted-foreground">{c.race}</div> : null}
                </td>
                <td className="px-3 py-4 align-top text-foreground/85">{c.priorArea}</td>
                <td className="px-3 py-4 align-top text-foreground/85">{c.laterArea}</td>
                <td className="px-3 py-4 align-top text-xs text-foreground/70">{c.monthMoved ?? "—"}</td>
                <td className="px-3 py-4 align-top text-xs text-foreground/70">{c.waitlist}</td>
                <td className="px-3 py-4 align-top text-xs text-foreground/70">{c.ticket}</td>
                <td className="px-3 py-4 align-top text-xs text-foreground/70">{c.performance}</td>
                <td className="px-3 py-4 align-top text-foreground/85">{c.whyItMatters}</td>
                <td className="px-3 py-4 align-top"><StatusBadge status={c.status} /></td>
                <td className="px-3 py-4 align-top text-xs text-muted-foreground">{c.evidenceRef}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-md border-l-2 border-accent bg-accent/5 px-5 py-4 text-sm text-foreground/85">
        <strong className="text-foreground">Core question:</strong> If Respondent had the ability to move leaders across areas, place leaders into earlier or midshift schedules, allow early-leave flexibility, and make assignment exceptions, why was Lashawnna kept in the same general area and PM / closing schedule despite strong performance, documented schedule requests, disputed waitlist concerns, and protected complaints?
      </div>
    </div>
  );
}
