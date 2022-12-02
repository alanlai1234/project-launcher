const {app, BrowserWindow, ipcMain} = require("electron")
const path = require("path")
const {spawn} = require("child_process")

// require('electron-reload')(__dirname, {
//   electron: path.join(__dirname, 'node_modules', '.bin', 'electron.cmd')
// });

// run binary
ipcMain.on('open', (event, name) => {
    const exe = spawn('wt', ['new-tab', 'cmd', '/k', 'wsl', '--cd', '/home/archwsl/project_bin', '--', './'+name])
});

const mainWindow = () => {
    const win = new BrowserWindow({
        // width: 800,
        // height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });
    // win.webContents.openDevTools()
    win.maximize()
    win.loadFile("index.html")
}

app.whenReady().then(() => {
    mainWindow()
})

app.on("window-all-closed", () => {
    if(process.platform != "darwin") app.quit()
})