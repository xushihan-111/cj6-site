import { ChevronDown } from "lucide-react"

export function TransitionSection() {
  return (
    <section id="experience" className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/7.jpg" alt="CJ-6 on runway" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-6 font-light">The Experience</p>
        <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">Fly the Legend Yourself</h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          The CJ-6 isn't just a page in aviation history — it's a living, breathing machine you can touch, hear, and fly. At Nanchang Yaohu Flight Base, we bring 60 years of aeronautical heritage within your reach.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="h-8 w-8 text-white/60 animate-bounce" />
      </div>
    </section>
  )
}
