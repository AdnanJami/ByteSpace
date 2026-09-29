import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { PartnerLogos } from "@/components/landing/PartnerLogos";
import { CoursesSection } from "@/components/landing/CoursesSection";
import { CategoriesGrid } from "@/components/landing/CategoriesGrid";
import { GrowthSection } from "@/components/landing/GrowthSection";
import { CreatorCTA } from "@/components/landing/CreatorCTA";
import { Testimonials } from "@/components/landing/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartnerLogos />
        <CoursesSection />
        <CategoriesGrid />
        <GrowthSection />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
