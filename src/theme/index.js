import './index.css'
import { setStyles } from 'destyle'

import appStyles from './components/app'
import {
  layoutStyles,
  panelStyles,
  sidebarPanelStyles
} from './components/layout'
import headerStyles from './components/header'
import sidebarStyles from './components/sidebar'
import filetreeStyles from './components/file-tree'

setStyles('App', appStyles)
setStyles('Layout', layoutStyles)
setStyles('Panel', panelStyles)
setStyles('SidebarPanel', sidebarPanelStyles)
setStyles('Header', headerStyles)
setStyles('Sidebar', sidebarStyles)
setStyles('FileTree', filetreeStyles)

export default {}
