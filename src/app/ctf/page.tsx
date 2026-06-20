'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CTFHeader from '@/components/ctf/CTFHeader';
import CategoryFilter from '@/components/ctf/CategoryFilter';
import ChallengesGrid from '@/components/ctf/ChallengesGrid';
import ScoreboardCard from '@/components/ctf/ScoreboardCard';

export default function CTFPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <main className="min-h-screen bg-cyber-darker pb-24 md:pb-8">
      <CTFHeader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <CategoryFilter
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <ChallengesGrid category={selectedCategory} />
          </div>
          <div>
            <ScoreboardCard />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
