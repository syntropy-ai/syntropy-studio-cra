import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import { store } from 'state'
import { startWatcher } from 'utils/redux-watcher'
import { openDirectory } from 'state/filetree'

// setup full style theming (put before importing <App>)
import './theme'
// setup electron specific window things
import './window'
// setup the engine bridge
import './engine-bridge'

import App from './components/app/app'

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
