import type { PageCopy } from "./types";
import { img } from "../images";

/* The admissions journey, transcribed from Final Reviewed Content - DPS.

   The reviewed content sets the admission rule plainly: no entrance test up to
   Grade II, an entrance/diagnostic assessment from Grade III onwards, and
   registration that begins the process without confirming a place. Every page
   below states it the same way. */

export const admissions: PageCopy = {
  slug: "/admissions",
  nav: "Admissions",
  kicker: "Join Dalhousie",
  title: "Find the right beginning",
  emphasis: "for your child.",
  subhead:
    "Choosing a school is about more than completing an application. It is about finding an environment in which your child can learn seriously, grow confidently and become increasingly ready for the future.",
  primary: "Begin an Enquiry",
  secondary: "Book a Visit",
  image: img.admissionsHero,
  image2: img.admissionsSplit,
  closeEyebrow: "Start with a conversation",
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
      "Choose the right campus, understand the admission journey and the fees, book a visit, speak to admissions or begin your enquiry.",
  },
  blocks: [
    {
      h: "Start with the right campus.",
      p: [
        "One Dalhousie. Two ways to grow. The two campuses offer distinct expressions of the same Dalhousie philosophy. Dalhousie Campus, the Mountain Campus, offers a deeper residential experience shaped by mountain discipline, academic seriousness, house culture, outdoor strength and growing independence.",
        "New Chandigarh Campus, the Modern Campus, brings academics, preparation, confidence, sport, leadership and future pathways together within a contemporary environment. Before applying, families can understand both experiences and choose the one that feels closer to what their child needs.",
      ],
    },
    {
      h: "A simple admission journey",
      p: [
        "Clear steps. Personal guidance. The admission process begins with registration. For children applying up to Grade II, there is no entrance test. From Grade III onwards, students complete an entrance or diagnostic assessment before admission is confirmed.",
        "01 Register: complete the registration form with the student and parent details. 02 Understand the child: applicants up to Grade II are taken forward without an entrance test, while Grade III onwards complete an assessment. 03 Admission confirmation: the School communicates the decision and next formalities. 04 Complete formalities: submit the required documentation and fee payment to confirm the seat.",
      ],
    },
    {
      h: "Understand the fees",
      p: [
        "Parents should be able to understand the financial commitment clearly before completing admission.",
        "The published schedules set out tuition, boarding or day-boarding charges, deposits, the instalment plan and the concessions available.",
      ],
    },
    {
      h: "See Dalhousie before you decide.",
      p: [
        "A school should be experienced, not only researched. A campus visit gives families the opportunity to understand the environment, see the spaces and speak with the admissions team before making a decision.",
        "Parents can choose the campus and preferred visit date, after which the School team confirms the visit.",
      ],
    },
    {
      h: "Have a question?",
      p: [
        "If you are still deciding between campuses, want to understand the appropriate grade, boarding format, fees or admission process, send us an enquiry.",
        "Our admissions team will connect with you and help you understand the next step.",
      ],
    },
    {
      h: "Frequently asked questions",
      p: [
        "From entrance requirements and registration to fees, visits and boarding, find quick answers to the questions parents ask most often.",
      ],
    },
    {
      h: "Start with a conversation.",
      p: [
        "Every child and every family begins from a different place.",
        "Tell us what you are looking for. We will help you understand the Dalhousie experience and the next step in your child's admission journey.",
      ],
    },
  ],
};

export const admissionProcess: PageCopy = {
  kind: "sequence",
  slug: "/admissions/process",
  nav: "Admission Process",
  kicker: "The admission process",
  title: "A clear path to",
  emphasis: "joining Dalhousie.",
  subhead:
    "We want the admission process to help families understand the School while allowing us to understand the child. The journey begins with registration and varies slightly according to the grade for which the child is applying.",
  primary: "Begin an Enquiry",
  secondary: "Book a Visit",
  image: img.processHero,
  image2: img.processSplit,
  closeEyebrow: "Welcome to Dalhousie",
  pulls: [
    {
      slot: "grid",
      line: "A visit is the step that decides it for most families. Choose your morning.",
      label: "Book a Visit",
      alt: "Speak to Admissions",
    },
  ],
  meta: {
    title: "Admission Process, Dalhousie Public School",
    description:
      "Registration, the admission interaction or assessment from Grade III onwards, admission confirmation, documents and fee formalities, and joining Dalhousie.",
  },
  blocks: [
    {
      h: "Step 1. Complete registration",
      p: [
        "Parents begin by completing the registration form with the student's details, parent or guardian information, contact details, current school and the grade being applied for.",
        "The registration material also asks for proof of the child's date of birth and records the requested residential format. Registration begins the admission process; it does not by itself confirm admission.",
      ],
    },
    {
      h: "Step 2. Admission interaction or assessment",
      p: [
        "Up to Grade II, no entrance test is required. Once registration is complete, the admissions team will guide the family through the relevant next steps for admission.",
        "Students applying for Grade III and above complete an entrance or diagnostic assessment. The assessment helps the School understand the child's current academic level and readiness for the grade being applied for.",
      ],
    },
    {
      h: "Step 3. Admission confirmation",
      p: [
        "Once the relevant process has been completed, the admissions team communicates the admission outcome and guides parents through the next formalities.",
        "Any additional information required for the relevant grade or campus will be communicated directly to the family.",
      ],
    },
    {
      h: "Step 4. Documents & fee formalities",
      p: [
        "Admission is completed once the required documentation and applicable admission fees and dues have been submitted.",
        "Parents should refer to the current fee schedule for the campus and residential format selected.",
      ],
    },
    {
      h: "Step 5. Welcome to Dalhousie",
      p: [
        "Once admission formalities are complete, the School will share the information required to prepare the child and family for joining.",
        "A new school journey begins here.",
      ],
    },
  ],
};

export const fees: PageCopy = {
  kind: "sequence",
  slug: "/admissions/fees",
  nav: "Fees",
  kicker: "Fees & dues",
  title: "Clear information",
  emphasis: "before you decide.",
  subhead:
    "The fee structure varies by campus, grade and whether the child joins as a boarder or a day boarder. The figures published here reflect the New Chandigarh Fee & Dues schedules for 2026 supplied by the School.",
  primary: "Enquire About Fees",
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
      "New Chandigarh 2026 fee and dues schedules for boarding and day boarding, with the instalment plan, concessions and the expenses charged separately.",
  },
  blocks: [
    {
      h: "Select the campus, grade and format",
      p: [
        "Fees differ by campus, by grade band and by whether the child joins as a boarder or a day boarder. Select the combination that applies to your child to see the approved record.",
      ],
    },
    {
      h: "Payment schedule",
      p: [
        "Tuition fees, and for boarders, boarding and lodging fees, are payable across three instalments: at the time of admission, in the first week of July and in the first week of September.",
        "Other dues are cleared with the first instalment. Late payment is charged at 2% per month.",
      ],
    },
    {
      h: "Concessions",
      p: [
        "A 3.5% discount is provided when the applicable annual fee is paid in a single instalment. For day boarding this applies to the Annual Tuition Fee; for boarding it applies to Annual Tuition Fee plus Boarding & Lodging.",
        "Parents with more than one child in the School receive a 10% concession on Annual Tuition Fee for the additional child or children. Parents from the Armed Forces receive a 10% reduction on Annual Tuition Fee.",
      ],
    },
    {
      h: "Additional expenses",
      p: [
        "Clothing and uniforms, equipment, transport, books, stationery and specified miscellaneous expenses are charged separately or as actuals according to the applicable fee schedule.",
        "For boarding students, educational trips and excursions are charged as actuals, while specified personal expenses such as laundry, birthday celebrations and toiletries may be debited from the sundry deposit.",
      ],
    },
    {
      h: "Dalhousie Campus fees",
      p: [
        "The approved 2026/27 fee and dues schedule for Dalhousie Campus is issued directly by the admissions office.",
        "We publish a figure only once it has been formally approved for the current year, so please ask admissions for the schedule that applies to your child.",
      ],
    },
  ],
};

export const bookAVisit: PageCopy = {
  kind: "sequence",
  slug: "/admissions/book-a-visit",
  nav: "Book a Visit",
  kicker: "Book a campus visit",
  title: "See where your",
  emphasis: "child could grow.",
  subhead:
    "Photographs can introduce a campus. A visit lets you understand its rhythm. Come and experience the environment, understand the school day and speak with our team about what you are looking for in your child's education.",
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
      h: "Choose your campus",
      p: [
        "Dalhousie Campus, the Mountain Campus: experience the original Himalayan home of Dalhousie Public School and understand its residential rhythm, academic environment and mountain setting.",
        "New Chandigarh Campus, the Modern Campus: explore the contemporary campus experience and understand how academics, preparation, sport, confidence and wider development come together.",
      ],
    },
    {
      h: "Plan your visit",
      p: [
        "Tell us a little about your child and when you would like to visit. Our admissions team will connect with you to confirm the details.",
      ],
    },
    {
      h: "Choose a preferred date",
      p: [
        "Choose from the available visit windows, and tell us your preferred campus and residential format where applicable.",
        "Your visit is confirmed after the admissions team contacts you.",
      ],
    },
    {
      h: "Consent and privacy",
      p: [
        "I agree that Dalhousie Public School may use these details to arrange the visit and respond to this admissions enquiry.",
      ],
    },
    {
      h: "Before you come",
      p: [
        "If there are particular questions you want answered, about academics, residential life, future pathways, the admission process or fees, mention them while booking.",
        "It helps our team make the visit more useful for your family.",
      ],
    },
    {
      h: "Alternative contact",
      p: [
        "Need help sooner? Contact the admissions team by telephone or approved WhatsApp.",
      ],
    },
    {
      h: "A campus can feel very different once you are inside it.",
      p: [
        "See the environment. Meet the people. Ask the questions that matter to your family.",
      ],
    },
  ],
};

export const enquire: PageCopy = {
  kind: "sequence",
  slug: "/admissions/enquire",
  nav: "Enquire & Prospectus",
  kicker: "Admissions enquiry",
  title: "Tell us what you",
  emphasis: "are looking for.",
  subhead:
    "Whether you have already chosen a campus or are only beginning to explore Dalhousie, our admissions team can help you understand the options available for your child. Complete the short form and we will get in touch.",
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
      h: "Student information",
      p: ["Student's full name, grade applying for and academic year."],
    },
    {
      h: "Parent contact details",
      p: ["Parent or guardian name, phone number, email address, city of residence, state and pincode."],
    },
    {
      h: "Preferred campus",
      p: ["Dalhousie Campus, New Chandigarh Campus, or not sure yet."],
    },
    {
      h: "Preferred format",
      p: ["Boarding, day boarding, or not sure yet, so the enquiry reaches the right admissions team."],
    },
    {
      h: "Not sure which campus?",
      p: [
        "That is completely fine. Tell us your child's grade, the kind of school experience you are seeking and whether you are considering residential education.",
        "The admissions team can help you understand the difference between the two campus experiences before you decide.",
      ],
    },
    {
      h: "Already ready to visit?",
      p: [
        "If you would rather experience Dalhousie before taking the application forward, schedule a campus visit.",
      ],
    },
    {
      h: "Consent",
      p: [
        "I agree that Dalhousie Public School may use these details to respond to my enquiry. Optional updates and marketing communication are requested separately.",
      ],
    },
    {
      h: "What happens next",
      p: [
        "Thank you for contacting Dalhousie Public School. Your enquiry is routed to the relevant admissions team.",
        "We will respond through your preferred contact method.",
      ],
    },
  ],
};

export const apply: PageCopy = {
  kind: "sequence",
  slug: "/admissions/apply",
  nav: "Apply Now",
  kicker: "Begin your registration",
  title: "Ready to take",
  emphasis: "the next step?",
  subhead:
    "Registration begins the admission process. Complete the form with your child's and family's details, and the admissions team will guide you through the step that applies to the grade you are applying for.",
  primary: "Start Registration",
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
      "Complete registration with your child's details, understand the assessment that applies to the grade, and confirm the seat through documents and fee formalities.",
  },
  blocks: [
    {
      h: "Before you begin",
      p: [
        "Prepare the child's basic personal and school details, parent or guardian information, contact details, the grade being applied for and proof of the child's date of birth.",
        "The registration form also records the residential format you are requesting.",
      ],
    },
    {
      h: "Choose a campus",
      p: [
        "Choose Dalhousie Campus or New Chandigarh Campus. Only grades and residential formats currently open for admission are shown.",
      ],
    },
    {
      h: "Up to Grade II",
      p: [
        "No entrance test is required. Once registration is complete, the admissions team will guide the family through the relevant next steps for admission.",
      ],
    },
    {
      h: "Grade III onwards",
      p: [
        "Students applying for Grade III and above complete an entrance or diagnostic assessment, which helps the School understand the child's current academic level and readiness for the grade being applied for.",
      ],
    },
    {
      h: "Registration is not admission.",
      p: [
        "Registration begins the admission process but does not by itself confirm admission. The School completes the applicable admission steps before confirming the seat.",
      ],
    },
    {
      h: "Documents and fee formalities",
      p: [
        "Admission is completed once the required documentation and applicable admission fees and dues have been submitted, against the current fee schedule for the campus and residential format selected.",
      ],
    },
    {
      h: "Need help?",
      p: [
        "Contact admissions for support with the form, documents, payment or any question about the grade your child is applying for.",
      ],
    },
    {
      h: "Privacy and consent",
      p: [
        "Your registration information is processed for admissions in accordance with the approved privacy notice.",
      ],
    },
  ],
};

export const admissionsFaqs: PageCopy = {
  slug: "/admissions/faqs",
  nav: "Admissions FAQs",
  kicker: "The questions parents ask first",
  title: "Clear answers, organised",
  emphasis: "around the parent journey.",
  subhead:
    "Here are answers to some of the most common questions about joining Dalhousie, from entrance requirements and registration to fees, visits and boarding.",
  primary: "Enquire Now",
  secondary: "Book a Visit",
  image: img.faqsHero,
  image2: img.faqsSplit,
  closeEyebrow: "Still need help?",
  meta: {
    title: "Admissions FAQs, Dalhousie Public School",
    description:
      "Answers on beginning the admission process, entrance tests, the diagnostic assessment, registration, visits, boarding formats, fees and concessions.",
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

/* FAQ content, kept as its own structure because the page needs search and
   topic filtering rather than prose bands. */
export const admissionsFaqItems: { topic: string; q: string; a: string }[] = [
  {
    topic: "Admission process",
    q: "How do I begin the admission process?",
    a: "Begin by completing the registration form with your child's and family's details. The admissions team will then guide you through the next step applicable to the grade being applied for.",
  },
  {
    topic: "Assessment",
    q: "Does my child need to take an entrance test?",
    a: "There is no entrance test for children applying up to Grade II. Students applying for Grade III onwards complete an entrance or diagnostic assessment as part of the admission process.",
  },
  {
    topic: "Assessment",
    q: "What is the purpose of the diagnostic assessment?",
    a: "It helps the School understand the child's current academic level and readiness for the grade being applied for.",
  },
  {
    topic: "Admission process",
    q: "Does completing registration guarantee admission?",
    a: "Registration begins the admission process but does not by itself confirm admission. The School completes the applicable admission steps before confirming the seat. The registration documentation similarly states that registration does not guarantee admission.",
  },
  {
    topic: "Visits",
    q: "Can we visit the School before applying?",
    a: "Yes. Parents can request a visit to either campus and select a preferred visit date. The admissions team confirms the schedule and shares directions and arrival information.",
  },
  {
    topic: "Residential life",
    q: "Does Dalhousie offer boarding and day boarding?",
    a: "The New Chandigarh fee schedules provided for 2026 include both Boarding and Day Boarding formats. The availability of a particular format should be confirmed for the child's grade while enquiring.",
  },
  {
    topic: "Fees",
    q: "What is the registration fee at New Chandigarh?",
    a: "For 2026, the fee documents state Rs. 4,000 for day boarders and Rs. 8,000 for boarders. Both are non-refundable.",
  },
  {
    topic: "Fees",
    q: "Can school fees be paid in instalments?",
    a: "Yes. The 2026 New Chandigarh schedules provide for three instalments: at admission, in the first week of July and in the first week of September.",
  },
  {
    topic: "Fees",
    q: "Is there a discount for paying annually?",
    a: "Yes. The current 2026 schedules provide an additional 3.5% discount for qualifying annual fees paid in a single instalment. For day boarding this applies to the Annual Tuition Fee; for boarding it applies to Annual Tuition Fee plus Boarding & Lodging.",
  },
  {
    topic: "Fees",
    q: "Is there a sibling concession?",
    a: "Yes. The 2026 New Chandigarh schedules state a 10% concession on Annual Tuition Fee for the additional child or children when more than one child from the family attends the School.",
  },
  {
    topic: "Fees",
    q: "Is there a concession for Armed Forces families?",
    a: "Yes. The 2026 schedules state a 10% reduction on Annual Tuition Fee for parents from the Armed Forces.",
  },
  {
    topic: "Fees",
    q: "Are books, uniforms and transport included in the fee?",
    a: "No. The 2026 fee schedules state that items such as clothing and uniforms, equipment, transport, books, stationery and specified miscellaneous expenses are charged separately or as actuals.",
  },
  {
    topic: "Applications and documents",
    q: "What documents are required for registration?",
    a: "The registration form asks for the child's basic personal and school details, parent or guardian information and proof of date of birth. The admissions team provides the final documentation checklist required to complete admission.",
  },
  {
    topic: "Campus choice",
    q: "Who should I speak to if I am unsure which campus is right?",
    a: "Submit an admissions enquiry with your child's grade, preferred residential format and what you are looking for from the school experience. The admissions team can guide you through the two options, and Find Your Campus uses six short questions to suggest the closer fit.",
  },
];
