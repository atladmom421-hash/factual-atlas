import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { events, exhibits, comparators, scheduleRows, CATEGORY_LABELS } from "@/data";
import type { ScheduleType } from "@/data/schedule-data";
import { useExhibit } from "@/components/case/ExhibitProvider";
import { AlertTriangle, Activity, Calendar, Network, BarChart3, Play, Pause, SkipBack, ExternalLink, FileText } from "lucide-react";
import { clsx } from "clsx";

export const Route = createFileRoute("/command")({
  head: () => ({
    meta: [
      { title: "Evidence Dashboard — Harbin Case File" },
      { name: "description", content: "Interactive command center: schedule heatmap, evidence network graph, animated timeline scrubber, and live case counters." },
      { property: "og:title", content: "Evidence Dashboard — Harbin Case File" },
    ],
  }),
  component: CommandPage,
});

const SCHEDULE_COLOR: Record<ScheduleType, string> = {
  "AM": "var(--hud-cyan)",
  "Midshift": "var(--hud-green)",
  "Mid/Late": "var(--hud-amber)",
  "PM/Closing": "var(--hud-red)",
};

function CommandPage() {
  return (
    <div className="hud-grid-bg min-h-screen">
      <div className="mx-auto max-w-[1400px] px-5 py-8">
        <Hero />
        <Counters />
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ScheduleHeatmap />
          <NetworkGraph />
        </div>
        <div className="mt-6">
          <TimelineScrubber />
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden border border-border bg-[color:var(--hud-panel)]/60 px-6 py-8">
      <div className="hidden" />
      <div className="relative">
        <div className="hud-eyebrow">Evidence Dashboard · Harbin v. Employer</div>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          The case, instrumented.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-foreground/70">
          Live view across every event, exhibit, comparator and schedule cell. Four interactive panels: counters, schedule heatmap, evidence network, timeline scrubber. Every node deep-links into the underlying record.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider">
          {[
            { label: "Heatmap", icon: BarChart3, href: "#heatmap" },
            { label: "Network", icon: Network, href: "#network" },
            { label: "Scrubber", icon: Activity, href: "#scrubber" },
          ].map(b => {
            const Icon = b.icon;
            return (
              <a key={b.label} href={b.href} className="inline-flex items-center gap-1.5 border border-border bg-background px-2.5 py-1 hover:border-[color:var(--hud-cyan)] hover:text-[color:var(--hud-cyan)]">
                <Icon className="size-3" /> {b.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Counters ─────────────────────────────────────────────────────── */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const dur = 900;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span className="font-display tabular-nums">{v}{suffix}</span>;
}

function Counters() {
  const stats = useMemo(() => {
    const totalEvents = events.length;
    const protectedActs = events.filter(e => e.category === "protected-activity" || e.category === "hr-complaint").length;
    const confirmedScreenshot = exhibits.filter(e => e.reliability === "confirmed-screenshot").length;
    const deletedConcerns = events.filter(e => e.category === "deleted-evidence").length;
    const comparatorRows = comparators.length;
    const months = new Set(scheduleRows.map(r => r.sortKey)).size;
    return [
      { label: "Timeline events", value: totalEvents, accent: "var(--hud-cyan)" },
      { label: "Attached exhibits", value: exhibits.length, accent: "var(--hud-cyan)" },
      { label: "Protected acts / HR complaints", value: protectedActs, accent: "var(--hud-amber)" },
      { label: "Screenshot-confirmed", value: confirmedScreenshot, accent: "var(--hud-green)" },
      { label: "Deleted-evidence concerns", value: deletedConcerns, accent: "var(--hud-red)" },
      { label: "Comparators tracked", value: comparatorRows, accent: "var(--hud-violet)" },
      { label: "Months of schedule data", value: months, accent: "var(--hud-cyan)" },
    ];
  }, []);

  return (
    <section className="mt-6 grid grid-cols-2 gap-px bg-border md:grid-cols-4 lg:grid-cols-7">
      {stats.map(s => (
        <div key={s.label} className="hud-panel relative bg-[color:var(--hud-panel)] p-4">
          <div className="hud-eyebrow flex items-center gap-1.5">
            <span className="hud-pulse inline-block size-1 rounded-full" style={{ background: s.accent }} />
            Metric
          </div>
          <div className="mt-2 text-4xl leading-none" style={{ color: s.accent }}>
            <CountUp to={s.value} />
          </div>
          <div className="mt-2 text-[11px] text-foreground/70 leading-tight">{s.label}</div>
        </div>
      ))}
    </section>
  );
}

/* ─── Schedule Heatmap ─────────────────────────────────────────────── */
function ScheduleHeatmap() {
  const { open } = useExhibit();
  // Build month list (sorted) and leader list
  const months = useMemo(() => Array.from(new Set(scheduleRows.map(r => r.sortKey))).sort(), []);
  const leaders = useMemo(() => {
    const set = new Set<string>();
    for (const r of scheduleRows) for (const l of r.leaders) set.add(l);
    // Put Harbin first
    return ["Lashawnna Harbin", ...Array.from(set).filter(n => n !== "Lashawnna Harbin").sort()];
  }, []);

  // cells[leader][month] = { type, row }
  const cells = useMemo(() => {
    const map: Record<string, Record<string, { type: ScheduleType; rowId: string; pages: string }>> = {};
    for (const r of scheduleRows) {
      for (const l of r.leaders) {
        (map[l] ??= {})[r.sortKey] = { type: r.scheduleType, rowId: r.id, pages: r.evidencePages };
      }
    }
    return map;
  }, []);

  const [hover, setHover] = useState<{ leader: string; month: string } | null>(null);
  const monthLabel = (m: string) => {
    const [y, mm] = m.split("-");
    return new Date(Number(y), Number(mm) - 1, 1).toLocaleString("en-US", { month: "short", year: "2-digit" });
  };

  return (
    <section id="heatmap" className="hud-panel bg-[color:var(--hud-panel)] p-4">
      <header className="flex items-start justify-between gap-4 pb-3 border-b border-border">
        <div>
          <div className="hud-eyebrow">Section 02 · Schedule Heatmap</div>
          <h2 className="mt-1 font-display text-2xl tracking-tight">15-month schedule grid</h2>
          <p className="mt-1 text-xs text-foreground/70 max-w-md">Each row a leader, each column a month. Lashawnna pinned at top: red = PM/closing. Peers move freely across AM (cyan), Midshift (green), Mid/Late (amber).</p>
        </div>
        <Legend />
      </header>

      <div className="mt-4 overflow-x-auto">
        <div className="inline-block min-w-full">
          {/* Header row */}
          <div className="flex">
            <div className="w-40 shrink-0 sticky left-0 bg-[color:var(--hud-panel)] z-10 font-mono text-[9px] uppercase tracking-wider text-muted-foreground py-1">Leader</div>
            {months.map(m => (
              <div key={m} className="w-7 shrink-0 text-center font-mono text-[9px] uppercase text-muted-foreground py-1 [writing-mode:vertical-rl] rotate-180 h-12">
                {monthLabel(m)}
              </div>
            ))}
          </div>
          {leaders.map(l => {
            const isHarbin = l === "Lashawnna Harbin";
            return (
              <div key={l} className={clsx("flex border-t border-border/60", isHarbin && "bg-[color:var(--hud-red)]/8")}>
                <div className={clsx(
                  "w-40 shrink-0 sticky left-0 z-10 px-2 py-1.5 text-[11px] truncate",
                  isHarbin ? "bg-[color:var(--hud-red)]/15 text-foreground font-medium border-l-2 border-[color:var(--hud-red)]" : "bg-[color:var(--hud-panel)] text-foreground/85",
                )}>
                  {isHarbin && <span className="mr-1 text-[color:var(--hud-red)]">●</span>}
                  {l}
                </div>
                {months.map(m => {
                  const c = cells[l]?.[m];
                  const isHover = hover?.leader === l && hover?.month === m;
                  return (
                    <button
                      key={m}
                      onMouseEnter={() => setHover({ leader: l, month: m })}
                      onMouseLeave={() => setHover(null)}
                      onClick={() => c && open("EX-022")}
                      className={clsx(
                        "w-7 h-7 shrink-0 border-r border-b border-border/40 transition-transform",
                        c && "hover:scale-110 hover:z-20 hover:relative cursor-pointer",
                        isHover && "ring-1 ring-[color:var(--hud-cyan)] z-20 relative",
                      )}
                      style={c ? { background: `color-mix(in oklab, ${SCHEDULE_COLOR[c.type]} 70%, transparent)` } : { background: "transparent" }}
                      title={c ? `${l} · ${monthLabel(m)} · ${c.type} · EX-022 ${c.pages}` : `${l} · ${monthLabel(m)} · no data`}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <footer className="mt-3 pt-3 border-t border-border flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
        <span>{hover ? `${hover.leader} · ${monthLabel(hover.month)}` : "Hover a cell · click to open EX-022"}</span>
        <Link to="/schedule-data" className="text-[color:var(--hud-cyan)] hover:underline inline-flex items-center gap-1">
          Open full table <ExternalLink className="size-3" />
        </Link>
      </footer>
    </section>
  );
}

function Legend() {
  const items: { t: ScheduleType; label: string }[] = [
    { t: "AM", label: "AM" },
    { t: "Midshift", label: "Midshift" },
    { t: "Mid/Late", label: "Mid/Late" },
    { t: "PM/Closing", label: "PM / Closing" },
  ];
  return (
    <div className="flex flex-wrap gap-2 font-mono text-[9px] uppercase tracking-wider">
      {items.map(i => (
        <div key={i.t} className="flex items-center gap-1.5 border border-border bg-background/60 px-2 py-1">
          <span className="inline-block size-2.5" style={{ background: SCHEDULE_COLOR[i.t] }} />
          {i.label}
        </div>
      ))}
    </div>
  );
}

/* ─── Network Graph (custom force simulation in SVG) ──────────────── */
type GNode = { id: string; type: "person" | "event" | "exhibit"; label: string; x: number; y: number; vx: number; vy: number; fx?: number; fy?: number; r: number; group?: string };
type GEdge = { source: string; target: string };

function NetworkGraph() {
  const { open } = useExhibit();
  const [selected, setSelected] = useState<string | null>("harbin");

  // Build a focused subgraph: top people + their events + linked exhibits
  const { nodes, edges } = useMemo(() => buildGraph(), []);
  const nodesRef = useRef<GNode[]>(nodes.map(n => ({ ...n })));
  const [, force] = useState(0);
  const reqRef = useRef<number>(0);
  const dragRef = useRef<{ id: string | null }>({ id: null });

  // Simulation
  useEffect(() => {
    const W = 560, H = 460;
    const cx = W / 2, cy = H / 2;
    const ns = nodesRef.current;
    const adj: Record<string, Set<string>> = {};
    for (const e of edges) {
      (adj[e.source] ??= new Set()).add(e.target);
      (adj[e.target] ??= new Set()).add(e.source);
    }
    let frames = 0;
    const step = () => {
      const K = 0.022;
      const charge = -180;
      const linkDist = 70;
      for (const a of ns) {
        a.vx = (a.vx ?? 0) * 0.86;
        a.vy = (a.vy ?? 0) * 0.86;
        // Center gravity
        a.vx += (cx - a.x) * K * 0.06;
        a.vy += (cy - a.y) * K * 0.06;
        for (const b of ns) {
          if (a === b) continue;
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy + 0.01;
          const d = Math.sqrt(d2);
          const f = charge / d2;
          a.vx += (dx / d) * f;
          a.vy += (dy / d) * f;
        }
      }
      for (const e of edges) {
        const a = ns.find(n => n.id === e.source)!;
        const b = ns.find(n => n.id === e.target)!;
        if (!a || !b) continue;
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.sqrt(dx * dx + dy * dy) || 1;
        const diff = (d - linkDist) * 0.05;
        a.vx += (dx / d) * diff;
        a.vy += (dy / d) * diff;
        b.vx -= (dx / d) * diff;
        b.vy -= (dy / d) * diff;
      }
      for (const a of ns) {
        if (a.fx != null) { a.x = a.fx; a.vx = 0; }
        else a.x = Math.max(a.r, Math.min(W - a.r, a.x + a.vx));
        if (a.fy != null) { a.y = a.fy; a.vy = 0; }
        else a.y = Math.max(a.r, Math.min(H - a.r, a.y + a.vy));
      }
      frames++;
      if (frames < 1500) {
        force(f => f + 1);
        reqRef.current = requestAnimationFrame(step);
      }
    };
    reqRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(reqRef.current);
  }, [edges]);

  const ns = nodesRef.current;
  const selectedNode = ns.find(n => n.id === selected) ?? null;
  const neighbors = useMemo(() => {
    if (!selected) return new Set<string>();
    const s = new Set<string>();
    for (const e of edges) {
      if (e.source === selected) s.add(e.target);
      if (e.target === selected) s.add(e.source);
    }
    return s;
  }, [selected, edges]);

  const onDown = (id: string) => (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    dragRef.current.id = id;
    const n = ns.find(x => x.id === id);
    if (n) { n.fx = n.x; n.fy = n.y; }
    setSelected(id);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragRef.current.id) return;
    const svg = (e.currentTarget as SVGSVGElement);
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 560;
    const y = ((e.clientY - rect.top) / rect.height) * 460;
    const n = ns.find(x => x.id === dragRef.current.id);
    if (n) { n.fx = x; n.fy = y; n.x = x; n.y = y; }
    force(f => f + 1);
  };
  const onUp = () => {
    const n = ns.find(x => x.id === dragRef.current.id);
    if (n) { n.fx = undefined; n.fy = undefined; }
    dragRef.current.id = null;
  };

  const colorFor = (n: GNode) => {
    if (n.id === "harbin") return "var(--hud-amber)";
    if (n.type === "person") return "var(--hud-cyan)";
    if (n.type === "event") return "var(--hud-violet)";
    return "var(--hud-green)";
  };

  return (
    <section id="network" className="hud-panel bg-[color:var(--hud-panel)] p-4">
      <header className="flex items-start justify-between gap-4 pb-3 border-b border-border">
        <div>
          <div className="hud-eyebrow">Section 03 · Evidence Network</div>
          <h2 className="mt-1 font-display text-2xl tracking-tight">People · events · exhibits</h2>
          <p className="mt-1 text-xs text-foreground/70 max-w-md">Force-directed graph of who connects to what. Drag nodes, click to inspect. Harbin is the gold node.</p>
        </div>
        <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground space-y-0.5">
          <div><span className="inline-block size-2 mr-1.5" style={{ background: "var(--hud-amber)" }} />Charging party</div>
          <div><span className="inline-block size-2 mr-1.5" style={{ background: "var(--hud-cyan)" }} />Person</div>
          <div><span className="inline-block size-2 mr-1.5" style={{ background: "var(--hud-violet)" }} />Event</div>
          <div><span className="inline-block size-2 mr-1.5" style={{ background: "var(--hud-green)" }} />Exhibit</div>
        </div>
      </header>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_220px]">
        <svg
          viewBox="0 0 560 460"
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
          className="w-full h-[460px] border border-border bg-[color:var(--hud-bg)]"
        >
          {/* edges */}
          {edges.map((e, i) => {
            const a = ns.find(n => n.id === e.source);
            const b = ns.find(n => n.id === e.target);
            if (!a || !b) return null;
            const active = selected && (e.source === selected || e.target === selected);
            return (
              <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={active ? "var(--hud-cyan)" : "var(--hud-grid-strong)"}
                strokeWidth={active ? 1.2 : 0.6}
                opacity={selected && !active ? 0.25 : 0.8} />
            );
          })}
          {/* nodes */}
          {ns.map(n => {
            const isSel = n.id === selected;
            const dim = selected && !isSel && !neighbors.has(n.id);
            return (
              <g key={n.id} transform={`translate(${n.x},${n.y})`}
                 onPointerDown={onDown(n.id)}
                 className="cursor-pointer"
                 opacity={dim ? 0.3 : 1}>
                <circle r={n.r + (isSel ? 4 : 0)} fill={colorFor(n)}
                  stroke={isSel ? "var(--hud-cyan)" : "var(--hud-bg)"} strokeWidth={isSel ? 2 : 1.5} />
                {(isSel || n.type === "person" || neighbors.has(n.id)) && (
                  <text y={n.r + 10} textAnchor="middle" className="font-mono"
                    fontSize="9" fill="var(--foreground)" pointerEvents="none">
                    {n.label.length > 18 ? n.label.slice(0, 16) + "…" : n.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Inspector */}
        <aside className="border border-border bg-background/50 p-3 text-xs">
          {selectedNode ? (
            <NodeInspector node={selectedNode} edges={edges} nodes={ns} onSelect={setSelected} onOpenExhibit={open} />
          ) : (
            <div className="text-muted-foreground font-mono text-[10px] uppercase tracking-wider">Click a node…</div>
          )}
        </aside>
      </div>
    </section>
  );
}

function NodeInspector({ node, edges, nodes, onSelect, onOpenExhibit }: { node: GNode; edges: GEdge[]; nodes: GNode[]; onSelect: (id: string | null) => void; onOpenExhibit: (id: string) => void }) {
  const links = edges.filter(e => e.source === node.id || e.target === node.id);
  const others = links.map(e => nodes.find(n => n.id === (e.source === node.id ? e.target : e.source))).filter(Boolean) as GNode[];
  return (
    <div className="space-y-2">
      <div className="hud-eyebrow">Node · {node.type}</div>
      <div className="font-display text-lg leading-tight">{node.label}</div>
      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{others.length} connections</div>
      <div className="max-h-72 overflow-auto space-y-0.5 pt-1">
        {others.map(o => (
          <button key={o.id} onClick={() => onSelect(o.id)} className="w-full text-left text-[11px] truncate px-1.5 py-1 hover:bg-secondary/60">
            <span className="inline-block size-1.5 mr-1.5 align-middle" style={{ background: o.type === "person" ? "var(--hud-cyan)" : o.type === "event" ? "var(--hud-violet)" : "var(--hud-green)" }} />
            {o.label}
          </button>
        ))}
      </div>
      {node.type === "exhibit" && (
        <button onClick={() => onOpenExhibit(node.id)} className="mt-2 w-full inline-flex items-center justify-center gap-1.5 border border-[color:var(--hud-cyan)] bg-[color:var(--hud-cyan)]/10 px-2 py-1.5 text-[11px] text-[color:var(--hud-cyan)] hover:bg-[color:var(--hud-cyan)]/20">
          <FileText className="size-3" /> Open exhibit
        </button>
      )}
    </div>
  );
}

function buildGraph(): { nodes: GNode[]; edges: GEdge[] } {
  // Top people = peopleIds that appear most often + everyone in comparators
  const peopleCount: Record<string, number> = {};
  for (const e of events) for (const p of e.peopleIds) peopleCount[p] = (peopleCount[p] ?? 0) + 1;
  const topPeople = Object.entries(peopleCount).sort((a, b) => b[1] - a[1]).slice(0, 14).map(([id]) => id);
  const personLabel: Record<string, string> = { harbin: "Lashawnna Harbin" };

  // Build a label map from events.peopleIds (use last seen as label)
  for (const e of events) for (const p of e.peopleIds) if (!personLabel[p]) personLabel[p] = prettify(p);

  // Pick "key" events — protected activity + comparator + deleted-evidence + first event per category
  const keyCats = new Set(["protected-activity", "hr-complaint", "comparator", "deleted-evidence", "schedule-waitlist"]);
  const keyEvents = events.filter(e => keyCats.has(e.category)).slice(0, 18);

  const exhibitIds = new Set<string>();
  for (const e of keyEvents) for (const x of e.evidenceIds) exhibitIds.add(x);
  const keyExhibits = exhibits.filter(x => exhibitIds.has(x.exhibitNumber) || exhibitIds.has(x.id)).slice(0, 14);

  const W = 560, H = 460;
  const nodes: GNode[] = [];
  const rand = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  let s = 0;
  for (const id of topPeople) nodes.push({ id, type: "person", label: personLabel[id], x: rand(++s) * W, y: rand(++s) * H, vx: 0, vy: 0, r: id === "harbin" ? 9 : 6 });
  for (const e of keyEvents) nodes.push({ id: e.id, type: "event", label: e.title, x: rand(++s) * W, y: rand(++s) * H, vx: 0, vy: 0, r: 4 });
  for (const x of keyExhibits) nodes.push({ id: x.id, type: "exhibit", label: x.exhibitNumber + " · " + x.fileName, x: rand(++s) * W, y: rand(++s) * H, vx: 0, vy: 0, r: 5 });

  const nodeIds = new Set(nodes.map(n => n.id));
  const edges: GEdge[] = [];
  for (const e of keyEvents) {
    for (const p of e.peopleIds) if (nodeIds.has(p)) edges.push({ source: p, target: e.id });
    for (const x of e.evidenceIds) {
      const target = nodes.find(n => n.id === x || (n.type === "exhibit" && exhibits.find(ex => ex.id === n.id)?.exhibitNumber === x));
      if (target) edges.push({ source: e.id, target: target.id });
    }
  }
  return { nodes, edges };
}

function prettify(id: string): string {
  return id.split(/[-_]/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
}

/* ─── Timeline Scrubber ─────────────────────────────────────────────── */
function TimelineScrubber() {
  // Use sortKey to position events. Months from earliest to latest.
  const months = useMemo(() => {
    const set = new Set<string>();
    for (const e of events) set.add(e.sortKey.slice(0, 7));
    return Array.from(set).sort();
  }, []);
  const [idx, setIdx] = useState(months.length - 1);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const playRef = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    const tick = () => {
      setIdx(i => {
        const next = i + 1;
        if (next >= months.length) { setPlaying(false); return months.length - 1; }
        return next;
      });
      playRef.current = window.setTimeout(tick, 600 / speed);
    };
    playRef.current = window.setTimeout(tick, 600 / speed);
    return () => { if (playRef.current) clearTimeout(playRef.current); };
  }, [playing, speed, months.length]);

  const activeMonth = months[idx];
  const visibleEvents = useMemo(() => events.filter(e => e.sortKey.slice(0, 7) <= activeMonth), [activeMonth]);

  const monthLabel = (m: string) => {
    const [y, mm] = m.split("-");
    return new Date(Number(y), Number(mm) - 1, 1).toLocaleString("en-US", { month: "short", year: "numeric" });
  };

  // Lane assignment by category
  const cats = Array.from(new Set(events.map(e => e.category)));
  const catColor: Record<string, string> = {
    "protected-activity": "var(--hud-amber)",
    "hr-complaint": "var(--hud-amber)",
    "schedule-waitlist": "var(--hud-cyan)",
    "department-movement": "var(--hud-violet)",
    "comparator": "var(--hud-cyan)",
    "retaliation": "var(--hud-red)",
    "performance": "var(--hud-green)",
    "leave": "var(--hud-green)",
    "internal-investigation": "var(--hud-violet)",
    "deleted-evidence": "var(--hud-red)",
  };
  const W = 1320, H = 240;
  const trackY = H - 40;
  const x = (m: string) => {
    const i = months.indexOf(m);
    return 40 + (i / Math.max(1, months.length - 1)) * (W - 80);
  };
  const laneY = (c: string) => 24 + (cats as string[]).indexOf(c) * 18;
  const playheadX = x(activeMonth);

  return (
    <section id="scrubber" className="hud-panel bg-[color:var(--hud-panel)] p-4">
      <header className="flex items-start justify-between gap-4 pb-3 border-b border-border">
        <div>
          <div className="hud-eyebrow">Section 04 · Timeline</div>
          <h2 className="mt-1 font-display text-2xl tracking-tight">Scrub through {months.length} months of evidence</h2>
          <p className="mt-1 text-xs text-foreground/70 max-w-2xl">Drag the playhead or press play. Events appear as their month is reached; lanes group by category.</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider">
          <button onClick={() => { setIdx(0); setPlaying(false); }} className="p-1.5 border border-border hover:border-[color:var(--hud-cyan)]" aria-label="Restart"><SkipBack className="size-3" /></button>
          <button onClick={() => setPlaying(p => !p)} className="inline-flex items-center gap-1.5 border border-[color:var(--hud-cyan)] bg-[color:var(--hud-cyan)]/10 px-2 py-1 text-[color:var(--hud-cyan)]">
            {playing ? <><Pause className="size-3" /> Pause</> : <><Play className="size-3" /> Play</>}
          </button>
          <select value={speed} onChange={e => setSpeed(Number(e.target.value))} className="bg-background border border-border px-1.5 py-1 font-mono text-[10px]">
            <option value={0.5}>0.5×</option>
            <option value={1}>1×</option>
            <option value={2}>2×</option>
            <option value={4}>4×</option>
          </select>
        </div>
      </header>

      <div className="mt-3 flex items-center gap-3">
        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground w-24">Cursor</div>
        <div className="font-display text-2xl text-[color:var(--hud-cyan)]" style={{ minWidth: 140 }}>{monthLabel(activeMonth)}</div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {visibleEvents.length} / {events.length} events revealed
        </div>
      </div>

      <div className="mt-3 overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-[240px] min-w-[900px] border border-border bg-[color:var(--hud-bg)]">
          {/* category lanes */}
          {cats.map(c => (
            <g key={c}>
              <text x={6} y={laneY(c) + 3} fontSize="8" fill="var(--muted-foreground)" className="font-mono">{(CATEGORY_LABELS[c] ?? c).toUpperCase().slice(0, 18)}</text>
              <line x1={40} x2={W - 40} y1={laneY(c)} y2={laneY(c)} stroke="var(--hud-grid)" strokeDasharray="2 4" />
            </g>
          ))}
          {/* x axis */}
          <line x1={40} x2={W - 40} y1={trackY} y2={trackY} stroke="var(--hud-grid-strong)" />
          {months.map((m, i) => {
            const showLabel = i % Math.max(1, Math.floor(months.length / 12)) === 0;
            return (
              <g key={m} transform={`translate(${x(m)},${trackY})`}>
                <line y1={-3} y2={3} stroke="var(--hud-grid-strong)" />
                {showLabel && <text y={16} textAnchor="middle" fontSize="9" fill="var(--muted-foreground)" className="font-mono">{m.slice(2)}</text>}
              </g>
            );
          })}
          {/* events */}
          {events.map(e => {
            const m = e.sortKey.slice(0, 7);
            const revealed = m <= activeMonth;
            return (
              <circle key={e.id} cx={x(m)} cy={laneY(e.category)} r={revealed ? 3.5 : 1.5}
                fill={catColor[e.category]} opacity={revealed ? 1 : 0.18}
                style={{ transition: "r 250ms, opacity 250ms" }}>
                <title>{e.date} · {e.title}</title>
              </circle>
            );
          })}
          {/* playhead */}
          <line x1={playheadX} x2={playheadX} y1={10} y2={trackY + 6} stroke="var(--hud-cyan)" strokeWidth={1.5} />
          <polygon points={`${playheadX - 5},${trackY + 6} ${playheadX + 5},${trackY + 6} ${playheadX},${trackY + 14}`} fill="var(--hud-cyan)" />
        </svg>
      </div>

      <input
        type="range" min={0} max={months.length - 1} value={idx}
        onChange={e => { setIdx(Number(e.target.value)); setPlaying(false); }}
        className="mt-2 w-full accent-[color:var(--hud-cyan)]"
        aria-label="Timeline scrubber"
      />

      <footer className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 max-h-48 overflow-auto">
        {visibleEvents.slice(-6).reverse().map(e => (
          <div key={e.id} className="border border-border bg-background/40 px-2 py-1.5 text-[11px]">
            <div className="font-mono text-[9px] uppercase tracking-wider text-[color:var(--hud-cyan)]">{e.date}</div>
            <div className="text-foreground/90 leading-tight truncate" title={e.title}>{e.title}</div>
          </div>
        ))}
      </footer>
    </section>
  );
}
