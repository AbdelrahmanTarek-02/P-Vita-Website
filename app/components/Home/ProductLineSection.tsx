"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link";

const COLORS = {
  darkGreen: "#1b3524",
  midGreen: "#2d5a3d",
  cream: "#f5f1ec",
  white: "#ffffff",
}

export function ProductLineSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: `url("/images/Background (ProductSection).svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: COLORS.darkGreen,
      }}
    >
      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ color: COLORS.cream }}>
              Know more about our Product
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Product Line
            </h2>

            <p className="text-base sm:text-lg max-w-md leading-relaxed" style={{ color: COLORS.cream }}>
              Explore our high-value product line, transforming agricultural inputs, minimizing the environmental
              footprint, and creating shared economic value.
            </p>

          <div className="pt-4">
            <Link
              href="/solutions"
              className="group flex items-center justify-center gap-3 rounded-full px-8 py-3 text-base font-semibold transition-all duration-300 hover:gap-4 hover:shadow-lg active:scale-95"
              style={{
                backgroundColor: COLORS.cream,
                color: COLORS.darkGreen,
                boxShadow: `0 4px 20px ${COLORS.darkGreen}20`,
                textDecoration: "none",
                display: "inline-flex",
                cursor: "pointer",
              }}
            >
              Explore More

              <span className="flex items-center gap-0.5 transition-transform group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>

                <svg className="w-5 h-5 -ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          </div>

          {/* ----------------- RIGHT SIDE: PRODUCT IMAGE ----------------- */}
          <div className="relative h-96 sm:h-[450px] lg:h-[520px] flex items-center justify-center">
            
            {/* Glow moved more to the right */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl -z-10"
              style={{
                background: `radial-gradient(circle at 68% 50%, ${COLORS.midGreen}20, transparent 70%)`,
              }}
            />

            {/* product image container -- moved right */}
            <div
              className="relative w-full h-full max-w-lg lg:max-w-xl"
              style={{
                transform: "translateX(6%)",
                filter: `drop-shadow(0 25px 45px ${COLORS.darkGreen}50)`,
              }}
            >
              <Image
                src="/images/product-line.png"
                alt="Product Line - Vita Power Premium Collection"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* smaller white glow moved right */}
            <div
              className="absolute bottom-4 right-10 w-32 h-32 rounded-full opacity-20 blur-2xl -z-10"
              style={{ backgroundColor: COLORS.white }}
            />
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, ${COLORS.darkGreen}80)`,
        }}
      />
    </section>
  )
}
