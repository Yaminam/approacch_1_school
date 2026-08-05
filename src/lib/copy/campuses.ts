import type { PageCopy } from "./types";
import { img } from "../images";

/* Pages 14 to 30 of Website Copy Draft 2: the two campuses, the campus finder
   and every campus sub-page. Route slugs are taken from the deck's own page
   headers, e.g. "PAGE 20 | /campuses/dalhousie/student-life". */

export const campusesOverview: PageCopy = {
  slug: "/campuses",
  nav: "Campuses",
  kicker: "Two distinct campus experiences",
  title: "One Dalhousie.",
  emphasis: "Two ways to grow.",
  subhead:
    "Same roots. Different wings. The two campuses express the same Dalhousie promise through different environments, rhythms and parent choices. The question is not which campus is better. It is which experience is right for the child and family.",
  primary: "Find Your Campus",
  secondary: "Compare Campuses",
  image: img.campusesHero,
  image2: img.campusesSplit,
  closeEyebrow: "Choosing well",
  pulls: [
    {
      slot: "grid",
      line: "Six questions, and a reason behind the answer. Let the fit decide, not the brochure.",
      label: "Find Your Campus",
      alt: "Compare Campuses",
    },
  ],
  meta: {
    title: "Our Campuses, Dalhousie Public School",
    description:
      "The Mountain Campus and the Modern Campus: same roots, different wings. Compare the environment, residential depth, academic journey and parent fit.",
  },
  blocks: [
    {
      h: "The same roots.",
      p: [
        "Both campuses are grounded in the same commitment to the whole child: academic seriousness, confidence, discipline, care, physical development, responsibility and visible growth.",
      ],
    },
    {
      h: "Different wings.",
      p: [
        "The Dalhousie Campus offers the depth of a full mountain residential experience. The New Chandigarh Campus brings the Dalhousie philosophy into a contemporary, all-round environment with academic choice, confidence, exposure and residential flexibility.",
      ],
    },
    {
      h: "Dalhousie Campus, The Mountain Campus",
      p: [
        "Formed for life. Far from distraction. Close to what matters.",
        "The original Himalayan home of Dalhousie Public School offers full residential depth, mountain discipline, house culture, outdoor strength, academic seriousness, pastoral care and the quiet confidence that comes from learning to stand on one's own.",
      ],
    },
    {
      h: "New Chandigarh Campus, The Modern Campus",
      p: [
        "Built for tomorrow. All-Round. Without the Running Around.",
        "The contemporary Dalhousie experience brings academics, pathways, confidence, sport, communication, leadership, exposure and flexible residential choices together in one coordinated environment.",
      ],
    },
    {
      h: "Different parent fits",
      p: [
        "The Mountain Campus may suit families seeking a true boarding experience, distance from urban distraction, character formation and deeper residential immersion.",
        "The Modern Campus may suit families seeking academic choice, communication, confidence, exposure, flexibility and future pathways within the assurance of the Dalhousie brand.",
      ],
    },
    {
      h: "Different student outcomes, one complete child.",
      p: [
        "The Dalhousie Campus aims to form children who are grounded, resilient, respectful, independent and physically confident.",
        "The New Chandigarh Campus aims to develop children who are articulate, adaptive, confident, choice-ready and globally aware.",
      ],
    },
    {
      h: "Choose through fit, not assumption.",
      p: [
        "Compare the practical differences, use Find Your Campus to consider the child's stage, residential preference and family priorities, and then experience the rhythm through a campus visit.",
      ],
    },
  ],
};

export const findYourCampus: PageCopy = {
  kind: "sequence",
  slug: "/campuses/find-your-campus",
  nav: "Find Your Campus",
  kicker: "A six-question parent decision tool",
  title: "Which Dalhousie experience fits",
  emphasis: "your child and family?",
  subhead:
    "Every family begins with different priorities. This short guide helps you consider the child's stage, the environment in which they may thrive and the kind of school day your family is seeking.",
  primary: "Start the Campus Finder",
  secondary: "Compare Campuses",
  image: img.finderHero,
  image2: img.finderSplit,
  closeEyebrow: "After the result",
  meta: {
    title: "Find Your Campus, Dalhousie Public School",
    description:
      "Answer six questions to understand whether the Dalhousie Mountain Campus or New Chandigarh Modern Campus may better fit your child and family.",
  },
  blocks: [
    {
      h: "How the guide works",
      p: [
        "Answer six questions about the child and your family's priorities. The recommendation will suggest the campus that appears to align more closely and explain the reasons behind it. It is a guide, not an admission decision.",
      ],
    },
    {
      h: "Question 1: The child's age and academic stage",
      p: [
        "Choose the child's current age, grade or intended entry point. The result considers only grades and programmes currently available.",
      ],
    },
    {
      h: "Question 2: Residential preference",
      p: [
        "Choose between a full residential experience, residential flexibility, day-boarding or the options currently available to your family.",
      ],
    },
    {
      h: "Question 3: The environment your child may respond to",
      p: [
        "Consider whether the child may benefit more from deeper residential immersion and distance from distraction, or from a contemporary campus environment with greater flexibility and proximity.",
      ],
    },
    {
      h: "Question 4: Your highest parent priorities",
      p: [
        "Choose the priorities that matter most: discipline, academic choice, competitive preparation, confidence, sport, independence, defence orientation, communication, care or flexibility.",
      ],
    },
    {
      h: "Question 5: The child's current needs",
      p: [
        "Consider whether the child most needs structure, independence, confidence, exposure, physical strength, academic direction or a balanced combination.",
      ],
    },
    {
      h: "Question 6: Future pathways",
      p: [
        "Indicate any known interests such as competitive examinations, defence, wider university pathways, sport or a broad all-round foundation.",
      ],
    },
    {
      h: "Every child is different.",
      p: [
        "Your result presents the recommended campus, the strongest reasons for the match and the alternate campus for comparison. From there, you can book a visit or speak to admissions.",
        "The final choice becomes clearer after speaking with the School and experiencing the campus. This guide helps your family begin the right conversation.",
      ],
    },
  ],
};

export const compareCampuses: PageCopy = {
  slug: "/campuses/compare",
  nav: "Compare Campuses",
  kicker: "Same roots. Different wings.",
  title: "Compare the two",
  emphasis: "Dalhousie experiences.",
  subhead:
    "The two campuses share one philosophy, but differ in setting, residential depth, academic journey, flexibility and parent fit. Compare the experience without turning the choice into a ranking.",
  primary: "Find Your Campus",
  secondary: "Visit a Campus",
  image: img.compareHero,
  image2: img.compareSplit,
  closeEyebrow: "Neither is the lesser",
  meta: {
    title: "Compare Campuses, Dalhousie Public School",
    description:
      "A plain-language comparison of the Dalhousie Mountain Campus and the New Chandigarh Modern Campus across setting, residential model, academics and parent fit.",
  },
  blocks: [],
};

/* ── Dalhousie Campus ──────────────────────────────────────────────── */

export const dalhousieCampus: PageCopy = {
  slug: "/campuses/dalhousie",
  nav: "Dalhousie Campus",
  kicker: "The original Himalayan home",
  title: "Rooted in the mountains.",
  emphasis: "Formed for life.",
  subhead:
    "Dalhousie Campus is the deeper, more immersive expression of the Dalhousie experience: full residential life, CBSE education, mountain discipline, house culture, outdoor exposure, pastoral care and the quiet strength that comes from living, learning and growing together.",
  primary: "Visit Dalhousie Campus",
  secondary: "Explore Residential Life",
  image: img.dalHero,
  image2: img.dalSplit,
  closeEyebrow: "Best understood in motion",
  pulls: [
    {
      slot: "grid",
      line: "Distance from distraction is hard to photograph. It is obvious the moment you arrive.",
      label: "Visit Dalhousie Campus",
      alt: "Compare Campuses",
    },
  ],
  meta: {
    title: "Dalhousie Campus, The Mountain Campus",
    description:
      "Full residential immersion, CBSE academic seriousness, house culture, outdoor strength and pastoral care, seven thousand feet up in the Himalayas.",
  },
  blocks: [
    {
      h: "Far from distraction. Close to what matters.",
      p: [
        "The mountain setting creates more than a beautiful backdrop. Distance, terrain, weather, routine and community reduce distraction and give children the space to build attention, discipline and stronger relationships.",
      ],
    },
    {
      h: "A mountain-shaped education.",
      p: [
        "This is not simply a school located in the mountains. The environment participates in the child's growth. Walking, weather, outdoor movement, residential routine, shared spaces and the demands of daily life help children become more resilient and self-reliant.",
      ],
    },
    {
      h: "Full residential immersion",
      p: [
        "Boarding is seen as preparation, not separation. The child learns to manage time, belongings, friendships, duties, study, rest and everyday decisions with the support of house parents, mentors and a close community.",
      ],
    },
    {
      h: "Structured academic seriousness",
      p: [
        "CBSE learning, classroom depth, Competitive Edge, guided prep, testing and mentoring sit inside a balanced residential rhythm. Academic ambition is supported without turning the child's life into a second shift.",
      ],
    },
    {
      h: "Defence Pathway fit",
      p: [
        "The mountain campus has a natural connection with discipline, fitness, service and NDA aspiration. The Defence Pathway can draw strength from the environment while remaining broader than examination coaching.",
      ],
    },
    {
      h: "House culture and pastoral care",
      p: [
        "The house is where children belong, contribute, seek support and learn to live with others. Pastoral care keeps every child known and every parent clear about communication and escalation.",
      ],
    },
    {
      h: "Outdoor strength",
      p: [
        "Sport, movement, adventure and the terrain itself help build fitness, courage, teamwork and the confidence to meet difficulty.",
      ],
    },
    {
      h: "The Dalhousie Campus child",
      p: [
        "Grounded. Resilient. Respectful. Independent. Physically confident. The aim is not to create hardness, but inner strength supported by care, community and purpose.",
      ],
    },
    {
      h: "Visit the Mountain Campus",
      p: [
        "Experience the morning rhythm, classrooms, house life, dining, sport, prep and the way students and adults relate to one another. The campus is best understood in motion.",
      ],
    },
  ],
};

export const dalAcademics: PageCopy = {
  slug: "/campuses/dalhousie/academics",
  nav: "Academics at Dalhousie",
  kicker: "Academics within a protected residential rhythm",
  title: "Academic ambition sits inside",
  emphasis: "balance and care.",
  subhead:
    "The Mountain Campus combines CBSE learning, concept depth, guided preparation, mentoring and disciplined study habits inside a residential environment designed to protect focus and childhood.",
  primary: "Speak to Admissions",
  secondary: "Explore Competitive Edge",
  image: img.dalAcademicsHero,
  image2: img.dalAcademicsSplit,
  closeEyebrow: "The proof",
  pulls: [
    {
      slot: "grid",
      line: "No travelling between systems. No second shift after the first one ends.",
      label: "Explore The Dalhousie Day",
      alt: "Speak to Admissions",
    },
  ],
  meta: {
    title: "Academics at Dalhousie Campus, Dalhousie Public School",
    description:
      "The CBSE academic journey, concept depth before repetition, Competitive Edge, the Scholars and Achievers Tracks and the Dalhousie Academic Dashboard.",
  },
  blocks: [
    {
      h: "The CBSE academic journey",
      p: [
        "Parents can see the grades offered, subject structure, academic expectations and transitions, together with the support that surrounds the curriculum.",
      ],
    },
    {
      h: "Concept depth before repetition",
      p: [
        "Strong academic preparation begins with understanding. Classroom discussion, explanation, practice and feedback build concepts before speed and test intensity increase.",
      ],
    },
    {
      h: "A residential academic rhythm",
      p: [
        "Classes, preparation, sport, meals, mentoring and rest are coordinated. Children do not need to travel between systems or begin a second shift after school.",
      ],
    },
    {
      h: "Dalhousie Competitive Edge",
      p: [
        "Competitive Edge brings diagnostics, concept strengthening, guided practice, doubt support, test discipline and future-pathway preparation into the day.",
      ],
    },
    {
      h: "Scholars Track",
      p: [
        "For approved competitive and top-university pathways, the Scholars Track brings together clear eligibility, subjects, timetable, testing and support.",
      ],
    },
    {
      h: "Achievers Track",
      p: [
        "The Achievers Track supports board preparation and wider pathways across commerce, humanities, law, design, business, entrepreneurship, defence and approved international routes.",
      ],
    },
    {
      h: "Mentoring and doubt support",
      p: [
        "Students need regular access to adults who can identify difficulty, explain next steps and help them build independent study habits.",
      ],
    },
    {
      h: "The Dalhousie Academic Dashboard",
      p: [
        "Parents see progress patterns, goals, concept gaps, assessments, mentor observations and the next academic priorities.",
      ],
    },
  ],
};

export const dalResidential: PageCopy = {
  slug: "/campuses/dalhousie/residential-life",
  nav: "Residential Life at Dalhousie",
  kicker: "Full residential immersion",
  title: "Boarding is seen as preparation,",
  emphasis: "not separation.",
  subhead:
    "At the Mountain Campus, residential life is the environment in which children learn to manage themselves, belong to a house, contribute to a community and grow through the ordinary responsibilities of every day.",
  primary: "Visit Dalhousie Campus",
  secondary: "View Pastoral Care",
  image: img.dalResidentialHero,
  image2: img.dalResidentialSplit,
  closeEyebrow: "How parents stay close",
  pulls: [
    {
      slot: "grid",
      line: "The goal is not early detachment. It is independence with an adult close by.",
      label: "Visit Dalhousie Campus",
      alt: "View Pastoral Care",
    },
  ],
  meta: {
    title: "Residential Life at Dalhousie Campus, Dalhousie Public School",
    description:
      "The house becomes home: a typical residential day, dorm life, dining, prep, house parents, weekend life and supported independence.",
  },
  blocks: [
    {
      h: "The house becomes home.",
      p: [
        "A residential child needs more than accommodation. The house must provide belonging, trusted adults, friendships, routines, support and a shared identity.",
      ],
    },
    {
      h: "A typical residential day",
      p: [
        "From waking to rest, the rhythm brings together personal routine, meals, classes, Competitive Edge, sport, prep, house time, mentor support and sleep.",
      ],
    },
    {
      h: "Dorm life",
      p: [
        "Shared living teaches organisation, consideration, boundaries, conflict resolution, humour, patience and the ability to live with people who are different from oneself.",
      ],
    },
    {
      h: "Dining and manners",
      p: [
        "Meals build routine, nutrition, conversation, table manners and respect for a shared space. Dining is part of formation.",
      ],
    },
    {
      h: "Prep time",
      p: [
        "Structured prep gives children the discipline to review learning, complete work, seek help and gradually take greater ownership of study.",
      ],
    },
    {
      h: "House parents and mentors",
      p: [
        "Named adults anchor the care structure. Parents know who notices, who supports and how information moves when a child needs help.",
      ],
    },
    {
      h: "Weekend life",
      p: [
        "Weekends balance rest, outdoor activity, clubs, events, service, community and informal time. Residential childhood feels rich, not institutional.",
      ],
    },
    {
      h: "Independence with support",
      p: [
        "The goal is not early detachment. It is supported independence, the ability to make decisions, manage routines, ask for help and recover from difficulty.",
      ],
    },
    {
      h: "Parent communication and Growth Notes",
      p: [
        "Parents receive predictable updates and meaningful context, including academic information, pastoral observations and the child's residential growth.",
      ],
    },
  ],
};

export const dalStudentLife: PageCopy = {
  slug: "/campuses/dalhousie/student-life",
  nav: "Student Life at Dalhousie",
  kicker: "Living, learning and growing together",
  title: "Community is",
  emphasis: "part of education.",
  subhead:
    "The Mountain Campus gives children repeated opportunities to participate, represent, perform, serve, lead and belong. Student life is not an add-on to academics; it is where confidence and character become visible.",
  primary: "Visit Dalhousie Campus",
  secondary: "Explore the Confidence Code",
  image: img.dalStudentLifeHero,
  image2: img.dalStudentLifeSplit,
  closeEyebrow: "In their own words",
  pulls: [
    {
      slot: "grid",
      line: "Character is easy to claim and hard to fake. Watch an assembly and judge for yourself.",
      label: "Visit Dalhousie Campus",
      alt: "Explore the Confidence Code",
    },
  ],
  meta: {
    title: "Student Life at Dalhousie Campus, Dalhousie Public School",
    description:
      "Assemblies and traditions, clubs, debate and performance, service and duties, friendships, celebrations, weekend life and student voices.",
  },
  blocks: [
    {
      h: "Assemblies and traditions",
      p: [
        "Shared rituals create identity and continuity. Assemblies, house gatherings and school traditions give children a sense of belonging to something larger than themselves.",
      ],
    },
    {
      h: "Clubs and creative pursuits",
      p: [
        "Clubs give children space to explore, make, practise and share. Their value lies in the experience, not the length of the list.",
      ],
    },
    {
      h: "Debate, speaking and performance",
      p: [
        "Stage, debate, presentations, music and performance help children build voice, presence and the ability to be seen without fear.",
      ],
    },
    {
      h: "Service and duties",
      p: [
        "Residential communities depend on contribution. Duties, service and house responsibilities teach leadership by action.",
      ],
    },
    {
      h: "Friendships and house community",
      p: [
        "Living together allows children to form deeper friendships, learn conflict resolution and understand the give-and-take of community.",
      ],
    },
    {
      h: "Celebrations and events",
      p: [
        "Events bring the School's culture to life and give students roles in planning, performing, hosting and representing.",
      ],
    },
    {
      h: "Weekend life",
      p: [
        "Residential weekends bring variety through outdoor experiences, sport, creative time, informal community and rest.",
      ],
    },
    {
      h: "Student voices",
      p: [
        "Student voices bring the campus to life from within, through authentic, age-appropriate reflections shared with consent.",
      ],
    },
  ],
};

export const dalSports: PageCopy = {
  slug: "/campuses/dalhousie/sports-outdoors",
  nav: "Sports, Outdoors & Adventure",
  kicker: "The mountain as part of the education",
  title: "Strength grows through movement,",
  emphasis: "effort and challenge.",
  subhead:
    "The Mountain Campus offers an environment in which physical development is part of daily life. Sport and outdoor experience build courage, teamwork, resilience and confidence in the body.",
  primary: "Explore the Sports Pathway",
  secondary: "Visit Dalhousie Campus",
  image: img.dalSportsHero,
  image2: img.dalSportsSplit,
  closeEyebrow: "The proof",
  pulls: [
    {
      slot: "grid",
      line: "The terrain does half the teaching. Come and walk it before your child does.",
      label: "Visit Dalhousie Campus",
    },
  ],
  meta: {
    title: "Sports, Outdoors & Adventure at Dalhousie Campus",
    description:
      "Fit for Life, house sport, competitive teams, outdoor education, adventure and resilience, with safety and supervision stated accurately.",
  },
  blocks: [
    {
      h: "Fit for Life",
      p: [
        "Every child builds a foundation of movement, stamina, strength and healthy routine. Progress matters more than comparison.",
      ],
    },
    {
      h: "House Sport",
      p: [
        "House competition creates participation, belonging and the experience of representing others.",
      ],
    },
    {
      h: "Competitive teams",
      p: [
        "Students with interest and ability move into clear routes for focused training and competition.",
      ],
    },
    {
      h: "Outdoor education",
      p: [
        "The mountain environment can support walking, nature awareness, navigation, endurance and supervised outdoor learning.",
      ],
    },
    {
      h: "Adventure and resilience",
      p: [
        "Appropriate challenge teaches children to assess risk, persist, support others and recover when something is difficult.",
      ],
    },
    {
      h: "Strength and conditioning",
      p: [
        "Training is age-appropriate, supervised and connected to both health and sport performance.",
      ],
    },
    {
      h: "Safety and supervision",
      p: [
        "Outdoor confidence depends on careful planning, trained supervision, equipment, permissions and emergency procedures. These details must be stated accurately.",
      ],
    },
    {
      h: "The Dalhousie Fitness Card",
      p: [
        "Fitness progress is visible through personal goals, participation, coach feedback and next steps.",
      ],
    },
  ],
};

export const dalHouseCulture: PageCopy = {
  slug: "/campuses/dalhousie/house-culture-care",
  nav: "House Culture & Pastoral Care",
  kicker: "The house as the child's community",
  title: "Known. Guided.",
  emphasis: "Supported. Shaped.",
  subhead:
    "The house gives the residential child a smaller community within the larger School, a place to belong, contribute, seek help and learn the responsibilities of living with others.",
  primary: "Speak to the Campus",
  secondary: "View Parent Connect",
  image: img.dalHouseHero,
  image2: img.dalHouseSplit,
  closeEyebrow: "One parent-connect system",
  pulls: [
    {
      slot: "grid",
      line: "Ask who notices when your child is quiet. You should be able to learn their name.",
      label: "Speak to the Campus",
      alt: "View Parent FAQs",
    },
  ],
  meta: {
    title: "House Culture & Pastoral Care at Dalhousie Campus",
    description:
      "House structure, house parents and mentors, daily routines, belonging, emotional care, medical support, safeguarding and parent communication.",
  },
  blocks: [
    {
      h: "House structure",
      p: [
        "Parents can see how houses are organised, how children are grouped and which adults hold responsibility during different parts of the day.",
      ],
    },
    {
      h: "House parents and mentors",
      p: [
        "House parents and mentors provide continuity. They notice changes, support adjustment, guide routines and communicate with families.",
      ],
    },
    {
      h: "Daily routines",
      p: [
        "Routines create security. They help children manage personal care, meals, study, sport, belongings and rest.",
      ],
    },
    {
      h: "Belonging and responsibility",
      p: [
        "House identity gives children a place to contribute. Duties, teams, traditions and shared goals help them understand that belonging comes with responsibility.",
      ],
    },
    {
      h: "Emotional care",
      p: [
        "Children need adults they trust, quiet ways to ask for help and a culture that responds to homesickness, friendship difficulties and pressure with care.",
      ],
    },
    {
      h: "Medical support",
      p: [
        "Medical provision, medication processes, emergency response and parent notification are clearly connected to the care system.",
      ],
    },
    {
      h: "Safety and safeguarding",
      p: [
        "Safeguarding information is direct, current and approved. Parents know the reporting and escalation channels.",
      ],
    },
    {
      h: "Parent communication",
      p: [
        "Scheduled contact, mentor updates, urgent escalation and Whole Child reporting work together as one parent-connect system.",
      ],
    },
  ],
};

/* ── New Chandigarh Campus ─────────────────────────────────────────── */

export const newChandigarhCampus: PageCopy = {
  slug: "/campuses/new-chandigarh",
  nav: "New Chandigarh Campus",
  kicker: "The Modern Campus. Built for tomorrow.",
  title: "All-Round. Without",
  emphasis: "the Running Around.",
  subhead:
    "New Chandigarh Campus brings academic choice, preparation, confidence, sport, communication, leadership, exposure and residential flexibility together in one contemporary Dalhousie environment. Children do not need to travel between separate systems to receive an all-round education.",
  primary: "Visit New Chandigarh Campus",
  secondary: "Explore the Academic Journey",
  image: img.chdHero,
  image2: img.chdSplit,
  closeEyebrow: "The New Chandigarh child",
  pulls: [
    {
      slot: "grid",
      line: "Parents spend years coordinating school, tuition, sport and classes. This campus is the argument against that.",
      label: "Explore the Academic Journey",
      alt: "Visit New Chandigarh Campus",
    },
  ],
  meta: {
    title: "New Chandigarh Campus, The Modern Campus",
    description:
      "Academic choice, the stage-by-stage journey from Toddler to Senior School, residential and day-boarding flexibility, confidence, sport and pastoral care.",
  },
  blocks: [
    {
      h: "The contemporary Dalhousie experience",
      p: [
        "The campus carries the same Dalhousie promise of character, discipline, care, confidence and life readiness, expressed through a modern academic and residential ecosystem.",
      ],
    },
    {
      h: "All-round, in one coordinated environment.",
      p: [
        "Parents often spend years coordinating school, tuition, sport, communication classes, activities and travel. The New Chandigarh proposition is different: the important dimensions of growth are designed to work together.",
      ],
    },
    {
      h: "Academic journey, curiosity to readiness",
      p: [
        "The journey moves clearly from Toddler and Early Years through Primary, Middle and Senior School. Each stage shows what children learn, how confidence grows and what they are ready for next.",
      ],
    },
    {
      h: "Academic choice and pathways",
      p: [
        "Subject choice, Competitive Edge, Scholars Track, Achievers Track, defence orientation and wider future routes are presented accurately by age and stage.",
      ],
    },
    {
      h: "Residential and day-boarding flexibility",
      p: [
        "Families can compare the residential models available, the daily rhythm and how each option supports academics, sport, prep, care and independence.",
      ],
    },
    {
      h: "Confidence, communication and leadership",
      p: [
        "Speaking, performance, collaboration and leadership are part of the experience, not occasional add-ons.",
      ],
    },
    {
      h: "Sport and exposure",
      p: [
        "Physical development, team sport and confirmed specialist opportunities are understood through the child's experience and progress.",
      ],
    },
    {
      h: "Pastoral care and parent connect",
      p: [
        "Modernity must not mean distance. Parents need clear information about mentors, supervision, medical support, safeguarding, communication and reporting.",
      ],
    },
    {
      h: "The New Chandigarh child",
      p: [
        "Articulate. Adaptive. Confident. Choice-ready. Globally aware. The aim is a child who can move towards opportunity without losing values, discipline or balance.",
      ],
    },
  ],
};

export const chdAcademicJourney: PageCopy = {
  kind: "sequence",
  slug: "/campuses/new-chandigarh/academic-journey",
  nav: "Academic Journey",
  kicker: "The New Chandigarh academic journey",
  title: "From curiosity",
  emphasis: "to readiness.",
  subhead:
    "A strong academic journey changes as the child grows. Early learning begins in movement, care and discovery. Primary builds foundations and inquiry. Middle School builds readiness. Senior School brings direction, choice and serious preparation.",
  primary: "Explore the Stages",
  secondary: "Speak to Admissions",
  image: img.chdJourneyHero,
  image2: img.chdJourneySplit,
  closeEyebrow: "How parents see progress",
  pulls: [
    {
      slot: "grid",
      line: "Each stage prepares the next. Ask us which one your child would be entering.",
      label: "Speak to Admissions",
      alt: "Book a Visit",
    },
  ],
  meta: {
    title: "Academic Journey, New Chandigarh Campus",
    description:
      "Toddler, Early Years, Primary, Middle and Senior School: what children learn at each stage, how the stages connect and how progress is reported.",
  },
  blocks: [
    {
      h: "Toddler Programme",
      p: [
        "Learning through movement, rhythm and care. The youngest children need a secure routine, warm relationships, language-rich interaction and opportunities to explore through the body and senses.",
      ],
    },
    {
      h: "Early Years Programme",
      p: [
        "Learning through play, discovery and expression. Children build language, social confidence, imagination, early numeracy and the ability to participate in a group.",
      ],
    },
    {
      h: "Primary Years",
      p: [
        "Learning through inquiry, thinking and connection. Strong literacy and numeracy foundations are joined by curiosity, communication, collaboration and physical development.",
      ],
    },
    {
      h: "Middle School",
      p: [
        "Foundation, confidence and pathway readiness. Students move into greater subject depth, stronger study habits, responsibility and early direction.",
      ],
    },
    {
      h: "Senior School",
      p: [
        "Direction, discipline and serious preparation. Students need clear subject choices, board readiness, future pathways, mentoring and visible progress.",
      ],
    },
    {
      h: "Transitions that feel connected.",
      p: [
        "Each stage prepares for the next. Parents can see how pedagogy, assessment, support and independence evolve without abrupt changes in philosophy.",
      ],
    },
    {
      h: "The Preparation System across stages",
      p: [
        "Competitive Edge, Sports Pathway, Confidence Code, Life Code, Residential Advantage and whole-child reporting adapt to the child's age and readiness.",
      ],
    },
    {
      h: "Assessment and parent reporting",
      p: [
        "Reporting combines academic progress with confidence, responsibility, physical development and mentor insight.",
      ],
    },
  ],
};

export const chdEarlyYears: PageCopy = {
  slug: "/campuses/new-chandigarh/early-years",
  nav: "Toddler & Early Years",
  kicker: "The beginning of the learning journey",
  title: "Movement. Rhythm.",
  emphasis: "Care. Discovery.",
  subhead:
    "Young children learn first through secure relationships, movement, imitation, play, language and the freedom to explore. The early-years environment is calm, purposeful and full of possibility.",
  primary: "Book a Visit",
  secondary: "Speak to Admissions",
  image: img.chdEarlyHero,
  image2: img.chdEarlySplit,
  closeEyebrow: "Ready for what is next",
  pulls: [
    {
      slot: "grid",
      line: "For the youngest children, the room tells you more than any brochure. Come and see it.",
      label: "Book a Visit",
      alt: "Speak to Admissions",
    },
  ],
  meta: {
    title: "Toddler & Early Years, New Chandigarh Campus",
    description:
      "The Toddler and Early Years Programmes: a predictable day, language and communication, physical and social development, care, safety and readiness for Primary.",
  },
  blocks: [
    {
      h: "The Toddler Programme",
      p: [
        "Movement, rhythm, sensory exploration, language and care create a secure beginning. Parents receive clear information about age eligibility, timing, routines and adult support.",
      ],
    },
    {
      h: "The Early Years Programme",
      p: [
        "Play, discovery and expression help children build curiosity, communication, early concepts and the confidence to participate.",
      ],
    },
    {
      h: "A day that feels predictable",
      p: [
        "Young children benefit from a steady rhythm of welcome, movement, guided activity, free exploration, meals, rest and departure.",
      ],
    },
    {
      h: "Language and communication",
      p: [
        "Conversation, stories, songs, questions and social interaction support vocabulary, listening and expression.",
      ],
    },
    {
      h: "Physical and social development",
      p: [
        "Movement develops coordination and confidence. Shared play helps children practise waiting, sharing, negotiating and belonging.",
      ],
    },
    {
      h: "Creative expression",
      p: [
        "Art, music, movement and imaginative play allow children to communicate before every idea can be explained in words.",
      ],
    },
    {
      h: "Care and safety",
      p: [
        "Parents receive clear information about adult-child ratios, supervision, hygiene, medical response, arrival and departure, and safeguarding.",
      ],
    },
    {
      h: "Parent communication",
      p: [
        "Regular communication helps families understand routines, participation, emerging strengths and areas where the child may need support.",
      ],
    },
    {
      h: "Readiness for Primary Years",
      p: [
        "Readiness is broader than early academics. It includes language, attention, movement, confidence, social ease, curiosity and the ability to follow a shared routine.",
      ],
    },
  ],
};

export const chdPrimaryYears: PageCopy = {
  slug: "/campuses/new-chandigarh/primary-years",
  nav: "Primary Years",
  kicker: "Strong foundations. Curious minds.",
  title: "Learning through inquiry,",
  emphasis: "thinking and connection.",
  subhead:
    "The Primary Years build literacy, numeracy and conceptual understanding while preserving curiosity, movement, confidence and the joy of discovering how ideas connect.",
  primary: "Book a Visit",
  secondary: "Explore the Confidence Code",
  image: img.chdPrimaryHero,
  image2: img.chdPrimarySplit,
  closeEyebrow: "What it looks like",
  pulls: [
    {
      slot: "grid",
      line: "Foundations are built once. See how these classrooms build them.",
      label: "Book a Visit",
      alt: "Speak to Admissions",
    },
  ],
  meta: {
    title: "Primary Years, New Chandigarh Campus",
    description:
      "Literacy and numeracy, conceptual learning, curiosity and questioning, confidence, sport, Life Code foundations and reporting in the Primary Years.",
  },
  blocks: [
    {
      h: "Literacy and numeracy",
      p: [
        "Strong foundations give children the tools to read, write, reason, calculate and express what they understand.",
      ],
    },
    {
      h: "Conceptual learning",
      p: [
        "Children learn not only what an answer is, but why it works and where the idea appears in the world around them.",
      ],
    },
    {
      h: "Curiosity and questioning",
      p: [
        "Inquiry helps children ask better questions, make connections, investigate and explain.",
      ],
    },
    {
      h: "Confidence and communication",
      p: [
        "Classroom participation, show-and-tell, presentation, assembly and collaborative work help children find their voice early.",
      ],
    },
    {
      h: "Sport and physical growth",
      p: [
        "Movement, games and physical development support health, coordination, teamwork and confidence.",
      ],
    },
    {
      h: "Life Code foundations",
      p: [
        "Children begin to manage belongings, routines, small responsibilities, digital habits and participation in a community.",
      ],
    },
    {
      h: "Assessment and reporting",
      p: [
        "Assessment helps teachers and parents understand progress, misconceptions, confidence and readiness for the next stage.",
      ],
    },
    {
      h: "The Primary Years experience",
      p: [
        "Real classroom moments, student work and age-appropriate voices show what learning looks and feels like.",
      ],
    },
  ],
};

export const chdMiddleSchool: PageCopy = {
  slug: "/campuses/new-chandigarh/middle-school",
  nav: "Middle School",
  kicker: "The years of foundation and direction",
  title: "Foundation, confidence and",
  emphasis: "pathway readiness.",
  subhead:
    "Middle School is a period of rapid change. Students need deeper academics, stronger habits, physical development, confidence and the first clear view of the choices ahead.",
  primary: "Speak to Admissions",
  secondary: "Explore Academic Pathways",
  image: img.chdMiddleHero,
  image2: img.chdMiddleSplit,
  closeEyebrow: "Reported in full",
  pulls: [
    {
      slot: "grid",
      line: "This is the stage where habits set. Ask how we build them before the pressure arrives.",
      label: "Speak to Admissions",
      alt: "Explore Competitive Edge",
    },
  ],
  meta: {
    title: "Middle School, New Chandigarh Campus",
    description:
      "A confident transition, subject breadth and concept depth, study habits, confidence, sport, Life Code, an introduction to Competitive Edge and Whole Child reporting.",
  },
  blocks: [
    {
      h: "A confident transition",
      p: [
        "The move into Middle School is a supported transition towards greater subject depth, independence and personal responsibility.",
      ],
    },
    {
      h: "Subject breadth and concept depth",
      p: [
        "Students encounter more specialised learning and need support to connect ideas, manage workload and understand their own strengths.",
      ],
    },
    {
      h: "Study habits and self-management",
      p: [
        "Planning, note-making, revision, organisation and digital discipline become increasingly important.",
      ],
    },
    {
      h: "Confidence and communication",
      p: [
        "Students learn to speak, present, debate, collaborate and respond to feedback with greater maturity.",
      ],
    },
    {
      h: "Sport and physical development",
      p: [
        "Consistent physical activity supports confidence, energy, teamwork and resilience during a stage of significant growth.",
      ],
    },
    {
      h: "Life Code and responsibility",
      p: [
        "Age-appropriate duties, service, decision-making and self-management help students move from dependence towards ownership.",
      ],
    },
    {
      h: "Introduction to Competitive Edge",
      p: [
        "Diagnostics, concept support and early pathway awareness can help students prepare without premature pressure.",
      ],
    },
    {
      h: "Academic guidance",
      p: [
        "Mentoring helps students and families understand strengths, interests, habits and the decisions approaching in Senior School.",
      ],
    },
    {
      h: "Whole Child reporting",
      p: [
        "Progress includes academics, fitness, confidence, responsibility and mentor insight.",
      ],
    },
  ],
};

export const chdSeniorSchool: PageCopy = {
  slug: "/campuses/new-chandigarh/senior-school",
  nav: "Senior School",
  kicker: "Direction. Discipline. Serious preparation.",
  title: "Choices become",
  emphasis: "pathways.",
  subhead:
    "Senior School gives students academic clarity, disciplined preparation, strong mentoring and the confidence to move towards university, competitive examinations, defence and wider professional routes.",
  primary: "Speak to Admissions",
  secondary: "Explore Competitive Edge",
  image: img.chdSeniorHero,
  image2: img.chdSeniorSplit,
  closeEyebrow: "Where it leads",
  pulls: [
    {
      slot: "grid",
      line: "Subject choices close doors as well as open them. Talk to us before your child chooses.",
      label: "Speak to Admissions",
      alt: "Explore Academic Pathways",
    },
  ],
  meta: {
    title: "Senior School, New Chandigarh Campus",
    description:
      "Subjects and academic choices, board readiness, Competitive Edge, the Scholars and Achievers Tracks, defence pathways, mentoring and career direction.",
  },
  blocks: [
    {
      h: "Subjects and academic choices",
      p: [
        "Parents and students need a clear, current view of subjects, streams, combinations, prerequisites and the implications of each choice.",
      ],
    },
    {
      h: "Board readiness",
      p: [
        "Strong board preparation combines concept clarity, planned revision, practice, feedback and examination discipline.",
      ],
    },
    {
      h: "Dalhousie Competitive Edge",
      p: [
        "Preparation is integrated into the day through diagnostics, guided practice, testing, doubt support and progress tracking.",
      ],
    },
    {
      h: "Scholars Track",
      p: [
        "For approved competitive and top-university routes, the Scholars Track sets out the intensity, eligibility and support model clearly.",
      ],
    },
    {
      h: "Achievers Track",
      p: [
        "The Achievers Track supports boards and a broad range of pathways including commerce, humanities, law, design, business, entrepreneurship and other approved routes.",
      ],
    },
    {
      h: "Defence and service pathways",
      p: [
        "Students drawn to defence can understand the academic, fitness, communication and SSB-related preparation available.",
      ],
    },
    {
      h: "Mentoring and progress tracking",
      p: [
        "Senior students need adults who can help them set priorities, read performance patterns and make informed decisions.",
      ],
    },
    {
      h: "Leadership and confidence",
      p: [
        "Senior School creates meaningful opportunities to lead, present, mentor younger students and represent the School.",
      ],
    },
    {
      h: "College and career direction",
      p: [
        "Where available, counselling helps students research courses, institutions, applications and the relationship between subject choice and future pathways.",
      ],
    },
  ],
};

export const chdBoarding: PageCopy = {
  slug: "/campuses/new-chandigarh/residential-day-boarding",
  nav: "Residential & Day-Boarding",
  kicker: "Flexibility with a designed rhythm",
  title: "Choose the model. Keep",
  emphasis: "the experience connected.",
  subhead:
    "Families may need different residential arrangements, but every child experiences a coordinated day in which academics, preparation, sport, confidence, care and rest work together.",
  primary: "Book a Visit",
  secondary: "Speak to Admissions",
  image: img.chdBoardingHero,
  image2: img.chdBoardingSplit,
  closeEyebrow: "Reported the same way",
  pulls: [
    {
      slot: "grid",
      line: "Day, day-boarding, weekly or full residential. Ask which model suits your child, honestly.",
      label: "Speak to Admissions",
      alt: "Book a Visit",
    },
  ],
  meta: {
    title: "Residential & Day-Boarding, New Chandigarh Campus",
    description:
      "Understand the available residential models, who each may suit, a typical day, house and mentor structure, supervision, care and growth reporting.",
  },
  blocks: [
    {
      h: "Understand the available models",
      p: ["Day school, day-boarding, weekly boarding and full residential."],
    },
    {
      h: "Who each model may suit",
      p: [
        "Each model serves a different family need, based on the child's readiness, commute, academic goals and desired level of immersion.",
      ],
    },
    {
      h: "A typical day",
      p: [
        "A typical day moves through arrival or waking up, classes, preparation, meals, sport, activities, mentoring, departure or residential evening, and rest.",
      ],
    },
    {
      h: "House and mentor structure",
      p: [
        "Every model has clear pastoral ownership. Parents know who supports the child and how communication works.",
      ],
    },
    {
      h: "Meals and prep",
      p: [
        "Each model clearly sets out the meals and preparation periods included, and how they support an all-round, coordinated day.",
      ],
    },
    {
      h: "Supervision and safety",
      p: [
        "Arrival, departure, transport where applicable, access, attendance, handover and emergency processes are stated clearly.",
      ],
    },
    {
      h: "Pastoral and medical care",
      p: [
        "Every model connects to the same approved care, medical, safeguarding and parent-contact systems.",
      ],
    },
    {
      h: "Growth reporting",
      p: [
        "Parents can see how academic and whole-child progress is reported, regardless of the residential model.",
      ],
    },
  ],
};

export const chdStudentLife: PageCopy = {
  slug: "/campuses/new-chandigarh/student-life",
  nav: "Student Life, Sports & Leadership",
  kicker: "The all-round experience in action",
  title: "Expanding what",
  emphasis: "is possible.",
  subhead:
    "Student life develops articulate, active, collaborative and confident young people through sport, creative work, public speaking, leadership, service and meaningful exposure.",
  primary: "Visit New Chandigarh Campus",
  secondary: "Explore the Confidence Code",
  image: img.chdStudentLifeHero,
  image2: img.chdStudentLifeSplit,
  closeEyebrow: "Confidence in action",
  pulls: [
    {
      slot: "grid",
      line: "All-round, without assembling it yourself across four postcodes. See what that means here.",
      label: "Visit New Chandigarh Campus",
      alt: "Speak to Admissions",
    },
  ],
  meta: {
    title: "Student Life, Sports & Leadership, New Chandigarh Campus",
    description:
      "Clubs and creative experiences, speaking and performance, leadership, sport, confirmed specialist opportunities, service, events and student stories.",
  },
  blocks: [
    {
      h: "Life beyond academics",
      p: [
        "The campus experience makes room for interests, friendships, movement, expression and responsibility without forcing families to assemble these opportunities elsewhere.",
      ],
    },
    {
      h: "Clubs and creative experiences",
      p: [
        "Clubs create space for children to explore interests, practise skills, make things, collaborate and share their work. The experience matters more than the length of the list.",
      ],
    },
    {
      h: "Speaking and performance",
      p: [
        "Assembly, debate, performance and presentation give students repeated opportunities to use their voice.",
      ],
    },
    {
      h: "Leadership opportunities",
      p: [
        "Leadership includes duties, team roles, event responsibility, representation and service, not only titles.",
      ],
    },
    {
      h: "Sport and physical development",
      p: [
        "Participation, fitness, teams and training build discipline, energy and character. Current opportunities are listed by age and stage.",
      ],
    },
    {
      h: "Golf, polo and equestrian",
      p: [
        "Golf, polo, equestrian and other specialist opportunities are listed only where current availability, age eligibility, delivery model and location are confirmed.",
      ],
    },
    {
      h: "Service and community",
      p: ["Service helps students understand contribution, empathy and citizenship."],
    },
    {
      h: "Events and student stories",
      p: [
        "Current events and approved student voices keep the page alive, specific and believable.",
      ],
    },
    {
      h: "Confidence Code in action",
      p: [
        "Across the campus experience, children learn to Speak, Perform, Persuade, Polish and Lead, turning confidence into a visible, practised capability.",
      ],
    },
  ],
};

export const campusPages = [
  campusesOverview,
  findYourCampus,
  compareCampuses,
  dalhousieCampus,
  dalAcademics,
  dalResidential,
  dalStudentLife,
  dalSports,
  dalHouseCulture,
  newChandigarhCampus,
  chdAcademicJourney,
  chdEarlyYears,
  chdPrimaryYears,
  chdMiddleSchool,
  chdSeniorSchool,
  chdBoarding,
  chdStudentLife,
];
