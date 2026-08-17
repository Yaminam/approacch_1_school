/* Content for The Dalhousie Difference, as supplied in the design brief.

   This page is authored rather than composed from the copy deck: the brief
   specifies section-by-section copy (five pillars, seven distinctions with
   their bullet lists, eight experience cards) that the deck does not carry.
   Keeping it in one file means the words stay editable without touching the
   composition. */

const L = "/images/library";

export const hero = {
  breadcrumb: "The Dalhousie Difference",
  title: "The Dalhousie Difference",
  eyebrow: "Not more. More meaningful.",
  body: [
    "Dalhousie does not try to be more of the same.",
    "We do fewer things, but we do them with more depth, more connection and more purpose.",
  ],
  primary: { label: "Book a Dalhousie Visit", href: "/admissions/book-a-visit" },
  secondary: { label: "Explore our philosophy", href: "/preparation-system" },
  image: `${L}/DJI_0205-1-1.jpg`,
};

export const philosophy = {
  title: "We believe childhood is not a rehearsal.",
  titleTail: "It is the",
  emphasis: "foundation.",
  body: [
    "Marks matter. But so do manners.",
    "Preparation matters. But so does perspective.",
    "Independence matters. But so does care.",
    "At Dalhousie, every part of the child is noticed, nurtured and prepared for the future.",
  ],
  pillars: [
    {
      icon: "child" as const,
      title: "Whole child philosophy",
      body: "We prepare every dimension of a child's growth, not just academic outcomes.",
    },
    {
      icon: "compass" as const,
      title: "One connected environment",
      body: "Learning, preparation, sport, responsibility, community and rest come together.",
    },
    {
      icon: "book" as const,
      title: "Purposeful preparation",
      body: "Structured pathways that build capability, clarity and confidence.",
    },
    {
      icon: "people" as const,
      title: "People who stay",
      body: "Teachers, mentors and house parents who know children well.",
    },
    {
      icon: "chart" as const,
      title: "Growth that is measured",
      body: "Academic progress alongside confidence, character, fitness and responsibility.",
    },
  ],
};

export const distinctions = {
  eyebrow: "Seven distinctions that make Dalhousie different",
  title: "A more complete school experience.",
  body: "These seven distinctions shape daily life at Dalhousie. Together, they create a stronger foundation for the future.",
  items: [
    {
      title: "The whole child is the focus",
      points: ["Academic", "Physical", "Emotional", "Social", "Character", "Spiritual", "Practical"],
      note: "All growth areas matter equally.",
    },
    {
      title: "Preparation is built-in, not added",
      points: [
        "Competitive Preparation",
        "Concept Strengthening",
        "Doubt Support",
        "Mentoring",
        "Progress Tracking",
      ],
      note: "Children prepare seriously without losing childhood.",
    },
    {
      title: "Sport is part of education",
      points: ["Fitness", "Teamwork", "Resilience", "Leadership", "Discipline"],
      note: "Every child plays. Every child grows.",
    },
    {
      title: "Confidence is developed daily",
      points: ["Speaking", "Presenting", "Performing", "Debating", "Leading"],
      note: "Every child learns to express and lead.",
    },
    {
      title: "Life skills are taught, not assumed",
      points: [
        "Self-Management",
        "Responsibility",
        "Decision-Making",
        "Digital Discipline",
        "Service",
      ],
      note: "Skills that shape independence.",
    },
    {
      title: "Residential life builds character",
      points: ["Independence", "Community", "Belonging", "Routine", "Mentorship"],
      note: "A home where children become their best.",
    },
    {
      title: "Growth is measured fully",
      points: [
        "Academics",
        "Fitness",
        "Confidence",
        "Responsibility",
        "Character",
        "Mentor Feedback",
      ],
      note: "We report more than marks. We report growth.",
    },
  ],
};

export type ExperienceCard = {
  title: string;
  body: string;
  cta: { label: string; href: string };
  image: string;
};

export const experience: ExperienceCard[] = [
  {
    title: "A school day that works",
    body: "The Dalhousie Day brings academics, preparation, sport, responsibility and rest into a more coherent rhythm.",
    cta: { label: "Explore the Dalhousie Day", href: "/the-dalhousie-day" },
    image: `${L}/Day-in-the-life-1-scaled.jpg`,
  },
  {
    title: "Character in action",
    body: "Through sport, houses, service, responsibility and leadership, children develop strength that remains with them for life.",
    cta: { label: "Explore student life", href: "/campuses/dalhousie/student-life" },
    image: "/images/basketball.jpg",
  },
  {
    title: "Two campuses. One philosophy.",
    body: "The Mountain Campus and the Modern Campus offer two distinct environments guided by the same philosophy.",
    cta: { label: "Explore our campuses", href: "/campuses" },
    image: "/images/aerial.jpg",
  },
  {
    title: "Prepared for many paths",
    body: "Dalhousie prepares children for academic, professional and personal pathways, in India and the world.",
    cta: { label: "Explore pathways", href: "/preparation-system" },
    image: `${L}/Inside-The-Classroom.jpg`,
  },
  {
    title: "Teachers who know and stay",
    body: "Our teachers stay. They know the child. They guide with care and expectation.",
    cta: { label: "Meet our educators", href: "/about/leadership-people" },
    image: `${L}/pastoral-2-scaled.jpg`,
  },
  {
    title: "A report that tells the full story",
    body: "The Dalhousie Whole Child Report shows academic progress alongside confidence, fitness, responsibility and more.",
    cta: { label: "Explore the Whole Child Report", href: "/whole-child-report" },
    image: `${L}/nurturing.jpg`,
  },
  {
    title: "Care that allows children to grow",
    body: "Children become independent because they are supported while learning how. Care is not about comfort. It is about helping a child become capable.",
    cta: { label: "Explore pastoral care", href: "/pastoral-care" },
    image: `${L}/Pastoral-Care.jpg`,
  },
  {
    title: "The difference is visible in everyday moments",
    body: "It appears in small moments repeated over time. In a child's choices. In their habits. In their strength. In their character.",
    cta: { label: "Explore the Dalhousie Difference", href: "/the-dalhousie-day" },
    image: "/images/campus-wide.jpg",
  },
];

export const finalCta = {
  title: [
    "The Dalhousie Difference is not meant to exist in words.",
    "It should be visible in the experience.",
  ],
  body: "Visit the school. See the day. Meet the people. Understand the environment.",
  primary: { label: "Book a Dalhousie Visit", href: "/admissions/book-a-visit" },
  secondary: { label: "See the Preparation System", href: "/preparation-system" },
};
