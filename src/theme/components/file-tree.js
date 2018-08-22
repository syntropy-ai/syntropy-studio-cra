import { css } from 'emotion'
import theme from '../theme'

const item = css`
  font-size: ${theme.type.baseFontSize}px;
  white-space: nowrap;
  line-height: ${theme.type.baseLineHeight};
  .mdi-icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    display: inline-block;
    vertical-align: baseline;
    position: relative;
    top: 2px;
  }
`

const filetree = props => css``

const folder = props => css`
  ${item};
`

const file = props => css`
  ${item};
`

export default { filetree, folder, file }
