import Immutable from 'seamless-immutable'
import { createModel } from 'utils/redux-helpers'
import { constants as metaConstants } from './meta'
import { loadText } from 'utils/loaders'

const initialState = Immutable({})

const { actions, reducer } = createModel(
  'program/code',
  initialState,
  {
    update: [
      'id',
      'code',
      (state, { id, code }) => state.merge({ [id]: code })
    ]
  },
  {
    [metaConstants.loadConfig]: (state, { config }) =>
      initialState
  }
)

const initialiseCode = () => (dispatch, getState) => {
  const { meta, blocks = {} } = getState().program
  return Promise.all(
    Object.keys(blocks).map(id => {
      const block = blocks[id]
      return loadText(block.code, meta.basePath).then(
        code => dispatch(actions.update(id, code))
      )
    })
  )
}

export { reducer, actions, initialiseCode }
