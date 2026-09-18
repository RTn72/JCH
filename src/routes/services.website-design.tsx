import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";

const title = `Website Design & Development | ${site.name}`;
const description =
  "Modern, responsive, mobile-friendly websites — business sites, landing pages, portfolio sites and custom web solutions designed and built end to end.";

export const Route = createFileRoute("/services/website-design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/website-design" },
    ],
    links: [{ rel: "canonical", href: "/services/website-design" }],
  }),
  component: WebsiteDesignPage,
});

const highlights = [
  { name: "Modern UI", body: "Clean interfaces with clear hierarchy and real typography." },
  { name: "Responsive Design", body: "Layouts designed per breakpoint, not shrunk down." },
  { name: "Mobile Friendly", body: "Touch-sized controls and fast loading on phones." },
  { name: "User-Friendly Experience", body: "Short paths from landing to enquiry." },
];

const types = [
  "Business Websites",
  "Landing Pages",
  "Portfolio Websites",
  "Custom Web Solutions",
];

function WebsiteDesignPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Website Design & Development"
        intro="Modern, responsive and user-friendly websites designed to represent your business professionally — from the first wireframe to the live site."
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
                  <h2 className="font-display text-lg font-semibold text-ink">
                    {h.name}
                  </h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-pretty text-ink-soft">
                    {h.body}
                  </p>
                </AnimatedSection>
              ))}
            </div>

            {/* Browser + phone mockup */}
            <AnimatedSection delay={120} className="relative">
              <div className="overflow-hidden rounded-2xl bg-card ring-1 ring-ink/10 shadow-[0_30px_60px_-30px_rgba(25,23,18,0.45)]">
                <div
                  className="flex items-center gap-2 border-b border-ink/10 bg-ink/5 px-4 py-3"
                  aria-hidden="true"
                >
                  <span className="size-2.5 rounded-full bg-coral" />
                  <span className="size-2.5 rounded-full bg-gold" />
                  <span className="size-2.5 rounded-full bg-cobalt" />
                  <span className="ml-3 h-4 flex-1 rounded-full bg-ink/10" />
                </div>
                <div className="space-y-4 p-6" aria-hidden="true">
                  <div className="h-8 w-2/3 rounded bg-ink/15" />
                  <div className="h-3 w-full rounded bg-ink/8" />
                  <div className="h-3 w-4/5 rounded bg-ink/8" />
                  <div className="grid grid-cols-3 gap-3 pt-3">
                    <div className="aspect-[4/3] rounded-lg bg-coral/25" />
                    <div className="aspect-[4/3] rounded-lg bg-cobalt/20" />
                    <div className="aspect-[4/3] rounded-lg bg-gold/25" />
                  </div>
                </div>
              </div>
              <div
                className="floaty absolute -right-2 -bottom-8 w-28 overflow-hidden rounded-2xl bg-card ring-1 ring-ink/10 shadow-[0_20px_40px_-20px_rgba(25,23,18,0.5)]"
                aria-hidden="true"
              >
                <div className="h-3 bg-ink/10" />
                <div className="space-y-2 p-3">
                  <div className="h-10 rounded bg-coral/25" />
                  <div className="h-2 w-3/4 rounded bg-ink/10" />
                  <div className="h-2 w-1/2 rounded bg-ink/10" />
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
        title="Build My Website."
        whatsappLabel="Chat on WhatsApp"
        message="Hello Jimmy's Creative Hub, I would like a website designed and developed."
        secondary={{ label: "See all services", to: "/services" }}
      />
    </>
  );
}
