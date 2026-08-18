"use client";

import { useEffect, useRef, useState } from "react";
import { PAD } from "./sections";
import { Ridge, Botanical } from "./Ornament";

/* The heritage chronology.

   Fourteen dated entries were rendering as one 2100px ruled list on ivory:
   year, title, paragraph, repeated, with nothing to mark progress through
   fifty-six years. A history is the one thing on this site that is genuinely a
   sequence, so it is drawn as one — and drawn on the school's burgundy, where
   a gold spine and a lit node carry. On the ivory the same spine was a hairline
   among hairlines and the whole run disappeared into the page.

     - The spine fills as the reader travels it, with a lit head riding the
       fill, so position in the story is visible at a glance.
     - The year reached is held in a sticky marker, so the date is never off
       screen while its entry is being read.
     - Entries alternate across the spine on a wide screen and arrive from the
       side they sit on, so the eye moves down in steps rather than reading one
       column.
     - Each node lights and takes a soft ring as its entry arrives.

   Motion is opt-out and no-JS safe without any state juggling: the component
   renders in its unstarted state, and CSS restores the finished state for
   prefers-reduced-motion and for no-script. That also keeps the effect free of
   synchronous setState, which would otherwise cascade a second render of every
   entry on mount. */

export type Era = { year: string; title: string; paras: string[] };

const FALLBACK_CSS = `[data-tl-entry]{opacity:1!important;transform:none!important}
[data-tl-fill]{height:100%!important}
[data-tl-node]{border-color:var(--color-brass-soft)!important;background:var(--color-brass-soft)!important;transform:none!important}
[data-tl-node] span{background:var(--color-pine-800)!important}`;

export default function Chronology({ items }: { items: Era[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const nodes = useRef<(HTMLLIElement | null)[]>([]);
  const [fill, setFill] = useState(0);
  const [seen, setSeen] = useState<boolean[]>(() => items.map(() => false));
  const [at, setAt] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = Number((e.target as HTMLElement).dataset.i);
          setSeen((prev) => {
            if (prev[i]) return prev;
            const next = [...prev];
            next[i] = true;
            return next;
          });
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -14% 0px" },
    );
    nodes.current.forEach((n) => n && io.observe(n));

    let frame = 0;
    const measure = () => {
      frame = 0;
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      /* Measured against a line just above the middle of the viewport, so the
         spine fills level with whatever the reader is actually looking at. */
      const mark = window.innerHeight * 0.55;
      setFill(Math.max(0, Math.min(1, (mark - r.top) / Math.max(1, r.height))));
      /* The marker names the entry at the reading line, not the furthest one
         reached. Tracking a high-water mark off the observer meant scrolling
         back up left the year stuck on the deepest entry ever seen: standing
         at 1972 the marker still read 2007. */
      let cur = 0;
      nodes.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= mark) cur = i;
      });
      setAt(cur);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  const running = fill > 0.001 && fill < 0.999;

  return (
    <section className="relative overflow-hidden bg-pine-800">
      <noscript>
        <style>{FALLBACK_CSS}</style>
      </noscript>
      <style>{`@media (prefers-reduced-motion: reduce){${FALLBACK_CSS}}`}</style>

      <Ridge
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-brass-soft/20"
      />
      <Botanical
        aria-hidden
        className="pointer-events-none absolute -left-8 top-0 hidden h-full w-24 text-brass-soft/10 xl:block"
      />

      <div className={`${PAD} relative py-16 sm:py-20`}>
        {/* The year the reader has reached, held at the top of the run. */}
        <div className="pointer-events-none sticky top-[5.5rem] z-20 mb-4 hidden justify-center lg:flex">
          <span
            /* A gold pill, not a tinted one. At bg-pine-800/90 the marker was
               the same colour as the band it sits on and simply could not be
               seen. */
            className={`inline-flex items-center gap-3 rounded-full bg-brass-soft px-5 py-2 shadow-[0_2px_18px_rgba(0,0,0,0.28)] transition-all duration-500 ${
              running ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
            }`}
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-pine-800/70" />
            <span className="font-display text-[1.15rem] leading-none text-pine-800 [font-variant-numeric:tabular-nums]">
              {items[Math.min(at, items.length - 1)]?.year}
            </span>
          </span>
        </div>

        <div ref={wrap} className="relative mx-auto max-w-[64rem]">
          {/* The spine, the part already travelled, and the lit head. */}
          <span
            aria-hidden
            className="absolute inset-y-0 left-[11px] w-px bg-paper/15 lg:left-1/2 lg:-ml-px"
          />
          <span
            aria-hidden
            data-tl-fill
            className="absolute left-[11px] top-0 w-px bg-gradient-to-b from-brass-soft/20 via-brass-soft to-brass-soft lg:left-1/2 lg:-ml-px"
            style={{ height: `${fill * 100}%` }}
          />
          <span
            aria-hidden
            className={`absolute left-[11px] -ml-[5px] h-2.5 w-2.5 rounded-full bg-brass-soft shadow-[0_0_0_6px_rgba(212,184,122,0.18)] transition-opacity duration-500 lg:left-1/2 ${
              running ? "opacity-100" : "opacity-0"
            }`}
            style={{ top: `calc(${fill * 100}% - 5px)` }}
          />

          <ol>
            {items.map((it, i) => {
              const on = seen[i];
              const right = i % 2 === 1;
              return (
                <li
                  key={`${it.year}-${it.title}`}
                  data-i={i}
                  ref={(el) => {
                    nodes.current[i] = el;
                  }}
                  className={`relative pl-11 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:pl-0 ${
                    i ? "mt-12 sm:mt-16" : ""
                  }`}
                >
                  <span
                    aria-hidden
                    data-tl-node
                    className={`absolute left-0 top-1 grid h-[23px] w-[23px] place-items-center rounded-full border transition-all duration-700 ease-out lg:left-1/2 lg:-ml-[11px] ${
                      on
                        ? "scale-100 border-brass-soft bg-brass-soft shadow-[0_0_0_5px_rgba(212,184,122,0.16)]"
                        : "scale-90 border-paper/25 bg-pine-800"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-700 ${
                        on ? "bg-pine-800" : "bg-paper/25"
                      }`}
                    />
                  </span>

                  {/* Each entry arrives from the side of the spine it sits on. */}
                  <div
                    data-tl-entry
                    className={`transition-all duration-[850ms] ease-out ${
                      on
                        ? "translate-x-0 translate-y-0 opacity-100"
                        : `translate-y-4 opacity-0 ${right ? "lg:translate-x-6" : "lg:-translate-x-6"}`
                    } ${right ? "lg:col-start-2 lg:pl-14" : "lg:col-start-1 lg:pr-14 lg:text-right"}`}
                  >
                    <span className="block font-display text-[1.7rem] leading-none text-brass-soft [font-variant-numeric:tabular-nums] sm:text-[2.1rem]">
                      {it.year}
                    </span>
                    <h3 className="mt-3 font-display text-[1.3rem] leading-[1.22] text-paper sm:text-[1.5rem]">
                      {it.title.charAt(0).toUpperCase() + it.title.slice(1)}
                    </h3>
                    {it.paras.map((t, j) => (
                      <p
                        key={j}
                        className={`mt-3 max-w-[46ch] text-[1rem] leading-[1.72] text-sage-soft/85 [text-wrap:pretty] ${
                          right ? "" : "lg:ml-auto"
                        }`}
                      >
                        {t}
                      </p>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
