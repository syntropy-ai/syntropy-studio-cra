import React from 'react'
import { connect } from 'react-redux'
import { destyle } from 'destyle'
import { actions as metaActions } from 'state/filetree/meta'
import { openExperiment } from 'state/experiment'

const File = ({
  itemKey,
  item,
  selectFile,
  openExperiment,
  styles
}) => (
  <div
    onClick={() => {
      selectFile(itemKey)
      openExperiment(item.path)
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
    openExperiment,
    selectFile: metaActions.select
  }
)

export default destyle(enhance(File))
