const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path');
const { ipcRenderer } = require('electron');
//
// const remote = electron.remote;
// const window = remote.getCurrentWindow();

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

ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(123456);
    console.log(arg);
    console.log(event);
});
