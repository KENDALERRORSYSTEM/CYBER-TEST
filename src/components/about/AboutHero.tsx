'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 via-transparent to-transparent pointer-events-none" />

      <motion.div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          About X7 Cyber Academy
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Your Ultimate Platform for Learning Ethical Hacking and Cybersecurity
        </p>
      </motion.div>
    </motion.section>
  );
}
