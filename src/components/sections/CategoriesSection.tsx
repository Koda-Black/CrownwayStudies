"use client";

import { PROCESS_STEPS } from "@/lib/data";
import { ScrollReveal } from "@/components/animations";

export function CategoriesSection() {
  return (
    <section id="process" className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-center text-4xl font-black tracking-tight uppercase leading-[0.95] md:text-5xl lg:text-6xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted">
            Our simple 5-step process takes you from dream to departure in as
            little as 8 weeks.
          </p>
        </ScrollReveal>

        <div className="mt-14 flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step.id} delay={i * 80}>
              <div className="flex w-[260px] flex-shrink-0 flex-col rounded-3xl bg-white p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-black text-primary">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
