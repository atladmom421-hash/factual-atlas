import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Users, Layers, Calendar, ShieldAlert, Scale } from "lucide-react";
import { events, comparators, exhibits, chapters } from "@/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Executive Overview — Harbin Case File" },
      { name: "description", content: "Executive overview of schedule, waitlist, comparator, department-movement, and retaliation evidence in the Harbin matter." },
      { property: "og:title", content: "Executive Overview — Harbin Case File" },
      { property: "og:description", content: "A structured presentation of the case timeline and evidence map." },
    ],
  }),
  component: Index,
});

function Index() {
  const stats = [
    { label: "Formal complaints documented", value: "6", icon: ShieldAlert },
    { label: "Months of schedule records reviewed", value: "11", icon: Calendar },
    { label: "Comparator leaders identified", value: String(comparators.length), icon: Users },
    { label: "Evidence exhibits attached", value: String(exhibits.length), icon: FileText },
    { label: "Timeline events", value: String(events.length), icon: Layers },
    { label: "Story chapters", value: String(chapters.length), icon: Scale },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.95_0.02_30/_0.5),transparent)]" />
        <div className="mx-auto max-w-7xl px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" /> Case file · Documentary presentation
            </div>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Interactive Case Timeline<br /> <span className="text-accent">and Evidence Map.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-foreground/75 sm:text-lg">
              A structured presentation of schedule movement, protected activity, comparator treatment, department movement, performance evidence, and retaliation concerns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/story" className="group inline-flex items-center gap-2 rounded-sm bg-navy px-5 py-3 text-sm font-medium text-navy-foreground transition hover:bg-navy/90">
                Begin Story Mode <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/timeline" className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary">
                Open Master Timeline
              </Link>
              <Link to="/investigator" className="inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium text-foreground/80 hover:text-foreground">
                Investigator Brief →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive summary */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Executive Summary</div>
            <h2 className="mt-3 font-display text-3xl tracking-tight">A pattern of unequal access to movement, flexibility, and opportunity.</h2>
          </div>
          <div className="md:col-span-8">
            <div className="rounded-md border border-border bg-card p-7 shadow-sm">
              <p className="text-[15.5px] leading-relaxed text-foreground/85">
                This case concerns whether schedule movement, department movement, assignment flexibility, waitlist and ticket processes, and workplace opportunities were applied consistently after protected complaints. The record reflects that earlier schedules, midshift assignments, department movement, and assignment exceptions were available to other leaders, while <strong className="text-foreground">Lashawnna Harbin</strong> remained on a PM / closing schedule despite strong performance, repeated schedule concerns, and disputed waitlist placement.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
                <div className="rounded-sm bg-secondary/60 p-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Strongest comparator</div>
                  <div className="mt-1 font-display text-lg">Tyler Millisock</div>
                  <div className="text-xs text-foreground/70">Same start date and level. Moved areas and schedules.</div>
                </div>
                <div className="rounded-sm bg-secondary/60 p-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Key disputed process</div>
                  <div className="mt-1 font-display text-lg">Waitlist / ticket</div>
                  <div className="text-xs text-foreground/70">No ticket produced. Date and status appear to have been reset.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border sm:grid-cols-3 lg:grid-cols-6">
          {stats.map(s => (
            <div key={s.label} className="bg-background px-5 py-6">
              <s.icon className="size-4 text-accent" />
              <div className="mt-3 font-display text-4xl tracking-tight">{s.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section nav */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Navigate the case</div>
        <h2 className="mt-3 font-display text-3xl tracking-tight">Where to go next.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { to: "/timeline", t: "Master Timeline", d: "Every documented event from 2023 through May 2026 — filterable by category, person, and year." },
            { to: "/people", t: "People Directory", d: "Cards for each leader, witness, and decision-maker, linked to their events and exhibits." },
            { to: "/comparators", t: "Comparator Matrix", d: "Side-by-side movement, waitlist, ticket, and performance comparison." },
            { to: "/movement-map", t: "Department Movement Map", d: "Visual flow of who moved between areas and shifts." },
            { to: "/evidence", t: "Evidence Library", d: "Every attached exhibit with reliability status and linked events." },
            { to: "/investigator", t: "Investigator Brief", d: "Agency-format summary: protected activity, adverse actions, comparators, open questions." },
          ].map(c => (
            <Link key={c.to} to={c.to} className="group block rounded-md border border-border bg-card p-6 transition-all hover:shadow-md hover:-translate-y-0.5">
              <div className="font-display text-xl tracking-tight">{c.t}</div>
              <p className="mt-2 text-sm text-foreground/70">{c.d}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent">Open <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" /></div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
