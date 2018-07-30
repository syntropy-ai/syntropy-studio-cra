import React from 'react'
import { connect } from 'react-redux'
import { selectFile } from 'state/filetree'

const File = ({ itemKey, item, selectFile }) => (
  <div onClick={() => selectFile(itemKey)}>
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

export default enhance(File)
