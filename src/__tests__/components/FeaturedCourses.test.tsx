import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => <img {...props} />,
}));

describe("FeaturedCourses", () => {
  it("renders heading", () => {
    render(<FeaturedCourses />);
    expect(screen.getByText(/our services/i)).toBeInTheDocument();
  });

  it("renders service cards", () => {
    render(<FeaturedCourses />);
    expect(
      screen.getByText("University admission"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Visa guidance"),
    ).toBeInTheDocument();
  });
});
