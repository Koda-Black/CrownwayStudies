import Link from "next/link";
import { FOOTER_LINKS, TICKER_ITEMS } from "@/lib/data";

function TickerBar() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden border-y border-white/10 py-4">
      <div className="animate-ticker flex whitespace-nowrap">
        {items.map((course, i) => (
          <span key={i} className="mx-6 text-sm font-medium text-primary">
            {course}
            <span className="ml-6 text-white/30">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/2348123456789", icon: "💬" },
  { label: "Instagram", href: "https://instagram.com/crownwayadmissions", icon: "📷" },
  { label: "X", href: "https://x.com/crownwayadm", icon: "𝕏" },
  { label: "TikTok", href: "https://tiktok.com/@crownwayadmissions", icon: "♪" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-site py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-white/70">15 Admiralty Way,</p>
            <p className="text-sm text-white/70">Lekki Phase 1, Lagos, Nigeria</p>
          </div>
          <div className="text-sm text-white/70">
            <p>+234 812 345 6789</p>
            <p>hello@crownwayadmissions.com</p>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <TickerBar />

      <div className="container-site py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold">{group}</h4>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Crownway Admissions Limited. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
