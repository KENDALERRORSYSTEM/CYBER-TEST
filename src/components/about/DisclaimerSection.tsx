'use client';

import { motion } from 'framer-motion';
import { FiAlertTriangle } from 'react-icons/fi';

export default function DisclaimerSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-24 max-w-4xl mb-12"
    >
      <div className="glass p-8 rounded-lg border border-red-500/50 space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <FiAlertTriangle className="w-8 h-8 text-red-500" />
          <h2 className="text-2xl font-bold">Legal Disclaimer</h2>
        </div>

        <div className="space-y-4 text-gray-300 text-sm">
          <p>
            X7 Cyber Academy adalah platform pembelajaran untuk tujuan pendidikan saja.
            Platform ini dirancang untuk mengajar tentang cybersecurity dan ethical hacking
            dalam lingkungan yang aman dan terkontrol.
          </p>
          <p>
            Pengguna bertanggung jawab penuh atas penggunaan pengetahuan yang diperoleh dari
            platform ini. Penggunaan teknik hacking untuk menargetkan sistem atau jaringan
            tanpa otorisasi adalah ilegal dan melanggar hukum.
          </p>
          <p>
            X7 Cyber Academy tidak bertanggung jawab atas:
            - Penggunaan tidak sah dari platform atau konten
            - Kerusakan yang diakibatkan oleh penggunaan platform ini
            - Kehilangan data atau sistem
            - Pelanggaran hukum yang dilakukan pengguna
          </p>
          <p className="font-semibold text-neon-blue">
            Dengan menggunakan platform ini, Anda setuju untuk mematuhi semua hukum yang
            berlaku dan menggunakan pengetahuan ini secara etis dan legal.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
