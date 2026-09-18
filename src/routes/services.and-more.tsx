import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `More Creative Services | ${site.name}`;
const description =
  "Explore custom creative design solutions from Jimmy's Creative Hub for unique business, branding and marketing requirements.";

export const Route = createFileRoute("/services/and-more")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/and-more" },
    ],
    links: [{ rel: "canonical", href: "/services/and-more" }],
  }),
  component: AndMorePage,
});

const highlights = [
  {
    name: "Poster & Flyer Design",
    body: "Creative promotional designs for businesses, events, offers and campaigns.",
  },
  {
    name: "Business Cards",
    body: "Professional business card designs created to strengthen your brand identity.",
  },
  {
    name: "Brochure Design",
    body: "Clean and engaging brochures that showcase your business, products and services.",
  },
  {
    name: "Custom Design",
    body: "Creative solutions tailored specifically to your unique project requirements.",
  },
];

const types = [
  "Poster Design",
  "Flyer Design",
  "Business Cards",
  "Brochures",
  "Thumbnail Design",
  "Packaging Design",
  "Presentation Design",
  "Custom Projects",
];

function AndMorePage() {
  return (
    <>
      <PageHeader
        eyebrow="More Services"
        title="And More"
        intro="Need something different? Jimmy's Creative Hub provides custom creative solutions tailored to your brand, business and project requirements."
      />

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <AnimatedSection
                  key={h.name}
                  delay={i * 60}
                  className="border-t-2 border-ink/15 pt-5"
                >
                  <h2 className="font-display text-lg font-semibold text-ink">{h.name}</h2>

                  <p className="mt-2 text-[14px] leading-relaxed text-pretty text-ink-soft">
                    {h.body}
                  </p>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {["◧", "▤", "▭", "▦", "▶", "◰"].map((icon, i) => (
                  <div
                    key={`${icon}-${i}`}
                    className="grid aspect-square place-items-center rounded-2xl bg-card ring-1 ring-ink/10"
                    aria-hidden="true"
                  >
                    <span className="font-display text-4xl text-ink/60">{icon}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-20 flex flex-wrap gap-3">
            {types.map((t) => (
              <span
                key={t}
                className="rounded-full bg-ink/5 px-4 py-2 font-display text-[13px] font-medium text-ink"
              >
                {t}
              </span>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Have Something Else in Mind?"
        whatsappLabel="Discuss Your Project"
        message="Hello Jimmy's Creative Hub, I have a custom creative project I would like to discuss."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
