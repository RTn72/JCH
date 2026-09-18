import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { primaryNav, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-ink/10 bg-paper/90 shadow-[0_1px_20px_-12px_rgba(25,23,18,0.5)] backdrop-blur-md"
          : "border-transparent bg-paper/70 backdrop-blur-sm",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 transition-[height] duration-300",
          scrolled ? "h-[64px]" : "h-[72px]",
        )}
      >
        <Logo className="min-w-0" />

        <div className="flex items-center gap-6">
          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
                activeProps={{ className: "text-ink" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-coral px-5 py-2.5 font-display text-[13px] font-semibold text-paper ring-1 ring-coral transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Let&apos;s Work Together
            <span aria-hidden="true" className="text-[11px]">
              ↗
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 shrink-0 place-items-center rounded-lg text-ink ring-1 ring-ink/15 md:hidden"
          >
            <span className="block w-5" aria-hidden="true">
              <span
                className={cn(
                  "block h-0.5 bg-ink transition-transform duration-300",
                  open && "translate-y-[6px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "mt-1 block h-0.5 bg-ink transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "mt-1 block h-0.5 bg-ink transition-transform duration-300",
                  open && "-translate-y-[6px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-ink/10 bg-paper transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-6 py-6">
          <ul className="space-y-1">
            {primaryNav.map((item, i) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  style={{ transitionDelay: `${i * 30}ms` }}
                  className="block rounded-lg px-3 py-3 font-display text-lg font-semibold text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
                  activeProps={{ className: "text-ink bg-ink/5" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-3.5 font-display text-[15px] font-semibold text-paper"
          >
            Let&apos;s Work Together <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
