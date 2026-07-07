import { testimonial } from "@/lib/content";
import Reveal from "./Reveal";

export default function Testimonial() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <figure>
          <blockquote className="font-display text-3xl leading-[1.25] text-pine sm:text-4xl lg:text-5xl">
            <span className="text-brass">&ldquo;</span>
            {testimonial.quote}
            <span className="text-brass">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <span className="h-px w-8 bg-brass" />
            <span className="font-bold text-pine">{testimonial.name}</span>
            <span className="text-mist">{testimonial.role}</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
