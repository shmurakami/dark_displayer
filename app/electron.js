'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');

let mainWindow = null;

let windowStyle = {
    width: 1900,
    height: 1500,
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

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
