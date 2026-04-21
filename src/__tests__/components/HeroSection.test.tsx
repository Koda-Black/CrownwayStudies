import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HeroSection } from "@/components/sections/HeroSection";

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => <img {...props} />,
}));

describe("HeroSection", () => {
  it("renders the main heading", () => {
    render(<HeroSection />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("contains the tagline text", () => {
    render(<HeroSection />);
    expect(screen.getByText(/your uk study journey/i)).toBeInTheDocument();
  });

  it("renders see our services link", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("link", { name: /see our services/i }),
    ).toBeInTheDocument();
  });
});
