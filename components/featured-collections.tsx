"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plane, GraduationCap, Hand, Monitor, Sprout, X, type LucideIcon } from "lucide-react"

interface ServiceDetail {
  description: string
  images: string[]
}

interface Service {
  icon: LucideIcon
  title: string
  description: string
  detail?: ServiceDetail
}

const services: Service[] = [
  {
    icon: Plane,
    title: "Aerobatic Airshow",
    description:
      "The Red Star Aerobatic Team performs thrilling dual and multi-ship aerobatic routines in the CJ6.",
    detail: {
      description:
        'The Red Star Aerobatic Team is mainly composed of retired flight instructors from the Air Force Aviation University\'s "Wings of the Sky" and other aerobatic teams. They boast exquisite flying skills and superb aerobatic performance capabilities, with each member having accumulated over 5,000 hours of in-flight teaching time. At present, the team\'s primary aircraft is the civil-variant CJ6 (Primary Trainer-6).',
      images: ["/16.jpg", "/17.jpg", "/18.jpg"],
    },
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
  const [activeService, setActiveService] = useState<Service | null>(null)

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
                {service.detail ? (
                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className="text-sm font-light text-primary hover:underline text-left"
                  >
                    Learn More →
                  </button>
                ) : (
                  <a href="#contact" className="text-sm font-light text-primary hover:underline">
                    Learn More →
                  </a>
                )}
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

      {/* Service Detail Modal */}
      {activeService?.detail && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveService(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-background/80 backdrop-blur p-2 text-foreground hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8 md:p-10">
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3 font-light">
                Yaohu Flight Base · Service
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-6">
                {activeService.title}
              </h2>

              <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground mb-8 whitespace-pre-line">
                {activeService.detail.description}
              </p>

              <div className="space-y-2 mb-6">
                <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-light">
                  Gallery
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeService.detail.images.map((src, i) => (
                    <div key={src} className="aspect-[4/3] overflow-hidden rounded-md border border-border">
                      <img
                        src={src}
                        alt={`${activeService.title} ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveService(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
