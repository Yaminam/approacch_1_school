"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Photos tiled onto the sphere.
const IMAGES = [
  "/images/gallery/athletics.jpg",
  "/images/gallery/equestrian.jpg",
  "/images/gallery/golf.jpg",
  "/images/gallery/farm.jpg",
  "/images/gallery/mountaineering.jpg",
  "/images/gallery/music-live.jpg",
  "/images/gallery/sports.jpg",
  "/images/gallery/wellbeing.jpg",
  "/images/gallery/campus-chd.jpg",
  "/images/gallery/chd-sports.jpg",
  "/images/gallery/pastoral.jpg",
  "/images/aerial.jpg",
  "/images/basketball.jpg",
  "/images/debate.jpg",
  "/images/theatre.jpg",
  "/images/trekking.jpg",
  "/images/yoga.jpg",
  "/images/shooting.jpg",
  "/images/campus-hero.jpg",
  "/images/outside.jpg",
];

// Navy title cards, interspersed with the photos like the reference.
const CARDS = [
  { label: "News", title: "New Chandigarh campus opens" },
  { label: "School Life", title: "Life at 7,000 feet" },
  { label: "Academics", title: "A rigorous CBSE education" },
  { label: "Signature", title: "The Defence Pathway" },
  { label: "News", title: "National honours in shooting" },
  { label: "Campuses", title: "Two homes in the hills" },
  { label: "Pastoral Care", title: "A house that feels like family" },
  { label: "Sport", title: "Equestrian, golf & the outdoors" },
  { label: "The Difference", title: "Exceptional by Nature" },
  { label: "Admissions", title: "Find your campus" },
  { label: "Heritage", title: "Established 1970" },
  { label: "Whole Child", title: "Character over cramming" },
  { label: "Contact Us", title: "Come and visit" },
  { label: "Residential", title: "Boarding, done warmly" },
];

type Tile =
  | { kind: "photo"; src: string; gray: boolean; transform: string }
  | { kind: "card"; label: string; title: string; transform: string };

// Lay tiles out in latitude bands (rows), like a globe quilt, so every tile
// keeps a consistent small gap from its neighbours instead of overlapping.
// Rows are staggered for a slightly organic, non-grid feel. Deterministic.
const RADIUS = 430;
const ROWS = 8;
const BASE_COLS = 15; // columns at the equator; fewer toward the poles
const MAX_LAT = 64; // keep tiles off the poles so they don't converge/overlap

function buildTiles(): Tile[] {
  const tiles: Tile[] = [];
  let imgN = 0;
  let cardN = 0;
  let idx = 0;
  for (let r = 0; r < ROWS; r++) {
    const lat = -MAX_LAT + (2 * MAX_LAT * r) / (ROWS - 1);
    const cols = Math.max(1, Math.round(BASE_COLS * Math.cos((lat * Math.PI) / 180)));
    const stagger = (r % 2) * (360 / cols / 2);
    for (let c = 0; c < cols; c++) {
      const lon = stagger + (c * 360) / cols;
      const transform = `rotateY(${lon.toFixed(2)}deg) rotateX(${(-lat).toFixed(2)}deg) translateZ(${RADIUS}px)`;
      if (idx % 3 === 0) {
        const card = CARDS[cardN++ % CARDS.length];
        tiles.push({ kind: "card", label: card.label, title: card.title, transform });
      } else {
        tiles.push({ kind: "photo", src: IMAGES[imgN++ % IMAGES.length], gray: idx % 4 !== 0, transform });
      }
      idx++;
    }
  }
  return tiles;
}

const TILES = buildTiles();

const TILE_W = 118;
const TILE_H = 132;

export default function IntroGlobe() {
  const [phase, setPhase] = useState<"hidden" | "showing" | "leaving" | "done">("hidden");

  useEffect(() => {
    const seen = sessionStorage.getItem("dps-intro-seen");
    setPhase(seen ? "done" : "showing");
  }, []);

  useEffect(() => {
    if (phase === "showing" || phase === "leaving") {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [phase]);

  function enter() {
    sessionStorage.setItem("dps-intro-seen", "1");
    setPhase("leaving");
    window.setTimeout(() => setPhase("done"), 800);
  }

  if (phase === "hidden" || phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[90] overflow-hidden bg-pine-800 transition-opacity duration-700 ease-out ${
        phase === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Top bar: school name + menu, like the reference */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 sm:px-10">
        <Image
          src="/images/logo.svg"
          alt="Dalhousie Public School"
          width={210}
          height={44}
          unoptimized
          priority
          className="h-9 w-auto [filter:brightness(0)_invert(1)]"
        />
        <button
          onClick={enter}
          aria-label="Menu"
          className="grid h-12 w-12 place-items-center rounded-full bg-clay text-paper transition-colors hover:bg-brass-soft hover:text-pine-800"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="2.5" y1="5.5" x2="15.5" y2="5.5" />
            <line x1="2.5" y1="9" x2="15.5" y2="9" />
            <line x1="2.5" y1="12.5" x2="15.5" y2="12.5" />
          </svg>
        </button>
      </div>

      {/* Rotating globe */}
      <div className="absolute inset-0" style={{ perspective: "1000px" }}>
        <div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(-6deg)" }}
        >
          <div className="globe-spin absolute inset-0">
            {TILES.map((t, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 overflow-hidden rounded-[3px] shadow-xl"
                style={{
                  width: TILE_W,
                  height: TILE_H,
                  marginLeft: -TILE_W / 2,
                  marginTop: -TILE_H / 2,
                  transform: t.transform,
                  backfaceVisibility: "visible",
                }}
              >
                {t.kind === "photo" ? (
                  <>
                    <Image
                      src={t.src}
                      alt=""
                      fill
                      sizes="180px"
                      className={`object-cover ${t.gray ? "grayscale" : ""}`}
                    />
                    <span className="absolute inset-0 bg-pine-800/12" />
                  </>
                ) : (
                  <div className="flex h-full w-full flex-col bg-[#6b0630] p-2 text-center">
                    <div className="flex h-full w-full flex-col items-center justify-center border border-brass-soft/45 px-2">
                      <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-brass-soft/90">
                        {t.label}
                      </span>
                      <h3 className="mt-2 font-display text-[12px] font-semibold leading-tight text-paper">
                        {t.title}
                      </h3>
                      <span className="mt-2.5 text-[6px] font-bold uppercase tracking-[0.3em] text-paper/45">
                        Dalhousie
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Depth fog: fade the sphere's edges and far side into the background
          so it reads as a soft, volumetric globe. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 30%, rgba(41,18,27,0.35) 48%, rgba(41,18,27,0.8) 68%, rgba(41,18,27,0.97) 82%, #29121b 94%)",
        }}
      />
      {/* Soft scrim behind the headline / button for legibility */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 42% 34% at 50% 49%, rgba(41,18,27,0.6) 0%, rgba(41,18,27,0.28) 45%, transparent 72%)",
        }}
      />

      {/* Centre content */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center px-6 text-center">
        <div className="relative flex flex-col items-center">
          <span className="eyebrow text-brass-soft">Dalhousie Public School</span>
          <h1
            className="mt-5 font-display leading-[0.92] text-paper"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.4rem)", textShadow: "0 2px 40px rgba(0,0,0,0.7)" }}
          >
            Exceptional by Nature
          </h1>

          <button
            onClick={enter}
            aria-label="Enter the website"
            className="pointer-events-auto mt-12 grid h-36 w-36 place-items-center rounded-full border border-paper/70 text-sm font-bold uppercase tracking-[0.2em] text-paper backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brass-soft hover:bg-brass-soft hover:text-pine-800"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
