'use client';

import { motion } from 'framer-motion';
import ProgressHeader from '@/components/progress/ProgressHeader';
import ProgressStats from '@/components/progress/ProgressStats';
import SkillTreeView from '@/components/progress/SkillTreeView';
import AchievementsList from '@/components/progress/AchievementsList';

export default function ProgressPage() {
  return (
    <main className="min-h-screen bg-cyber-darker pb-24 md:pb-8">
      <ProgressHeader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 space-y-8"
      >
        <ProgressStats />
        <SkillTreeView />
        <AchievementsList />
      </motion.div>
    </main>
  );
}
