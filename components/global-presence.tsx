import { Globe, Plane, Users } from "lucide-react"

const stats = [
  {
    icon: Globe,
    number: "10+",
    label: "Countries Exported",
  },
  {
    icon: Plane,
    number: "300+",
    label: "Flying in the USA",
  },
  {
    icon: Plane,
    number: "3,000+",
    label: "Total Built",
  },
  {
    icon: Users,
    number: "10M+",
    label: "Flight Hours",
  },
]

const applications = [
  "Pilot Training",
  "Aerobatics",
  "Glider Towing",
  "Recreational Flying",
  "Warbird Collection",
]

export function GlobalPresence() {
  return (
    <section id="global" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-light">
            Global Reach
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-6">
            A Worldwide Community
          </h2>
          <p className="text-lg font-light leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            From military trainer to civilian favorite — the CJ-6 flies on across the globe. Exported to over a dozen
            countries and treasured by hundreds of pilots across the United States.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center p-6 border border-border rounded-lg">
                <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <p className="text-4xl md:text-5xl font-light text-primary mb-2">{stat.number}</p>
                <p className="text-sm tracking-wide text-muted-foreground font-light">{stat.label}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-light">
            Civilian Applications
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {applications.map((application, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-border text-sm font-light tracking-wide text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                {application}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
