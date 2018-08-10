import React from 'react'
import ReactDOM from 'react-dom'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import combinedReducers from './state'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

// setup electron specific window things
import './window'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(thunk))
)

// TEMP: auto load an initial directory for testing
const { openDirectory } = require('./state/filetree')
store.dispatch(
  openDirectory(process.env.REACT_APP_TEMP_FOLDER)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
