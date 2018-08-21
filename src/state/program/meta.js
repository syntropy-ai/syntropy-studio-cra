import Immutable from 'seamless-immutable'
import { createModel } from 'utils/redux-helpers'
import { dirname } from 'utils/file-io'

const initialState = {}

const { actions, reducer, constants } = createModel(
  'program/meta',
  Immutable(initialState),
  {
    reset: state => Immutable(initialState),
    loadConfig: [
      'config',
      'path',
      (state, { config, path }) =>
        Immutable({
          id: config.id,
          basePath: dirname(path)
        })
    ]
  }
)

export { reducer, actions, constants }
