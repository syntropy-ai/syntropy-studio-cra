import React from 'react'

const Layout = ({ Element = div, styles, ...rest }) => (
  <Element className={styles.layout} {...rest} />
)

export default styler(Layout)
