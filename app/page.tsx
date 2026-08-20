import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Heritage } from "@/components/heritage"
import { TechnicalSpecs } from "@/components/technical-specs"
import { GlobalPresence } from "@/components/global-presence"
import { TransitionSection } from "@/components/transition-section"
import { FeaturedCollections } from "@/components/featured-collections"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Heritage />
      <TechnicalSpecs />
      <GlobalPresence />
      <TransitionSection />
      <FeaturedCollections />
      <Footer />
    </main>
  )
}
