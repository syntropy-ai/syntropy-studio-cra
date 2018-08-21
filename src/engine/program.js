import forOwn from 'lodash/forOwn'

const createProgram = meta => ({
  meta,
  blocks: {},
  generatorOrder: [],
  rendererOrder: [],

  // reset thje engine state
  reset() {
    this.blocks = {}
  },

  getMeta() {
    return this.meta
  },

  addBlock(key, block) {
    this.blocks[key] = block
  },

  getBlock(key) {
    return this.blocks[key]
  },

  removeBlock(key) {
    delete this.blocks[key]
  },

  updateBlockOrder(order) {
    this.blockOrder = order
  },

  run() {
    console.log('playing')
    forOwn(this.blocks, block => block.func())
  },

  pause() {
    console.log('paused', Date.now())
  }
})

export { createProgram }
