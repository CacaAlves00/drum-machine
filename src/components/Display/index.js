import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './styles.scss'

function Display() {
  
  const [display, setDisplay] = useState('')

  const lastPadTouched = useSelector((state) => state.drum.lastPadTouched)
  const volume = useSelector((state) => state.drum.volume)
  const powered = useSelector((state) => state.drum.powered)

  useEffect(() => {
    if (powered)
      setDisplay(lastPadTouched)
  }, [lastPadTouched])

  useEffect(() => {
    if (powered)
      setDisplay('Volume ' + volume)
  }, [volume])

  useEffect(() => {
    if (!powered)
      setDisplay('')
  }, [powered])

  useEffect(() => {
    setDisplay('')
  }, [])

  return (
    <div id="display">
      {display}
    </div>
  )
}

export default Display