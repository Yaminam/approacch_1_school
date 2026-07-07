"use client";

import { useEffect, useState } from "react";
import { whatsappHref, school } from "@/lib/content";

export default function StickyVisit() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappHref(`Hi! I would like to book a visit to ${school.name}.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Book a visit"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-brass-soft px-5 py-3.5 font-bold text-pine-800 soft-shadow transition-all duration-300 hover:-translate-y-0.5 sm:bottom-7 sm:right-7 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <rect x="2.5" y="3.5" width="13" height="12" rx="2" />
        <line x1="2.5" y1="7" x2="15.5" y2="7" />
        <line x1="6" y1="1.5" x2="6" y2="4.5" />
        <line x1="12" y1="1.5" x2="12" y2="4.5" />
      </svg>
      Book a visit
    </a>
  );
}
