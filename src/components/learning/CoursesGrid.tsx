'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';

interface CoursesGridProps {
  category: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const COURSES_DATA: Record<string, Array<{ id: string; name: string; lessons: number; difficulty: string }>> = {
  'Web Security': [
    { id: 'sql-inj', name: 'SQL Injection', lessons: 5, difficulty: 'Beginner' },
    { id: 'xss', name: 'XSS Attacks', lessons: 4, difficulty: 'Beginner' },
    { id: 'csrf', name: 'CSRF Vulnerabilities', lessons: 3, difficulty: 'Intermediate' },
    { id: 'auth', name: 'Authentication Bypass', lessons: 6, difficulty: 'Advanced' },
  ],
  'Network Security': [
    { id: 'scanning', name: 'Port Scanning', lessons: 3, difficulty: 'Beginner' },
    { id: 'dns', name: 'DNS Enumeration', lessons: 3, difficulty: 'Beginner' },
  ],
  Cryptography: [
    { id: 'hashing', name: 'Hashing Algorithms', lessons: 4, difficulty: 'Intermediate' },
    { id: 'rsa', name: 'RSA Encryption', lessons: 5, difficulty: 'Advanced' },
  ],
  'Reverse Engineering': [
    { id: 'assembly', name: 'Assembly Basics', lessons: 6, difficulty: 'Advanced' },
    { id: 'elf', name: 'ELF Analysis', lessons: 4, difficulty: 'Advanced' },
  ],
  'Binary Exploitation': [
    { id: 'bof', name: 'Buffer Overflow', lessons: 5, difficulty: 'Advanced' },
    { id: 'rop', name: 'ROP Chains', lessons: 4, difficulty: 'Expert' },
  ],
};

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

export default function CoursesGrid({
  category,
  searchQuery,
  onSearchChange,
}: CoursesGridProps) {
  const courses = useMemo(() => {
    const categoryData = COURSES_DATA[category] || [];
    return categoryData.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [category, searchQuery]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-cyber-card border border-cyber-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue focus:outline-none"
          />
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {courses.map((course) => (
          <motion.div
            key={course.id}
            variants={item}
            whileHover={{ y: -4 }}
            className="glass p-6 rounded-lg border border-neon-blue/50 hover:border-neon-blue cursor-pointer transition-all group"
          >
            <h3 className="text-lg font-bold mb-2 group-hover:text-neon-cyan transition-colors">
              {course.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{course.lessons} lessons</p>
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs font-semibold rounded">
                {course.difficulty}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 bg-neon-blue text-cyber-darker rounded font-semibold text-sm hover:shadow-neon"
              >
                Start
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {courses.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-400">No courses found</p>
        </motion.div>
      )}
    </div>
  );
}
