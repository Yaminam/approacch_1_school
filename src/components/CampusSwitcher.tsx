"use client";

import { useRouter } from "next/navigation";
import { useCampus, campusMeta, type CampusId } from "./campus";

export default function CampusSwitcher() {
  const { campus, setCampus } = useCampus();
  const router = useRouter();

  const select = (c: CampusId) => {
    setCampus(c);
    router.push(campusMeta[c].href);
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-paper/25 p-1">
      <span className="pl-2 pr-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-paper/50">
        Campus
      </span>
      {(Object.keys(campusMeta) as CampusId[]).map((c) => (
        <button
          key={c}
          onClick={() => select(c)}
          className={`rounded-full px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.12em] transition-colors ${
            campus === c ? "bg-brass-soft text-pine-800" : "text-paper/70 hover:text-paper"
          }`}
        >
          {campusMeta[c].short}
        </button>
      ))}
    </div>
  );
}
