import React from 'react'
import { destyle } from 'destyle'

const Panel = ({ element, styles, ...rest }) => {
  const Element = element
  return element ? (
    <Element className={styles.panel} {...rest} />
  ) : (
    <div className={styles.panel} {...rest} />
  )
}

export default destyle(Panel, 'Panel')
