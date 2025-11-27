"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link";


const COLORS = {
  darkGreen: "#1b3524",
  midGreen: "#2d5a3d",
  lightGreen: "#4a7c59",
  accentGreen: "#6ba37e",
  cream: "#f5f1ec",
  white: "#ffffff",
  gold: "#d4af37",
}

interface Partner {
  id: number
  name: string
  logo: string
}

const partners: Partner[] = [
  // Row 1 - 5 partners
  { id: 1, name: "WFP", logo: "/logos/wfp.png" },
  { id: 2, name: "Top 50 Women Forum", logo: "/logos/top50.png" },
  { id: 3, name: "MassChallenge", logo: "/logos/mc.png" },
  { id: 4, name: "Pepsico", logo: "/logos/pepsico.png" },
  { id: 5, name: "500", logo: "/logos/500.png" },
  // Row 2 - 4 partners
  { id: 6, name: "Kidztalent", logo: "/logos/kidztalent.png" },
  { id: 7, name: "CGIAR", logo: "/logos/cgiar.png" },
  { id: 8, name: "Climate Leaders", logo: "/logos/climate-leaders.png" },
  { id: 9, name: "SEE Institute", logo: "/logos/see-institute.png" },
]

export function OurPartnersPreview() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${COLORS.darkGreen} 0%, ${COLORS.darkGreen} 45%, ${COLORS.white} 100%)`,
      }}
    >
      {/* Curved divider from top */}
      <svg
        className="absolute top-0 left-0 w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 260"
        style={{ height: "240px", zIndex: 10 }}
      >
        <path
          d="
            M0 80
            C200 140, 400 20, 600 80
            C800 140, 1000 20, 1200 80
            L1200 0
            L0 0
            Z
          "
          fill={COLORS.white}
        />
      </svg>

      {/* TOP SECTION: Text + Diagram */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1600px] flex-col gap-12 px-8 py-20 lg:flex-row lg:items-center lg:gap-20 lg:pt-32">
        {/* LEFT SIDE: Text Content */}
        <div className="flex w-full flex-col justify-start lg:w-3/5">
          <h2
            className="mb-6 font-sans text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            style={{ color: COLORS.white }}
          >
            Our Partners
          </h2>

          <p
            className="mb-8 font-sans text-base leading-relaxed md:text-lg"
            style={{ color: COLORS.cream, textAlign: "justify" }}
          >
            We partner with global innovators and industry leaders to effectively transform agricultural waste and
            algae into sustainable, high-performance bio-solutions, driving a tangible shift towards a greener, more
            circular future.
          </p>

          <Link
            href="/grow"
            className="group flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:gap-3"
            style={{
              backgroundColor: COLORS.cream,
              color: COLORS.darkGreen,
              border: `1px solid ${COLORS.cream}40`,
              boxShadow: `0 4px 15px ${COLORS.darkGreen}30`,
              textDecoration: "none",
              display: "inline-flex",
              cursor: "pointer",
            }}
          >
            Partner with us

            <span
              className="flex h-7 w-7 items-center justify-center rounded-full transition-colors"
              style={{ backgroundColor: COLORS.midGreen }}
            >
              <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>

              <svg className="h-4 w-4 -ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>

        </div>

        {/* RIGHT SIDE: Partner Diagram - Image */}
        <div className="flex w-full flex-col items-center justify-center lg:w-3/5">
          <div className="relative h-80 w-full max-w-2xl">
            <Image
              src="/images/partner-diagram.png"
              alt="Partner Collaboration Diagram"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* BOTTOM: Partners Grid with White Background */}
      <div
        className="relative w-full py-16 lg:py-12"
        style={{
          backgroundColor: COLORS.white,
        }}
        
      
      >
        <div className="relative mx-auto w-full max-w-[1700px] px-8">
          {/* Row 1: 5 Partners */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-24 lg:mb-16 lg:gap-36">
            {partners.slice(0, 5).map((partner) => (
              <div
                key={partner.id}
                className="relative h-28 w-28 transition-opacity duration-300 hover:opacity-100 lg:h-32 lg:w-32"
                style={{
                  opacity: 0.75,
                }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            ))}
          </div>

          {/* Row 2: 4 Partners (Centered) */}
          <div className="flex flex-wrap items-center justify-center gap-16 lg:gap-36">
            {partners.slice(5, 9).map((partner) => (
              <div
                key={partner.id}
                className="relative h-28 w-28 transition-opacity duration-300 hover:opacity-100 lg:h-32 lg:w-32"
                style={{
                  opacity: 0.75,
                }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
