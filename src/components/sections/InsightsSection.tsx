"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animations";

const INSIGHTS = [
  {
    id: "1",
    title: "How to choose the right UK university",
    category: "Insights",
    date: "January 8, 2025",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697dc671b38eb68fe87b64e6_gain-the-skills-to-succeed-1-p-1600.webp",
  },
  {
    id: "2",
    title: "UK visa trends: What Nigerian students need to know",
    category: "Insights",
    date: "January 9, 2025",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/699187ec24408a48fd246daa_learn-grow-succeed-1.2-small.webp",
  },
  {
    id: "3",
    title: "From Lagos to London: A student success story",
    category: "Inspiration",
    date: "January 20, 2025",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697d011e9c8e5fd602f5e864_Smiling%20Man%20Portrait.webp",
  },
];

export function InsightsSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-4xl font-black tracking-tight uppercase leading-[0.95] md:text-5xl">
            Insights
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-surface px-3 py-1 font-medium">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug">
                    {post.title}
                  </h3>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
