'use client';

import { useUserStore } from '@/store/userStore';
import { motion } from 'framer-motion';
import { FiZap } from 'react-icons/fi';

export default function XPCard() {
  const { user } = useUserStore();

  const nextLevelXP = user.level * 1000;
  const progressPercent = (user.xp / nextLevelXP) * 100;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass p-6 rounded-xl border border-neon-blue/50 hover:border-neon-blue"
    >
      <div className="flex items-center gap-3 mb-4">
        <FiZap className="w-6 h-6 text-neon-blue" />
        <h3 className="text-lg font-semibold">Level & XP</h3>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-end mb-2">
          <span className="text-3xl font-bold text-neon-blue">{user.level}</span>
          <span className="text-gray-400 text-sm">
            {user.xp} / {nextLevelXP} XP
          </span>
        </div>
        <div className="w-full bg-cyber-card rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
