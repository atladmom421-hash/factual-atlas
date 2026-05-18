import { createContext, useContext, useState, type ReactNode } from "react";
import { exhibits } from "@/data";
import type { Exhibit } from "@/data/types";
import { ExhibitModal } from "./ExhibitModal";

type Ctx = { open: (id: string, page?: number) => void };
const ExhibitContext = createContext<Ctx | null>(null);

export function ExhibitProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<Exhibit | null>(null);
  const [page, setPage] = useState<number | undefined>(undefined);
  return (
    <ExhibitContext.Provider value={{ open: (id, p) => {
      const ex = exhibits.find(e => e.id === id);
      if (ex) { setCurrent(ex); setPage(p); }
    }}}>
      {children}
      <ExhibitModal exhibit={current} page={page} onClose={() => { setCurrent(null); setPage(undefined); }} />
    </ExhibitContext.Provider>
  );
}

export function useExhibit() {
  const ctx = useContext(ExhibitContext);
  if (!ctx) throw new Error("useExhibit must be inside ExhibitProvider");
  return ctx;
}
