import React, { useState } from 'react'
import { Counter } from '../ItemCount/ItemCount'
import { Button } from '../Buttons/Buttons'
import { Link } from 'react-router-dom'
import './ItemDetailContainer.css'

export const ItemDetail = ({ productDetail }) => {
  const [buyProduct, setBuyProduct] = useState(false)

  const addToCart = () => {
    setBuyProduct(true)
  }

  return (
    <section className='productDetailContainer'>
      <picture>
        <img src={productDetail.productImg} alt='Product illustration' />
      </picture>
      <div className='descriptionContainer'>
        <h2>{productDetail.productName}</h2>
        <span>Precio por unidad: ${productDetail.productPrice}</span>
        <p>Stock Disponible: {productDetail.stock} unidades</p>
        {buyProduct
          ? <><Link to='/clientCart'><Button btnTxt='Terminar mi compra' className='buyButton' /></Link><Link to='/'><Button btnTxt='Seguir comprando' className='buyButton' /></Link></>
          : <Counter
              initialValue={0}
              stock={productDetail.stock}
              addToCart={addToCart}
            />}
      </div>
    </section>
  )
}
