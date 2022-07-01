/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { Product } from './Item'
import { Spinner } from '../Buttons/MySpinner/Spinner'
import { getDataBase } from '../../Services/Firebase/FirebaseInit'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const ItemList = () => {
  const [products, setMyProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { productsType } = useParams()

  // firebase conection
  const dbCollection = collection(getDataBase, 'products')

  useEffect(() => {
    setIsLoading(true)
    const getProducts = async () => {
      if (productsType) {
        const filter = query(dbCollection, where('type', '==', productsType))
        await getDocs(filter).then((products) => {
          setMyProducts(products.docs.map(product => ({ id: product.id, ...product.data() })))
          setIsLoading(false)
        })
      } else {
        await getDocs(dbCollection).then((products) => {
          setMyProducts(products.docs.map(product => ({ id: product.id, ...product.data() })))
          setIsLoading(false)
        })
      }
    }

    getProducts()
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
