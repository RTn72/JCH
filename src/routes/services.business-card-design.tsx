import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `Business Card Design | ${site.name}`;
const description =
  "Clean and professional business card designs that create a strong first impression and represent your brand effectively.";

export const Route = createFileRoute("/services/business-card-design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/business-card-design" },
    ],
    links: [{ rel: "canonical", href: "/services/business-card-design" }],
  }),
  component: BusinessCardDesignPage,
});

const highlights = [
  {
    name: "Professional Identity",
    body: "Business cards designed to present your brand with a clean and professional visual identity.",
  },
  {
    name: "Memorable Design",
    body: "Balanced typography, colors and layouts that help your card leave a lasting impression.",
  },
  {
    name: "Brand Consistency",
    body: "Your logo, brand colors and visual style are integrated into the card design.",
  },
  {
    name: "Print Ready",
    body: "High-quality designs prepared with proper dimensions and print-friendly layouts.",
  },
];

const types = [
  "Personal Business Cards",
  "Company Business Cards",
  "Corporate Cards",
  "Creative Cards",
  "Minimal Cards",
  "Premium Cards",
];

function BusinessCardDesignPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Business Card Design"
        intro="Clean and professional business cards that leave a lasting impression and give your brand a polished identity."
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
                  <div className="relative mx-auto aspect-[1.7/1] max-w-lg overflow-hidden rounded-xl bg-ink p-7 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-coral/20 via-transparent to-cobalt/20" />

                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <div className="grid size-11 place-items-center rounded-lg bg-paper/10 ring-1 ring-paper/20">
                          <span className="font-display text-sm font-bold text-paper">JCH</span>
                        </div>

                        <div className="mt-5 h-3 w-32 rounded bg-paper/80" />
                        <div className="mt-2 h-2 w-24 rounded bg-paper/30" />
                      </div>

                      <div className="space-y-2">
                        <div className="h-2 w-36 rounded bg-paper/30" />
                        <div className="h-2 w-28 rounded bg-paper/30" />
                        <div className="h-2 w-32 rounded bg-paper/30" />
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto mt-5 aspect-[1.7/1] max-w-lg rounded-xl bg-paper ring-1 ring-ink/10 shadow-md">
                    <div className="flex h-full items-center justify-between p-7">
                      <div>
                        <div className="h-3 w-28 rounded bg-ink/20" />
                        <div className="mt-3 h-2 w-20 rounded bg-ink/10" />
                      </div>

                      <div className="grid size-12 place-items-center rounded-full bg-coral/20">
                        <span className="text-sm font-bold text-coral">JCH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="floaty absolute -right-3 -bottom-7 rounded-xl bg-card px-5 py-4 ring-1 ring-ink/10 shadow-[0_20px_40px_-20px_rgba(25,23,18,0.5)]"
                aria-hidden="true"
              >
                <p className="font-display text-[10px] tracking-[0.16em] text-ink-soft uppercase">
                  Business Card
                </p>

                <p className="mt-1 font-display text-sm font-semibold text-ink">Front • Back</p>
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
        title="Design My Business Card."
        whatsappLabel="Chat on WhatsApp"
        message="Hello Jimmy's Creative Hub, I would like a business card designed."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
