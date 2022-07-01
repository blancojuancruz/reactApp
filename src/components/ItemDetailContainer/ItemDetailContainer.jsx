import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { Spinner } from '../Buttons/MySpinner/Spinner'
import { getDataBase } from '../../Services/Firebase/FirebaseInit'
import { doc, getDoc } from 'firebase/firestore'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const { productID } = useParams()

  // picking products by id
  const dataBaseDoc = doc(getDataBase, 'products', productID)

  useEffect(() => {
    setIsLoading(true)
    const getProducById = async () => {
      await getDoc(dataBaseDoc).then(detail => setProductDetail({ id: detail.id, ...detail.data() }))
      setIsLoading(false)
    }

    getProducById()
  }, [productID])

  return isLoading ? <Spinner /> : <ItemDetail productDetail={productDetail} />
}
