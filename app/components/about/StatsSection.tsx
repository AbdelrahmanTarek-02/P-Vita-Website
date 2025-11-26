'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    value: '10K+',
    label: 'Active Users',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z"
        />
      </svg>
    ),
  },
  {
    value: '50+',
    label: 'Countries',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H19a2 2 0 002-2v-2a2 2 0 00-2-2h-2.5a2.5 2.5 0 01-2.5-2.5V9.5a2.5 2.5 0 012.5-2.5H17a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    value: '99.9%',
    label: 'Uptime',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    value: '24/7',
    label: 'Support',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5-4a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

export default function StatsSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const counterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
    },
  };

  return (
    <section
      id="impact"
      ref={containerRef}
      className="relative w-full py-32 md:py-48 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-md md:px-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-md">
            Our Impact
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Transforming healthcare with measurable results and global reach.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg md:gap-2xl"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ translateY: -6, transition: { duration: 0.12 } }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-surface border border-border rounded-2xl p-2xl text-center hover:shadow-lg transition-all duration-short cursor-pointer focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-secondary"
              >
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 mb-lg text-secondary bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors duration-short"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Value */}
                <motion.div
                  variants={counterVariants}
                  className="mb-md"
                >
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                </motion.div>

                {/* Label */}
                <p className="text-text-secondary font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
