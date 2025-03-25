"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Feature {
  title: string
  description: string
}

interface FeatureCarouselProps {
  features: Feature[]
}

export default function FeatureCarousel({ features }: FeatureCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? features.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === features.length - 1 ? 0 : prevIndex + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrev()
    }
  }

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {features.map((feature, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div
              className="p-6 relative rounded-lg h-full"
              style={{
                background: "#1a1e24",
                border: "1px solid transparent",
                borderRadius: "8px",
                backgroundClip: "padding-box",
                position: "relative",
              }}
            >
              {/* Gradient border */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "8px",
                  padding: "1px",
                  background: "linear-gradient(to bottom right, #F75B00 1%, #5BD999 39%, #FDCA36 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Number box */}
              <div
                className="w-10 h-10 mb-4 flex items-center justify-center rounded-md"
                style={{
                  background: "#1a1e24",
                  border: "1px solid transparent",
                  position: "relative",
                }}
              >
                {/* Gradient border for number box */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "6px",
                    padding: "1px",
                    background: "linear-gradient(to bottom right, #F75B00 1%, #5BD999 39%, #FDCA36 100%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Number with gradient text */}
                <span className="bg-gradient-to-r from-[#F75B00] via-[#5BD999] to-[#FDCA36] text-transparent bg-clip-text font-medium">
                  {index + 1}
                </span>
              </div>

              {/* Title with gradient */}
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#F75B00] to-[#FDCA36] text-transparent bg-clip-text">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-lg">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {features.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-[#F75B00]" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-r-md text-white"
        onClick={handlePrev}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-l-md text-white"
        onClick={handleNext}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

