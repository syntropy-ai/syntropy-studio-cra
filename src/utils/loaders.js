/**
 * Promise based ways of loading code based on the given config
 */
import { isPlainObject } from 'lodash'
import { readFile, joinPath } from 'utils/file-io'

const loaders = {
  file: (config, basePath) =>
    readFile(joinPath(basePath, config.path))
}

const loadText = (config, basePath) => {
  if (isPlainObject(config)) {
    const loader = loaders[config.type]
    if (!loader) {
      throw Error(
        `Loader of type ${config.type} was not found.`
      )
    }
    return loader(config, basePath)
  } else {
    // just directly return the config
    return Promise.resolve(config)
  }
}

export { loadText }
