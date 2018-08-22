import React from 'react'
import { connect } from 'react-redux'
import { destyle } from 'destyle'
import { toggleFolder } from 'state/filetree/index'
import { FolderIcon, FolderOpenIcon } from 'mdi-react'

const Folder = ({
  styles,
  itemKey,
  item,
  toggleFolder
}) => (
  <div
    className={styles.folder}
    onClick={() => toggleFolder(itemKey)}
  >
    <FolderIcon />
    <span>{item.name}</span>
  </div>
)

const enhance = connect(
  null,
  {
    toggleFolder
  }
)

export default destyle(enhance(Folder), 'FileTree')
