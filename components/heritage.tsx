const milestones = [
  {
    year: "1957",
    title: "Design Task Approved",
    description:
      "The project officially begins at the Nanchang Aircraft Factory (Factory 320), tasked with creating China's first indigenously designed trainer to succeed the CJ-5.",
    image: "/888.png",
  },
  {
    year: "1958",
    title: "First Flight — July 27",
    description:
      "Just 72 days from detailed design to maiden flight — a testament to the engineering team's extraordinary efficiency and dedication.",
    image: "/14.jpg",
  },
  {
    year: "1962",
    title: "Military Certification",
    description:
      "Officially certified for military service after rigorous testing, beginning six decades of continuous operation as China's primary trainer.",
    image: "/111.png",
  },
  {
    year: "1979",
    title: "National Quality Gold Medal",
    description:
      "Became China's first and only aircraft to receive the National Quality Gold Medal — the nation's highest quality honor, unchallenged to this day.",
    image: "/555.png",
  },
  {
    year: "2019",
    title: "Civil Aviation Certification",
    description:
      "Received TC/PC certification from the Civil Aviation Administration of China (CAAC), entering the civil market as the 'Haiyan' variant.",
    image: "/1010.png",
  },
  {
    year: "2023",
    title: "First Civil-Airworthy Flight — September 17",
    description:
      "The first standard airworthiness-certified civilian CJ-6 (Registration B-126M) completed its maiden 'airworthy' flight at AVIC Hongdu — a landmark in China's military-to-civilian aviation transition. With +6g / -3g structural limits and NACA-optimized anti-stall airfoils, the CJ-6 continues to serve as a natural aerobatic platform, flown by the Red Star Aerobatic Team in thrilling dual and multi-ship routines.",
    image: "/999.png",
  },
]

export function Heritage() {
  return (
    <section id="heritage" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image with soft gradient overlay */}
      <div className="absolute inset-0">
        <img src="/10.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-light">
            Heritage &amp; History
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            From Military Legend to Civilian Favorite
          </h2>
          <p className="text-lg font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Six decades of continuous service. A safety record unmatched in aviation history. The CJ-6&apos;s journey
            from military trainer to global civilian icon.
          </p>
        </div>

        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <p className="text-4xl md:text-5xl font-light text-primary mb-2">{milestone.year}</p>
                <h3 className="text-xl font-medium mb-3 text-foreground">{milestone.title}</h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-lg ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
              >
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-light italic text-muted-foreground leading-relaxed">
            &ldquo;Flying the CJ-6 is like shaking hands with history — it still flies as beautifully today as it did
            sixty years ago.&rdquo;
          </blockquote>
          <p className="text-sm tracking-wide mt-4 text-muted-foreground/60">— American CJ-6 Owner &amp; Restorer</p>
        </div>
      </div>
    </section>
  )
}
