const { app, BrowserWindow } = require('electron');
const path = require('path');

// Only set `isDev` to true if in development mode
const isDev = process.env.NODE_ENV === 'development';

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            devTools: false,
        },
    });

    const startURL = isDev
        ? 'http://localhost:3000' // Development server
        : `file://${path.join(__dirname, 'out/index.html')}`; // Production files

    mainWindow.loadURL(startURL);

    mainWindow.webContents.on('context-menu', (e) => e.preventDefault());

    mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
    if (mainWindow === null) createWindow();
});