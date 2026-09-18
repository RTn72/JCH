import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { mailtoLink, primaryNav, services, site, telLink } from "@/config/site";

const footerServices = services.slice(0, 6);

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="paper" className="mb-5" />
            <p className="max-w-[40ch] text-[14px] leading-relaxed text-pretty text-paper/60">
              {site.tagline} Creative design agency in Ahmedabad, Gujarat.
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="mb-4 font-display text-[11px] font-semibold tracking-[0.2em] text-paper/40 uppercase">
              Quick links
            </h2>
            <ul className="space-y-2.5 text-[14px] text-paper/75">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="mb-4 font-display text-[11px] font-semibold tracking-[0.2em] text-paper/40 uppercase">
              Services
            </h2>
            <ul className="space-y-2.5 text-[14px] text-paper/75">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.to ?? "/services"}
                    className="transition-colors hover:text-paper"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="mb-4 font-display text-[11px] font-semibold tracking-[0.2em] text-paper/40 uppercase">
              Contact
            </h2>
            <ul className="space-y-3 text-[14px] text-paper/75">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 text-gold" aria-hidden="true">
                  ◉
                </span>
                <span>{site.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 text-gold" aria-hidden="true">
                  ✆
                </span>
                <a href={telLink} className="transition-colors hover:text-paper">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 text-gold" aria-hidden="true">
                  ✉
                </span>
                <a
                  href={mailtoLink}
                  className="break-all transition-colors hover:text-paper"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 text-gold" aria-hidden="true">
                  ◎
                </span>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-paper"
                >
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-paper/10 pt-6 text-[12px] text-paper/45">
          <span>© 2026 {site.name}. All rights reserved.</span>
          <span className="font-display tracking-[0.15em]">
            EST. {site.established} — AHMEDABAD
          </span>
        </div>
      </div>
    </footer>
  );
}
