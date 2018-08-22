import { css } from 'emotion'
import theme from '../theme'

const sidebar = props => css``

const sidebarItem = props => css`
  border-bottom: 1px solid ${theme.sidebar.borderColour};
`

const sidebarItemHeader = props => css`
  padding: 8px 12px;
`

const sidebarItemTitle = props => css`
  margin: 0;
  color: ${theme.colour.textPrimaryOnDark};
  font-size: ${theme.type.baseFontSize - 1}px;
  font-weight: 700;
  line-height: ${theme.type.baseLineHeight};
  text-transform: uppercase;
`

const sidebarItemBody = props => css`
  padding: 8px 12px 12px;
`

export default {
  sidebar,
  sidebarItem,
  sidebarItemHeader,
  sidebarItemTitle,
  sidebarItemBody
}
