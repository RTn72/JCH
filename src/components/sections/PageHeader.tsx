import type { ReactNode } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, intro, children }: PageHeaderProps) {
  return (
    <section className="reg relative overflow-hidden border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-14 md:pt-20 md:pb-16">
        <AnimatedSection>
          <p className="mb-5 font-display text-[11px] font-semibold tracking-[0.22em] text-coral uppercase">
            {eyebrow}
          </p>
        </AnimatedSection>
        <AnimatedSection delay={80}>
          <h1 className="max-w-[20ch] font-display text-[clamp(2.4rem,6.5vw,4.75rem)] leading-[0.98] font-semibold text-balance text-ink">
            {title}
          </h1>
        </AnimatedSection>
        {intro && (
          <AnimatedSection delay={160}>
            <p className="mt-7 max-w-[58ch] text-[17px] leading-relaxed text-pretty text-ink-soft">
              {intro}
            </p>
          </AnimatedSection>
        )}
        {children && <AnimatedSection delay={220}>{children}</AnimatedSection>}
      </div>
    </section>
  );
}
