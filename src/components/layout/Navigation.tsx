'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiBook,
  FiTerminal,
  FiTrendingUp,
  FiSettings,
  FiInfo,
  FiFlask,
  FiTarget,
  FiBarChart3,
  FiLayers,
} from 'react-icons/fi';
import clsx from 'clsx';

const navItems = [
  { href: '/', icon: FiHome, label: 'Home' },
  { href: '/dashboard', icon: FiBarChart3, label: 'Dashboard' },
  { href: '/learning-path', icon: FiBook, label: 'Learning' },
  { href: '/labs', icon: FiFlask, label: 'Labs' },
  { href: '/terminal', icon: FiTerminal, label: 'Terminal' },
  { href: '/ctf', icon: FiTarget, label: 'CTF' },
  { href: '/visualization', icon: FiLayers, label: 'Visualization' },
  { href: '/vulnerability-db', icon: FiTrendingUp, label: 'Vuln DB' },
  { href: '/mentor', icon: FiBook, label: 'AI Mentor' },
  { href: '/progress', icon: FiTrendingUp, label: 'Progress' },
  { href: '/settings', icon: FiSettings, label: 'Settings' },
  { href: '/about', icon: FiInfo, label: 'About' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="flex flex-col gap-1 p-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <motion.div key={item.href} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200',
                isActive
                  ? 'bg-neon-blue text-cyber-darker font-semibold shadow-neon'
                  : 'text-gray-400 hover:text-neon-blue hover:bg-cyber-card'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden lg:inline">{item.label}</span>
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}
