import { css } from 'emotion'
import theme from '../theme'

const root = props => css`
  background: ${theme.app.bgColour};
  color: ${theme.app.textColour};
  display: grid;
  grid-template-rows: [screen-top] ${theme.header.height}px [header-bottom] 1fr [main-bottom] auto [screen-bottom];
  grid-template-columns: [screen-left] 240px [sidebar-right] 1fr [screen-right];
  height: 100vh;
`

const header = props => css`
  border-bottom: 1px solid ${theme.header.borderColour};
  -webkit-app-region: drag;
  padding-left: 70px;
  grid-area: screen-top / screen-left / header-bottom /
    screen-right;
`

const sidebar = props => css`
  grid-area: header-bottom / screen-left / main-bottom /
    sidebar-right;
  border-right: 1px solid ${theme.sidebar.borderColour};
`

const main = props => css``

const footer = props => css`
  border-top: 1px solid ${theme.colour.borderOnDark};
  grid-area: main-bottom / screen-left / screen-bottom /
    screen-right;
`

export default { root, header, sidebar, main, footer }
