import './index.css'
import { setStyles } from 'destyle'

import appStyles from './components/app'
import {
  layoutStyles,
  panelStyles
} from './components/layout'
import headerStyles from './components/header'
import sidebarStyles from './components/sidebar'

setStyles('App', appStyles)
setStyles('Layout', layoutStyles)
setStyles('Panel', panelStyles)
setStyles('Header', headerStyles)
setStyles('Sidebar', sidebarStyles)

export default {}
