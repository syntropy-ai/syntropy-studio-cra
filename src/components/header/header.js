import React from 'react'
import { connect } from 'react-redux'
import PlayBoxOutlineIcon from 'mdi-react/PlayBoxOutlineIcon'
import { actions as controlActions } from 'state/program/control'

const Header = ({ playPause }) => (
  <div>
    <PlayBoxOutlineIcon onClick={playPause} />
  </div>
)

const enhance = connect(
  null,
  {
    playPause: controlActions.playPause
  }
)

export default enhance(Header)
