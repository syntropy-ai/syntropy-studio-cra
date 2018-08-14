import Immutable from 'seamless-immutable'
import { createModel } from 'utils/redux-helpers'
import { dirname } from 'utils/file-io'

const initialState = Immutable({})

const { actions, reducer, constants } = createModel(
  'experiment/meta',
  initialState,
  {
    loadConfig: [
      'config',
      'path',
      (state, { config, path }) =>
        Immutable({
          basePath: dirname(path)
        })
    ]
  }
)

export { reducer, actions, constants }
