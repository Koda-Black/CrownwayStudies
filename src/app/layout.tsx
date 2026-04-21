import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/seo";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crownway-admissions.vercel.app"),
  title: {
    default: "Crownway Studies — Your UK Study Journey Starts Here",
    template: "%s | Crownway Studies",
  },
  description:
    "UK university admission consultancy for Nigerian students. 500+ successful placements, 98% visa success rate. Expert guidance from application to arrival.",
  keywords: [
    "UK university admission",
    "study in UK from Nigeria",
    "UK student visa",
    "university application help",
    "Nigerian students UK",
    "admission consultancy Lagos",
  ],
  authors: [{ name: "Crownway Studies Limited" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://crownway-admissions.vercel.app",
    siteName: "Crownway Studies",
    title: "Crownway Studies — Your UK Study Journey Starts Here",
    description:
      "UK university admission consultancy for Nigerian students. 500+ successful placements, 98% visa success rate.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crownway Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crownway Studies — Your UK Study Journey Starts Here",
    description:
      "UK university admission consultancy for Nigerian students. 500+ successful placements, 98% visa success rate.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
