import { createModel } from 'utils/redux-helpers'
//import client from 'utils/watcher'

//const initialState = {}
const initialState = {
  files: {
    'e:/somewhere': {
      name: 'somewhere',
      expanded: true,
      children: ['e:/other/file']
    },
    'e:/other/file': {
      name: 'file'
    }
  },
  root: 'e:/somewhere',
  selected: []
}

const { actions, reducer } = createModel(
  'FILETREE',
  initialState,
  {
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

const toggleFolder = key => dispatch => {
  dispatch(actions.toggleExpanded(key))
  dispatch(actions.select(key))
}

const selectFile = key => dispatch => {
  dispatch(actions.select(key))
}

export { reducer, toggleFolder, selectFile }
