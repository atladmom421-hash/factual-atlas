import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { movementEdges, AREAS, comparators, personById } from "@/data";
import { StatusBadge } from "@/components/case/Badges";
import { motion } from "framer-motion";
import { ArrowRight, Filter, Users2 } from "lucide-react";
import { clsx } from "clsx";

export const Route = createFileRoute("/movement-map")({
  head: () => ({
    meta: [
      { title: "Department Movement Map — Harbin Case File" },
      { name: "description", content: "Multi-step shift and area movement chains for every documented comparator TL across 18 months (Dec 2024 → May 2026), derived from EX-022." },
      { property: "og:title", content: "Department Movement Map — Harbin Case File" },
    ],
  }),
  component: MovementPage,
});

type Chain = { personId: string; personName: string; steps: typeof movementEdges; totalMoves: number };

function MovementPage() {
  const [statusFilter, setStatusFilter] = useState<"all" | "confirmed" | "reported" | "needs-confirmation">("all");
  const [personFilter, setPersonFilter] = useState<string>("all");

  // Group edges into per-person chains, sorted chronologically by id index
  const chains: Chain[] = useMemo(() => {
    const map = new Map<string, Chain>();
    movementEdges.forEach(e => {
      if (statusFilter !== "all" && e.status !== statusFilter) return;
      if (personFilter !== "all" && e.personId !== personFilter) return;
      const existing = map.get(e.personId);
      if (existing) {
        existing.steps.push(e);
        existing.totalMoves++;
      } else {
        map.set(e.personId, { personId: e.personId, personName: e.personName, steps: [e], totalMoves: 1 });
      }
    });
    // Harbin pinned last; multi-step chains first; otherwise alphabetical
    return Array.from(map.values()).sort((a, b) => {
      if (a.personId === "harbin") return 1;
      if (b.personId === "harbin") return -1;
      if (b.totalMoves !== a.totalMoves) return b.totalMoves - a.totalMoves;
      return a.personName.localeCompare(b.personName);
    });
  }, [statusFilter, personFilter]);

  const totalMoves = movementEdges.filter(e => e.personId !== "harbin").length;
  const multiStep = useMemo(() => {
    const counts = new Map<string, number>();
    movementEdges.forEach(e => { if (e.personId !== "harbin") counts.set(e.personId, (counts.get(e.personId) ?? 0) + 1); });
    return Array.from(counts.values()).filter(n => n >= 2).length;
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Department + Schedule Movement</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">Who moved. How many times.</h1>
        <p className="mt-3 text-foreground/75">
          Every shift / area transition visible in EX-022's 18-month named-TL grids, grouped into per-person movement chains.
          Harbin's row sits at the bottom — a single uninterrupted line through 18 months while peers cycle through AM, midshift, mid/late, and closing.
        </p>
      </div>

      {/* Headline stats */}
      <div className="mt-8 grid gap-3 sm:grid-cols-4">
        <Stat label="Documented moves" value={`${totalMoves}`} sublabel="across peer TLs (Dec 2024 → May 2026)" />
        <Stat label="Peers with 2+ moves" value={`${multiStep}`} sublabel="Faulkner · McGregor · Kollar · Millisock · Cahoon" />
        <Stat label="Cross-dept onto LVAR AM" value="3" sublabel="Samuel · Christensen · Bell" tone="accent" />
        <Stat label="Harbin moves" value="0" sublabel="18 consecutive months on PM/closing" tone="warn" />
      </div>

      {/* Areas grid */}
      <div className="mt-10">
        <div className="mb-2 text-[11px] uppercase tracking-wider text-muted-foreground">Operational areas referenced in the chains</div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {AREAS.map(a => (
            <div key={a} className="rounded-sm border border-border bg-card px-3 py-2 text-center text-xs">{a}</div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap items-center gap-2 rounded-md border border-border bg-card px-3 py-2">
        <Filter className="size-3.5 text-muted-foreground" />
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Filter</span>
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value as typeof statusFilter)}
          className="rounded-sm border border-border bg-background px-2 py-1 text-xs"
        >
          <option value="all">All evidence</option>
          <option value="confirmed">Confirmed (in EX-022 grid)</option>
          <option value="reported">Reported</option>
          <option value="needs-confirmation">Needs confirmation</option>
        </select>
        <Users2 className="ml-2 size-3.5 text-muted-foreground" />
        <select
          value={personFilter}
          onChange={e => setPersonFilter(e.target.value)}
          className="rounded-sm border border-border bg-background px-2 py-1 text-xs"
        >
          <option value="all">All people</option>
          {Array.from(new Set(movementEdges.map(e => e.personId))).map(id => (
            <option key={id} value={id}>{movementEdges.find(e => e.personId === id)?.personName}</option>
          ))}
        </select>
        <span className="ml-auto text-[11px] text-muted-foreground">
          Showing {chains.length} {chains.length === 1 ? "person" : "people"} · {chains.reduce((s, c) => s + c.steps.length, 0)} edges
        </span>
      </div>

      {/* Movement chains */}
      <div className="mt-6 space-y-3">
        {chains.map((chain, i) => {
          const person = personById(chain.personId);
          const compRow = comparators.find(c => c.id === `c-${chain.personId}`);
          const isHarbin = chain.personId === "harbin";
          return (
            <motion.div
              key={chain.personId}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={clsx(
                "rounded-md border bg-card p-4",
                isHarbin ? "border-accent/60 bg-accent/5" : "border-border"
              )}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg">{chain.personName}</h3>
                    {person?.race && <span className="rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-foreground/70">{person.race}</span>}
                    {chain.totalMoves >= 2 && !isHarbin && (
                      <span className="rounded-sm bg-accent/15 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-accent">{chain.totalMoves}-step chain</span>
                    )}
                    {isHarbin && (
                      <span className="rounded-sm bg-amber-500/15 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-300">No movement · 18 months</span>
                    )}
                  </div>
                  {person && <div className="mt-0.5 text-xs text-muted-foreground">{person.role}</div>}
                </div>
                {compRow && (
                  <Link
                    to="/comparators"
                    hash={compRow.id}
                    className="text-[11px] text-accent hover:underline"
                  >
                    Compare to Harbin →
                  </Link>
                )}
              </div>

              {/* Chain visualization */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {chain.steps.map((step, idx) => (
                  <div key={step.id} className="flex items-center gap-2">
                    {idx === 0 && (
                      <span className="rounded-sm bg-secondary px-2 py-1 text-[11px] text-foreground/85">{step.from}</span>
                    )}
                    <ArrowRight className={clsx("size-4 shrink-0", isHarbin ? "text-amber-500" : "text-accent")} />
                    <div className="flex flex-col gap-0.5">
                      <span className={clsx(
                        "rounded-sm px-2 py-1 text-[11px]",
                        isHarbin ? "bg-amber-500/15 text-amber-700 dark:text-amber-300" : "bg-navy px-2.5 py-1 text-navy-foreground"
                      )}>{step.to}</span>
                      <span className="text-[10px] text-muted-foreground">{step.period}</span>
                    </div>
                  </div>
                ))}
                <div className="ml-auto"><StatusBadge status={chain.steps[0].status} /></div>
              </div>

              {compRow && (
                <p className="mt-3 border-l-2 border-border pl-3 text-xs text-foreground/75">
                  <strong className="text-foreground/90">Why it matters: </strong>{compRow.whyItMatters}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 rounded-md border-l-2 border-accent bg-accent/5 px-5 py-4 text-sm text-foreground/85">
        <strong className="text-foreground">Pattern:</strong> Across 18 months Respondent moved {multiStep} TLs more than once,
        placed 3 cross-department transfers directly onto LVAR AM (Hunter Samuel, Cody Christensen, Jarin Bell),
        and cycled peers through every shift envelope Harbin requested. Harbin's single-line chain — closing to closing — is the only flat line in the dataset.
      </div>
    </div>
  );
}

function Stat({ label, value, sublabel, tone }: { label: string; value: string; sublabel?: string; tone?: "accent" | "warn" }) {
  return (
    <div className={clsx(
      "rounded-md border bg-card p-4",
      tone === "warn" ? "border-amber-500/40 bg-amber-500/5" : tone === "accent" ? "border-accent/40 bg-accent/5" : "border-border"
    )}>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-3xl tracking-tight">{value}</div>
      {sublabel && <div className="mt-1 text-[11px] text-foreground/65">{sublabel}</div>}
    </div>
  );
}
