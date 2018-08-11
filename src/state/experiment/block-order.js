import Immutable from 'seamless-immutable'
import { createModel } from 'utils/redux-helpers'
import { constants as metaConstants } from './meta'

const initialState = Immutable([])

const { actions, reducer } = createModel(
  'experiment/blockOrder',
  initialState,
  {
    update: [
      'order',
      (state, { order }) => Immutable(order)
    ]
  },
  {
    [metaConstants.loadConfig]: (state, { config }) =>
      Immutable(config.blockOrder)
  }
)

export { reducer, actions }
