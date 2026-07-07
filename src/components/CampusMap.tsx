import Reveal from "./Reveal";
import { SectionHead } from "./ui";
import { contact } from "@/lib/content";

const list = [contact.dalhousie, contact.chandigarh];
const mapSrc = (q: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=12&output=embed`;
const dirSrc = (q: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;

export default function CampusMap() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionHead
          eyebrow="Find us"
          title="Two campuses, both in the hills."
          intro="One high in the Himachal alpine, one near the city in New Chandigarh. You are welcome at either."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {list.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <div className="overflow-hidden rounded-3xl border border-sand bg-paper soft-shadow-sm">
                <div className="relative h-64 w-full bg-blush">
                  <iframe
                    src={mapSrc(`Dalhousie Public School, ${c.address}`)}
                    title={`Map of ${c.name}`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl text-pine">{c.name}</h3>
                  <p className="mt-2 leading-relaxed text-mist">{c.address}</p>
                  <p className="mt-1 text-mist">
                    {c.email} &middot; {c.phone}
                  </p>
                  <a
                    href={dirSrc(c.address)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-clay transition-colors hover:text-pine"
                  >
                    Get directions
                    <span aria-hidden>-&gt;</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
