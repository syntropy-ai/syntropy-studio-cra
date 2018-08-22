import React from 'react'
import { destyle } from 'destyle'

const SidebarItem = ({ styles, title, children }) => {
  return (
    <div className={styles.sidebarItem}>
      <div className={styles.sidebarItemHeader}>
        <h4 className={styles.sidebarItemTitle}>{title}</h4>
      </div>
      <div className={styles.sidebarItemBody}>
        {children}
      </div>
    </div>
  )
}

export default destyle(SidebarItem, 'Sidebar')
