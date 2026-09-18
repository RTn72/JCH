import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `Packaging Design | ${site.name}`;
const description =
  "Creative packaging designs that make products attractive, memorable and consistent with your brand identity.";

export const Route = createFileRoute("/services/packaging-design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/packaging-design" },
    ],
    links: [{ rel: "canonical", href: "/services/packaging-design" }],
  }),
  component: PackagingDesignPage,
});

const highlights = [
  {
    name: "Product Focused",
    body: "Packaging designed to highlight your product and make it stand out on the shelf or online.",
  },
  {
    name: "Brand Recognition",
    body: "Colors, typography and visual elements aligned with your brand identity.",
  },
  {
    name: "Creative Presentation",
    body: "Unique visual concepts that make your packaging attractive and memorable.",
  },
  {
    name: "Print Ready",
    body: "Professional packaging artwork prepared for production and printing requirements.",
  },
];

const types = [
  "Product Packaging",
  "Food Packaging",
  "Box Design",
  "Label Design",
  "Bottle & Jar Labels",
  "Retail Packaging",
];

function PackagingDesignPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Packaging Design"
        intro="Creative packaging designs that make your products look attractive, communicate your brand and create a memorable customer experience."
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

                <div className="p-8">
                  <div className="relative mx-auto max-w-sm">
                    <div className="relative mx-auto aspect-square w-56 rounded-2xl bg-gradient-to-br from-coral/30 via-gold/25 to-cobalt/25 p-5 shadow-xl">
                      <div className="flex size-full flex-col items-center justify-center rounded-xl bg-paper/80 ring-1 ring-ink/10">
                        <div className="grid size-14 place-items-center rounded-full bg-ink">
                          <span className="font-display text-sm font-bold text-paper">JCH</span>
                        </div>

                        <div className="mt-5 h-3 w-28 rounded bg-ink/20" />
                        <div className="mt-2 h-2 w-20 rounded bg-ink/10" />
                      </div>
                    </div>

                    <div className="absolute -right-2 bottom-5 h-28 w-20 rotate-6 rounded-xl bg-cobalt/25 shadow-lg" />
                    <div className="absolute -left-4 top-10 h-24 w-16 -rotate-6 rounded-xl bg-gold/30 shadow-lg" />
                  </div>

                  <div className="mx-auto mt-7 max-w-sm">
                    <div className="h-2 w-full rounded-full bg-ink/10" />
                    <div className="mt-2 h-2 w-3/4 rounded-full bg-ink/10" />
                  </div>
                </div>
              </div>

              <div
                className="floaty absolute -right-3 -bottom-7 rounded-xl bg-card px-5 py-4 ring-1 ring-ink/10 shadow-[0_20px_40px_-20px_rgba(25,23,18,0.5)]"
                aria-hidden="true"
              >
                <p className="font-display text-[10px] tracking-[0.16em] text-ink-soft uppercase">
                  Packaging
                </p>

                <p className="mt-1 font-display text-sm font-semibold text-ink">Brand • Product</p>
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
        title="Design My Packaging."
        whatsappLabel="Chat on WhatsApp"
        message="Hello Jimmy's Creative Hub, I would like packaging design for my product."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
