import type { PageCopy } from "./types";
import { img } from "../images";

/* Pages 38 to 44 of Website Copy Draft 2: about, heritage, people, stories,
   alumni, policies and contact. */

export const about: PageCopy = {
  slug: "/about",
  nav: "About Dalhousie",
  kicker: "Dalhousie Public School",
  title: "A complete environment",
  emphasis: "for growth.",
  subhead:
    "Dalhousie Public School prepares the whole child for the whole future through a better-designed day, a visible preparation system and two distinct campus experiences.",
  primary: "Explore Our Campuses",
  secondary: "Contact Us",
  image: img.aboutHero,
  image2: img.aboutSplit,
  closeEyebrow: "The institution",
  pulls: [
    {
      slot: "grid",
      line: "A promise is only as good as the day that delivers it. Ours is published in full.",
      label: "Explore The Dalhousie Day",
      alt: "Explore the Preparation System",
    },
  ],
  meta: {
    title: "About Dalhousie Public School",
    description:
      "The whole-child philosophy, the Dalhousie Day, the seven-pathway Preparation System, two campuses and a school established in 1970.",
  },
  blocks: [
    {
      h: "The whole-child philosophy",
      p: [
        "Academics, preparation, sport, confidence, responsibility, residential life and character are not separate promises. They are connected parts of one growth journey.",
      ],
    },
    {
      h: "The Dalhousie Day",
      p: [
        "The designed rhythm brings learning, preparation, movement, communication, mentoring, care, rest and responsibility together.",
      ],
    },
    {
      h: "The Dalhousie Preparation System",
      p: [
        "Seven pathways give clear names and proof to the School's approach: Competitive Edge, Defence Pathway, Sports Pathway, Confidence Code, Life Code, Residential Advantage and the Whole Child Report.",
      ],
    },
    {
      h: "One Dalhousie. Two ways to grow.",
      p: [
        "The Mountain Campus and the Modern Campus share one philosophy while serving different parent needs and student journeys.",
      ],
    },
    {
      h: "A school established in 1970",
      p: [
        "Dalhousie's heritage is a living foundation: a story of how the School has evolved while remaining rooted in character, care and complete preparation.",
      ],
    },
    {
      h: "Leadership and people",
      p: [
        "Meet the people responsible for academic direction, campus life, care, administration and the daily experience of students.",
      ],
    },
    {
      h: "Institutional information",
      p: [
        "Approved affiliations, governance information, contacts and statutory details are available clearly, while the parent journey remains simple.",
      ],
    },
  ],
};

export const heritage: PageCopy = {
  slug: "/about/heritage",
  nav: "Our Heritage",
  kicker: "Established 1970",
  title: "Rooted in experience.",
  emphasis: "Evolving with purpose.",
  subhead:
    "Dalhousie Public School's heritage is a living foundation, not simply a timeline, but the roots from which the present-day promise has grown.",
  primary: "Explore Our Campuses",
  secondary: "About Dalhousie",
  image: img.heritageHero,
  image2: img.heritageSplit,
  closeEyebrow: "On the record",
  meta: {
    title: "Our Heritage, Dalhousie Public School",
    description:
      "The beginning in 1970, the Himalayan home, the milestones that changed the institution, what remained constant and the New Chandigarh chapter.",
  },
  blocks: [
    {
      h: "The beginning",
      p: [
        "Dalhousie Public School was established in 1970 with a clear educational purpose. Its verified founding story, the people behind it and the need it set out to serve form the opening chapter of the School's journey.",
      ],
    },
    {
      h: "The Himalayan home",
      p: [
        "The original Dalhousie setting shaped the School's character through residential depth, discipline, community, outdoor strength and self-reliance.",
      ],
    },
    {
      h: "Milestones that changed the institution",
      p: [
        "Meaningful milestones trace campus development, academic evolution, leadership chapters, programme introductions and institutional recognition.",
      ],
    },
    {
      h: "What remained constant",
      p: [
        "Across every chapter, the same values endure: care, discipline, character, academic seriousness and the formation of the whole child.",
      ],
    },
    {
      h: "The New Chandigarh chapter",
      p: [
        "New Chandigarh extends the Dalhousie philosophy through a contemporary campus experience built around academic choice, confidence, exposure, sport and flexibility.",
      ],
    },
    {
      h: "Dalhousie today",
      p: [
        "Today, Dalhousie carries one promise across two distinct campus experiences, and continues to prepare the next generation of the whole child for the whole future.",
      ],
    },
    {
      h: "Archival storytelling",
      p: [
        "Every archival image carries an accurate date or period, caption, source and usage permission.",
      ],
    },
  ],
};

export const leadership: PageCopy = {
  slug: "/about/leadership-people",
  nav: "Leadership & People",
  kicker: "The people who guide the Dalhousie experience",
  title: "Leadership is visible in",
  emphasis: "the life of the School.",
  subhead:
    "Parents can understand who leads the institution, who is responsible for each campus and how academic, residential, pastoral and administrative teams work together.",
  primary: "Explore Our Campuses",
  secondary: "Contact Us",
  image: img.leadershipHero,
  image2: img.leadershipSplit,
  closeEyebrow: "About each profile",
  pulls: [
    {
      slot: "grid",
      line: "You will meet these people on a visit, not just on a page.",
      label: "Book a Visit",
      alt: "Contact Us",
    },
  ],
  meta: {
    title: "Leadership & People, Dalhousie Public School",
    description:
      "Institutional leadership, group leadership, campus leadership at Dalhousie and New Chandigarh, faculty and key people, and the leadership philosophy.",
  },
  blocks: [
    {
      h: "Institutional leadership",
      p: [
        "The School's approved governing and management structure provides direction, accountability and continuity across the institution.",
      ],
    },
    {
      h: "Group leadership",
      p: ["Group leadership carries the shared Dalhousie vision, standards and two-campus architecture."],
    },
    {
      h: "Dalhousie Campus leadership",
      p: ["Meet the academic, residential and pastoral leaders responsible for the Mountain Campus."],
    },
    {
      h: "New Chandigarh Campus leadership",
      p: [
        "Meet the leaders responsible for the Modern Campus, its academic stages, student experience and residential or day-boarding models.",
      ],
    },
    {
      h: "Faculty and key people",
      p: [
        "Meet the people who guide the Dalhousie experience. Profiles are organised by campus and department, with concise, current and human introductions.",
      ],
    },
    {
      h: "Leadership philosophy",
      p: [
        "Leadership at Dalhousie is connected by one commitment: the whole child, supported through care, academic seriousness and visible growth.",
      ],
    },
    {
      h: "Profile content",
      p: [
        "Each profile introduces the person's role, campus or department, relevant experience and contribution to the student journey, together with an approved photograph.",
      ],
    },
  ],
};

export const storiesEvents: PageCopy = {
  slug: "/stories-events",
  nav: "Stories & Events",
  kicker: "Dalhousie in action",
  title: "Proof lives in",
  emphasis: "real moments.",
  subhead:
    "Stories and events show the School's philosophy being lived, in classrooms, houses, competitions, performances, service, student growth and the changing rhythm of campus life.",
  primary: "Explore Stories",
  secondary: "View Upcoming Events",
  image: img.storiesHero,
  image2: img.storiesSplit,
  closeEyebrow: "Editorial standards",
  pulls: [
    {
      slot: "grid",
      line: "Stories are the proof. Come and watch one being made.",
      label: "Book a Visit",
    },
  ],
  meta: {
    title: "Stories & Events, Dalhousie Public School",
    description:
      "Featured stories, academic stories, student achievements, campus life, upcoming and past events, filtered by campus, category and date.",
  },
  blocks: [
    {
      h: "Featured stories",
      p: [
        "Featured stories bring forward the strongest current examples of the whole-child promise and the distinct strengths of each campus.",
      ],
    },
    {
      h: "Academic stories",
      p: [
        "Academic stories cover learning, preparation, student work, mentor support, pathways and progress, not only results announcements.",
      ],
    },
    {
      h: "Student achievements",
      p: [
        "Student achievements are shared with the context behind the outcome: the effort, pathway, support and learning that made it possible.",
      ],
    },
    {
      h: "Campus life",
      p: [
        "Real moments from the Dalhousie Day, residential life, sport, Confidence Code, Life Code and community make the story visible.",
      ],
    },
    {
      h: "Upcoming events",
      p: [
        "Every event includes its date, time, campus, venue, intended audience, summary, contact or registration details and current status.",
      ],
    },
    {
      h: "Past events",
      p: [
        "Selected past events remain available as stories, with outcomes, media and links to the programmes they brought to life.",
      ],
    },
    {
      h: "Filters",
      p: [
        "Find stories by campus, category, date or content type, from academics and residential life to sport, confidence, service and events.",
      ],
    },
    {
      h: "Editorial standards",
      p: [
        "Every story is current, accurately captioned and published with the required student consent, making it a reliable window into life at Dalhousie.",
      ],
    },
  ],
};

export const alumni: PageCopy = {
  slug: "/alumni",
  nav: "Alumni",
  kicker: "Where Dalhousie journeys continue",
  title: "The whole-child promise is tested",
  emphasis: "in life beyond school.",
  subhead:
    "Alumni stories can show how discipline, confidence, friendships, responsibility and academic direction continue to shape lives long after the school years.",
  primary: "Explore Alumni Stories",
  secondary: "Share Your Story",
  image: img.alumniHero,
  image2: img.alumniSplit,
  closeEyebrow: "Story standards",
  pulls: [
    {
      slot: "grid",
      line: "If Dalhousie shaped your path, the next generation should hear it from you.",
      label: "Share Your Story",
    },
  ],
  meta: {
    title: "Alumni, Dalhousie Public School",
    description:
      "The Dalhousie alumni community: stories of direction, service and leadership, campus memories, alumni events and how to share your story.",
  },
  blocks: [
    {
      h: "The Dalhousie alumni community",
      p: [
        "The Dalhousie alumni community connects generations of students to the School, its campuses and the values that continue beyond the school years.",
      ],
    },
    {
      h: "Stories of direction",
      p: [
        "Alumni stories trace academic and career journeys with the context that matters: how interests developed, which choices shaped the path and what the individual carried forward from Dalhousie.",
      ],
    },
    {
      h: "Service and leadership",
      p: [
        "Alumni journeys reflect contribution across defence, public service, business, the professions, creative work, community and other fields.",
      ],
    },
    {
      h: "Memories that reveal the School",
      p: [
        "Memories of teachers, houses, routines, friendships, sport, mountains and formative moments make the culture visible.",
      ],
    },
    {
      h: "Alumni events",
      p: [
        "Current reunion, mentoring, speaking and community opportunities give alumni meaningful ways to remain connected and contribute.",
      ],
    },
    {
      h: "Share an alumni story",
      p: [
        "Submit a story with consent and supporting details for verification and editorial review.",
      ],
    },
    {
      h: "Story standards",
      p: [
        "Every alumni story is verified and shared with the required permissions, so memories and achievements remain accurate and respectful.",
      ],
    },
  ],
};

export const policiesDisclosures: PageCopy = {
  slug: "/policies-disclosures",
  nav: "Policies & Disclosures",
  kicker: "Current information. Clearly organised.",
  title: "Find the approved",
  emphasis: "document you need.",
  subhead:
    "Policies, statutory disclosures and admissions documents are searchable, dated and clearly organised, not presented as an undifferentiated list of files.",
  primary: "Search Documents",
  secondary: "Contact the School",
  image: img.policiesHero,
  image2: img.policiesSplit,
  closeEyebrow: "Version control",
  meta: {
    title: "Policies & Disclosures, Dalhousie Public School",
    description:
      "Statutory disclosures, admissions documents, fee-related documents, safeguarding and child protection, the privacy notice and website terms.",
  },
  blocks: [
    {
      h: "Statutory disclosures",
      p: [
        "Statutory disclosures are organised by relevant board, authority and campus, with clear categories and effective dates.",
      ],
    },
    {
      h: "Admissions documents",
      p: [
        "Admissions documents include the approved process, forms, eligibility, required documents and the current prospectus where relevant.",
      ],
    },
    {
      h: "Fee-related documents",
      p: [
        "Fee schedules, refund and withdrawal terms, and related policies are available through the relevant document category.",
      ],
    },
    {
      h: "Safeguarding and child protection",
      p: [
        "Current safeguarding and child-protection policies are available with approved reporting contacts where appropriate.",
      ],
    },
    {
      h: "Privacy notice",
      p: [
        "The privacy notice explains how enquiry, application, website and student or parent data is collected and used, together with contact routes for questions.",
      ],
    },
    {
      h: "Website terms and cookies",
      p: ["Website terms, cookie information and consent controls are available in one clear place."],
    },
    {
      h: "Document information",
      p: [
        "Every record includes a title, category, campus, version, effective date, file, status and last-updated date.",
      ],
    },
    {
      h: "Archive and replacement",
      p: [
        "Current documents remain separate from superseded versions, with a controlled archive where required.",
      ],
    },
  ],
};

export const contact: PageCopy = {
  slug: "/contact",
  nav: "Contact Us",
  kicker: "Reach the right Dalhousie team",
  title: "Choose the campus or",
  emphasis: "purpose of your enquiry.",
  subhead:
    "Use the contact routes below for admissions, campus information, policies or general School communication.",
  primary: "Contact a Campus",
  secondary: "Book a Visit",
  image: img.contactHero,
  image2: img.contactSplit,
  closeEyebrow: "Privacy",
  meta: {
    title: "Contact Us, Dalhousie Public School",
    description:
      "Group contact, Dalhousie Campus and New Chandigarh Campus addresses, admissions routing, department contacts and a general enquiry form.",
  },
  blocks: [],
};

export const utilityPages = [
  about,
  heritage,
  leadership,
  storiesEvents,
  alumni,
  policiesDisclosures,
  contact,
];
