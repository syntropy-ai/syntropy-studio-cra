import { setStyles } from 'styler'
import { css } from 'emotion'

const selected = css`
  background-color: #ff0000;
`

const regular = css`
  background-color: #eee;
  &:hover {
    background-color: #0000ff;
  }
`

setStyles('tree-file', {
  selected: props =>
    props.item && props.item.selected ? selected : regular
})
