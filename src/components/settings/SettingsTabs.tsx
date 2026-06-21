'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSettings, FiDatabase, FiDownload, FiUpload, FiTrash2 } from 'react-icons/fi';
import { useUserStore } from '@/store/userStore';
import { useProgressStore } from '@/store/progressStore';

const tabs = [
  { id: 'general', label: 'General', icon: FiSettings },
  { id: 'data', label: 'Data Management', icon: FiDatabase },
];

export default function SettingsTabs() {
  const [activeTab, setActiveTab] = useState('general');
  const { user } = useUserStore();
  const { progress } = useProgressStore();

  const handleExport = () => {
    const data = {
      user,
      progress,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `x7-academy-data-${Date.now()}.json`;
    a.click();
  };

  const handleReset = () => {
    if (confirm('Are you sure? This will reset all your progress.')) {
      localStorage.clear();
      location.reload();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-1 space-y-2"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <motion.button
              key={tab.id}
              whileHover={{ x: 4 }}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-neon-blue text-cyber-darker font-semibold'
                  : 'text-gray-400 hover:text-neon-blue hover:bg-cyber-card'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-3 space-y-6"
      >
        {activeTab === 'general' && (
          <div className="glass p-8 rounded-lg border border-neon-blue/50 space-y-4">
            <h3 className="text-2xl font-bold mb-6">General Settings</h3>
            <div>
              <label className="block text-sm font-semibold mb-2">Dark Mode</label>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-6 h-6 rounded"
                />
                <span className="text-gray-400">Always enabled</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Notifications</label>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-6 h-6 rounded"
                />
                <span className="text-gray-400">Receive achievement alerts</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="glass p-8 rounded-lg border border-neon-purple/50 space-y-4">
            <h3 className="text-2xl font-bold mb-6">Data Management</h3>
            <p className="text-gray-400">Export or reset your progress data</p>
            <div className="flex flex-col gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleExport}
                className="flex items-center gap-2 px-6 py-3 bg-neon-green text-cyber-darker rounded-lg font-semibold hover:shadow-neon"
              >
                <FiDownload /> Export Progress
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReset}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
              >
                <FiTrash2 /> Reset All Progress
              </motion.button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
