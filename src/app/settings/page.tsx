'use client';

import { motion } from 'framer-motion';
import SettingsHeader from '@/components/settings/SettingsHeader';
import SettingsTabs from '@/components/settings/SettingsTabs';

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-cyber-darker pb-24 md:pb-8">
      <SettingsHeader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <SettingsTabs />
      </motion.div>
    </main>
  );
}
