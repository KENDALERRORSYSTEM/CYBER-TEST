'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiZap, FiShield, FiCode } from 'react-icons/fi';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
