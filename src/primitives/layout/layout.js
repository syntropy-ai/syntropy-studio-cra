import React from 'react'
import { destyle } from 'destyle'

const Layout = ({ element, styles, ...rest }) => {
  const Element = element
  return element ? (
    <Element className={styles.layout} {...rest} />
  ) : (
    <div className={styles.layout} {...rest} />
  )
}

export default destyle(Layout)
