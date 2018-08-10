import File from './file'
import { setStyles } from 'destyle'
import { css } from 'emotion'

setStyles(File, {
  selected: ({ meta, itemKey }) => css`
    background-color: ${itemKey === meta.selected
      ? '#ff0000'
      : '#eee'};
    &:hover {
      background-color: #00ff00;
    }
  `
})
