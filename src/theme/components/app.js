import { css } from 'emotion'
import theme from '../theme'

const root = props => css`
  background: ${theme.app.bgColour};
  color: ${theme.app.textColour};
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main'
    'footer footer';
  grid-template-rows: ${theme.header.height}px 1fr auto;
  grid-template-columns: 240px 1fr;
  height: 100vh;
`

const header = props => css`
  border-bottom: 1px solid ${theme.header.borderColour};
  -webkit-app-region: drag;
  padding-left: 70px;
  grid-area: header;
`

const sidebar = props => css`
  grid-area: sidebar;
  border-right: 1px solid ${theme.sidebar.borderColour};
`

const main = props => css`
  grid-area: main;
`

const footer = props => css`
  grid-area: footer;
  border-top: 1px solid ${theme.colour.borderOnDark};
`

export default { root, header, sidebar, main, footer }
