import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { store } from 'state'
import { startWatcher } from 'utils/redux-watcher'

import { openDirectory } from 'state/filetree'

// setup electron specific window things
import './window'
// setup the engine bridge
import './engine-bridge'

import './index.css'

window.ELECTRON_DISABLE_SECURITY_WARNINGS = true

// start the redux watcher for non comopnent consumers
startWatcher(store)

const args = window.require('electron').remote.process.argv
const projectPath = args[2]
store.dispatch(openDirectory(projectPath))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
