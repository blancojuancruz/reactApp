import React, { useContext } from 'react'
import { Button } from '../Buttons/Buttons'
import { CartContext } from '../../Contexts/CartContext'
import { MdDelete } from 'react-icons/md'
import './Cart.css'

export const CartItem = ({ product }) => {
  const { removeProduct } = useContext(CartContext)

  return (
    <>
      <div className='cartItem'>
        <div className='titleImgContainer'>
          <h6>
            {product.productName}
          </h6>
          <picture>
            <img src={product.productImg} alt={product.productName} />
          </picture>
        </div>
        <span>Cantidad: {product.count}</span>
        <span>Precio por unidad: {product.productPrice}</span>
        <span>Subtotal: {parseFloat(product.count * product.productPrice)}</span>
        <Button className='removeBtn' btnTxt={<MdDelete />} event={() => removeProduct(product.id)} />
      </div>
    </>
  )
}
