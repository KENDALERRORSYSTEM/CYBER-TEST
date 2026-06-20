'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function CTASection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto max-w-4xl"
      >
        <div className="glass p-12 rounded-2xl border border-neon-blue/50 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-8 text-lg">Join thousands learning ethical hacking ethically</p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover="hover"
          >
            <Link
              href="/dashboard"
              className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg font-bold text-cyber-darker hover:shadow-neon-lg transition-all"
            >
              <span className="flex items-center gap-2 justify-center">
                Start Learning Now
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
