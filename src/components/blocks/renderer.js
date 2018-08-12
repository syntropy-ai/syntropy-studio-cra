import React from 'react'
import { destyle } from 'destyle'
import { CodeEditor } from 'components/editor'

const Renderer = ({ id, meta = {}, code = '', styles }) => (
  <div className={styles.container}>
    <span>{id}</span>
    <CodeEditor code={code} />
  </div>
)

export default destyle(Renderer)
