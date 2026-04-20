"use client";

import { STATS } from "@/lib/data";
import { ScrollReveal } from "@/components/animations";

export function StatsBar() {
  return (
    <section className="border-y border-border bg-white py-10 md:py-14">
      <div className="container-site">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold tracking-tight md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
