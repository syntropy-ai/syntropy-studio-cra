import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import { reducer as filetreeReducer } from './filetree'
import { reducer as experimentReducer } from './experiment'

const combinedReducers = combineReducers({
  filetree: filetreeReducer,
  experiment: experimentReducer
})

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(thunk))
)

export { store, combinedReducers }
