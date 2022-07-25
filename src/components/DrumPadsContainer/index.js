import React from 'react'
import DrumPad from './../DrumPad'
import { drumPadNames, audios, alternativeAudios } from '../DrumPadsContainer/data'
import './styles.scss'

function index() {
  return (
    <div id="drum-pads-container">{
      drumPadNames.map((pad, idx) =>
        <DrumPad key={pad} name={pad} sound={audios[idx]} alternativeSound={alternativeAudios[idx]} />
      )
    }</div>
  )
}

export default index