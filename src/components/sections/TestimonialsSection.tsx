"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";
import { ScrollReveal } from "@/components/animations";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-white py-20 md:py-28">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <ScrollReveal>
            <div>
              <h2 className="text-4xl font-black tracking-tight uppercase leading-[0.95] md:text-5xl">
                Hear from our students
              </h2>
              <div className="mt-8 rounded-2xl bg-[#1c4bff] px-6 py-5 text-white">
                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                  <span className="row-span-2 text-8xl font-black leading-[0.7] tracking-tight md:text-9xl">
                    98%
                  </span>
                  <p className="self-start pt-1 text-sm leading-relaxed text-white/85">
                    Of our students secured their UK visa on the first attempt.
                  </p>
                  <p className="col-span-2 text-sm leading-relaxed text-white/85">
                    They are now studying at their dream universities across the
                    UK.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 80}>
                <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:shadow-md">
                  <p className="flex-1 text-sm leading-relaxed text-secondary/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-5 flex items-center gap-3">
                    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
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
