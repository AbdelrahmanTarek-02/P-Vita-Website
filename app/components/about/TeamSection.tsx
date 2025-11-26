'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

// Source: About Us Page Content - Team section from DOCX
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Mohamed Tarek',
    role: 'Co-founder & CEO',
    bio: 'Leading P-Vita\'s vision and strategic direction toward sustainable biotech innovation.',
    image: '/logos/team images/Mohamed Tarek.png',
  },
  {
    id: 2,
    name: 'Naglaa Mohamed',
    role: 'Co-founder & CSO',
    bio: 'Driving scientific strategy and research capabilities across the organization.',
    image: '/logos/team images/Naglaa Mohamed.png',
  },
  {
    id: 3,
    name: 'Nour Ahmed',
    role: 'R&D Specialist',
    bio: 'Developing innovative sustainable solutions through advanced biotechnology.',
    image: '/logos/team images/Nour Ahmed.png',
  },
  {
    id: 4,
    name: 'Zahra Taha',
    role: 'R&D Specialist',
    bio: 'Exploring bio-waste valorization and sustainable ingredients development.',
    image: '/logos/team images/Zahra Taha.png',
  },
  {
    id: 5,
    name: 'Ahmed Usama',
    role: 'R&D Specialist',
    bio: 'Contributing to cutting-edge biotech research and innovation.',
    image: '/logos/team images/Ahmed Usama.png',
  },
  {
    id: 6,
    name: 'Pancée Ehab',
    role: 'R&D Specialist',
    bio: 'Advancing sustainable manufacturing and eco-friendly production methods.',
    image: '/logos/team images/Pancée Ehab.png',
  },
  {
    id: 7,
    name: 'Salah Ashraf',
    role: 'R&D Specialist',
    bio: 'Pioneering natural ingredient solutions for food and beauty industries.',
    image: '/logos/team images/Salah Ashraf.png',
  },
  {
    id: 8,
    name: 'Nada Semisam',
    role: 'BD Specialist',
    bio: 'Building partnerships and expanding P-Vita\'s market presence.',
    image: '/logos/team images/Nada Semisam.png',
  },
  {
    id: 9,
    name: 'Yomna Haggag',
    role: 'R&D Specialist',
    bio: 'Contributing expertise to sustainable solutions development.',
    image: '/logos/team images/Yomna Haggag.png',
  },
  {
    id: 10,
    name: 'Abdelrahman Tarek',
    role: 'Graphic Designer',
    bio: 'Crafting visual identity and design excellence for P-Vita.',
    image: '/logos/team images/Abdelrahman Tarek.png',
  },
  {
    id: 11,
    name: 'Mohamed Samy',
    role: 'Supply Chain Specialist',
    bio: 'Ensuring efficient operations and sustainable supply chain management.',
    image: '/logos/team images/Mohamed Samy.png',
  },
];

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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

  const hoverVariants = {
    rest: { y: 0 },
    hover: { y: -6 },
  };

  return (
    <section
      id="team"
      ref={containerRef}
      className="relative w-full py-20 md:py-32 bg-primary"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the team
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Brilliant minds working toward a sustainable future
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="w-full"
        >
          {/* Founders Section */}
          <motion.div className="mb-16">
            <h3 className="text-2xl font-semibold text-white/90 mb-8 text-center">Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto mb-16">
              {teamMembers.slice(0, 2).map((member) => (
                <motion.div
                  key={member.id}
                  variants={cardVariants}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="group text-center"
                >
                  <motion.div
                    variants={hoverVariants}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    {/* Circular Avatar - Larger for Founders */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-accent"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Content - Highlighted */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold text-lg mb-3">
                      {member.role}
                    </p>
                    <p className="text-white/80 text-base leading-relaxed mb-6 max-w-sm">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4 justify-center">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white/70 hover:text-accent transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.337 5.143c2.013 0 3.97-1.623 3.97-3.626C20.307.888 18.72 0 16.677 0 14.32 0 12.823 1.623 12.823 3.517c0 1.95 1.496 3.626 3.514 3.626z" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white/70 hover:text-accent transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Members Section */}
          <motion.div>
            <h3 className="text-2xl font-semibold text-white/90 mb-8 text-center">Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {teamMembers.slice(2).map((member) => (
                <motion.div
                  key={member.id}
                  variants={cardVariants}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="group text-center"
                >
                  <motion.div
                    variants={hoverVariants}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    {/* Circular Avatar */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-2">
                      {member.role}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4 justify-center">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white/50 hover:text-white transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.337 5.143c2.013 0 3.97-1.623 3.97-3.626C20.307.888 18.72 0 16.677 0 14.32 0 12.823 1.623 12.823 3.517c0 1.95 1.496 3.626 3.514 3.626z" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white/50 hover:text-white transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* We're Hiring Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center border-t border-white/20 pt-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            We're hiring
          </h3>
          <p className="text-white/80 mb-6">
            Join our team and shape the future of sustainable biotechnology
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-darkTeal text-white rounded-lg font-semibold hover:bg-darkTeal/90 transition-colors"
          >
            View positions
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
}
