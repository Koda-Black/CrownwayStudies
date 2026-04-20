import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SectionHeading } from "@/components/ui/SectionHeading";

describe("SectionHeading", () => {
  it("renders title", () => {
    render(<SectionHeading title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<SectionHeading title="Title" subtitle="Subtitle text" />);
    expect(screen.getByText("Subtitle text")).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    const { container } = render(<SectionHeading title="Title" />);
    expect(container.querySelectorAll("p")).toHaveLength(0);
  });

  it("applies center alignment", () => {
    const { container } = render(
      <SectionHeading title="Centered" align="center" />,
    );
    expect(container.firstChild).toHaveClass("text-center");
  });
});
