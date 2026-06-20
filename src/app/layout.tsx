import type { Metadata, Viewport } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { DefaultSeo } from 'next-seo';
import './globals.css';
import RootLayout from '@/components/layout/RootLayout';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'X7 Cyber Academy - Premium Cybersecurity Education',
  description:
    'Learn ethical hacking with interactive labs, CTF challenges, and sandbox environments. No login required.',
  keywords: [
    'cybersecurity',
    'ethical hacking',
    'CTF',
    'penetration testing',
    'web security',
    'network security',
    'cryptography',
  ],
  authors: [{ name: 'X7 Cyber Academy' }],
  creator: 'X7 Team',
  publisher: 'X7 Cyber Academy',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'X7 Cyber Academy',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#050812' },
  ],
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <head>
        <DefaultSeo
          titleTemplate="%s | X7 Cyber Academy"
          defaultTitle="X7 Cyber Academy - Premium Cybersecurity Education"
          description="Learn ethical hacking with interactive labs and sandbox environments."
          canonical="https://x7-cyber-academy.vercel.app"
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://x7-cyber-academy.vercel.app',
            siteName: 'X7 Cyber Academy',
            images: [
              {
                url: 'https://x7-cyber-academy.vercel.app/og-image.png',
                width: 1200,
                height: 630,
                alt: 'X7 Cyber Academy',
              },
            ],
          }}
          twitter={{
            handle: '@x7cyberacademy',
            cardType: 'summary_large_image',
          }}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="X7 Academy" />
      </head>
      <body className="bg-cyber-darker text-white">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
