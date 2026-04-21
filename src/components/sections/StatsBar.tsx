"use client";

import { STATS } from "@/lib/data";
import { ScrollReveal } from "@/components/animations";
import { cn } from "@/lib/utils";

export function StatsBar() {
  return (
    <section className="border-y border-border bg-white py-6 md:py-8">
      <div className="container-site">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-between gap-6">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "flex items-baseline gap-2 text-center",
                  i === STATS.length - 1 &&
                    "rounded-full bg-primary/10 px-5 py-2",
                )}
              >
                <span
                  className={cn(
                    "text-2xl font-black tracking-tight md:text-3xl",
                    i === STATS.length - 1 && "text-primary",
                  )}
                >
                  {stat.value}
                </span>
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
