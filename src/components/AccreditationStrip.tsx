import { affiliations } from "@/lib/content";

export default function AccreditationStrip() {
  return (
    <section className="border-y border-sand bg-paper">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-7 sm:px-8">
        {affiliations.map((a, i) => (
          <span key={a} className="flex items-center gap-8">
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-pine">
              {a}
            </span>
            {i < affiliations.length - 1 && (
              <span className="hidden h-1.5 w-1.5 rotate-45 bg-brass sm:block" />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
