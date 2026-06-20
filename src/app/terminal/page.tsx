'use client';

import { motion } from 'framer-motion';
import BrowserTerminal from '@/components/terminal/BrowserTerminal';

export default function TerminalPage() {
  return (
    <main className="min-h-screen bg-cyber-darker pb-24 md:pb-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BrowserTerminal />
      </motion.div>
    </main>
  );
}
