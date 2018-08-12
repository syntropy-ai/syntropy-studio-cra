import React from 'react'
import { destyle } from 'destyle'

const Block = ({ id, meta = {}, code = '', styles }) => (
  <div className={styles.container}>
    <span>{id}</span>
  </div>
)

export default destyle(Block)
