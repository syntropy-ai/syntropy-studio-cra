import React from 'react'
import { connect } from 'react-redux'
import Tree from 'primitives/tree'
import File from './file'
import Folder from './folder'

const ProjectTree = ({ filetree: { root, files } }) => (
  <div>
    {root && (
      <Tree
        itemKey={root}
        items={files}
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
