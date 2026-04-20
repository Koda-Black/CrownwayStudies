"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          Crownway Admissions
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-secondary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href="https://wa.me/2348123456789?text=Hi%20Crownway%2C%20I%27d%20like%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="sm">
              Book consultation
            </Button>
          </a>
        </div>

        <button
          className="flex items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-6 bg-secondary transition-transform duration-200",
                mobileOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-secondary transition-opacity duration-200",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-secondary transition-transform duration-200",
                mobileOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav
            className="container-site flex flex-col gap-4 py-6"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted transition-colors hover:text-secondary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/2348123456789?text=Hi%20Crownway%2C%20I%27d%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="sm" className="mt-2 w-fit">
                Book consultation
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
