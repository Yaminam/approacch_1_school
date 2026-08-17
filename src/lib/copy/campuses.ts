import type { PageCopy } from "./types";
import { img } from "../images";

/* The two campuses, the campus finder and every campus sub-page, transcribed
   from Final Reviewed Content - DPS. */

export const campusesOverview: PageCopy = {
  slug: "/campuses",
  nav: "Campuses",
  kicker: "One Dalhousie. Two ways to grow.",
  title: "Same roots.",
  emphasis: "Different wings.",
  subhead:
    "Every child needs a school that fits not only their academic needs, but also the way they are ready to grow. Dalhousie offers two distinct campus experiences built around one shared philosophy: the whole child for the whole future.",
  primary: "Find Your Campus",
  secondary: "Compare Campuses",
  image: img.campusesHero,
  image2: img.campusesSplit,
  closeEyebrow: "See the difference in person",
  pulls: [
    {
      slot: "grid",
      line: "Six questions, and a reason behind the answer. Let the fit decide, not the brochure.",
      label: "Find Your Campus - Take the Quiz Now",
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
      h: "The question is not which campus is better.",
      p: [
        "It is which environment is the better fit for your child. Across both campuses, children are prepared academically, physically, socially and emotionally. They build confidence. Learn responsibility. Develop stronger habits. Receive academic direction. Participate in sport and wider school life. And grow within a system of care and guidance.",
        "What changes is the setting, the rhythm and the kind of experience the family is looking for. One offers the depth and immersion of mountain residential life. The other brings all-round preparation, academic choice and flexibility into a contemporary campus environment.",
      ],
    },
    {
      h: "Dalhousie Campus, the Mountain Campus",
      p: [
        "A World Away. Ready For The World. The original Himalayan home of Dalhousie Public School offers the deeper, more immersive expression of the Dalhousie experience. Full residential life, CBSE education, mountain discipline, house culture, academic preparation, outdoor exposure and pastoral care come together within one complete environment.",
        "Children learn to manage themselves, contribute to a community and grow stronger through the everyday responsibilities of residential life. The child who emerges: grounded, resilient, respectful, independent and physically confident.",
      ],
    },
    {
      h: "Far from distraction. Close to what matters.",
      p: [
        "Dalhousie Campus may suit families seeking full residential immersion, greater independence and self-reliance, strong routine and discipline, house culture and community, outdoor strength and resilience, academic seriousness within a protected rhythm, and a natural environment for the Dalhousie Defence Pathway.",
      ],
    },
    {
      h: "New Chandigarh Campus, the Modern Campus",
      p: [
        "All-Round. Without the Running Around. New Chandigarh Campus brings the Dalhousie philosophy into a contemporary learning environment. Academics, preparation, confidence, communication, sport, leadership and future pathways come together within one more connected campus experience.",
        "Children gain wider exposure and increasing academic choice without their development being divided across school, coaching, multiple classes and continuous travel. The child who emerges: articulate, adaptive, confident, choice-ready and globally aware.",
      ],
    },
    {
      h: "More opportunity. More direction. Less fragmentation.",
      p: [
        "New Chandigarh Campus may suit families seeking academic choice, confidence and communication, wider exposure, future pathway readiness, flexibility across the available campus formats, a contemporary school environment, and all-round preparation within one ecosystem.",
      ],
    },
    {
      h: "What both campuses share",
      p: [
        "The Dalhousie promise remains the same. The whole child: academic performance matters, but so do fitness, confidence, responsibility, independence and character. Academic seriousness: children receive structured learning, preparation, mentoring and direction appropriate to their stage. Confidence that is trained: speaking, participation, performance and leadership are developed through repeated experience.",
        "Responsibility that grows: children receive opportunities to take greater ownership of their routines, choices and contribution. Care that stays close: teachers, mentors and pastoral teams work together to keep the child known and supported. Visible growth: parents receive a wider view of development beyond marks alone.",
      ],
    },
    {
      h: "Different children need different environments.",
      p: [
        "Some children are ready for a deeper residential experience. They may benefit from distance from urban distraction, greater independence, house culture and the discipline of a mountain rhythm.",
        "Others may benefit from a contemporary environment that offers greater flexibility, academic choice, communication and wider exposure. Neither choice is a compromise. Both are Dalhousie.",
      ],
    },
    {
      h: "A campus is more than what can be compared on a screen.",
      p: [
        "Walk through the classrooms. See how children participate. Understand the rhythm of the day. Experience the residential environment. Meet the adults who will guide and support your child. And consider where your child can imagine belonging and becoming.",
        "One Dalhousie. Two ways to grow.",
      ],
    },
  ],
};

export const findYourCampus: PageCopy = {
  kind: "sequence",
  slug: "/campuses/find-your-campus",
  nav: "Find Your Campus",
  kicker: "A guided fit quiz, not a test",
  title: "Which Dalhousie experience",
  emphasis: "fits your child?",
  subhead:
    "There is no single right school experience for every child. Some children thrive in deeper residential immersion. Others need greater flexibility, academic choice and a contemporary campus rhythm. Answer six questions about your child and your family's priorities.",
  primary: "Start the Campus Finder",
  secondary: "Compare Campuses",
  image: img.finderHero,
  image2: img.finderSplit,
  closeEyebrow: "Still have questions?",
  meta: {
    title: "Find Your Campus, Dalhousie Public School",
    description:
      "Answer six questions to understand whether the Dalhousie Mountain Campus or the New Chandigarh Modern Campus may be the closer fit for your child and family.",
  },
  blocks: [
    {
      h: "How it works",
      p: [
        "This is a guided fit quiz, not a test. There are no right or wrong answers.",
        "Each answer carries points towards the Mountain Campus or the Modern Campus. At the end, the higher score suggests the campus environment that may be the closer fit, and a close score simply means both campuses could work for your family.",
      ],
    },
    {
      h: "Question 1: What stage is your child at?",
      p: [
        "Toddler and Early Years, Primary Years, Middle School or Senior School.",
      ],
    },
    {
      h: "Question 2: What kind of school rhythm are you looking for?",
      p: [
        "A deeply immersive residential experience, a more flexible campus experience, or open to both.",
      ],
    },
    {
      h: "Question 3: What would you most like school to build in your child right now?",
      p: [
        "Greater independence and discipline, confidence and communication, academic direction and preparation, physical strength and resilience, wider exposure and future readiness, or a balance of all of these.",
      ],
    },
    {
      h: "Question 4: Which environment feels closer to what your child needs?",
      p: [
        "A quieter, more immersive environment away from urban distraction, a contemporary environment with greater access, choice and flexibility, or not sure yet.",
      ],
    },
    {
      h: "Question 5: How ready is your child for greater independence?",
      p: ["Very ready, ready with support, still developing, or not sure."],
    },
    {
      h: "Question 6: What matters most when you think about the next few years?",
      p: [
        "A true residential-school experience, academic choice and future pathways, defence-oriented preparation, confidence, leadership and exposure, strong academics without a second-shift childhood, or all-round development within one environment.",
      ],
    },
    {
      h: "This quiz guides you. Conversation completes it.",
      p: [
        "Your result presents the campus your answers point towards, the reasons it may suit your child, and the alternative for comparison. From there, you can book a visit or speak to admissions.",
        "If you would like to go deeper into your child's personality, readiness or aspirations, our admissions team can help interpret the result with you.",
      ],
    },
  ],
};

export const compareCampuses: PageCopy = {
  slug: "/campuses/compare",
  nav: "Compare Campuses",
  kicker: "One Dalhousie. Two ways to grow.",
  title: "Compare the two",
  emphasis: "Dalhousie experiences.",
  subhead:
    "The two campuses share one philosophy, one commitment to the whole child and one belief in serious preparation with care. What changes is the environment, the rhythm and the kind of experience a family is seeking.",
  primary: "Find Your Campus",
  secondary: "Visit a Campus",
  image: img.compareHero,
  image2: img.compareSplit,
  closeEyebrow: "Neither is the lesser",
  meta: {
    title: "Compare Campuses, Dalhousie Public School",
    description:
      "A plain-language comparison of the Dalhousie Mountain Campus and the New Chandigarh Modern Campus across character, rhythm, academics, residential life and fit.",
  },
  blocks: [],
};

/* ── Dalhousie Campus ──────────────────────────────────────────────── */

export const dalhousieCampus: PageCopy = {
  slug: "/campuses/dalhousie",
  nav: "Dalhousie Campus",
  kicker: "The original Himalayan home",
  title: "A World Away.",
  emphasis: "Ready For The World.",
  subhead:
    "Dalhousie Campus is the deeper, more immersive expression of the Dalhousie experience. Full residential life, CBSE education, academic preparation, mountain discipline, house culture, outdoor exposure and pastoral care come together within one complete environment.",
  primary: "Visit Dalhousie Campus",
  secondary: "Explore Residential Life",
  image: img.dalHero,
  image2: img.dalSplit,
  closeEyebrow: "Visit the Mountain Campus",
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
      "Full residential immersion, CBSE academic seriousness, house culture, outdoor strength and pastoral care, in the original Himalayan home of the School.",
  },
  blocks: [
    {
      h: "Far from distraction. Close to what matters.",
      p: [
        "The mountain setting is more than a backdrop. Distance from the constant movement and distraction of urban life creates space for children to focus, participate and form deeper relationships with the people and environment around them.",
        "The terrain asks them to move. The weather asks them to adapt. Residential life asks them to contribute. Routine asks them to become more disciplined. And, gradually, children learn that they are capable of doing more for themselves.",
      ],
    },
    {
      h: "A mountain-shaped education",
      p: [
        "At Dalhousie Campus, growth does not happen only inside classrooms. It happens during the morning routine. On the walk across campus. On the sports field. At the dining table. During prep. Inside the house. In friendships, duties and everyday decisions.",
        "The mountain environment makes effort, adaptability and self-reliance part of daily life. The result is not simply a child who has studied in the mountains. It is a child who has been shaped by them.",
      ],
    },
    {
      h: "Academics at Dalhousie Campus",
      p: [
        "Academic ambition inside balance and care. CBSE learning, concept depth, guided preparation, testing and mentoring sit within a structured residential rhythm.",
        "Through Dalhousie Competitive Edge, serious academic preparation becomes part of the school experience rather than a second academic shift after it.",
      ],
    },
    {
      h: "Residential life",
      p: [
        "Boarding is preparation, not separation. House life, daily routines, shared meals, prep, friendships and responsibilities give children repeated opportunities to become more independent.",
        "They learn to stand on their own, while remaining supported by the adults and community around them.",
      ],
    },
    {
      h: "Student life",
      p: [
        "Living, learning and growing together. Assemblies, speaking, performance, service, house activities, friendships and shared traditions give children many ways to participate beyond academics.",
        "Student life is where confidence becomes visible and belonging becomes real.",
      ],
    },
    {
      h: "Sports, outdoors & adventure",
      p: [
        "Character in motion. The mountain environment naturally encourages movement and physical challenge.",
        "Sport, fitness, house competition and outdoor experiences develop strength, teamwork, courage and resilience, whether or not a child becomes a competitive athlete.",
      ],
    },
    {
      h: "House culture & pastoral care",
      p: [
        "Every child should be known. The house is where children belong, contribute and seek support.",
        "House parents, mentors, teachers and pastoral teams help children navigate residential life while parents remain connected to their child's progress and wellbeing.",
      ],
    },
    {
      h: "Academic seriousness without the second shift",
      p: [
        "Academic ambition should not require children to begin another life after school. Dalhousie Competitive Edge brings concept strengthening, guided practice, testing, doubt support, mentoring and progress tracking into a more coherent academic rhythm.",
        "Children prepare seriously. But academic preparation sits alongside sport, friendships, responsibility and rest.",
      ],
    },
    {
      h: "A natural home for the Defence Pathway",
      p: [
        "The Dalhousie Campus has a natural connection with discipline, fitness, service and defence-oriented aspiration. Residential life builds self-management. The mountain develops physical confidence and resilience. House culture teaches teamwork and responsibility. Speaking and leadership opportunities strengthen voice and presence.",
        "The aim goes beyond preparing for an examination. It begins with forming the kind of person who may one day be ready to earn the uniform. Mind. Body. Voice. Bearing. Service.",
      ],
    },
    {
      h: "The Dalhousie Campus child",
      p: [
        "Grounded. Resilient. Respectful. Independent. Physically confident. The Mountain Campus is not designed to create hardness. It is designed to build inner strength.",
        "Children learn to meet difficulty without immediately stepping away from it. To live with people who are different from them. To take responsibility before being reminded. To ask for guidance when they need it. And to become increasingly capable of standing on their own.",
      ],
    },
    {
      h: "Is the Mountain Campus right for your child?",
      p: [
        "Dalhousie Campus may be a strong fit for families looking for a true residential-school experience, greater independence and self-reliance, distance from urban distraction and screen-heavy routines, stronger discipline and daily structure, house culture and close community life, academic seriousness within a protected residential rhythm, outdoor strength and resilience, and a natural environment for defence-oriented preparation.",
      ],
    },
    {
      h: "See the rhythm for yourself.",
      p: [
        "The Mountain Campus is best understood in motion. See the morning routine. Visit the classrooms. Experience the houses and dining spaces. Watch sport and preparation. Meet the adults who teach, mentor and care for the children.",
        "And consider whether this is the environment in which your child can imagine growing. A World Away. Ready For The World.",
      ],
    },
  ],
};

export const dalAcademics: PageCopy = {
  slug: "/campuses/dalhousie/academics",
  nav: "Academics at Dalhousie",
  kicker: "Academics within a protected residential rhythm",
  title: "Academic ambition inside",
  emphasis: "balance and care.",
  subhead:
    "At Dalhousie Campus, academic learning does not sit apart from the rest of the child's life. CBSE education, classroom depth, guided preparation, mentoring and disciplined study habits work within a residential rhythm that also creates space for sport, responsibility, friendships and rest.",
  primary: "Speak to Admissions",
  secondary: "Explore Competitive Edge",
  image: img.dalAcademicsHero,
  image2: img.dalAcademicsSplit,
  closeEyebrow: "A more complete day",
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
      "CBSE learning with depth, a residential academic rhythm, Competitive Edge, the Scholars and Achievers Tracks and the Dalhousie Academic Dashboard.",
  },
  blocks: [
    {
      h: "CBSE learning with depth",
      p: [
        "Understanding before acceleration. Strong academic preparation begins with strong concepts. Classroom learning gives students the opportunity to question, understand, practise and strengthen what they know before expectations become more demanding.",
        "The goal is not only syllabus completion. It is a stronger academic foundation from which future preparation can grow.",
      ],
    },
    {
      h: "A residential academic rhythm",
      p: [
        "At a residential campus, preparation does not have to begin with another commute. Classes, guided prep, sport, meals, mentoring and rest can sit within one more coherent rhythm.",
        "Students learn when to focus. How to organise work. When to ask for support. And, over time, how to take greater responsibility for their own preparation.",
      ],
    },
    {
      h: "Dalhousie Competitive Edge",
      p: [
        "Serious preparation. Without the second shift. Competitive Edge strengthens the academic experience through academic diagnostics, concept strengthening, guided practice, test discipline, doubt support, and mentoring and progress tracking.",
        "Understanding where the student stands. Addressing gaps before they become larger weaknesses. Learning how to apply concepts consistently. Developing accuracy, time management and examination composure. Resolving uncertainty before it accumulates. Turning assessment into clearer academic direction.",
      ],
    },
    {
      h: "Scholars Track",
      p: [
        "For students pursuing highly competitive academic routes such as JEE, NEET, CUET, Olympiads and top-university preparation, subject to the School's current programme and eligibility framework.",
      ],
    },
    {
      h: "Achievers Track",
      p: [
        "For students preparing towards boards and broader routes across commerce, humanities, law, design, defence, entrepreneurship, business, international pathways and wider future readiness.",
        "The goal is not to place every student on the same route. It is to help each student prepare seriously for the route that fits.",
      ],
    },
    {
      h: "For those drawn to serve",
      p: [
        "The Mountain Campus also provides a natural setting for students exploring defence-oriented futures. Academic preparation is supported by a wider focus on fitness, awareness, communication, discipline, teamwork and service.",
        "Before the uniform, the making of the person.",
      ],
    },
    {
      h: "Progress with direction",
      p: [
        "Assessment becomes more useful when it leads to action. The Academic Dashboard is designed to help students, mentors and parents see academic progress more clearly, including areas of strength, gaps that require attention and priorities for what comes next.",
        "Because a score should not only tell a student how they performed. It should help them prepare better.",
      ],
    },
    {
      h: "Serious academics. A more complete day.",
      p: [
        "Dalhousie Campus brings academic ambition into an environment where preparation, physical development, responsibility and care can grow alongside it.",
        "Academic seriousness without losing the whole child.",
      ],
    },
  ],
};

export const dalResidential: PageCopy = {
  slug: "/campuses/dalhousie/residential-life",
  nav: "Residential Life at Dalhousie",
  kicker: "Full residential immersion",
  title: "Boarding is preparation,",
  emphasis: "not separation.",
  subhead:
    "Residential life at Dalhousie Campus gives children repeated opportunities to become more capable of managing themselves. Time. Belongings. Study. Friendships. Responsibilities. Everyday decisions. They grow in independence while remaining part of a close community of peers, house parents, mentors and teachers.",
  primary: "Visit Dalhousie Campus",
  secondary: "Explore House Culture & Pastoral Care",
  image: img.dalResidentialHero,
  image2: img.dalResidentialSplit,
  closeEyebrow: "Independence and community",
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
      "House and dorm life, dining and manners, prep time, house parents and mentors, weekend life, independence with care and the Dalhousie Growth Note.",
  },
  blocks: [
    {
      h: "A home that prepares children for the world",
      p: [
        "Residential life extends education into the everyday. Children do not simply return to a room after class. They continue learning through routines, shared spaces, relationships, responsibilities and the decisions that come with living as part of a community.",
        "Independence grows gradually, through practice.",
      ],
    },
    {
      h: "House & dorm life",
      p: [
        "Shared life builds personal responsibility. Living with others requires children to become more aware of themselves. They learn to look after personal belongings. Respect shared spaces. Adjust to different personalities. Participate in routines.",
        "And understand that their choices affect the people around them. These everyday lessons become part of growing up.",
      ],
    },
    {
      h: "Dining & manners",
      p: [
        "Shared meals do more than provide structure to the day. They create everyday opportunities to practise conversation, consideration, patience and respect for a common environment.",
        "Manners become something children live, rather than something they are occasionally reminded about.",
      ],
    },
    {
      h: "Prep time",
      p: [
        "From completing work to managing your own preparation. Structured prep gives students time to revisit learning, organise tasks and seek support.",
        "Over time, they become more responsible for knowing what needs to be done and how to approach it. The objective is not simply completed homework. It is stronger study habits.",
      ],
    },
    {
      h: "House parents & mentors",
      p: [
        "Independence does not mean children are left to work everything out alone. House parents and mentors remain part of the child's residential journey, providing guidance, noticing change and helping students reflect on challenges, decisions and progress.",
        "Adults remain close enough to support. Children receive enough room to grow.",
      ],
    },
    {
      h: "Weekend life",
      p: [
        "Residential life needs a different rhythm outside the academic week.",
        "Sport, recreation, house activities, friendships and time to recharge allow children to enjoy the community they are part of without every moment becoming another formal programme.",
      ],
    },
    {
      h: "Independence with care",
      p: [
        "Residential life will naturally include challenges. Homesickness. Friendship difficulties. Pressure. Uncertainty. Learning how to share space. Learning when to ask for help.",
        "These experiences are part of growing up. Pastoral care ensures children have adults and systems of support around them as they learn to navigate them.",
      ],
    },
    {
      h: "Parent Connect and the Dalhousie Growth Note",
      p: [
        "Parents should be able to understand more than whether their child has settled. How are routines developing? Is the child participating? Are they becoming more independent? Where are they taking greater responsibility? Where is support still needed?",
        "The Dalhousie Growth Note is designed to make this residential development more visible.",
      ],
    },
    {
      h: "Stand on your own. Belong to something larger.",
      p: [
        "Residential life works when independence and community grow together. Children become more capable of managing themselves while learning what it means to contribute to others.",
        "Boarding is where children become.",
      ],
    },
  ],
};

export const dalStudentLife: PageCopy = {
  slug: "/campuses/dalhousie/student-life",
  nav: "Student Life at Dalhousie",
  kicker: "Life beyond the classroom",
  title: "Living, learning and",
  emphasis: "growing together.",
  subhead:
    "At Dalhousie Campus, the school experience continues beyond lessons and preparation. Assemblies, speaking, performance, house activities, service, friendships and shared traditions give children different ways to participate, contribute and discover themselves.",
  primary: "Visit Dalhousie Campus",
  secondary: "Explore the Confidence Code",
  image: img.dalStudentLifeHero,
  image2: img.dalStudentLifeSplit,
  closeEyebrow: "Every child has a part to play",
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
      "Assemblies, speaking and performance, creative pursuits, service and duties, friendships, traditions and weekend life at the Mountain Campus.",
  },
  blocks: [
    {
      h: "Confidence is built through participation.",
      p: [
        "A voice becomes stronger by being used. Children develop confidence by having opportunities to participate. To answer. To present. To perform. To debate. To contribute to an assembly. To take responsibility for a group or task.",
        "These moments build communication and presence gradually. The goal is not to make every child the loudest. It is to make every child more comfortable being heard.",
      ],
    },
    {
      h: "Assemblies, speaking & performance",
      p: [
        "School gatherings and performance opportunities allow students to practise more than presentation. They learn to organise thoughts. Listen. Respond. Stand before others. And carry themselves with greater confidence.",
        "These experiences connect directly to the Dalhousie Confidence Code: Speak. Perform. Persuade. Polish. Lead.",
      ],
    },
    {
      h: "Creative pursuits",
      p: [
        "Creative experiences give children space to explore interests and forms of expression beyond academics. They allow students to create, interpret, collaborate and share something of their own.",
        "The value lies not only in the final performance or output. It lies in confidence, curiosity and participation.",
      ],
    },
    {
      h: "Service & duties",
      p: [
        "Contribution is part of belonging. Community becomes meaningful when children have a role within it. House duties, service and shared responsibilities teach students that participation is not only about what they receive.",
        "It is also about what others can depend on them to do. This is where responsibility starts becoming behaviour.",
      ],
    },
    {
      h: "Friendships & house community",
      p: [
        "Residential life creates time for relationships to deepen. Children learn to share spaces, work through differences and support one another across the ordinary rhythm of school life.",
        "Friendships become part of the emotional strength of the campus experience.",
      ],
    },
    {
      h: "Traditions, celebrations & events",
      p: [
        "Shared occasions create identity. They give students opportunities to participate in something larger than their individual timetable and create memories connected to the community they belong to.",
      ],
    },
    {
      h: "Weekend life",
      p: [
        "Weekends allow another side of student life to emerge. Less formal. More social. More room for recreation, sport, shared experiences and time with friends.",
        "These moments help the residential community feel like a place children live in, not merely a school they remain at.",
      ],
    },
    {
      h: "A school community in which every child has a part to play.",
      p: [
        "Student life gives children space to discover where they belong, how they contribute and how confidently they can participate.",
        "Because growing up together is part of growing well.",
      ],
    },
  ],
};

export const dalSports: PageCopy = {
  slug: "/campuses/dalhousie/sports-outdoors",
  nav: "Sports, Outdoors & Adventure",
  kicker: "Character in motion",
  title: "The mountain asks children to move,",
  emphasis: "adapt and try again.",
  subhead:
    "At Dalhousie Campus, the environment naturally brings physical activity closer to everyday life. Sport, fitness, outdoor movement and the demands of the terrain help children become stronger, more resilient and more confident in meeting challenge.",
  primary: "Explore the Sports Pathway",
  secondary: "Visit Dalhousie Campus",
  image: img.dalSportsHero,
  image2: img.dalSportsSplit,
  closeEyebrow: "Stronger bodies. Stronger responses.",
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
      "Fit for Life, house sport, competitive sport, strength and conditioning, outdoor adventure and the Dalhousie Fitness Card in a mountain setting.",
  },
  blocks: [
    {
      h: "The mountain is part of the experience.",
      p: [
        "The environment asks something of the child. Terrain changes the way children move through the day. Weather asks for adjustment. Outdoor experiences create different kinds of challenge.",
        "The child learns that effort is normal. That discomfort passes. And that confidence often grows after doing something that first felt difficult.",
      ],
    },
    {
      h: "Fit for Life",
      p: [
        "The starting point is not competition. It is physical competence. Every child should become more willing to move, participate and build greater confidence in their own body.",
        "Fitness becomes part of readiness for life, not simply preparation for a sports day.",
      ],
    },
    {
      h: "House sport",
      p: [
        "House sport creates participation, energy and belonging. Children compete as part of a group.",
        "They learn to support teammates, respond to results and understand that effort affects more than the individual.",
      ],
    },
    {
      h: "Competitive sport",
      p: [
        "For students ready for greater challenge, competitive participation can demand more consistency, preparation and composure.",
        "Training teaches discipline. Competition tests it. And both success and disappointment become opportunities to grow.",
      ],
    },
    {
      h: "Strength & conditioning",
      p: [
        "Physical progress takes structure. Strength and conditioning help children build capacity gradually and understand that becoming stronger requires consistency rather than occasional intensity.",
      ],
    },
    {
      h: "Outdoors & adventure",
      p: [
        "Outdoor experiences offer a different relationship with challenge. They ask children to adapt to the environment, work with others and become more comfortable when conditions are not completely predictable.",
        "In the mountains, the setting itself can become part of resilience-building.",
      ],
    },
    {
      h: "The Defence Pathway connection",
      p: [
        "For students drawn towards defence-oriented futures, physical readiness is one part of a larger preparation.",
        "The Mountain Campus allows fitness, terrain, discipline and teamwork to connect naturally with the Defence Pathway's larger framework: Mind. Body. Voice. Bearing. Service.",
      ],
    },
    {
      h: "The Dalhousie Fitness Card",
      p: [
        "Physical development should be visible too. The Fitness Card is designed to help students and parents see progress in participation, fitness and physical development over time.",
        "Because every child may not become an athlete. But every child can become stronger.",
      ],
    },
    {
      h: "Stronger bodies. Stronger responses.",
      p: [
        "Sport and outdoor life teach children what happens when things become difficult. Keep moving. Adjust. Work with others. Try again.",
        "Character in motion.",
      ],
    },
  ],
};

export const dalHouseCulture: PageCopy = {
  slug: "/campuses/dalhousie/house-culture-care",
  nav: "House Culture & Pastoral Care",
  kicker: "The child should be known",
  title: "A community to belong to.",
  emphasis: "Adults to turn to.",
  subhead:
    "Residential life asks children to become more independent. House culture ensures they do not have to become independent alone. The house gives each child an immediate community within the wider school: a place to belong, contribute, build relationships and receive guidance.",
  primary: "Speak to the Campus",
  secondary: "Explore Parent Connect",
  image: img.dalHouseHero,
  image2: img.dalHouseSplit,
  closeEyebrow: "Known. Guided. Supported. Growing.",
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
      "The house as a community, house parents and mentors, routine and responsibility, emotional care, health, safeguarding and parent communication.",
  },
  blocks: [
    {
      h: "The house as a community",
      p: [
        "Belonging creates the confidence to grow. The house brings students together around shared routines, spaces and responsibilities. Children learn how to live with others. How to contribute. How to adjust. How to respect differences. And how to become dependable within a community.",
        "Over time, the child moves from simply being part of the house to actively contributing to it.",
      ],
    },
    {
      h: "House parents & mentors",
      p: [
        "Children need adults who know more than their academic results. House parents and mentors can see another side of the child: how they manage routines, how they respond to difficulty, how they build friendships, whether they are participating, where they are becoming more independent and where they may need support.",
        "These relationships make pastoral care more personal.",
      ],
    },
    {
      h: "Routine, responsibility & belonging",
      p: [
        "Everyday residential routines provide small opportunities to build responsibility. Being prepared on time. Looking after belongings. Maintaining shared spaces. Completing a duty. Following through on a commitment.",
        "These behaviours may look ordinary. Repeated over time, they become self-management and maturity.",
      ],
    },
    {
      h: "Emotional care",
      p: [
        "Growing up will include difficult moments. Homesickness. Disagreements. Academic pressure. Uncertainty. Changes in friendships.",
        "Children need adults they trust and an environment in which asking for help is treated as part of growing well. Pastoral care is there to support the child through these moments without removing every challenge from their path.",
      ],
    },
    {
      h: "Health & wellbeing",
      p: [
        "The child's physical wellbeing is part of the wider care environment.",
        "Daily routines, nutrition, rest and access to appropriate medical support all contribute to how securely a child experiences residential life.",
      ],
    },
    {
      h: "Safety & safeguarding",
      p: [
        "Parents should understand how children are supervised and how concerns are identified, communicated and escalated.",
        "The School's current safeguarding and supervision information is published here alongside the relevant policies.",
      ],
    },
    {
      h: "Parent communication",
      p: [
        "Independence for the child should not become uncertainty for the parent. Parents need a clear understanding of who to speak to and how they will remain connected to their child's journey.",
        "Communication should help families understand academic progress, residential adjustment, wellbeing, participation and areas where the child may need greater support.",
      ],
    },
    {
      h: "Growth beyond marks",
      p: [
        "Residential growth often appears in small changes. A child manages a routine independently. Becomes more considerate in a shared space. Takes responsibility without being asked twice. Handles a difficult friendship more maturely. Begins asking for help at the right time.",
        "These changes matter. The Dalhousie Growth Note and Whole Child approach are designed to give them greater visibility.",
      ],
    },
    {
      h: "Care enough to support. Trust enough to let them grow.",
      p: [
        "The purpose of pastoral care is not to make childhood free of difficulty. It is to create an environment in which children can meet difficulty with guidance, security and increasing confidence in themselves.",
        "Known. Guided. Supported. Growing.",
      ],
    },
  ],
};

/* ── New Chandigarh Campus ─────────────────────────────────────────── */

export const newChandigarhCampus: PageCopy = {
  slug: "/campuses/new-chandigarh",
  nav: "New Chandigarh Campus",
  kicker: "The Modern Campus",
  title: "All-Round. Without",
  emphasis: "the Running Around.",
  subhead:
    "A child should not have to move between school, preparation, sport, communication classes and multiple outside programmes just to receive a complete education. New Chandigarh brings academics, preparation, confidence, sport, leadership and future pathways together within one contemporary Dalhousie environment.",
  primary: "Visit New Chandigarh Campus",
  secondary: "Explore the Academic Journey",
  image: img.chdHero,
  image2: img.chdSplit,
  closeEyebrow: "Visit the Modern Campus",
  pulls: [
    {
      slot: "grid",
      line: "More opportunity for the child. More continuity in the day. Less fragmentation for the family.",
      label: "Explore the Academic Journey",
      alt: "Visit New Chandigarh Campus",
    },
  ],
  meta: {
    title: "New Chandigarh Campus, The Modern Campus",
    description:
      "The academic journey from early years to senior school, residential and weekday-boarding flexibility, Competitive Edge, confidence, sport and pastoral care.",
  },
  blocks: [
    {
      h: "All-round is not about having more. It is about having everything that matters, in one place.",
      p: [
        "Parents today are not looking only for strong academics. They want their children to communicate confidently, stay physically active, develop wider interests, learn responsibility and move towards the future with greater clarity. The challenge is that these needs often exist in different places.",
        "New Chandigarh is designed around a different idea. What if more of the child's preparation could already be built into the school experience? Academics. Competitive preparation. Sport. Confidence. Communication. Leadership. Future pathways. Care. Different dimensions of development, one more coordinated environment.",
      ],
    },
    {
      h: "The academic journey",
      p: [
        "From curiosity to readiness. The academic journey develops with the child. The early years begin with movement, care and discovery. Primary Years strengthen foundations and inquiry. Middle School builds confidence and pathway readiness.",
        "Senior School brings greater direction, choice and serious preparation.",
      ],
    },
    {
      h: "Early Years",
      p: [
        "Movement. Rhythm. Care. Discovery. Young children need more than early academics.",
        "They need secure relationships, purposeful play, movement, language and the confidence to participate in the world around them.",
      ],
    },
    {
      h: "Primary Years",
      p: [
        "Strong foundations. Curious minds. Literacy, numeracy and conceptual learning are joined by inquiry, communication, collaboration and physical development.",
        "Children begin learning not only what to know, but how to think.",
      ],
    },
    {
      h: "Middle School",
      p: [
        "Foundation. Confidence. Pathway readiness. As academic depth increases, students also begin developing stronger study habits, responsibility and greater awareness of their own interests and strengths.",
      ],
    },
    {
      h: "Senior School",
      p: [
        "Direction. Discipline. Serious preparation. Senior School brings academic choices, board readiness, Competitive Edge, mentoring and future pathways into clearer focus.",
        "The student begins moving from broad possibility towards informed direction.",
      ],
    },
    {
      h: "Residential & weekday-boarding",
      p: [
        "Structure with greater flexibility. Families need different kinds of school experiences.",
        "New Chandigarh offers the opportunity to bring more of the student's academics, preparation, sport and development into one coordinated day, through the residential and weekday-boarding formats available to the relevant age and stage.",
      ],
    },
    {
      h: "Serious preparation. Without the second shift.",
      p: [
        "One of New Chandigarh's strongest advantages is that serious preparation need not begin only after the school day ends. Dalhousie Competitive Edge brings diagnostics, concept strengthening, guided practice, test discipline, doubt support and mentoring into a more structured academic pathway.",
        "Students can prepare towards boards and future competitive routes without the constant cycle of school, coaching, travel and late-night work.",
      ],
    },
    {
      h: "Academic choice without curriculum confusion",
      p: [
        "More options should create clearer direction, not more anxiety. As children grow, their academic journey should become more specific. But choice is valuable only when students understand what those choices mean.",
        "Through teaching, exposure, mentoring and the relevant Scholars and Achievers Tracks, students can begin understanding what interests them, where their strengths are becoming visible, what different pathways demand and what preparation should come next. The aim is not to decide a child's future too early. It is to help them become better prepared to choose it.",
      ],
    },
    {
      h: "Confidence, communication & leadership",
      p: [
        "Academic knowledge becomes more powerful when a child can express it. Students receive opportunities to speak, present, perform, collaborate and take responsibility.",
        "Over time, they learn to organise an idea. Participate in a group. Speak before others. Listen and respond. And lead when the moment requires it. The goal is not to create louder children. It is to develop more articulate and assured ones.",
      ],
    },
    {
      h: "Sport, exposure & future readiness",
      p: [
        "Sport gives children something the classroom cannot: the direct experience of effort. Teamwork. Competition. A setback. Another attempt.",
        "Physical development sits alongside academic and social growth so that children become stronger, healthier and more willing to participate.",
      ],
    },
    {
      h: "Modern should never mean impersonal.",
      p: [
        "Opportunity works best when the child remains known. As children encounter more choice and independence, they still need adults who understand their journey.",
        "Teachers, mentors and pastoral teams help parents stay connected to academic progress, participation, confidence and wellbeing. The campus may be contemporary. The responsibility towards the child remains deeply personal.",
      ],
    },
    {
      h: "The New Chandigarh child",
      p: [
        "Articulate. Adaptive. Confident. Choice-ready. Globally aware. The aim is a child who can recognise opportunity and respond to it.",
        "Someone who can communicate an idea. Adapt when circumstances change. Make increasingly informed choices. Work with different people. Prepare seriously without losing balance. And move towards the future without losing the values and discipline that ground them.",
      ],
    },
    {
      h: "Is New Chandigarh right for your child?",
      p: [
        "New Chandigarh may be a strong fit for families seeking academic choice and clearer future pathways, confidence, communication and leadership, all-round development in one connected environment, greater flexibility in the campus experience, serious preparation without a second-shift childhood, sport and wider exposure, a contemporary learning environment without losing Dalhousie values, and preparation for a future with more possibilities.",
      ],
    },
    {
      h: "See all-round development in action.",
      p: [
        "A campus is easiest to understand when you see how the day actually moves. Visit the classrooms. See how students participate. Understand how academic preparation fits into the day. Explore sport and student life. Meet the adults who guide and support the child.",
        "And experience how more of childhood can come together in one place. All-Round. Without the Running Around.",
      ],
    },
  ],
};

export const chdAcademicJourney: PageCopy = {
  kind: "sequence",
  slug: "/campuses/new-chandigarh/academic-journey",
  nav: "Academic Journey",
  kicker: "From curiosity to readiness",
  title: "Every stage prepares the child",
  emphasis: "for what comes next.",
  subhead:
    "The academic journey at New Chandigarh changes as the child grows. The youngest children need movement, care and discovery. Primary learners need strong foundations and curiosity. Middle School students need confidence and emerging direction. Senior students need clearer choices and serious preparation.",
  primary: "Explore the Stages",
  secondary: "Speak to Admissions",
  image: img.chdJourneyHero,
  image2: img.chdJourneySplit,
  closeEyebrow: "Progress parents can understand",
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
      "Toddler and Early Years, Primary, Middle and Senior School: what children learn at each stage, how the stages connect and how progress is reported.",
  },
  blocks: [
    {
      h: "One connected journey rather than a series of disconnected stages.",
      p: [
        "The stages are designed to build on one another. Curiosity becomes understanding. Understanding builds confidence. Confidence supports choice. Choice creates direction.",
        "The level of academic challenge changes as the child grows, but the Dalhousie commitment to confidence, care, responsibility and the whole child remains consistent.",
      ],
    },
    {
      h: "Toddler & Early Years",
      p: [
        "Movement, rhythm, play and discovery. The earliest stages create security first. Children learn through movement, sensory exploration, relationships, play and language while gradually becoming comfortable participating within a group.",
        "The goal is not to push formal academics earlier, but to build the confidence and foundations from which future learning can grow.",
      ],
    },
    {
      h: "Primary Years",
      p: [
        "Inquiry, thinking and connection. The Primary Years strengthen literacy, numeracy and conceptual understanding while preserving curiosity.",
        "Children learn to ask questions, connect ideas, communicate what they understand and participate with greater confidence.",
      ],
    },
    {
      h: "Middle School",
      p: [
        "Foundation, confidence and pathway readiness. Middle School introduces greater subject depth alongside stronger study habits, self-management and wider awareness of future possibilities.",
        "Students begin recognising interests and strengths without being forced to make final decisions too early.",
      ],
    },
    {
      h: "Senior School",
      p: [
        "Direction, discipline and serious preparation. Senior School brings academic choices, board readiness, mentoring and future pathways into sharper focus.",
        "The student begins moving from broad possibility towards informed direction, supported by structured preparation and guidance.",
      ],
    },
    {
      h: "Progress parents can understand",
      p: [
        "Assessment should help parents understand more than a score. It should show where the child is progressing, where support is needed and what they are ready for next.",
        "As children grow older, academic reporting can sit alongside wider insights into confidence, responsibility, participation and readiness.",
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
    "Young children learn through relationships, movement, play, language and the freedom to explore. The Early Years experience at New Chandigarh creates a secure, engaging environment where children can build confidence, curiosity and the foundations for future learning.",
  primary: "Book a Visit",
  secondary: "Speak to Admissions",
  image: img.chdEarlyHero,
  image2: img.chdEarlySplit,
  closeEyebrow: "Ready for what comes next",
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
      "A secure beginning, the Toddler Programme, learning through play, language and expression, physical and social development, and readiness for Primary.",
  },
  blocks: [
    {
      h: "A secure beginning",
      p: [
        "Confidence begins with feeling safe enough to explore. For a young child, belonging comes before achievement. Familiar routines, caring adults and a warm environment help children become comfortable with school, interact with others and gradually participate more independently.",
        "This sense of security gives them the confidence to explore, communicate and learn.",
      ],
    },
    {
      h: "The Toddler Programme",
      p: [
        "Movement, rhythm and care. For the youngest learners, the day is built around movement, sensory discovery, language and simple routines. Children begin to understand what it means to be part of a group while developing early confidence, social awareness and independence.",
        "The focus is not on bringing formal academics earlier. It is on creating the emotional, physical and social foundations that make later learning stronger.",
      ],
    },
    {
      h: "Learning through play",
      p: [
        "Play. Discover. Express. Play is how young children investigate the world. Through purposeful play, they experiment, imagine, build, solve problems and learn how to interact with others.",
        "Early concepts begin to make sense because children experience them rather than simply being told about them. Learning remains joyful, active and connected to curiosity.",
      ],
    },
    {
      h: "Language, communication & expression",
      p: [
        "Stories, songs, conversations and shared experiences help children develop language naturally. They learn to listen, ask questions, express needs and communicate ideas with increasing confidence.",
        "Art, music, movement and imaginative play give them additional ways to express what they think and feel. Over time, expression becomes an important part of confidence.",
      ],
    },
    {
      h: "Physical & social development",
      p: [
        "Movement supports balance, coordination and growing physical confidence, while shared play teaches children how to wait, share, listen, negotiate and understand other points of view.",
        "These everyday interactions help children become more comfortable within a community and more aware of the people around them.",
      ],
    },
    {
      h: "Ready for what comes next",
      p: [
        "Readiness is more than knowing more. A child is ready for the next stage when they can participate in routines, communicate with confidence, explore with curiosity, manage small responsibilities and engage more independently with learning.",
        "The Early Years build these foundations carefully, so children move into the Primary Years feeling secure, capable and ready to grow.",
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
    "The Primary Years strengthen the academic foundations children need while protecting the curiosity that makes learning meaningful. Literacy, numeracy and conceptual learning develop alongside communication, physical growth and increasing responsibility.",
  primary: "Book a Visit",
  secondary: "Explore the Confidence Code",
  image: img.chdPrimaryHero,
  image2: img.chdPrimarySplit,
  closeEyebrow: "Ready for Middle School",
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
      "Strong foundations, curiosity and conceptual learning, confidence and communication, sport and physical growth, and responsibility beginning early.",
  },
  blocks: [
    {
      h: "Strong foundations",
      p: [
        "Reading, writing, numeracy and reasoning give children the tools they need across every subject. The emphasis is not only on learning an answer, but on understanding ideas clearly enough to apply them in different contexts.",
        "Strong foundations give children greater confidence as learning becomes more complex.",
      ],
    },
    {
      h: "Curiosity & conceptual learning",
      p: [
        "Children are encouraged to ask questions, make connections and investigate how ideas relate to the world around them.",
        "Inquiry keeps the learner active. Instead of only remembering information, children begin understanding why something works and how different ideas connect.",
      ],
    },
    {
      h: "Confidence & communication",
      p: [
        "Primary school is an important stage for learning how to express an idea. Classroom discussion, presentations, collaboration and wider participation help children become increasingly comfortable speaking, listening and contributing.",
        "Confidence grows alongside knowledge.",
      ],
    },
    {
      h: "Sport & physical growth",
      p: [
        "Movement and sport support health, coordination, teamwork and confidence.",
        "Children learn that physical progress also takes practice, effort and persistence, qualities that strengthen their approach to learning as well.",
      ],
    },
    {
      h: "Responsibility begins early",
      p: [
        "Children gradually learn to manage belongings, follow routines, complete tasks and take ownership of small responsibilities.",
        "These everyday habits begin building the self-management and judgement that will matter more as they move into Middle School.",
      ],
    },
    {
      h: "Ready for Middle School",
      p: [
        "By the end of the Primary Years, the aim is a child with stronger academic foundations, greater curiosity, growing confidence and a better ability to manage learning independently.",
      ],
    },
  ],
};

export const chdMiddleSchool: PageCopy = {
  slug: "/campuses/new-chandigarh/middle-school",
  nav: "Middle School",
  kicker: "The years of foundation and direction",
  title: "Foundation. Confidence.",
  emphasis: "Pathway readiness.",
  subhead:
    "Middle School is a period of significant change. Academic expectations become deeper while children also become more aware of their interests, strengths and identity. The stage is designed to build stronger academics, better habits and greater confidence without forcing students into premature choices.",
  primary: "Speak to Admissions",
  secondary: "Explore Academic Pathways",
  image: img.chdMiddleHero,
  image2: img.chdMiddleSplit,
  closeEyebrow: "Towards better decisions",
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
      "Greater academic depth, study habits and self-management, confidence during change, sport and resilience, an introduction to Competitive Edge and pathway readiness.",
  },
  blocks: [
    {
      h: "Greater academic depth",
      p: [
        "Students move into more specialised learning and are expected to connect ideas, manage greater complexity and communicate their understanding with more precision.",
        "The priority remains concept depth and strong foundations before high-pressure preparation.",
      ],
    },
    {
      h: "Study habits & self-management",
      p: [
        "Planning, organisation, revision, note-making and digital discipline become increasingly important.",
        "Students begin learning that strong performance is built through consistent habits rather than last-minute effort.",
      ],
    },
    {
      h: "Confidence during change",
      p: [
        "Middle School can be a stage when children become more self-conscious. This makes opportunities to speak, present, collaborate, perform and participate even more important.",
        "Confidence is built through repeated experience, not simply encouragement.",
      ],
    },
    {
      h: "Sport, responsibility & resilience",
      p: [
        "Regular physical activity supports energy, teamwork and resilience during a stage of rapid growth.",
        "At the same time, students take on greater responsibility for routines, commitments and everyday choices, helping them move gradually from dependence towards ownership.",
      ],
    },
    {
      h: "Introduction to Competitive Edge",
      p: [
        "Academic diagnostics, concept strengthening and guided practice can begin giving students greater clarity about where they stand and what they need to improve.",
        "The objective is readiness, not premature examination pressure.",
      ],
    },
    {
      h: "Pathway readiness",
      p: [
        "Students do not need to know exactly what they want to pursue yet. They do need opportunities to understand what interests them, where their strengths are becoming visible and what future choices may eventually be available.",
        "Mentoring helps turn growing awareness into better decisions later.",
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
    "Senior School is where academic decisions begin shaping what comes next. Students need clarity about subjects and future routes, disciplined preparation and adults who can help them understand both their ambitions and the work those ambitions require.",
  primary: "Speak to Admissions",
  secondary: "Explore Competitive Edge",
  image: img.chdSeniorHero,
  image2: img.chdSeniorSplit,
  closeEyebrow: "Ready beyond the examination",
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
      "Academic choice with clarity, board readiness, Competitive Edge, the Scholars and Achievers Tracks, defence and wider pathways, mentoring and direction.",
  },
  blocks: [
    {
      h: "Academic choice with clarity",
      p: [
        "Greater choice should not create greater confusion. Students and parents need a clear understanding of subjects, combinations, prerequisites and the future routes connected to each option.",
        "The goal is not to place every child on the same path, but to help each student choose with greater awareness.",
      ],
    },
    {
      h: "Board readiness",
      p: [
        "Strong board preparation requires concept clarity, planned revision, practice, feedback and examination discipline.",
        "The academic rhythm helps students prepare steadily rather than relying on pressure at the end of the year.",
      ],
    },
    {
      h: "Dalhousie Competitive Edge",
      p: [
        "Serious preparation. Without the second shift. Competitive Edge brings diagnostics, guided practice, testing, doubt support and progress tracking into the academic experience.",
        "Students receive structured preparation without having to create another academic life after the school day.",
      ],
    },
    {
      h: "Scholars & Achievers Tracks",
      p: [
        "The Scholars Track supports approved competitive and top-university routes where applicable. The Achievers Track supports board readiness and a wider set of futures across commerce, humanities, law, design, business, entrepreneurship and other approved pathways.",
        "The purpose is different preparation for different ambitions.",
      ],
    },
    {
      h: "Defence & wider future pathways",
      p: [
        "Students drawn towards defence can understand the academic, physical, communication and service-oriented preparation available through the Dalhousie Defence Pathway, subject to the approved New Chandigarh programme.",
        "Other students may explore wider future routes through mentoring, academic guidance and the relevant campus opportunities.",
      ],
    },
    {
      h: "Mentoring, leadership & direction",
      p: [
        "Senior students need more than another score. They need support in interpreting progress, setting priorities and deciding what to do next.",
        "Leadership, presentations and responsibility also help students become more confident in representing their ideas and making increasingly independent decisions.",
      ],
    },
    {
      h: "Ready beyond the examination",
      p: [
        "The aim is not only to complete Senior School successfully.",
        "It is to leave school able to communicate, make informed choices, manage pressure and move towards the future with greater direction.",
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
    "Different families need different levels of immersion in the school day. New Chandigarh's residential and weekday-boarding experience is designed to keep academics, preparation, sport, confidence, care and routines more closely connected while giving families flexibility across the models available to their child's age and stage.",
  primary: "Book a Visit",
  secondary: "Speak to Admissions",
  image: img.chdBoardingHero,
  image2: img.chdBoardingSplit,
  closeEyebrow: "Choosing the right model",
  pulls: [
    {
      slot: "grid",
      line: "Day-boarding, weekday or full residential. Ask which model suits your child, honestly.",
      label: "Speak to Admissions",
      alt: "Book a Visit",
    },
  ],
  meta: {
    title: "Residential & Day-Boarding, New Chandigarh Campus",
    description:
      "One philosophy across different formats, a more connected day, preparation within the rhythm, care and supervision, and choosing the right model.",
  },
  blocks: [
    {
      h: "One philosophy across different formats",
      p: [
        "The amount of time a student spends on campus may differ, but the larger Dalhousie philosophy remains consistent.",
        "Each available model should give the child a structured academic experience, opportunities to participate, access to guidance and increasing responsibility appropriate to their stage.",
      ],
    },
    {
      h: "A more connected day",
      p: [
        "The value of weekday-boarding or residential flexibility is not simply that the child stays on campus longer.",
        "It is that learning, preparation, sport, meals, routines and support can work together more coherently, reducing the number of separate journeys families need to manage.",
      ],
    },
    {
      h: "Preparation within the rhythm",
      p: [
        "Where relevant to the student's stage, guided preparation and Competitive Edge can sit within the wider campus day.",
        "This allows academic work to remain serious without pushing sport, communication, relationships and rest out of the child's routine.",
      ],
    },
    {
      h: "Care, supervision & guidance",
      p: [
        "Children need increasing independence, but they also need adults who remain close enough to notice when support is required.",
        "Mentoring, pastoral care, medical support, supervision and parent communication form part of the reassurance around every available model.",
      ],
    },
    {
      h: "Choosing the right model",
      p: [
        "The right format depends on the child's age, readiness, academic needs, family routine and the level of independence the family is comfortable with.",
        "Speak to admissions for the exact formats, timings and eligibility currently available for your child's grade.",
      ],
    },
  ],
};

export const chdStudentLife: PageCopy = {
  slug: "/campuses/new-chandigarh/student-life",
  nav: "Student Life, Sports & Leadership",
  kicker: "Life beyond the lesson",
  title: "More ways to participate. More ways to",
  emphasis: "discover what you can become.",
  subhead:
    "Student life gives children opportunities to find strengths that may not always appear first in the classroom. Sport, speaking, performance, leadership, clubs, service and shared experiences help students become more confident, adaptable and involved in the community around them.",
  primary: "Visit New Chandigarh Campus",
  secondary: "Explore the Confidence Code",
  image: img.chdStudentLifeHero,
  image2: img.chdStudentLifeSplit,
  closeEyebrow: "The New Chandigarh child",
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
      "Confidence through participation, sport and physical development, leadership through responsibility, clubs and creativity, and service and community.",
  },
  blocks: [
    {
      h: "Confidence through participation",
      p: [
        "Confidence grows through use. Presenting an idea, participating in a discussion, performing, collaborating and taking responsibility all help children become increasingly comfortable being seen and heard.",
        "The goal is not simply confidence on stage. It is confidence in participation.",
      ],
    },
    {
      h: "Sport & physical development",
      p: [
        "Sport develops fitness, teamwork, consistency and resilience. Children learn how to prepare, contribute to a team, respond to a result and try again when something does not go their way.",
        "Every child may not become an athlete, but every child can become stronger and more willing to participate.",
      ],
    },
    {
      h: "Leadership through responsibility",
      p: [
        "Leadership begins before the title. Students learn to lead by following through on a commitment, contributing to a group, listening to others and accepting responsibility for an outcome.",
        "These experiences help turn confidence into accountability.",
      ],
    },
    {
      h: "Clubs, creativity & wider exposure",
      p: [
        "Different children discover confidence in different spaces. Creative pursuits, clubs, performance and collaborative experiences allow students to explore interests and find areas where participation feels meaningful.",
        "The point is not to build the longest activity list. It is to give children enough exposure to discover where they can grow.",
      ],
    },
    {
      h: "Specialist sporting experiences",
      p: [
        "Golf, polo and equestrian form part of the New Chandigarh campus story, presented through what they develop in the child rather than as a facilities checklist.",
        "Current programmes, eligibility and availability are confirmed by the School while enquiring.",
      ],
    },
    {
      h: "Service & community",
      p: [
        "Student life also teaches that belonging comes with contribution. Service, community responsibilities and shared events give children opportunities to understand that what they do affects other people.",
        "This is where confidence, responsibility and leadership begin to come together.",
      ],
    },
    {
      h: "The New Chandigarh child",
      p: [
        "Articulate. Adaptive. Confident. Choice-ready. Globally aware. The value of student life is not the number of activities on offer.",
        "It is the child who becomes more willing to participate, more confident communicating, stronger physically and better prepared to recognise and respond to opportunity.",
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
