import Immutable from 'seamless-immutable'
import { createModel } from 'utils/redux-helpers'
import { constants as metaConstants } from './meta'

const initialState = []

const { actions, reducer } = createModel(
  'program/generatorOrder',
  Immutable(initialState),
  {
    update: [
      'order',
      (state, { order }) => Immutable(order)
    ]
  },
  {
    [metaConstants.reset]: state => Immutable(initialState),
    [metaConstants.loadConfig]: (state, { config }) =>
      Immutable(config.generatorOrder)
  }
)

export { reducer, actions }
