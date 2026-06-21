'use client';

import { motion } from 'framer-motion';
import { useCTFStore } from '@/store/ctfStore';
import { FiTrophy } from 'react-icons/fi';

export default function ScoreboardCard() {
  const { localScore } = useCTFStore();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass p-6 rounded-lg border border-neon-purple/50 sticky top-20"
    >
      <div className="flex items-center gap-3 mb-4">
        <FiTrophy className="w-6 h-6 text-neon-purple" />
        <h3 className="text-lg font-bold">Local Scoreboard</h3>
      </div>
      <div className="space-y-4">
        <div className="bg-cyber-card p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Your Score</p>
          <p className="text-3xl font-bold text-neon-blue">{localScore}</p>
        </div>
        <div className="bg-cyber-card p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Rank</p>
          <p className="text-3xl font-bold text-neon-purple">#1</p>
        </div>
      </div>
    </motion.div>
  );
}
