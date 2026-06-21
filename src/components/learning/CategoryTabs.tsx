'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CategoryTabsProps {
  categories: Record<string, string[]>;
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryTabs({
  categories,
  selected,
  onSelect,
}: CategoryTabsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex overflow-x-auto gap-2 mb-8 pb-2 scrollbar-hide"
    >
      {Object.keys(categories).map((cat) => (
        <motion.button
          key={cat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(cat)}
          className={clsx(
            'px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-all',
            selected === cat
              ? 'bg-neon-blue text-cyber-darker shadow-neon'
              : 'bg-cyber-card border border-cyber-border hover:border-neon-blue'
          )}
        >
          {cat}
        </motion.button>
      ))}
    </motion.div>
  );
}
