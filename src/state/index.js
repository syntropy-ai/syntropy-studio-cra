import { combineReducers } from 'redux'

import { reducer as filetreeReducer } from './filetree/index'

export default combineReducers({
  filetree: filetreeReducer
})
