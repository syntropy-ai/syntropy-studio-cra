import React from 'react'
import { destyle } from 'destyle'
import { BlockList, RendererList } from 'components/blocks'

const WorkSpace = ({ styles }) => (
  <div className={styles.root}>
    <div className={styles.panel}>
      <BlockList />
    </div>
    <div className={styles.panel}>
      <div>Renderers</div>
      <RendererList />
    </div>
  </div>
)

export default destyle(WorkSpace, 'WorkSpace')
