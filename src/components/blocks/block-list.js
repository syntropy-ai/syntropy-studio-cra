import React from 'react'
import { connect } from 'react-redux'
import { destyle } from 'destyle'
import Block from './block'

const GeneratorList = ({
  blocks,
  blockOrder,
  code,
  styles
}) => (
  <div className={styles.listContainer}>
    {blockOrder.map(id => (
      <Block
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
    program: { blocks = {}, blockOrder = [], code = {} }
  }) => ({
    blocks,
    blockOrder,
    code
  })
)

export default destyle(enhance(GeneratorList))
