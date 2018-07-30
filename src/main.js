const { app, BrowserWindow } = require('electron')

let mainWindow

function createWindow() {
  // setup devtools
  require('./utils/devtools')

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  mainWindow.loadURL('http://localhost:3000')

  mainWindow.on('closes', () => (mainWindow = null))
}

app.on('ready', createWindow)
