import { createContext, useContext, useState, type ReactNode } from "react";
import { exhibits } from "@/data";
import type { Exhibit } from "@/data/types";
import { ExhibitModal } from "./ExhibitModal";

type Ctx = { open: (id: string) => void };
const ExhibitContext = createContext<Ctx | null>(null);

export function ExhibitProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<Exhibit | null>(null);
  return (
    <ExhibitContext.Provider value={{ open: (id) => {
      const ex = exhibits.find(e => e.id === id);
      if (ex) setCurrent(ex);
    }}}>
      {children}
      <ExhibitModal exhibit={current} onClose={() => setCurrent(null)} />
    </ExhibitContext.Provider>
  );
}

export function useExhibit() {
  const ctx = useContext(ExhibitContext);
  if (!ctx) throw new Error("useExhibit must be inside ExhibitProvider");
  return ctx;
}
