const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path');
const remote = electron.remote;
const { ipcRenderer } = require('electron');

const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', (event) => {
    const window = remote.getCurrentWindow();
    window.close();
});

const updateBtn = document.getElementById('updateBtn');

updateBtn.addEventListener('click', (event) => {

   ipcRenderer.send('fuck-my-modal', 'ping');
    const window = remote.getCurrentWindow();
    window.close();

});

ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(123456);
    console.log(arg);
    console.log(event);
});
