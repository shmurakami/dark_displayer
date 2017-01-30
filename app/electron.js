'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

let windowStyle = {
    transparent: true,
    frame: false,
    alwaysOnTop: true
};

app.on('window-all-closed', () => {
    if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', () => {
    mainWindow = new BrowserWindow(windowStyle);
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.setIgnoreMouseEvents(true);
    mainWindow.maximize();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
