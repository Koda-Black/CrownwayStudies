"use client";

import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { ScrollReveal } from "@/components/animations";

export function FeaturedCourses() {
  const featured = SERVICES.slice(0, 3);

  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-center text-4xl font-black tracking-tight uppercase md:text-5xl lg:text-6xl">
            Our services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted">
            Everything you need to secure your place at a top UK university —
            all under one roof.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span>{service.lessons}</span>
                    <span>{service.hours}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <p className="mt-4 text-lg font-black text-primary">
                    {service.price}
                  </p>
                  {service.note && (
                    <p className="mt-1 text-xs text-muted">{service.note}</p>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#services"
            className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
          >
            See all services
          </a>
          <div className="flex gap-2">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:bg-surface cursor-pointer"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:bg-surface cursor-pointer"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
