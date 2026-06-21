# X7 Cyber Academy - Development Setup Guide

## Prerequisites

- Node.js 18 atau lebih tinggi
- npm, yarn, atau pnpm
- Git
- Browser modern (Chrome, Firefox, Safari, Edge)

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/KENDALERRORSYSTEM/CYBER-TEST.git
cd CYBER-TEST
```

### 2. Install Dependencies

```bash
# Menggunakan npm
npm install

# Atau menggunakan pnpm (recommended)
pnpm install

# Atau menggunakan yarn
yarn install
```

### 3. Setup Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` sesuai kebutuhan Anda (opsional untuk development).

### 4. Run Development Server

```bash
npm run dev
# atau
pnpm dev
# atau
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Project Commands

```bash
# Development
npm run dev                 # Start development server

# Production
npm run build              # Build for production
npm run start              # Start production server

# Quality
npm run lint               # Run ESLint
npm run type-check         # Type checking dengan TypeScript
npm run format             # Format code dengan Prettier
npm run format:check       # Check code formatting

# Analysis
npm run analyze            # Analyze bundle size
```

## Project Structure

```
.
├── src/
│   ├── app/                # App router pages
│   ├── components/         # React components
│   ├── store/              # Zustand stores
│   ├── lib/                # Utilities
│   ├── data/               # Static data
│   └── globals.css         # Global styles
├── public/                 # Static assets
│   ├── manifest.json       # PWA manifest
│   └── sw.js              # Service worker
├── next.config.js          # Next.js config
├── tailwind.config.js      # Tailwind config
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies
└── README.md               # Documentation
```

## Key Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Zustand** - State management
- **IndexedDB** - Local storage

## Development Tips

### Hot Reload
Perubahan di source files akan auto-reload tanpa perlu restart server.

### Browser DevTools
Tailwind CSS IntelliSense dan React DevTools sangat berguna untuk development.

### Code Style
Project menggunakan:
- ESLint untuk linting
- Prettier untuk formatting
- TypeScript untuk type checking

### Before Committing

```bash
# Format code
npm run format

# Check types
npm run type-check

# Run linter
npm run lint

# Build locally
npm run build
```

## Troubleshooting

### Port sudah digunakan

```bash
npm run dev -- -p 3001
```

### Clear cache

```bash
rm -rf .next
npm install
npm run dev
```

### TypeScript errors

```bash
npm run type-check
```

## Environment Variables

Lihat `.env.local.example` untuk daftar lengkap environment variables.

## Deployment

Lihat [README.md](README.md#-deployment) untuk panduan deployment.

## Support

- 📖 [Documentation](README.md)
- 🐛 [Issues](https://github.com/KENDALERRORSYSTEM/CYBER-TEST/issues)
- 💬 [Discussions](https://github.com/KENDALERRORSYSTEM/CYBER-TEST/discussions)

---

Happy coding! 🚀
