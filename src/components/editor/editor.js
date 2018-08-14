import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
//import 'codemirror/theme/abcdef.css'
import 'codemirror-one-dark-theme/one-dark.css'
import './override.css'
import 'codemirror/mode/javascript/javascript'

const CodeEditor = ({ code }) => (
  <CodeMirror
    value={code}
    options={{
      mode: 'javascript',
      theme: 'one-dark',
      scrollbarStyle: 'null',
      lineWrapping: true
    }}
  />
)

export default CodeEditor
