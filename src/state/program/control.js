import Immutable from 'seamless-immutable'
import { createModel } from 'utils/redux-helpers'

const initialState = {
  running: false
}

const { actions, reducer, constants } = createModel(
  'program/control',
  Immutable(initialState),
  {
    reset: state => Immutable(initialState),
    playPause: state =>
      state.merge({ running: !state.running })
  }
)

export { reducer, actions, constants }
