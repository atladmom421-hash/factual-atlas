import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun, Printer, Search } from "lucide-react";
import { clsx } from "clsx";
import { openGlobalSearch } from "./GlobalSearch";
import { events, exhibits } from "@/data";

const links = [
  { to: "/", label: "Overview" },
  { to: "/command", label: "Dashboard" },
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
  const [t, setT] = useState<string>("");
  useEffect(() => {
    const tick = () => setT(new Date().toISOString().slice(11, 19) + "Z");
    tick();
    const id = setInterval(tick, 1000);
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
    <header className="no-print sticky top-0 z-40 border-b-2 border-border bg-background/90 backdrop-blur">
      {/* Case file status strip */}
      <div className="border-b-2 border-border/70 bg-[color-mix(in_oklab,var(--hud-panel)_60%,transparent)]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-1.5 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="font-medium text-foreground/85">Case file · Harbin v. Employer</span>
            <span className="hidden sm:inline">EEOC charge support · evidentiary record</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span><span className="text-foreground/85 font-medium">{events.length}</span> events</span>
            <span><span className="text-foreground/85 font-medium">{exhibits.length}</span> exhibits</span>
            <span className="font-mono text-foreground/70" suppressHydrationWarning>{now || "--:--:--Z"}</span>
          </div>
          <div className="text-foreground/70">
            Confidential · Attorney work product
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="group flex items-center gap-3">
          <div className="size-9 rounded-md border-2 border-border bg-[color:var(--hud-panel)] text-foreground flex items-center justify-center font-display text-lg leading-none">
            <span className="-mt-0.5">H</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base tracking-tight">Harbin Case File</div>
            <div className="text-[11px] text-muted-foreground">Evidence Record</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0 text-[12px]">
          {links.map(l => {
            const active = l.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(l.to);
            return (
              <Link key={l.to} to={l.to} className={clsx(
                "px-3 py-1.5 border-b-2 transition-colors font-medium",
                active
                  ? "text-foreground border-foreground"
                  : "text-foreground/60 border-transparent hover:text-foreground hover:border-border",
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
            className="hidden sm:flex items-center gap-2 rounded-md border-2 border-border bg-secondary/40 px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <Search className="size-3.5" />
            <span className="text-[11px]">Search</span>
            <kbd className="ml-1 rounded border border-border bg-background px-1 py-0.5 text-[10px] font-mono">⌘K</kbd>
          </button>
          <button onClick={openGlobalSearch} aria-label="Search" className="sm:hidden p-2 text-foreground/60 hover:text-foreground hover:bg-secondary rounded-md">
            <Search className="size-4" />
          </button>
          <button onClick={() => window.print()} aria-label="Print" className="p-2 text-foreground/60 hover:text-foreground hover:bg-secondary rounded-md">
            <Printer className="size-4" />
          </button>
          <button onClick={() => setLight(d => !d)} aria-label="Toggle theme" className="p-2 text-foreground/60 hover:text-foreground hover:bg-secondary rounded-md">
            {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
        </div>
      </div>

      <nav className="lg:hidden flex overflow-x-auto gap-0 px-4 pb-2 text-[12px] no-scrollbar">
        {links.map(l => {
          const active = l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
          return (
            <Link key={l.to} to={l.to} className={clsx(
              "whitespace-nowrap px-3 py-1 border-b-2 font-medium",
              active ? "text-foreground border-foreground" : "text-foreground/60 border-transparent",
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
    <footer className="no-print mt-24 border-t-2 border-border bg-[color:var(--hud-panel)]/40">
      <div className="mx-auto max-w-[1400px] px-5 py-8 text-[12px] text-muted-foreground">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-foreground/85 font-medium">Harbin Case File · Evidence Record</span>
          </div>
          <div className="text-[11px]">
            Documentary presentation of reported and documented facts. All characterizations framed as alleged, reported, or supported by attached evidence.
          </div>
        </div>
      </div>
    </footer>
  );
}
