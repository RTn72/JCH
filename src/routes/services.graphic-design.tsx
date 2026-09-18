import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `Graphic Design Services in Ahmedabad | ${site.name}`;
const description =
  "Posters, flyers, business cards, brochures, marketing creatives and presentation graphics — print-ready graphic design built around your brand.";

export const Route = createFileRoute("/services/graphic-design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/graphic-design" },
    ],
    links: [{ rel: "canonical", href: "/services/graphic-design" }],
  }),
  component: GraphicDesignPage,
});

const categories = [
  { name: "Posters", note: "Print and digital sizes, built around one clear message." },
  { name: "Flyers", note: "Offers, events and services laid out for quick reading." },
  { name: "Business Cards", note: "Clean, professional cards prepared for print." },
  { name: "Brochures", note: "Multi-page layouts that present your services in order." },
  { name: "Marketing Creatives", note: "Campaign artwork adapted across channels." },
  { name: "Promotional Designs", note: "Launch, discount and seasonal artwork." },
  { name: "Presentation Graphics", note: "Charts, diagrams and slide visuals." },
  { name: "Custom Visual Designs", note: "Anything outside the list — just describe it." },
];

function GraphicDesignPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Graphic Design"
        intro="Creative and visually engaging designs tailored to your brand and business needs — typeset properly, colour-checked, and delivered in the formats you actually need."
      />

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <AnimatedSection className="mb-12">
            <h2 className="max-w-[24ch] font-display text-[clamp(1.8rem,4vw,2.75rem)] leading-tight font-semibold text-balance text-ink">
              What we design
            </h2>
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <AnimatedSection
                key={c.name}
                delay={(i % 4) * 60}
                className="card3d rounded-xl bg-card/70 p-6 ring-1 ring-black/5"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {c.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-pretty text-ink-soft">
                  {c.note}
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
              Mockups
            </p>
            <h2 className="max-w-[26ch] font-display text-[clamp(1.8rem,4vw,2.75rem)] leading-tight font-semibold text-balance text-ink">
              Project visuals will appear in these slots.
            </h2>
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["Poster mockup", "Flyer mockup", "Brochure mockup"].map((label, i) => (
              <AnimatedSection
                key={label}
                delay={i * 70}
                className="grid aspect-[4/3] place-items-center rounded-xl bg-ink/5 ring-1 ring-ink/10"
              >
                <span className="font-display text-[11px] tracking-[0.2em] text-ink-soft/70 uppercase">
                  {label}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Design?"
        whatsappLabel="Chat on WhatsApp"
        message="Hello Jimmy's Creative Hub, I need a graphic design project."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
