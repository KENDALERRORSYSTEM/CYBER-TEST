'use client';

import { motion } from 'framer-motion';

export default function VulnDBHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-neon-red/20 to-neon-orange/20 border-b border-cyber-border backdrop-blur-sm sticky top-0 z-30"
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Vulnerability Database</h1>
        <p className="text-gray-300">OWASP Top 10, CWE, CVE, and Common Vulnerabilities</p>
      </div>
    </motion.div>
  );
}
