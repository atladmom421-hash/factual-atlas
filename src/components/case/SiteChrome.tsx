import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun, Printer, Search } from "lucide-react";
import { clsx } from "clsx";
import { openGlobalSearch } from "./GlobalSearch";

const links = [
  { to: "/", label: "Overview" },
  { to: "/case-map", label: "Case Map" },
  { to: "/timeline", label: "Timeline" },
  { to: "/people", label: "People" },
  { to: "/comparators", label: "Comparators" },
  { to: "/schedule-data", label: "Schedule Data" },
  { to: "/movement-map", label: "Movement" },
  { to: "/evidence", label: "Evidence" },
  { to: "/preservation", label: "Preservation" },
  { to: "/greg-anita-thread", label: "Greg/Anita Thread" },
  { to: "/hardship-thread", label: "Hardship Thread" },
  { to: "/story", label: "Story Mode" },
  { to: "/investigator", label: "Investigator Brief" },
] as const;

export function SiteHeader() {
  const [dark, setDark] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="group flex items-center gap-3">
          <div className="size-8 rounded-sm bg-navy text-navy-foreground flex items-center justify-center font-display text-lg leading-none">
            <span className="-mt-0.5">H</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base tracking-tight">Harbin Case File</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Interactive Evidence Map</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-[13px]">
          {links.map(l => {
            const active = l.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(l.to);
            return (
              <Link key={l.to} to={l.to} className={clsx(
                "rounded-sm px-3 py-1.5 transition-colors",
                active ? "text-accent" : "text-foreground/70 hover:text-foreground",
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
            className="hidden sm:flex items-center gap-2 rounded-sm border border-border bg-secondary/60 px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <Search className="size-3.5" />
            <span>Search</span>
            <kbd className="ml-1 rounded-sm border border-border bg-background px-1 py-0.5 text-[10px] font-mono">⌘K</kbd>
          </button>
          <button
            onClick={openGlobalSearch}
            aria-label="Search case file"
            className="sm:hidden rounded-sm p-2 text-foreground/60 hover:text-foreground hover:bg-secondary"
          >
            <Search className="size-4" />
          </button>
          <button onClick={() => window.print()} aria-label="Print" className="rounded-sm p-2 text-foreground/60 hover:text-foreground hover:bg-secondary">
            <Printer className="size-4" />
          </button>
          <button onClick={() => setDark(d => !d)} aria-label="Toggle dark mode" className="rounded-sm p-2 text-foreground/60 hover:text-foreground hover:bg-secondary">
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>
      </div>

      <nav className="lg:hidden flex overflow-x-auto gap-1 px-4 pb-2 text-[12px] no-scrollbar">
        {links.map(l => (
          <Link key={l.to} to={l.to} className="whitespace-nowrap rounded-sm px-2.5 py-1 text-foreground/70 hover:text-foreground hover:bg-secondary">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="no-print mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-10 text-xs text-muted-foreground">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="font-display text-sm text-foreground">Harbin Case File — Interactive Evidence Map</div>
          <div>Prepared as a documentary-style presentation of reported and documented facts. All characterizations are framed as alleged, reported, or supported by attached evidence.</div>
        </div>
      </div>
    </footer>
  );
}
