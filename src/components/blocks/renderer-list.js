import React from 'react'
import { connect } from 'react-redux'
import { destyle } from 'destyle'
import Renderer from './block'

const RendererList = ({
  blocks,
  rendererOrder,
  code,
  styles
}) => (
  <div className={styles.listContainer}>
    {rendererOrder.map(id => (
      <Renderer
        key={id}
        id={id}
        meta={blocks[id]}
        code={code[id]}
      />
    ))}
  </div>
)

const enhance = connect(
  ({
    experiment: {
      blocks = {},
      rendererOrder = [],
      code = {}
    }
  }) => ({
    blocks,
    rendererOrder,
    code
  })
)

export default destyle(enhance(RendererList))
