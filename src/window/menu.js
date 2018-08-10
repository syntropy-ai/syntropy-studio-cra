const { remote } = window.require('electron')
const { Menu } = remote

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        click: () => console.log('clicked open')
      },
      { type: 'separator' },
      { role: 'quit' }
    ]
  },
  {
    label: 'Devtools',
    role: 'toggledevtools'
  },
  {
    label: 'Help',
    submenu: [{ role: 'about' }]
  }
]

const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)
