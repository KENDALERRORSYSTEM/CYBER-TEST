'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

const CATEGORIES = ['all', 'Web', 'Crypto', 'Reverse', 'Forensics', 'OSINT', 'Binary'];

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selected === cat
                ? 'bg-neon-blue text-cyber-darker'
                : 'bg-cyber-card border border-cyber-border hover:border-neon-blue'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
