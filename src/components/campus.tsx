"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type CampusId = "dalhousie" | "chandigarh";

export const campusMeta: Record<
  CampusId,
  { short: string; full: string; href: string; email: string; phone: string; phoneRaw: string }
> = {
  dalhousie: {
    short: "Dalhousie",
    full: "Dalhousie Campus",
    href: "/campuses/dalhousie",
    email: "info@dpsdalhousie.com",
    phone: "+91 94183 81111",
    phoneRaw: "919418381111",
  },
  chandigarh: {
    short: "New Chandigarh",
    full: "New Chandigarh Campus",
    href: "/campuses/new-chandigarh",
    email: "infochd@dpsdalhousie.com",
    phone: "011 6909 8645",
    phoneRaw: "01169098645",
  },
};

const CampusCtx = createContext<{ campus: CampusId; setCampus: (c: CampusId) => void }>({
  campus: "dalhousie",
  setCampus: () => {},
});

export function CampusProvider({ children }: { children: React.ReactNode }) {
  const [campus, setState] = useState<CampusId>("dalhousie");

  useEffect(() => {
    const s = localStorage.getItem("dps-campus");
    if (s === "dalhousie" || s === "chandigarh") setState(s);
  }, []);

  const setCampus = (c: CampusId) => {
    setState(c);
    try {
      localStorage.setItem("dps-campus", c);
    } catch {}
  };

  return <CampusCtx.Provider value={{ campus, setCampus }}>{children}</CampusCtx.Provider>;
}

export const useCampus = () => useContext(CampusCtx);
