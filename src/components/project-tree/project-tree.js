import React from 'react'
import { connect } from 'react-redux'
import { destyle } from 'destyle'
import Tree from 'primitives/tree'
import File from './file'
import Folder from './folder'

const ProjectTree = ({
  styles,
  filetree: { files, meta }
}) => (
  <div className={styles.filetree}>
    {meta.root && (
      <Tree
        itemKey={meta.root}
        items={files}
        meta={meta}
        renderExpandable={Folder}
        renderItem={File}
      />
    )}
  </div>
)

const enhance = connect(({ filetree }) => ({
  filetree
}))

export default destyle(enhance(ProjectTree), 'FileTree')
