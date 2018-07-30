import { combineReducers } from 'redux'

import { reducer as filetreeReducer } from './filetree'

export default combineReducers({
  filetree: filetreeReducer
})
