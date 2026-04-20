import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ContactSection } from "@/components/sections/ContactSection";

describe("ContactSection", () => {
  it("renders the contact heading", () => {
    render(<ContactSection />);
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
  });

  it("renders form fields", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", () => {
    render(<ContactSection />);
    const submitBtn = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitBtn);
    expect(
      screen.getByText(/name contains invalid characters/i),
    ).toBeInTheDocument();
  });

  it("renders privacy policy link", () => {
    render(<ContactSection />);
    expect(screen.getByText(/privacy policy/i)).toHaveAttribute(
      "href",
      "/privacy",
    );
  });
});
