import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './styles.scss'

function Display() {
  
  const [display, setDisplay] = useState('')

  const lastPadTouched = useSelector((state) => state.drum.lastPadTouched)
  const volume = useSelector((state) => state.drum.volume)

  useEffect(() => {
    setDisplay(lastPadTouched)
  }, [lastPadTouched])

  useEffect(() => {
    setDisplay('Volume ' + volume)
  }, [volume])

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