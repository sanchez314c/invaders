# UAP Invaders 🛸

> Modern Space Defense Game - Defend Earth from UAP invasions with mouse controls and authentic encounters

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Electron](https://img.shields.io/badge/Electron-27.3+-47848F?logo=electron)](https://www.electronjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-339933?logo=node.js)](https://nodejs.org/)
[![Platform](https://img.shields.io/badge/Platform-macOS%20|%20Windows%20|%20Linux-lightgrey)](https://github.com/sanchez314c/uap-invaders/releases)

## 📸 Main Interface

![UAP Invaders Game](build_resources/screenshots/uap-invaders-game.jpg)

> The Ultimate UAP Defense Experience - Protect Earth from the Tic Tac Phenomenon

UAP Invaders is a modern take on the classic Space Invaders arcade game featuring authentic UAP (Unidentified Aerial Phenomena) enemies. Built with Electron, it provides an immersive dark UI for defending Earth from 6 unique UAP types, including the famous Tic Tac, with smooth mouse controls and progressive difficulty that adapts to your pilot skills.

## ✨ Features

- 🛸 **Authentic UAP Experience** - 6 unique UAP types based on real encounters (Saucer, Probe, Tic Tac, Phoenix Light, Orb, Vortex)
- 🎮 **Intuitive Mouse Controls** - Smooth navigation and precise left-click firing mechanics
- 📈 **Progressive Difficulty** - Dynamic spawn rates that adapt to your performance in real-time
- ⚡ **Energy Management System** - Strategic shooting with regenerating energy for tactical gameplay
- 🏆 **Pilot Recognition** - Custom callsigns and persistent local leaderboard with top 10 scores
- 🎨 **Immersive Visual Effects** - Explosions, glowing projectiles, and dynamic starfield background
- 🌟 **Multiple UAP Behaviors** - Each UAP type has unique movement patterns and point values
- 🔊 **Military-Inspired UI** - Professional interface with pilot callsigns and contact protocols
- 🖥️ **Cross-Platform Support** - Native applications for macOS, Windows, and Linux
- 📱 **Web Version Available** - Play instantly in any modern browser without installation
- 🎯 **Full-Screen Mode** - Immersive gameplay with F11 toggle for maximum engagement

## 🚀 Quick Start - One-Command Build & Run

### Option 1: One-Command Solution (Recommended)

```bash
# Clone and build
git clone https://github.com/sanchez314c/uap-invaders.git
cd uap-invaders

# Build and run with a single command!
./build-release-run.sh
```

### Option 2: Development Mode

```bash
# Run in development mode with hot reload
./build-release-run.sh --dev
```

### Build Options

```bash
# Build only (don't launch)
./build-release-run.sh --build-only

# Clean build
./build-release-run.sh --clean

# Build for specific platform
./build-release-run.sh --platform mac
./build-release-run.sh --platform win
./build-release-run.sh --platform linux

# Build for all platforms
./build-release-run.sh --platform all
```

## 📋 Prerequisites

For running from source:
- **Node.js** 16+ and npm
- **Git** (for cloning the repository)

The application includes all necessary dependencies for basic functionality.

## 🛠️ Installation

### Detailed Installation

```bash
# Clone the repository
git clone https://github.com/sanchez314c/uap-invaders.git
cd uap-invaders

# Install dependencies
npm install

# Start the application
./build-release-run.sh

# Or run in development mode
./build-release-run.sh --dev
```

### Building from Source

```bash
# One-command build for current platform
./build-release-run.sh --build-only

# Build for all platforms
./build-release-run.sh --platform all --build-only

# Build for specific platforms
./build-release-run.sh --platform win --build-only
./build-release-run.sh --platform mac --build-only
./build-release-run.sh --platform linux --build-only
```

### Build Output Locations

After building, find your executables in:
- **macOS**: `dist/UAP Invaders Contact Protocol-*.dmg` and `dist/mac*/UAP Invaders Contact Protocol.app`
- **Windows**: `dist/UAP Invaders Contact Protocol Setup *.exe`
- **Linux**: `dist/UAP Invaders Contact Protocol-*.AppImage` and `dist/*.deb`

## 📖 Usage

### 1. Starting the Application

- **Pre-built Binary**: Just double-click the application
- **From Source**: Run `./build-release-run.sh`
- **Web Version**: Play instantly at [https://sanchez314c.github.io/uap-invaders/](https://sanchez314c.github.io/uap-invaders/)

### 2. Pilot Registration

**Enter your callsign**:
- Maximum 10 characters for your pilot identifier
- Your callsign appears on the local leaderboard
- Persistent across game sessions
- Can be changed between games

### 3. Mission Controls

**Primary controls:**
- **Mouse Movement**: Navigate your interceptor spacecraft
- **Left Click**: Fire energy weapons at incoming UAPs
- **F11**: Toggle full-screen mode for immersive gameplay
- **Enter**: Start mission after entering callsign

### 4. UAP Threat Assessment

**Enemy types and behaviors:**
- **🛸 Classic Saucer** - 10 points, low speed, traditional UFO pattern
- **🛰️ Probe** - 15 points, medium speed, reconnaissance movements
- **⚡ Tic Tac** - 25 points, high speed, evasive maneuvers (based on USS Nimitz encounter)
- **🔥 Phoenix Light** - 30 points, high speed, formation flying (Phoenix Lights incident)
- **💫 Orb** - 20 points, medium speed, luminous trajectory
- **🌀 Vortex** - 40 points, variable speed, advanced propulsion signature

### 5. Scoring System

**Point values and ranks:**
- Each UAP type has different point values based on threat level
- Bonus points for accuracy and energy efficiency
- Multiplier bonuses for consecutive hits
- Achievement points for special milestones

## 🔧 Configuration

### Directory Structure

```
~/Library/Application Support/UAP Invaders/    # macOS
%APPDATA%/UAP Invaders/                        # Windows
~/.config/UAP Invaders/                        # Linux
├── pilot-data.json              # Pilot callsigns and statistics
├── high-scores.json             # Local leaderboard data
├── preferences.json             # Game settings and options
├── achievements.json            # Unlocked achievements
└── logs/                       # Application logs
```

### Environment Variables

```bash
# Set custom configuration directory
export UAP_INVADERS_CONFIG_DIR=/path/to/config

# Enable debug mode
export UAP_INVADERS_DEBUG=1

# Set custom difficulty
export UAP_INVADERS_DIFFICULTY=normal  # easy, normal, hard, expert
```

### Game Settings

**Adjustable options:**
- **Difficulty Level**: Easy, Normal, Hard, Expert
- **Sound Volume**: Master, SFX, Music controls
- **Visual Effects**: Particle intensity and quality
- **Controls**: Mouse sensitivity and firing modes
- **Display**: Resolution and fullscreen preferences

## 🐛 Troubleshooting

### Common Issues

<details>
<summary>Game won't start</summary>

- **System Requirements**: Ensure Node.js 16+ is installed
- **Permissions**: Allow app in System Settings (macOS) or check antivirus (Windows)
- **Graphics Drivers**: Update to latest graphics drivers
- **Memory**: Check available RAM (minimum 512MB recommended)
</details>

<details>
<summary>Performance issues</summary>

- **Reduce Graphics Quality**: Lower particle effects in settings
- **Close Background Apps**: Free up system resources
- **Update Browser**: Ensure latest browser version for web version
- **Hardware Acceleration**: Enable in browser settings
</details>

<details>
<summary>Controls not responding</summary>

- **Mouse Focus**: Click game window to ensure focus
- **Peripheral Settings**: Check mouse drivers and settings
- **Full-Screen Mode**: Press F11 to toggle full-screen
- **Browser Permissions**: Allow mouse controls in browser settings
</details>

<details>
<summary>Scores not saving</summary>

1. Check disk space for save files
2. Verify write permissions to config directory
3. Reset preferences if corrupted
4. Clear browser cache (web version)
5. Restart application
</details>

## 📁 Project Structure

```
uap-invaders/
├── src/                      # Source code
│   ├── main/                # Electron main process
│   │   ├── index.js         # Main entry point
│   │   ├── menu.js          # Application menu
│   │   └── windows/         # Window management
│   ├── renderer/            # Renderer process
│   │   ├── components/      # Game components
│   │   ├── styles/          # CSS and themes
│   │   └── index.html       # Main HTML
│   ├── preload/             # Preload scripts
│   └── shared/              # Shared utilities
├── build_resources/         # Build resources
│   ├── icons/              # Application icons
│   └── screenshots/        # Game screenshots
├── scripts/                # Build and utility scripts
├── docs/                   # Documentation
├── tests/                  # Test files
├── dist/                   # Build outputs
└── archive/                # Archived files
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📦 Build Configuration

The application uses standard Electron build configuration:

### Build Settings
- **Electron Version**: 27.3+
- **Node.js Target**: 16+
- **Platforms**: macOS, Windows, Linux
- **Compression**: Maximum compression for smaller downloads

### Supported Platforms
- **macOS**: 10.14+ (Mojave and later)
- **Windows**: Windows 10+ (x64)
- **Linux**: Ubuntu 18.04+, Debian 10+, Fedora 32+

## 🔧 Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start application in production mode |
| `npm run dev` | Development mode with hot reload |
| `npm run build` | Build application for production |
| `npm run build:all` | Build for all platforms |
| `npm run test` | Run test suite |
| `npm run lint` | Run ESLint |

## 🎮 Game Mechanics

### Difficulty Progression

**Dynamic scaling based on performance:**
- **Beginner Phase**: Slower UAP speeds, lower spawn rates
- **Intermediate Phase**: Increased speed and spawn frequency
- **Expert Phase**: Maximum challenge with complex patterns
- **Adaptive AI**: Difficulty adjusts to player skill level

### Energy System

**Strategic resource management:**
- **Energy Pool**: Limited shooting capacity that regenerates over time
- **Efficiency Bonus**: Points for accurate shooting
- **Power-Ups**: Temporary energy boosts and weapon upgrades
- **Penalty System**: Energy loss for missed shots

### Achievement System

**Milestone rewards:**
- **First Contact**: Complete first mission
- **Ace Pilot**: Score 10,000+ points
- **Sharpshooter**: 90%+ accuracy rate
- **Survivor**: Survive 10 waves without damage
- **Legend**: Top score on leaderboard

## 🎨 Design

### Visual Elements

- **Space Environment**: Dynamic starfield with parallax scrolling
- **UAP Designs**: Authentic representations based on documented encounters
- **Particle Effects**: Explosions, weapon trails, and atmospheric effects
- **UI Theme**: Military-inspired interface with tactical elements
- **Color Palette**: Dark theme with vibrant accent colors for visibility

### Audio Design

**Immersive sound experience:**
- **Weapon Effects**: Energy discharge and impact sounds
- **UAP Sounds**: Unique audio signatures for each enemy type
- **Ambient Audio**: Space environment and atmospheric effects
- **UI Feedback**: Audio cues for actions and achievements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or create issues for bug reports and feature requests.

### Development Setup

```bash
# Clone the repo
git clone https://github.com/sanchez314c/uap-invaders.git
cd uap-invaders

# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests
npm test

# Lint code
npm run lint
```

### Code Style

- **JavaScript**: Use modern ES6+ syntax
- **Electron**: Follow Electron security best practices
- **HTML5**: Semantic HTML5 structure
- **CSS3**: Modern CSS with proper organization
- **Game Development**: Follow game development best practices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Classic Space Invaders** - Original game inspiration by Taito
- **UAP Research Community** - Documentation of real encounters
- **Pilot Testimonies** - USS Nimitz and other documented encounters
- **Electron** - For making cross-platform game development possible
- **Open Source Community** - For inspiration and feedback

## 🔗 Links

- [Report Issues](https://github.com/sanchez314c/uap-invaders/issues)
- [Request Features](https://github.com/sanchez314c/uap-invaders/issues/new?labels=enhancement)
- [Discussions](https://github.com/sanchez314c/uap-invaders/discussions)
- [Releases](https://github.com/sanchez314c/uap-invaders/releases)
- [Play Web Version](https://sanchez314c.github.io/uap-invaders/)

---

**UAP Invaders v1.0** - Modern Space Defense Game
Made with AI!