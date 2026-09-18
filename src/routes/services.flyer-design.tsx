import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `Flyer Design | ${site.name}`;
const description =
  "Professional flyer designs for businesses, promotions, events, offers and marketing campaigns.";

export const Route = createFileRoute("/services/flyer-design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/flyer-design" },
    ],
    links: [{ rel: "canonical", href: "/services/flyer-design" }],
  }),
  component: FlyerDesignPage,
});

const highlights = [
  {
    name: "Professional Layout",
    body: "Clean and organized layouts that present your products, services or offers clearly.",
  },
  {
    name: "Promotional Focus",
    body: "Strong visual hierarchy designed to make important offers and information stand out.",
  },
  {
    name: "Brand Consistency",
    body: "Colors, fonts and visuals aligned with your existing brand identity.",
  },
  {
    name: "Print & Digital",
    body: "Flyers designed for both professional printing and digital marketing campaigns.",
  },
];

const types = [
  "Business Flyers",
  "Event Flyers",
  "Promotional Flyers",
  "Product Flyers",
  "Restaurant Flyers",
  "Offer Flyers",
];

function FlyerDesignPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Flyer Design"
        intro="Professional flyers that showcase your products, services, offers or events effectively while keeping your message clear and visually engaging."
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
                  <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-xl bg-gradient-to-br from-cobalt/20 via-gold/20 to-coral/20">
                    <div className="absolute top-7 right-7 left-7">
                      <div className="h-3 w-1/4 rounded bg-cobalt/50" />

                      <div className="mt-4 h-9 w-4/5 rounded bg-ink/15" />

                      <div className="mt-3 h-2 w-3/5 rounded bg-ink/10" />
                    </div>

                    <div className="absolute top-1/2 right-7 left-7 grid -translate-y-1/2 grid-cols-2 gap-3">
                      <div className="h-24 rounded-lg bg-coral/30" />
                      <div className="h-24 rounded-lg bg-gold/30" />
                    </div>

                    <div className="absolute right-7 bottom-7 left-7">
                      <div className="h-2 w-full rounded bg-ink/10" />
                      <div className="mt-2 h-2 w-2/3 rounded bg-ink/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="floaty absolute -right-3 -bottom-7 rounded-xl bg-card px-5 py-4 ring-1 ring-ink/10 shadow-[0_20px_40px_-20px_rgba(25,23,18,0.5)]"
                aria-hidden="true"
              >
                <p className="font-display text-[10px] tracking-[0.16em] text-ink-soft uppercase">
                  Flyer
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
        title="Design My Flyer."
        whatsappLabel="Chat on WhatsApp"
        message="Hello Jimmy's Creative Hub, I would like a flyer designed."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
