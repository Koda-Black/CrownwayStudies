"use client";

import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-white py-20 md:py-28">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <ScrollReveal>
            <div>
              <SectionHeading title="Hear from our students" />
              <div className="mt-8 flex items-end gap-1">
                <span className="text-7xl font-extrabold leading-none tracking-tight md:text-8xl">
                  98%
                </span>
              </div>
              <p className="mt-3 max-w-xs text-sm text-muted leading-relaxed">
                Of our students secured their UK visa on the first attempt and
                are now studying at their dream universities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 80}>
                <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-md">
                  <p className="flex-1 text-sm leading-relaxed text-secondary/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-sm font-bold text-primary">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted">
                        {t.programme}, {t.university}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
