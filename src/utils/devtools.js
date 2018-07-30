const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} = require('electron-devtools-installer')

const extensions = [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS]

extensions.forEach(ext => {
  installExtension(ext)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err))
})
