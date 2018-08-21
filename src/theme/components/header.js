import { css } from 'emotion'
import theme from '../theme'

const header = props => css`
  text-align: center;
`

const playbackControls = props => css`
  display: inline-block;
  -webkit-app-region: no-drag;
  padding: 5px;
  .mdi-icon {
    cursor: pointer;
    fill: ${theme.iconButton.fillColour};
    width: ${theme.header.height - 10}px;
    height: ${theme.header.height - 10}px;
    &:hover {
      fill: ${theme.iconButton.hoverFillColour};
    }
  }
`

export default { header, playbackControls }
