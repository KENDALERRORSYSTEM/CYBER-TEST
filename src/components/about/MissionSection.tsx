'use client';

import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-24 max-w-4xl"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
      <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
        <p>
          X7 Cyber Academy adalah platform pembelajaran cybersecurity premium yang dirancang
          untuk memberdayakan ethical hackers, security professionals, dan teknisi IT untuk
          menguasai teknik penetration testing dan defensive security melalui hands-on labs
          dan simulator yang aman.
        </p>
        <p>
          Kami percaya bahwa cybersecurity harus dapat diakses oleh semua orang tanpa hambatan.
          Platform kami menyediakan laboratorium sandbox interaktif yang memungkinkan pengguna
          untuk bereksperimen dengan berbagai teknik keamanan tanpa takut merusak sistem nyata.
        </p>
      </div>
    </motion.section>
  );
}
