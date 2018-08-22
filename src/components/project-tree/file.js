import React from 'react'
import { connect } from 'react-redux'
import { destyle } from 'destyle'
import { actions as metaActions } from 'state/filetree/meta'
import { openProgram } from 'state/program'

const File = ({
  itemKey,
  item,
  selectFile,
  openProgram,
  styles
}) => (
  <div
    onClick={() => {
      selectFile(itemKey)
      openProgram(item.path)
    }}
    className={styles.selected}
  >
    <span>{'file - '}</span>
    <span>{item.name}</span>
  </div>
)

const enhance = connect(
  null,
  {
    openProgram,
    selectFile: metaActions.select
  }
)

export default destyle(enhance(File), 'filetree-file')
