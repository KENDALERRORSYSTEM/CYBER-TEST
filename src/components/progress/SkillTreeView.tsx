'use client';

import { motion } from 'framer-motion';

export default function SkillTreeView() {
  const skills = [
    { name: 'Web Security', level: 3, maxLevel: 5 },
    { name: 'Cryptography', level: 2, maxLevel: 5 },
    { name: 'Network Security', level: 1, maxLevel: 5 },
    { name: 'Reverse Engineering', level: 0, maxLevel: 5 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 rounded-lg border border-neon-purple/50"
    >
      <h3 className="text-2xl font-bold mb-6">Skill Tree</h3>
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <motion.div key={idx} whileHover={{ x: 4 }}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span className="text-sm text-gray-400">
                {skill.level} / {skill.maxLevel}
              </span>
            </div>
            <div className="w-full bg-cyber-card rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-purple to-neon-pink"
                initial={{ width: 0 }}
                animate={{ width: `${(skill.level / skill.maxLevel) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
