'use strict';

const {app, BrowserWindow} = require('electron');
require('electron-reload')(__dirname);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() { mainWindow = null; });
});
