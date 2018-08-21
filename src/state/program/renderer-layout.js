import Immutable from 'seamless-immutable'
import { createModel } from 'utils/redux-helpers'
import { constants as metaConstants } from './meta'

const initialState = []

const { actions, reducer } = createModel(
  'program/rendererLayout',
  Immutable(initialState),
  {
    update: [
      'layout',
      (state, { layout }) => Immutable(layout)
    ]
  },
  {
    [metaConstants.reset]: state => Immutable(initialState),
    [metaConstants.loadConfig]: (state, { config }) =>
      Immutable(config.rendererLayout)
  }
)

export { reducer, actions }
