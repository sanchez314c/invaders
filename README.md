####################################################################################
#                                                                                  #
#   ██████╗ ███████╗████████╗    ███████╗██╗    ██╗██╗███████╗████████╗██╗   ██╗ #
#  ██╔════╝ ██╔════╝╚══██╔══╝    ██╔════╝██║    ██║██║██╔════╝╚══██╔══╝╚██╗ ██╔╝ #
#  ██║  ███╗█████╗     ██║       ███████╗██║ █╗ ██║██║█████╗     ██║     ╚████╔╝  #
#  ██║   ██║██╔══╝     ██║       ╚════██║██║███╗██║██║██╔══╝     ██║      ╚██╔╝   #
#  ╚██████╔╝███████╗   ██║       ███████║╚███╔███╔╝██║██╗        ██║       ██║    #
#   ╚═════╝ ╚══════╝   ╚═╝       ╚══════╝ ╚══╝╚══╝ ╚═╝╚═╝        ╚═╝       ╚═╝    #
#                                                                                  #
####################################################################################
#
# Project Name: UAP Invaders Contact Protocol
#
# Author: @spacewelder314
#
# Date Created: 2025-08-21
#
# Last Modified: 2025-09-01
#
# Version: 1.0.0
#
# Description: A modern take on Space Invaders featuring UAP/UFO enemies with 
#              mouse controls and the famous Tic Tac phenomenon
#
# Language/Framework: JavaScript/Electron
#
# Usage: npm start (development) or run the compiled app from dist/
#
# Dependencies: electron@^27.3.11, electron-builder@^24.9.1
#
# GitHub: https://github.com/spacewelder314/INVADERS
#
# Notes: Cross-platform desktop game with native builds for macOS, Windows, Linux
#
####################################################################################

# 🛸 UAP INVADERS: Contact Protocol 🛸

<div align="center">

![UAP Invaders Banner](https://img.shields.io/badge/UAP%20INVADERS-Contact%20Protocol-00ff00?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjMDBmZjAwIi8+Cjwvc3ZnPgo=)

**A modern take on the classic Space Invaders featuring UAP/UFO enemies and the famous Tic Tac phenomenon**

[![Build Status](https://img.shields.io/github/actions/workflow/status/your-username/uap-invaders/build.yml?branch=main)](https://github.com/your-username/uap-invaders/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey.svg)](https://github.com/your-username/uap-invaders/releases)
[![Node Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org/)

[🎮 Play Now](#-quick-start) • [📦 Download](#-download) • [🛠️ Build](#-building-from-source) • [📖 Docs](#-documentation) • [🤝 Contribute](#-contributing)

</div>

---

## 🎮 Features

### 🛸 **Authentic UAP Experience**
- **6 Unique UAP Types**: Classic Saucer, Probe, Tic Tac, Phoenix Light, Orb, and Vortex
- **Realistic Behaviors**: Each UAP has unique movement patterns and point values
- **Immersive Theme**: Military-inspired UI with pilot callsigns and contact protocols

### 🎯 **Modern Gameplay**
- **Intuitive Mouse Controls**: Smooth navigation and left-click firing
- **Progressive Difficulty**: Dynamic spawn rates based on your performance  
- **Energy Management**: Strategic shooting with regenerating energy system
- **Visual Effects**: Explosions, glowing projectiles, and dynamic starfield

### 🏆 **Pilot Recognition System**
- **Custom Callsigns**: Enter your pilot identifier (up to 10 characters)
- **Persistent High Scores**: Local leaderboard with top 10 pilots
- **Mission Statistics**: Track your contact protocol success rate

### 🖥️ **Cross-Platform Ready**
- **Universal Compatibility**: macOS, Windows, and Linux native applications
- **Web Version**: Play instantly in any modern browser
- **Full-Screen Support**: Immersive gameplay with F11 toggle
- **Responsive Design**: Optimized for different screen sizes

## 🚀 Quick Start

### 🎯 **One-Command Build & Run**
```bash
# Clone the repository
git clone https://github.com/your-username/uap-invaders.git
cd uap-invaders

# Build, release, and run with one command!
./build-release-run.sh
```

### ⚡ **Development Mode**
```bash
# Run without building (for development)
./build-release-run.sh --dev
```

### 🏗️ **Build Options**
```bash
# Build for specific platform
./build-release-run.sh --platform mac    # macOS only
./build-release-run.sh --platform win    # Windows only
./build-release-run.sh --platform linux  # Linux only
./build-release-run.sh --platform all    # All platforms

# Build without running
./build-release-run.sh --build-only

# Clean build
./build-release-run.sh --clean
```

## 📦 Download

### 🔽 **Pre-built Binaries** (Recommended)

| Platform | Download | Size | Notes |
|----------|----------|------|-------|
| 🍎 **macOS** | [Intel x64](https://github.com/your-username/uap-invaders/releases/latest/download/UAP.Invaders.Contact.Protocol-1.0.0.dmg) | ~96 MB | macOS 10.14+ |
| 🍎 **macOS** | [Apple Silicon](https://github.com/your-username/uap-invaders/releases/latest/download/UAP.Invaders.Contact.Protocol-1.0.0-arm64.dmg) | ~90 MB | M1/M2 Macs |
| 🪟 **Windows** | [Universal Installer](https://github.com/your-username/uap-invaders/releases/latest/download/UAP.Invaders.Contact.Protocol.Setup.1.0.0.exe) | ~146 MB | Windows 10+ |
| 🐧 **Linux** | [AppImage](https://github.com/your-username/uap-invaders/releases/latest/download/UAP.Invaders.Contact.Protocol-1.0.0.AppImage) | ~99 MB | Portable |
| 🐧 **Linux** | [Debian Package](https://github.com/your-username/uap-invaders/releases/latest/download/uap-invaders_1.0.0_amd64.deb) | ~69 MB | Ubuntu/Debian |

### 🌐 **Web Version** (No Installation)
Play instantly in your browser: [Launch Game](https://your-username.github.io/uap-invaders/)

## 🎯 How to Play

### 🚀 **Mission Briefing**
1. **Enter Your Callsign**: Register your pilot identifier (max 10 characters)
2. **Navigate**: Use mouse movement to control your interceptor 🚀
3. **Engage**: Left-click to fire at incoming UAPs
4. **Survive**: Prevent UAPs from breaching Earth's atmosphere
5. **Achieve Excellence**: Climb the pilot leaderboard

### 🛸 **UAP Threat Assessment**

| UAP Type | Points | Speed | Threat Level | Based On |
|----------|--------|-------|--------------|----------|
| 🛸 **Classic Saucer** | 10 pts | ⚡ | Low | Traditional sightings |
| 🛰️ **Probe** | 15 pts | ⚡⚡ | Medium | Reconnaissance craft |
| ⚡ **Tic Tac** | 25 pts | ⚡⚡⚡ | High | USS Nimitz encounter |
| 🔥 **Phoenix Light** | 30 pts | ⚡⚡ | High | Phoenix Lights incident |
| 💫 **Orb** | 20 pts | ⚡⚡ | Medium | Luminous phenomena |
| 🌀 **Vortex** | 40 pts | ⚡ | Critical | Advanced propulsion |

### ⌨️ **Control Scheme**
- **🖱️ Mouse Movement**: Pilot navigation
- **🖱️ Left Click**: Weapon systems
- **F11**: Full-screen engagement
- **Enter**: Mission start (after callsign entry)

## 🛠️ Building from Source

### 📋 **Prerequisites**
```bash
# Check your system meets requirements
node --version  # >= 16.0.0
npm --version   # >= 8.0.0
```

### 🔧 **Build from Source**

```bash
# Install dependencies (if not already done)
npm install

# Use the unified build script
./build-release-run.sh [options]

Options:
  --dev          Run in development mode (no build)
  --build-only   Build release but don't run
  --clean        Clean build artifacts before building
  --platform     Platform to build for (mac, win, linux, all)
  --help         Show help message
```

### 🎯 **Build Output Locations**
```bash
# After building, find your files here:
dist/
├── *.dmg                    # macOS disk images
├── *.zip                    # macOS portable versions
├── *.exe                    # Windows installers
├── *.AppImage               # Linux AppImage
├── *.deb                    # Debian/Ubuntu packages
├── mac/                     # macOS app bundle
├── mac-arm64/               # Apple Silicon app bundle
└── win-unpacked/            # Windows unpacked files
```

### 📁 **Project Structure**

```
uap-invaders/
├── 🎮 Core Files
│   ├── index.html           # Game interface
│   ├── main.js              # Electron main process
│   ├── package.json         # Project configuration
│   └── build-release-run.sh # Unified build script
├── 🎨 Resources
│   ├── icons/               # Application icons
│   │   ├── mac/            # macOS icons (.icns)
│   │   ├── win/            # Windows icons (.ico)
│   │   └── png/            # PNG icons (Linux/Web)
│   └── assets/              # Game assets (if any)
├── 📦 Distribution
│   └── dist/                # Built applications (after build)
│       ├── *.dmg           # macOS installers
│       ├── *.exe           # Windows installers
│       └── *.AppImage      # Linux packages
├── 🔧 Development
│   └── dev/                 # Development documentation
│       ├── BREADCRUMBS.md  # Development notes
│       ├── CHANGELOG.md    # Version history
│       ├── CONTRIBUTING.md # Contribution guide
│       └── REQUIREMENTS.md # System requirements
└── 📖 Documentation
    ├── README.md            # This file
    └── LICENSE              # MIT license
```

## 📖 Documentation

- **🚀 [Quick Start Guide](#-quick-start)** - Get playing immediately
- **📋 [System Requirements](dev/REQUIREMENTS.md)** - Platform specifications
- **🤝 [Contributing Guide](dev/CONTRIBUTING.md)** - Development workflow
- **🔧 [Build Instructions](#-building-from-source)** - Source compilation
- **🐛 [Issue Tracker](https://github.com/your-username/uap-invaders/issues)** - Bug reports & features

## 🤝 Contributing

We welcome contributions from pilots worldwide! See our [Contributing Guide](dev/CONTRIBUTING.md) for:

- 🐛 **Bug Reports**: Help improve stability
- ✨ **Feature Requests**: Suggest enhancements  
- 🔧 **Code Contributions**: Submit pull requests
- 📖 **Documentation**: Improve guides and docs
- 🌍 **Translations**: Localize for global pilots

### 👥 **Contributors**

Thanks to these brave pilots who've defended Earth:

<a href="https://github.com/your-username/uap-invaders/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=your-username/uap-invaders" />
</a>

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/your-username/uap-invaders?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/uap-invaders?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/uap-invaders)
![GitHub pull requests](https://img.shields.io/github/issues-pr/your-username/uap-invaders)

## 🔮 Roadmap

### 🎯 **Version 1.1** (Next Release)
- [ ] 🎵 Audio system (SFX + background music)
- [ ] 🏆 Achievement system
- [ ] ⚡ Power-ups and special weapons
- [ ] 📱 Mobile/touch controls

### 🎯 **Version 1.2** (Future)
- [ ] 🌐 Online leaderboards
- [ ] 👥 Local multiplayer mode
- [ ] 🎨 Theme customization
- [ ] 🔧 Level editor

### 🎯 **Version 2.0** (Vision)
- [ ] 📱 Mobile app (iOS/Android)
- [ ] 🥽 VR support
- [ ] ☁️ Cloud save synchronization
- [ ] 🎮 Steam integration

## 🏆 Hall of Fame

### 🥇 **Top Pilots** (Demo Leaderboard)
1. **MAVERICK** - 15,420 pts
2. **GHOST** - 12,850 pts  
3. **VIPER** - 11,200 pts
4. **ICEMAN** - 9,750 pts
5. **PHOENIX** - 8,500 pts

*Enter your callsign and claim your place among Earth's defenders!*

## 📄 License

```
MIT License - Copyright (c) 2025 UAP Invaders Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🛸 Acknowledgments

- **Inspiration**: Classic Space Invaders arcade game
- **UAP Research**: Pentagon UAP disclosures and pilot testimonies
- **Technology**: Electron framework for cross-platform compatibility
- **Community**: Players and contributors worldwide

---

<div align="center">

**🚨 CONTACT PROTOCOL ACTIVATED 🚨**

*Earth needs pilots. The UAP threat is real.*

**Enter your callsign and engage!**

[![Play Now](https://img.shields.io/badge/🎮-PLAY%20NOW-00ff00?style=for-the-badge&labelColor=000000)](https://your-username.github.io/uap-invaders/)
[![Download](https://img.shields.io/badge/📦-DOWNLOAD-blue?style=for-the-badge&labelColor=000000)](https://github.com/your-username/uap-invaders/releases/latest)

</div>