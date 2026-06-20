'use client';

import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Navigation from './Navigation';
import MobileBottomNav from './MobileBottomNav';
import ThemeProvider from './ThemeProvider';
import PWAProvider from './PWAProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <PWAProvider>
        <div className="flex min-h-screen flex-col bg-cyber-darker text-white">
          <Navigation />
          <div className="flex flex-1">
            <aside className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-cyber-border bg-cyber-dark/50 backdrop-blur-sm">
              <Navigation />
            </aside>
            <main className="flex-1 lg:ml-64">{children}</main>
          </div>
          <MobileBottomNav />
        </div>
        <Toaster position="bottom-center" />
      </PWAProvider>
    </ThemeProvider>
  );
}
