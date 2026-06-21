'use client';

import { motion } from 'framer-motion';

export default function CTFHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 border-b border-cyber-border backdrop-blur-sm sticky top-0 z-30"
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">CTF Arena</h1>
        <p className="text-gray-300">Solve challenges and earn XP points</p>
      </div>
    </motion.div>
  );
}
