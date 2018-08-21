const { app, BrowserWindow, Menu } = require('electron')

let mainWindow

function createWindow() {
  // setup devtools
  require('./utils/devtools')

  // clear the menu to let the render thread manage it
  //Menu.setApplicationMenu(null)

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768
  })

  mainWindow.maximize()

  mainWindow.loadURL('http://localhost:3000')

  mainWindow.on('closes', () => (mainWindow = null))
}

app.on('ready', createWindow)
