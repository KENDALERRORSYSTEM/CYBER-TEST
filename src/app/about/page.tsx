'use client';

import { motion } from 'framer-motion';
import AboutHero from '@/components/about/AboutHero';
import MissionSection from '@/components/about/MissionSection';
import FeaturesSection from '@/components/about/FeaturesSection';
import CodeOfConduct from '@/components/about/CodeOfConduct';
import DisclaimerSection from '@/components/about/DisclaimerSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cyber-darker pb-24 md:pb-8">
      <AboutHero />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-24 py-24"
      >
        <MissionSection />
        <FeaturesSection />
        <CodeOfConduct />
        <DisclaimerSection />
      </motion.div>
    </main>
  );
}
