import React, { Component } from 'react'
import { Layout, Panel } from 'primitives/layout'
import Header from 'components/header'
import ProjectTree from 'components/project-tree'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout direction="column">
          <Panel>
            <Header />
          </Panel>
          <Panel>
            <Layout direction="row">
              <Panel>
                <ProjectTree />
              </Panel>
              <Panel>
                <div>Workspace</div>
              </Panel>
            </Layout>
          </Panel>
        </Layout>
      </div>
    )
  }
}

export default App
