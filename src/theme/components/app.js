import { css } from 'emotion'
import theme from '../theme'

const app = props => css`
  background: ${theme.app.bgColour};
  color: ${theme.app.textColour};
`

const header = props => css`
  background: ${theme.header.bgColour};
  border-bottom: 1px solid ${theme.header.borderColour};
  -webkit-app-region: drag;
  padding-left: 70px;
  height: ${theme.header.height}px;
`

export default { app, header }
