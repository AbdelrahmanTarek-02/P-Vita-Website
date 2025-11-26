'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Source: About Us Page Content.docx
export default function TrustedSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  return (
    <section
      id="trusted"
      ref={containerRef}
      className="relative w-full py-20 md:py-28 bg-[#13251A]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Trusted by leading organizations across the region
          </h2>

          {/* Entrepreneur Logo Placeholder */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="h-16 md:h-20 flex items-center justify-center"
          >
            <div className="text-white font-bold text-2xl md:text-3xl tracking-wider text-center">
              Entrepreneur
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
