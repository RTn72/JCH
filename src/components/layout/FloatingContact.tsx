import { site, whatsappLink } from "@/config/site";

export function FloatingContact() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Instagram profile"
        className="grid size-11 place-items-center rounded-full bg-paper text-ink ring-1 ring-ink/15 shadow-[0_10px_30px_-12px_rgba(25,23,18,0.5)] transition-transform hover:-translate-y-1"
      >
        <span aria-hidden="true" className="text-lg">
          ◎
        </span>
      </a>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center gap-2.5 rounded-full bg-coral py-3 pr-5 pl-3 text-paper ring-1 ring-coral shadow-[0_16px_40px_-12px_rgba(240,69,42,0.7)] transition-transform hover:-translate-y-1"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-coral/40 motion-reduce:animate-none"
        />
        <span
          aria-hidden="true"
          className="grid size-8 place-items-center rounded-full bg-paper/20 font-display font-bold"
        >
          ✆
        </span>
        <span className="font-display text-[14px] font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}
