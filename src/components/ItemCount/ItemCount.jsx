import React, { useState } from 'react'
import { Button } from '../Buttons/Buttons'
import { PlusIcon, NegativeIcon } from '../Buttons/MyIcons/Icons'
import './ItemCount.css'

export const Counter = ({ stock, initialValue, addToCart }) => {
  const [count, setCount] = useState(initialValue)

  const plusIcon =
    count > initialValue
      ? (
        <NegativeIcon event={() => { setCount(prevCount => prevCount - 1) }} />
        )
      : (
        <NegativeIcon className='itemOpacity' />
        )

  const minusIcon =
    count < stock
      ? (
        <PlusIcon event={() => { setCount(prevCount => prevCount + 1) }} />
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
          event={() => { setCount(initialValue) }}
        />
        )
      : (
        <Button btnTxt='Limpiar carrito' className='addToCart btnDisabled' />
        )

  return (
    <div className='counterContainer'>
      <div className='countSection'>
        {plusIcon}
        <h6>{count}</h6>
        {minusIcon}
      </div>
      <div className='keypadCont'>
        {trueFalseButton}
      </div>
      {count > 0 ? <Button className='buyButton' btnTxt='Añadir al carrito' event={() => addToCart(count)} /> : <Button className='buyButton btnDisabled' btnTxt='Añadir al carrito' />}
    </div>
  )
}
