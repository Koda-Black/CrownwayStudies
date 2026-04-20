"use client";

import { PARTNER_UNIVERSITIES } from "@/lib/data";
import { ScrollReveal } from "@/components/animations";

export function TrustedBySection() {
  return (
    <section className="border-y border-border bg-white py-14 md:py-20">
      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-muted">
            Our students study at
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {PARTNER_UNIVERSITIES.map((uni) => (
              <span
                key={uni}
                className="text-lg font-bold text-secondary/30 transition-colors hover:text-secondary/60"
              >
                {uni}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
