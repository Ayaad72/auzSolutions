import Hero from "@/components/home/hero"
import ServicesHighlight from "@/components/home/services-highlight"
import FeaturedWorks from "@/components/home/featured-works"
import Testimonials from "@/components/testimonials/testimonials-carousel"
import CTASection from "@/components/shared/cta-section"
import StatsCounter from "@/components/home/stats-counter"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ServicesHighlight />
      <StatsCounter />
      <FeaturedWorks />
      <Testimonials />
      <CTASection
        title="Ready to transform your ideas into digital reality?"
        description="Let's collaborate to create something extraordinary for your business."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  )
}
