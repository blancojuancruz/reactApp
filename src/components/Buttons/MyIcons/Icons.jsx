/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */

import React, { useContext } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import { CartContext } from '../../../Contexts/CartContext'

export const CartWidget = () => {
  const { cart, totalProducts } = useContext(CartContext)

  return (
    cart.length === 0
      ? <div className='cartIconOpacity'><BsCartFill /></div>
      : <div className='cartIcon'><BsCartFill />
        <span>{totalProducts()}</span>
        </div>
  )
}

export const PlusIcon = ({ className, event }) => {
  return (
    <span className={className} onClick={event}>
      <FaPlusSquare />
    </span>
  )
}

export const NegativeIcon = ({ className, event }) => {
  return (
    <span>
      <FaMinusSquare className={className} onClick={event} />
    </span>
  )
}
