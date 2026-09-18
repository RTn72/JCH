import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `Presentation / PPT Design | ${site.name}`;
const description =
  "Professional presentation and PPT designs that turn information into clear, engaging and visually compelling slides.";

export const Route = createFileRoute("/services/presentation-design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/presentation-design" },
    ],
    links: [{ rel: "canonical", href: "/services/presentation-design" }],
  }),
  component: PresentationDesignPage,
});

const highlights = [
  {
    name: "Visual Storytelling",
    body: "Information is transformed into clear and visually engaging slides that are easy to follow.",
  },
  {
    name: "Professional Layouts",
    body: "Balanced typography, spacing and composition create polished presentation designs.",
  },
  {
    name: "Brand Consistency",
    body: "Colors, fonts and visual elements can be aligned with your business or personal brand.",
  },
  {
    name: "Presentation Ready",
    body: "Well-structured slides prepared for meetings, pitches, academics, marketing and business presentations.",
  },
];

const types = [
  "Business Presentations",
  "Pitch Decks",
  "Academic PPTs",
  "Marketing Presentations",
  "Company Profiles",
  "Project Presentations",
];

function PresentationDesignPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Presentation / PPT Design"
        intro="Professional and engaging presentations that turn information into visually compelling slides and help you communicate your ideas with confidence."
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
                  <div className="mx-auto max-w-lg rounded-xl bg-paper p-5 ring-1 ring-ink/10 shadow-lg">
                    <div className="grid gap-4 sm:grid-cols-[1.3fr_1fr]">
                      <div className="space-y-3">
                        <div className="h-3 w-1/3 rounded bg-coral/50" />
                        <div className="h-8 w-full rounded bg-ink/15" />
                        <div className="h-2 w-4/5 rounded bg-ink/10" />
                        <div className="h-2 w-full rounded bg-ink/10" />

                        <div className="mt-5 grid grid-cols-2 gap-2">
                          <div className="h-14 rounded-lg bg-cobalt/20" />
                          <div className="h-14 rounded-lg bg-gold/25" />
                        </div>
                      </div>

                      <div className="rounded-xl bg-gradient-to-br from-coral/25 via-gold/20 to-cobalt/25 p-4">
                        <div className="flex h-full min-h-32 items-end gap-2">
                          <div className="h-1/3 flex-1 rounded-t bg-coral/50" />
                          <div className="h-2/3 flex-1 rounded-t bg-cobalt/40" />
                          <div className="h-full flex-1 rounded-t bg-gold/50" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex gap-2">
                      <span className="h-1.5 w-8 rounded-full bg-coral/50" />
                      <span className="h-1.5 w-8 rounded-full bg-ink/10" />
                      <span className="h-1.5 w-8 rounded-full bg-ink/10" />
                      <span className="h-1.5 w-8 rounded-full bg-ink/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="floaty absolute -right-3 -bottom-7 rounded-xl bg-card px-5 py-4 ring-1 ring-ink/10 shadow-[0_20px_40px_-20px_rgba(25,23,18,0.5)]"
                aria-hidden="true"
              >
                <p className="font-display text-[10px] tracking-[0.16em] text-ink-soft uppercase">
                  Presentation
                </p>

                <p className="mt-1 font-display text-sm font-semibold text-ink">Clear • Engaging</p>
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
        title="Design My Presentation."
        whatsappLabel="Chat on WhatsApp"
        message="Hello Jimmy's Creative Hub, I would like a professional presentation designed."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
