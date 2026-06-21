'use client';

import { motion } from 'framer-motion';
import { VULNERABILITIES } from '@/data/learningPaths';

interface VulnDBGridProps {
  filters: { severity: string; category: string; search: string };
}

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

const getSeverityColor = (severity: string) => {
  switch (severity.toLowerCase()) {
    case 'critical':
      return 'text-red-500 bg-red-500/10';
    case 'high':
      return 'text-orange-500 bg-orange-500/10';
    case 'medium':
      return 'text-yellow-500 bg-yellow-500/10';
    default:
      return 'text-green-500 bg-green-500/10';
  }
};

export default function VulnDBGrid({ filters }: VulnDBGridProps) {
  const filtered = VULNERABILITIES.filter((v) => {
    const matchSearch = v.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchSeverity =
      filters.severity === 'all' ||
      v.severity.toLowerCase() === filters.severity.toLowerCase();
    return matchSearch && matchSeverity;
  });

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {filtered.map((vuln) => (
        <motion.div
          key={vuln.id}
          variants={item}
          whileHover={{ x: 4 }}
          className="glass p-6 rounded-lg border border-neon-blue/50 hover:border-neon-blue transition-all cursor-pointer"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold">{vuln.title}</h3>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                getSeverityColor(vuln.severity)
              }`}
            >
              {vuln.severity}
            </span>
          </div>
          <p className="text-gray-400 mb-3">{vuln.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div>
              <p className="text-gray-500">CWE</p>
              <p className="text-neon-blue font-semibold">{vuln.cwe}</p>
            </div>
            <div>
              <p className="text-gray-500">Mitigation</p>
              <p className="text-neon-cyan">{vuln.mitigation}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-neon-blue text-cyber-darker rounded font-semibold hover:shadow-neon text-sm"
          >
            View Lab
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
}
