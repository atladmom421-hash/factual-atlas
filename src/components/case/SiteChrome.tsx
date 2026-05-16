import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun, Printer, Search, Radio, Activity } from "lucide-react";
import { clsx } from "clsx";
import { openGlobalSearch } from "./GlobalSearch";
import { events, exhibits } from "@/data";

const links = [
  { to: "/", label: "Overview" },
  { to: "/command", label: "Command" },
  { to: "/tour", label: "5-min Tour" },
  { to: "/case-map", label: "Case Map" },
  { to: "/timeline", label: "Timeline" },
  { to: "/people", label: "People" },
  { to: "/comparators", label: "Comparators" },
  { to: "/schedule-data", label: "Schedule" },
  { to: "/movement-map", label: "Movement" },
  { to: "/evidence", label: "Evidence" },
  { to: "/preservation", label: "Preservation" },
  { to: "/greg-anita-thread", label: "Greg/Anita" },
  { to: "/hardship-thread", label: "Hardship" },
  { to: "/story", label: "Story Mode" },
  { to: "/investigator", label: "Brief" },
] as const;

function useNowUTC() {
  const [t, setT] = useState<string>(() => new Date().toISOString().slice(11, 19) + "Z");
  useEffect(() => {
    const id = setInterval(() => setT(new Date().toISOString().slice(11, 19) + "Z"), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function SiteHeader() {
  const [light, setLight] = useState(false);
  const { location } = useRouterState();
  const now = useNowUTC();

  useEffect(() => {
    const root = document.documentElement;
    if (light) root.classList.add("light");
    else root.classList.remove("light");
  }, [light]);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      {/* HUD status strip */}
      <div className="border-b border-border/70 bg-[color-mix(in_oklab,var(--hud-panel)_60%,transparent)]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[color:var(--hud-cyan)]">
              <span className="hud-pulse inline-block size-1.5 rounded-full bg-[color:var(--hud-cyan)]" />
              SECURE · CASE-HARBIN
            </span>
            <span className="hidden sm:inline">Channel · Evidence Map</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span><span className="text-foreground/85">{events.length}</span> events</span>
            <span><span className="text-foreground/85">{exhibits.length}</span> exhibits</span>
            <span className="inline-flex items-center gap-1.5"><Activity className="size-3 text-[color:var(--hud-green)]" /> Live</span>
            <span className="text-foreground/85">{now}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[color:var(--hud-amber)]">
            <Radio className="size-3" />
            CLEARANCE · COUNSEL EYES
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="group flex items-center gap-3">
          <div className="size-9 border border-[color:var(--hud-cyan)]/60 bg-[color:var(--hud-panel)] text-[color:var(--hud-cyan)] flex items-center justify-center font-display text-lg leading-none">
            <span className="-mt-0.5">H</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base tracking-tight">Harbin Case File</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[color:var(--hud-cyan)]">Intelligence Console</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0 text-[12px] font-mono">
          {links.map(l => {
            const active = l.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(l.to);
            return (
              <Link key={l.to} to={l.to} className={clsx(
                "uppercase tracking-wider px-2.5 py-1.5 border-b-2 transition-colors",
                active
                  ? "text-[color:var(--hud-cyan)] border-[color:var(--hud-cyan)]"
                  : "text-foreground/65 border-transparent hover:text-foreground hover:border-border",
              )}>
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={openGlobalSearch}
            aria-label="Search case file"
            className="hidden sm:flex items-center gap-2 border border-border bg-secondary/40 px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <Search className="size-3.5" />
            <span className="font-mono uppercase tracking-wider text-[10px]">Search</span>
            <kbd className="ml-1 border border-border bg-background px-1 py-0.5 text-[9px] font-mono">⌘K</kbd>
          </button>
          <button onClick={openGlobalSearch} aria-label="Search" className="sm:hidden p-2 text-foreground/60 hover:text-foreground hover:bg-secondary">
            <Search className="size-4" />
          </button>
          <button onClick={() => window.print()} aria-label="Print" className="p-2 text-foreground/60 hover:text-foreground hover:bg-secondary">
            <Printer className="size-4" />
          </button>
          <button onClick={() => setLight(d => !d)} aria-label="Toggle theme" className="p-2 text-foreground/60 hover:text-foreground hover:bg-secondary">
            {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
        </div>
      </div>

      <nav className="lg:hidden flex overflow-x-auto gap-0 px-4 pb-2 text-[11px] font-mono no-scrollbar">
        {links.map(l => {
          const active = l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
          return (
            <Link key={l.to} to={l.to} className={clsx(
              "whitespace-nowrap uppercase tracking-wider px-2.5 py-1 border-b-2",
              active ? "text-[color:var(--hud-cyan)] border-[color:var(--hud-cyan)]" : "text-foreground/65 border-transparent",
            )}>
              {l.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="no-print mt-24 border-t border-border bg-[color:var(--hud-panel)]/40">
      <div className="mx-auto max-w-[1400px] px-5 py-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[color:var(--hud-cyan)] hud-pulse" />
            <span className="text-foreground/85">Harbin Case File · Intelligence Console v1</span>
          </div>
          <div className="normal-case tracking-normal font-sans text-[11px]">
            Documentary presentation of reported and documented facts. All characterizations framed as alleged, reported, or supported by attached evidence.
          </div>
        </div>
      </div>
    </footer>
  );
}
