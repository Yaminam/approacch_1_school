"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Full-screen branded splash shown on every load / refresh. It is rendered in
// the initial HTML (so it covers the page instantly), then fades out once the
// page has finished loading, with a short minimum on-screen time.
export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // This effect only runs after hydration (past DOMContentLoaded), so the
    // page is already interactive. Reveal after a short, predictable beat
    // rather than waiting on window.load (which blocks on the large hero image).
    const t = window.setTimeout(() => setHidden(true), 1100);
    return () => window.clearTimeout(t);
  }, []);

  // unmount after the fade-out completes
  useEffect(() => {
    if (!hidden) return;
    const t = window.setTimeout(() => setRemoved(true), 650);
    return () => window.clearTimeout(t);
  }, [hidden]);

  if (removed) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pine-800 transition-opacity duration-500 ease-out ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="splash-logo flex flex-col items-center">
        <Image
          src="/images/logo.svg"
          alt="Dalhousie Public School"
          width={280}
          height={60}
          priority
          unoptimized
          className="h-14 w-auto [filter:brightness(0)_invert(1)]"
        />
        <span className="mt-6 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-brass-soft">
          Exceptional by Nature
        </span>

        {/* indeterminate loading bar */}
        <div className="mt-8 h-px w-40 overflow-hidden bg-paper/15">
          <div className="splash-bar h-full w-1/4 rounded-full bg-brass-soft" />
        </div>
      </div>
    </div>
  );
}
