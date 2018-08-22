import { css } from 'emotion'
import theme from '../theme'

const root = props => css`
  border: 1px solid ${theme.colour.borderOnDark};
  margin: ${theme.spacing.paddingMd}px;
  background: ${theme.colour.darkGrey};
`

const header = props => css`
  border-bottom: 1px solid ${theme.colour.borderOnDark};
  padding: ${theme.spacing.paddingMd / 2}px
    ${theme.spacing.paddingMd}px;
`

const title = props => css`
  color: ${theme.colour.textPrimaryOnDark};
  font-weight: 700;
  font-size: ${theme.type.baseFontSize}px;
  margin: 0;
`

const body = props => css`
  min-height: 50px;
`

export default { root, header, title, body }
