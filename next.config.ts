import type { NextConfig } from "next";

/* The route structure now follows the slugs published in Website Copy Draft 2
   (for example "PAGE 33 | /admissions/fees"). These redirects keep the older
   flat URLs working, so any link already shared with a parent still lands. */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/fees", destination: "/admissions/fees", permanent: true },
      { source: "/visit-us", destination: "/admissions/book-a-visit", permanent: true },
      { source: "/apply", destination: "/admissions/apply", permanent: true },
      { source: "/faqs", destination: "/admissions/faqs", permanent: true },
      { source: "/prospectus", destination: "/admissions/enquire", permanent: true },
      { source: "/policies", destination: "/policies-disclosures", permanent: true },
      { source: "/residential-life", destination: "/campuses/dalhousie/residential-life", permanent: true },
      { source: "/student-life", destination: "/campuses/dalhousie/student-life", permanent: true },
    ];
  },
};

export default nextConfig;
