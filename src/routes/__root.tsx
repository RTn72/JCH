import { Analytics } from "@vercel/analytics/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { type ReactNode } from "react";

import appCss from "../styles.css?url";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Toaster } from "@/components/ui/sonner";

import { site } from "@/config/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-semibold text-ink">404</h1>

        <h2 className="mt-4 font-display text-xl font-semibold text-ink">Page not found</h2>

        <p className="mt-2 text-sm text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 font-display text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);

  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-ink">
          This page didn&apos;t load
        </h1>

        <p className="mt-2 text-sm text-ink-soft">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 font-display text-sm font-semibold text-paper"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-display text-sm font-semibold text-ink ring-1 ring-ink/20"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: `${site.name} — Creative Design Agency in Ahmedabad`,
      },
      {
        name: "description",
        content: site.description,
      },
      {
        name: "author",
        content: site.name,
      },
      {
        property: "og:site_name",
        content: site.name,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "theme-color",
        content: "#F5F2EA",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: site.name,
          slogan: site.tagline,
          description: site.description,
          foundingDate: String(site.established),
          email: site.email,
          telephone: site.phone,
          areaServed: "IN",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          sameAs: [site.instagram],
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />

        <noscript>
          {/* Scroll reveals need JS; without it show all content immediately. */}
          <style>{`.opacity-0,.reveal{opacity:1!important;animation:none!important}`}</style>
        </noscript>
      </head>

      <body>
        {children}

        {/* Vercel Web Analytics */}
        <Analytics />

        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main" className="flex-1">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>

        <Footer />

        <FloatingContact />

        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
