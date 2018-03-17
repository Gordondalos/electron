const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path');
const remote = electron.remote;

const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', (event) => {
    const window = remote.getCurrentWindow();
    window.close();
});