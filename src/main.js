const { app, BrowserWindow, Menu, shell, ipcMain } = require('electron');
const path = require('path');

// Keep a global reference of the window object
let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 900,
    minWidth: 800,
    minHeight: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: true
    },
    icon: process.platform === 'darwin'
      ? path.join(__dirname, 'icons', 'mac', 'icon.icns')
      : path.join(__dirname, 'icons', 'png', 'icon.png'),
    show: false,
    titleBarStyle: 'default',
    backgroundColor: '#000000'
  });

  // Load the game
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Show window when ready to prevent visual flash
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Handle external links
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // Create application menu
  createMenu();

  // Development tools
  if (process.env.NODE_ENV === 'development' || process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools();
  }
}

function createMenu() {
  const template = [
    {
      label: 'Game',
      submenu: [
        {
          label: 'New Game',
          accelerator: 'CmdOrCtrl+N',
          click: () => {
            mainWindow.reload();
          }
        },
        {
          label: 'Toggle Fullscreen',
          accelerator: 'F11',
          click: () => {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          }
        },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About UAP Invaders',
          click: () => {
            const aboutWindow = new BrowserWindow({
              width: 400,
              height: 300,
              parent: mainWindow,
              modal: true,
              show: false,
              resizable: false,
              webPreferences: {
                nodeIntegration: false,
                contextIsolation: true
              }
            });

            aboutWindow.loadURL(`data:text/html;charset=utf-8,
              <html>
                <head>
                  <title>About</title>
                  <style>
                    body { 
                      font-family: 'Courier Prime', monospace; 
                      background: #000; 
                      color: #00ff00; 
                      text-align: center; 
                      padding: 40px; 
                      margin: 0;
                    }
                    h1 { color: #00ff00; }
                    .version { font-size: 14px; color: #888; }
                  </style>
                </head>
                <body>
                  <h1>🛸 UAP Invaders 🛸</h1>
                  <p><strong>Contact Protocol</strong></p>
                  <p class="version">Version 1.0.0</p>
                  <p>A modern take on the classic space invaders game featuring UAP/UFO enemies including the famous Tic Tac.</p>
                  <p>Use your mouse to navigate and left-click to fire!</p>
                </body>
              </html>
            `);

            aboutWindow.once('ready-to-show', () => {
              aboutWindow.show();
            });

            aboutWindow.on('closed', () => {
              aboutWindow = null;
            });
          }
        }
      ]
    }
  ];

  // macOS specific menu adjustments
  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    });

    // Window menu
    template[4].submenu = [
      { role: 'close' },
      { role: 'minimize' },
      { role: 'zoom' },
      { type: 'separator' },
      { role: 'front' }
    ];
  }

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// App event handlers
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  // On macOS, keep the app running even when all windows are closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, re-create window when dock icon is clicked
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Security: Prevent new window creation
app.on('web-contents-created', (event, contents) => {
  contents.on('new-window', (event, navigationUrl) => {
    event.preventDefault();
    shell.openExternal(navigationUrl);
  });
});