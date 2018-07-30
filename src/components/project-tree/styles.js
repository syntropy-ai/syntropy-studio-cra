import { setStyles } from 'styler'
import { css } from 'emotion'

const selected = css`
  background-color: #ff0000;
`

setStyles('tree-file', {
  selected: props =>
    props.item && props.item.selected ? selected : undefined
})
