'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import XPCard from '@/components/dashboard/XPCard';
import AchievementsCard from '@/components/dashboard/AchievementsCard';
import DailyChallenge from '@/components/dashboard/DailyChallenge';
import ContinueLearning from '@/components/dashboard/ContinueLearning';
import SkillTree from '@/components/dashboard/SkillTree';
import ActivityHistory from '@/components/dashboard/ActivityHistory';
import { useUserStore } from '@/store/userStore';

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

export default function DashboardPage() {
  const { user } = useUserStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-cyber-darker animate-pulse"> </div>
    );
  }

  return (
    <main className="min-h-screen bg-cyber-darker pb-24 md:pb-8">
      <DashboardHeader />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-8 space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div variants={item}>
            <XPCard />
          </motion.div>
          <motion.div variants={item}>
            <AchievementsCard />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div variants={item} className="lg:col-span-2">
            <DailyChallenge />
          </motion.div>
          <motion.div variants={item}>
            <ContinueLearning />
          </motion.div>
        </div>

        <motion.div variants={item}>
          <SkillTree />
        </motion.div>

        <motion.div variants={item}>
          <ActivityHistory />
        </motion.div>
      </motion.div>
    </main>
  );
}
