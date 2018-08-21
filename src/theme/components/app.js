import { setStyles } from 'destyle'
import { css } from 'emotion'
import theme from '../theme'

const app = props => css`
  background: ${theme.app.bgColour};
  color: ${theme.app.textColour};
`

const header = props => css`
  background: ${theme.header.bgColour};
  border-bottom: 1px solid ${theme.header.borderColour};
`

setStyles('App', { app, header })
