import React from 'react'
import { connect } from 'react-redux'
import { destyle } from 'destyle'
import { actions as metaActions } from 'state/filetree/meta'

const File = ({ itemKey, item, selectFile, styles }) => (
  <div
    onClick={() => selectFile(itemKey)}
    className={styles.selected}
  >
    <span>{'file - '}</span>
    <span>{item.name}</span>
  </div>
)

const enhance = connect(
  null,
  {
    selectFile: metaActions.select
  }
)

export default destyle(enhance(File))
