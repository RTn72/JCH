import type { PortfolioItem } from "@/config/site";
import { cn } from "@/lib/utils";

const spanClasses: Record<NonNullable<PortfolioItem["span"]>, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const isVideo =
    item.image?.toLowerCase().endsWith(".mp4") || item.image?.toLowerCase().endsWith(".webm");

  return (
    <article
      className={cn(
        "group card3d flex flex-col overflow-hidden rounded-xl bg-card/70 ring-1 ring-black/5",
        spanClasses[item.span ?? "normal"],
      )}
    >
      <div className="relative overflow-hidden bg-ink/5">
        {item.image ? (
          isVideo ? (
            <video
              src={item.image}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${item.title} — ${item.category} project by Jimmy's Creative Hub`}
              className="block h-auto w-full transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <img
              src={item.image}
              alt={`${item.title} — ${item.category} project by Jimmy's Creative Hub`}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full transition-transform duration-700 group-hover:scale-105"
            />
          )
        ) : (
          <div className="grid size-full place-items-center">
            <div className="text-center">
              <span
                aria-hidden="true"
                className="mx-auto grid size-12 place-items-center rounded-full ring-1 ring-ink/15 text-ink-soft"
              >
                +
              </span>

              <p className="mt-3 font-display text-[10px] font-semibold tracking-[0.2em] text-ink-soft/70 uppercase">
                Image slot
              </p>
            </div>
          </div>
        )}

        <span className="absolute top-3 left-3 rounded-full bg-paper/90 px-3 py-1 font-display text-[10px] font-semibold tracking-[0.14em] text-ink uppercase">
          {item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>

        <p className="mt-2 text-[14px] leading-relaxed text-pretty text-ink-soft">
          {item.description}
        </p>

        {item.details && (
          <p className="mt-4 font-display text-[11px] tracking-[0.16em] text-ink-soft/60 uppercase">
            {item.details}
          </p>
        )}
      </div>
    </article>
  );
}
