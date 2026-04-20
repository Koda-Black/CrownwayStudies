"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

export function CTASection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="flex flex-col">
              <h2 className="text-4xl font-extrabold tracking-tight uppercase md:text-5xl lg:text-6xl">
                Ready to start your UK journey?
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Book your free consultation today. Our team will assess your
                profile, recommend universities, and map out your entire
                admission journey — no obligations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/2348123456789?text=Hi%20Crownway%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">Book free consultation</Button>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80"
                  alt="Smiling student"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="relative aspect-[3/4] mt-8 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Happy graduate"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
