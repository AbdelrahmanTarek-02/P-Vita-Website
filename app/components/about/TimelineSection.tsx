'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineEvent[] = [
  {
    year: '2023',
    title: 'Founders committed',
    description:
      'Mohamed Tarek and Naglaa Mohamed transitioned to full-time roles, dedicating themselves entirely to building P-Vita\'s foundation in sustainable biotech innovation.',
  },
  {
    year: '2024',
    title: 'Scaling operations',
    description: 'P-Vita expanded its research capabilities and began partnering with farmers and organizations across the MENA region to test and refine sustainable solutions.',
  },
  {
    year: '2025',
    title: 'Regional impact',
    description:
      'Reaching thousands of farmers and treating thousands of feddan with our innovative fertilizer solutions, demonstrating measurable environmental and economic benefits.',
  },
  {
    year: 'Today',
    title: 'Leading the revolution',
    description:
      'Today, P-Vita stands as a recognized biotech innovator, featured by global organizations and trusted by partners who share our vision for a circular, sustainable future.',
  },
];

// Source: About Us Page Content.docx
export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      },
    }),
  };

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-[#D8D9D9]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-semibold text-[#010202] mb-2 uppercase tracking-wide">
            Timeline
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#010202] mb-6">
            The P-Vita journey unfolds
          </h2>
          <p className="text-base md:text-lg text-[#010202] max-w-3xl mx-auto">
            From founders working nights and weekends to a full-time operation, P-Vita has grown into a force reshaping how the region approaches sustainable biotechnology and circular economy principles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex justify-center">
          {/* Timeline Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#010202]" />

          {/* Timeline Items */}
          <div className="space-y-20 md:space-y-24 max-w-5xl w-full">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={index}
                className={`flex items-start gap-12 md:gap-20 ${
                  index % 2 === 1 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ x: index % 2 === 0 ? 8 : -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-3xl md:text-4xl font-bold text-[#010202] mb-2">
                      {event.year}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#010202] mb-4">
                      {event.title}
                    </h3>
                    <p className="text-[#010202] leading-relaxed text-base md:text-lg max-w-xl">
                      {event.description}
                    </p>
                  </motion.div>
                  {/* Explore Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className=""
                  >
                    <button className=" py-2 text-[#010202] font-semibold text-sm hover:underline transition-all">
                      Explore
                    </button>
                    <button className="px-6 py-2 text-[#010202] font-semibold text-sm hover:underline transition-all">
                      More ›
                    </button>
                  </motion.div>
                </div>

                {/* Dot */}
                <div className="flex justify-center pt-2 md:pt-3">
                  <motion.div className="w-5 h-5 bg-[#010202] rounded-full border-4 border-[#D8D9D9] flex-shrink-0" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
