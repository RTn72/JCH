import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `Poster Design | ${site.name}`;
const description =
  "Creative and impactful poster designs for businesses, events, promotions, products and social media.";

export const Route = createFileRoute("/services/poster-design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/poster-design" },
    ],
    links: [{ rel: "canonical", href: "/services/poster-design" }],
  }),
  component: PosterDesignPage,
});

const highlights = [
  {
    name: "Eye-Catching Designs",
    body: "Bold and attractive visuals designed to grab attention within seconds.",
  },
  {
    name: "Clear Communication",
    body: "Well-structured layouts that make your message easy to understand.",
  },
  {
    name: "Brand Focused",
    body: "Colors, typography and visuals matched with your brand identity.",
  },
  {
    name: "Print & Digital Ready",
    body: "Posters prepared for both social media and high-quality printing.",
  },
];

const types = [
  "Business Posters",
  "Event Posters",
  "Promotional Posters",
  "Sale & Offer Posters",
  "Social Media Posters",
  "Festival Posters",
];

function PosterDesignPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Poster Design"
        intro="Attractive and impactful posters designed to grab attention, communicate your message clearly and make your brand stand out."
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

            <AnimatedSection delay={120} className="relative">
              <div className="overflow-hidden rounded-2xl bg-card ring-1 ring-ink/10 shadow-[0_30px_60px_-30px_rgba(25,23,18,0.45)]">
                <div className="flex items-center gap-2 border-b border-ink/10 bg-ink/5 px-4 py-3">
                  <span className="size-2.5 rounded-full bg-coral" />
                  <span className="size-2.5 rounded-full bg-gold" />
                  <span className="size-2.5 rounded-full bg-cobalt" />

                  <span className="ml-3 h-4 flex-1 rounded-full bg-ink/10" />
                </div>

                <div className="p-6">
                  <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-xl bg-gradient-to-br from-coral/20 via-gold/20 to-cobalt/20">
                    <div className="absolute inset-5 rounded-lg border border-ink/10" />

                    <div className="absolute top-10 right-8 left-8">
                      <div className="h-3 w-1/3 rounded bg-coral/50" />
                      <div className="mt-4 h-10 w-full rounded bg-ink/15" />
                      <div className="mt-2 h-3 w-3/4 rounded bg-ink/10" />
                    </div>

                    <div className="absolute right-8 bottom-10 left-8 grid grid-cols-2 gap-3">
                      <div className="h-20 rounded-lg bg-cobalt/20" />
                      <div className="h-20 rounded-lg bg-gold/30" />
                    </div>

                    <div className="absolute right-8 bottom-5 left-8 h-1 rounded-full bg-ink/10" />
                  </div>
                </div>
              </div>

              <div
                className="floaty absolute -right-3 -bottom-7 rounded-xl bg-card px-5 py-4 ring-1 ring-ink/10 shadow-[0_20px_40px_-20px_rgba(25,23,18,0.5)]"
                aria-hidden="true"
              >
                <p className="font-display text-[10px] tracking-[0.16em] text-ink-soft uppercase">
                  Design
                </p>

                <p className="mt-1 font-display text-sm font-semibold text-ink">Print • Digital</p>
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
        title="Design My Poster."
        whatsappLabel="Chat on WhatsApp"
        message="Hello Jimmy's Creative Hub, I would like a poster designed."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
