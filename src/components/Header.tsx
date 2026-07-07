"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navGroups, whatsappHref, school } from "@/lib/content";

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-cream/90 backdrop-blur-md border-b border-sand soft-shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="hidden bg-pine text-paper lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-1.5">
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
            <Link href="/apply" className="text-brass-soft transition-colors hover:text-paper">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="Dalhousie Public School home">
          <Image
            src="/images/logo.svg"
            alt="Dalhousie Public School"
            width={200}
            height={42}
            unoptimized
            priority
            className={`h-9 w-auto ${onDark ? "[filter:brightness(0)_invert(1)]" : ""}`}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navGroups.map((g) => (
            <div key={g.title} className="group relative py-3">
              <button
                className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                  onDark
                    ? "text-paper/85 hover:text-brass-soft"
                    : "text-pine/80 hover:text-clay"
                }`}
              >
                {g.title}
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="opacity-70">
                  <path d="M2 3.5 L5 6.5 L8 3.5" />
                </svg>
              </button>
              <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-1 rounded-2xl border border-sand bg-paper p-2 opacity-0 soft-shadow transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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

        <div className="flex items-center gap-3">
          <Link
            href="/#chooser"
            className={`hidden rounded-full border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors sm:inline-block ${
              onDark
                ? "border-paper/40 text-paper hover:border-brass-soft hover:text-brass-soft"
                : "border-pine/25 text-pine hover:border-clay hover:text-clay"
            }`}
          >
            Find your campus
          </Link>
          <a
            href={whatsappHref(
              `Hi! I'd like to know more about admission at ${school.name}.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brass-soft px-5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-pine-800 transition-transform hover:-translate-y-0.5"
          >
            Enquire
          </a>
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

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-sand bg-cream px-5 py-4 lg:hidden">
          {navGroups.map((g) => (
            <div key={g.title} className="py-2">
              <div className="eyebrow px-3 text-clay">{g.title}</div>
              <nav className="mt-1 flex flex-col">
                {g.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 font-semibold text-pine hover:bg-blush"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
