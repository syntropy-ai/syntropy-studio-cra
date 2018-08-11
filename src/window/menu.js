import { store } from 'state'
import { openDirectory } from 'state/filetree'
import { dirname } from 'utils/file-io'

const { remote } = window.require('electron')
const { Menu, dialog } = remote

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        click: () => {
          const location = dialog.showOpenDialog({
            title: 'Open Syntropy Studio Project',
            filters: [
              {
                name: 'Syntropy JSON Config',
                extensions: ['json']
              }
            ],
            properties: ['openFile']
          })

          const projectPath = dirname(location[0])
          store.dispatch(openDirectory(projectPath))
        }
      },
      {
        label: 'Save',
        click: () => {
          console.log('saving')
        }
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
