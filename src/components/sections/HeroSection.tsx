"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

export function HeroSection() {
  return (
    <section className="relative bg-white pt-8 pb-0 md:pt-16">
      <div className="container-site">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="max-w-xl">
              <h1 className="text-5xl font-extrabold tracking-tight uppercase leading-[1.05] md:text-6xl lg:text-7xl">
                Your UK study journey starts here
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Crownway Admissions helps Nigerian students secure places at top
                UK universities — with expert guidance from application to
                arrival.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/2348123456789?text=Hi%20Crownway%2C%20I%27d%20like%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">Book a consultation</Button>
                </a>
                <a href="#services">
                  <Button variant="outline" size="lg">
                    See our services
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative h-[400px] w-[340px] overflow-hidden rounded-3xl md:h-[480px] md:w-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=600&q=80"
                  alt="Happy graduates celebrating at a UK university"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 340px, 400px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                      ✓
                    </div>
                    <div className="text-white">
                      <p className="text-sm font-semibold">500+ students placed</p>
                      <p className="text-xs text-white/70">across UK universities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
