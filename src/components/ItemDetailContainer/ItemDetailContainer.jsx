import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
// import { getProducts } from '../../Services/getProducts'
import { Spinner } from '../Buttons/MySpinner/Spinner'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const { productID } = useParams()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      const getDataBase = getFirestore()
      const dataBaseDoc = doc(getDataBase, 'products', productID)
      getDoc(dataBaseDoc).then(detail => setProductDetail({ id: detail.id, ...detail.data() }))
    }, 1000)
  }, [productID])

  return isLoading ? <Spinner /> : <ItemDetail productDetail={productDetail} />
}
