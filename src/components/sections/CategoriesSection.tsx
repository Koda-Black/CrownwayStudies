"use client";

import { PROCESS_STEPS } from "@/lib/data";
import { SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

export function CategoriesSection() {
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <SectionHeading
            title="How it works"
            subtitle="Our simple 5-step process takes you from dream to departure in as little as 8 weeks."
            align="center"
          />
        </ScrollReveal>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.id} delay={i * 100}>
                <div
                  className={`flex flex-col items-center gap-6 lg:flex-row lg:gap-16 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 lg:text-right">
                    {i % 2 === 0 && (
                      <div className="rounded-3xl bg-surface p-8 transition-all duration-300 hover:shadow-lg md:p-10">
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <p className="mt-2 text-sm text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-lg">
                    {step.step}
                  </div>

                  <div className="flex-1">
                    {i % 2 === 1 && (
                      <div className="rounded-3xl bg-surface p-8 transition-all duration-300 hover:shadow-lg md:p-10">
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <p className="mt-2 text-sm text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

