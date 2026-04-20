"use client";

import { WHY_US_POINTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

export function InsightsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <SectionHeading
            title="Why choose us"
            subtitle="We don't just process applications — we invest in your success."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US_POINTS.map((point, i) => (
            <ScrollReveal key={point.id} delay={i * 100}>
              <div className="group rounded-3xl bg-surface p-8 text-center transition-all duration-300 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100">
                  <span className="text-2xl font-extrabold text-primary">
                    {point.stat}
                  </span>
                </div>
                <h3 className="text-lg font-bold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
