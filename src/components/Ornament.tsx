/* Decorative line art.

   The reference pages carry fine botanical drawings down the hero margins and
   a Himalayan ridge behind the maroon bands. They sit at low opacity and never
   compete with the content, so every piece here is stroke-only, currentColor,
   and aria-hidden. */

export function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 420"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* main stem */}
      <path d="M60 10 C 52 90, 68 150, 58 230 C 50 300, 64 360, 60 410" />
      {/* leaf pairs, alternating down the stem */}
      {[
        { y: 60, d: 1 },
        { y: 110, d: -1 },
        { y: 160, d: 1 },
        { y: 212, d: -1 },
        { y: 262, d: 1 },
        { y: 312, d: -1 },
        { y: 360, d: 1 },
      ].map((l, i) => (
        <g key={i}>
          <path
            d={`M60 ${l.y} C ${60 + 26 * l.d} ${l.y - 20}, ${60 + 44 * l.d} ${l.y - 6}, ${60 + 50 * l.d} ${l.y + 6}`}
          />
          <path
            d={`M60 ${l.y} C ${60 + 22 * l.d} ${l.y + 4}, ${60 + 40 * l.d} ${l.y + 10}, ${60 + 50 * l.d} ${l.y + 6}`}
          />
          <path d={`M60 ${l.y} L ${60 + 50 * l.d} ${l.y + 6}`} opacity="0.5" />
        </g>
      ))}
      {/* small buds */}
      <circle cx="60" cy="24" r="3.5" />
      <circle cx="58" cy="188" r="2.5" />
      <circle cx="61" cy="336" r="2.5" />
    </svg>
  );
}

/* A Himalayan ridge line: three overlapping ranges, drawn as outlines so it
   reads as an engraving rather than a filled illustration. */
export function Ridge({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 900 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
      className={className}
      preserveAspectRatio="none"
    >
      <path d="M0 190 L120 96 L182 140 L268 54 L356 138 L432 88 L520 168 L600 104 L688 158 L770 110 L860 172 L900 148" />
      <path d="M0 196 L96 140 L170 176 L250 118 L330 178 L420 140 L500 190 L588 148 L668 186 L760 152 L850 194 L900 178" opacity="0.65" />
      {/* snow hatching on the two tallest peaks */}
      <path d="M250 74 L268 54 L286 74 M244 84 L268 62 L292 84" opacity="0.55" />
      <path d="M588 120 L600 104 L614 122" opacity="0.55" />
    </svg>
  );
}

/* A short rule with a diamond at its centre: the divider used under eyebrows
   and between editorial sections in the references. */
export function GoldRule({ className = "", width = 88 }: { className?: string; width?: number }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 88 8"
      width={width}
      height={8}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
    >
      <line x1="0" y1="4" x2="36" y2="4" />
      <path d="M44 1 L47 4 L44 7 L41 4 Z" fill="currentColor" stroke="none" />
      <line x1="52" y1="4" x2="88" y2="4" />
    </svg>
  );
}

/* The crest mark, reduced to a line shield. Used as a section marker and at
   the centre of the preparation-system diagram. */
export function Crest({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 46"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 2 L37 8 V24 C37 34 29 41 20 44 C11 41 3 34 3 24 V8 Z" />
      <path d="M20 11 L20 33 M13 18 L27 18" opacity="0.8" />
      <path d="M20 11 C 16 15, 16 21, 20 24 C 24 21, 24 15, 20 11 Z" opacity="0.55" />
    </svg>
  );
}
