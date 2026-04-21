"use client";

import { ScrollReveal } from "@/components/animations";

const CLIENT_LOGOS = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7a/University_of_Manchester_logo.svg",
    alt: "University of Manchester",
    name: "University of Manchester",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/1/16/University_of_Birmingham_logo.svg",
    alt: "University of Birmingham",
    name: "University of Birmingham",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/07/University_of_Leeds_logo.svg",
    alt: "University of Leeds",
    name: "University of Leeds",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9f/University_of_Nottingham_logo.svg",
    alt: "University of Nottingham",
    name: "University of Nottingham",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/University_of_Bristol_logo.svg",
    alt: "University of Bristol",
    name: "University of Bristol",
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
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {CLIENT_LOGOS.map((logo, i) => (
                <div
                  key={i}
                  className="flex min-h-[124px] flex-col items-center justify-center rounded-xl border border-border bg-white p-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 w-auto max-w-[170px] object-contain"
                  />
                  <p className="mt-3 text-center text-xs font-medium text-muted">
                    {logo.name}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
