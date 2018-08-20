import React from 'react'
import { connect } from 'react-redux'
import { destyle } from 'destyle'
import Renderer from './renderer'

const RendererList = ({
  blocks,
  rendererLayout,
  code,
  styles
}) => (
  <div className={styles.listContainer}>
    {rendererLayout.map(id => (
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
    program: { blocks = {}, rendererLayout = [], code = {} }
  }) => ({
    blocks,
    rendererLayout,
    code
  })
)

export default destyle(enhance(RendererList))
