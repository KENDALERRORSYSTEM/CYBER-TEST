'use client';

import { useUserStore } from '@/store/userStore';
import { motion } from 'framer-motion';
import { FiTrophy } from 'react-icons/fi';

export default function AchievementsList() {
  const { user } = useUserStore();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="glass p-8 rounded-lg border border-neon-yellow/50"
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FiTrophy className="text-neon-yellow" /> Achievements
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {user.achievements.length > 0 ? (
          user.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.1 }}
              className="aspect-square glass rounded-lg border border-neon-yellow/50 flex flex-col items-center justify-center p-4 cursor-pointer hover:border-neon-yellow"
            >
              <span className="text-4xl mb-2">{achievement.icon}</span>
              <p className="text-xs text-center font-semibold line-clamp-2">
                {achievement.name}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full">Unlock achievements by completing challenges</p>
        )}
      </div>
    </motion.div>
  );
}
