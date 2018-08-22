import React from 'react'
import ProjectTree from 'components/project-tree'
import SidebarItem from './sidebar-item'
import { destyle } from 'destyle'

const Sidebar = ({ styles }) => {
  return (
    <div className={styles.sidebar}>
      <SidebarItem title="Program">
        <ProjectTree />
      </SidebarItem>
    </div>
  )
}

export default destyle(Sidebar, 'Sidebar')
