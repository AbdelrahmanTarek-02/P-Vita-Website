'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[95vh] flex items-center justify-center px-6 md:px-12">

      {/* --- Seaweed Animated Background --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="seaweed-container">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="seaweed"
              style={{
                left: `${(i / 40) * 100}%`,
                animationDelay: `${i * 0.4}s`,
                height: `${120 + Math.sin(i) * 60}px`,
                opacity: 0.08 + (Math.sin(i * 1.3) + 1) / 4,
              }}
            />
          ))}
        </div>
      </div>

      {/* --- Center Content --- */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#083126]">
          About P-Vita
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-[#134734] leading-relaxed">
          We craft natural and affordable bio-based raw materials using upcycled plant waste
          and cutting-edge biotechnology to accelerate sustainable industry solutions.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="px-3 py-2 rounded-md bg-[#f0faf3] border border-[#e6f3ea] text-sm md:text-base text-[#123927]">
            Nature-first R&amp;D
          </div>

          <div className="px-3 py-2 rounded-md bg-[#f0faf3] border border-[#e6f3ea] text-sm md:text-base text-[#123927]">
            Sustainable sourcing
          </div>

          <div className="px-3 py-2 rounded-md bg-[#f0faf3] border border-[#e6f3ea] text-sm md:text-base text-[#123927]">
            Industry-ready
          </div>
        </div>
      </motion.div>

      {/* --- Styles for the seaweed animation --- */}
      <style jsx>{`
        .seaweed-container {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .seaweed {
          position: absolute;
          bottom: 0;
          width: 3px;
          background: #0a573b;
          border-radius: 20px;
          transform-origin: bottom center;
          animation: wave 5s ease-in-out infinite alternate,
                     floatUp 12s ease-in-out infinite;
          filter: blur(1px);
        }

        @keyframes wave {
          0%   { transform: translateX(0px) rotate(-2deg) scaleY(1); }
          50%  { transform: translateX(6px) rotate(3deg) scaleY(1.15); }
          100% { transform: translateX(-6px) rotate(-1deg) scaleY(1.05); }
        }

        @keyframes floatUp {
          0%   { transform: translateY(0) }
          100% { transform: translateY(-10px) }
        }
      `}</style>
    </section>
  );
}
