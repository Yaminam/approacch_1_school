import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import CampusChooser from "@/components/CampusChooser";
import Campuses from "@/components/Campuses";
import AccreditationStrip from "@/components/AccreditationStrip";
import Recognition from "@/components/Recognition";
import HeadWelcome from "@/components/HeadWelcome";
import JourneyOfEducation from "@/components/JourneyOfEducation";
import Life from "@/components/Life";
import BrandVideo from "@/components/BrandVideo";
import GlobalFamily from "@/components/GlobalFamily";
import Explore from "@/components/Explore";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <MissionStatement />
      <CampusChooser />
      <Campuses />
      <AccreditationStrip />
      <Recognition />
      <HeadWelcome />
      <JourneyOfEducation />
      <GlobalFamily />
      <Life />
      <BrandVideo />
      <Explore />
      <CTA />
    </main>
  );
}
