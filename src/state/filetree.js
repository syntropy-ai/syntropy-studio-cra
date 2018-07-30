import { createModel } from 'utils/redux-helpers'
import {
  getFileDetails,
  readDirectory
} from 'utils/file-io'
//import client from 'utils/watcher'

const initialState = {
  files: {},
  selected: []
}

const { actions, reducer } = createModel(
  'FILETREE',
  initialState,
  {
    initDir: [
      'dir',
      (state, { dir }) => ({
        ...initialState,
        files: {
          [dir.path]: dir
        },
        root: dir.path
      })
    ],
    loadChildren: [
      'key',
      'children',
      (state, { key, children }) => ({
        ...state,
        files: {
          ...state.files,
          ...children,
          [key]: {
            ...state.files[key],
            loaded: true,
            children: Object.keys(children)
          }
        }
      })
    ],
    toggleExpanded: [
      'key',
      (state, { key }) => ({
        ...state,
        files: {
          ...state.files,
          [key]: {
            ...state.files[key],
            expanded: !state.files[key].expanded
          }
        }
      })
    ],
    select: [
      'key',
      (state, { key }) => {
        const currentlySelected = state.selected
        const updated = {
          ...state,
          files: {
            ...state.files,
            [key]: {
              ...state.files[key],
              selected: true
            }
          },
          selected: [key]
        }
        currentlySelected.forEach(k => {
          if (k !== key) {
            delete updated.files[k].selected
          }
        })
        return updated
      }
    ]
  }
)

const toggleFolder = key => (dispatch, getState) => {
  dispatch(actions.toggleExpanded(key))
  dispatch(actions.select(key))
  const dir = getState().filetree.files[key]
  if (!dir.loaded) {
    readDirectory(dir.path).then(files => {
      dispatch(actions.loadChildren(key, files))
    })
  }
}

const selectFile = key => dispatch => {
  dispatch(actions.select(key))
}

const openDirectory = (path, autoExpand) => dispatch => {
  getFileDetails(path).then(dir => {
    dispatch(actions.initDir(dir))
  })
}

export { reducer, toggleFolder, selectFile, openDirectory }
