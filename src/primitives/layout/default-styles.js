import { setStyles } from 'destyle'
import { css } from 'emotion'
import Layout from './layout'
import Panel from './panel'

const layout = props => css`
  display: flex;
  flex-direction: ${props.direction};
  flew-wrap: ${props.wrap};
  justify-content: ${props.justify};
  align-items: ${props.alignItems};
`

const panel = props => css`
  order: ${props.order};
  flex-grow: ${props.grow};
  flex-shrink: ${props.shrink};
  flex: ${props.flex};
  align-self: ${props.alignSelf};
`

setStyles(Layout, { layout })
setStyles(Panel, { panel })
