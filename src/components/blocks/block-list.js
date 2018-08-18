import React from 'react'
import { connect } from 'react-redux'
import { destyle } from 'destyle'
import Block from './block'

const GeneratorList = ({
  blocks,
  generatorOrder,
  code,
  styles
}) => (
  <div className={styles.listContainer}>
    {generatorOrder.map(id => (
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
    program: { blocks = {}, generatorOrder = [], code = {} }
  }) => ({
    blocks,
    generatorOrder,
    code
  })
)

export default destyle(enhance(GeneratorList))
