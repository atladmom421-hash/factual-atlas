import { createFileRoute } from "@tanstack/react-router";
import { movementEdges, AREAS } from "@/data";
import { StatusBadge } from "@/components/case/Badges";
import { motion } from "framer-motion";

export const Route = createFileRoute("/movement-map")({
  head: () => ({
    meta: [
      { title: "Department Movement Map — Harbin Case File" },
      { name: "description", content: "Visual map of department and schedule movement between LVAR, TBAY, Whitehall, PRE-D/DBC, Pay Pro, Training, Ohio/Onsite, and Capital One." },
      { property: "og:title", content: "Department Movement Map — Harbin Case File" },
    ],
  }),
  component: MovementPage,
});

function MovementPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Department Movement Map</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">Who moved between areas.</h1>
        <p className="mt-3 text-foreground/75">A flow of reported and documented movement between operational areas. Each line carries a status — confirmed, reported, or needs confirmation.</p>
      </div>

      {/* Areas grid */}
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {AREAS.map(a => (
          <div key={a} className="rounded-sm border border-border bg-card p-4 text-center">
            <div className="font-display text-lg">{a}</div>
          </div>
        ))}
      </div>

      {/* Movement lines */}
      <div className="mt-12 space-y-3">
        {movementEdges.map((e, i) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="grid items-center gap-3 rounded-md border border-border bg-card p-4 sm:grid-cols-12"
          >
            <div className="sm:col-span-3">
              <div className="font-display text-lg">{e.personName}</div>
              <div className="text-xs text-muted-foreground">{e.period}</div>
            </div>
            <div className="sm:col-span-7 flex items-center gap-3">
              <span className="rounded-sm bg-secondary px-2.5 py-1 text-xs">{e.from}</span>
              <svg className="size-6 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              <span className="rounded-sm bg-navy px-2.5 py-1 text-xs text-navy-foreground">{e.to}</span>
            </div>
            <div className="sm:col-span-2 sm:text-right">
              <StatusBadge status={e.status} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 rounded-md border-l-2 border-accent bg-accent/5 px-5 py-4 text-sm text-foreground/85">
        <strong className="text-foreground">Why it matters:</strong> Movement existed across departments during the same period Lashawnna's placement was disputed. The map highlights where the official process (waitlist + ticket) does not appear to explain how others moved.
      </div>
    </div>
  );
}
