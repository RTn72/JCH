import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/sections/PageHeader";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { CTASection } from "@/components/sections/CTASection";
import { portfolioCategories, portfolioItems, site, type PortfolioCategory } from "@/config/site";
import { cn } from "@/lib/utils";

const title = `Portfolio — Design Work | ${site.name}`;
const description =
  "Selected graphic design, branding, social media, website, video, poster, packaging and presentation projects from Jimmy's Creative Hub, Ahmedabad.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [active, setActive] = useState<PortfolioCategory>("All");

  const visible = useMemo(
    () =>
      active === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === active),
    [active],
  );

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work, category by category."
        intro="Project images are being prepared. Each slot below is ready to hold real artwork, with its title, category and description already in place."
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div
            role="tablist"
            aria-label="Filter portfolio by category"
            className="mb-10 flex flex-wrap gap-2"
          >
            {portfolioCategories.map((category) => {
              const selected = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(category)}
                  className={cn(
                    "rounded-full px-4 py-2 font-display text-[13px] font-semibold transition-all",
                    selected
                      ? "bg-ink text-paper ring-1 ring-ink"
                      : "text-ink-soft ring-1 ring-ink/15 hover:text-ink hover:ring-ink/40",
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {visible.length === 0 ? (
            <p className="rounded-xl bg-card/70 p-10 text-center text-[15px] text-ink-soft ring-1 ring-black/5">
              No projects in this category yet — new work is added here as it is published.
            </p>
          ) : (
            <div className="grid auto-rows-auto gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((item, i) => (
                <div
                  key={item.id}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className={cn(
                    "reveal-in",
                    item.span === "tall" && "sm:row-span-2",
                    item.span === "wide" && "sm:col-span-2",
                  )}
                >
                  <PortfolioCard item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Want work like this for your brand?"
        secondary={{ label: "Start an enquiry", to: "/contact" }}
      />
    </>
  );
}
