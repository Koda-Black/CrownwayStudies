"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";
import { SectionHeading, Button } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <SectionHeading title="Frequently asked questions" />
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <ScrollReveal key={item.id}>
                <div className="rounded-xl bg-surface">
                  <button
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
                    aria-expanded={openId === item.id}
                  >
                    <span className="pr-4 text-base font-medium">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300",
                        openId === item.id && "rotate-45",
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      openId === item.id
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-muted leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="rounded-2xl border border-border bg-white p-8 h-fit lg:sticky lg:top-24">
              <h3 className="text-xl font-bold">Still have questions?</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Chat with us directly on WhatsApp. Our team typically responds
                within minutes during business hours.
              </p>
              <div className="mt-6">
                <a
                  href="https://wa.me/2348123456789?text=Hi%20Crownway%2C%20I%20have%20a%20question"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="sm">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
