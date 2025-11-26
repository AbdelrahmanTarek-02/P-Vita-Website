'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Source: About Us Page Content.docx
export default function WhoWeAreSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const features = [
    {
      icon: '🌿',
      title: 'Palm waste innovation',
      description: 'Unlocking the potential of agricultural residues used across cosmetic, pharmaceutical, and food & beverage industries.'
    },
    {
      icon: '♻️',
      title: 'Circular bio-economy in action',
      description: 'Reducing agricultural residues into sustainable, ethical feedstock through advanced biotechnology.'
    },
    {
      icon: '⚡',
      title: 'Empowering the bio-revolution',
      description: 'Producing eco-friendly ingredients and licensing our technologies to enable partners to adapt suitable, measurable biotech solutions.'
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-[#F0EAE5]">
      {/* Top Section: Text (Left) + Image (Right) */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Column: Text */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex-1 flex flex-col justify-center gap-8 px-6 md:px-12 py-16 md:py-24"
        >
          <motion.div variants={itemVariants}>
            <p className="text-sm font-semibold text-[#010202] mb-2 uppercase tracking-wide">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#010202] leading-tight">
              How P-Vita transforms waste into value
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[#010202] leading-relaxed max-w-lg"
          >
            We craft natural and affordable raw materials for the food, beauty, and pharmaceutical industries. Our secret? Transforming plant-based resources and upcycled waste through cutting-edge biotechnology.
          </motion.p>

          {/* Feature Boxes */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-bold text-[#010202] mb-2 text-sm uppercase tracking-wide">
                Who we are
              </h3>
              <p className="text-[#010202] text-sm">
                P-Vita champions a circular bio-economy model
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#010202] mb-2 text-sm uppercase tracking-wide">
                Sustainable ingredients
              </h3>
              <p className="text-[#010202] text-sm">
                We manufacture eco-friendly solutions and license our technologies
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Image Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 relative bg-gray-300 min-h-96 md:min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <svg className="w-24 h-24 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Image (Left) + Feature Grid (Right) */}
      <div className="flex flex-col md:flex-row bg-[#F0EAE5]">
        {/* Left: Image Placeholder */}
        <motion.div
          variants={itemVariants}
          className="flex-1 relative bg-gray-300 min-h-64 md:min-h-screen flex items-center justify-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="text-center">
            <svg className="w-20 h-20 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </motion.div>

        {/* Right: Feature List */}
        <motion.div
          className="flex-1 flex flex-col justify-center gap-8 px-6 md:px-12 py-16 md:py-24"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
        <div className="space-y-24">
        {features.map((feature, index) => (
            <motion.div
            key={index}
            variants={itemVariants}
            className="flex gap-4"
            >
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10">
                <span className="text-4xl">{feature.icon}</span>
            </div>

            <div className="flex-1">
                <h3 className="text-5xl md:text-4xl font-bold text-[#010202] leading-tight">
                {feature.title}
                </h3>

                <p className="text-base md:text-lg text-[#010202] leading-relaxed max-w-lg">
                {feature.description}
                </p>
            </div>
            </motion.div>
        ))}
</div>
        </motion.div>
      </div>
    </section>
  );
}
