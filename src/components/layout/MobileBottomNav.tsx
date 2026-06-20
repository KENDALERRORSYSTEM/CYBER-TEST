'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiBook,
  FiTerminal,
  FiTarget,
  FiSettings,
} from 'react-icons/fi';
import clsx from 'clsx';

const mobileNavItems = [
  { href: '/', icon: FiHome, label: 'Home' },
  { href: '/dashboard', icon: FiBook, label: 'Dashboard' },
  { href: '/learning-path', icon: FiBook, label: 'Learn' },
  { href: '/ctf', icon: FiTarget, label: 'CTF' },
  { href: '/settings', icon: FiSettings, label: 'Settings' },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 lg:hidden border-t border-cyber-border bg-cyber-dark/95 backdrop-blur-xl z-40"
    >
      <nav className="flex justify-around items-center h-20 px-4">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <motion.div
              key={item.href}
              whileTap={{ scale: 0.9 }}
              className="flex-1 flex justify-center"
            >
              <Link
                href={item.href}
                className={clsx(
                  'flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200',
                  isActive
                    ? 'text-neon-blue drop-shadow-lg drop-shadow-[0_0_10px_rgba(0,217,255,0.5)]'
                    : 'text-gray-400 hover:text-neon-cyan'
                )}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </motion.div>
  );
}
