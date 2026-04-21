import { Header } from "@/components/navigation";
import { Footer } from "@/components/layout";
import {
  HeroSection,
  StatsBar,
  PlatformSection,
  FeaturedCourses,
  TestimonialsSection,
  TrustedBySection,
  CategoriesSection,
  CTASection,
  InsightsSection,
  FAQSection,
  ContactSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <PlatformSection />
        <FeaturedCourses />
        <TestimonialsSection />
        <TrustedBySection />
        <CategoriesSection />
        <CTASection />
        <ContactSection />
        <InsightsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
