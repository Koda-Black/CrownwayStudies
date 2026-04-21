"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animations";

const CLIENT_LOGOS = [
  {
    src: "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/67793407633bd6ebc98df909_Client%3DClient1.webp",
    alt: "Partner university 1",
  },
  {
    src: "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/677934058c4e46abad698a48_Client%3DClient2.webp",
    alt: "Partner university 2",
  },
  {
    src: "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/677934076e8ec890abe4cbf0_Client%3DClient3.webp",
    alt: "Partner university 3",
  },
  {
    src: "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/67793406c557169d4fb356f5_Client%3DClient4.webp",
    alt: "Partner university 4",
  },
  {
    src: "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/677934063345c57cf86c767e_Client%3DClient5.png",
    alt: "Partner university 5",
  },
  {
    src: "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/67793405e1b3e1530ca7eb93_Client%3DClient6.webp",
    alt: "Partner university 6",
  },
];

export function TrustedBySection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-site">
        <div className="rounded-[28px] bg-surface px-5 py-10 md:px-10 md:py-14">
          <ScrollReveal>
            <h2 className="text-center text-4xl font-black tracking-tight uppercase md:text-5xl">
              Trusted by leading institutions
            </h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {CLIENT_LOGOS.map((logo, i) => (
                <div
                  key={i}
                  className="relative h-12 w-32 rounded-xl border border-border bg-white p-2"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-2"
                    sizes="128px"
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
