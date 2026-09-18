import { mailtoLink, site, telLink, whatsappLink } from "@/config/site";

const channels = [
  {
    label: "WhatsApp",
    value: site.phone,
    href: whatsappLink(),
    glyph: "✆",
    external: true,
  },
  { label: "Phone", value: site.phone, href: telLink, glyph: "☏", external: false },
  { label: "Email", value: site.email, href: mailtoLink, glyph: "✉", external: false },
  {
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
    glyph: "◎",
    external: true,
  },
];

export function SocialButtons() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {channels.map((c) => (
        <li key={c.label}>
          <a
            href={c.href}
            {...(c.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group flex items-center gap-4 rounded-xl bg-card/70 p-5 ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
          >
            <span
              aria-hidden="true"
              className="grid size-11 shrink-0 place-items-center rounded-lg bg-coral/10 text-lg text-coral"
            >
              {c.glyph}
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[13px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                {c.label}
              </span>
              <span className="block truncate text-[15px] text-ink">{c.value}</span>
            </span>
            <span
              aria-hidden="true"
              className="ml-auto text-ink-soft transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
