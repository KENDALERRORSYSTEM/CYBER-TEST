'use client';

import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';

interface VulnDBFiltersProps {
  filters: { severity: string; category: string; search: string };
  onChange: (filters: any) => void;
}

export default function VulnDBFilters({ filters, onChange }: VulnDBFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Search</label>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => onChange({ ...filters, search: e.target.value })}
              placeholder="Search vulnerabilities..."
              className="w-full pl-10 pr-4 py-2 bg-cyber-card border border-cyber-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Severity</label>
          <select
            value={filters.severity}
            onChange={(e) => onChange({ ...filters, severity: e.target.value })}
            className="w-full px-4 py-2 bg-cyber-card border border-cyber-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue focus:outline-none"
          >
            <option value="all">All Levels</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Category</label>
          <select
            value={filters.category}
            onChange={(e) => onChange({ ...filters, category: e.target.value })}
            className="w-full px-4 py-2 bg-cyber-card border border-cyber-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue focus:outline-none"
          >
            <option value="all">All Categories</option>
            <option value="web">Web Security</option>
            <option value="network">Network</option>
            <option value="crypto">Cryptography</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
}
