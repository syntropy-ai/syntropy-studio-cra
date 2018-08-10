const { app, BrowserWindow, Menu } = require('electron')

let mainWindow

function createWindow() {
  // setup devtools
  require('./utils/devtools')

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768
  })
  mainWindow.loadURL('http://localhost:3000')

  mainWindow.on('closes', () => (mainWindow = null))

  // clear the menu to let the render thread manage it
  Menu.setApplicationMenu(null)
}

app.on('ready', createWindow)
