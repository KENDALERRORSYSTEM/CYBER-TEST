'use client';

import { motion } from 'framer-motion';

export default function CodeOfConduct() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-24 max-w-4xl"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Code of Conduct</h2>
      <div className="glass p-8 rounded-lg border border-neon-purple/50 space-y-6 text-gray-300">
        <h3 className="text-2xl font-bold text-neon-purple">Ethical Hacking Guidelines</h3>
        <ul className="space-y-3 list-disc list-inside">
          <li>Gunakan platform ini hanya untuk pembelajaran dan pengembangan skill</li>
          <li>Jangan gunakan teknik yang dipelajari untuk menyerang sistem tanpa izin</li>
          <li>Hormati privasi dan keamanan data orang lain</li>
          <li>Laporkan kerentanan yang ditemukan kepada owner dengan bertanggung jawab</li>
          <li>Tidak boleh menjual, mendistribusikan, atau menggunakan lab untuk tujuan komersial yang tidak sah</li>
          <li>Dukung komunitas cybersecurity yang etis dan profesional</li>
        </ul>
      </div>
    </motion.section>
  );
}
