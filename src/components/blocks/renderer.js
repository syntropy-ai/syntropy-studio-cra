import React from 'react'
import { destyle } from 'destyle'

const Renderer = ({ id, meta = {}, code = '', styles }) => (
  <div className={styles.root}>
    <div className={styles.header}>
      <h3 className={styles.title}>{id}</h3>
    </div>
    <div className={styles.body}>
      <div ref={this.renderNode} />
    </div>
  </div>
)

export default destyle(Renderer, 'Renderer')
