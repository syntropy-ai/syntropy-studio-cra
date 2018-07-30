import React from 'react'
import { connect } from 'react-redux'
import { styler } from 'styler'
import { selectFile } from 'state/filetree'

const File = ({ itemKey, item, selectFile, styles }) => (
  <div
    onClick={() => selectFile(itemKey)}
    className={styles.selected}
  >
    <span>{'file-'}</span>
    <span>{item.name}</span>
  </div>
)

const enhance = connect(
  null,
  {
    selectFile
  }
)

export default enhance(styler(File, 'tree-file'))
