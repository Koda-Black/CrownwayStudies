"use client";

import { useState, type FormEvent } from "react";
import { ScrollReveal } from "@/components/animations";
import { contactFormSchema } from "@/lib/validation";

export function ContactSection() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: (formData.get("name") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      phone: (formData.get("phone") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
      consent: formData.get("consent") === "on",
    };

    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="container-site">
        <div className="grid gap-8 rounded-[28px] bg-surface p-6 md:grid-cols-[1fr_1.1fr] md:p-10">
          <ScrollReveal>
            <div>
              <h2 className="text-4xl font-black tracking-tight uppercase leading-[0.95] md:text-5xl">
                Get in touch
              </h2>
              <p className="mt-3 max-w-sm text-base text-muted">
                Have questions about studying in the UK? Send us a message and
                our team will get back to you within 24 hours.
              </p>
            </div>
          </ScrollReveal>

          {submitted ? (
            <ScrollReveal>
              <div className="rounded-2xl bg-white p-8 text-center">
                <p className="text-lg font-semibold text-primary">
                  Thank you for reaching out!
                </p>
                <p className="mt-2 text-sm text-muted">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal delay={100}>
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl bg-white p-5"
                noValidate
              >
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Full name"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={20}
                    placeholder="Phone / WhatsApp (optional)"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    maxLength={2000}
                    placeholder="Tell us about your study goals..."
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark cursor-pointer"
                >
                  Send
                </button>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <label htmlFor="consent" className="text-xs text-muted">
                    By proceeding, I confirm that I have read and agree to the{" "}
                    <a
                      href="/privacy"
                      className="underline hover:text-secondary transition-colors"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-xs text-red-500">{errors.consent}</p>
                )}
              </form>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
