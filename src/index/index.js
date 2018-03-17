const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path');

const notifyBtn = document.getElementById('notifyBtn');

notifyBtn.addEventListener('click', (event) => {
    const modalPath = path.join('file://', __dirname, '../add/add.html');
    let win = new BrowserWindow({
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        width: 400,
        height: 200
    });
    win.on('close', () => {
        win = null
    });
    win.loadURL(modalPath);
    win.show();
});

