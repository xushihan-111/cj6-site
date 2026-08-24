import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="aircraft" className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img src="/3.jpg" alt="Nanchang CJ-6 trainer aircraft" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <p className="text-white/90 text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Est. 1958 · First Flight August 27
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight text-balance">
            THE CJ6
            <br />
            A LEGENDARY TRAINER
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            China's first indigenously designed and mass-produced trainer. Over 3,000 built, 10 million flight hours,
            zero design-related fatal accidents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore the Legacy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              View Technical Specs
            </Button>
          </div>

          {/* Data Badges */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-white">3,000+</p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-light">Built</p>
            </div>
            <div className="w-px h-12 bg-white/20 self-center" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-white">1962</p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-light">Certified</p>
            </div>
            <div className="w-px h-12 bg-white/20 self-center" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-white">300+</p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-light">Flying in USA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="h-8 w-8 text-white/60 animate-bounce" />
      </div>
    </section>
  )
}
