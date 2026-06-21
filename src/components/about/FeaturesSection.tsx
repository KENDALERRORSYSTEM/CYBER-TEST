'use client';

import { motion } from 'framer-motion';
import { FiShield, FiGitBranch, FiDatabase, FiTrendingUp } from 'react-icons/fi';

const features = [
  {
    icon: FiShield,
    title: 'Safe & Isolated Environment',
    description: 'Semua lab dan simulator berjalan di lingkungan lokal yang terisolasi',
  },
  {
    icon: FiGitBranch,
    title: 'No External Connections',
    description: 'Tidak ada koneksi ke target eksternal atau dunia nyata',
  },
  {
    icon: FiDatabase,
    title: 'Internal Data Only',
    description: 'Semua data dan simulasi menggunakan dataset internal',
  },
  {
    icon: FiTrendingUp,
    title: 'Progressive Learning',
    description: 'Tingkat kesulitan yang terstruktur dari pemula hingga expert',
  },
];

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

export default function FeaturesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-24 max-w-6xl"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Why Choose X7?</h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={idx}
              variants={item}
              className="glass p-6 rounded-lg border border-neon-blue/50"
            >
              <Icon className="w-8 h-8 text-neon-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
