const words = [
  "Mountaineering",
  "Rifle Shooting",
  "Theatre",
  "The Debate Society",
  "Trekking",
  "Equestrian",
  "Confidence Code",
  "Farm to Table",
  "Yoga at Sunrise",
  "Exceptional by Nature",
];

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0">
      <path
        d="M8 0.5 L9.4 6.6 L15.5 8 L9.4 9.4 L8 15.5 L6.6 9.4 L0.5 8 L6.6 6.6 Z"
        fill="currentColor"
        className="text-brass"
      />
    </svg>
  );
}

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="marquee overflow-hidden border-y hair bg-cream py-6">
      <div className="marquee-track items-center gap-8">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-2xl text-pine sm:text-3xl">{w}</span>
            <Star />
          </span>
        ))}
      </div>
    </div>
  );
}
