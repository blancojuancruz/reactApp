import React, { useState } from 'react'
import './ItemCount.css'
import { Button } from '../Buttons/Buttons'
import { PlusIcon, NegativeIcon } from '../Buttons/MyIcons/Icons'

export const Counter = ({ stock, initialValue = 0 }) => {
  const [count, setCount] = useState(parseInt(initialValue))

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    setCount(count - 1)
  }

  const handleCleanCart = () => {
    setCount(initialValue)
  }

  const plusIconTest =
    count > initialValue
      ? (
        <NegativeIcon event={handleMinus} />
        )
      : (
        <NegativeIcon className='itemOpacity' />
        )

  const minusIconTest =
    count < stock
      ? (
        <PlusIcon event={handlePlus} />
        )
      : (
        <PlusIcon className='itemOpacity' />
        )

  const trueFalseButton =
    count > initialValue
      ? (
        <Button
          btnTxt='Limpiar carrito'
          className='addToCart hoverEfct'
          event={handleCleanCart}
        />
        )
      : (
        <Button btnTxt='Limpiar carrito' className='addToCart btnDisabled' />
        )

  return (
    <div className='counterContainer'>
      <div className='countSection'>
        {plusIconTest}
        <h6>{count}</h6>
        {minusIconTest}
      </div>
      <div className='keypadCont'>
        <Button btnTxt='Añadir cantidad' className='addToCart hoverEfct' />
        {trueFalseButton}
      </div>
    </div>
  )
}