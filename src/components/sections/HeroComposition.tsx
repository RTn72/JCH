import { useEffect, useRef, useState } from "react";

/**
 * Layered "print proof" composition — abstract 3D forms with a light
 * pointer parallax. Purely decorative.
 */
export function HeroComposition() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
        const y = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
        setOffset({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const shift = (depth: number) => ({
    transform: `translate3d(${offset.x * depth}px, ${offset.y * depth}px, 0)`,
  });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="reveal relative h-[340px] [animation-delay:0.45s] md:h-[420px] lg:col-span-5"
    >
      <div
        style={shift(10)}
        className="absolute top-8 left-0 size-40 rotate-[6deg] rounded-2xl bg-coral/90 shadow-[0_24px_50px_-20px_rgba(240,69,42,0.6)] transition-transform duration-300 ease-out"
      />
      <div
        style={shift(18)}
        className="floaty absolute top-0 left-24 h-52 w-44 -rotate-6 rounded-2xl bg-cobalt shadow-[0_24px_50px_-20px_rgba(31,61,154,0.55)]"
      />
      <div
        style={shift(6)}
        className="slow-spin absolute top-16 right-4 size-36 rounded-full bg-gold ring-8 ring-paper"
      />
      <div
        style={shift(24)}
        className="absolute right-0 bottom-2 grid size-48 rotate-3 place-items-center rounded-2xl bg-ink shadow-[0_24px_50px_-20px_rgba(25,23,18,0.6)] transition-transform duration-300 ease-out"
      >
        <span className="font-display text-6xl font-bold text-paper">Aa</span>
      </div>
      <div
        style={shift(14)}
        className="absolute bottom-10 left-2 rounded-lg bg-paper px-3 py-2 font-display text-[11px] font-semibold tracking-[0.18em] text-ink-soft uppercase ring-1 ring-ink/10 transition-transform duration-300 ease-out"
      >
        Specimen 01
      </div>
      <div
        style={shift(8)}
        className="absolute top-32 left-6 grid size-14 place-items-center rounded-full bg-paper text-lg text-ink-soft ring-1 ring-ink/15 transition-transform duration-300 ease-out"
      >
        +
      </div>
    </div>
  );
}
