import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => <img {...props} />,
}));

describe("TestimonialsSection", () => {
  it("renders heading", () => {
    render(<TestimonialsSection />);
    expect(screen.getByText(/hear from our students/i)).toBeInTheDocument();
  });

  it("renders 98% stat", () => {
    render(<TestimonialsSection />);
    expect(screen.getByText("98%")).toBeInTheDocument();
  });

  it("renders testimonial quotes", () => {
    render(<TestimonialsSection />);
    expect(screen.getByText("Adaeze Okafor")).toBeInTheDocument();
    expect(screen.getByText("Oluwaseun Adeyemi")).toBeInTheDocument();
  });
});
