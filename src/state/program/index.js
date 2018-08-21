import { combineReducers } from 'redux'
import { readFile } from 'utils/file-io'
import { reducer as blocksReducer } from './blocks'
import { reducer as blockOrderReducer } from './block-order'
import { reducer as rendererLayoutReducer } from './renderer-layout'
import { reducer as controlReducer } from './control'
import {
  reducer as codeReducer,
  initialiseCode
} from './code'
import {
  actions as metaActions,
  reducer as metaReducer
} from './meta'

const openProgram = configPath => dispatch => {
  // load the config file
  readFile(configPath)
    .then(JSON.parse)
    .then(config => {
      dispatch(metaActions.reset())
      dispatch(metaActions.loadConfig(config, configPath))
      dispatch(initialiseCode())
    })
}

const reducer = combineReducers({
  meta: metaReducer,
  blocks: blocksReducer,
  blockOrder: blockOrderReducer,
  rendererLayout: rendererLayoutReducer,
  code: codeReducer,
  control: controlReducer
})

export { reducer, openProgram }
