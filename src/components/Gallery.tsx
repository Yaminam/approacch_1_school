"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Photo = { src: string; alt: string; tall?: boolean };

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {dir === "left" ? <path d="M15 5 L8 12 L15 19" /> : <path d="M9 5 L16 12 L9 19" />}
    </svg>
  );
}

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((o) => (o === null ? o : (o + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {photos.map((p, i) => (
          <button
            key={p.src + i}
            onClick={() => setOpen(i)}
            className="group block w-full overflow-hidden rounded-xl"
            aria-label={`View ${p.alt}`}
          >
            <div className={`relative w-full ${p.tall ? "aspect-[3/4]" : "aspect-square"}`}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          onClick={close}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-pine-800/95 p-4 backdrop-blur-sm"
        >
          <button
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-paper/25 p-2 text-paper transition-colors hover:bg-paper/10 sm:left-6"
          >
            <Chevron dir="left" />
          </button>

          <div className="relative h-[82vh] w-[92vw] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={photos[open].src} alt={photos[open].alt} fill sizes="92vw" className="object-contain" />
            <p className="absolute -bottom-8 left-0 right-0 text-center text-sm text-paper/70">{photos[open].alt}</p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-paper/25 p-2 text-paper transition-colors hover:bg-paper/10 sm:right-6"
          >
            <Chevron dir="right" />
          </button>

          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full border border-paper/25 p-2 text-paper transition-colors hover:bg-paper/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
