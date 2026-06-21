# X7 Cyber Academy 🛡️

> **Premium Cybersecurity Education Platform** - Master Ethical Hacking Through Interactive Sandboxes & CTF Challenges

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38b2ac?logo=tailwindcss&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Enabled-5a67d8?logo=pwa&logoColor=white)

## 🎯 Overview

X7 Cyber Academy adalah platform pembelajaran cybersecurity terpadu yang menyediakan:

- 📚 **Interactive Learning Paths** - Jalur pembelajaran terstruktur dari beginner hingga advanced
- 🔬 **Interactive Labs** - Sandbox lingkungan untuk praktik real-world exploitation
- 🎮 **CTF Challenges** - Capture-the-flag competitions dengan scoring system
- 🖥️ **Browser Terminal** - Simulator terminal networking untuk practice command-line skills
- 📊 **Vulnerability Database** - Koleksi OWASP Top 10, CWE, dan CVE dengan simulasi
- 🤖 **AI Mentor** - Assistant berbasis AI untuk memberikan hints dan explanations
- 📈 **Progress Tracking** - Dashboard komprehensif untuk monitor pembelajaran
- 🏆 **Achievement System** - Gamification dengan badges dan points

## ✨ Features

### Core Learning Features
```
✅ Web Security (SQL Injection, XSS, CSRF, IDOR, Auth Bypass, etc.)
✅ Network Security (Scanning, DNS Enumeration, Packet Analysis)
✅ Cryptography (Hashing, Encryption, Digital Signatures)
✅ Reverse Engineering (Assembly, ELF/PE Analysis)
✅ Binary Exploitation (Buffer Overflow, ROP Chains, Format Strings)
✅ Forensics & OSINT
```

### Technical Features
- **🔐 Offline-First Architecture** - Semua data tersimpan secara lokal
- **📱 PWA (Progressive Web App)** - Install sebagai aplikasi native
- **🎨 Modern UI/UX** - Glassmorphism design dengan Framer Motion animations
- **⚡ Performance Optimized** - SWC minification, image optimization
- **🌙 Dark Mode** - Built-in dark theme untuk mata yang nyaman
- **📱 Mobile Responsive** - Fully responsive design
- **🔄 Real-time Sync** - LocalStorage + IndexedDB untuk persistent data

## 🚀 Quick Start

### Prerequisites
```bash
Node.js 18+ 
npm atau pnpm atau yarn
```

### Installation

```bash
# Clone repository
git clone https://github.com/KENDALERRORSYSTEM/CYBER-TEST.git
cd CYBER-TEST

# Install dependencies
npm install
# atau
pnpm install

# Setup environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Build untuk Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
CYBER-TEST/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── dashboard/            # User dashboard
│   │   ├── learning-path/        # Learning modules
│   │   ├── labs/                 # Interactive labs
│   │   ├── terminal/             # Terminal simulator
│   │   ├── ctf/                  # CTF challenges
│   │   ├── visualization/        # Attack visualizations
│   │   ├── progress/             # Progress tracking
│   │   ├── settings/             # User settings
│   │   ├── mentor/               # AI mentor chat
│   │   ├── vulnerability-db/     # Vulnerability database
│   │   └── about/                # About page
│   ├── components/
│   │   ├── layout/               # Layout components
│   │   ├── home/                 # Home page components
│   │   ├── dashboard/            # Dashboard components
│   │   ├── learning/             # Learning components
│   │   ├── labs/                 # Lab components
│   │   ├── terminal/             # Terminal components
│   │   ├── ctf/                  # CTF components
│   │   ├── visualization/        # Visualization components
│   │   ├── progress/             # Progress components
│   │   ├── settings/             # Settings components
│   │   ├── vulndb/               # Vulnerability DB components
│   │   ├── mentor/               # AI mentor components
│   │   └── about/                # About page components
│   ├── store/                    # Zustand stores
│   │   ├── userStore.ts          # User progress & XP
│   │   ├── progressStore.ts      # Course progress
│   │   ├── ctfStore.ts           # CTF submissions
│   │   └── uiStore.ts            # UI state
│   ├── lib/                      # Utilities
│   │   └── idb.ts                # IndexedDB operations
│   ├── data/                     # Static data
│   │   ├── learningPaths.ts      # Learning curriculum
│   │   └── terminalData.ts       # Terminal commands
│   └── globals.css               # Global styles
├── public/
│   ├── manifest.json             # PWA manifest
│   ├── sw.js                     # Service worker
│   └── icons/                    # App icons
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎓 Learning Paths

### Web Security
- SQL Injection (Basic & Blind)
- XSS (Reflected, Stored, DOM)
- CSRF Vulnerabilities
- IDOR (Insecure Direct Object Reference)
- Authentication Bypass
- Session Hijacking
- File Upload Vulnerabilities
- Directory Traversal
- SSRF & XXE
- API Security
- dan banyak lagi...

### Network Security
- Port Scanning dengan Nmap
- Banner Grabbing
- DNS Enumeration
- Packet Analysis
- Firewall Rules
- IDS/IPS Detection

### Cryptography
- Hashing Algorithms
- Symmetric Encryption (AES)
- Asymmetric Encryption (RSA)
- HMAC & Digital Signatures
- Rainbow Tables & Salting
- Key Exchange Protocols

### Binary Exploitation
- Buffer Overflow Attacks
- Stack & Heap Visualization
- Return-Oriented Programming (ROP)
- Address Space Layout Randomization (ASLR)
- Data Execution Prevention (DEP)
- Format String Vulnerabilities

## 🎮 CTF Arena

Solve challenges across multiple categories:
- **Web** - Web application vulnerabilities
- **Crypto** - Cryptographic challenges
- **Reverse** - Reverse engineering tasks
- **Forensics** - Digital forensics investigations
- **OSINT** - Open source intelligence
- **Binary** - Binary exploitation

Setiap challenge memberikan XP points dan achievements.

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework dengan SSR & optimizations
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Zustand** - State management

### Storage
- **LocalStorage** - Browser storage API
- **IndexedDB** - Client-side database
- **next-pwa** - Progressive Web App support

### Styling & UI
- **Tailwind CSS 3.3** - Utility-first styling
- **PostCSS** - CSS transformations
- **Glassmorphism** - Modern glass effect design
- **Neon Effects** - Cybersecurity aesthetic

### Development
- **TypeScript 5** - Type checking
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Next.js SWC** - Fast compilation

## 📱 PWA Features

Platform ini adalah Progressive Web App yang dapat:
- ✅ Diinstal di desktop & mobile
- ✅ Bekerja offline (sebagian fitur)
- ✅ Push notifications
- ✅ Caching strategy untuk performance
- ✅ App-like experience

## 🎨 Design System

### Color Palette
```css
/* Neon Colors */
--neon-blue: #00d9ff
--neon-purple: #d946ef
--neon-pink: #ec4899
--neon-green: #10b981
--neon-cyan: #06b6d4

/* Cyber Colors */
--cyber-dark: #0a0e27
--cyber-darker: #050812
--cyber-card: #1a1f3a
--cyber-border: #2d3748
```

### Component Types
- **Glass** - Glassmorphism cards
- **Neon Border** - Glowing borders
- **Neon Text** - Glowing text effects
- **Animations** - Smooth transitions & keyframe animations

## 🔒 Security & Ethics

### Safety Principles
✅ **Isolated Environment** - Semua simulator berjalan secara lokal  
✅ **No External Connections** - Tidak ada koneksi ke target eksternal  
✅ **Internal Data Only** - Semua data menggunakan dataset internal  
✅ **Educational Purpose** - Dirancang untuk pembelajaran etis  

### Legal Disclaimer

> **PENTING**: Platform ini adalah untuk tujuan pembelajaran saja. Penggunaan teknik hacking untuk menargetkan sistem atau jaringan tanpa otorisasi adalah ILEGAL. Pengguna bertanggung jawab penuh atas penggunaan platform ini.

## 📚 Learning Tips

1. **Start with Basics** - Mulai dari beginner level courses
2. **Practice Regularly** - Konsistensi adalah kunci
3. **Read Documentation** - Pahami konsep sebelum practice
4. **Use AI Mentor** - Manfaatkan AI untuk hints & explanations
5. **Join CTF** - Kompetisi memotivasi pembelajaran
6. **Track Progress** - Monitor kemajuan di dashboard
7. **Share Knowledge** - Bantu komunitas belajar

## 🚀 Deployment

### Deploy ke Vercel

```bash
# Login ke Vercel
vercel login

# Deploy
vercel
```

### Deploy ke Netlify

```bash
# Build static export
npm run build

# Deploy folder
netlify deploy --prod --dir=.next
```

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_APP_NAME="X7 Cyber Academy"
NEXT_PUBLIC_APP_VERSION="1.0.0"
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_PWA_ENABLED=true
```

## 🤝 Contributing

Kontribusi dari komunitas sangat diterima! 

### Cara Berkontribusi

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

### Kontribusi yang Diinginkan
- 🐛 Bug fixes
- ✨ Fitur baru
- 📖 Dokumentasi
- 🎓 Lab & challenges baru
- 🎨 UI/UX improvements
- ⚡ Performance optimizations

## 📄 License

Project ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 👨‍💼 Author

**X7 Cyber Academy Team**
- GitHub: [@KENDALERRORSYSTEM](https://github.com/KENDALERRORSYSTEM)
- Repository: [CYBER-TEST](https://github.com/KENDALERRORSYSTEM/CYBER-TEST)

## 🙏 Acknowledgments

- OWASP untuk OWASP Top 10
- HackTheBox untuk inspirasi lab design
- Framer untuk motion library
- Vercel untuk hosting & platform
- Komunitas cybersecurity global

## 📞 Support & Contact

Untuk support, bug reports, atau feature requests:

- 📧 Email: support@x7cyberacademy.com
- 🐛 Issues: [GitHub Issues](https://github.com/KENDALERRORSYSTEM/CYBER-TEST/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/KENDALERRORSYSTEM/CYBER-TEST/discussions)

## 🗺️ Roadmap

- [ ] AI-powered challenge recommendations
- [ ] Multiplayer CTF competitions
- [ ] Video tutorials integration
- [ ] Mobile app (React Native)
- [ ] Blockchain-based certificates
- [ ] Community forums
- [ ] Advanced analytics
- [ ] Integration dengan HackTheBox & TryHackMe

---

<div align="center">

**Made with ❤️ for the cybersecurity community**

[Visit Platform](https://x7-cyber-academy.vercel.app) • [GitHub](https://github.com/KENDALERRORSYSTEM/CYBER-TEST) • [Twitter](https://twitter.com/x7cyberacademy)

</div>
