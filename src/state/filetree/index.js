import { combineReducers } from 'redux'
import {
  getFileDetails,
  readDirectory
} from 'utils/file-io'
import {
  actions as metaActions,
  reducer as metaReducer
} from './meta'
import {
  actions as filesActions,
  reducer as filesReducer
} from './files'

const openDirectory = (path, autoExpand) => dispatch => {
  getFileDetails(path).then(dir => {
    dispatch(metaActions.initialise(dir))
  })
}

const toggleFolder = key => (dispatch, getState) => {
  dispatch(filesActions.toggleExpanded(key))
  dispatch(metaActions.select(key))
  const dir = getState().filetree.files[key]
  if (!dir.loaded) {
    readDirectory(dir.path).then(files => {
      dispatch(filesActions.loadChildren(key, files))
    })
  }
}

const reducer = combineReducers({
  files: filesReducer,
  meta: metaReducer
})

export { reducer, openDirectory, toggleFolder }
