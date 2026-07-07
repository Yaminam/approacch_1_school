// Central content for the Dalhousie Public School site.
// Extracted from dalhousiepublicschool.com and structured to the redesign brief.

export const school = {
  name: "Dalhousie Public School",
  short: "Dalhousie",
  tagline: "Exceptional by Nature",
  established: 1970,
  years: 54,
  phone: "+91 94183 81111",
  phoneRaw: "919418381111",
  email: "info@dpsdalhousie.com",
  emailChd: "infochd@dpsdalhousie.com",
  instagram: "https://www.instagram.com/_dalhousiepublicschool",
  facebook: "https://www.facebook.com/dpsdalhousie1970",
};

export const whatsappHref = (msg: string) =>
  `https://wa.me/${school.phoneRaw}?text=${encodeURIComponent(msg)}`;

export const stats = [
  { value: "54", label: "Years of legacy", sub: "Since 1970" },
  { value: "7,000 ft", label: "In the alpine", sub: "Above sea level" },
  { value: "102", label: "Cities represented", sub: "Across India" },
  { value: "10", label: "Countries", sub: "A global family" },
  { value: "50", label: "Smart classrooms", sub: "Ultra-modern" },
];

export const nav: { label: string; href: string }[] = [
  { label: "The Difference", href: "/the-dalhousie-difference" },
  { label: "Academics", href: "/academics" },
  { label: "Campuses", href: "/campuses" },
  { label: "Life", href: "/student-life" },
  { label: "Admissions", href: "/admissions" },
  { label: "Visit Us", href: "/visit-us" },
];

// Grouped navigation for the mega-menu / footer.
export const navGroups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "The School",
    links: [
      { label: "The Dalhousie Difference", href: "/the-dalhousie-difference" },
      { label: "The Dalhousie Day", href: "/the-dalhousie-day" },
      { label: "About & Heritage", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Policies", href: "/policies" },
    ],
  },
  {
    title: "Campuses",
    links: [
      { label: "Dalhousie Campus", href: "/campuses/dalhousie" },
      { label: "New Chandigarh Campus", href: "/campuses/new-chandigarh" },
    ],
  },
  {
    title: "Preparation System",
    links: [
      { label: "Overview", href: "/preparation-system" },
      { label: "Academics & Pathways", href: "/academics" },
      { label: "Defence Pathway", href: "/defence-pathway" },
      { label: "Residential Life", href: "/residential-life" },
      { label: "Student Life", href: "/student-life" },
      { label: "Pastoral Care / Parent Connect", href: "/pastoral-care" },
      { label: "Whole Child Report", href: "/whole-child-report" },
    ],
  },
  {
    title: "Signature",
    links: [
      { label: "Competitive Edge", href: "/competitive-edge" },
      { label: "Sports Pathway", href: "/sports-pathway" },
      { label: "Confidence Code", href: "/confidence-code" },
      { label: "Life Code", href: "/life-code" },
      { label: "Residential Advantage", href: "/residential-advantage" },
      { label: "Parent Connect", href: "/parent-connect" },
    ],
  },
  {
    title: "Join Us",
    links: [
      { label: "Admissions", href: "/admissions" },
      { label: "Fees", href: "/fees" },
      { label: "FAQs", href: "/faqs" },
      { label: "Apply Now", href: "/apply" },
      { label: "Prospectus", href: "/prospectus" },
      { label: "Visit Us", href: "/visit-us" },
    ],
  },
];

export const differences = [
  {
    title: "Inside the Classroom",
    body: "A CBSE curriculum from LKG to XII, taught in 50 ultra-modern smart classrooms where academic rigour meets genuine curiosity.",
    accent: "brass",
  },
  {
    title: "Outside the Classroom",
    body: "Mountaineering, trekking and navigation, shooting, martial arts and sport, the mountain itself becomes the second teacher.",
    accent: "clay",
  },
  {
    title: "Beyond the Classroom",
    body: "Residential life that grows independence, character and confidence, the qualities a report card never quite captures.",
    accent: "forest",
  },
];

export const daySchedule = [
  { time: "6:00", title: "Mountain morning", body: "Fresh alpine air, a run or yoga as the valley wakes." },
  { time: "8:15", title: "Into the classroom", body: "Smart classrooms, small groups, real attention." },
  { time: "13:30", title: "Fuel & friends", body: "Nourishing meals and unhurried time together." },
  { time: "15:30", title: "Outside the classroom", body: "Sport, shooting, theatre, music, the debate society." },
  { time: "18:00", title: "Prep & pastoral", body: "Guided study with house parents close at hand." },
  { time: "21:00", title: "House & home", body: "Wind down in a house that feels like family." },
];

export const activities = [
  { title: "Shooting", img: "/images/shooting.jpg" },
  { title: "Basketball", img: "/images/basketball.jpg" },
  { title: "Debate Society", img: "/images/debate.jpg" },
  { title: "Music", img: "/images/music.jpg" },
  { title: "Theatre", img: "/images/theatre.jpg" },
  { title: "Trekking", img: "/images/trekking.jpg" },
  { title: "Yoga", img: "/images/yoga.jpg" },
  { title: "Strength & Conditioning", img: "/images/gym.jpg" },
];

export const modules = [
  { name: "Confidence Code", body: "A structured character and leadership programme, unique to Dalhousie.", star: true },
  { name: "Life Code", body: "Real-world life skills, taught deliberately, not left to chance.", star: true },
  { name: "Competitive Edge", body: "Boards, olympiads and beyond, the academic proof layer.", star: false },
  { name: "Sports Pathway", body: "A structured route from first try to serious performance.", star: false },
  { name: "Defence Pathway", body: "A dedicated track for children who dream in uniform.", star: true },
  { name: "Whole Child Report", body: "Signature reporting parents can't get anywhere else.", star: true },
  { name: "Residential Advantage", body: "Why boarding here changes the outcome, not just the address.", star: false },
  { name: "Parent Connect", body: "You are far away, never out of the loop.", star: false },
];

export const campuses = [
  {
    id: "dalhousie",
    name: "Dalhousie Campus",
    kind: "CBSE · Full Boarding · The Mountain",
    img: "/images/aerial.jpg",
    blurb:
      "Seven thousand feet up, wrapped in alpine forest. A full CBSE boarding experience where independence, character and lifelong friendships are forged.",
    points: ["CBSE curriculum, LKG to XII", "Full residential boarding", "Mountaineering & the outdoors"],
    email: school.email,
  },
  {
    id: "chandigarh",
    name: "New Chandigarh Campus",
    kind: "CBSE or International · The City",
    img: "/images/chd-hostel.jpg",
    blurb:
      "The same Dalhousie method, closer to the city, with a choice of CBSE or an international IB and Cambridge pathway for families with the world in mind.",
    points: ["Choice of CBSE or IB / Cambridge", "Day & residential options", "Modern city campus"],
    email: school.emailChd,
  },
];

export const testimonial = {
  quote:
    "The foundational learning at Dalhousie shaped how I think, work and lead. You don't fully see it until years later, and then you see it everywhere.",
  name: "Varun Shoor",
  role: "Alumnus & Founder",
};

export const care = [
  { title: "House Parents", body: "Every child belongs to a house led by adults who know them by name." },
  { title: "24-Hour Wellness", body: "On-campus infirmary with trained medical staff, and first-aid stations across campus." },
  { title: "Counselling & Mindfulness", body: "A dedicated counsellor team, plus daily meditation and breathing practice." },
  { title: "Parent Connect", body: "Calling hours and letter-writing keep families close, however far away." },
];

/* ───────────────────────── ADDRESSES & CONTACT ───────────────────────── */

export const contact = {
  dalhousie: {
    name: "Dalhousie Campus",
    email: "info@dpsdalhousie.com",
    phone: "+91 94183 81111",
    address: "GXMP+W46, Dhupguri, Dist. Chamba, Dalhousie, Himachal Pradesh 176304",
  },
  chandigarh: {
    name: "New Chandigarh Campus",
    email: "infochd@dpsdalhousie.com",
    phone: "011 6909 8645",
    address: "Chandigarh-Baddi Road, New Chandigarh, Punjab 140110",
  },
};

/* ───────────────────────── HERITAGE TIMELINE ───────────────────────── */

export const history: { year: string; title: string; body: string }[] = [
  { year: "1970", title: "The first session", body: "The school begins with just 10 students at Moti Tibba, Dalhousie." },
  { year: "1972", title: "Our forever home", body: "Relocation to the present campus and its founding academic facilities." },
  { year: "1986", title: "A soldier turns educator", body: "Dr. (Capt.) G.S. Dhillon joins after the 2 Para Special Forces." },
  { year: "1990", title: "The NCC arrives", body: "The National Cadet Corps is introduced to campus life." },
  { year: "2010", title: "National honours", body: "The National Teacher's Award, presented by the President of India. NASA trips begin." },
  { year: "2014", title: "Tallest flag in Himachal", body: "A 108-ft national flag mast is raised over the campus." },
  { year: "2023", title: "Golden Jubilee", body: "50 years, marked with the Chief of Air Staff and a new indoor shooting range." },
  { year: "2025", title: "New Chandigarh opens", body: "A second campus, carrying the same nature-centred philosophy to the city." },
];

export const values = [
  "Inquirers", "Caring", "Creative & critical thinkers", "Reflective",
  "Communicative", "Balanced", "Principled", "Open-minded",
  "Knowledgeable", "Confident", "Responsible", "Risk-takers",
];

/* ───────────────────────── A DAY (real routine) ───────────────────────── */

export const routine: { time: string; title: string }[] = [
  { time: "5:30", title: "Wake-up" },
  { time: "6:00", title: "Physical training" },
  { time: "7:15", title: "Extra coaching" },
  { time: "8:30", title: "Breakfast" },
  { time: "9:00", title: "Assembly & lessons" },
  { time: "11:15", title: "Fruit break" },
  { time: "12:50", title: "Lunch" },
  { time: "15:20", title: "School closes" },
  { time: "16:00", title: "Game time" },
  { time: "17:20", title: "Milk time" },
  { time: "17:40", title: "Prep" },
  { time: "19:30", title: "Dinner" },
  { time: "20:30", title: "Recreation" },
  { time: "21:30", title: "Lights out" },
];

/* ───────────────────────── ACADEMICS ───────────────────────── */

export const academicStages: { stage: string; ages: string; body: string }[] = [
  { stage: "Toddlers", ages: "Age 2+", body: "Montessori materials, purposeful movement and hands-on discovery, plus farm visits and vegetable gardening." },
  { stage: "Early Years", ages: "Age 3-5", body: "A play-based, inquiry-driven programme (IB PYP candidate) building language, motor skills and belonging." },
  { stage: "Primary School", ages: "Age 6+", body: "The IB Learner Profile in action, academics, arts, sport and wellbeing, with real student agency." },
  { stage: "Middle School", ages: "Grades 6-8", body: "A choice of Cambridge Lower Secondary or CBSE, with global perspectives, computing and languages." },
  { stage: "Senior School", ages: "Grades 9-12", body: "CBSE with rigorous board preparation, and IGCSE / IB Diploma pathways on the horizon." },
];

/* ───────────────────────── RESIDENTIAL ───────────────────────── */

export const boardingFormats: { name: string; body: string }[] = [
  { name: "Full Boarding", body: "Dalhousie's traditional approach, students live on campus full-time, fully immersed." },
  { name: "Weekly Boarding", body: "Weekly boarders return home at weekends, marrying our pastoral care with your own." },
  { name: "Day Boarding", body: "Day boarders stay for extracurriculars and meals, sharing the full Dalhousie experience." },
];

/* ───────────────────────── ADMISSIONS ───────────────────────── */

export const admissionSteps: { step: string; title: string; body: string }[] = [
  { step: "01", title: "Register", body: "Complete the registration form for your chosen campus and grade (LKG to XII)." },
  { step: "02", title: "Assessment", body: "Pre-prep is assessed on curiosity and engagement; Grades III-X sit an entrance exam." },
  { step: "03", title: "A day on campus", body: "Shortlisted children spend a day with us across six activities, character over cramming." },
  { step: "04", title: "Offer & enrol", body: "Receive your offer and confirm your child's place in the Dalhousie family." },
];

export const admissionDocs = [
  "Attested birth certificate",
  "Aadhar card (student and parents)",
  "Previous report cards (Grade 1 onward)",
  "Transfer certificate with PEN & APAAR ID",
  "Passport-size photographs",
];

export const concessions: { label: string; detail: string }[] = [
  { label: "Armed forces", detail: "10% concession for children of armed-forces parents." },
  { label: "Siblings", detail: "10-15% concession from the second child onward." },
  { label: "Single payment", detail: "Up to 5% off when annual tuition is paid upfront." },
];

/* ───────────────────────── FEES (public figures, ₹) ───────────────────────── */

export const feeNote =
  "Indicative annual figures in ₹, as published for 2025-26. Uniforms, equipment and transport are charged separately. Please confirm current figures with the admissions office.";

export const feeTables: {
  campus: string;
  kind: string;
  rows: { grade: string; tuition: string; boarding: string }[];
}[] = [
  {
    campus: "Dalhousie Campus",
    kind: "Residential (Board & Lodging)",
    rows: [
      { grade: "KG - Grade 4", tuition: "60,858", boarding: "3,50,892" },
      { grade: "Grade 5 - 10", tuition: "62,715", boarding: "3,52,695" },
      { grade: "Grade 11 - 12", tuition: "1,08,840", boarding: "4,22,790" },
    ],
  },
  {
    campus: "New Chandigarh Campus",
    kind: "Boarding",
    rows: [
      { grade: "Pre-Nursery - LKG", tuition: "1,14,231", boarding: "4,69,212" },
      { grade: "UKG - Grade 8", tuition: "2,10,354", boarding: "4,69,212" },
      { grade: "Grade 9 - 10", tuition: "2,22,000", boarding: "5,12,232" },
      { grade: "Grade 11 - 12", tuition: "2,76,000", boarding: "5,12,232" },
    ],
  },
  {
    campus: "New Chandigarh Campus",
    kind: "Day Boarding",
    rows: [
      { grade: "Pre-Nursery - LKG", tuition: "1,14,231", boarding: "40,000" },
      { grade: "UKG - Grade 8", tuition: "2,10,354", boarding: "40,000" },
      { grade: "Grade 9 - 10", tuition: "2,22,000", boarding: "40,000" },
      { grade: "Grade 11 - 12", tuition: "2,76,000", boarding: "40,000" },
    ],
  },
];

/* ───────────────────────── FAQs ───────────────────────── */

export const faqs: { q: string; a: string }[] = [
  { q: "What curriculum do you follow?", a: "The Dalhousie campus follows CBSE (LKG-XII). New Chandigarh offers a choice of CBSE or an international track, with IGCSE and the IB Diploma planned." },
  { q: "What boarding options are there?", a: "Full boarding, weekly boarding and day boarding, so families can choose the level of immersion that suits their child." },
  { q: "How old must my child be?", a: "Age is taken as on 31 March of the admission year: Toddlers 2+, EY1 3+, EY2 4+, EY3 5+, and so on." },
  { q: "How does admission work?", a: "Register, then an assessment (entrance exam for Grades III-X), a day on campus across six activities, and finally your offer." },
  { q: "Are there concessions for armed-forces families?", a: "Yes. We warmly welcome children of armed-forces families and offer them a concession. Please ask the admissions office for details." },
  { q: "Can I visit before applying?", a: "Absolutely. Booking a campus visit is the best first step, use the Visit Us page or message us on WhatsApp." },
];

/* ───────────────────────── NEW CHANDIGARH EXTRAS ───────────────────────── */

/* ───────────────────────── JOURNEY OF EDUCATION ───────────────────────── */

export const journey: { stage: string; ages: string; body: string; img: string }[] = [
  { stage: "Toddlers", ages: "Age 2+", body: "First discoveries through Montessori play, farm visits and gardening, in a calm and respectful setting.", img: "/images/outside.jpg" },
  { stage: "Early Years", ages: "Age 3 to 5", body: "A play-based, inquiry-driven start that builds language, motor skills and a real sense of belonging.", img: "/images/music.jpg" },
  { stage: "Primary", ages: "Age 6+", body: "The IB Learner Profile in action, weaving academics, arts, sport and wellbeing with everyday curiosity.", img: "/images/debate.jpg" },
  { stage: "Middle School", ages: "Grades 6 to 8", body: "A choice of Cambridge or CBSE, global perspectives, languages, and the confidence to speak up.", img: "/images/basketball.jpg" },
  { stage: "Senior School", ages: "Grades 9 to 12", body: "Rigorous board preparation and clear pathways to the universities our students aim for.", img: "/images/campus-hero.jpg" },
  { stage: "Beyond Dalhousie", ages: "For life", body: "Alumni who lead, build and serve across 102 cities and ten countries, and still call this home.", img: "/images/aerial.jpg" },
];

/* ───────────────────────── HOW LEARNERS GROW ───────────────────────── */

export const learnerValues: { title: string; body: string }[] = [
  { title: "Curious", body: "Inquirers who ask better questions and chase the answers." },
  { title: "Caring", body: "Kind, principled, and quick to look out for one another." },
  { title: "Confident", body: "At ease on a stage, on a summit, or in a debate." },
  { title: "Balanced", body: "Strong in body and mind, and well rested in between." },
  { title: "Open-minded", body: "At home in a community drawn from ten countries." },
  { title: "Resilient", body: "Risk-takers who have learned to pick themselves back up." },
];

export const chandigarhFeatures: { title: string; body: string; img: string }[] = [
  { title: "Equestrian Centre", body: "Horse riding, polo and show jumping from beginner to advanced, building confidence and discipline.", img: "/images/gallery/equestrian.jpg" },
  { title: "Golfing Greens", body: "Professionally designed greens where students learn precision, patience and strategy.", img: "/images/gallery/golf.jpg" },
  { title: "Farm to Table", body: "From seed to plate, sustainable farming, a petting zoo, and food that feeds the school kitchen.", img: "/images/gallery/farm.jpg" },
];

/* ───────────────────────── PER-CAMPUS DETAIL ─────────────────────────
   Extracted from the campus-specific pages on dalhousiepublicschool.com. */

type Item = { title: string; body: string };
type Routine = { time: string; title: string };

export type CampusDetail = {
  academicsTitle: string;
  academicsBody: string;
  academicsPoints: string[];
  sports: string[];
  sportsNote: string;
  routine: Routine[];
  routineLabel: string;
  pastoral: Item[];
  outdoor: Item[];
  facilities: string[];
  extra?: { title: string; intro: string; items: Item[] };
};

export const campusDetail: Record<"dalhousie" | "chandigarh", CampusDetail> = {
  dalhousie: {
    academicsTitle: "A rigorous CBSE education, in the clean mountain air.",
    academicsBody:
      "The Dalhousie campus follows the CBSE curriculum from LKG to Class XII, balancing academic rigour with character, leadership and experiential learning. Physical education spans taekwondo, yoga and polo, and the mountains themselves host excursions that test and inspire.",
    academicsPoints: ["CBSE, LKG to Class XII", "50 ultra-modern smart classrooms", "Excursions from the Himalayas to NASA"],
    sports: ["Rifle & Pistol Shooting", "Basketball", "Football", "Table Tennis", "Badminton", "Martial Arts", "Trekking", "Yoga", "Power Play Gym"],
    sportsNote: "Our marksmen have earned national recognition in rifle and pistol shooting.",
    routine,
    routineLabel: "A middle-school day, from wake-up to lights out.",
    pastoral: [
      { title: "House parents", body: "Housemasters and mistresses stay with students throughout their time here." },
      { title: "Calling hours & letters", body: "Regular contact keeps families close across the miles." },
      { title: "24-hour infirmary", body: "On-campus medical staff and first-aid stations across campus." },
      { title: "Healthy catering", body: "Professionally planned meals for healthy bodies and ready minds." },
    ],
    outdoor: [
      { title: "Mountaineering", body: "Treks and expeditions build endurance, teamwork and resilience under expert guidance." },
      { title: "Nature camps", body: "Experiential learning in the wild, well beyond the classroom walls." },
      { title: "International excursions", body: "Broadening horizons, with trips as far afield as NASA." },
    ],
    facilities: ["50 smart classrooms", "Modern hostels", "24-hour infirmary", "Indoor shooting range", "Power Play gym", "Coding & renewable energy"],
  },
  chandigarh: {
    academicsTitle: "One campus, two academic paths.",
    academicsBody:
      "New Chandigarh offers a genuine choice: a structured CBSE route for Indian universities, or an international IB and Cambridge pathway for study abroad. As the school puts it, students do not all share one destination, so they do not all follow the same path. The campus reports a 100% pass rate across its programmes.",
    academicsPoints: ["Choice of CBSE or IB / Cambridge", "Pre-Nursery to Class XII", "A reported 100% pass rate"],
    sports: ["Football", "Cricket", "Tennis", "Golf", "Horse Riding", "10m Pistol & Air Rifle", "Athletics", "Yoga", "Music", "Drama"],
    sportsNote: "Sports are treated as a language here, learned as readily on horseback as on the football field.",
    routine: [
      { time: "5:40", title: "Wake up & fall in" },
      { time: "6:00", title: "Nature-based activity" },
      { time: "7:00", title: "Preparation" },
      { time: "7:45", title: "Breakfast" },
      { time: "8:15", title: "Assembly & day boarders arrive" },
      { time: "8:30", title: "Core subjects" },
      { time: "11:00", title: "Creative & skill-based learning" },
      { time: "12:30", title: "Lunch" },
      { time: "13:00", title: "Research-based learning" },
      { time: "14:45", title: "Individual enrichment" },
      { time: "15:45", title: "Sports" },
      { time: "17:00", title: "Prep" },
      { time: "18:00", title: "Outdoor activity" },
      { time: "19:30", title: "Dinner" },
      { time: "20:30", title: "Common room" },
      { time: "21:30", title: "Lights out" },
    ],
    routineLabel: "A middle-school day, built around nature and enquiry.",
    pastoral: [
      { title: "Farm to table", body: "Organic produce from the Farm for Future initiative feeds the school kitchen." },
      { title: "On-campus infirmary", body: "Trained medical staff, health screenings and first-aid stations." },
      { title: "Counsellor team", body: "Support, plus workshops on emotional intelligence and self-care." },
      { title: "Mindfulness", body: "Daily meditation and breathing practice built into the routine." },
      { title: "Green campus", body: "Solar energy, rainwater harvesting and waste segregation." },
      { title: "House parents", body: "Housemasters and mistresses who stay with your child." },
    ],
    outdoor: [
      { title: "Learning by the Lake", body: "A man-made lake for studying water systems and ecological diversity." },
      { title: "The Garden of Learning", body: "Flower and butterfly gardening, horticulture and pollination." },
      { title: "Organic farming", body: "Hands-on sustainable living, and the balance of nature." },
      { title: "Respect for food", body: "Growing, harvesting and preparing, with gratitude and mindful consumption." },
    ],
    facilities: ["Equestrian centre", "Golfing greens", "Farm to table", "Learning lake", "Green campus", "Day & residential"],
    extra: {
      title: "Connecting the community",
      intro: "New Chandigarh keeps families close with two dedicated platforms.",
      items: [
        { title: "Toddle", body: "The PYP learning platform, a bridge between school and home with reflections, evidence and feedback." },
        { title: "SchoolPad", body: "Circulars, transport updates and two-way communication, all in real time." },
      ],
    },
  },
};

/* ───────────────────────── POLICIES ─────────────────────────
   Condensed faithfully from the policy pages on dalhousiepublicschool.com. */

export type PolicySection = { heading: string; body?: string; points?: string[] };
export type Policy = { slug: string; title: string; summary: string; sections: PolicySection[] };

export const policies: Policy[] = [
  {
    slug: "language",
    title: "Language Policy",
    summary:
      "How we nurture confident, articulate and globally minded learners, prizing English while celebrating home languages such as Hindi and Punjabi.",
    sections: [
      {
        heading: "Medium of instruction",
        points: [
          "English is the primary language across all classes",
          "Punjabi is a mandatory second language from Grade 1",
          "Hindi is introduced from EY3 onward",
          "French and Spanish are optional from Grade 4",
        ],
      },
      {
        heading: "Our approach",
        points: [
          "Every teacher is a language teacher",
          "Translanguaging supports our youngest learners",
          "Authentic contexts and print-rich classrooms",
          "Literacy across reading, writing, speaking, listening, viewing and presenting",
        ],
      },
      {
        heading: "How we support learners",
        points: [
          "Classroom-based intervention, without withdrawal",
          "A multilingual library collection",
          "Technology for digital literacy",
          "Continuous, growth-oriented assessment",
        ],
      },
      {
        heading: "A shared responsibility",
        points: [
          "The school provides resources and identifies needs",
          "Teachers model language and integrate subject vocabulary",
          "Parents keep home languages strong",
          "Students communicate in English outside language lessons",
        ],
      },
    ],
  },
  {
    slug: "academic-integrity",
    title: "Academic Integrity Policy",
    summary:
      "The values and habits that keep learning honest, guided by five principles and clear, age-appropriate expectations.",
    sections: [
      { heading: "Five values", points: ["Honesty", "Trust", "Fairness", "Respect", "Responsibility"] },
      {
        heading: "What we guard against",
        points: [
          "Plagiarism",
          "Collusion",
          "Duplication of work",
          "Fabrication of information or data",
          "Misuse of technology, including unacknowledged AI content",
        ],
      },
      {
        heading: "Using AI honestly",
        points: [
          "AI may assist learning, not replace it",
          "Acknowledge AI use transparently",
          "Cite tools, with prompts and dates",
          "Never submit AI content as original work",
        ],
      },
      {
        heading: "A shared responsibility",
        points: [
          "Students submit authentic, properly cited work",
          "Teachers model integrity and design authentic assessment",
          "Parents support ethical learning, without completing work",
          "The school applies consequences fairly and consistently",
        ],
      },
    ],
  },
  {
    slug: "inclusion",
    title: "Inclusion Policy",
    summary:
      "Equitable access for every learner, aligned to India's National Education Policy 2020 and the IB, so difference is celebrated and supported.",
    sections: [
      {
        heading: "Our principles",
        points: [
          "Affirming identity and self-esteem",
          "Valuing prior knowledge",
          "Scaffolding towards independence",
          "High expectations for all, with the right support",
        ],
      },
      {
        heading: "Who we support",
        points: [
          "Specific learning differences, such as dyslexia and dyscalculia",
          "Speech, language and communication needs",
          "ADD, ADHD and behavioural or social-emotional needs",
          "English language learners",
          "Autism spectrum and sensory needs",
        ],
      },
      {
        heading: "How we support",
        points: [
          "Accommodations that give access without lowering expectations",
          "Modifications where grade-level outcomes cannot be met",
          "Individual Education, Development and Behaviour Plans with SMART goals",
          "Universal Design for Learning across the curriculum",
        ],
      },
      {
        heading: "Working together",
        points: [
          "A Learning Diversity Facilitator leads support",
          "Teachers differentiate and coordinate with specialists",
          "Parents share information and reinforce strategies at home",
          "Students take ownership of their learning, with support",
        ],
      },
    ],
  },
  {
    slug: "assessment",
    title: "Assessment Policy",
    summary:
      "Assessment as a continuous, reflective process that sits beside the learner, rather than ranking them.",
    sections: [
      {
        heading: "What we believe",
        body: "The word assessment comes from the Latin assidere, to sit beside. We treat it as a partnership between teacher and student, a dialogue rather than a comparison.",
      },
      {
        heading: "What we assess",
        points: [
          "Conceptual understanding",
          "Knowledge",
          "Approaches to Learning skills",
          "Evidence-based decisions and meaningful action",
          "Learner Profile attributes",
        ],
      },
      {
        heading: "The four dimensions",
        points: [
          "Monitoring, through observation and feedback",
          "Documenting, via portfolios and exhibitions",
          "Measuring, with rubrics and continuums",
          "Reporting, to families",
        ],
      },
      {
        heading: "When we assess",
        points: [
          "Diagnostic, at the start of a unit",
          "Formative, throughout the learning",
          "Summative, at the end of a unit",
          "As-learning, through student reflection",
        ],
      },
      {
        heading: "Reporting home",
        body: "Two terms a year, with learning conferences, three-way goal-setting, parent-teacher meetings and student-led conferences, all shared through the Toddle platform.",
      },
    ],
  },
];

export const prospectusIncludes = [
  "A guide to both campuses, Dalhousie and New Chandigarh",
  "Curriculum and academic pathways",
  "Boarding and residential life",
  "Admissions and the school calendar",
  "Pastoral care, safety and safeguarding",
];

export const prospectusDocs = [
  "Mandatory Disclosures Manual",
  "Student Code of Conduct",
  "Student Wellbeing & Safeguarding",
  "Calendar 2025-26",
];

/* ───────────────────────── HOMEPAGE EXTRAS ───────────────────────── */

export const onlyAt: { title: string; body: string; img: string }[] = [
  { title: "A campus at 7,000 ft", body: "A school set high in the alpine, where the mountain is part of the timetable.", img: "/images/campus-hero.jpg" },
  { title: "Mountaineering & treks", body: "Real expeditions that build endurance, teamwork and quiet grit.", img: "/images/trekking.jpg" },
  { title: "An indoor shooting range", body: "Marksmanship with national recognition in rifle and pistol.", img: "/images/shooting.jpg" },
  { title: "Equestrian & golf", body: "Riding, polo and professional golfing greens at New Chandigarh.", img: "/images/gallery/equestrian.jpg" },
  { title: "Farm to table", body: "Food grown, harvested and cooked by the children who eat it.", img: "/images/gallery/farm.jpg" },
  { title: "The Defence Pathway", body: "A dedicated route for children who dream in uniform.", img: "/images/gym.jpg" },
];

export const headWelcome = {
  name: "Kimmy Dhanoa",
  role: "Principal",
  img: "/images/principal.png",
  quote:
    "We ask ourselves the same question every day: are our children happy, engaged and treated fairly? A school should be a place where every child is known, every voice is heard, and every learner is encouraged to discover their own potential.",
};

export const globalCountries: string[] = [
  "India",
  "Norway",
  "United States",
  "Canada",
  "United Kingdom",
  "Netherlands",
  "Belgium",
  "Ireland",
  "Mauritius",
];

/* ───────────────────────── GALLERY & AFFILIATIONS ───────────────────────── */

export const galleryPhotos: { src: string; alt: string; tall?: boolean }[] = [
  { src: "/images/hero-student.jpg", alt: "A student on a mountain trek", tall: true },
  { src: "/images/gallery/equestrian.jpg", alt: "Equestrian at New Chandigarh" },
  { src: "/images/gallery/mountaineering.jpg", alt: "Mountaineering expedition", tall: true },
  { src: "/images/shooting.jpg", alt: "Rifle shooting practice" },
  { src: "/images/gallery/golf.jpg", alt: "Golf on the greens" },
  { src: "/images/theatre.jpg", alt: "Theatre performance", tall: true },
  { src: "/images/gallery/farm.jpg", alt: "Farm to table learning" },
  { src: "/images/basketball.jpg", alt: "Basketball" },
  { src: "/images/gallery/athletics.jpg", alt: "Athletics", tall: true },
  { src: "/images/debate.jpg", alt: "The debate society" },
  { src: "/images/gallery/music-live.jpg", alt: "Music" },
  { src: "/images/yoga.jpg", alt: "Morning yoga", tall: true },
  { src: "/images/gallery/pastoral.jpg", alt: "Pastoral care" },
  { src: "/images/gallery/campus-chd.jpg", alt: "New Chandigarh campus" },
  { src: "/images/gallery/sports.jpg", alt: "Sport at Dalhousie", tall: true },
  { src: "/images/gallery/wellbeing.jpg", alt: "Health and wellbeing" },
  { src: "/images/aerial.jpg", alt: "Aerial view of the campus" },
  { src: "/images/gallery/chd-sports.jpg", alt: "Sport at New Chandigarh", tall: true },
];

export const affiliations: string[] = [
  "CBSE Affiliated",
  "IB PYP Candidate School",
  "Cambridge Pathway",
  "54 Years of Legacy",
  "Two Himalayan Campuses",
];

/* ───────────────────────── RECOGNITION & FILM ───────────────────────── */

export const milestones: { year: string; title: string; body: string }[] = [
  { year: "2010", title: "National Teacher's Award", body: "Presented to our Chairman by the President of India." },
  { year: "2010", title: "NASA, every year", body: "Annual student trips to the Kennedy Space Center begin." },
  { year: "2013", title: "A visit from the Dalai Lama", body: "His Holiness graces the campus." },
  { year: "2014", title: "Tallest flag in Himachal", body: "A 108-ft national flag raised over the school." },
  { year: "2023", title: "Golden Jubilee", body: "Fifty years, marked with the Chief of Air Staff." },
];

// Swap this for a real YouTube or Vimeo link when available; for now it opens the school's Instagram.
export const filmUrl = "https://www.instagram.com/_dalhousiepublicschool";
