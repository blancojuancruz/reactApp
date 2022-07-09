import React from 'react'
import { Button } from '../Buttons/Buttons'
import { useCartContext } from '../../Hooks/CartContextHook'
import { MdDelete } from 'react-icons/md'
import './Cart.css'

export const CartItem = ({ product }) => {
  const { removeProduct } = useCartContext()

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
        <span>Precio por unidad: ${product.productPrice}</span>
        <span>Subtotal: ${product.count * product.productPrice}</span>
        <Button className='removeBtn' btnTxt={<MdDelete />} event={() => removeProduct(product.id)} />
      </div>
    </>
  )
}
