export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Crownway Admissions Limited",
    url: "https://crownwayadmissions.com",
    description:
      "UK university admission consultancy for Nigerian students. 500+ successful placements, 98% visa success rate.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "15 Admiralty Way",
      addressLocality: "Lekki Phase 1, Lagos",
      addressRegion: "Lagos",
      postalCode: "106104",
      addressCountry: "NG",
    },
    telephone: "+234-812-345-6789",
    email: "hello@crownwayadmissions.com",
    sameAs: [
      "https://instagram.com/crownwayadmissions",
      "https://x.com/crownwayadm",
      "https://tiktok.com/@crownwayadmissions"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
