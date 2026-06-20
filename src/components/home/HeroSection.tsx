'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiZap, FiShield, FiCode } from 'react-icons/fi';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          X7 Cyber Academy
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Master Ethical Hacking Through Interactive Sandboxes & CTF Challenges
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {[
            { icon: FiZap, label: 'Instant Access' },
            { icon: FiShield, label: 'Safe Sandbox' },
            { icon: FiCode, label: 'Real Labs' },
            { icon: FiArrowRight, label: 'No Login' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="glass p-4 rounded-lg border border-neon-blue/30 hover:border-neon-blue transition-all"
              >
                <Icon className="w-6 h-6 mx-auto mb-2 text-neon-blue" />
                <p className="text-sm text-gray-300">{item.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="/dashboard"
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg font-bold text-cyber-darker hover:shadow-neon-lg transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Start Learning <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="/about"
            className="px-8 py-4 border-2 border-neon-blue rounded-lg font-bold text-neon-blue hover:bg-neon-blue/10 transition-all"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
