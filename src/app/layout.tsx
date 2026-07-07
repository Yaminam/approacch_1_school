import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyVisit from "@/components/StickyVisit";
import { CampusProvider } from "@/components/campus";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

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
        <CampusProvider>
          <Header />
          {children}
          <Footer />
          <StickyVisit />
        </CampusProvider>
      </body>
    </html>
  );
}
