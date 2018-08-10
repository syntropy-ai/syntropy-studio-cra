import React from 'react'
import { connect } from 'react-redux'
import Tree from 'primitives/tree'
import File from './file'
import Folder from './folder'

const ProjectTree = ({ filetree: { files, meta } }) => (
  <div>
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

export default enhance(ProjectTree)
