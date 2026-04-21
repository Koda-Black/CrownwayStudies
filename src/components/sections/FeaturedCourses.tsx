"use client";

import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { ScrollReveal } from "@/components/animations";

export function FeaturedCourses() {
  const featured = SERVICES.slice(0, 3);

  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container-site">
        <div className="rounded-[28px] bg-surface px-5 py-10 md:px-10 md:py-14">
          <ScrollReveal>
            <h2 className="text-center text-4xl font-black tracking-tight uppercase md:text-5xl lg:text-6xl">
              Our services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted">
              Everything you need to secure your place at a top UK university —
              all under one roof.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#111217] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <span>{service.lessons}</span>
                      <span>{service.hours}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/75">
                      {service.description}
                    </p>
                    <p className="mt-4 text-lg font-black text-white">
                      {service.price}
                    </p>
                    {service.note && (
                      <p className="mt-1 text-xs text-white/60">
                        {service.note}
                      </p>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <a
              href="#services"
              className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary/90"
            >
              See all services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
