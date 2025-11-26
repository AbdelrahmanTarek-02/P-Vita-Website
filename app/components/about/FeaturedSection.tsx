'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FeaturedSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="featured"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-white"
    >
      <div className="relative w-full px-48 md:px-48">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
              Featured By
            </h2>

            <p className="text-lg text-black/80 max-w-lg mb-8 leading-relaxed">
              Recognized for innovation and impact in sustainable biotechnology
            </p>

            <button className="px-6 py-3 text-black font-semibold text-base border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
              More ›
            </button>
          </motion.div>

          {/* RIGHT LOGOS - TWO PER ROW */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 w-full"
          >
            {/* Row 1 */}
            <div className="flex items-center gap-64 ">
              <motion.img 
                src="/logos/forbes.png" 
                className="h-48 object-contain cursor-pointer"
                whileHover={{ scale: 1.1, y: -8 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src="/logos/wfp.png" 
                className="h-32 object-contain cursor-pointer"
                whileHover={{ scale: 1.1, y: -8 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-64 ">
              <motion.img 
                src="/logos/mc.png" 
                className="h-32 object-contain cursor-pointer"
                whileHover={{ scale: 1.1, y: -8 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src="/logos/500.png" 
                className="h-48 object-contain cursor-pointer"
                whileHover={{ scale: 1.1, y: -8 }}
                transition={{ duration: 0.3 }}
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
