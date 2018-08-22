import React, { Component } from 'react'
import { destyle } from 'destyle'
import Header from 'components/header'
import Sidebar from 'components/sidebar'
import WorkSpace from 'components/workspace'

class App extends Component {
  render() {
    const { styles } = this.props
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main}>
          <WorkSpace numPanes={2} direction="column" />
        </div>
        <div className={styles.footer}>
          <div>Status bar</div>
        </div>
      </div>
    )
  }
}

export default destyle(App, 'AppLayout')
