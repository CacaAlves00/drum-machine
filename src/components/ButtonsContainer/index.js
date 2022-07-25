import React, { useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeVolume, toggleBank, togglePower } from '../../reducers/drum'
import Display from './../Display'
import './styles.scss'

function ButtonsContainer() {

  const powered = useSelector((state) => state.drum.powered)

  const dispatch = useDispatch()

  function handlePowerCheckChange(e) {
    dispatch(togglePower())
  }

  function handleBankCheckChange(e) {
    dispatch(toggleBank())
  }

  function handleVolumeRangeChange(e) {
    const normalizedVolume = e.target.value / 100
    dispatch(changeVolume(normalizedVolume))
  }

  return (
    <Form id="buttons-container" >
      <Form.Check
        type="switch"
        id="power-switch"
        label="Power"
        onChange={handlePowerCheckChange}
        checked={powered ? true : false}
      />

      <Display />

      <Form.Range onChange={handleVolumeRangeChange} />

      <Form.Check
        type="switch"
        label="Bank"
        id="bank-switch"
        onChange={handleBankCheckChange}
      />

    </Form>
  )
}

export default ButtonsContainer