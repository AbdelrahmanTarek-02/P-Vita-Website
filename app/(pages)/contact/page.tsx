'use client';

import ClientLayout from '@/app/components/shared/ClientLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <ClientLayout>
      <main className="min-h-screen pt-24 px-6 md:px-12 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#010202] mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-[#666666]">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="bg-white border border-[#D8D9D9] rounded-xl p-8 md:p-12"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-semibold text-[#010202] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-[#D8D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198f51] transition-all"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-semibold text-[#010202] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 border border-[#D8D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198f51] transition-all"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-semibold text-[#010202] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-[#D8D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198f51] transition-all resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full px-6 py-3 bg-[#198f51] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-75"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </button>
              </motion.div>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 font-semibold"
                >
                  Thank you! We'll be in touch soon.
                </motion.p>
              )}
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="text-center p-6 bg-[#F5F5F5] rounded-xl"
            >
              <h3 className="font-semibold text-[#010202] mb-2">Email</h3>
              <a href="mailto:contact@p-vita.com" className="text-[#198f51] hover:underline">
                contact@p-vita.com
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="text-center p-6 bg-[#F5F5F5] rounded-xl"
            >
              <h3 className="font-semibold text-[#010202] mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-[#198f51] hover:underline">
                +1 (234) 567-890
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="text-center p-6 bg-[#F5F5F5] rounded-xl"
            >
              <h3 className="font-semibold text-[#010202] mb-2">Address</h3>
              <p className="text-[#666666]">
                123 Innovation St<br />
                San Francisco, CA 94105
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </ClientLayout>
  );
}
