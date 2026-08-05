import { school } from "./content";

/* Every call to action named in Website Copy Draft 2, resolved to a route.
   The copy deck writes CTAs as labels; this is the single place that decides
   where each label goes, so a label never drifts between pages. */

export type Cta = { label: string; href: string; external?: boolean };

const ROUTES: Record<string, string> = {
  // Visit and enquiry
  "Book a Dalhousie Visit": "/admissions/book-a-visit",
  "Book a Visit": "/admissions/book-a-visit",
  "Book My Visit": "/admissions/book-a-visit#form",
  "Visit a Campus": "/admissions/book-a-visit",
  "Visit Dalhousie Campus": "/admissions/book-a-visit?campus=dalhousie",
  "Visit New Chandigarh Campus": "/admissions/book-a-visit?campus=new-chandigarh",
  "Start an Enquiry": "/admissions/enquire",
  "Submit Enquiry": "/admissions/enquire#form",
  "Speak to Admissions": "/admissions/enquire",
  "Ask Admissions": "/admissions/faqs",
  "Speak to the School": "/contact",
  "Speak to the Campus": "/contact",
  "Contact a Campus": "/contact",
  "Contact the School": "/contact",
  "Contact Us": "/contact",
  "Get Help": "/contact",
  "Share Your Story": "/contact",
  "Call Admissions": `tel:${school.phoneRaw}`,

  // Application
  "Apply Now": "/admissions/apply",
  "Start Application": "/admissions/apply#start",
  "Download Prospectus": "/admissions/enquire#prospectus",

  // Fees
  "Compare Fees": "/admissions/fees",

  // The argument
  "Explore The Dalhousie Day": "/the-dalhousie-day",
  "See The Dalhousie Day": "/the-dalhousie-day",
  "See the Day in Action": "/the-dalhousie-day#day",
  "Explore the Preparation System": "/preparation-system",
  "Explore the Pathways": "/preparation-system",
  "View the Whole Child Report": "/whole-child-report",
  "See How Growth Is Reported": "/whole-child-report",

  // Pathways
  "Explore Competitive Edge": "/competitive-edge",
  "Explore the Defence Pathway": "/defence-pathway",
  "Explore the Sports Pathway": "/sports-pathway",
  "Explore the Confidence Code": "/confidence-code",
  "Explore the Life Code": "/life-code",
  "Explore Residential Life": "/residential-advantage",
  "Explore Academic Pathways": "/academics",

  // Care
  "View Parent FAQs": "/admissions/faqs",
  "View Pastoral Care": "/pastoral-care",
  "View Parent Connect": "/parent-connect",
  "See Student Life": "/campuses/dalhousie/student-life",

  // Campuses
  "Explore Our Campuses": "/campuses",
  "Find Your Campus": "/campuses/find-your-campus",
  "Start the Campus Finder": "/campuses/find-your-campus#finder",
  "Compare Campuses": "/campuses/compare",
  "Explore the Academic Journey": "/campuses/new-chandigarh/academic-journey",
  "Explore the Stages": "/campuses/new-chandigarh/academic-journey",

  // Utility
  "About Dalhousie": "/about",
  "Explore Stories": "/stories-events",
  "View Upcoming Events": "/stories-events#events",
  "Explore Alumni Stories": "/alumni",
  "Search Documents": "/policies-disclosures",
};

/** Resolve a CTA label from the copy deck to a real route. */
export function cta(label: string): Cta {
  const href = ROUTES[label];
  if (!href) throw new Error(`No route mapped for CTA "${label}". Add it to src/lib/cta.ts.`);
  return { label, href, external: href.startsWith("tel:") || href.startsWith("http") };
}
