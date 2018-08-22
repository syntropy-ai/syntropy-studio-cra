import React from 'react'
import { destyle } from 'destyle'

const Block = ({ id, meta = {}, code = '', styles }) => (
  <div className={styles.root}>
    <div className={styles.header}>
      <h3 className={styles.title}>{id}</h3>
    </div>
    <div className={styles.body} />
  </div>
)

export default destyle(Block, 'Block')
