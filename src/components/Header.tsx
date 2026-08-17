"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MegaMenu from "@/components/MegaMenu";
import { navGroups, school } from "@/lib/content";

function Instagram({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.9" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !isHome;
  const onDark = !solid;

  /* The section a page belongs to, so the navigation can carry a gold rule
     under the item the reader is currently inside. */
  const activeGroup = navGroups.find((g) =>
    g.links.some((l) => l.href !== "/" && pathname.startsWith(l.href)),
  )?.title;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-[var(--site-max)] transition-all duration-300 ${
        solid ? "border-b border-sand bg-cream/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-3 px-4 py-2 sm:px-8 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-6 lg:px-10">
        {/* Crest lockup: the mark, then the tagline in gold beneath it. */}
        <Link href="/" className="flex flex-col justify-center" aria-label="Dalhousie Public School home">
          <Image
            src="/images/logo.svg"
            alt="Dalhousie Public School"
            width={200}
            height={42}
            unoptimized
            priority
            className={`h-6 w-auto shrink-0 sm:h-7 ${onDark ? "[filter:brightness(0)_invert(1)]" : ""}`}
          />
          <span
            className={`mt-0.5 hidden text-[0.48rem] font-bold uppercase tracking-[0.28em] sm:block ${
              onDark ? "text-brass-soft/90" : "text-brass"
            }`}
          >
            Exceptional by Nature
          </span>
        </Link>

        {/* Desktop bar uses the short label so no item ever wraps to two lines;
            the dropdown and the mobile sheet keep the full section title. */}
        <nav className="hidden items-center justify-center gap-5 lg:flex xl:gap-7">
          {navGroups.map((g) => {
            const active = g.title === activeGroup;
            return (
              <div key={g.title} className="group relative py-2.5">
                <button
                  className={`flex items-center gap-1 sm:whitespace-nowrap border-b-2 pb-1 text-[0.82rem] font-semibold transition-colors ${
                    active ? "border-brass" : "border-transparent"
                  } ${
                    onDark
                      ? "text-paper/85 hover:text-brass-soft"
                      : active
                        ? "text-clay"
                        : "text-pine/80 hover:text-clay"
                  }`}
                >
                  {g.short}
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="opacity-70">
                    <path d="M2 3.5 L5 6.5 L8 3.5" />
                  </svg>
                </button>
                <div className="invisible absolute left-1/2 top-full w-[17rem] -translate-x-1/2 translate-y-1 rounded-[0.65rem] border border-sand bg-paper p-2 opacity-0 soft-shadow transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="px-3.5 pb-1.5 pt-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-brass">
                    {g.title}
                  </p>
                  {g.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block rounded-[0.4rem] px-3.5 py-2 text-sm font-semibold text-pine/80 transition-colors hover:bg-blush hover:text-clay"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        {/* Right cluster: contact line above, the two calls to action below. */}
        <div className="flex items-center justify-end gap-3 lg:flex-col lg:items-end lg:gap-1">
          <div
            className={`hidden items-center gap-3.5 text-[0.68rem] font-semibold lg:flex ${
              onDark ? "text-paper/75" : "text-mist"
            }`}
          >
            <a href={`tel:${school.phoneRaw}`} className="transition-colors hover:text-clay">
              {school.phone}
            </a>
            <a
              href={school.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-clay"
            >
              <Instagram />
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/campuses/find-your-campus"
              className={`hidden sm:whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] transition-colors xl:inline-block ${
                onDark
                  ? "border-paper/40 text-paper hover:border-brass-soft hover:text-brass-soft"
                  : "border-brass/50 text-clay hover:border-clay hover:bg-blush/50"
              }`}
            >
              Find your campus
            </Link>
            <Link
              href="/admissions/book-a-visit"
              className="hidden items-center sm:whitespace-nowrap rounded-full bg-brass-soft px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-pine-800 transition-transform hover:-translate-y-0.5 sm:inline-flex sm:px-5"
            >
              Book a visit
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
                onDark ? "border-paper/30 text-paper" : "border-brass/40 text-clay"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {open ? (
                  <>
                    <line x1="4" y1="4" x2="14" y2="14" />
                    <line x1="14" y1="4" x2="4" y2="14" />
                  </>
                ) : (
                  <>
                    <line x1="2.5" y1="5" x2="15.5" y2="5" />
                    <line x1="2.5" y1="9" x2="15.5" y2="9" />
                    <line x1="2.5" y1="13" x2="15.5" y2="13" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && <MegaMenu onClose={() => setOpen(false)} onNavigate={() => setOpen(false)} />}
    </header>
  );
}
