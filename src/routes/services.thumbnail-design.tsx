import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `Thumbnail Design | ${site.name}`;
const description =
  "Attention-grabbing thumbnail designs created to make videos and content stand out and improve click-through potential.";

export const Route = createFileRoute("/services/thumbnail-design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/thumbnail-design" },
    ],
    links: [{ rel: "canonical", href: "/services/thumbnail-design" }],
  }),
  component: ThumbnailDesignPage,
});

const highlights = [
  {
    name: "Attention Grabbing",
    body: "Bold visual compositions designed to catch attention while users scroll through content.",
  },
  {
    name: "Click Focused",
    body: "Strong hierarchy, readable text and visual emphasis designed around the main content.",
  },
  {
    name: "Platform Ready",
    body: "Thumbnails optimized for YouTube, social media and other digital content platforms.",
  },
  {
    name: "Consistent Style",
    body: "A recognizable visual style that keeps your thumbnails consistent with your brand.",
  },
];

const types = [
  "YouTube Thumbnails",
  "Video Thumbnails",
  "Podcast Thumbnails",
  "Social Media Thumbnails",
  "Gaming Thumbnails",
  "Educational Thumbnails",
];

function ThumbnailDesignPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Thumbnail Design"
        intro="Attention-grabbing thumbnails designed to improve clicks, communicate your content instantly and make your videos stand out."
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
                  <div className="relative mx-auto aspect-video max-w-xl overflow-hidden rounded-xl bg-ink">
                    <div className="absolute inset-0 bg-gradient-to-br from-coral/40 via-cobalt/30 to-gold/40" />

                    <div className="absolute inset-0 bg-ink/20" />

                    <div className="absolute top-7 left-7">
                      <div className="rounded-md bg-paper/90 px-3 py-1.5">
                        <span className="font-display text-[10px] font-bold tracking-[0.12em] text-ink uppercase">
                          New Video
                        </span>
                      </div>
                    </div>

                    <div className="absolute right-7 bottom-8 left-7">
                      <div className="h-8 w-4/5 rounded bg-paper/90" />
                      <div className="mt-2 h-3 w-2/5 rounded bg-paper/50" />
                    </div>

                    <div className="absolute top-1/2 left-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper/90 shadow-xl">
                      <span className="ml-1 text-xl text-ink">▶</span>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <div className="h-2 flex-1 rounded-full bg-coral/30" />
                    <div className="h-2 w-1/4 rounded-full bg-cobalt/25" />
                    <div className="h-2 w-1/5 rounded-full bg-gold/30" />
                  </div>
                </div>
              </div>

              <div
                className="floaty absolute -right-3 -bottom-7 rounded-xl bg-card px-5 py-4 ring-1 ring-ink/10 shadow-[0_20px_40px_-20px_rgba(25,23,18,0.5)]"
                aria-hidden="true"
              >
                <p className="font-display text-[10px] tracking-[0.16em] text-ink-soft uppercase">
                  Thumbnail
                </p>

                <p className="mt-1 font-display text-sm font-semibold text-ink">Click • Engage</p>
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
        title="Design My Thumbnail."
        whatsappLabel="Chat on WhatsApp"
        message="Hello Jimmy's Creative Hub, I would like a thumbnail designed."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
