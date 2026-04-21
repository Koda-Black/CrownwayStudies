"use client";

import Image from "next/image";
import { FEATURES } from "@/lib/data";
import { ScrollReveal } from "@/components/animations";

const featureImages = [
  "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697dc81323dd6620a3a77625_expert-led-learning-1.1.webp",
  "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697dc81323dd6620a3a77625_expert-led-learning-1.1.webp",
  "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697dc81323dd6620a3a77625_expert-led-learning-1.1.webp",
];

export function PlatformSection() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div>
              <h2 className="text-4xl font-black leading-[0.95] tracking-tight uppercase md:text-5xl lg:text-6xl">
                Complete
                <br />
                admission
                <br />
                support
              </h2>
              <p className="mt-5 max-w-md text-base text-muted leading-relaxed">
                We take the stress out of studying abroad. From choosing the
                right university to landing safely in the UK, our team handles
                every detail.
              </p>
              <a
                href="#services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
              >
                See all services
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
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative mx-auto w-full max-w-[520px] rounded-[28px] bg-[#191c24] p-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697dc671b38eb68fe87b64e6_gain-the-skills-to-succeed-1-p-1600.webp"
                  alt="Student progressing through their admission journey"
                  width={520}
                  height={560}
                  className="w-full object-cover"
                  sizes="520px"
                />
              </div>
              <div className="absolute bottom-8 right-8 rounded-xl bg-white px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold text-muted">2 / 8</p>
                <div className="mt-2 flex gap-1">
                  <span className="h-2 w-4 rounded-full bg-amber-300" />
                  <span className="h-2 w-4 rounded-full bg-orange-400" />
                  <span className="h-2 w-4 rounded-full bg-orange-500" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 100}>
              <div className={`group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${i === 0 ? "bg-[#1f4fff] text-white" : i === 1 ? "bg-[#292027] text-white" : "bg-[#6f4bff] text-white"}`}>
                <div className="mb-5 h-14 w-14 overflow-hidden rounded-xl">
                  <Image
                    src={featureImages[i]}
                    alt={feature.title}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
