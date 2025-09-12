# Contributing to UAP Invaders

Thank you for your interest in contributing to UAP Invaders: Contact Protocol! This document provides guidelines and information for contributors.

## 🛸 Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

## 🚀 Getting Started

### Prerequisites
1. Read the [REQUIREMENTS.md](REQUIREMENTS.md) for system requirements
2. Fork this repository
3. Clone your fork locally
4. Run the setup script: `./scripts/setup.sh`

### Development Setup
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/uap-invaders.git
cd uap-invaders

# Run setup script
./scripts/setup.sh

# Start development
./scripts/dev.sh
```

## 🎯 How to Contribute

### Reporting Issues
- Use the [GitHub issue tracker](https://github.com/your-username/uap-invaders/issues)
- Search existing issues first to avoid duplicates
- Provide detailed information:
  - Operating system and version
  - Node.js version
  - Steps to reproduce
  - Expected vs actual behavior
  - Screenshots if applicable

### Suggesting Features
- Open an issue with the "enhancement" label
- Describe the feature and its benefits
- Consider implementation complexity
- Be open to discussion and feedback

### Code Contributions

#### Branch Naming
- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Critical fixes
- `docs/description` - Documentation updates

#### Pull Request Process
1. **Create a feature branch**
   ```bash
   git checkout -b feature/awesome-new-feature
   ```

2. **Make your changes**
   - Follow the coding standards below
   - Write clear, concise commit messages
   - Test your changes thoroughly

3. **Test your changes**
   ```bash
   ./scripts/run.sh --web    # Test web version
   ./scripts/dev.sh          # Test Electron version
   ./scripts/build.sh        # Test builds
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add awesome new feature"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/awesome-new-feature
   ```
   - Create PR on GitHub
   - Fill out the PR template
   - Link related issues

## 📝 Coding Standards

### JavaScript/HTML/CSS
- Use ES6+ features where appropriate
- Use meaningful variable and function names
- Add comments for complex logic
- Follow existing code style and formatting
- Keep functions focused and concise

### File Organization
```
project-root/
├── src/                 # Source files (if we restructure)
├── scripts/             # Build and utility scripts
├── assets/              # Static assets (icons, images)
├── docs/                # Documentation
├── .github/             # GitHub workflows and templates
├── dist/                # Build output (gitignored)
└── node_modules/        # Dependencies (gitignored)
```

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting, etc.)
- refactor: Code refactoring
- test: Adding or updating tests
- chore: Maintenance tasks

Examples:
feat(game): add new UAP type - Triangle
fix(controls): mouse movement lag on Linux
docs(readme): update installation instructions
```

## 🎮 Game Development Guidelines

### Adding New UAP Types
1. Add UAP definition to `uapTypes` array in `index.html`
2. Include appropriate emoji and properties
3. Test spawn rates and difficulty balance
4. Update documentation

### UI Changes
1. Maintain the retro/sci-fi aesthetic
2. Ensure accessibility (color contrast, text size)
3. Test on different screen sizes
4. Keep UI responsive

### Performance Considerations
1. Test on low-end devices
2. Monitor memory usage
3. Optimize graphics rendering
4. Consider battery usage on laptops

## 🧪 Testing

### Manual Testing Checklist
- [ ] Game starts without errors
- [ ] Mouse controls work smoothly
- [ ] All UAP types spawn and behave correctly
- [ ] Collision detection works properly
- [ ] Score system functions correctly
- [ ] High scores save and load
- [ ] Fullscreen mode works
- [ ] Game over conditions trigger correctly
- [ ] Audio works (if applicable)
- [ ] Performance is acceptable

### Cross-Platform Testing
- [ ] Web version works in major browsers
- [ ] Electron app runs on target platforms
- [ ] Built binaries install and run correctly
- [ ] Icons display properly

## 📋 Project Roadmap

### Current Priorities
1. **Performance Optimization**
   - Improve rendering efficiency
   - Reduce memory usage
   - Better frame rate consistency

2. **Enhanced Gameplay**
   - Power-ups and special weapons
   - Multiple difficulty levels
   - Achievement system

3. **Audio System**
   - Sound effects
   - Background music
   - Audio settings

4. **Multiplayer Support**
   - Local co-op mode
   - Online leaderboards

### Future Enhancements
- Mobile version (Cordova/Capacitor)
- Steam integration
- VR support
- Level editor

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- In-game credits
- Release notes for significant contributions

## 📞 Getting Help

- **Discord**: [Community Server Link] (if available)
- **Issues**: GitHub issue tracker
- **Email**: contact@uapinvaders.com
- **Documentation**: Check [README.md](README.md) and [REQUIREMENTS.md](REQUIREMENTS.md)

## 🔒 Security

If you discover security vulnerabilities:
1. **DO NOT** open a public issue
2. Email security concerns to: security@uapinvaders.com
3. Include detailed information about the vulnerability
4. Allow time for us to address the issue before public disclosure

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Ready to help defend Earth from the UAP invasion?** 🛸👨‍🚀

Thank you for contributing to UAP Invaders: Contact Protocol!