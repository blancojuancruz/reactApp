/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartItem } from './CartItem'
import { CartContext } from '../../Contexts/CartContext'
import { FaCartPlus } from 'react-icons/fa'
import { Button } from '../Buttons/Buttons'
import './Cart.css'

export const Cart = () => {
  const { cart, cleanCart, totalPrice, totalProducts } = useContext(CartContext)

  return (
    <section className='cartItemsContainer'>
      {
        cart.length === 0
          ? (
            <div className='noProductCart'>
              <h4>
                Todavia no hay ningun producto en tu carrito
              </h4>
              <Link to='/'>Ir al shop <FaCartPlus /></Link>
            </div>
            )
          : <>
              {cart.map(product => <CartItem key={product.id} product={product} />)}
              <div className='cartFooter'>
                <div>
                  <h6>
                    Cantidad de productos: {totalProducts()}
                  </h6>
                </div>
                <span>
                  Precio total: {parseFloat(totalPrice())}
                </span>
                <Button className='cleanCart' btnTxt='Limpiar Carrito' event={() => cleanCart()} />
              </div>
            </>
      }
    </section>
  )
}
