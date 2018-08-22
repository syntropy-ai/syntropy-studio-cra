import { css } from 'emotion'
import theme from '../theme'

const root = ({ direction, numPanes }) => css`
  display: grid;
  height: 100%;
  grid-auto-flow: ${direction};
  ${direction === 'row'
    ? css`
        grid-template-rows: repeat(${numPanes}, 1fr);
      `
    : css`
        grid-template-columns: repeat(${numPanes}, 1fr);
      `};
`

const panel = ({ direction }) => css`
  ${direction === 'row'
    ? css`
        border-top: 1px solid ${theme.colour.borderOnDark};
      `
    : css`
        border-left: 1px solid ${theme.colour.borderOnDark};
      `} &:first-child {
    border: none;
  }
`

const panelHeader = css`
  padding: ${theme.spacing.paddingSm}px
    ${theme.spacing.paddingMd}px 0;
`

const panelTitle = css`
  margin: 0;
  font-size: ${theme.type.baseFontSize - 2}px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${theme.colour.textPrimaryOnDark};
`

export default { root, panel, panelHeader, panelTitle }
