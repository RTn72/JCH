import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { HeroComposition } from "@/components/sections/HeroComposition";
import {
  featuredServiceSlugs,
  processSteps,
  services,
  site,
  stats,
  testimonials,
  whatsappLink,
  whyChooseUs,
} from "@/config/site";

const title = `${site.name} — Creative Design Agency in Ahmedabad`;
const description =
  "Creative graphic design solutions that bring your ideas to life — branding, logo design, social media creatives, websites and video editing from Ahmedabad, Gujarat.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const featured = featuredServiceSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s));

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="reg relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="reveal mb-7 flex items-center gap-3 font-display text-[11px] font-semibold tracking-[0.22em] text-ink-soft uppercase">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-coral"
                />
                Creative Design Studio — Ahmedabad, IN
              </p>
              <h1 className="font-display text-[clamp(3rem,9vw,6.75rem)] leading-[0.92] font-semibold text-balance text-ink">
                <span className="block overflow-hidden">
                  <span className="reveal block">Where Imagination</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal block [animation-delay:0.15s]">
                    Meets <span className="text-coral">Innovation</span>.
                  </span>
                </span>
              </h1>
              <p className="reveal mt-8 max-w-[42ch] text-[17px] leading-relaxed text-pretty text-ink-soft [animation-delay:0.25s]">
                Creative graphic design solutions that bring your ideas to life with
                stunning visuals — from full branding to scroll-stopping social media.
              </p>
              <div className="reveal mt-9 flex flex-wrap items-center gap-4 [animation-delay:0.35s]">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-ink py-3.5 pr-7 pl-6 font-display text-[15px] font-semibold text-paper ring-1 ring-ink transition-transform hover:-translate-y-0.5"
                >
                  Start a Project <span aria-hidden="true">→</span>
                </a>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 font-display text-[15px] font-semibold text-ink ring-1 ring-ink/25 transition-colors hover:ring-ink/50"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>

            <HeroComposition />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <AnimatedSection className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 font-display text-[11px] font-semibold tracking-[0.22em] text-coral uppercase">
                What we do
              </p>
              <h2 className="max-w-[24ch] font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-balance text-ink">
                Six disciplines, one obsession — craft.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-display text-[15px] font-semibold text-ink transition-all hover:gap-3"
            >
              All services <span aria-hidden="true">→</span>
            </Link>
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 60}>
                <ServiceCard
                  service={service}
                  inverted={service.slug === "and-more"}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <AnimatedSection className="mb-12">
            <p className="mb-4 font-display text-[11px] font-semibold tracking-[0.22em] text-coral uppercase">
              Why choose us
            </p>
            <h2 className="max-w-[22ch] font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-balance text-ink">
              Design decisions with a reason behind them.
            </h2>
          </AnimatedSection>

          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((point, i) => (
              <AnimatedSection
                key={point.title}
                delay={i * 60}
                className="border-t-2 border-ink/15 pt-5"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-pretty text-ink-soft">
                  {point.detail}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="sr-only">Studio at a glance</h2>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection
                key={stat.label}
                delay={i * 80}
                className="border-l border-paper/15 pl-5"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span
                    className={`block font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-none font-semibold ${
                      stat.highlight ? "text-gold" : "text-paper"
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-[13px] text-paper/60">
                    {stat.label}
                  </span>
                </dd>
              </AnimatedSection>
            ))}
          </dl>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <AnimatedSection className="mb-12">
            <p className="mb-4 font-display text-[11px] font-semibold tracking-[0.22em] text-coral uppercase">
              Our creative process
            </p>
            <h2 className="max-w-[22ch] font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-balance text-ink">
              A numbered rail from idea to delivery.
            </h2>
          </AnimatedSection>
          <ol className="grid gap-6 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <AnimatedSection
                as="li"
                key={step.step}
                delay={i * 70}
                className="border-t-2 border-ink/15 pt-5"
              >
                <span className="font-display text-5xl font-semibold text-coral/80">
                  {step.step}
                </span>
                <h3 className="mt-4 mb-2 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-pretty text-ink-soft">
                  {step.detail}
                </p>
              </AnimatedSection>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <AnimatedSection className="mb-12">
            <p className="mb-4 font-display text-[11px] font-semibold tracking-[0.22em] text-coral uppercase">
              Client words
            </p>
            <h2 className="max-w-[26ch] font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-balance text-ink">
              Feedback from recent projects lands here.
            </h2>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 70}>
                <TestimonialCard testimonial={t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <CTASection />
    </>
  );
}
