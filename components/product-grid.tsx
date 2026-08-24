"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryItems = [
  { src: "/1.jpg", alt: "CJ-6 in flight", span: "md:col-span-2 md:row-span-2" },
  { src: "/4..jpg", alt: "Engine close-up" },
  { src: "/5..jpg", alt: "Cockpit instruments" },
  { src: "/6..jpg", alt: "Propeller detail" },
  { src: "/7.jpg", alt: "Runway takeoff" },
  { src: "/8.jpg", alt: "Aerobatic performance" },
  { src: "/9.jpg", alt: "Historical photograph" },
  { src: "/10.jpg", alt: "Modern color photo" },
  { src: "/11.jpg", alt: "Formation flight" },
  { src: "/12.jpg", alt: "Landing approach" },
  { src: "/13.jpg", alt: "Maintenance detail" },
  { src: "/2.jpg", alt: "Side profile" },
]

export function ProductGrid() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-light">
            Gallery &amp; Media
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">68 Years in Frame</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setLightbox(item.src)}
              className={`group relative overflow-hidden ${item.span || ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
            <X className="h-8 w-8" />
          </button>
          <img src={lightbox} alt="Enlarged view" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </section>
  )
}
