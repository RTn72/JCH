import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `Brochure Design | ${site.name}`;
const description =
  "Informative and visually appealing brochure designs that present your business, products and services professionally.";

export const Route = createFileRoute("/services/brochure-design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/brochure-design" },
    ],
    links: [{ rel: "canonical", href: "/services/brochure-design" }],
  }),
  component: BrochureDesignPage,
});

const highlights = [
  {
    name: "Informative Layout",
    body: "Well-organized layouts that make your business information easy to explore and understand.",
  },
  {
    name: "Visual Storytelling",
    body: "Images, typography and graphics arranged to communicate your brand story effectively.",
  },
  {
    name: "Professional Branding",
    body: "Your brand identity is carried consistently throughout every section of the brochure.",
  },
  {
    name: "Print Ready",
    body: "High-quality brochure layouts prepared for professional printing and digital sharing.",
  },
];

const types = [
  "Business Brochures",
  "Product Brochures",
  "Service Brochures",
  "Company Profiles",
  "Restaurant Menus",
  "Marketing Brochures",
];

function BrochureDesignPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Brochure Design"
        intro="Informative and visually appealing brochures that present your business, products and services effectively while maintaining a professional brand image."
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
                  <div className="mx-auto max-w-lg rounded-xl bg-paper p-4 ring-1 ring-ink/10 shadow-lg">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2 space-y-3">
                        <div className="h-4 w-1/2 rounded bg-coral/40" />
                        <div className="h-8 w-full rounded bg-ink/15" />
                        <div className="h-2 w-4/5 rounded bg-ink/10" />
                        <div className="h-2 w-full rounded bg-ink/10" />
                        <div className="h-2 w-3/4 rounded bg-ink/10" />
                      </div>

                      <div className="rounded-lg bg-cobalt/20" />
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="h-20 rounded-lg bg-gold/30" />
                      <div className="h-20 rounded-lg bg-coral/20" />
                      <div className="h-20 rounded-lg bg-cobalt/20" />
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="h-2 w-full rounded bg-ink/10" />
                      <div className="h-2 w-4/5 rounded bg-ink/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="floaty absolute -right-3 -bottom-7 rounded-xl bg-card px-5 py-4 ring-1 ring-ink/10 shadow-[0_20px_40px_-20px_rgba(25,23,18,0.5)]"
                aria-hidden="true"
              >
                <p className="font-display text-[10px] tracking-[0.16em] text-ink-soft uppercase">
                  Brochure
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
        title="Design My Brochure."
        whatsappLabel="Chat on WhatsApp"
        message="Hello Jimmy's Creative Hub, I would like a brochure designed."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
