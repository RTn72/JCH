import { useState } from "react";
import { faqs } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

export function FAQ({ heading = "Questions, answered." }: { heading?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <AnimatedSection className="mb-12">
          <p className="mb-4 font-display text-[11px] font-semibold tracking-[0.22em] text-coral uppercase">
            FAQ
          </p>
          <h2 className="max-w-[22ch] font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-balance text-ink">
            {heading}
          </h2>
        </AnimatedSection>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-[17px] font-semibold text-ink md:text-xl">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-full text-ink ring-1 ring-ink/15 transition-transform duration-300",
                        isOpen && "rotate-45 bg-coral text-paper ring-coral",
                      )}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[70ch] pb-7 text-[15px] leading-relaxed text-pretty text-ink-soft">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
