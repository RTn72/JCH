import type { Testimonial } from "@/config/site";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-xl bg-card/70 p-7 ring-1 ring-black/5">
      <span aria-hidden="true" className="font-display text-3xl text-coral/70">
        “
      </span>
      <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-pretty text-ink-soft">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
        {testimonial.photo ? (
          <img
            src={testimonial.photo}
            alt=""
            loading="lazy"
            className="size-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-ink/5 font-display text-sm text-ink-soft"
          >
            ◯
          </span>
        )}
        <span className="min-w-0">
          <span className="block truncate font-display text-[14px] font-semibold text-ink">
            {testimonial.name}
          </span>
          <span className="block truncate text-[13px] text-ink-soft">
            {testimonial.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
