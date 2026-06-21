'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiChevronDown, FiCopy, FiPlay } from 'react-icons/fi';
import { TERMINAL_OUTPUT } from '@/data/terminalData';

const AVAILABLE_COMMANDS = [
  'nmap -sV -p 1-1000 example.com',
  'ping example.com',
  'dig example.com',
  'whois example.com',
  'curl -i https://example.com',
];

export default function BrowserTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([]);
  const [selectedCommand, setSelectedCommand] = useState<string | null>(null);

  const handleExecute = (command: string) => {
    const output = TERMINAL_OUTPUT[command] || `Command not found: ${command}`;
    setHistory([...history, { command, output }]);
    setInput('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8 max-w-4xl min-h-[calc(100vh-80px)] flex flex-col"
    >
      <div className="glass p-6 rounded-xl border border-neon-cyan/50 flex-1 flex flex-col font-mono">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-cyber-border">
          <FiTerminal className="w-6 h-6 text-neon-cyan" />
          <h2 className="text-xl font-bold">Browser Terminal Simulator</h2>
        </div>

        <div className="flex-1 bg-cyber-darker rounded mb-4 p-4 overflow-y-auto max-h-96">
          {history.length === 0 ? (
            <div className="text-gray-500 text-sm">
              <p>$ Type a command or select from suggestions</p>
            </div>
          ) : (
            history.map((entry, idx) => (
              <div key={idx} className="mb-4 text-sm">
                <p className="text-neon-cyan">$ {entry.command}</p>
                <pre className="text-gray-300 whitespace-pre-wrap break-words mt-2">
                  {entry.output}
                </pre>
              </div>
            ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          {/* Command suggestions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {AVAILABLE_COMMANDS.map((cmd) => (
              <motion.button
                key={cmd}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleExecute(cmd)}
                className="bg-cyber-card border border-neon-cyan/30 hover:border-neon-cyan rounded p-2 text-xs text-left text-neon-cyan hover:text-neon-blue transition-all"
              >
                <div className="flex items-center gap-2">
                  <FiPlay className="w-3 h-3" />
                  <span className="truncate">{cmd}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <div className="flex-1 flex items-center gap-2 bg-cyber-darker border border-cyber-border rounded px-3">
              <span className="text-neon-cyan">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && input && handleExecute(input)}
                placeholder="Enter command..."
                className="flex-1 bg-transparent outline-none text-white text-sm py-2"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => input && handleExecute(input)}
              className="px-4 py-2 bg-neon-cyan text-cyber-darker rounded font-semibold hover:shadow-neon"
            >
              Execute
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
