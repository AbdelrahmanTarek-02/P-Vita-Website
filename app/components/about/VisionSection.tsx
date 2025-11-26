'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Source: About Us Page Content.docx
export default function VisionSection() {
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

  return (
    <section ref={containerRef} className="relative w-full py-12 md:py-18 bg-[#13251A]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-8"
          >
            Our vision
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto"
          >
            Become the leading biotech solutions hub in the MENA region, pioneering the development of sustainable, vegan high-value natural products, through the innovative conversion of agricultural residues into a pipeline of eco-conscious solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
