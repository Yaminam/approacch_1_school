import type { Metadata } from "next";
import ErrorScreen from "@/components/ErrorScreen";

export const metadata: Metadata = {
  title: "Page not found, Dalhousie Public School",
};

/* Routes the reader onward rather than leaving them at a dead end: the four
   places a parent arriving on a broken link is most likely to have wanted. */
export default function NotFound() {
  return (
    <ErrorScreen
      code="404"
      eyebrow="Page not found"
      title="This page has moved on, as pages sometimes do."
      body="The link may be out of date, or the address slightly off. Everything about the School is still here, one step away."
      primary={{ label: "Back to the beginning", href: "/" }}
      secondary={{ label: "Speak to admissions", href: "/admissions/enquire" }}
      links={[
        { label: "The Dalhousie Difference", href: "/the-dalhousie-difference" },
        { label: "Our campuses", href: "/campuses" },
        { label: "Admissions", href: "/admissions" },
        { label: "Book a visit", href: "/admissions/book-a-visit" },
      ]}
    />
  );
}
