import type { PageCopy } from "./types";
import { img } from "../images";

/* Pages 31 to 37 of Website Copy Draft 2: the admissions journey. */

export const admissions: PageCopy = {
  slug: "/admissions",
  nav: "Admissions",
  kicker: "Begin the Dalhousie journey",
  title: "Find your",
  emphasis: "Dalhousie experience.",
  subhead:
    "Choosing a school begins with fit. Understand the two campuses, explore the programmes, ask the questions that matter and experience the day before you decide.",
  primary: "Book a Visit",
  secondary: "Apply Now",
  image: img.admissionsHero,
  image2: img.admissionsSplit,
  closeEyebrow: "When you are ready",
  pulls: [
    {
      slot: "grid",
      line: "Fit comes first. Six questions will tell you more than an hour of brochures.",
      label: "Find Your Campus",
      alt: "Compare Campuses",
    },
    {
      slot: "list",
      line: "Most families decide after they visit. Pick a morning and see the day for yourself.",
      label: "Book a Visit",
      alt: "Speak to Admissions",
    },
  ],
  meta: {
    title: "Admissions, Dalhousie Public School",
    description:
      "Choose the right campus, understand the process and fees, book a visit, download the prospectus, speak to admissions or begin your application.",
  },
  blocks: [
    {
      h: "Choose the right campus",
      p: [
        "Begin with the campus that fits your family. The Mountain Campus and the Modern Campus carry the same Dalhousie promise through different environments, levels of residential depth and parent choices.",
      ],
    },
    {
      h: "Find Your Campus",
      p: [
        "Find Your Campus considers the child's stage, residential preference, academic needs and family priorities through six short questions.",
      ],
    },
    {
      h: "Entry points and programmes",
      p: [
        "Admissions information lists the grades, programmes and residential models currently open at each campus.",
      ],
    },
    {
      h: "Understand the process",
      p: [
        "See the journey from enquiry and campus consultation to visit, application, assessment or interaction, offer, confirmation and joining.",
      ],
    },
    {
      h: "Review fees clearly",
      p: [
        "Compare approved fees by campus, grade and residential model, with inclusions, exclusions, payment schedule and last-updated date.",
      ],
    },
    {
      h: "Visit before you decide",
      p: [
        "A visit allows the family to experience the day, meet the team, see the environment and ask questions in context.",
      ],
    },
    {
      h: "Download the prospectus",
      p: [
        "The prospectus provides a concise overview of the Dalhousie promise, campuses, programmes, admissions process and contacts.",
      ],
    },
    {
      h: "Speak to admissions",
      p: [
        "Admissions helps the family understand fit, not simply complete a form. Clear campus-specific contact routes connect each family to the right team.",
      ],
    },
    {
      h: "Ready to apply?",
      p: [
        "Families who are ready can move into the approved application platform with clear requirements and support.",
      ],
    },
  ],
};

export const admissionProcess: PageCopy = {
  kind: "sequence",
  slug: "/admissions/process",
  nav: "Admission Process",
  kicker: "A clear path from enquiry to joining",
  title: "Know what",
  emphasis: "happens next.",
  subhead:
    "The admissions journey is considered, transparent and human. Each step helps the School and family understand whether the experience is the right fit for the child.",
  primary: "Start an Enquiry",
  secondary: "Apply Now",
  image: img.processHero,
  image2: img.processSplit,
  closeEyebrow: "Need help?",
  pulls: [
    {
      slot: "grid",
      line: "Step three is the one that decides it for most families. Choose your morning.",
      label: "Book a Visit",
      alt: "Speak to Admissions",
    },
  ],
  meta: {
    title: "Admission Process, Dalhousie Public School",
    description:
      "Eight steps from enquiry and campus consultation to visit, application, documents, assessment, offer and joining preparation.",
  },
  blocks: [
    {
      h: "1. Enquiry",
      p: [
        "Share the child's age, grade, current school, preferred campus, residential interest and the questions most important to your family.",
      ],
    },
    {
      h: "2. Campus consultation",
      p: [
        "An admissions counsellor helps the family understand campus fit, available programmes, residential models and the next appropriate step.",
      ],
    },
    {
      h: "3. Campus visit",
      p: [
        "Visit the campus, experience the environment and discuss academics, preparation, care, fees and daily rhythm.",
      ],
    },
    {
      h: "4. Application",
      p: [
        "Complete the approved application form and submit the required information through the School's selected platform.",
      ],
    },
    {
      h: "5. Required documents",
      p: [
        "Required documents are listed by campus and grade, with clear file and verification requirements.",
      ],
    },
    {
      h: "6. Assessment or interaction",
      p: [
        "The admissions team explains the purpose, format, participants, preparation expectations and any grade-specific differences before the interaction.",
      ],
    },
    {
      h: "7. Offer and confirmation",
      p: [
        "The offer communication sets out its validity period, fee or payment requirement and the steps for accepting the place.",
      ],
    },
    {
      h: "8. Joining preparation",
      p: [
        "After confirmation, families receive the approved joining pack, calendar, uniform information, residential checklist, medical forms and orientation details.",
      ],
    },
    {
      h: "Need help at any stage?",
      p: [
        "Contact the correct admissions team at any stage and receive confirmation after each digital submission.",
      ],
    },
  ],
};

export const fees: PageCopy = {
  kind: "sequence",
  slug: "/admissions/fees",
  nav: "Fees",
  kicker: "Transparent, current and campus-specific",
  title: "Clear fees.",
  emphasis: "Clear choices.",
  subhead:
    "Select the campus, grade and residential model to view the approved fee structure. Every figure carries an effective date and a clear explanation of what is included.",
  primary: "Compare Fees",
  secondary: "Speak to Admissions",
  image: img.feesHero,
  image2: img.feesSplit,
  closeEyebrow: "Before you commit",
  pulls: [
    {
      slot: "grid",
      line: "No hidden lines, no surprises in term two. Ask us to walk you through the full year.",
      label: "Speak to Admissions",
      alt: "Book a Visit",
    },
  ],
  meta: {
    title: "Fees, Dalhousie Public School",
    description:
      "Approved fees by campus, grade and residential model, with inclusions, exclusions, payment schedule, refund terms and effective dates.",
  },
  blocks: [
    {
      h: "Select your campus",
      p: ["Choose Dalhousie Campus or New Chandigarh Campus."],
    },
    {
      h: "Select the child's grade",
      p: ["Only grades currently offered at the selected campus appear."],
    },
    {
      h: "Select the residential model",
      p: [
        "Choose from the approved day, day-boarding, weekly boarding, full residential or other available models.",
      ],
    },
    {
      h: "Fee structure",
      p: [
        "Tuition, boarding, meals, activities, deposits, transport and other approved components appear in one consistent format.",
      ],
    },
    {
      h: "What is included",
      p: ["The approved services and experiences included in the displayed fee are listed clearly."],
    },
    {
      h: "What is not included",
      p: [
        "Uniform, books, examination fees, travel, specialist programmes and refundable deposits are shown separately where applicable.",
      ],
    },
    {
      h: "Payment schedule",
      p: [
        "The payment schedule sets out due dates, instalments, approved payment methods and applicable late-payment information.",
      ],
    },
    {
      h: "Refund and withdrawal",
      p: [
        "View the current approved policy for complete refund, withdrawal and notice-period terms.",
      ],
    },
    {
      h: "Important information",
      p: [
        "Every fee record states the academic year, effective date and applicable tax treatment. Any revision is published only after formal School approval.",
      ],
    },
  ],
};

export const bookAVisit: PageCopy = {
  kind: "sequence",
  slug: "/admissions/book-a-visit",
  nav: "Book a Visit",
  kicker: "See the Dalhousie experience in action",
  title: "Visit the day,",
  emphasis: "not only the buildings.",
  subhead:
    "A campus visit lets you experience the rhythm: how children learn, prepare, speak, play, eat, live and relate to the adults around them.",
  primary: "Book My Visit",
  secondary: "Call Admissions",
  image: img.visitHero,
  image2: img.visitSplit,
  closeEyebrow: "If you need us sooner",
  meta: {
    title: "Book a Visit, Dalhousie Public School",
    description:
      "Choose a campus, tell us about your child and pick a preferred date. The admissions team confirms your visit and shares directions and arrival information.",
  },
  blocks: [
    {
      h: "Choose a campus",
      p: [
        "Choose Dalhousie Campus, New Chandigarh Campus or 'Help me choose'. A short campus description helps families who are still deciding.",
      ],
    },
    {
      h: "Tell us about your child",
      p: [
        "Student name, age, current grade, intended entry grade, current school and residential interest.",
      ],
    },
    {
      h: "Tell us what matters to your family",
      p: [
        "Choose academics, Competitive Edge, Defence Pathway, residential life, early years, sport, confidence, care, fees or another area.",
      ],
    },
    {
      h: "Choose a preferred date",
      p: [
        "Choose from the available visit windows. Your visit is confirmed after the admissions team contacts you.",
      ],
    },
    {
      h: "Consent and privacy",
      p: [
        "I agree that Dalhousie Public School may use these details to arrange the visit and respond to this admissions enquiry.",
      ],
    },
    {
      h: "Before your visit",
      p: [
        "Before your visit, we will share directions, the arrival point, expected duration, identification requirements, accessibility information and a contact number.",
      ],
    },
    {
      h: "Alternative contact",
      p: [
        "Need help sooner? Contact the admissions team by telephone or approved WhatsApp.",
      ],
    },
  ],
};

export const enquire: PageCopy = {
  kind: "sequence",
  slug: "/admissions/enquire",
  nav: "Enquire & Prospectus",
  kicker: "Start the right conversation",
  title: "Tell us what your",
  emphasis: "family is looking for.",
  subhead:
    "Share a few details about the child and your priorities. The enquiry will be routed to the appropriate campus team, and you can access the current prospectus.",
  primary: "Submit Enquiry",
  secondary: "Download Prospectus",
  image: img.enquireHero,
  image2: img.enquireSplit,
  closeEyebrow: "What happens next",
  meta: {
    title: "Enquire & Download Prospectus, Dalhousie Public School",
    description:
      "Share your child's details and your family's priorities. Your enquiry is routed to the right campus team, and the current prospectus is available to download.",
  },
  blocks: [
    {
      h: "Campus interest",
      p: ["Choose Dalhousie Campus, New Chandigarh Campus or 'Help me choose'."],
    },
    {
      h: "Student information",
      p: ["Name, age, current grade, intended entry year, intended grade and current school."],
    },
    {
      h: "Residential preference",
      p: ["Choose the residential option currently available for the selected campus."],
    },
    {
      h: "Parent contact details",
      p: ["Name, relationship, email, telephone, city and preferred contact method."],
    },
    {
      h: "Your priorities",
      p: [
        "Choose academics, preparation, confidence, sport, residential life, Defence Pathway, early years, fees, care or another question.",
      ],
    },
    {
      h: "Consent",
      p: [
        "I agree that Dalhousie Public School may use these details to respond to my enquiry. Optional updates and marketing communication are requested separately.",
      ],
    },
    {
      h: "Prospectus access",
      p: [
        "Download the current Dalhousie Public School prospectus.",
        "Thank you for contacting Dalhousie Public School. Your enquiry has been routed to the relevant admissions team. We will respond through your preferred contact method.",
      ],
    },
  ],
};

export const apply: PageCopy = {
  kind: "sequence",
  slug: "/admissions/apply",
  nav: "Apply Now",
  kicker: "Begin your application",
  title: "Ready to take",
  emphasis: "the next step?",
  subhead:
    "Review the requirements, select the campus and programme, and continue to the School's approved application platform.",
  primary: "Start Application",
  secondary: "Get Help",
  image: img.applyHero,
  image2: img.applySplit,
  closeEyebrow: "After you submit",
  pulls: [
    {
      slot: "grid",
      line: "Not sure yet? Nothing here is lost by visiting first.",
      label: "Book a Visit",
      alt: "Speak to Admissions",
    },
  ],
  meta: {
    title: "Apply Now, Dalhousie Public School",
    description:
      "Prepare your documents, choose the campus, programme and grade, review the requirements and continue to the approved application platform.",
  },
  blocks: [
    {
      h: "Before you begin",
      p: [
        "Prepare the child's basic information, parent or guardian details, current school information and the documents listed for the selected grade.",
      ],
    },
    {
      h: "Choose a campus",
      p: [
        "Choose Dalhousie Campus or New Chandigarh Campus. Only grades and residential models currently open for application are shown.",
      ],
    },
    {
      h: "Choose the programme and grade",
      p: [
        "Choose the programme, grade and residential model for which you wish to apply. Unavailable combinations do not appear.",
      ],
    },
    {
      h: "Application requirements",
      p: [
        "Before you begin, review the age criteria, required documents, assessment or interaction process and any campus-specific conditions.",
      ],
    },
    {
      h: "Continue to the application platform",
      p: ["Continue to the School's secure application system."],
    },
    {
      h: "Technical help",
      p: [
        "Need technical help? Contact admissions for support with login, payment, document upload or form completion.",
      ],
    },
    {
      h: "Privacy and consent",
      p: [
        "Your application information is processed for admissions in accordance with the approved privacy notice.",
      ],
    },
    {
      h: "Application confirmation",
      p: [
        "After submission, the application platform provides a reference number or clear confirmation.",
      ],
    },
  ],
};

export const admissionsFaqs: PageCopy = {
  slug: "/admissions/faqs",
  nav: "Admissions FAQs",
  kicker: "Questions parents ask before they decide",
  title: "Clear answers, organised",
  emphasis: "around the parent journey.",
  subhead:
    "Search by campus or topic to find current information about admissions, academics, fees, residential life, care, visits and applications.",
  primary: "Ask Admissions",
  secondary: "Book a Visit",
  image: img.faqsHero,
  image2: img.faqsSplit,
  closeEyebrow: "Still need help?",
  meta: {
    title: "Admissions FAQs, Dalhousie Public School",
    description:
      "Answers on campus choice, the admission process, fees, residential life, safety and medical care, academics, visits and applications.",
  },
  blocks: [],
};

export const admissionsPages = [
  admissions,
  admissionProcess,
  fees,
  bookAVisit,
  enquire,
  apply,
  admissionsFaqs,
];

/* FAQ content, page 37 of the deck. Kept as its own structure because the
   page needs search and campus/topic filtering rather than prose bands. */
export const admissionsFaqItems: { topic: string; q: string; a: string }[] = [
  {
    topic: "Campus choice",
    q: "How do the two campuses differ, and how do we choose?",
    a: "Dalhousie Campus is the Mountain Campus: a deeper, full residential experience shaped by mountain discipline, house culture and outdoor strength. New Chandigarh is the Modern Campus: All-Round. Without the Running Around. Current grade, programme and residential availability is shown for each campus. Find Your Campus uses six short questions to suggest the experience that may best fit your child and family.",
  },
  {
    topic: "Admission process",
    q: "What does the admission process involve?",
    a: "The journey begins with an enquiry or campus consultation, followed by a visit, application, required documents and any approved assessment or interaction. The School then communicates the decision and joining steps. Opening dates, entry points and response timelines are published for the relevant campus and grade.",
  },
  {
    topic: "Fees",
    q: "How are fees structured, and what is included?",
    a: "Fees vary by campus, grade and residential model. The Fees page shows the approved structure, what is included, what is charged separately, the payment schedule and the effective date. Deposits and additional expenses are identified separately. The current refund and withdrawal policy is available under Policies & Disclosures.",
  },
  {
    topic: "Residential life",
    q: "How does residential life work, and how will we stay in touch?",
    a: "Residential students belong to a house community supported by house parents, mentors and campus teams. Communication combines scheduled contact, mentor updates, academic reporting, Whole Child reporting and urgent escalation where required. Families receive a current joining and packing checklist after admission is confirmed. Weekends balance sport, clubs, outdoor experience, community, rest, service and time with peers and mentors.",
  },
  {
    topic: "Safety and medical care",
    q: "How are safety, medical care and safeguarding handled?",
    a: "Medical support, emergency response, medication management, supervision and parent notification follow the approved campus processes. Safeguarding is built on clear adult responsibility, access control, reporting routes, consent, privacy and escalation. Campus-specific medical and safeguarding details are available through Pastoral Care & Parent Connect and the current approved policies.",
  },
  {
    topic: "Academics and pathways",
    q: "What academic pathways are available?",
    a: "Current curriculum, grades, subjects and pathways are shown separately for each campus. Dalhousie Competitive Edge integrates diagnostics, concept strengthening, guided practice, test discipline, doubt support and mentoring into the designed day. The Scholars Track supports approved competitive and top-university pathways; the Achievers Track supports boards and wider academic routes. The Defence Pathway develops academic readiness, fitness, communication, bearing and service orientation. Availability and eligibility vary by campus and stage.",
  },
  {
    topic: "Visits",
    q: "How do we book a visit, and what will we see?",
    a: "Book a visit online by selecting the campus, child's grade, residential interest and preferred date. The admissions team confirms the schedule and shares directions, arrival information and expected duration. Families may request visits to both campuses. A visit is designed to help you experience how children learn, prepare, speak, play, eat, live and relate to the adults around them.",
  },
  {
    topic: "Applications and documents",
    q: "What documents are required, and what if we need help?",
    a: "Required documents are listed by campus and grade before the application begins. For corrections, login, payment, document upload or technical difficulty, contact the admissions team using the support route on the Apply Now page. After submission, the application platform provides a reference number or clear confirmation.",
  },
  {
    topic: "Still need help",
    q: "Our question is not answered here. What should we do?",
    a: "If the answer affects eligibility, fees, policy or a child-specific decision, contact admissions for the current approved information.",
  },
];
