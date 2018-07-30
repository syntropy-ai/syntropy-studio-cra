import React, { Component } from 'react'
import ProjectTree from 'components/project-tree'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Syntropy Studio</h1>
        </header>
        <ProjectTree />
      </div>
    )
  }
}

export default App
