import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import { MdDelete } from 'react-icons/md'

import { Button } from '../Buttons/Buttons'
import './Cart.css'

export const Cart = () => {
  const { removeProduct, cleanCart } = useContext(CartContext)

  return (
    <>
      <Button className='removeBtn' btnTxt={<MdDelete />} event={removeProduct} />
      <Button className='cleanCart' btnTxt='Limpiar Carrito' event={cleanCart} />
    </>
  )
}
