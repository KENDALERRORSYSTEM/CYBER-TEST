'use client';

import { motion } from 'framer-motion';
import AIMentorChat from '@/components/mentor/AIMentorChat';

export default function MentorPage() {
  return (
    <main className="min-h-screen bg-cyber-darker">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AIMentorChat />
      </motion.div>
    </main>
  );
}
