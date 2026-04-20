import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FAQSection } from "@/components/sections/FAQSection";

describe("FAQSection", () => {
  it("renders the FAQ heading", () => {
    render(<FAQSection />);
    expect(screen.getByText(/frequently asked questions/i)).toBeInTheDocument();
  });

  it("renders all FAQ items", () => {
    render(<FAQSection />);
    expect(
      screen.getByText("How much does the full admission service cost?"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Do I need IELTS to study in the UK?"),
    ).toBeInTheDocument();
  });

  it("toggles FAQ answer on click", () => {
    render(<FAQSection />);
    const button = screen
      .getByText("How much does the full admission service cost?")
      .closest("button")!;
    expect(button).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("renders the WhatsApp sidebar", () => {
    render(<FAQSection />);
    expect(screen.getByText("Still have questions?")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /chat on whatsapp/i }),
    ).toBeInTheDocument();
  });
});
