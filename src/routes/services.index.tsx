import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { services, site } from "@/config/site";

const title = `Services — Graphic Design, Branding & Web | ${site.name}`;
const description =
  "Graphic design, logo design, branding, social media creatives, website design and development, video editing, packaging, presentations and more — from Ahmedabad.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your brand needs to look the part."
        intro="Fourteen ways we help businesses, creators and brands communicate clearly. Pick the one you need, or describe the requirement and we'll shape it."
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={(i % 3) * 60}>
                <ServiceCard
                  service={service}
                  inverted={service.slug === "and-more"}
                  ctaLabel="Get Started"
                />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12">
            <p className="text-[15px] text-ink-soft">
              Looking for detail on a specific area?{" "}
              <Link
                to="/services/graphic-design"
                className="font-display font-semibold text-ink underline underline-offset-4"
              >
                Graphic design
              </Link>
              ,{" "}
              <Link
                to="/services/branding"
                className="font-display font-semibold text-ink underline underline-offset-4"
              >
                branding &amp; logo design
              </Link>
              ,{" "}
              <Link
                to="/services/social-media-design"
                className="font-display font-semibold text-ink underline underline-offset-4"
              >
                social media design
              </Link>{" "}
              and{" "}
              <Link
                to="/services/website-design"
                className="font-display font-semibold text-ink underline underline-offset-4"
              >
                website design &amp; development
              </Link>{" "}
              each have their own page.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Not sure which service fits? Send the brief and we'll advise."
        secondary={{ label: "Contact us", to: "/contact" }}
      />
    </>
  );
}
