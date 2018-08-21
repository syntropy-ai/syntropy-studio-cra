import { css } from 'emotion'

const layout = props => css`
  display: flex;
  flex-direction: ${props.direction};
  flew-wrap: ${props.wrap};
  justify-content: ${props.justify};
  align-items: ${props.alignItems};
`

const panel = props => css`
  order: ${props.order};
  flex-grow: ${props.grow || 1};
  flex-shrink: ${props.shrink};
  flex: ${props.flex};
  align-self: ${props.alignSelf};
`

export const layoutStyles = { layout }
export const panelStyles = { panel }
