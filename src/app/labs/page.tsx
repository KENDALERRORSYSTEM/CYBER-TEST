'use client';

import { motion } from 'framer-motion';
import LabsHeader from '@/components/labs/LabsHeader';
import LabsGrid from '@/components/labs/LabsGrid';

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-cyber-darker pb-24 md:pb-8">
      <LabsHeader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <LabsGrid />
      </motion.div>
    </main>
  );
}
