'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/home' },
    { label: 'About', href: '/about' },
    { label: 'Our Solutions', href: '/solutions' },
    { label: 'Grow With Us', href: '/grow' },
    { label: 'Impact', href: '/impact' },
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, translateY: -10 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
        boxShadow: isScrolled
          ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          : '0 0px 0px 0 rgba(0, 0, 0, 0)',
      }}
      transition={{ duration: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 ${className}`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1 }}
          className="flex-shrink-0"
        >
          <Link
            href="/"
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#198f51] rounded"
            aria-label="P-Vita Home"
          >
            <img
              src="/logos/P-Vita-Logo.png"
              alt="P-Vita Logo"
              className="h-12 md:h-14 w-auto object-contain hover:opacity-80 transition-opacity duration-short"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item) => (
            <motion.div key={item.href} variants={itemVariants}>
              <Link
                href={item.href}
                className="text-[#010202] hover:text-[#198f51] transition-colors duration-short font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#198f51] rounded px-2 py-2"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <Link href="/contact" className="hidden md:inline-flex">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, delay: 0.2 }}
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#198f51] text-white rounded-lg font-semibold transition-all duration-short hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#198f51]"
            aria-label="Contact Us"
          >
            Contact Us
          </motion.button>
        </Link>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.28, delay: 0.2 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto', visibility: 'visible' },
          closed: { opacity: 0, height: 0, visibility: 'hidden' },
        }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-md pb-lg flex flex-col gap-md bg-white border-b border-border">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-text-secondary hover:text-text-primary transition-colors duration-short font-medium py-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded px-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="w-full">
            <button className="w-full px-lg py-md bg-secondary text-text-inverse rounded-lg font-semibold transition-all duration-short hover:shadow-lg mt-md">
              Get Started
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
