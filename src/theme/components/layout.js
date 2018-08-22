import { css } from 'emotion'
import theme from '../theme'

const layout = props => css`
  display: flex;
  flex-direction: ${props.direction};
  flex-wrap: ${props.wrap};
  justify-content: ${props.justify};
  align-items: ${props.alignItems};
`

const panel = props => css`
  order: ${props.order};
  flex-grow: ${props.grow || 1};
  flex-shrink: ${props.shrink};
  flex: ${props.flex};
  align-self: ${props.alignSelf};
`

const sidebarPanel = props => css`
  background: ${theme.sidebar.bgColour};
  width: 220px;
  height: calc(100vh - ${theme.header.height}px);
  border-right: 1px solid ${theme.sidebar.borderColour};
`

export const layoutStyles = { layout }
export const panelStyles = { panel }
export const sidebarPanelStyles = { panel: sidebarPanel }
