"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animations";

const CTA_PORTRAITS = [
  {
    src: "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697d011c4fb208206e7f1c5e_Young%20Adult%20at%20Desk.webp",
    alt: "Student at desk",
  },
  {
    src: "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697d011e9c8e5fd602f5e864_Smiling%20Man%20Portrait.webp",
    alt: "Smiling student",
  },
  {
    src: "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697d011e8aa69188c0a01061_Warm%20Portrait%20of%20a%20Man.webp",
    alt: "Student portrait",
  },
  {
    src: "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697d011ea738480c1ff68016_Portrait%20in%20Green%20Edited.webp",
    alt: "Student in green",
  },
];

export function CTASection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-black tracking-tight uppercase leading-[0.95] md:text-5xl lg:text-6xl">
              Join 500+ students today!
            </h2>
            <p className="mt-4 text-base text-muted md:text-lg">
              Start your UK admission journey now and join hundreds of Nigerian
              students already studying at top universities.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/2348123456789?text=Hi%20Crownway%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Book free consultation
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-12 flex items-center justify-center -space-x-2">
              {CTA_PORTRAITS.map((p, i) => (
                <div
                  key={i}
                  className="relative h-16 w-16 overflow-hidden rounded-full border-3 border-white shadow-md md:h-20 md:w-20"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
