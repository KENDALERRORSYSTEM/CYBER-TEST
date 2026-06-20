'use client';

import { motion } from 'framer-motion';
import VisualizationHeader from '@/components/visualization/VisualizationHeader';
import VisualizationsGrid from '@/components/visualization/VisualizationsGrid';

export default function VisualizationPage() {
  return (
    <main className="min-h-screen bg-cyber-darker pb-24 md:pb-8">
      <VisualizationHeader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <VisualizationsGrid />
      </motion.div>
    </main>
  );
}
