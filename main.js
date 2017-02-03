const electron = require('electron');
const path = require('path');
const url = require('url');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object
let mainWindow;

/**
 * Create the app window
 */
function createWindow () {
  mainWindow = new BrowserWindow({
    backgroundColor: '#ffffff',
    devTools: false,
    frame: 'hidden',
    height: 600,
    title: 'DirCompare',
    titleBarStyle: 'hidden-inset',
    width: 900
  });

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// create window if not present on activation
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
