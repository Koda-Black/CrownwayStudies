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
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="hidden md:block">
            <div className="absolute -left-2 top-2 h-28 w-28 overflow-hidden rounded-2xl rotate-[-6deg]">
              <Image src={CTA_PORTRAITS[0].src} alt={CTA_PORTRAITS[0].alt} fill className="object-cover" sizes="112px" />
            </div>
            <div className="absolute -right-2 top-2 h-28 w-28 overflow-hidden rounded-2xl rotate-[6deg]">
              <Image src={CTA_PORTRAITS[1].src} alt={CTA_PORTRAITS[1].alt} fill className="object-cover" sizes="112px" />
            </div>
            <div className="absolute -left-2 bottom-0 h-28 w-28 overflow-hidden rounded-2xl rotate-[4deg]">
              <Image src={CTA_PORTRAITS[2].src} alt={CTA_PORTRAITS[2].alt} fill className="object-cover" sizes="112px" />
            </div>
            <div className="absolute -right-2 bottom-0 h-28 w-28 overflow-hidden rounded-2xl rotate-[-4deg]">
              <Image src={CTA_PORTRAITS[3].src} alt={CTA_PORTRAITS[3].alt} fill className="object-cover" sizes="112px" />
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
}
