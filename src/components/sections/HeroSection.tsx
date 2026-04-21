"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animations";

export function HeroSection() {
  return (
    <section className="relative bg-white pt-8 pb-0 md:pt-16 lg:pt-20">
      <div className="container-site">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal>
            <div className="max-w-xl">
              <h1 className="text-5xl font-black tracking-tight uppercase leading-[0.95] md:text-6xl lg:text-7xl xl:text-8xl">
                Your UK
                <br />
                study
                <br />
                journey
                <br />
                starts here
              </h1>
              <p className="mt-6 max-w-md text-base text-muted leading-relaxed md:text-lg">
                Crownway Admissions helps Nigerian students secure places at top
                UK universities — with expert guidance from application to
                arrival.
              </p>
              <div className="mt-8">
                <a
                  href="https://wa.me/2348123456789?text=Hi%20Crownway%2C%20I%27d%20like%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Book a consultation
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative aspect-[3/4] w-full max-w-[480px] overflow-hidden rounded-3xl">
                <Image
                  src="https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/699187ec24408a48fd246daa_learn-grow-succeed-1.2-small.webp"
                  alt="Student succeeding in their academic journey"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
