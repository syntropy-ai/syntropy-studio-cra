import React from 'react'
import { destyle } from 'destyle'
import { BlockList, RendererList } from 'components/blocks'

const WorkSpace = ({
  styles,
  direction = 'column',
  numPanes = 1
}) => (
  <div className={styles.root}>
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <h4 className={styles.panelTitle}>Blocks</h4>
      </div>
      <BlockList />
    </div>
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <h4 className={styles.panelTitle}>Renderers</h4>
      </div>
      <RendererList />
    </div>
  </div>
)

export default destyle(WorkSpace, 'WorkSpace')
