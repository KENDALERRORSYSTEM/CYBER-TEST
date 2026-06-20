'use client';

import { useUserStore } from '@/store/userStore';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

export default function AchievementsCard() {
  const { user } = useUserStore();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass p-6 rounded-xl border border-neon-purple/50 hover:border-neon-purple"
    >
      <div className="flex items-center gap-3 mb-4">
        <FiAward className="w-6 h-6 text-neon-purple" />
        <h3 className="text-lg font-semibold">Achievements</h3>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[0, 1, 2, 3].map((idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="aspect-square glass rounded-lg border border-neon-purple/30 flex items-center justify-center cursor-pointer hover:border-neon-purple"
          >
            <span className="text-2xl">🏆</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
