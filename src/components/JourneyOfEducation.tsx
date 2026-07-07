"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { journey } from "@/lib/content";
import { Eyebrow } from "./ui";

const GAP = 24; // px, matches gap-6

export default function JourneyOfEducation() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [metrics, setMetrics] = useState({ step: 0, pad: 0 });

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      const card = cardRef.current;
      if (card) {
        const cw = card.offsetWidth;
        setMetrics({ step: cw + GAP, pad: (window.innerWidth - cw) / 2 });
      }
    };
    const update = () => {
      const el = wrapRef.current;
      if (el) {
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
        setProgress(total > 0 ? scrolled / total : 0);
      }
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      update();
    };
    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const count = journey.length;
  const activeIndex = Math.round(progress * (count - 1));
  const translate = metrics.pad - progress * (count - 1) * metrics.step;

  const jumpTo = (i: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + (i / (count - 1)) * total, behavior: "smooth" });
  };

  return (
    <section
      ref={wrapRef}
      aria-label="The Journey of Education"
      style={{ height: `${count * 70}vh` }}
      className="relative bg-paper"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-20">
        {/* heading */}
        <div className="mx-auto w-full max-w-7xl shrink-0 px-6 sm:px-8">
          <Eyebrow>The Journey of Education</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl leading-[1.05] text-pine sm:text-4xl">
            One school, every stage of childhood.
          </h2>
        </div>

        {/* timeline */}
        <div className="mx-auto mt-6 w-full max-w-5xl shrink-0 px-6 sm:px-8">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[7px] h-px bg-pine/15" />
            <div
              className="absolute left-0 top-[7px] h-px bg-brass transition-[width] duration-150"
              style={{ width: `${progress * 100}%` }}
            />
            <div className="relative flex justify-between">
              {journey.map((j, i) => (
                <button
                  key={j.stage}
                  onClick={() => jumpTo(i)}
                  className="group flex flex-col items-center gap-2.5"
                  aria-label={`Go to ${j.stage}`}
                >
                  <span
                    className={`h-3.5 w-3.5 rounded-full border-2 transition-colors ${
                      i <= activeIndex ? "border-brass bg-brass" : "border-pine/25 bg-paper"
                    }`}
                  />
                  <span
                    className={`hidden text-xs font-bold transition-colors sm:block ${
                      i === activeIndex ? "text-pine" : "text-mist group-hover:text-clay"
                    }`}
                  >
                    {j.stage}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* horizontal track of cards (sized to fit the remaining height) */}
        <div className="relative mt-6 min-h-0 flex-1 pb-8">
          <div
            className="flex h-full items-center gap-6 will-change-transform"
            style={{ transform: `translate3d(${translate}px, 0, 0)` }}
          >
            {journey.map((j, i) => (
              <article
                key={j.stage}
                ref={i === 0 ? cardRef : undefined}
                className="flex h-full max-h-[460px] w-[86vw] max-w-[520px] shrink-0 flex-col overflow-hidden rounded-3xl border border-pine/12 bg-cream soft-shadow-sm lg:w-[66vw] lg:max-w-[1000px] lg:flex-row"
              >
                <div className="relative h-[46%] w-full shrink-0 lg:h-full lg:w-1/2">
                  <Image
                    src={j.img}
                    alt={j.stage}
                    fill
                    sizes="(max-width:1024px) 86vw, 33vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-pine/85 px-3 py-1 font-display text-sm text-brass-soft [font-variant-numeric:tabular-nums]">
                    {String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-center overflow-hidden p-6 sm:p-9 lg:w-1/2 lg:flex-none">
                  <span className="eyebrow text-clay">{j.ages}</span>
                  <h3 className="mt-2 text-2xl text-pine sm:text-3xl lg:text-4xl">{j.stage}</h3>
                  <p className="mt-3 leading-relaxed text-mist sm:text-lg">{j.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
