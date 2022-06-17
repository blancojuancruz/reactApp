import React from 'react'
import { Link } from 'react-router-dom'
import { Counter } from '../ItemCount/ItemCount'
import './ItemListContainer.css'

export const Product = ({
  productImg,
  productName,
  productPrice,
  stock,
  initialValue,
  id
}) => {
  return (
    <div className='productContainer'>
      <Link to={`/itemdetail/${id}`}>
        <picture>
          <img src={productImg} alt='Product illustration' />
        </picture>
        <h3>{productName}</h3>
      </Link>
      <span>Precio por unidad: ${productPrice}</span>
      <p>Stock Disponible: {stock} unidades</p>
      <Counter initialValue={initialValue} stock={stock} />
    </div>
  )
}
