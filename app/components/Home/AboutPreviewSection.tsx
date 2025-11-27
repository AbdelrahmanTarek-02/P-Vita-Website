// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { ArrowRight } from "lucide-react"

// gsap.registerPlugin(ScrollTrigger)

// const COLORS = {
//   darkGreen: "#1b3524",
//   midGreen: "#2d5a3d",
//   lightGreen: "#4a7c59",
//   accentGreen: "#6ba37e",
//   cream: "#f5f1ec",
//   white: "#ffffff",
//   gold: "#d4af37",
// }

// export function AboutPreviewSection() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const contentRef = useRef<HTMLDivElement>(null)
//   const imageRef = useRef<HTMLDivElement>(null)
//   const titleRef = useRef<HTMLHeadingElement>(null)
//   const descRef = useRef<HTMLParagraphElement>(null)
//   const statsRef = useRef<HTMLDivElement>(null)
//   const ctaRef = useRef<HTMLAnchorElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Initial states
//       gsap.set(titleRef.current, { opacity: 0, x: -50 })
//       gsap.set(descRef.current, { opacity: 0, x: -50 })
//       gsap.set(imageRef.current, { opacity: 0, x: 50 })
//       gsap.set(statsRef.current, { opacity: 0, y: 30 })
//       gsap.set(ctaRef.current, { opacity: 0, y: 20 })

//       // Scroll trigger animation
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 20%",
//           scrub: 1,
//           toggleActions: "play none none reverse",
//         },
//       })

//       tl.to(titleRef.current, { opacity: 1, x: 0, duration: 0.5 })
//         .to(descRef.current, { opacity: 1, x: 0, duration: 0.5 }, 0.1)
//         .to(imageRef.current, { opacity: 1, x: 0, duration: 0.5 }, 0.2)
//         .to(statsRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.3)
//         .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.4)
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full overflow-hidden py-20 px-4 md:py-32"
//       style={{ backgroundColor: COLORS.cream }}
//     >
//       <div className="mx-auto max-w-7xl">
//         {/* Main Content */}
//         <div className="grid gap-12 md:gap-16 lg:grid-cols-2 lg:items-center">
//           {/* Left: Content */}
//           <div ref={contentRef} className="flex flex-col">
//             {/* Title */}
//             <h2
//               ref={titleRef}
//               className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl"
//               style={{ color: COLORS.darkGreen }}
//             >
//               About P-Vita
//             </h2>

//             {/* Description */}
//             <p
//               ref={descRef}
//               className="mb-8 text-base leading-relaxed text-gray-700 md:text-lg"
//               style={{ textAlign: "justify" }}
//             >
//               P-Vita is an innovative biotech startup transforming agricultural waste and algae into sustainable,
//               high-value bio-based products. By applying circular economy principles, we deliver natural solutions that
//               minimize environmental impact across the food, beauty, and pharmaceutical industries.
//             </p>

//             {/* Stats */}
//             <div ref={statsRef} className="mb-8 grid grid-cols-3 gap-4">
//               <div className="text-center">
//                 <div
//                   className="text-3xl font-bold md:text-4xl"
//                   style={{ color: COLORS.darkGreen }}
//                 >
//                   10K+
//                 </div>
//                 <p className="text-xs text-gray-600 md:text-sm">Active Users</p>
//               </div>
//               <div className="text-center">
//                 <div
//                   className="text-3xl font-bold md:text-4xl"
//                   style={{ color: COLORS.darkGreen }}
//                 >
//                   50+
//                 </div>
//                 <p className="text-xs text-gray-600 md:text-sm">Countries</p>
//               </div>
//               <div className="text-center">
//                 <div
//                   className="text-3xl font-bold md:text-4xl"
//                   style={{ color: COLORS.darkGreen }}
//                 >
//                   100%
//                 </div>
//                 <p className="text-xs text-gray-600 md:text-sm">Organic</p>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <Link
//               ref={ctaRef}
//               href="/about"
//               className="group inline-flex w-fit items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 hover:gap-4"
//               style={{
//                 backgroundColor: COLORS.darkGreen,
//                 color: COLORS.white,
//               }}
//             >
//               Learn More About Us
//               <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </div>

//           {/* Right: Image */}
//           <div
//             ref={imageRef}
//             className="relative h-96 w-full overflow-hidden rounded-2xl shadow-2xl md:h-[500px]"
//           >
//             <Image
//               src="/images/about-preview.jpg"
//               alt="P-Vita About Preview"
//               fill
//               className="object-cover"
//               priority={false}
//             />
//             {/* Overlay gradient */}
//             <div
//               className="absolute inset-0"
//               style={{
//                 background: `linear-gradient(135deg, ${COLORS.darkGreen}40 0%, ${COLORS.midGreen}20 100%)`,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
