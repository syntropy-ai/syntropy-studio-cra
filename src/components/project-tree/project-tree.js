import React from 'react'
import { connect } from 'react-redux'
import Tree from 'primitives/tree'
import File from './file'
import Folder from './folder'

const ProjectTree = ({ filetree }) => (
  <Tree
    itemKey={filetree.root}
    items={filetree.files}
    renderExpandable={Folder}
    renderItem={File}
  />
)

const enhance = connect(({ filetree }) => ({
  filetree
}))

export default enhance(ProjectTree)
