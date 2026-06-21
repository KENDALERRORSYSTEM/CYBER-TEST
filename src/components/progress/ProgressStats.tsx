'use client';

import { useUserStore } from '@/store/userStore';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiBook, FiAward } from 'react-icons/fi';

export default function ProgressStats() {
  const { user } = useUserStore();

  const stats = [
    { icon: FiTrendingUp, label: 'Total XP', value: user.totalXP, color: 'neon-blue' },
    { icon: FiBook, label: 'Courses Completed', value: user.coursesCompleted, color: 'neon-purple' },
    { icon: FiAward, label: 'Achievements', value: user.achievements.length, color: 'neon-green' },
  ];

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
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={idx}
            variants={item}
            className={`glass p-6 rounded-lg border border-${stat.color}/50`}
          >
            <div className="flex items-start gap-4">
              <Icon className={`w-8 h-8 text-${stat.color}`} />
              <div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className={`text-4xl font-bold text-${stat.color}`}>{stat.value}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
