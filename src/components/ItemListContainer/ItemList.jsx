/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { Product } from './Item'
import { Spinner } from '../Buttons/MySpinner/Spinner'
import { getProducts } from '../Services/getProducts'

export const ItemList = () => {
  const [products, setMyProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { productsType } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getProducts().then((data) => {
      setIsLoading(false)
      productsType ? setMyProducts(data.filter(product => product.type === productsType)) : setMyProducts(data)
    })
  }, [productsType])

  const showRebateProduct = products
    .filter((product) => product.rebate)
    .map((product) => <Product key={product.id} {...product} />)

  const noRebateProduct = products
    .filter((product) => product.rebate === false)
    .map((product) => <Product key={product.id} {...product} />)

  return isLoading
    ? (
      <Spinner />
      )
    : (productsType
        ? <div>
          <div className='itemListTypeContainer'>{[showRebateProduct, noRebateProduct]}</div>
        </div>
        : <div>
          <h2>¡Aprovecha nuestros productos con descuento!</h2>
          <div className='itemListContainer'>{showRebateProduct}</div>
          <h2>Productos sin descuento</h2>
          <div className='itemListContainer'>{noRebateProduct}</div>
        </div>
      )
}
