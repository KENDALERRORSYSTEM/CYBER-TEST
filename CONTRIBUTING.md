# X7 Cyber Academy - Contributing Guide

## Code of Conduct

Proyek ini mengikuti [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/).
Semua kontributor harus mematuhi kode etik ini.

## Cara Berkontribusi

### 1. Setup Development Environment

```bash
# Fork & clone repository
git clone https://github.com/YOUR-USERNAME/CYBER-TEST.git
cd CYBER-TEST

# Install dependencies
npm install

# Setup environment
cp .env.local.example .env.local

# Run development server
npm run dev
```

### 2. Create Feature Branch

```bash
git checkout -b feature/your-feature-name
# atau
git checkout -b fix/your-bug-fix
```

### 3. Make Changes

- Gunakan TypeScript untuk type safety
- Follow existing code style
- Write meaningful commit messages
- Test changes sebelum push

### 4. Commit & Push

```bash
git add .
git commit -m "feat: Add amazing feature"
# atau
git commit -m "fix: Fix critical bug"

git push origin feature/your-feature-name
```

### 5. Create Pull Request

- Jelaskan perubahan dengan jelas
- Referensi issue terkait
- Upload screenshot jika ada UI changes
- Pastikan semua tests pass

## Commit Message Format

Gunakan Conventional Commits format:

```
type(scope): subject

body

footer
```

### Types
- `feat` - Feature baru
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style (formatting, semicolons, etc)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding tests
- `chore` - Maintenance

### Contoh

```
feat(learning): add new cryptography course

Add 5 new lessons about AES encryption:
- Lesson 1: Introduction
- Lesson 2: Key expansion
- Lesson 3: Encryption process
- Lesson 4: Decryption process
- Lesson 5: Security considerations

Closes #123
```

## Code Style Guide

### TypeScript/React
- Use functional components
- Use hooks for state management
- Add prop types with TypeScript
- Destructure props
- Use arrow functions

```typescript
// ✅ Good
interface CardProps {
  title: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, onClick }) => {
  return <div onClick={onClick}>{title}</div>;
};

// ❌ Bad
const Card = (props) => {
  return <div onClick={props.onClick}>{props.title}</div>;
};
```

### Naming Conventions
- Components: PascalCase (`DashboardHeader.tsx`)
- Files: kebab-case for pages (`learning-path.tsx`)
- Functions: camelCase (`handleSubmit`)
- Constants: UPPER_SNAKE_CASE (`API_URL`)
- CSS classes: kebab-case (`.neon-blue`)

### File Organization
```
ComponentName/
├── index.ts (export)
├── ComponentName.tsx
├── ComponentName.module.css (if needed)
└── types.ts (if needed)
```

## Testing

Sebelum submit PR, pastikan:

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format

# Build
npm run build
```

## Documentation

Jika menambah feature baru:
- Update README.md jika diperlukan
- Add comments untuk kode kompleks
- Add JSDoc untuk public functions
- Update component docs

## Types of Contributions

### 🐛 Bug Fixes
- Jelaskan bug dengan detail
- Berikan steps untuk reproduce
- Submit PR dengan fix

### ✨ New Features
- Create issue untuk diskusi terlebih dahulu
- Ikuti design system yang ada
- Add necessary documentation

### 📖 Documentation
- Fix typos
- Improve clarity
- Add examples
- Translate to Indonesian

### 🎨 UI/UX Improvements
- Maintain design consistency
- Ensure accessibility
- Mobile responsive
- Performance conscious

### 🎓 New Courses/Labs
- Add educational content
- Create interactive lessons
- Include practical exercises
- Add solutions

## Review Process

1. **Automated Checks**
   - Type checking
   - Linting
   - Build verification

2. **Code Review**
   - Code quality
   - Best practices
   - Documentation

3. **Testing**
   - Manual testing
   - Browser compatibility
   - Mobile testing

4. **Merge**
   - Squash commits
   - Update changelog
   - Deploy if ready

## Questions & Support

- 📖 [Documentation](README.md)
- 🐛 [Issues](https://github.com/KENDALERRORSYSTEM/CYBER-TEST/issues)
- 💬 [Discussions](https://github.com/KENDALERRORSYSTEM/CYBER-TEST/discussions)

## License

Dengan berkontribusi, Anda setuju bahwa kontribusi Anda akan dilisensikan di bawah MIT License.

---

Terima kasih telah berkontribusi! 🎉
