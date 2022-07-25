import React from 'react'
import DrumPadsContainer from './../DrumPadsContainer'
import ButtonsContainer from './../ButtonsContainer'
import './styles.scss'

function index() {
  
  return (
    <div id="drum-machine">
      <DrumPadsContainer />
      <ButtonsContainer />
    </div>
  )
}

export default index