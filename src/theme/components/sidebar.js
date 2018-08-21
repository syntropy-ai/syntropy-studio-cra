import { css } from 'emotion'
import theme from '../theme'

const panel = props => css`
  background: ${theme.sidebar.bgColour};
  width: 220px;
  height: calc(100vh - ${theme.header.height}px);
  border-right: 1px solid ${theme.sidebar.borderColour};
`

export default { panel }
