import React from 'react'
import { Link } from 'react-router-dom'
import './ItemListContainer.css'

export const Product = ({
  productImg,
  productName,
  id
}) => {
  return (
    <article className='productContainer'>
      <Link to={`/itemdetail/${id}`}>
        <picture>
          <img src={productImg} alt={productName} />
        </picture>
        <h3>{productName}</h3>
      </Link>
    </article>
  )
}
