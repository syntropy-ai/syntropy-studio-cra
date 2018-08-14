const GeneratorFunction = Object.getPrototypeOf(
  function*() {}
).constructor

let state = {}
let program

const parseGenerator = (str, params) => {
  return new GeneratorFunction(...params, str)
}

const sourceString = label => {
  return `\n//# sourceURL=ide://${label}`
}

const buildLayer = layerConfig => {
  const layer = {
    def: layerConfig,
    code: parseGenerator()
  }
  return layer
}

const buildRenderer = rendererConfig => {
  const renderer = {
    def: rendererConfig,
    code: parseGenerator()
  }
  return renderer
}

const loadConfig = (config, loaders) => {
  program = {
    layers: (config.layers || []).map(buildLayer),
    renderers: (config.renderers || []).map(buildRenderer),
    settings: {
      playing: false,
      forever: true,
      fps: 60,
      lastTimeRendered: 0
    }
  }
  return program
}

export { loadConfig }
