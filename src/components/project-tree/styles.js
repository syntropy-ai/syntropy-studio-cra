import File from './file'
import { setStyles } from 'destyle'
import { css } from 'emotion'

setStyles(File, {
  selected: props => css`
    background-color: ${props.item.selected
      ? '#ff0000'
      : '#eee'};
    &:hover {
      background-color: #00ff00;
    }
  `
})
