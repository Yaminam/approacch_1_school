import Reveal from "./Reveal";

export default function MissionStatement() {
  return (
    <section className="bg-clay text-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="max-w-4xl text-base leading-relaxed text-paper/80 sm:text-lg [text-wrap:pretty]">
            Dalhousie Public School, seven thousand feet above sea level in the
            Himachal Himalayas, is a boarding school for boys and girls in its
            fifty-fourth year, with a modern second campus in New Chandigarh.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-10 font-display text-[2.4rem] font-medium leading-[1.08] text-paper sm:text-5xl lg:text-6xl [&_em]:mr-[0.14em]">
            Discover an <em className="italic">exceptional education</em> in the{" "}
            <em className="italic">clean mountain air.</em> Dalhousie children grow
            academically, socially and in character&hellip;{" "}
            <em className="italic">ready to take on the world.</em>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
