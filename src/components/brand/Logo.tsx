import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** "ink" for light backgrounds, "paper" for dark backgrounds. */
  tone?: "ink" | "paper";
  className?: string;
  showName?: boolean;
};

/**
 * Typographic brand mark. Swap the <span> for an <img> import once the
 * official logo file is available.
 */
export function Logo({ tone = "ink", className, showName = true }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} — home`}
      className={cn("flex items-center gap-3", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-lg font-display text-lg font-bold",
          tone === "ink" ? "bg-ink text-paper" : "bg-paper text-ink",
        )}
      >
        J.
      </span>
      {showName && (
        <span
          className={cn(
            "truncate font-display text-[15px] leading-none font-semibold tracking-tight",
            tone === "ink" ? "text-ink" : "text-paper",
          )}
        >
          {site.name}
        </span>
      )}
    </Link>
  );
}
