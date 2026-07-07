"use client";

import { useEffect, useRef, useState } from "react";

function parse(value: string) {
  const match = value.match(/[\d,]+/);
  if (!match) return null;
  return {
    target: parseInt(match[0].replace(/,/g, ""), 10),
    prefix: value.slice(0, match.index),
    suffix: value.slice((match.index ?? 0) + match[0].length),
  };
}

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const parsed = parse(value);
  const target = parsed?.target ?? 0;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!parsed) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || started.current) return;
          started.current = true;
          io.disconnect();
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setN(target);
            return;
          }
          const dur = 1300;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
    // Runs once per mount; target is stable for a given stat.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  if (!parsed) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {parsed.prefix}
      {n.toLocaleString("en-US")}
      {parsed.suffix}
    </span>
  );
}
