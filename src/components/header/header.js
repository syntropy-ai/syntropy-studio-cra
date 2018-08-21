import React from 'react'
import { connect } from 'react-redux'
import { destyle } from 'destyle'
import { PlayIcon, StopIcon, SkipNextIcon } from 'mdi-react'
import { actions as controlActions } from 'state/program/control'

const Header = ({ playPause, styles }) => (
  <div className={styles.header}>
    <div className={styles.playbackControls}>
      <StopIcon />
      <PlayIcon onClick={playPause} />
      <SkipNextIcon />
    </div>
  </div>
)

const enhance = connect(
  null,
  {
    playPause: controlActions.playPause
  }
)

export default destyle(enhance(Header), 'Header')
