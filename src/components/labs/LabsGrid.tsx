'use client';

import { motion } from 'framer-motion';
import { LABS_DATA } from '@/data/learningPaths';
import { FiFlask } from 'react-icons/fi';

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

export default function LabsGrid() {
  const allLabs = Object.values(LABS_DATA).flat();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {allLabs.map((lab) => (
        <motion.div
          key={lab.id}
          variants={item}
          whileHover={{ y: -4 }}
          className="glass p-6 rounded-lg border border-neon-purple/50 hover:border-neon-purple cursor-pointer transition-all"
        >
          <div className="flex items-start gap-3 mb-4">
            <FiFlask className="w-6 h-6 text-neon-purple" />
            <div className="flex-1">
              <h3 className="text-lg font-bold">{lab.name}</h3>
              <p className="text-xs text-gray-400">{lab.difficulty}</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-4">Master this technique through interactive challenges</p>
          <div className="flex justify-between items-center">
            <span className="text-neon-purple font-bold">+{lab.xp} XP</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-neon-purple text-white rounded font-semibold hover:shadow-neon text-sm"
            >
              Enter Lab
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
