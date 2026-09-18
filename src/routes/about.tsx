import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `About — ${site.name}`;
const description =
  "Established in 2019 in Ahmedabad, Jimmy's Creative Hub helps businesses, creators and brands communicate their ideas through thoughtful, impactful design.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const sections = [
  {
    heading: "Our Story",
    body: "Jimmy's Creative Hub was established in 2019 in Ahmedabad, Gujarat. What began as focused graphic design work has grown into a broader creative practice covering branding, social media design, video editing and website design and development — all handled with the same attention to detail.",
  },
  {
    heading: "Our Approach",
    body: "Every project starts with the brief behind the brief: what the business does, who it speaks to, and what the design has to achieve. From there we set a creative direction, design it properly, refine it with you, and hand over files that are ready to use across print and digital.",
  },
  {
    heading: "Our Vision",
    body: "To help businesses, creators and brands communicate their ideas through impactful, thoughtful and visually compelling design — work that looks considered, holds up over time, and makes the brand easier to recognise.",
  },
  {
    heading: "Why Work With Us",
    body: "Direct communication, custom work rather than templates, and a clear process from first message to final delivery. Scope, format and timeline are shaped around the specific requirement in front of us.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Jimmy's Creative Hub established",
    detail: "Founded in Ahmedabad, Gujarat, focused on creative graphic design.",
  },
  {
    year: "Present",
    title: "Expanding creative and digital design solutions",
    detail:
      "Branding, social media design, video editing, and website design and development alongside the core design work.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Turning Ideas Into Visual Experiences."
        intro={site.description}
      />

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
            {sections.map((s, i) => (
              <AnimatedSection
                key={s.heading}
                delay={i * 70}
                className="border-t-2 border-ink/15 pt-6"
              >
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {s.heading}
                </h2>
                <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-pretty text-ink-soft">
                  {s.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <AnimatedSection className="mb-12">
            <p className="mb-4 font-display text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
              Timeline
            </p>
            <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-balance">
              Where we started, where we are.
            </h2>
          </AnimatedSection>

          <ol className="relative grid gap-10 md:grid-cols-2">
            {timeline.map((t, i) => (
              <AnimatedSection
                as="li"
                key={t.year}
                delay={i * 120}
                className="relative border-t border-paper/20 pt-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[7px] left-0 size-3.5 rounded-full bg-coral ring-4 ring-ink"
                />
                <span className="font-display text-4xl font-semibold text-gold">
                  {t.year}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-paper">
                  {t.title}
                </h3>
                <p className="mt-2 max-w-[46ch] text-[14px] leading-relaxed text-pretty text-paper/60">
                  {t.detail}
                </p>
              </AnimatedSection>
            ))}
          </ol>

          <AnimatedSection className="mt-14 grid gap-6 border-t border-paper/10 pt-8 sm:grid-cols-3">
            <p className="text-[14px] text-paper/60">
              <span className="block font-display text-[11px] tracking-[0.2em] text-paper/40 uppercase">
                Based in
              </span>
              {site.location}
            </p>
            <p className="text-[14px] text-paper/60">
              <span className="block font-display text-[11px] tracking-[0.2em] text-paper/40 uppercase">
                Established
              </span>
              {site.established}
            </p>
            <p className="text-[14px] text-paper/60">
              <span className="block font-display text-[11px] tracking-[0.2em] text-paper/40 uppercase">
                Focus
              </span>
              Branding, design, social and web
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Want to see how this could work for your brand?"
        secondary={{ label: "Browse our services", to: "/services" }}
      />
    </>
  );
}
