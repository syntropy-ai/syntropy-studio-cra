import Immutable from 'seamless-immutable'
import { createModel } from 'utils/redux-helpers'
import { constants as metaConstants } from './meta'

const initialState = Immutable([])

const { actions, reducer } = createModel(
  'experiment/rendererOrder',
  initialState,
  {
    update: ['order', (state, { order }) => [...order]]
  },
  {
    [metaConstants.loadConfig]: (state, { config }) => [
      ...config.rendererOrder
    ]
  }
)

export { reducer, actions }
