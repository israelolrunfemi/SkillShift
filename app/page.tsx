import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { SponsorshipSection } from "@/components/sponsorship-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SponsorshipSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
