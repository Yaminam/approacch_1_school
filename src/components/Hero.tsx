"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { whatsappHref, school } from "@/lib/content";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = parallaxRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate3d(${x * 24}px, ${y * 24}px, 0)`;
  };
  const onLeave = () => {
    if (parallaxRef.current) parallaxRef.current.style.transform = "translate3d(0,0,0)";
  };

  // Scroll-driven "everything goes red except the girl" effect.
  // The base photo is tinted red as you scroll; the cut-out girl sits on
  // top of the tint, so only she keeps her natural colour.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      // 0 at the top → 1 by the time you've scrolled ~70% of the viewport.
      const progress = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.7)));
      section.style.setProperty("--red", progress.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ "--red": 0 } as React.CSSProperties}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-pine-800"
    >
      {/* Background image, with spatial cursor parallax + Ken Burns */}
      <div
        ref={parallaxRef}
        className="hero-reveal absolute inset-0 transition-transform duration-500 ease-out will-change-transform"
      >
        <div className="kenburns absolute inset-[-5%] [isolation:isolate]">
          <Image
            src="/images/hero-student.jpg"
            alt="A Dalhousie student in the Himalayan alpine"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_22%]"
          />
          {/* Red tint over the whole photo — grows with scroll. mix-blend
              "color" keeps the scene's luminance but forces its hue to red. */}
          <div
            className="pointer-events-none absolute inset-0 bg-[#e11d2a] [mix-blend-mode:color]"
            style={{ opacity: "var(--red)" }}
          />
          {/* The girl, cut out and laid back exactly where she stands, above
              the tint so she stays in full colour. */}
          <Image
            src="/images/hero-student-cutout.png"
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_22%]"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-pine-800/80 via-pine-800/45 to-pine-800/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pine-800/70 via-transparent to-pine-800/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-28 sm:px-10">
        <div className="max-w-2xl">
          <div className="hero-rise flex items-center gap-3" style={{ animationDelay: "0.1s" }}>
            <span className="h-px w-10 bg-brass-soft" />
            <span className="eyebrow text-brass-soft">Est. 1970 &middot; Himachal Himalayas</span>
          </div>

          <h1
            className="hero-rise mt-7 font-display leading-[0.9] text-paper"
            style={{ animationDelay: "0.22s", fontSize: "clamp(3.2rem, 8vw, 7.5rem)" }}
          >
            Exceptional
            <span className="block italic text-brass-soft">by Nature.</span>
          </h1>

          <span className="hero-rise mt-7 block h-px w-16 bg-brass-soft/70" style={{ animationDelay: "0.38s" }} />

          <p
            className="hero-rise mt-7 max-w-lg text-lg leading-relaxed text-paper/85"
            style={{ animationDelay: "0.48s" }}
          >
            A 54-year-old co-educational boarding school, seven thousand feet above
            sea level, with a modern second campus in New Chandigarh.
          </p>

          <div className="hero-rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.58s" }}>
            <a
              href={whatsappHref(`Hi! I would like to book a campus visit at ${school.name}.`)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brass-soft px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-pine-800 transition-transform hover:-translate-y-0.5"
            >
              Book a visit
            </a>
            <a
              href="#chooser"
              className="rounded-full border border-paper/45 px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-brass-soft hover:text-brass-soft"
            >
              Find your campus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
