import React from 'react'
import { connect } from 'react-redux'
import { destyle } from 'destyle'
import { actions as metaActions } from 'state/filetree/meta'
import { openProgram } from 'state/program'
import { FileIcon, SettingsIcon } from 'mdi-react'

const File = ({
  itemKey,
  item,
  selectFile,
  openProgram,
  styles
}) => {
  const isConfig =
    item.name.substr(item.name.length - 5) === '.json'
  return (
    <div
      onClick={() => {
        selectFile(itemKey)
        openProgram(item.path)
      }}
      className={styles.file}
    >
      {isConfig ? <SettingsIcon /> : <FileIcon />}
      <span>{item.name}</span>
    </div>
  )
}

const enhance = connect(
  null,
  {
    openProgram,
    selectFile: metaActions.select
  }
)

export default destyle(enhance(File), 'FileTree')
