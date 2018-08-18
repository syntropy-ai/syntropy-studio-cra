import Immutable from 'seamless-immutable'
import { createModel } from 'utils/redux-helpers'
import { constants as metaConstants } from './meta'

const initialState = Immutable({})

const { actions, reducer } = createModel(
  'program/blocks',
  initialState,
  {},
  {
    [metaConstants.loadConfig]: (state, { config }) =>
      Immutable(config.blocks)
  }
)

export { reducer, actions }
