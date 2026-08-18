/* Antique-gold line icons, drawn inside a ring.

   The reference pages use a single icon language: 1px strokes, rounded joins,
   no fills, held in a thin circle. Everything below is on a 24 x 24 grid so
   the optical weight stays even across the set. */

export type IconName =
  | "child"
  | "book"
  | "voice"
  | "activity"
  | "home"
  | "heart"
  | "compass"
  | "people"
  | "chart"
  | "shield"
  | "mountain"
  | "clock"
  | "leaf"
  | "calendar"
  | "document"
  | "star";

const GLYPH: Record<IconName, React.ReactNode> = {
  child: (
    <>
      <circle cx="12" cy="7.5" r="3.4" />
      <path d="M5.5 20c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.2c2.7-.9 5.3-.9 8 .5v13c-2.7-1.4-5.3-1.4-8-.5z" />
      <path d="M20 5.2c-2.7-.9-5.3-.9-8 .5v13c2.7-1.4 5.3-1.4 8-.5z" />
    </>
  ),
  voice: (
    <>
      <rect x="9.2" y="3" width="5.6" height="10" rx="2.8" />
      <path d="M5.8 11.2a6.2 6.2 0 0 0 12.4 0" />
      <path d="M12 17.4V21M9 21h6" />
    </>
  ),
  activity: (
    <>
      <circle cx="14.5" cy="4.6" r="1.9" />
      <path d="M7 21l3-5.2 3.2-1.6-1.1-4.4L8 11l-1.6 3" />
      <path d="M12.1 9.8l3.6 1.5L18 15" />
    </>
  ),
  home: (
    <>
      <path d="M3.6 10.6 12 4l8.4 6.6" />
      <path d="M6 12.2V20h12v-7.8" />
      <path d="M10.2 20v-4.6h3.6V20" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.4-7-9.2A3.9 3.9 0 0 1 12 8.4a3.9 3.9 0 0 1 7 2.4C19 15.6 12 20 12 20z" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M15.4 8.6 13.6 13.6 8.6 15.4l1.8-5z" />
    </>
  ),
  people: (
    <>
      <circle cx="8.8" cy="8.6" r="2.8" />
      <circle cx="16" cy="9.6" r="2.2" />
      <path d="M3.6 19c0-2.9 2.3-5 5.2-5s5.2 2.1 5.2 5" />
      <path d="M15.2 14.4c2.6.1 4.6 2 4.6 4.6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16" />
      <rect x="6.2" y="12.4" width="3" height="6" />
      <rect x="11.4" y="8.2" width="3" height="10.2" />
      <rect x="16.6" y="5" width="3" height="13.4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.4 19 6v6.2c0 4.2-3.1 7.2-7 8.4-3.9-1.2-7-4.2-7-8.4V6z" />
      <path d="M9.2 12.2l2 2 3.6-3.8" />
    </>
  ),
  mountain: (
    <>
      <path d="M3 18.6 9.4 8l4 6.2L16 10l5 8.6z" />
      <path d="M7.4 11.4h4" opacity="0.7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.2V12l3.2 2" />
    </>
  ),
  leaf: (
    <>
      <path d="M19.4 4.6c0 8-4.6 12.4-10 12.4a5 5 0 0 1 0-10c4.4 0 6.4-1.4 10-2.4z" />
      <path d="M5.2 19.4C8 15.4 12.4 11.6 17 9.4" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.6" width="16" height="14.4" rx="2" />
      <path d="M4 10h16M8.6 3.4v4M15.4 3.4v4" />
    </>
  ),
  document: (
    <>
      <path d="M6.4 3.4h7.2L18 7.8V20.6H6.4z" />
      <path d="M13.2 3.6v4.4h4.4" />
      <path d="M9.2 12.6h5.6M9.2 16h5.6" opacity="0.8" />
    </>
  ),
  star: (
    <path d="M12 4.2l2.3 4.9 5.3.7-3.9 3.7 1 5.3-4.7-2.6-4.7 2.6 1-5.3L4.4 9.8l5.3-.7z" />
  ),
};

/* Pick an icon from the heading, so a section gets a mark that means
   something rather than a decorative default. Order matters: the first
   keyword that hits wins. */
const KEYS: [RegExp, IconName][] = [
  /* Named dimensions first. "Mind" and "Body" match none of the general
     patterns below, so both fell through to the leaf default and the Defence
     Pathway showed the same glyph twice in one row. */
  [/^\s*mind\b/i, "compass"],
  [/^\s*body\b/i, "activity"],
  [/^\s*voice\b/i, "voice"],
  [/^\s*bearing\b/i, "shield"],
  [/^\s*service\b/i, "people"],
  [/^\s*character\b/i, "star"],
  [/defence|service|discipline|bearing|safeguard|safety|duty/i, "shield"],
  [/sport|fitness|physical|movement|athlet|outdoor|adventure/i, "activity"],
  [/confidence|voice|speak|stage|debate|perform|persuade|communicat/i, "voice"],
  [/residential|boarding|house|dorm|hostel|home|dining/i, "home"],
  [/care|pastoral|wellbeing|emotional|health|medical|support/i, "heart"],
  [/responsib|independen|life code|judgement|self-manage|decision/i, "compass"],
  [/mentor|teacher|people|community|leadership|parent|family|belong/i, "people"],
  [/report|progress|growth|measure|dashboard|assess|proof|visible/i, "chart"],
  [/campus|mountain|himalay|terrain|environment|nature/i, "mountain"],
  [/day|rhythm|routine|morning|prep|time|rest|schedule/i, "clock"],
  [/admission|enquir|apply|visit|process|register|fee/i, "calendar"],
  [/academic|classroom|learn|study|curriculum|subject|concept|exam|board/i, "book"],
  [/child|whole|student|early years|toddler|primary/i, "child"],
  [/story|heritage|tradition|award|recognition|achievement/i, "star"],
  [/document|polic|disclosure/i, "document"],
];

export function iconFor(text: string): IconName {
  for (const [re, name] of KEYS) if (re.test(text)) return name;
  return "leaf";
}

export default function LineIcon({
  name,
  size = 52,
  className = "",
  ring = true,
}: {
  name: IconName;
  size?: number;
  className?: string;
  ring?: boolean;
}) {
  const inner = Math.round(size * 0.5);
  if (!ring) {
    return (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        width={inner}
        height={inner}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        {GLYPH[name]}
      </svg>
    );
  }
  return (
    <span
      className={`inline-grid shrink-0 place-items-center rounded-full border border-current ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        width={inner}
        height={inner}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {GLYPH[name]}
      </svg>
    </span>
  );
}
