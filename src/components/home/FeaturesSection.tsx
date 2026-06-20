'use client';

import { motion } from 'framer-motion';
import { FiBook, FiTerminal, FiTarget, FiShield, FiDatabase, FiZap } from 'react-icons/fi';

const features = [
  {
    icon: FiBook,
    title: 'Interactive Learning Paths',
    description: 'Structured courses from beginner to advanced ethical hacking',
  },
  {
    icon: FiTerminal,
    title: 'Browser Terminal',
    description: 'Practice networking commands in a safe sandbox environment',
  },
  {
    icon: FiTarget,
    title: 'CTF Challenges',
    description: 'Compete in capture-the-flag challenges with real vulnerabilities',
  },
  {
    icon: FiShield,
    title: 'Advanced Labs',
    description: 'Web, network, crypto, and binary exploitation labs',
  },
  {
    icon: FiDatabase,
    title: 'Vulnerability Database',
    description: 'Explore OWASP Top 10, CWE, and popular CVEs with simulations',
  },
  {
    icon: FiZap,
    title: 'AI Mentor Support',
    description: 'Get intelligent hints and explanations for all challenges',
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
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Premium Features
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to master cybersecurity</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -8, rotateY: 5 }}
                className="glass p-6 rounded-xl border border-neon-blue/30 hover:border-neon-blue/80 transition-all group"
              >
                <Icon className="w-12 h-12 text-neon-blue mb-4 group-hover:text-neon-cyan transition-colors" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
