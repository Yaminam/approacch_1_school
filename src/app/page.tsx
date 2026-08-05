import Hero from "@/components/Hero";
import {
  ParentProblem,
  MasterPromise,
  SevenPathways,
  NoSecondShift,
  DrawnToServe,
  BoardingBecome,
  ReportsGrowth,
  FindYourExperience,
} from "@/components/HomeSections";
import CampusChooser from "@/components/CampusChooser";
import Campuses from "@/components/Campuses";
import AccreditationStrip from "@/components/AccreditationStrip";
import Recognition from "@/components/Recognition";
import HeadWelcome from "@/components/HeadWelcome";
import GlobalFamily from "@/components/GlobalFamily";
import BrandVideo from "@/components/BrandVideo";
import PastoralTrust from "@/components/PastoralTrust";
import CTA from "@/components/CTA";

/* Home, page 1 of Website Copy Draft 2. The deck's ten sections run in order:
   campaign hero, the parent problem, the master promise, the preparation
   system, Competitive Edge, the campus selector, the residential advantage,
   the defence pathway, the Whole Child Report and admissions conversion.
   Proof modules (accreditation, recognition, the head's welcome, the global
   family and the film) are woven in where the deck calls for visible proof. */

export default function Home() {
  return (
    <main>
      <Hero />
      <ParentProblem />
      <MasterPromise />
      <SevenPathways />
      <NoSecondShift />

      {/* One Dalhousie. Two ways to grow. */}
      <Campuses />
      <CampusChooser />

      <BoardingBecome />
      <DrawnToServe />

      {/* Visible proof and parent reassurance */}
      <AccreditationStrip />
      <Recognition />
      <HeadWelcome />
      <BrandVideo />
      <GlobalFamily />
      <PastoralTrust />

      <ReportsGrowth />
      <FindYourExperience />
      <CTA />
    </main>
  );
}
