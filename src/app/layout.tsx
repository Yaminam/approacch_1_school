import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyVisit from "@/components/StickyVisit";
import LoadingScreen from "@/components/LoadingScreen";
import IntroGlobe from "@/components/IntroGlobe";
import ContentProtection from "@/components/ContentProtection";
import { CampusProvider } from "@/components/campus";

// Self-hosted brand fonts, extracted from the live dalhousiepublicschool.com:
// "Helvetica Neue" for body/UI and "Helvetica Neue LT Pro" for display.
// Variable names are kept as-is so globals.css needs no rewiring.
const fraunces = localFont({
  variable: "--font-fraunces", // display / headings → Helvetica Neue LT Pro
  display: "swap",
  src: [
    { path: "../fonts/HelveticaNeueLTProMd.ttf", weight: "400", style: "normal" },
    { path: "../fonts/HelveticaNeueLTProMd.ttf", weight: "500", style: "normal" },
    { path: "../fonts/HelveticaNeueLTProBd_1.ttf", weight: "600", style: "normal" },
    { path: "../fonts/HelveticaNeueLTProBd_1.ttf", weight: "700", style: "normal" },
  ],
});

const nunito = localFont({
  variable: "--font-nunito", // body / UI → Helvetica Neue
  display: "swap",
  src: [
    { path: "../fonts/Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Light.ttf", weight: "400", style: "normal" },
    { path: "../fonts/HelveticaNeueMedium.woff", weight: "500", style: "normal" },
    { path: "../fonts/HelveticaNeueMedium.woff", weight: "600", style: "normal" },
    { path: "../fonts/HelveticaNeueBold.woff", weight: "700", style: "normal" },
    { path: "../fonts/HelveticaNeueBold.woff", weight: "800", style: "normal" },
  ],
});

// One fixed light palette; stops browser auto dark mode from re-tinting the site.
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#6b0630",
};

export const metadata: Metadata = {
  title: "Dalhousie Public School, Exceptional by Nature",
  description:
    "A 54-year-old alpine boarding school, seven thousand feet above sea level. Two campuses, Dalhousie and New Chandigarh. Find the one that fits your child.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <body>
        <ContentProtection />
        <LoadingScreen />
        <IntroGlobe />
        <CampusProvider>
          <Header />
          <div className="site-shell">
            {children}
            <Footer />
          </div>
          <StickyVisit />
        </CampusProvider>
      </body>
    </html>
  );
}
