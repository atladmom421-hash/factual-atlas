import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { events, exhibits, comparators, scheduleRows, CATEGORY_LABELS } from "@/data";
import type { ScheduleType } from "@/data/schedule-data";
import { useExhibit } from "@/components/case/ExhibitProvider";
import { AlertTriangle, Activity, Calendar, Network, BarChart3, Play, Pause, SkipBack, ExternalLink, FileText, Search, RotateCcw, ZoomIn, ZoomOut, ArrowUpRight } from "lucide-react";
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

type TypeKey = "person" | "event" | "exhibit";

function NetworkGraph() {
  const { open } = useExhibit();
  const [selected, setSelected] = useState<string | null>("harbin");
  const [hover, setHover] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState<Record<TypeKey, boolean>>({ person: true, event: true, exhibit: true });
  const [zoom, setZoom] = useState(1);

  const { nodes, edges } = useMemo(() => buildGraph(), []);
  const nodesRef = useRef<GNode[]>(nodes.map(n => ({ ...n })));
  const [, force] = useState(0);
  const reqRef = useRef<number>(0);
  const dragRef = useRef<{ id: string | null }>({ id: null });
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Simulation — re-run whenever edges/visibility change.
  const visibleNodeIds = useMemo(
    () => new Set(nodesRef.current.filter(n => visible[n.type]).map(n => n.id)),
    [visible],
  );
  const activeEdges = useMemo(
    () => edges.filter(e => visibleNodeIds.has(e.source) && visibleNodeIds.has(e.target)),
    [edges, visibleNodeIds],
  );

  useEffect(() => {
    const W = 720, H = 520;
    const cx = W / 2, cy = H / 2;
    const ns = nodesRef.current.filter(n => visibleNodeIds.has(n.id));
    let frames = 0;
    const step = () => {
      const K = 0.022;
      const charge = -220;
      const linkDist = 78;
      for (const a of ns) {
        a.vx = (a.vx ?? 0) * 0.86;
        a.vy = (a.vy ?? 0) * 0.86;
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
      for (const e of activeEdges) {
        const a = ns.find(n => n.id === e.source);
        const b = ns.find(n => n.id === e.target);
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
      if (frames < 1600) {
        force(f => f + 1);
        reqRef.current = requestAnimationFrame(step);
      }
    };
    reqRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(reqRef.current);
  }, [activeEdges, visibleNodeIds]);

  const ns = nodesRef.current;
  const focusId = hover ?? selected;
  const selectedNode = ns.find(n => n.id === selected) ?? null;
  const neighbors = useMemo(() => {
    if (!focusId) return new Set<string>();
    const s = new Set<string>();
    for (const e of edges) {
      if (e.source === focusId) s.add(e.target);
      if (e.target === focusId) s.add(e.source);
    }
    return s;
  }, [focusId, edges]);

  const matchesQuery = (n: GNode) =>
    !query.trim() || n.label.toLowerCase().includes(query.trim().toLowerCase());

  const W = 720, H = 520;

  const onDown = (id: string) => (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    dragRef.current.id = id;
    const n = ns.find(x => x.id === id);
    if (n) { n.fx = n.x; n.fy = n.y; }
    setSelected(id);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragRef.current.id) return;
    const svg = e.currentTarget as SVGSVGElement;
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * W;
    const y = ((e.clientY - rect.top) / rect.height) * H;
    const n = ns.find(x => x.id === dragRef.current.id);
    if (n) { n.fx = x; n.fy = y; n.x = x; n.y = y; }
    force(f => f + 1);
  };
  const onUp = () => {
    const n = ns.find(x => x.id === dragRef.current.id);
    if (n) { n.fx = undefined; n.fy = undefined; }
    dragRef.current.id = null;
  };

  const resetLayout = () => {
    const rand = (seed: number) => { const x = Math.sin(seed) * 10000; return x - Math.floor(x); };
    let s = Date.now();
    for (const n of ns) {
      if (n.id === "harbin") { n.x = W / 2; n.y = H / 2; n.vx = 0; n.vy = 0; continue; }
      n.x = rand(++s) * W; n.y = rand(++s) * H; n.vx = 0; n.vy = 0; n.fx = undefined; n.fy = undefined;
    }
    setZoom(1);
    force(f => f + 1);
  };

  const colorFor = (n: GNode) => {
    if (n.id === "harbin") return "var(--hud-amber)";
    if (n.type === "person") return "var(--hud-cyan)";
    if (n.type === "event") return "var(--hud-violet)";
    return "var(--hud-green)";
  };

  const typeCounts = { person: 0, event: 0, exhibit: 0 } as Record<TypeKey, number>;
  for (const n of ns) typeCounts[n.type]++;

  return (
    <section id="network" className="hud-panel bg-[color:var(--hud-panel)] p-4">
      <header className="flex items-start justify-between gap-4 pb-3 border-b border-border">
        <div>
          <div className="hud-eyebrow">Section 03 · Evidence Network</div>
          <h2 className="mt-1 font-display text-2xl tracking-tight">People · events · exhibits</h2>
          <p className="mt-1 text-xs text-foreground/70 max-w-md">Force-directed graph of who connects to what. Drag, hover, click. Toggle types in the legend or filter by name.</p>
        </div>
        <div className="flex flex-col gap-1.5">
          {(["person", "event", "exhibit"] as TypeKey[]).map(t => {
            const c = t === "person" ? "var(--hud-cyan)" : t === "event" ? "var(--hud-violet)" : "var(--hud-green)";
            const on = visible[t];
            return (
              <button
                key={t}
                onClick={() => setVisible(v => ({ ...v, [t]: !v[t] }))}
                className={clsx(
                  "flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 border transition-opacity",
                  on ? "border-border" : "border-border/30 opacity-40",
                )}
                title={`Toggle ${t}s`}
              >
                <span className="inline-block size-2" style={{ background: c }} />
                {t} <span className="text-muted-foreground">· {typeCounts[t]}</span>
              </button>
            );
          })}
          <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 border border-border">
            <span className="inline-block size-2" style={{ background: "var(--hud-amber)" }} />
            Charging party
          </div>
        </div>
      </header>

      {/* Controls bar */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-3 text-muted-foreground" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Filter by name…"
            className="w-full bg-background border border-border pl-7 pr-2 py-1.5 font-mono text-[11px] focus:outline-none focus:border-[color:var(--hud-cyan)]"
          />
        </div>
        <button onClick={() => setZoom(z => Math.max(0.5, z - 0.15))} className="p-1.5 border border-border hover:border-[color:var(--hud-cyan)]" title="Zoom out"><ZoomOut className="size-3" /></button>
        <span className="font-mono text-[10px] text-muted-foreground w-10 text-center">{Math.round(zoom * 100)}%</span>
        <button onClick={() => setZoom(z => Math.min(2.5, z + 0.15))} className="p-1.5 border border-border hover:border-[color:var(--hud-cyan)]" title="Zoom in"><ZoomIn className="size-3" /></button>
        <button onClick={resetLayout} className="inline-flex items-center gap-1.5 p-1.5 border border-border hover:border-[color:var(--hud-cyan)] font-mono text-[10px] uppercase tracking-wider" title="Reset layout">
          <RotateCcw className="size-3" /> Reset
        </button>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_240px]">
        <div className="relative">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerLeave={onUp}
            className="w-full h-[520px] border border-border bg-[color:var(--hud-bg)]"
          >
            <defs>
              <radialGradient id="harbin-halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--hud-amber)" stopOpacity="0.55" />
                <stop offset="60%" stopColor="var(--hud-amber)" stopOpacity="0.12" />
                <stop offset="100%" stopColor="var(--hud-amber)" stopOpacity="0" />
              </radialGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            <g style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}>
              {/* edges */}
              {activeEdges.map((e, i) => {
                const a = ns.find(n => n.id === e.source);
                const b = ns.find(n => n.id === e.target);
                if (!a || !b) return null;
                const active = focusId && (e.source === focusId || e.target === focusId);
                const dim = focusId && !active;
                return (
                  <line
                    key={i}
                    x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                    stroke={active ? "var(--hud-cyan)" : "var(--hud-grid-strong)"}
                    strokeWidth={active ? 1.5 : 0.5}
                    opacity={dim ? 0.12 : active ? 0.95 : 0.55}
                    style={{ transition: "opacity 180ms, stroke-width 180ms" }}
                  />
                );
              })}

              {/* Harbin halo */}
              {visible.person && (() => {
                const h = ns.find(n => n.id === "harbin");
                if (!h) return null;
                return (
                  <>
                    <circle cx={h.x} cy={h.y} r={42} fill="url(#harbin-halo)">
                      <animate attributeName="r" values="36;48;36" dur="3.6s" repeatCount="indefinite" />
                    </circle>
                  </>
                );
              })()}

              {/* nodes */}
              {ns.filter(n => visibleNodeIds.has(n.id)).map(n => {
                const isSel = n.id === selected;
                const isHov = n.id === hover;
                const isFocus = isSel || isHov;
                const inNeighborhood = neighbors.has(n.id);
                const dim = focusId && !isFocus && !inNeighborhood;
                const matched = matchesQuery(n);
                const finalOpacity = !matched ? 0.12 : dim ? 0.28 : 1;
                const showLabel = matched && (isFocus || n.type === "person" || inNeighborhood);
                return (
                  <g
                    key={n.id}
                    transform={`translate(${n.x},${n.y})`}
                    onPointerDown={onDown(n.id)}
                    onPointerEnter={() => setHover(n.id)}
                    onPointerOut={() => setHover(h => (h === n.id ? null : h))}
                    className="cursor-pointer"
                    opacity={finalOpacity}
                    style={{ transition: "opacity 180ms" }}
                  >
                    <circle
                      r={n.r + (isFocus ? 4 : 0)}
                      fill={colorFor(n)}
                      stroke={isSel ? "var(--hud-cyan)" : "var(--hud-bg)"}
                      strokeWidth={isSel ? 2.5 : 1.5}
                      filter={isFocus || n.id === "harbin" ? "url(#glow)" : undefined}
                    />
                    {showLabel && (
                      <g pointerEvents="none">
                        <rect
                          x={-Math.min(70, n.label.length * 3) - 3}
                          y={n.r + 4}
                          width={Math.min(140, n.label.length * 6) + 6}
                          height={12}
                          rx={2}
                          fill="var(--hud-bg)"
                          fillOpacity={0.78}
                          stroke="var(--hud-grid)"
                          strokeWidth={0.5}
                        />
                        <text y={n.r + 13} textAnchor="middle" className="font-mono"
                          fontSize="9" fill="var(--foreground)">
                          {n.label.length > 22 ? n.label.slice(0, 20) + "…" : n.label}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Hover tooltip */}
          {hover && (() => {
            const h = ns.find(n => n.id === hover);
            if (!h) return null;
            const connCount = edges.filter(e => e.source === h.id || e.target === h.id).length;
            return (
              <div className="pointer-events-none absolute left-3 top-3 border border-border bg-[color:var(--hud-bg)]/95 px-2.5 py-1.5 backdrop-blur-sm max-w-[260px]">
                <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{h.type}</div>
                <div className="font-display text-sm leading-tight">{h.label}</div>
                <div className="mt-0.5 font-mono text-[9px] text-[color:var(--hud-cyan)]">{connCount} edges · click to pin</div>
              </div>
            );
          })()}

          {/* Empty state */}
          {visibleNodeIds.size === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground font-mono">
              All node types hidden — toggle one in the legend.
            </div>
          )}
        </div>

        {/* Inspector */}
        <aside className="border border-border bg-background/50 p-3 text-xs">
          {selectedNode ? (
            <NodeInspector node={selectedNode} edges={edges} nodes={ns} onSelect={setSelected} onHover={setHover} onOpenExhibit={open} />
          ) : (
            <div className="text-muted-foreground font-mono text-[10px] uppercase tracking-wider">Click a node…</div>
          )}
        </aside>
      </div>
    </section>
  );
}

function NodeInspector({ node, edges, nodes, onSelect, onHover, onOpenExhibit }: { node: GNode; edges: GEdge[]; nodes: GNode[]; onSelect: (id: string | null) => void; onHover: (id: string | null) => void; onOpenExhibit: (id: string) => void }) {
  const links = edges.filter(e => e.source === node.id || e.target === node.id);
  const others = links.map(e => nodes.find(n => n.id === (e.source === node.id ? e.target : e.source))).filter(Boolean) as GNode[];
  const byType: Record<TypeKey, GNode[]> = { person: [], event: [], exhibit: [] };
  for (const o of others) byType[o.type].push(o);
  return (
    <div className="space-y-2">
      <div className="hud-eyebrow">Node · {node.type}</div>
      <div className="font-display text-lg leading-tight">{node.label}</div>
      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{others.length} connections</div>
      <div className="max-h-72 overflow-auto space-y-2 pt-1">
        {(["person", "event", "exhibit"] as TypeKey[]).map(t => {
          if (!byType[t].length) return null;
          const c = t === "person" ? "var(--hud-cyan)" : t === "event" ? "var(--hud-violet)" : "var(--hud-green)";
          return (
            <div key={t}>
              <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mb-0.5">{t} · {byType[t].length}</div>
              {byType[t].map(o => (
                <button
                  key={o.id}
                  onClick={() => onSelect(o.id)}
                  onPointerEnter={() => onHover(o.id)}
                  onPointerLeave={() => onHover(null)}
                  className="w-full text-left text-[11px] truncate px-1.5 py-1 hover:bg-secondary/60 flex items-center gap-1.5"
                >
                  <span className="inline-block size-1.5" style={{ background: c }} />
                  <span className="truncate">{o.label}</span>
                </button>
              ))}
            </div>
          );
        })}
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
  const peopleCount: Record<string, number> = {};
  for (const e of events) for (const p of e.peopleIds) peopleCount[p] = (peopleCount[p] ?? 0) + 1;
  const topPeople = Object.entries(peopleCount).sort((a, b) => b[1] - a[1]).slice(0, 14).map(([id]) => id);
  const personLabel: Record<string, string> = { harbin: "Lashawnna Harbin" };
  for (const e of events) for (const p of e.peopleIds) if (!personLabel[p]) personLabel[p] = prettify(p);

  const keyCats = new Set(["protected-activity", "hr-complaint", "comparator", "deleted-evidence", "schedule-waitlist"]);
  const keyEvents = events.filter(e => keyCats.has(e.category)).slice(0, 18);

  const exhibitIds = new Set<string>();
  for (const e of keyEvents) for (const x of e.evidenceIds) exhibitIds.add(x);
  const keyExhibits = exhibits.filter(x => exhibitIds.has(x.exhibitNumber) || exhibitIds.has(x.id)).slice(0, 14);

  const W = 720, H = 520;
  const nodes: GNode[] = [];
  const rand = (seed: number) => { const x = Math.sin(seed) * 10000; return x - Math.floor(x); };
  let s = 0;
  for (const id of topPeople) nodes.push({ id, type: "person", label: personLabel[id], x: id === "harbin" ? W / 2 : rand(++s) * W, y: id === "harbin" ? H / 2 : rand(++s) * H, vx: 0, vy: 0, r: id === "harbin" ? 11 : 7 });
  for (const e of keyEvents) nodes.push({ id: e.id, type: "event", label: e.title, x: rand(++s) * W, y: rand(++s) * H, vx: 0, vy: 0, r: 4.5 });
  for (const x of keyExhibits) nodes.push({ id: x.id, type: "exhibit", label: x.exhibitNumber + " · " + x.fileName, x: rand(++s) * W, y: rand(++s) * H, vx: 0, vy: 0, r: 5.5 });

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
  const months = useMemo(() => {
    const set = new Set<string>();
    for (const e of events) set.add(e.sortKey.slice(0, 7));
    return Array.from(set).sort();
  }, []);
  const [idx, setIdx] = useState(months.length - 1);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const playRef = useRef<number | null>(null);
  const [hoverEvent, setHoverEvent] = useState<string | null>(null);
  const draggingRef = useRef(false);

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

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "INPUT" || (e.target as HTMLElement)?.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") { setIdx(i => Math.min(months.length - 1, i + 1)); setPlaying(false); }
      else if (e.key === "ArrowLeft") { setIdx(i => Math.max(0, i - 1)); setPlaying(false); }
      else if (e.key === " ") { e.preventDefault(); setPlaying(p => !p); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [months.length]);

  const activeMonth = months[idx];
  const visibleEvents = useMemo(() => events.filter(e => e.sortKey.slice(0, 7) <= activeMonth), [activeMonth]);

  const monthLabel = (m: string) => {
    const [y, mm] = m.split("-");
    return new Date(Number(y), Number(mm) - 1, 1).toLocaleString("en-US", { month: "short", year: "numeric" });
  };

  const cats = useMemo(() => Array.from(new Set(events.map(e => e.category))), []);
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
  const [hiddenCats, setHiddenCats] = useState<Set<string>>(new Set());
  const toggleCat = (c: string) =>
    setHiddenCats(prev => { const next = new Set(prev); next.has(c) ? next.delete(c) : next.add(c); return next; });

  const W = 1320, H = 280;
  const trackY = H - 40;
  const x = (m: string) => {
    const i = months.indexOf(m);
    return 110 + (i / Math.max(1, months.length - 1)) * (W - 150);
  };
  const laneY = (c: string) => 24 + (cats as string[]).indexOf(c) * 20;
  const playheadX = x(activeMonth);

  const catCounts: Record<string, number> = {};
  for (const e of events) catCounts[e.category] = (catCounts[e.category] ?? 0) + 1;

  // Year separators
  const years = useMemo(() => {
    const seen = new Set<string>();
    return months.filter(m => {
      const y = m.slice(0, 4);
      if (seen.has(y)) return false;
      seen.add(y); return true;
    });
  }, [months]);

  // Drag playhead on SVG
  const onSvgPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    draggingRef.current = true;
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    handleSvgScrub(e);
    setPlaying(false);
  };
  const onSvgPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!draggingRef.current) return;
    handleSvgScrub(e);
  };
  const onSvgPointerUp = () => { draggingRef.current = false; };
  const handleSvgScrub = (e: React.PointerEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const localX = ((e.clientX - rect.left) / rect.width) * W;
    const ratio = Math.max(0, Math.min(1, (localX - 110) / (W - 150)));
    const nextIdx = Math.round(ratio * (months.length - 1));
    setIdx(nextIdx);
  };

  const hoveredEvent = hoverEvent ? events.find(e => e.id === hoverEvent) : null;
  const newestRevealed = visibleEvents[visibleEvents.length - 1];

  return (
    <section id="scrubber" className="hud-panel bg-[color:var(--hud-panel)] p-4">
      <header className="flex items-start justify-between gap-4 pb-3 border-b border-border">
        <div>
          <div className="hud-eyebrow">Section 04 · Timeline</div>
          <h2 className="mt-1 font-display text-2xl tracking-tight">Scrub through {months.length} months of evidence</h2>
          <p className="mt-1 text-xs text-foreground/70 max-w-2xl">Drag the playhead, press play, or use ← → / space. Click a lane label to hide it. Hover any dot for details; click to jump to the timeline page.</p>
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

      <div className="mt-3 flex flex-wrap items-baseline gap-4">
        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Cursor</div>
        <div className="font-display text-3xl text-[color:var(--hud-cyan)] tabular-nums" style={{ minWidth: 180 }}>{monthLabel(activeMonth)}</div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {visibleEvents.length} / {events.length} events revealed
        </div>
        {newestRevealed && (
          <div className="ml-auto flex items-center gap-2 text-[11px]">
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Latest:</span>
            <Link to="/timeline" hash={`evt-${newestRevealed.id}`} className="inline-flex items-center gap-1 hover:text-[color:var(--hud-cyan)] truncate max-w-[420px]">
              {newestRevealed.title} <ArrowUpRight className="size-3 opacity-60 shrink-0" />
            </Link>
          </div>
        )}
      </div>

      <div className="mt-3 overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-[300px] min-w-[900px] border border-border bg-[color:var(--hud-bg)] select-none"
          onPointerDown={onSvgPointerDown}
          onPointerMove={onSvgPointerMove}
          onPointerUp={onSvgPointerUp}
          onPointerLeave={() => { draggingRef.current = false; setHoverEvent(null); }}
        >
          {/* year bands */}
          {years.map((m, i) => {
            const start = x(m);
            const nextYear = years[i + 1];
            const end = nextYear ? x(nextYear) : W - 40;
            return (
              <g key={m}>
                <rect x={start} y={10} width={end - start} height={trackY - 10}
                  fill={i % 2 === 0 ? "var(--hud-grid)" : "transparent"} opacity={0.08} />
                <text x={start + 3} y={20} fontSize="10" fill="var(--muted-foreground)" className="font-mono" pointerEvents="none">
                  {m.slice(0, 4)}
                </text>
              </g>
            );
          })}

          {/* category lanes (click to toggle) */}
          {cats.map(c => {
            const hidden = hiddenCats.has(c);
            const color = catColor[c] ?? "var(--hud-grid)";
            return (
              <g key={c} className="cursor-pointer" onPointerDown={(e) => { e.stopPropagation(); toggleCat(c); }}>
                <rect x={0} y={laneY(c) - 8} width={108} height={16} fill="transparent" />
                <circle cx={6} cy={laneY(c)} r={3} fill={color} opacity={hidden ? 0.25 : 1} />
                <text x={14} y={laneY(c) + 3} fontSize="9" fill={hidden ? "var(--muted-foreground)" : "var(--foreground)"} opacity={hidden ? 0.45 : 0.85} className="font-mono">
                  {(CATEGORY_LABELS[c] ?? c).toUpperCase().slice(0, 16)}
                </text>
                <text x={102} y={laneY(c) + 3} fontSize="8" fill="var(--muted-foreground)" textAnchor="end" className="font-mono">
                  {catCounts[c] ?? 0}
                </text>
                <line x1={110} x2={W - 40} y1={laneY(c)} y2={laneY(c)}
                  stroke="var(--hud-grid)" strokeDasharray="2 4" opacity={hidden ? 0.2 : 1} />
              </g>
            );
          })}

          {/* x axis */}
          <line x1={110} x2={W - 40} y1={trackY} y2={trackY} stroke="var(--hud-grid-strong)" />
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
            const isLatest = newestRevealed?.id === e.id;
            const hidden = hiddenCats.has(e.category);
            if (hidden) return null;
            const isHover = hoverEvent === e.id;
            return (
              <g key={e.id} transform={`translate(${x(m)},${laneY(e.category)})`} className="cursor-pointer">
                {isLatest && revealed && (
                  <circle r={3.5} fill="none" stroke={catColor[e.category]} strokeWidth={1}>
                    <animate attributeName="r" values="3.5;14;3.5" dur="1.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0;1" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle
                  r={isHover ? 5.5 : revealed ? 3.8 : 1.5}
                  fill={catColor[e.category]}
                  opacity={revealed ? 1 : 0.18}
                  stroke={isHover ? "var(--hud-cyan)" : "transparent"}
                  strokeWidth={isHover ? 1.5 : 0}
                  style={{ transition: "r 250ms, opacity 250ms" }}
                  onPointerEnter={(ev) => { ev.stopPropagation(); setHoverEvent(e.id); }}
                  onPointerLeave={() => setHoverEvent(h => (h === e.id ? null : h))}
                  onClick={(ev) => { ev.stopPropagation(); window.location.href = `/timeline#evt-${e.id}`; }}
                >
                  <title>{e.date} · {e.title}</title>
                </circle>
              </g>
            );
          })}

          {/* playhead */}
          <line x1={playheadX} x2={playheadX} y1={10} y2={trackY + 6} stroke="var(--hud-cyan)" strokeWidth={1.5}>
            <animate attributeName="opacity" values="1;0.55;1" dur="1.4s" repeatCount="indefinite" />
          </line>
          <polygon points={`${playheadX - 5},${trackY + 6} ${playheadX + 5},${trackY + 6} ${playheadX},${trackY + 14}`} fill="var(--hud-cyan)" />
          <circle cx={playheadX} cy={14} r={4} fill="var(--hud-cyan)" />

          {/* hover tooltip */}
          {hoveredEvent && (() => {
            const m = hoveredEvent.sortKey.slice(0, 7);
            const px = x(m);
            const py = laneY(hoveredEvent.category);
            const tx = Math.min(px + 10, W - 260);
            const ty = Math.max(20, py - 30);
            return (
              <g pointerEvents="none">
                <rect x={tx} y={ty} width={250} height={42} fill="var(--hud-bg)" stroke="var(--hud-grid-strong)" />
                <text x={tx + 6} y={ty + 14} fontSize="9" fill="var(--hud-cyan)" className="font-mono">
                  {hoveredEvent.date.toUpperCase()}
                </text>
                <text x={tx + 6} y={ty + 30} fontSize="10" fill="var(--foreground)">
                  {hoveredEvent.title.length > 42 ? hoveredEvent.title.slice(0, 40) + "…" : hoveredEvent.title}
                </text>
              </g>
            );
          })()}
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
          <Link
            key={e.id}
            to="/timeline"
            hash={`evt-${e.id}`}
            className="group border border-border bg-background/40 px-2 py-1.5 text-[11px] hover:border-[color:var(--hud-cyan)]"
          >
            <div className="flex items-center gap-1.5">
              <span className="inline-block size-1.5" style={{ background: catColor[e.category] ?? "var(--hud-cyan)" }} />
              <div className="font-mono text-[9px] uppercase tracking-wider text-[color:var(--hud-cyan)]">{e.date}</div>
              <ArrowUpRight className="ml-auto size-3 opacity-0 group-hover:opacity-70" />
            </div>
            <div className="text-foreground/90 leading-tight truncate mt-0.5" title={e.title}>{e.title}</div>
          </Link>
        ))}
      </footer>
    </section>
  );
}

