import React, { Component } from 'react'
import { Layout, Panel } from 'primitives/layout'
import Header from 'components/header'
import ProjectTree from 'components/project-tree'
import { BlockList, RendererList } from 'components/blocks'

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
                <div>Layers</div>
                <BlockList />
              </Panel>
              <Panel>
                <div>Renderers</div>
                <RendererList />
              </Panel>
            </Layout>
          </Panel>
        </Layout>
      </div>
    )
  }
}

export default App
