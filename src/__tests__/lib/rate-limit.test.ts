import { describe, it, expect } from "vitest";
import { rateLimit } from "@/lib/rate-limit";

describe("rateLimit", () => {
  it("allows requests under limit", () => {
    const ip = `test-${Date.now()}`;
    for (let i = 0; i < 10; i++) {
      expect(rateLimit(ip)).toBe(true);
    }
  });

  it("blocks requests over limit", () => {
    const ip = `test-block-${Date.now()}`;
    for (let i = 0; i < 10; i++) {
      rateLimit(ip);
    }
    expect(rateLimit(ip)).toBe(false);
  });

  it("allows different IPs independently", () => {
    const ip1 = `ip1-${Date.now()}`;
    const ip2 = `ip2-${Date.now()}`;
    for (let i = 0; i < 10; i++) {
      rateLimit(ip1);
    }
    expect(rateLimit(ip1)).toBe(false);
    expect(rateLimit(ip2)).toBe(true);
  });
});
