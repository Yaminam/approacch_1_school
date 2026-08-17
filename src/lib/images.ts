/* Semantic image slots.

   Every page refers to a slot, never to a file. When final photography arrives,
   change the path here once and the page picks it up. Slots currently pointing
   at a stand-in from the existing library are marked PLACEHOLDER, so it is easy
   to see what still needs a real photograph.

   All paths must resolve to a file in /public, otherwise next/image 404s at
   runtime rather than failing the build. */

const L = "/images/library";

export const img = {
  // The argument
  differenceHero: "/images/campus-wide.jpg",
  differenceSplit: `${L}/DEBATE-1-scaled.jpg`,

  dayHero: `${L}/Day-in-the-life-1-scaled.jpg`,
  daySplit: `${L}/Inside-The-Classroom.jpg`,

  systemHero: "/images/aerial.jpg",
  systemSplit: `${L}/Copy-of-DPS-5-scaled.jpg`,

  // The seven pathways
  edgeHero: `${L}/Inside-The-Classroom.jpg`,
  edgeSplit: "/images/debate.jpg",

  defenceHero: "/images/shooting.jpg",
  defenceSplit: "/images/trekking.jpg",

  sportsHero: "/images/basketball.jpg",
  sportsSplit: "/images/gym.jpg",

  confidenceHero: "/images/theatre.jpg",
  confidenceSplit: `${L}/DEBATE-scaled-e1734527895299.jpg`,

  lifeHero: "/images/outside.jpg",
  lifeSplit: "/images/yoga.jpg",

  residentialHero: "/images/chd-hostel.jpg",
  residentialSplit: `${L}/dal-hostel-4-scaled-e1740042107132.jpg`,

  reportHero: `${L}/nurturing.jpg`, // PLACEHOLDER, wants a report/mentor photograph
  reportSplit: `${L}/Pastoral-Care.jpg`,

  academicsHero: "/images/debate.jpg",
  academicsSplit: `${L}/CHD-Curriculum-1-scaled-r1rq1qp4unejfzcwglkfwuq99xy5k77bgzrdmgrcb4.jpg`,

  pastoralHero: `${L}/Pastoral-Care.jpg`,
  pastoralSplit: `${L}/pastoral-2-scaled.jpg`,

  // Campuses
  campusesHero: "/images/campus-wide.jpg",
  campusesSplit: "/images/aerial.jpg",

  finderHero: "/images/campus-hero.jpg",
  finderSplit: `${L}/Mask-group-22.jpg`, // PLACEHOLDER

  compareHero: "/images/aerial.jpg",
  compareSplit: `${L}/SISWAN-2_edited-scaled-e1739864510469-r1oet3fahu7zromdhky5b6vhhnsz98lhmkikcmda74.jpg`,

  dalHero: "/images/campus-hero.jpg",
  dalSplit: `${L}/Dalhousie-Outside-the-classroom-1.jpg`,
  dalAcademicsHero: `${L}/Inside-The-Classroom.jpg`,
  dalAcademicsSplit: `${L}/HISTORY-1-1-scaled-r1rt2xm7znmyu286lk8hm5y9sz2dudy569lgp4a7fs.jpg`,
  dalResidentialHero: `${L}/dal-hostel-4-scaled-e1740042107132.jpg`,
  dalResidentialSplit: `${L}/pastoral-1-scaled.jpg`,
  dalStudentLifeHero: "/images/music.jpg",
  dalStudentLifeSplit: "/images/theatre.jpg",
  dalSportsHero: "/images/trekking.jpg",
  dalSportsSplit: `${L}/Mountaineering-3-scaled.jpg`,
  dalHouseHero: `${L}/pastoral-3-scaled.jpg`,
  dalHouseSplit: `${L}/Health.jpg`,

  chdHero: `${L}/About-Us-Chandigarh-Campus-2-scaled.jpg`,
  chdSplit: `${L}/Chandigarh-Outside-the-classroom-scaled.jpg`,
  chdJourneyHero: `${L}/CHD-Curriculum-1-scaled-r1rq1qp4unejfzcwglkfwuq99xy5k77bgzrdmgrcb4.jpg`,
  chdJourneySplit: `${L}/Inside-The-Classroom.jpg`,
  chdEarlyHero: `${L}/Mask-group-23.jpg`, // PLACEHOLDER, wants early-years photography
  chdEarlySplit: `${L}/Mask1-1.jpg`, // PLACEHOLDER
  chdPrimaryHero: `${L}/Mask-group-2.jpg`, // PLACEHOLDER
  chdPrimarySplit: `${L}/Inside-The-Classroom.jpg`,
  chdMiddleHero: `${L}/Copy-of-DPS-5-scaled.jpg`,
  chdMiddleSplit: `${L}/DEBATE-1-scaled.jpg`,
  chdSeniorHero: `${L}/Inside-The-Classroom.jpg`,
  chdSeniorSplit: `${L}/Copy-of-DPS-5-scaled.jpg`,
  chdBoardingHero: "/images/chd-hostel.jpg",
  chdBoardingSplit: `${L}/Chandigarh-Hostel-1-scaled-qyonx79iujd64ovo58bcb3epcgfg2798xvwxwqe8fc.jpg`,
  chdStudentLifeHero: `${L}/CHD-Equestrian-1-scaled-e1740029906448.jpg`,
  chdStudentLifeSplit: `${L}/GOLF-3-scaled.jpg`,

  // Admissions
  admissionsHero: "/images/campus-hero.jpg",
  admissionsSplit: `${L}/SB-08457-scaled.jpeg`,
  processHero: `${L}/Mask-group-7.jpg`, // PLACEHOLDER
  processSplit: `${L}/Pastoral-Care.jpg`,
  feesHero: "/images/campus-wide.jpg",
  feesSplit: `${L}/Inside-The-Classroom.jpg`,
  visitHero: "/images/aerial.jpg",
  visitSplit: `${L}/Dalhousie-Outside-the-classroom-1.jpg`,
  enquireHero: "/images/campus-wide.jpg",
  enquireSplit: `${L}/Day-in-the-life-1-scaled.jpg`,
  applyHero: "/images/campus-hero.jpg",
  applySplit: `${L}/Copy-of-DPS-5-scaled.jpg`,
  faqsHero: "/images/aerial.jpg",
  faqsSplit: `${L}/Pastoral-Care.jpg`,

  // Utility
  aboutHero: "/images/campus-wide.jpg",
  aboutSplit: "/images/aerial.jpg",
  heritageHero: `${L}/Dalhousie-School.jpeg`,
  heritageSplit: `${L}/DJI_0205-1-1.jpg`,
  leadershipHero: `${L}/Principal-scaled-riranl77pihrjlrf7wk73ocyqcpy68bzljl6xo0pkg.jpg`,
  leadershipSplit: `${L}/Gs-Dhillon-e1770372212598.png`,
  storiesHero: "/images/music.jpg",
  storiesSplit: `${L}/Mountaineering-2-scaled-e1739945534809.jpg`,
  alumniHero: `${L}/SB-08457-scaled.jpeg`,
  alumniSplit: `${L}/Copy-of-DPS-5-scaled.jpg`,
  policiesHero: "/images/campus-wide.jpg",
  policiesSplit: `${L}/Inside-The-Classroom.jpg`,
  contactHero: "/images/aerial.jpg",
  contactSplit: `${L}/About-Us-Chandigarh-Campus-2-scaled.jpg`,
} as const;

export type ImgSlot = keyof typeof img;

/* A pool of editorial photographs used to pair an image with a content block.

   School sites that read well (Gordonstoun is the clearest example) give every
   content block its own photograph, so an image never appears unattached to
   the text beside it. Pages here carry only two named slots, so blocks draw
   the rest from this pool, chosen deterministically from the page slug so the
   selection is stable between renders and never repeats within a page. */
const POOL = [
  `${L}/Day-in-the-life-1-scaled.jpg`,
  `${L}/Inside-The-Classroom.jpg`,
  `${L}/DEBATE-1-scaled.jpg`,
  `${L}/Mountaineering-3-scaled.jpg`,
  `${L}/Pastoral-Care.jpg`,
  `${L}/pastoral-2-scaled.jpg`,
  `${L}/Copy-of-DPS-5-scaled.jpg`,
  `${L}/Dalhousie-Outside-the-classroom-1.jpg`,
  `${L}/Chandigarh-Outside-the-classroom-scaled.jpg`,
  `${L}/GYM-scaled-e1734527081671.jpg`,
  `${L}/MUSIC-scaled-e1734527666601.jpg`,
  `${L}/THEATRE-scaled-e1734527218244.jpg`,
  `${L}/TREKKING-scaled-e1734527314582.jpg`,
  `${L}/Yoga-scaled-e1734527265270.jpg`,
  `${L}/SHOOTING-scaled-e1734526935696.jpg`,
  `${L}/BASKETBALL-scaled-e1734527045760.jpg`,
  `${L}/FARM-1-scaled.jpg`,
  `${L}/GOLF-3-scaled.jpg`,
  `${L}/nurturing.jpg`,
  `${L}/Health.jpg`,
];

/** Stable per-page image run: the page's own two slots, then pool picks. */
export function imagesFor(slug: string, count: number, own: string[]): string[] {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const out = [...own.filter(Boolean)];
  let step = 0;
  while (out.length < count && step < POOL.length * 2) {
    const pick = POOL[(h + step * 7) % POOL.length];
    if (!out.includes(pick)) out.push(pick);
    step++;
  }
  return out.slice(0, count);
}

/* ── Choosing a photograph that means something ──────────────────────
   `imagesFor` above picks from a shared pool by hashing the page slug, which
   is stable but semantically blind: it put a weightlifting photograph beside
   "Admission confirmation" and a golf cart beside "More activity does not
   always mean more growth".

   `imageFor` reads the section's own words and draws from a matching set, so
   a residential section gets a house, a sport section gets sport. The `used`
   set is threaded through a page so the same photograph never appears twice
   on it. Order matters: the first pattern that hits wins. */

const T = {
  classroom: [
    `${L}/Inside-The-Classroom.jpg`,
    `${L}/HISTORY-1-1-scaled-r1rt2xm7znmyu286lk8hm5y9sz2dudy569lgp4a7fs.jpg`,
    `${L}/CHD-Curriculum-1-scaled-r1rq1qp4unejfzcwglkfwuq99xy5k77bgzrdmgrcb4.jpg`,
    `${L}/Copy-of-DPS-5-scaled.jpg`,
  ],
  sport: [
    "/images/basketball.jpg",
    `${L}/Athletics.jpg.jpeg`,
    `${L}/Football.jpg.jpeg`,
    `${L}/GYM-scaled-e1734527081671.jpg`,
    `${L}/CHD-Sports-3-scaled.jpg`,
    `${L}/Cricket.jpg.jpeg`,
  ],
  outdoors: [
    "/images/trekking.jpg",
    `${L}/Mountaineering-2-scaled-e1739945534809.jpg`,
    `${L}/Mountaineering-3-scaled.jpg`,
    "/images/aerial.jpg",
    `${L}/DJI_0205-1-1.jpg`,
    `${L}/TREKKING-scaled-e1734527314582.jpg`,
  ],
  voice: [
    `${L}/DEBATE-1-scaled.jpg`,
    "/images/theatre.jpg",
    `${L}/THEATRE-scaled-e1734527218244.jpg`,
    `${L}/MUSIC-scaled-e1734527666601.jpg`,
    "/images/debate.jpg",
    "/images/music.jpg",
  ],
  residential: [
    `${L}/dal-hostel-4-scaled-e1740042107132.jpg`,
    "/images/chd-hostel.jpg",
    `${L}/Chandigarh-Hostel-1-scaled-qyonx79iujd64ovo58bcb3epcgfg2798xvwxwqe8fc.jpg`,
    `${L}/Day-in-the-life-1-scaled.jpg`,
  ],
  care: [
    `${L}/Pastoral-Care.jpg`,
    `${L}/pastoral-2-scaled.jpg`,
    `${L}/pastoral-1-scaled.jpg`,
    `${L}/pastoral-3-scaled.jpg`,
    `${L}/nurturing.jpg`,
    `${L}/Health.jpg`,
  ],
  defence: [
    "/images/shooting.jpg",
    `${L}/SHOOTING-scaled-e1734526935696.jpg`,
    `${L}/Mountaineering-1-scaled-r1q1be3p2xkzz13w71g3mo9yey4xocg57rq4k7cb8g.jpg`,
  ],
  day: [
    `${L}/Day-in-the-life-1-scaled.jpg`,
    `${L}/day-in-the-life-3-scaled-r1q2wr745y3yibs88c3gap5nihecfd6ffozvx4adi8.jpg`,
    "/images/outside.jpg",
    "/images/yoga.jpg",
    `${L}/FARM-1-scaled.jpg`,
  ],
  admissions: [
    `${L}/SB-08457-scaled.jpeg`,
    `${L}/SB-08463-scaled.jpg`,
    "/images/campus-hero.jpg",
    `${L}/Dalhousie-School.jpeg`,
  ],
  campus: [
    `${L}/About-Us-Chandigarh-Campus-2-scaled.jpg`,
    `${L}/Chandigarh-Outside-the-classroom-scaled.jpg`,
    `${L}/Dalhousie-Outside-the-classroom-1.jpg`,
    "/images/campus-wide.jpg",
  ],
} as const;

const GENERAL = [
  `${L}/Dalhousie-Outside-the-classroom-1.jpg`,
  `${L}/Copy-of-DPS-5-scaled.jpg`,
  "/images/campus-wide.jpg",
  `${L}/Day-in-the-life-1-scaled.jpg`,
  `${L}/Inside-The-Classroom.jpg`,
  "/images/aerial.jpg",
];

const TOPICS: [RegExp, readonly string[]][] = [
  [/defence|uniform|serve|service|bearing|nda|ssb|cadet/i, T.defence],
  [/residential|boarding|house|dorm|hostel|dining|weekend|prep time/i, T.residential],
  [/sport|fitness|physical|athlet|movement|stronger|squad|conditioning/i, T.sport],
  [/confidence|voice|speak|stage|debate|perform|persuade|communicat|leader/i, T.voice],
  [/care|pastoral|wellbeing|emotional|mentor|teacher|people|parent|known|support/i, T.care],
  [/admission|enquir|apply|visit|register|fee|process|document|step \d/i, T.admissions],
  [/mountain|himalay|outdoor|adventure|terrain|nature|distraction/i, T.outdoors],
  [/campus|chandigarh|environment|two ways|experiences/i, T.campus],
  [/day|rhythm|routine|morning|rest|responsib|independen|life code|habit/i, T.day],
  [/academic|classroom|learn|study|concept|exam|board|curriculum|subject|report|growth|progress|proof|measure/i, T.classroom],
];

/* Every photograph the picker can reach, in one list. A twelve-block page
   exhausts a six-image topic pool and then the general list, and the old
   fallback returned the same file every time after that: the preparation
   system showed one photograph twice. */
const CATALOGUE: string[] = Array.from(
  new Set([...Object.values(T).flat(), ...GENERAL]),
);

/** A photograph chosen from the section's own words, unique within a page. */
export function imageFor(text: string, used: Set<string>): string {
  const take = (pool: readonly string[]) => pool.find((p) => !used.has(p));

  for (const [re, pool] of TOPICS) {
    if (!re.test(text)) continue;
    const hit = take(pool);
    if (hit) {
      used.add(hit);
      return hit;
    }
  }
  /* Topic exhausted: widen to the general set, then to everything, so a long
     page keeps finding a photograph it has not already used. */
  const wider = take(GENERAL) ?? take(CATALOGUE) ?? CATALOGUE[used.size % CATALOGUE.length];
  used.add(wider);
  return wider;
}
