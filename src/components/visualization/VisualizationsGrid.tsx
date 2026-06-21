'use client';

import { motion } from 'framer-motion';
import { FiLayers } from 'react-icons/fi';

const VISUALIZATIONS = [
  { id: 1, name: 'SQL Injection Attack Flow', icon: '🔓' },
  { id: 2, name: 'XSS Payload Execution', icon: '🎯' },
  { id: 3, name: 'Brute Force Attack', icon: '🔑' },
  { id: 4, name: 'DDoS Wave Visualization', icon: '🌊' },
  { id: 5, name: 'MITM Attack Diagram', icon: '🔗' },
  { id: 6, name: 'Cyber Kill Chain', icon: '⚔️' },
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

export default function VisualizationsGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {VISUALIZATIONS.map((viz) => (
        <motion.div
          key={viz.id}
          variants={item}
          whileHover={{ y: -4 }}
          className="glass p-6 rounded-lg border border-neon-green/50 hover:border-neon-green cursor-pointer transition-all"
        >
          <div className="text-4xl mb-3">{viz.icon}</div>
          <h3 className="text-lg font-bold mb-2">{viz.name}</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-4 py-2 bg-neon-green text-cyber-darker rounded font-semibold hover:shadow-neon"
          >
            Watch
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
}
