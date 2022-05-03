const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('path')
const cmd = require("node-cmd")

createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')

    hostVideoPath = ''
    ipcMain.handle('dialog:pick-host-video', async () => {
        // var pickedFile = await dialog.showOpenDialog({ properties: ['openFile'] })
        // hostVideoPath = pickedFile.filePaths[0]
        cmd.runSync("C:/Users/fakdi/Desktop/stengoraphy_homework/stamp_test.mp4")

    })
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})