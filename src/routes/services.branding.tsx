import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `Branding & Logo Design | ${site.name}`;
const description =
  "Brand identity, logo design, visual identity systems and brand consistency — build recognition with a look that stays the same everywhere.";

export const Route = createFileRoute("/services/branding")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/branding" },
    ],
    links: [{ rel: "canonical", href: "/services/branding" }],
  }),
  component: BrandingPage,
});

const pillars = [
  {
    name: "Brand Identity",
    body: "The full picture — positioning cues, colour, type, imagery direction and how they fit together.",
  },
  {
    name: "Logo Design",
    body: "A primary mark plus the variations you need for signage, social profiles, print and small sizes.",
  },
  {
    name: "Visual Identity",
    body: "Patterns, layout rules, iconography and supporting elements that extend the logo into real material.",
  },
  {
    name: "Brand Consistency",
    body: "Simple usage guidance so everything you publish afterwards still looks like the same business.",
  },
];

function BrandingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Branding & Logo Design"
        intro="Strong branding makes a business easier to recognise and easier to trust. It gives every poster, post and page the same voice, so people remember you after the first look."
      />

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
            {pillars.map((p, i) => (
              <AnimatedSection
                key={p.name}
                delay={i * 70}
                className="border-t-2 border-ink/15 pt-6"
              >
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {p.name}
                </h2>
                <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-pretty text-ink-soft">
                  {p.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <AnimatedSection className="mb-10">
            <p className="mb-4 font-display text-[11px] font-semibold tracking-[0.22em] text-coral uppercase">
              Showcase
            </p>
            <h2 className="max-w-[28ch] font-display text-[clamp(1.8rem,4vw,2.75rem)] leading-tight font-semibold text-balance text-ink">
              Identity work will be shown in these slots.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15px] text-ink-soft">
              Each slot is editable — real project artwork replaces the placeholder once
              it&apos;s ready.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Logo mark slot",
              "Colour palette slot",
              "Stationery slot",
              "Brand board slot",
            ].map((label, i) => (
              <AnimatedSection
                key={label}
                delay={i * 60}
                className="grid aspect-square place-items-center rounded-xl bg-ink/5 ring-1 ring-ink/10"
              >
                <span className="px-4 text-center font-display text-[11px] tracking-[0.2em] text-ink-soft/70 uppercase">
                  {label}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Build Your Brand."
        whatsappLabel="Chat on WhatsApp"
        message="Hello Jimmy's Creative Hub, I would like to discuss branding and logo design."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
