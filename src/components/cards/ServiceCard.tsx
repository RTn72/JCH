import { Link } from "@tanstack/react-router";
import type { Service } from "@/config/site";
import { cn } from "@/lib/utils";

const toneStyles: Record<Service["tone"], string> = {
  coral: "bg-coral/10 text-coral",
  cobalt: "bg-cobalt/10 text-cobalt",
  gold: "bg-gold/15 text-gold",
  ink: "bg-paper/10 text-gold",
};

type ServiceCardProps = {
  service: Service;
  /** Inverted (dark) card treatment. */
  inverted?: boolean;
  ctaLabel?: string;
};

export function ServiceCard({ service, inverted = false, ctaLabel = "Explore" }: ServiceCardProps) {
  const inner = (
    <>
      <div
        aria-hidden="true"
        className={cn(
          "mb-6 grid size-11 place-items-center rounded-lg text-lg",
          toneStyles[inverted ? "ink" : service.tone],
        )}
      >
        {service.glyph}
      </div>
      <h3
        className={cn(
          "mb-2 font-display text-xl font-semibold",
          inverted ? "text-paper" : "text-ink",
        )}
      >
        {service.name}
      </h3>
      <p
        className={cn(
          "mb-5 text-[14px] leading-relaxed text-pretty",
          inverted ? "text-paper/70" : "text-ink-soft",
        )}
      >
        {service.description}
      </p>
      <span
        className={cn(
          "inline-flex items-center gap-2 font-display text-[13px] font-medium transition-all group-hover:gap-3",
          inverted ? "text-gold" : "text-ink",
        )}
      >
        {ctaLabel} <span aria-hidden="true">→</span>
      </span>
    </>
  );

  const classes = cn(
    "card3d group block h-full rounded-xl p-7 ring-1",
    inverted ? "bg-ink text-paper ring-ink" : "bg-card/70 ring-black/5",
  );

  if (service.to) {
    return (
      <Link to={service.to} className={classes}>
        {inner}
      </Link>
    );
  }

  return <div className={classes}>{inner}</div>;
}
