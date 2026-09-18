import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `Social Media Design | ${site.name}`;
const description =
  "Instagram posts and stories, reels covers, YouTube thumbnails, promotional creatives and campaign design that keep your feed consistent.";

export const Route = createFileRoute("/services/social-media-design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/social-media-design" },
    ],
    links: [{ rel: "canonical", href: "/services/social-media-design" }],
  }),
  component: SocialMediaPage,
});

const formats = [
  { name: "Instagram Posts", ratio: "aspect-square" },
  { name: "Instagram Stories", ratio: "aspect-[9/16]" },
  { name: "Reels Covers", ratio: "aspect-[9/16]" },
  { name: "YouTube Thumbnails", ratio: "aspect-video" },
  { name: "Promotional Creatives", ratio: "aspect-square" },
  { name: "Campaign Designs", ratio: "aspect-video" },
  { name: "Social Media Branding", ratio: "aspect-square" },
];

function SocialMediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Social Media Design"
        intro="Eye-catching creatives that increase engagement and strengthen your online presence — designed as a set, so your feed reads as one brand instead of scattered posts."
      />

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <AnimatedSection className="mb-10">
            <p className="mb-4 font-display text-[11px] font-semibold tracking-[0.22em] text-coral uppercase">
              Formats
            </p>
            <h2 className="max-w-[26ch] font-display text-[clamp(1.8rem,4vw,2.75rem)] leading-tight font-semibold text-balance text-ink">
              Every placement, sized correctly.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15px] text-ink-soft">
              Each tile is an editable slot — drop real creatives in as they&apos;re
              published.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {formats.map((f, i) => (
              <AnimatedSection
                key={f.name}
                delay={(i % 4) * 60}
                className="card3d overflow-hidden rounded-xl bg-card/70 ring-1 ring-black/5"
              >
                <div
                  className={`grid ${f.ratio} place-items-center bg-ink/5`}
                  aria-hidden="true"
                >
                  <span className="grid size-10 place-items-center rounded-full text-ink-soft ring-1 ring-ink/15">
                    +
                  </span>
                </div>
                <h3 className="p-4 font-display text-[14px] font-semibold text-ink">
                  {f.name}
                </h3>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Make Your Socials Stand Out."
        whatsappLabel="Chat on WhatsApp"
        message="Hello Jimmy's Creative Hub, I would like social media design work."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
