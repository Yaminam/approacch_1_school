"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MegaMenu from "@/components/MegaMenu";
import { navGroups, school } from "@/lib/content";

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-[var(--site-max)] transition-all duration-300 ${
        solid
          ? "bg-cream/90 backdrop-blur-md border-b border-sand soft-shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="hidden bg-pine text-paper lg:block">
        {/* Matches the bar below, so the tagline lines up with the logo and the
            utility links line up with the calls to action. */}
        <div className="flex w-full items-center justify-between px-4 py-1.5 sm:px-8 lg:px-10">
          <span className="text-[0.66rem] font-bold uppercase tracking-[0.3em] text-brass-soft">
            Exceptional by Nature
          </span>
          <div className="flex items-center gap-7 text-[0.72rem] font-semibold">
            <a href={`tel:${school.phoneRaw}`} className="text-paper/70 transition-colors hover:text-brass-soft">
              {school.phone}
            </a>
            <a href={school.instagram} target="_blank" rel="noreferrer" className="text-paper/70 transition-colors hover:text-brass-soft">
              Instagram
            </a>
            <Link href="/admissions/apply" className="text-brass-soft transition-colors hover:text-paper">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Full-bleed bar: the logo sits hard left, the two calls to action hard
          right, and the navigation is centred in the space between them. A
          max-w-7xl container held all three in the middle of the viewport,
          which is what made the bar look clustered on a wide screen. */}
      {/* Flex below lg, grid from lg. The three-column grid uses auto tracks
          that cannot shrink below their content, which forced the page wider
          than a 320px screen and gave the whole site a horizontal scroll. */}
      <div className="flex w-full items-center justify-between gap-3 px-4 py-3 sm:px-8 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-6 lg:px-10">
        <Link href="/" className="flex items-center" aria-label="Dalhousie Public School home">
          <Image
            src="/images/logo.svg"
            alt="Dalhousie Public School"
            width={200}
            height={42}
            unoptimized
            priority
            className={`h-7 w-auto shrink-0 sm:h-9 ${onDark ? "[filter:brightness(0)_invert(1)]" : ""}`}
          />
        </Link>

        {/* Desktop bar uses the short label so no item ever wraps to two lines;
            the dropdown and the mobile sheet keep the full section title. */}
        <nav className="hidden items-center justify-center gap-5 lg:flex xl:gap-8">
          {navGroups.map((g) => (
            <div key={g.title} className="group relative py-3">
              <button
                className={`flex items-center gap-1 sm:whitespace-nowrap text-sm font-semibold transition-colors ${
                  onDark
                    ? "text-paper/85 hover:text-brass-soft"
                    : "text-pine/80 hover:text-clay"
                }`}
              >
                {g.short}
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="opacity-70">
                  <path d="M2 3.5 L5 6.5 L8 3.5" />
                </svg>
              </button>
              <div className="invisible absolute left-1/2 top-full w-[17rem] -translate-x-1/2 translate-y-1 rounded-2xl border border-sand bg-paper p-2 opacity-0 soft-shadow transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <p className="px-3.5 pb-1.5 pt-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-brass">
                  {g.title}
                </p>
                {g.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block rounded-xl px-3.5 py-2 text-sm font-semibold text-pine/80 transition-colors hover:bg-blush hover:text-clay"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link
            href="/campuses/find-your-campus"
            className={`hidden sm:whitespace-nowrap rounded-full border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors xl:inline-block ${
              onDark
                ? "border-paper/40 text-paper hover:border-brass-soft hover:text-brass-soft"
                : "border-pine/25 text-pine hover:border-clay hover:text-clay"
            }`}
          >
            Find your campus
          </Link>
          <Link
            href="/admissions/book-a-visit"
            className="hidden min-h-10 items-center sm:whitespace-nowrap rounded-full bg-brass-soft px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-pine-800 transition-transform hover:-translate-y-0.5 sm:inline-flex sm:px-5 sm:text-[0.72rem]"
          >
            Book a visit
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
              onDark ? "border-paper/30 text-paper" : "border-pine/20 text-pine"
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

      {/* The mobile menu opens the full-screen mega menu, which collapses each
          section into an accordion. The previous sheet printed every group with
          every link expanded, around forty rows deep, which is what made it
          feel oversized and awkward to scan on a phone. */}
      {open && <MegaMenu onClose={() => setOpen(false)} onNavigate={() => setOpen(false)} />}
    </header>
  );
}
