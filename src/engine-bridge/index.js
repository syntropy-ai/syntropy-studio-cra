/**
 * Bridge between engine and UI
 */
import * as Engine from 'engine'
import { subscribe } from 'utils/redux-watcher'
import { forOwn } from 'lodash'
import objDiff from 'shallow-diff'

subscribe('program.blocks', (prev = {}, cur, state) => {
  // check if there is a change to the engine id
  const { meta } = state.program
  if (Engine.getMeta().id !== meta.id) {
    Engine.reset(meta)
    forOwn(cur, (block, k) => Engine.addBlock(k, block))
  } else {
    const { added, updated, deleted } = objDiff(cur, prev)
    added.forEach(k => Engine.addBlock(k, cur[k]))
    updated.forEach(k => Engine.updateBlock(k, cur[k]))
    deleted.forEach(k => Engine.removeBlock(k, cur[k]))
  }
})

subscribe('program.code', (prev = {}, cur) => {
  const { updated } = objDiff(cur, prev)
  updated.forEach(k => Engine.updateCode(k, cur[k]))
})

subscribe('program.generatorOrder', (prev, cur) => {
  Engine.updateGeneratorOrder(cur)
})

subscribe('program.rendererOrder', (prev, cur) => {
  Engine.updateRendererOrder(cur)
})
