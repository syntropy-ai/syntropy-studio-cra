import Immutable from 'seamless-immutable'
import { createModel } from 'utils/redux-helpers'
import { constants as filetreeConstants } from './meta'

const initialState = Immutable({})

const { actions, reducer } = createModel(
  'filetree/files',
  initialState,
  {
    loadChildren: [
      'key',
      'children',
      (state, { key, children }) =>
        state.merge(children).update(key, item =>
          item.merge({
            loaded: true,
            children: Object.keys(children)
          })
        )
    ],
    toggleExpanded: [
      'key',
      (state, { key }) =>
        state.updateIn(
          [key, 'expanded'],
          expanded => !expanded
        )
    ]
  },
  {
    [filetreeConstants.initialise]: (state, { dir }) =>
      state.set(dir.path, dir)
  }
)

export { actions, reducer }
