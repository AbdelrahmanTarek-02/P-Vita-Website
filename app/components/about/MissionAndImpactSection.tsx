'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ImpactMetric {
  value: string;
  label: string;
}

// Source: About Us Page Content.docx
const metrics: ImpactMetric[] = [
  {
    value: '6000+',
    label: 'Feddan treated with fertilizer',
  },
  {
    value: '350%',
    label: 'Crops yield improvement',
  },
  {
    value: '4000+',
    label: 'Farmers in our network',
  },
  {
    value: '25–30%',
    label: 'Fertilizer cost reduction',
  },
];

export default function MissionAndImpactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

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

  const metricVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#5a5a5a]"
    >
      <div className="max-w-[1800px] mx-auto px-2 md:px-4 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Mission Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Impact</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Mission and Impact
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-white leading-relaxed"
            >
              Mission: Develop a scalable pipeline of natural ingredients; empower local communities and smallholder farmers, reduce environmental harm, promote sustainable manufacturing across the MENA region; and advance circular economy principles, contributing to climate resilience and regional food security.
            </motion.p>

            <motion.a
              variants={itemVariants}
              href="#"
              className="inline-block text-white font-semibold text-base hover:text-white/80 transition-colors"
            >
              Details ›
            </motion.a>
          </motion.div>

          {/* Right: Impact Metrics */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-8 md:gap-12"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={metricVariants}
                className="flex flex-col items-start border-l-2 border-white/40 pl-6"
              >
                <p className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {metric.value}
                </p>
                <p className="text-sm md:text-base text-white leading-relaxed">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}