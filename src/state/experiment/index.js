import { combineReducers } from 'redux'
import { readFile } from 'utils/file-io'
import {
  actions as metaActions,
  reducer as metaReducer
} from './meta'
import { reducer as blocksReducer } from './blocks'
import { reducer as blockOrderReducer } from './block-order'
import { reducer as rendererOrderReducer } from './renderer-order'
import {
  reducer as codeReducer,
  initialiseCode
} from './code'

const openExperiment = configPath => dispatch => {
  // load the config file
  readFile(configPath)
    .then(JSON.parse)
    .then(config => {
      dispatch(metaActions.loadConfig(config, configPath))
      dispatch(initialiseCode())
    })
}

const reducer = combineReducers({
  meta: metaReducer,
  blocks: blocksReducer,
  blockOrder: blockOrderReducer,
  rendererOrder: rendererOrderReducer,
  code: codeReducer
})

export { reducer, openExperiment }
