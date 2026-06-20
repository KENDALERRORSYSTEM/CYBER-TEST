'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LearningPathHeader from '@/components/learning/LearningPathHeader';
import CategoryTabs from '@/components/learning/CategoryTabs';
import CoursesGrid from '@/components/learning/CoursesGrid';
import { LEARNING_CATEGORIES } from '@/data/learningPaths';

export default function LearningPathPage() {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(LEARNING_CATEGORIES)[0]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-h-screen bg-cyber-darker pb-24 md:pb-8">
      <LearningPathHeader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <CategoryTabs
          categories={LEARNING_CATEGORIES}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <CoursesGrid
          category={selectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </motion.div>
    </main>
  );
}
