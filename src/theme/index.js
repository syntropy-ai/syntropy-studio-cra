import './index.css'
import { addStyles, setConcatenator } from 'destyle'
import { cx } from 'emotion'

import appStyles from './components/app'
import {
  layoutStyles,
  panelStyles,
  sidebarPanelStyles
} from './components/layout'
import headerStyles from './components/header'
import sidebarStyles from './components/sidebar'
import filetreeStyles from './components/file-tree'
import blockStyles from './components/blocks'

setConcatenator(values => cx(values))

addStyles('AppLayout', appStyles)
addStyles('Layout', layoutStyles)
addStyles('Panel', panelStyles)
addStyles('SidebarPanel', sidebarPanelStyles)
addStyles('Header', headerStyles)
addStyles('Sidebar', sidebarStyles)
addStyles('FileTree', filetreeStyles)
addStyles('Block', blockStyles)

export default {}
