import { school } from "./content";

/* Every call to action named in the Final Reviewed Content, resolved to a
   route. The copy deck writes CTAs as labels; this is the single place that
   decides where each label goes, so a label never drifts between pages.

   The deck writes the same destination several ways ("Explore the Defence
   Pathway", "Explore the Dalhousie Defence Pathway"). Both are kept, because
   the label on the page should read the way the copy wrote it. */

export type Cta = { label: string; href: string; external?: boolean };

const ROUTES: Record<string, string> = {
  // Visit and enquiry
  "Book a Dalhousie Visit": "/admissions/book-a-visit",
  "Book a Visit": "/admissions/book-a-visit",
  "Book My Visit": "/admissions/book-a-visit#form",
  "Request a Visit": "/admissions/book-a-visit#form",
  "Visit a Campus": "/admissions/book-a-visit",
  "Visit Dalhousie Campus": "/admissions/book-a-visit?campus=dalhousie",
  "Visit New Chandigarh Campus": "/admissions/book-a-visit?campus=new-chandigarh",
  "Start an Enquiry": "/admissions/enquire",
  "Begin an Enquiry": "/admissions/enquire",
  "Enquire Now": "/admissions/enquire",
  "Submit Enquiry": "/admissions/enquire#form",
  "Speak to Admissions": "/admissions/enquire",
  "Speak to Admissions About Academic Tracks": "/admissions/enquire",
  "Ask Admissions": "/admissions/faqs",
  "View FAQs": "/admissions/faqs",
  "Speak to the School": "/contact",
  "Speak to the Campus": "/contact",
  "Contact a Campus": "/contact",
  "Contact the School": "/contact",
  "Contact Us": "/contact",
  "Contact Dalhousie Campus": "/contact#dalhousie",
  "Contact New Chandigarh Campus": "/contact#new-chandigarh",
  "Send Message": "/contact#form",
  "Get Help": "/contact",
  "Share Your Story": "/contact",
  "Submit Your Story": "/contact",
  "Call Admissions": `tel:${school.phoneRaw}`,

  // Application
  "Apply Now": "/admissions/apply",
  "Start Application": "/admissions/apply#start",
  "Start Registration": "/admissions/apply#start",
  "View the Admission Process": "/admissions/process",
  "Download Prospectus": "/admissions/enquire#prospectus",
  "View Admissions": "/admissions",

  // Fees
  "Compare Fees": "/admissions/fees",
  "View Fees": "/admissions/fees",
  "Enquire About Fees": "/admissions/enquire",

  // The argument
  "Explore The Dalhousie Day": "/the-dalhousie-day",
  "See The Dalhousie Day": "/the-dalhousie-day",
  "See the Day in Action": "/the-dalhousie-day#day",
  "Explore The Dalhousie Difference": "/the-dalhousie-difference",
  "Discover The Dalhousie Difference": "/the-dalhousie-difference",
  "Explore the Preparation System": "/preparation-system",
  "Explore the Dalhousie Preparation System": "/preparation-system",
  "Explore the Pathways": "/preparation-system",
  "Explore the Seven Pathways": "/preparation-system",
  "View the Whole Child Report": "/whole-child-report",
  "Explore the Whole Child Report": "/whole-child-report",
  "Explore the Dalhousie Whole Child Report": "/whole-child-report",
  "See What the Report Covers": "/whole-child-report",
  "See How Growth Is Reported": "/whole-child-report",

  // Pathways
  "Explore Competitive Edge": "/competitive-edge",
  "Explore Dalhousie Competitive Edge": "/competitive-edge",
  "Explore the Defence Pathway": "/defence-pathway",
  "Explore the Dalhousie Defence Pathway": "/defence-pathway",
  "Explore the Sports Pathway": "/sports-pathway",
  "Explore the Dalhousie Sports Pathway": "/sports-pathway",
  "Explore Sports at Dalhousie": "/sports-pathway",
  "Explore Sport at Your Campus": "/sports-pathway",
  "Explore the Confidence Code": "/confidence-code",
  "Explore the Dalhousie Confidence Code": "/confidence-code",
  "See the Confidence Code in Action": "/confidence-code",
  "Explore the Life Code": "/life-code",
  "Explore the Dalhousie Life Code": "/life-code",
  "Explore Life at Dalhousie": "/life-code",
  "Explore Residential Life": "/residential-advantage",
  "Explore the Residential Advantage": "/residential-advantage",
  "Explore the Dalhousie Residential Advantage": "/residential-advantage",
  "Explore Academic Pathways": "/academics",
  "Explore Academics & Pathways": "/academics",

  // Care
  "View Parent FAQs": "/admissions/faqs",
  "View Pastoral Care": "/pastoral-care",
  "Explore Pastoral Care & Parent Connect": "/pastoral-care",
  "View Parent Connect": "/parent-connect",
  "Explore Parent Connect": "/parent-connect",
  "See Student Life": "/campuses/dalhousie/student-life",
  "Explore Student Life": "/campuses/dalhousie/student-life",

  // Campuses
  "Explore Our Campuses": "/campuses",
  "Find Your Campus": "/campuses/find-your-campus",
  "Find Your Campus - Take the Quiz Now": "/campuses/find-your-campus#finder",
  "Start the Campus Finder": "/campuses/find-your-campus#finder",
  "Compare Campuses": "/campuses/compare",
  "Explore Dalhousie Campus": "/campuses/dalhousie",
  "Explore Academics at Dalhousie": "/campuses/dalhousie/academics",
  "Explore Academics at Dalhousie Campus": "/campuses/dalhousie/academics",
  "Explore Residential Life at Dalhousie Campus": "/campuses/dalhousie/residential-life",
  "Explore Sports, Outdoors & Adventure": "/campuses/dalhousie/sports-outdoors",
  "Explore House Culture & Pastoral Care": "/campuses/dalhousie/house-culture-care",
  "Explore New Chandigarh Campus": "/campuses/new-chandigarh",
  "Explore the Academic Journey": "/campuses/new-chandigarh/academic-journey",
  "Explore the New Chandigarh Academic Journey": "/campuses/new-chandigarh/academic-journey",
  "Explore the Stages": "/campuses/new-chandigarh/academic-journey",
  "Explore Early Years": "/campuses/new-chandigarh/early-years",
  "Explore Primary Years": "/campuses/new-chandigarh/primary-years",
  "Explore Middle School": "/campuses/new-chandigarh/middle-school",
  "Explore Senior School": "/campuses/new-chandigarh/senior-school",
  "Explore Residential & Weekday-Boarding": "/campuses/new-chandigarh/residential-day-boarding",

  // Utility
  "About Dalhousie": "/about",
  "Discover Our Heritage": "/about/heritage",
  "Explore Stories": "/stories-events",
  "Stories & Events": "/stories-events",
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
