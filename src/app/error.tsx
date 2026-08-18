"use client";

import { useEffect } from "react";
import ErrorScreen from "@/components/ErrorScreen";

/* Error boundaries must be Client Components.

   Next 16 renames the recovery prop: it is unstable_retry, which re-fetches
   and re-renders the boundary's children, where reset only clears the error
   state without re-fetching. */
export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorScreen
      code="500"
      eyebrow="Something went wrong"
      title="A page did not load the way it should have."
      body="This one is on us, not on you. Try it again, and if it keeps happening the admissions office can help directly."
      action={
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="inline-flex min-h-11 items-center gap-2.5 rounded-full bg-brass-soft px-7 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-pine-800 transition-transform hover:-translate-y-0.5 lg:min-h-0"
        >
          Try again
          <span aria-hidden>&rarr;</span>
        </button>
      }
      secondary={{ label: "Back to the beginning", href: "/" }}
      links={[
        { label: "Our campuses", href: "/campuses" },
        { label: "Admissions", href: "/admissions" },
        { label: "Contact the School", href: "/contact" },
      ]}
    />
  );
}
