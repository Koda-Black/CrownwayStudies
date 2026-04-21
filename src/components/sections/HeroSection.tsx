"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/animations";

const HERO_SLIDES = [
  {
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/699187ec24408a48fd246daa_learn-grow-succeed-1.2-small.webp",
    gradient: "from-[#edf2ff] via-[#f3f6ff] to-[#ffffff]",
  },
  {
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697dc671b38eb68fe87b64e6_gain-the-skills-to-succeed-1-p-1600.webp",
    gradient: "from-[#fff0e8] via-[#fff6f0] to-[#ffffff]",
  },
  {
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697d011e9c8e5fd602f5e864_Smiling%20Man%20Portrait.webp",
    gradient: "from-[#e8f3ff] via-[#f3f8ff] to-[#ffffff]",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className={`relative bg-gradient-to-br pt-8 pb-0 transition-colors duration-700 md:pt-16 lg:pt-20 ${HERO_SLIDES[activeSlide].gradient}`}
    >
      <div className="container-site">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal>
            <div className="max-w-[560px]">
              <h1 className="text-4xl font-black tracking-tight uppercase leading-[0.95] md:text-5xl lg:text-6xl">
                Your UK
                <br />
                study
                <br />
                journey
                <br />
                starts here
              </h1>
              <p className="mt-6 max-w-md text-base text-muted leading-relaxed md:text-lg">
                Crownway Studies helps Nigerian students secure places at top UK
                universities — with expert guidance from application to arrival.
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
            <div className="relative flex h-full justify-center lg:justify-end">
              <div className="relative aspect-[4/5] w-full max-w-[640px] overflow-hidden rounded-3xl">
                {HERO_SLIDES.map((slide, i) => (
                  <Image
                    key={slide.image}
                    src={slide.image}
                    alt="Student succeeding in their academic journey"
                    fill
                    className={`object-cover transition-opacity duration-700 ${i === activeSlide ? "opacity-100" : "opacity-0"}`}
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, 640px"
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
