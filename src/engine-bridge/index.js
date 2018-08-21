/**
 * Bridge between engine and UI
 */
import objDiff from 'shallow-diff'
import { createProgram, createBlock } from 'engine'
import { subscribe } from 'utils/redux-watcher'

// the program used throughout the life of the application
const program = createProgram()

subscribe('program.meta.id', (prev, cur) => {
  program.reset(cur)
})

subscribe('program.blocks', (prev = {}, cur, state) => {
  const { added, updated, deleted } = objDiff(prev, cur)
  added.forEach(k => {
    const block = createBlock(k, cur[k])
    program.addBlock(k, block)
  })
  updated.forEach(k => program.getBlock(k).update(cur[k]))
  deleted.forEach(k => program.removeBlock(k))
})

subscribe('program.code', (prev = {}, cur) => {
  const { updated } = objDiff(prev, cur)
  updated.forEach(k =>
    program.getBlock(k).updateCode(cur[k])
  )
})

subscribe('program.blockOrder', (prev, cur) => {
  program.updateBlockOrder(cur)
})

subscribe('program.control.running', (prev, cur) => {
  if (cur) {
    program.run()
  } else {
    program.pause()
  }
})

export { program }
