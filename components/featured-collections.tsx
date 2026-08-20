import { Button } from "@/components/ui/button"
import { Plane, GraduationCap, Hand, Monitor, Sprout } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Aerobatic Airshow",
    description:
      "The Red Star Aerobatic Team performs thrilling dual and multi-ship aerobatic routines in the CJ-6.",
  },
  {
    icon: GraduationCap,
    title: "PPL Training",
    description: "A complete training pathway from zero experience to your Private Pilot License.",
  },
  {
    icon: Hand,
    title: "Experience Flight",
    description: "A hands-on 30-minute flight where you take the controls — no prior experience needed.",
  },
  {
    icon: Monitor,
    title: "Simulator Training",
    description: "Professional flight training devices for safe, efficient mastery of flight fundamentals.",
  },
  {
    icon: Sprout,
    title: "Youth Aviation Academy",
    description: "Aviation education programs for young enthusiasts, planting the seeds of future dreams.",
  },
]

export function FeaturedCollections() {
  return (
    <section id="base" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-light">
            Yaohu Flight Base
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">Experience the Legend</h2>
          <p className="text-lg font-light text-muted-foreground mt-4 max-w-2xl mx-auto">
            Beyond preserving history, Nanchang Yaohu Flight Base lets you live it. Explore our five core programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors"
              >
                <Icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-light mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">{service.description}</p>
                <a href="#contact" className="text-sm font-light text-primary hover:underline">
                  Learn More →
                </a>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Plan Your Visit
          </Button>
        </div>
      </div>
    </section>
  )
}
