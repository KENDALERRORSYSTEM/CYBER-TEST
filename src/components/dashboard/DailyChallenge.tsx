'use client';

import { motion } from 'framer-motion';
import { FiTarget } from 'react-icons/fi';

export default function DailyChallenge() {
  const dailyChallenge = {
    title: 'SQL Injection Basics',
    difficulty: 'Beginner',
    xp: 100,
    description: 'Learn how SQL injection attacks work with a safe simulator',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 rounded-xl border border-neon-blue/50 hover:border-neon-blue"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <FiTarget className="w-6 h-6 text-neon-blue" />
          <div>
            <h3 className="text-2xl font-bold">{dailyChallenge.title}</h3>
            <p className="text-gray-400 text-sm">Daily Challenge</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-semibold">
          +{dailyChallenge.xp} XP
        </span>
      </div>

      <p className="text-gray-300 mb-6">{dailyChallenge.description}</p>

      <div className="flex gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-neon-blue text-cyber-darker rounded-lg font-bold hover:shadow-neon"
        >
          Start Challenge
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 border border-neon-blue text-neon-blue rounded-lg font-bold hover:bg-neon-blue/10"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}
