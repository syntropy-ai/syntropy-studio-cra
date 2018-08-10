import React from 'react'
import { connect } from 'react-redux'
import { toggleFolder } from 'state/filetree/index'

const Folder = ({ itemKey, item, toggleFolder }) => (
  <div onClick={() => toggleFolder(itemKey)}>
    <span>{'folder-'}</span>
    <span>{item.name}</span>
  </div>
)

const enhance = connect(
  null,
  {
    toggleFolder
  }
)

export default enhance(Folder)
