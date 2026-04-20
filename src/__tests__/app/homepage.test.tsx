import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Inter: () => ({ variable: "mock-inter" }),
}));

vi.mock("@/components/seo", () => ({
  JsonLd: () => null,
}));

vi.mock("@/components/navigation", () => ({
  Header: () => <header data-testid="header">Header</header>,
}));

vi.mock("@/components/layout", () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));

vi.mock("@/components/sections", () => ({
  HeroSection: () => <section data-testid="hero">Hero</section>,
  StatsBar: () => <section data-testid="stats">Stats</section>,
  PlatformSection: () => <section data-testid="platform">Platform</section>,
  FeaturedCourses: () => <section data-testid="courses">Courses</section>,
  TestimonialsSection: () => (
    <section data-testid="testimonials">Testimonials</section>
  ),
  TrustedBySection: () => <section data-testid="trusted">Trusted</section>,
  CategoriesSection: () => (
    <section data-testid="categories">Categories</section>
  ),
  CTASection: () => <section data-testid="cta">CTA</section>,
  InsightsSection: () => <section data-testid="insights">Insights</section>,
  FAQSection: () => <section data-testid="faq">FAQ</section>,
  ContactSection: () => <section data-testid="contact">Contact</section>,
}));

import HomePage from "@/app/page";

describe("HomePage (smoke test)", () => {
  it("renders all major sections", () => {
    render(<HomePage />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("stats")).toBeInTheDocument();
    expect(screen.getByTestId("platform")).toBeInTheDocument();
    expect(screen.getByTestId("courses")).toBeInTheDocument();
    expect(screen.getByTestId("testimonials")).toBeInTheDocument();
    expect(screen.getByTestId("trusted")).toBeInTheDocument();
    expect(screen.getByTestId("categories")).toBeInTheDocument();
    expect(screen.getByTestId("cta")).toBeInTheDocument();
    expect(screen.getByTestId("contact")).toBeInTheDocument();
    expect(screen.getByTestId("insights")).toBeInTheDocument();
    expect(screen.getByTestId("faq")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders sections in correct order", () => {
    render(<HomePage />);
    const main = screen.getByRole("main");
    const sections = main.querySelectorAll("section");
    const ids = Array.from(sections).map((s) => s.getAttribute("data-testid"));

    expect(ids).toEqual([
      "hero",
      "stats",
      "platform",
      "courses",
      "testimonials",
      "trusted",
      "categories",
      "cta",
      "insights",
      "faq",
      "contact",
    ]);
  });
});
