import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SocialButtons } from "@/components/sections/SocialButtons";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { site } from "@/config/site";

const title = `Contact — ${site.name}`;
const description =
  "Have a project, idea or design requirement? Message Jimmy's Creative Hub on WhatsApp, call, email, or send the enquiry form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Create Something Great."
        intro="Have a project, idea or design requirement? Let's talk."
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <AnimatedSection>
              <h2 className="mb-6 font-display text-2xl font-semibold text-ink">
                Reach us directly
              </h2>
              <SocialButtons />
              <p className="mt-6 text-[14px] leading-relaxed text-ink-soft">
                Based in {site.location}. WhatsApp is the fastest way to get a reply.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100} className="rounded-2xl bg-card/70 p-7 ring-1 ring-black/5 md:p-9">
              <h2 className="mb-6 font-display text-2xl font-semibold text-ink">
                Send an enquiry
              </h2>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <FAQ heading="Before you send — the usual questions." />
    </>
  );
}
