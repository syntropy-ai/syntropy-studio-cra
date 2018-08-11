import React from 'react'
import { destyle } from 'destyle'

const Renderer = ({ id, meta = {}, code = '', styles }) => (
  <div className={styles.container}>
    <span>
      {id} - {code.substr(0, 50)}
    </span>
  </div>
)

export default destyle(Renderer)
