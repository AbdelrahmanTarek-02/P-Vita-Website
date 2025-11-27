"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const COLORS = {
  darkGreen: "#1b3524",
  midGreen: "#2d5a3d",
  lightGreen: "#4a7c59",
  accentGreen: "#6ba37e",
  cream: "#f5f1ec",
  white: "#ffffff",
  gold: "#d4af37",
}

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)
  const heading1Ref = useRef<HTMLHeadingElement>(null)
  const heading2Ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(heading1Ref.current, { opacity: 0, y: 30 })
      gsap.set(heading2Ref.current, { opacity: 0, y: 30 })

      // Timeline animation
      const tl = gsap.timeline()

      tl.to(heading1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          heading2Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          0.3,
        )
        // Floating animation
        .to(heading1Ref.current, { y: -10, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" }, 1.5)
        .to(heading2Ref.current, { y: -8, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" }, 1.5)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >

      {/* Content Container */}
      <div
        ref={textContainerRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4"
      >
        {/* Main Heading */}
        <h1
          ref={heading1Ref}
          className="font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl"
          style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)" }}
        >
          P-Vita for Green
        </h1>

        {/* Subheading */}
        <h2
          ref={heading2Ref}
          className="mt-6 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)" }}
        >
          Tech Intelligence
        </h2>

        {/* Accent Line */}
        <div
          className="mt-8 h-1 w-32 rounded-full"
          style={{ backgroundColor: COLORS.gold }}
        />

        {/* Tagline */}
        <p
          className="mt-8 text-center font-serif text-xl text-white/90 md:text-2xl"
          style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
        >
          Harnessing the power of Nature
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
