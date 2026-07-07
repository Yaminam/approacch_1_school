"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navGroups, school } from "@/lib/content";

const USEFUL = [
  { label: "Apply Now", href: "/apply" },
  { label: "Admissions", href: "/admissions" },
  { label: "Visit Us", href: "/visit-us" },
  { label: "Prospectus", href: "/prospectus" },
  { label: "FAQs", href: "/faqs" },
];

export default function MegaMenu({
  onClose,
  onNavigate,
}: {
  onClose: () => void;
  onNavigate?: () => void;
}) {
  const [active, setActive] = useState(0);
  // Every menu link click summons the Dalhousie loading screen, then navigates.
  const go = () => {
    window.dispatchEvent(new Event("dps:loading"));
    onNavigate?.();
  };

  return (
    <div className="fixed inset-0 z-[95] overflow-y-auto bg-cream text-pine">
      {/* Logo, pinned to the top-left corner */}
      <Link href="/" onClick={go} aria-label="Dalhousie Public School home" className="absolute left-6 top-7 z-10 sm:left-10 sm:top-9">
        <Image
          src="/images/logo.svg"
          alt="Dalhousie Public School"
          width={200}
          height={42}
          unoptimized
          className="h-9 w-auto sm:h-10"
        />
      </Link>

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute right-6 top-6 z-10 grid h-14 w-14 place-items-center rounded-full bg-clay text-paper transition-colors hover:bg-pine-800 sm:right-10 sm:top-8"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <line x1="5" y1="5" x2="15" y2="15" />
          <line x1="15" y1="5" x2="5" y2="15" />
        </svg>
      </button>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 sm:px-10 sm:py-14">
        <div className="grid flex-1 gap-10 lg:grid-cols-[240px_1fr_1fr] lg:gap-14">
          {/* Left: useful links (logo is pinned to the corner above) */}
          <div className="flex flex-col">
            <div className="mt-16 lg:mt-auto">
              <p className="eyebrow text-clay">Useful links</p>
              <ul className="mt-4 space-y-2.5">
                {USEFUL.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={go}
                      className="text-lg font-semibold text-pine/80 transition-colors hover:text-clay"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center: primary categories */}
          <nav className="flex flex-col">
            {navGroups.map((g, i) => (
              <button
                key={g.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`flex items-center justify-between border-b border-pine/15 py-4 text-left font-display text-3xl transition-colors sm:text-4xl ${
                  active === i ? "text-clay" : "text-pine hover:text-clay"
                }`}
              >
                {g.title}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                  <path d="M7 4l6 6-6 6" />
                </svg>
              </button>
            ))}
          </nav>

          {/* Right: sub-links of the active category */}
          <div className="lg:pt-3">
            <div key={active} className="pop flex flex-col items-start gap-5">
              {navGroups[active].links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={go}
                  className="border-b-2 border-transparent text-xl font-semibold text-pine/85 transition-colors hover:border-clay hover:text-clay sm:text-2xl"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col gap-4 border-t border-pine/15 pt-6 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-6">
            <a href={school.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-clay">
              Instagram
            </a>
            <a href={school.facebook} target="_blank" rel="noreferrer" className="transition-colors hover:text-clay">
              Facebook
            </a>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/policies" onClick={go} className="transition-colors hover:text-clay">
              Policies
            </Link>
            <Link href="/faqs" onClick={go} className="transition-colors hover:text-clay">
              FAQs
            </Link>
            <Link href="/visit-us" onClick={go} className="transition-colors hover:text-clay">
              Visit Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
