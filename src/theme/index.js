import './index.css'
import { setStyles, setConcatenator } from 'destyle'
import { cx } from 'emotion'

import appStyles from './components/app'
import {
  layoutStyles,
  panelStyles
} from './components/layout'
import headerStyles from './components/header'
import sidebarStyles from './components/sidebar'

setConcatenator(values => cx(values))

setStyles('App', appStyles)
setStyles('Layout', layoutStyles)
setStyles('Panel', panelStyles)
setStyles('Header', headerStyles)
setStyles('Sidebar', sidebarStyles)

export default {}
