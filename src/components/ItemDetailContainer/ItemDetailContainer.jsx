import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { getProducts } from '../Services/getProducts'
import { Spinner } from '../Buttons/MySpinner/Spinner'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const { productID } = useParams()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      getProducts().then((detail) =>
        setProductDetail(detail.find((product) => product.id === productID))
      )
    }, 3000)
  }, [productID])

  return isLoading ? <Spinner /> : <ItemDetail productDetail={productDetail} />
}
