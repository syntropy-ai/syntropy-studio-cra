import React, { Component } from 'react'
import { Layout, Panel } from 'primitives/layout'
import { destyle } from 'destyle'
import Header from 'components/header'
import ProjectTree from 'components/project-tree'
import { BlockList, RendererList } from 'components/blocks'

class App extends Component {
  render() {
    const { styles } = this.props
    return (
      <div className={styles.app}>
        <Layout direction="column">
          <Panel order="0">
            <div className={styles.header}>
              <Header />
            </div>
          </Panel>
          <Panel>
            <Layout direction="row">
              <Panel destyleName="Sidebar">
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

export default destyle(App, 'App')
