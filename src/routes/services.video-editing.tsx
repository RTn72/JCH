import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `Video Editing | ${site.name}`;
const description =
  "Professional video editing for reels, promotional videos, product videos, brand content and social media.";

export const Route = createFileRoute("/services/video-editing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/video-editing" },
    ],
    links: [{ rel: "canonical", href: "/services/video-editing" }],
  }),
  component: VideoEditingPage,
});

const highlights = [
  {
    name: "Professional Editing",
    body: "Clean cuts, smooth transitions and polished visuals for professional content.",
  },
  {
    name: "Engaging Reels",
    body: "Fast-paced and attention-grabbing edits designed for social media.",
  },
  {
    name: "Motion & Titles",
    body: "Animated text, titles and visual elements that make your videos stand out.",
  },
  {
    name: "Sound & Music",
    body: "Balanced audio, music and sound effects that enhance the final video.",
  },
];

const types = [
  "Instagram Reels",
  "Promotional Videos",
  "Product Videos",
  "Brand Videos",
  "Social Media Videos",
  "Corporate Videos",
];

function VideoEditingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Video Editing"
        intro="Engaging and polished video content for social media, marketing, promotions and businesses."
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
              <div className="overflow-hidden rounded-2xl bg-ink p-5 ring-1 ring-ink/10 shadow-[0_30px_60px_-30px_rgba(25,23,18,0.45)]">
                <div
                  className="relative grid aspect-video place-items-center overflow-hidden rounded-xl bg-card/10"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-coral/30 via-cobalt/20 to-gold/30" />

                  <div className="relative grid size-20 place-items-center rounded-full bg-paper/95 shadow-xl">
                    <span className="ml-1 text-3xl text-ink">▶</span>
                  </div>

                  <div className="absolute right-5 bottom-5 left-5">
                    <div className="h-1.5 overflow-hidden rounded-full bg-paper/20">
                      <div className="h-full w-2/3 rounded-full bg-coral" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3" aria-hidden="true">
                  <div className="h-10 flex-1 rounded-lg bg-coral/30" />
                  <div className="h-10 flex-1 rounded-lg bg-cobalt/30" />
                  <div className="h-10 flex-1 rounded-lg bg-gold/30" />
                  <div className="h-10 flex-1 rounded-lg bg-paper/15" />
                </div>
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
        title="Let's Edit Your Video."
        whatsappLabel="Chat on WhatsApp"
        message="Hello Jimmy's Creative Hub, I would like to discuss a video editing project."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
