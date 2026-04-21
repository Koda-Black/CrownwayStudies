"use client";

import { STATS } from "@/lib/data";
import { ScrollReveal } from "@/components/animations";
import { cn } from "@/lib/utils";

export function StatsBar() {
  return (
    <section className="bg-white py-6 md:py-8">
      <div className="container-site">
        <ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "rounded-2xl border border-border bg-surface-alt px-5 py-4",
                  i === STATS.length - 1 &&
                    "border-primary bg-[#1c4bff] text-white",
                )}
              >
                <p className="text-3xl font-black leading-none tracking-tight md:text-4xl">
                  {stat.value}
                </p>
                <p
                  className={cn(
                    "mt-1 text-xs text-muted",
                    i === STATS.length - 1 && "text-white/85",
                  )}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
