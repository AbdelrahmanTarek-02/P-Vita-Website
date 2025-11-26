'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-[#F0EAE5] overflow-hidden"
    >
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#010202] mb-6">
            Ready to connect with P-Vita?
          </h2>

          <p className="text-lg md:text-xl text-[#010202] max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
            Let&apos;s explore how we can work together to advance sustainable solutions
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="mailto:hello@pvita.com"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 md:px-10 md:py-4 bg-[#010202] text-white font-semibold rounded shadow-md hover:shadow-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010202] min-h-[44px] flex items-center justify-center"
            >
              Contact us
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 md:px-10 md:py-4 border-2 border-[#010202] text-[#010202] font-semibold rounded hover:bg-[#010202]/5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010202] min-h-[44px] flex items-center justify-center"
            >
              Explore
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
