'use client';

import { motion } from 'framer-motion';
import { CTF_CHALLENGES } from '@/data/learningPaths';

interface ChallengesGridProps {
  category: string;
}

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

export default function ChallengesGrid({ category }: ChallengesGridProps) {
  const filtered = category === 'all' 
    ? CTF_CHALLENGES 
    : CTF_CHALLENGES.filter(c => c.category === category);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
    >
      {filtered.map((challenge) => (
        <motion.div
          key={challenge.id}
          variants={item}
          whileHover={{ y: -4 }}
          className="glass p-6 rounded-lg border border-neon-blue/50 hover:border-neon-blue cursor-pointer transition-all"
        >
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold">{challenge.title}</h3>
            <span className="px-2 py-1 bg-neon-purple/20 text-neon-purple text-xs font-semibold rounded">
              {challenge.difficulty}
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-4">{challenge.category}</p>
          <div className="flex justify-between items-center">
            <span className="text-neon-blue font-bold">+{challenge.xp} XP</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-neon-blue text-cyber-darker rounded font-semibold hover:shadow-neon text-sm"
            >
              Start
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
