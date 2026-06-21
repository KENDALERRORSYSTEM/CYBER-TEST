'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiBot } from 'react-icons/fi';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const SAMPLE_RESPONSES = [
  'SQL Injection adalah teknik serangan di mana penyerang memasukkan kode SQL berbahaya ke dalam input aplikasi.',
  'XSS (Cross-Site Scripting) memungkinkan penyerang menyuntikkan skrip JavaScript ke dalam halaman web.',
  'CSRF (Cross-Site Request Forgery) memanfaatkan kepercayaan pengguna untuk melakukan tindakan tanpa persetujuan.',
  'OWASP Top 10 adalah daftar 10 risiko keamanan web paling kritis yang perlu diperhatikan.',
];

export default function AIMentorChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Halo! Saya adalah AI Mentor Anda. Tanya apa saja tentang cybersecurity, ethical hacking, atau challenge yang sedang Anda kerjakan.',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: SAMPLE_RESPONSES[
          Math.floor(Math.random() * SAMPLE_RESPONSES.length)
        ],
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8 max-w-2xl min-h-[calc(100vh-80px)] flex flex-col"
    >
      <div className="glass rounded-lg border border-neon-blue/50 flex flex-col flex-1">
        {/* Header */}
        <div className="border-b border-cyber-border p-6 flex items-center gap-3">
          <FiBot className="w-6 h-6 text-neon-blue" />
          <h1 className="text-2xl font-bold">AI Mentor</h1>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-96">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-neon-blue text-cyber-darker'
                    : 'bg-cyber-card border border-cyber-border text-gray-300'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </motion.div>
          ))}
          {loading && (
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity }}
              className="flex justify-start"
            >
              <div className="bg-cyber-card border border-cyber-border px-4 py-2 rounded-lg text-gray-400 text-sm">
                Mentor sedang mengetik...
              </div>
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-cyber-border p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tanya sesuatu..."
              className="flex-1 px-4 py-2 bg-cyber-darker border border-cyber-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue focus:outline-none text-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="px-4 py-2 bg-neon-blue text-cyber-darker rounded-lg font-semibold hover:shadow-neon disabled:opacity-50"
            >
              <FiSend />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
