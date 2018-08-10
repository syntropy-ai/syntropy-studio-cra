import Immutable from 'seamless-immutable'
import { createModel } from 'utils/redux-helpers'

const initialState = Immutable({
  selected: null,
  root: null
})

const { constants, actions, reducer } = createModel(
  'filetree/meta',
  initialState,
  {
    initialise: [
      'dir',
      (state, { dir }) => state.set('root', dir.path)
    ],
    select: [
      'key',
      (state, { key }) => state.set('selected', key)
    ]
  }
)

export { constants, actions, reducer }
