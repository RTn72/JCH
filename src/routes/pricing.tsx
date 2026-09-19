import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { servicePricing, comboPackages } from "../config/site";

function PricingPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-28 md:px-10 lg:px-16">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
            <Sparkles className="h-4 w-4" />
            Transparent Pricing
          </div>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Creative work that fits
            <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              your budget.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
            Choose a package that matches your project. Every design is customized to your brand,
            requirements and creative direction.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-16">
          {servicePricing.map((service) => (
            <div key={service.slug}>
              {/* Service heading */}
              <div className="mb-7">
                <h2 className="text-2xl font-semibold md:text-3xl">{service.service}</h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50 md:text-base">
                  {service.description}
                </p>
              </div>

              {/* Cards */}
              <div className="grid gap-5 md:grid-cols-3">
                {service.tiers.map((tier) => (
                  <div
                    key={`${service.slug}-${tier.name}`}
                    className={`relative flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
                      tier.popular
                        ? "border-orange-400/50 bg-gradient-to-b from-orange-400/[0.10] to-white/[0.03] shadow-[0_0_50px_rgba(251,146,60,0.08)]"
                        : "border-white/10 bg-white/[0.025] hover:border-white/20"
                    }`}
                  >
                    {/* Popular badge */}
                    {tier.popular && (
                      <div className="absolute -top-3 left-6 rounded-full bg-orange-400 px-3 py-1 text-xs font-semibold text-black">
                        Most Popular
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{tier.name}</h3>

                      {tier.popular && <Sparkles className="h-5 w-5 text-orange-300" />}
                    </div>

                    <div className="mt-5 flex items-end gap-1">
                      <span className="text-4xl font-bold tracking-tight">
                        ₹{tier.price.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="my-6 h-px bg-white/10" />

                    <ul className="flex flex-1 flex-col gap-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-white/65">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.07]">
                            <Check className="h-3 w-3 text-orange-300" />
                          </span>

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      search={{
                        service: service.service,
                      }}
                      className={`mt-7 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                        tier.popular
                          ? "bg-orange-400 text-black hover:bg-orange-300"
                          : "border border-white/10 bg-white/[0.05] text-white hover:bg-white/[0.09]"
                      }`}
                    >
                      Get This Package
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Combo Packages */}
      <section className="border-t border-white/10 bg-white/[0.015] px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
              Save More
            </span>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Combo Packages</h2>

            <p className="mx-auto mt-4 max-w-xl text-white/50">
              Get multiple creative services together at a bundled price.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {comboPackages.map((combo) => (
              <div
                key={combo.slug}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300/30"
              >
                <h3 className="text-xl font-semibold">{combo.name}</h3>

                <div className="mt-4 text-4xl font-bold">
                  ₹{combo.price.toLocaleString("en-IN")}
                </div>

                <div className="my-6 h-px bg-white/10" />

                <ul className="space-y-3">
                  {combo.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/65">
                      <Check className="h-4 w-4 text-orange-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  search={{
                    service: `${combo.name} Combo Package`,
                  }}
                  className="mt-7 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.09]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-white/[0.03] to-purple-500/10 p-8 text-center md:p-14">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-400/10 blur-[80px]" />

          <div className="relative">
            <h2 className="text-3xl font-semibold md:text-5xl">Need something custom?</h2>

            <p className="mx-auto mt-4 max-w-xl text-white/55">
              Tell us what you have in mind and we'll create a package around your exact
              requirements.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-semibold text-black transition hover:bg-orange-300"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});
