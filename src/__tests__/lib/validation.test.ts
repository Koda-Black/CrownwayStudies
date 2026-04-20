import { describe, it, expect } from "vitest";
import { contactFormSchema } from "@/lib/validation";

describe("contactFormSchema", () => {
  it("validates valid input", () => {
    const result = contactFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      phone: "+2348123456789",
      message: "Hello, I would like more information about your services.",
      consent: true,
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty name", () => {
    const result = contactFormSchema.safeParse({
      name: "",
      email: "test@example.com",
      message: "Hello world test message",
      consent: true,
    });
    expect(result.success).toBe(false);
  });

  it("rejects short message", () => {
    const result = contactFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      message: "Hi",
      consent: true,
    });
    expect(result.success).toBe(false);
  });

  it("rejects without consent", () => {
    const result = contactFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      message: "A valid long enough message here",
      consent: false,
    });
    expect(result.success).toBe(false);
  });

  it("rejects name with invalid characters", () => {
    const result = contactFormSchema.safeParse({
      name: "John<script>",
      email: "john@example.com",
      message: "A valid long enough message here",
      consent: true,
    });
    expect(result.success).toBe(false);
  });

  it("allows empty phone", () => {
    const result = contactFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      phone: "",
      message: "This is a valid message for testing",
      consent: true,
    });
    expect(result.success).toBe(true);
  });
});
