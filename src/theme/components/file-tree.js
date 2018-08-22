import { css } from 'emotion'
import theme from '../theme'

const levels = new Array(100)

const filetree = props => css`
  margin: 0 -${theme.spacing.paddingMd}px;
`

const item = ({ meta, itemKey, level }) => css`
  font-size: ${theme.type.baseFontSize}px;
  white-space: nowrap;
  line-height: ${theme.type.baseLineHeight};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${theme.spacing.paddingMd}px 0
    ${theme.spacing.paddingMd + level * 10}px;
  cursor: pointer;
  .mdi-icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  span {
  }
  /* Hover */
  &:hover {
    color: ${theme.colour.textPrimaryOnDark};
  }
  /* Selected */
  ${itemKey === meta.selected &&
    `
    background-color: rgba(0,0,0,0.5);
    color: ${theme.colour.textPrimaryOnDark};
    .mdi-icon {
      fill: ${theme.colour.primaryOnDark};
    }
  `};
`

const folder = props => css`
  ${item(props)};
`

const file = props => css`
  ${item(props)};
`

export default { filetree, folder, file }
