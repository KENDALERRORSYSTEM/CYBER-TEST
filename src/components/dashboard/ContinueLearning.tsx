'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

export default function ContinueLearning() {
  const continueCourse = {
    title: 'Web Security 101',
    progress: 45,
    nextLesson: 'XSS Attacks',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-6 rounded-xl border border-neon-cyan/50 hover:border-neon-cyan h-full"
    >
      <h3 className="text-lg font-bold mb-4">Continue Learning</h3>

      <div className="mb-4">
        <p className="text-sm text-gray-400 mb-2">{continueCourse.title}</p>
        <div className="w-full bg-cyber-card rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue"
            initial={{ width: 0 }}
            animate={{ width: `${continueCourse.progress}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">{continueCourse.progress}% complete</p>
      </div>

      <p className="text-sm text-gray-300 mb-4">Next: {continueCourse.nextLesson}</p>

      <Link
        href="/learning-path"
        className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors font-semibold"
      >
        Continue <FiChevronRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
