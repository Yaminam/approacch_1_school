"use client";

import { useEffect, useState } from "react";
import BookVisitButton from "./BookVisitButton";

export default function StickyVisit() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 1200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {/* Deliberately quiet: the page already carries its own calls to
          action, so this is a small reminder rather than a second campaign. */}
      <BookVisitButton className="flex items-center gap-2 rounded-full border border-brass/40 bg-cream/95 px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-clay backdrop-blur transition-colors duration-300 hover:border-clay hover:bg-blush/70">
        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <rect x="2.5" y="3.5" width="13" height="12" rx="2" />
          <line x1="2.5" y1="7" x2="15.5" y2="7" />
          <line x1="6" y1="1.5" x2="6" y2="4.5" />
          <line x1="12" y1="1.5" x2="12" y2="4.5" />
        </svg>
        Book a visit
      </BookVisitButton>
    </div>
  );
}
