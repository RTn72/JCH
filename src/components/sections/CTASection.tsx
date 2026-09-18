import { Link } from "@tanstack/react-router";
import { site, whatsappLink } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type CTASectionProps = {
  title?: string;
  whatsappLabel?: string;
  message?: string;
  /** Secondary action: Instagram by default, or a route link. */
  secondary?: { label: string; to: string } | "instagram";
};

export function CTASection({
  title = "Have an idea? Let's turn it into something unforgettable.",
  whatsappLabel = "Chat on WhatsApp",
  message,
  secondary = "instagram",
}: CTASectionProps) {
  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <AnimatedSection className="reg overflow-hidden rounded-2xl bg-coral px-8 py-14 text-paper md:px-14 md:py-16">
          <h2 className="max-w-[26ch] font-display text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.05] font-semibold text-balance">
            {title}
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-ink py-3.5 pr-7 pl-6 font-display text-[15px] font-semibold text-paper ring-1 ring-ink transition-transform hover:-translate-y-0.5"
            >
              {whatsappLabel} <span aria-hidden="true">→</span>
            </a>
            {secondary === "instagram" ? (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-transparent px-6 py-3.5 font-display text-[15px] font-semibold text-ink ring-1 ring-ink/30 ring-inset transition-colors hover:ring-ink/60"
              >
                View Instagram
              </a>
            ) : (
              <Link
                to={secondary.to}
                className="inline-flex items-center gap-2.5 rounded-full bg-transparent px-6 py-3.5 font-display text-[15px] font-semibold text-ink ring-1 ring-ink/30 ring-inset transition-colors hover:ring-ink/60"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
