"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronRight } from "lucide-react"
import Link from "next/link";


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

const STEPS = [
  { id: 1, title: "Harvest", subtitle: "Collecting algae from water" },
  { id: 2, title: "Process", subtitle: "Grinding the biomass" },
  { id: 3, title: "Synthesize", subtitle: "Biochemical transformation" },
  { id: 4, title: "Deliver", subtitle: "Organic fertilizer ready" },
]

export function PVitaScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const animationContainerRef = useRef<HTMLDivElement>(null)

  // Scene refs
  const scene1Ref = useRef<HTMLDivElement>(null)
  const scene2Ref = useRef<HTMLDivElement>(null)
  const scene3Ref = useRef<HTMLDivElement>(null)
  const scene4Ref = useRef<HTMLDivElement>(null)

  // Animation element refs for Scene 1 (Harvest)
  const pondRef = useRef<HTMLDivElement>(null)
  const algaeGroupRef = useRef<(HTMLDivElement | null)[]>([])
  const harvesterRef = useRef<HTMLDivElement>(null)
  const bucketRef = useRef<HTMLDivElement>(null)

  // Scene 2 (Process)
  const machineRef = useRef<HTMLDivElement>(null)
  const gearRefs = useRef<(HTMLDivElement | null)[]>([])
  const inputAlgaeRef = useRef<HTMLDivElement>(null)
  const outputParticlesRef = useRef<HTMLDivElement>(null)

  // Scene 3 (Synthesize)
  const labContainerRef = useRef<HTMLDivElement>(null)
  const testTubesRef = useRef<(HTMLDivElement | null)[]>([])
  const reactionRef = useRef<HTMLDivElement>(null)
  const moleculesRef = useRef<HTMLDivElement>(null)

  // Scene 4 (Deliver)
  const bagRef = useRef<HTMLDivElement>(null)
  const plantGrowRef = useRef<HTMLDivElement>(null)
  const sunRef = useRef<HTMLDivElement>(null)
  const leavesRef = useRef<(HTMLDivElement | null)[]>([])

  const [isMobile, setIsMobile] = useState(false)
  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Set initial states
    gsap.set([scene1Ref.current, scene2Ref.current, scene3Ref.current, scene4Ref.current], {
      opacity: 0,
      scale: 0.9,
    })

    // Scene 1 initial
    gsap.set(pondRef.current, { scale: 0.8, opacity: 0 })
    gsap.set(algaeGroupRef.current.filter(Boolean), { scale: 0, y: 20, opacity: 0 })
    gsap.set(harvesterRef.current, { x: -100, opacity: 0 })
    gsap.set(bucketRef.current, { scale: 0, opacity: 0 })

    // Scene 2 initial
    gsap.set(machineRef.current, { y: -80, opacity: 0 })
    gsap.set(gearRefs.current.filter(Boolean), { rotation: 0, scale: 0 })
    gsap.set(inputAlgaeRef.current, { y: -50, opacity: 0 })
    gsap.set(outputParticlesRef.current?.children || [], { scale: 0, y: 0, opacity: 0 })

    // Scene 3 initial
    gsap.set(labContainerRef.current, { scale: 0.8, opacity: 0 })
    gsap.set(testTubesRef.current.filter(Boolean), { scaleY: 0, transformOrigin: "bottom" })
    gsap.set(reactionRef.current, { scale: 0, opacity: 0 })
    gsap.set(moleculesRef.current?.children || [], { scale: 0, opacity: 0, y: 30 })

    // Scene 4 initial
    gsap.set(bagRef.current, { scale: 0, rotation: -20, opacity: 0 })
    gsap.set(plantGrowRef.current, { scaleY: 0, transformOrigin: "bottom center" })
    gsap.set(sunRef.current, { scale: 0, opacity: 0, y: -30 })
    gsap.set(leavesRef.current.filter(Boolean), { scale: 0, rotation: -45 })

    let ctx: gsap.Context

    if (!isMobile) {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=800%", // 8x viewport height = full animation duration
            pin: true,
            pinSpacing: true, // Add height for pin so page doesn't jump
            scrub: 1.2, // Smooth scrubbing
            anticipatePin: 1,
            onUpdate: (self: any) => {
              const progress = self.progress
              if (progress < 0.25) setActiveStep(1)
              else if (progress < 0.5) setActiveStep(2)
              else if (progress < 0.75) setActiveStep(3)
              else setActiveStep(4)
            },
          },
        })

        // === SCENE 1: Harvest ===
        tl.to(scene1Ref.current, { opacity: 1, scale: 1, duration: 0.5 }, 0)
          .to(pondRef.current, { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }, 0.2)
          .to(
            algaeGroupRef.current.filter(Boolean),
            { scale: 1, y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)" },
            0.4,
          )
          .to(harvesterRef.current, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 0.8)
          .to(bucketRef.current, { scale: 1, opacity: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" }, 1.0)
          .to(
            algaeGroupRef.current.filter(Boolean),
            { y: "random(-10, 10)", x: "random(-5, 5)", duration: 0.4, stagger: 0.05 },
            1.2,
          )
          .to(scene1Ref.current, { opacity: 0, scale: 0.8, duration: 0.3 }, 1.6)

          // === SCENE 2: Process ===
          .to(scene2Ref.current, { opacity: 1, scale: 1, duration: 0.5 }, 1.8)
          .to(machineRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "bounce.out" }, 2.0)
          .to(gearRefs.current.filter(Boolean), { scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)" }, 2.2)
          .to(gearRefs.current[0], { rotation: 360, duration: 1.2, ease: "none" }, 2.4)
          .to(gearRefs.current[1], { rotation: -360, duration: 1.2, ease: "none" }, 2.4)
          .to(inputAlgaeRef.current, { y: 80, opacity: 1, duration: 0.6, ease: "power2.in" }, 2.6)
          .to(inputAlgaeRef.current, { scale: 0, duration: 0.3 }, 3.0)
          .to(
            outputParticlesRef.current?.children || [],
            { scale: 1, y: "random(30, 80)", x: "random(-60, 60)", opacity: 1, duration: 0.6, stagger: 0.03 },
            3.2,
          )
          .to(scene2Ref.current, { opacity: 0, scale: 0.8, duration: 0.3 }, 3.8)

          // === SCENE 3: Synthesize ===
          .to(scene3Ref.current, { opacity: 1, scale: 1, duration: 0.5 }, 4.0)
          .to(labContainerRef.current, { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }, 4.2)
          .to(testTubesRef.current.filter(Boolean), { scaleY: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }, 4.4)
          .to(reactionRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" }, 4.8)
          .to(labContainerRef.current, { x: 3, duration: 0.05, repeat: 15, yoyo: true }, 5.0)
          .to(
            moleculesRef.current?.children || [],
            { scale: 1, opacity: 1, y: "random(-40, -80)", x: "random(-30, 30)", duration: 0.6, stagger: 0.06 },
            5.2,
          )
          .to(scene3Ref.current, { opacity: 0, scale: 0.8, duration: 0.3 }, 5.8)

          // === SCENE 4: Deliver ===
          .to(scene4Ref.current, { opacity: 1, scale: 1, duration: 0.5 }, 6.0)
          .to(sunRef.current, { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }, 6.2)
          .to(bagRef.current, { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.6)" }, 6.4)
          .to(plantGrowRef.current, { scaleY: 1, duration: 0.7, ease: "elastic.out(1, 0.5)" }, 6.6)
          .to(
            leavesRef.current.filter(Boolean),
            { scale: 1, rotation: 0, duration: 0.5, stagger: 0.1, ease: "back.out(2)" },
            6.8,
          )
      }, section)
    } else {
      // Mobile: sequential animation
      ctx = gsap.context(() => {
        const scenes = [
          { scene: scene1Ref.current, index: 1 },
          { scene: scene2Ref.current, index: 2 },
          { scene: scene3Ref.current, index: 3 },
          { scene: scene4Ref.current, index: 4 },
        ]

        scenes.forEach(({ scene, index }) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: scene,
                start: "top 80%",
                toggleActions: "play none none reverse",
                onEnter: () => setActiveStep(index),
                onEnterBack: () => setActiveStep(index),
              },
            })
            .to(scene, { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" })
        })
      }, section)
    }

    return () => ctx.revert()
  }, [isMobile])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: `url("/images/what-20is-20p-vita-20-281-29.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: isMobile ? "auto" : "100vh",
      }}
    >
      <div
        className={`relative mx-auto flex min-h-screen max-w-7xl flex-col px-8 py-16 lg:flex-row lg:items-center lg:gap-20 lg:py-0`}
      >
        {/* LEFT SIDE: Text Content */}
        <div className="order-1 flex w-full flex-col justify-center lg:w-2/5">
          <h2
            className="mb-6 font-serif text-4xl font-bold italic leading-tight md:text-5xl lg:text-6xl"
            style={{ color: COLORS.darkGreen }}
          >
            What P-Vita does?
          </h2>

          <p className="mb-8 text-base leading-relaxed text-gray-700 md:text-lg" style={{ textAlign: "justify" }}>
            P-Vita is an innovative biotech startup transforming agricultural waste and algae into sustainable,
            high-value bio-based products. By applying circular economy principles, the company delivers natural
            solutions that minimize environmental impact across the food, beauty, and pharmaceutical industries.
          </p>


          <Link
            href="/about"
            className="group flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:gap-3"
            style={{
              backgroundColor: COLORS.cream,
              color: COLORS.darkGreen,
              border: `1px solid ${COLORS.midGreen}40`,
              boxShadow: `0 4px 15px ${COLORS.darkGreen}15`,
            }}
          >
            <button
              className="flex items-center gap-2"
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              Explore More
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full transition-colors"
                style={{ backgroundColor: COLORS.midGreen }}
              >
                <ChevronRight className="h-4 w-4 text-white" />
                <ChevronRight className="-ml-2 h-4 w-4 text-white" />
              </span>
            </button>
          </Link>



          {/* Step Indicators */}
          <div className="mt-12 flex items-center gap-3">
            {STEPS.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center"
                style={{ opacity: activeStep === step.id ? 1 : 0.4, transition: "opacity 0.3s" }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: activeStep === step.id ? COLORS.darkGreen : COLORS.cream,
                    color: activeStep === step.id ? COLORS.white : COLORS.darkGreen,
                    border: `2px solid ${COLORS.darkGreen}`,
                  }}
                >
                  {step.id}
                </div>
                <span className="mt-1 text-xs font-medium" style={{ color: COLORS.darkGreen }}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Animation */}
        <div
          ref={animationContainerRef}
          className="order-2 flex w-full flex-1 items-center justify-center lg:order-2 lg:w-3/5"
        >
          <div className={`relative ${isMobile ? "flex flex-col gap-16 py-8" : "h-[480px] w-full max-w-xl"}`}>
            {/* SCENE 1: Harvest - Pond with algae and harvester */}
            <div
              ref={scene1Ref}
              className={`${isMobile ? "relative" : "absolute inset-0"} flex items-center justify-center`}
            >
              <div className="relative h-80 w-80 md:h-96 md:w-96">
                {/* Water Pond */}
                <div
                  ref={pondRef}
                  className="absolute bottom-8 left-1/2 h-40 w-72 -translate-x-1/2 overflow-hidden rounded-[50%]"
                  style={{
                    background: `linear-gradient(180deg, ${COLORS.accentGreen}60 0%, ${COLORS.midGreen}80 50%, ${COLORS.darkGreen}90 100%)`,
                    boxShadow: `inset 0 -10px 30px ${COLORS.darkGreen}50, 0 10px 30px ${COLORS.darkGreen}30`,
                  }}
                >
                  {/* Water ripples */}
                  <svg className="absolute inset-0 h-full w-full opacity-40">
                    <ellipse
                      cx="50%"
                      cy="40%"
                      rx="45%"
                      ry="20%"
                      fill="none"
                      stroke={COLORS.lightGreen}
                      strokeWidth="1"
                      className="animate-[ping_2s_ease-in-out_infinite]"
                    />
                    <ellipse
                      cx="50%"
                      cy="50%"
                      rx="35%"
                      ry="15%"
                      fill="none"
                      stroke={COLORS.accentGreen}
                      strokeWidth="1"
                      className="animate-[ping_2.5s_ease-in-out_infinite_0.5s]"
                    />
                  </svg>
                </div>

                {/* Algae floating in pond */}
                {[
                  { x: 28, y: 55, size: 35 },
                  { x: 45, y: 50, size: 40 },
                  { x: 62, y: 58, size: 32 },
                  { x: 38, y: 62, size: 28 },
                  { x: 55, y: 65, size: 30 },
                  { x: 70, y: 52, size: 25 },
                ].map((algae, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      algaeGroupRef.current[i] = el
                    }}
                    className="absolute rounded-full"
                    style={{
                      left: `${algae.x}%`,
                      top: `${algae.y}%`,
                      width: algae.size,
                      height: algae.size * 0.6,
                      background: `radial-gradient(ellipse at 30% 30%, ${COLORS.lightGreen} 0%, ${COLORS.midGreen} 60%, ${COLORS.darkGreen} 100%)`,
                      boxShadow: `0 3px 8px ${COLORS.darkGreen}40`,
                    }}
                  />
                ))}

                {/* Harvester person with net */}
                <div ref={harvesterRef} className="absolute left-4 top-1/3" style={{ transform: "translateY(-50%)" }}>
                  <svg width="80" height="120" viewBox="0 0 80 120">
                    {/* Person body */}
                    <circle cx="30" cy="20" r="15" fill={COLORS.cream} stroke={COLORS.darkGreen} strokeWidth="2" />
                    <ellipse cx="30" cy="60" rx="18" ry="28" fill={COLORS.midGreen} />
                    {/* Arm with net */}
                    <line
                      x1="45"
                      y1="45"
                      x2="75"
                      y2="70"
                      stroke={COLORS.darkGreen}
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    {/* Net */}
                    <ellipse cx="70" cy="85" rx="18" ry="25" fill="none" stroke={COLORS.darkGreen} strokeWidth="2" />
                    <path d="M55,75 Q70,90 85,75" stroke={COLORS.midGreen} strokeWidth="1" fill="none" />
                    <path d="M58,85 Q70,95 82,85" stroke={COLORS.midGreen} strokeWidth="1" fill="none" />
                    <path d="M60,95 Q70,102 80,95" stroke={COLORS.midGreen} strokeWidth="1" fill="none" />
                  </svg>
                </div>

                {/* Bucket */}
                <div ref={bucketRef} className="absolute bottom-4 right-8">
                  <svg width="50" height="60" viewBox="0 0 50 60">
                    <path
                      d="M8,15 L5,55 Q5,58 8,58 L42,58 Q45,58 45,55 L42,15 Z"
                      fill={COLORS.midGreen}
                      stroke={COLORS.darkGreen}
                      strokeWidth="2"
                    />
                    <ellipse
                      cx="25"
                      cy="15"
                      rx="18"
                      ry="6"
                      fill={COLORS.lightGreen}
                      stroke={COLORS.darkGreen}
                      strokeWidth="2"
                    />
                    <path
                      d="M12,8 Q25,0 38,8"
                      fill="none"
                      stroke={COLORS.darkGreen}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Algae in bucket */}
                    <ellipse cx="20" cy="25" rx="6" ry="4" fill={COLORS.accentGreen} />
                    <ellipse cx="30" cy="28" rx="5" ry="3" fill={COLORS.lightGreen} />
                  </svg>
                </div>
              </div>
            </div>

            {/* SCENE 2: Process - Grinding machine */}
            <div
              ref={scene2Ref}
              className={`${isMobile ? "relative" : "absolute inset-0"} flex items-center justify-center`}
            >
              <div className="relative h-80 w-80 md:h-96 md:w-96">
                {/* Machine body */}
                <div ref={machineRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg width="200" height="250" viewBox="0 0 200 250">
                    {/* Machine frame */}
                    <rect x="40" y="60" width="120" height="140" rx="10" fill={COLORS.darkGreen} />
                    <rect x="50" y="70" width="100" height="50" rx="5" fill={COLORS.midGreen} />

                    {/* Input funnel */}
                    <path
                      d="M70,30 L130,30 L115,60 L85,60 Z"
                      fill={COLORS.midGreen}
                      stroke={COLORS.darkGreen}
                      strokeWidth="2"
                    />

                    {/* Output chute */}
                    <path
                      d="M85,200 L115,200 L125,230 L75,230 Z"
                      fill={COLORS.midGreen}
                      stroke={COLORS.darkGreen}
                      strokeWidth="2"
                    />

                    {/* Control panel */}
                    <rect x="60" y="140" width="80" height="40" rx="5" fill={COLORS.cream} />
                    <circle cx="80" cy="160" r="8" fill={COLORS.lightGreen} />
                    <circle cx="100" cy="160" r="8" fill={COLORS.accentGreen} />
                    <circle cx="120" cy="160" r="8" fill={COLORS.gold} />
                  </svg>
                </div>

                {/* Gears */}
                <div
                  ref={(el) => {
                    gearRefs.current[0] = el
                  }}
                  className="absolute"
                  style={{ left: "35%", top: "38%" }}
                >
                  <svg width="50" height="50" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="20" fill={COLORS.gold} />
                    <circle cx="25" cy="25" r="8" fill={COLORS.darkGreen} />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                      <rect
                        key={i}
                        x="22"
                        y="2"
                        width="6"
                        height="10"
                        rx="2"
                        fill={COLORS.gold}
                        transform={`rotate(${angle} 25 25)`}
                      />
                    ))}
                  </svg>
                </div>

                <div
                  ref={(el) => {
                    gearRefs.current[1] = el
                  }}
                  className="absolute"
                  style={{ left: "50%", top: "38%" }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="15" fill={COLORS.lightGreen} />
                    <circle cx="20" cy="20" r="6" fill={COLORS.darkGreen} />
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <rect
                        key={i}
                        x="17"
                        y="2"
                        width="6"
                        height="8"
                        rx="2"
                        fill={COLORS.lightGreen}
                        transform={`rotate(${angle} 20 20)`}
                      />
                    ))}
                  </svg>
                </div>

                {/* Input algae */}
                <div ref={inputAlgaeRef} className="absolute left-1/2 top-8 -translate-x-1/2">
                  <div
                    className="h-8 w-12 rounded-full"
                    style={{
                      background: `radial-gradient(ellipse at 30% 30%, ${COLORS.lightGreen} 0%, ${COLORS.midGreen} 100%)`,
                    }}
                  />
                </div>

                {/* Output particles */}
                <div ref={outputParticlesRef} className="absolute bottom-12 left-1/2 -translate-x-1/2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: i % 2 === 0 ? COLORS.lightGreen : COLORS.accentGreen,
                        left: `${Math.random() * 40 - 20}px`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* SCENE 3: Synthesize - Lab equipment */}
            <div
              ref={scene3Ref}
              className={`${isMobile ? "relative" : "absolute inset-0"} flex items-center justify-center`}
            >
              <div className="relative h-80 w-80 md:h-96 md:w-96">
                <div ref={labContainerRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* Lab bench */}
                  <svg width="280" height="200" viewBox="0 0 280 200">
                    {/* Bench */}
                    <rect x="20" y="160" width="240" height="15" rx="3" fill={COLORS.darkGreen} />

                    {/* Large beaker */}
                    <path
                      d="M100,60 L90,150 Q90,158 100,158 L160,158 Q170,158 170,150 L160,60 Z"
                      fill={`${COLORS.lightGreen}30`}
                      stroke={COLORS.midGreen}
                      strokeWidth="3"
                    />
                    {/* Liquid in beaker */}
                    <path
                      d="M95,100 L92,150 Q92,155 100,155 L160,155 Q168,155 168,150 L165,100 Z"
                      fill={COLORS.midGreen}
                      opacity="0.7"
                    />

                    {/* Test tubes */}
                    <g
                      ref={(el) => {
                        testTubesRef.current[0] = el as HTMLDivElement | null
                      }}
                    >
                      <rect
                        x="40"
                        y="80"
                        width="20"
                        height="80"
                        rx="10"
                        fill={`${COLORS.accentGreen}50`}
                        stroke={COLORS.midGreen}
                        strokeWidth="2"
                      />
                      <rect x="40" y="110" width="20" height="50" rx="10" fill={COLORS.accentGreen} />
                    </g>
                    <g
                      ref={(el) => {
                        testTubesRef.current[1] = el as HTMLDivElement | null
                      }}
                    >
                      <rect
                        x="200"
                        y="70"
                        width="20"
                        height="90"
                        rx="10"
                        fill={`${COLORS.lightGreen}50`}
                        stroke={COLORS.midGreen}
                        strokeWidth="2"
                      />
                      <rect x="200" y="105" width="20" height="55" rx="10" fill={COLORS.lightGreen} />
                    </g>
                    <g
                      ref={(el) => {
                        testTubesRef.current[2] = el as HTMLDivElement | null
                      }}
                    >
                      <rect
                        x="230"
                        y="85"
                        width="18"
                        height="75"
                        rx="9"
                        fill={`${COLORS.gold}50`}
                        stroke={COLORS.midGreen}
                        strokeWidth="2"
                      />
                      <rect x="230" y="115" width="18" height="45" rx="9" fill={COLORS.gold} />
                    </g>
                  </svg>

                  {/* Reaction glow */}
                  <div
                    ref={reactionRef}
                    className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${COLORS.gold}60 0%, ${COLORS.accentGreen}40 50%, transparent 70%)`,
                      filter: "blur(8px)",
                    }}
                  />

                  {/* Floating molecules */}
                  <div ref={moleculesRef} className="absolute inset-0">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          left: `${30 + Math.random() * 40}%`,
                          top: `${40 + Math.random() * 20}%`,
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20">
                          <circle
                            cx="10"
                            cy="10"
                            r="5"
                            fill={i % 3 === 0 ? COLORS.gold : i % 3 === 1 ? COLORS.lightGreen : COLORS.accentGreen}
                          />
                          <circle cx="5" cy="5" r="3" fill={COLORS.midGreen} />
                          <line x1="7" y1="7" x2="10" y2="10" stroke={COLORS.darkGreen} strokeWidth="1.5" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SCENE 4: Deliver - Fertilizer bag and growing plant */}
            <div
              ref={scene4Ref}
              className={`${isMobile ? "relative" : "absolute inset-0"} flex items-center justify-center`}
            >
              <div className="relative h-80 w-80 md:h-96 md:w-96">
                {/* Sun */}
                <div ref={sunRef} className="absolute right-8 top-4">
                  <svg width="70" height="70" viewBox="0 0 70 70">
                    <circle cx="35" cy="35" r="20" fill={COLORS.gold} />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                      <line
                        key={i}
                        x1="35"
                        y1="35"
                        x2={35 + 30 * Math.cos((angle * Math.PI) / 180)}
                        y2={35 + 30 * Math.sin((angle * Math.PI) / 180)}
                        stroke={COLORS.gold}
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    ))}
                  </svg>
                </div>

                {/* Fertilizer bag */}
                <div ref={bagRef} className="absolute bottom-16 left-8">
                  <svg width="100" height="130" viewBox="0 0 100 130">
                    {/* Bag body */}
                    <path
                      d="M15,30 L10,120 Q10,125 15,125 L85,125 Q90,125 90,120 L85,30 Z"
                      fill={COLORS.cream}
                      stroke={COLORS.darkGreen}
                      strokeWidth="2"
                    />
                    {/* Bag top */}
                    <path d="M15,30 Q50,15 85,30" fill="none" stroke={COLORS.darkGreen} strokeWidth="3" />
                    {/* Label */}
                    <rect x="25" y="50" width="50" height="55" rx="5" fill={COLORS.midGreen} />
                    <text x="50" y="72" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="bold">
                      P-VITA
                    </text>
                    <text x="50" y="88" textAnchor="middle" fill={COLORS.cream} fontSize="8">
                      ORGANIC
                    </text>
                  </svg>
                </div>

                {/* Growing plant */}
                <div
                  ref={plantGrowRef}
                  className="absolute bottom-16 right-12"
                  style={{ transformOrigin: "bottom center" }}
                >
                  <svg width="120" height="160" viewBox="0 0 120 160">
                    {/* Pot */}
                    <path
                      d="M30,130 L25,155 Q25,160 35,160 L85,160 Q95,160 95,155 L90,130 Z"
                      fill={COLORS.midGreen}
                      stroke={COLORS.darkGreen}
                      strokeWidth="2"
                    />
                    <ellipse
                      cx="60"
                      cy="130"
                      rx="32"
                      ry="8"
                      fill={COLORS.lightGreen}
                      stroke={COLORS.darkGreen}
                      strokeWidth="2"
                    />

                    {/* Stem */}
                    <path
                      d="M60,130 Q55,100 60,70 Q65,40 60,10"
                      fill="none"
                      stroke={COLORS.midGreen}
                      strokeWidth="5"
                      strokeLinecap="round"
                    />

                    {/* Leaves */}
                    <g
                      ref={(el) => {
                        leavesRef.current[0] = el as HTMLDivElement | null
                      }}
                    >
                      <ellipse cx="40" cy="50" rx="25" ry="12" fill={COLORS.lightGreen} transform="rotate(-30 40 50)" />
                      <line x1="40" y1="50" x2="55" y2="55" stroke={COLORS.midGreen} strokeWidth="2" />
                    </g>
                    <g
                      ref={(el) => {
                        leavesRef.current[1] = el as HTMLDivElement | null
                      }}
                    >
                      <ellipse cx="80" cy="70" rx="22" ry="10" fill={COLORS.accentGreen} transform="rotate(25 80 70)" />
                      <line x1="65" y1="72" x2="80" y2="70" stroke={COLORS.midGreen} strokeWidth="2" />
                    </g>
                    <g
                      ref={(el) => {
                        leavesRef.current[2] = el as HTMLDivElement | null
                      }}
                    >
                      <ellipse cx="35" cy="90" rx="20" ry="9" fill={COLORS.lightGreen} transform="rotate(-20 35 90)" />
                      <line x1="50" y1="88" x2="35" y2="90" stroke={COLORS.midGreen} strokeWidth="2" />
                    </g>
                    <g
                      ref={(el) => {
                        leavesRef.current[3] = el as HTMLDivElement | null
                      }}
                    >
                      <ellipse
                        cx="85"
                        cy="100"
                        rx="18"
                        ry="8"
                        fill={COLORS.accentGreen}
                        transform="rotate(15 85 100)"
                      />
                      <line x1="65" y1="98" x2="85" y2="100" stroke={COLORS.midGreen} strokeWidth="2" />
                    </g>

                    {/* Top leaves */}
                    <ellipse cx="50" cy="20" rx="18" ry="10" fill={COLORS.lightGreen} transform="rotate(-45 50 20)" />
                    <ellipse cx="70" cy="25" rx="16" ry="9" fill={COLORS.accentGreen} transform="rotate(40 70 25)" />
                  </svg>
                </div>

                {/* Soil/ground */}
                <div
                  className="absolute bottom-8 left-1/2 h-4 w-64 -translate-x-1/2 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${COLORS.darkGreen}20 0%, ${COLORS.midGreen}40 50%, ${COLORS.darkGreen}20 100%)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
