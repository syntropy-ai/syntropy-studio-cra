import { addStyles } from 'destyle'
import { css } from 'emotion'

addStyles('filetree-file', {
  selected: ({ meta, itemKey }) => css`
    background-color: ${itemKey === meta.selected
      ? '#ff0000'
      : '#eee'};
    &:hover {
      background-color: #00ff00;
    }
  `
})

addStyles('filetree-file', {
  selected: css`
    background-color: #0000ff;
  `
})
