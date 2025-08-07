import HeroSection from "@/components/hero-section"
import MovingCalligraphy from "@/components/moving-calligraphy"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import ProgramsSection from "@/components/programs-section"
import IslamicQuotes from "@/components/islamic-quotes"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import DonationSection from "@/components/donation-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <MovingCalligraphy />
      <AboutSection />
      <StatsSection />
      <ProgramsSection />
      <IslamicQuotes />
      <GallerySection />
      <TestimonialsSection />
      <DonationSection />
      <ContactSection />
    </main>
  )
}
