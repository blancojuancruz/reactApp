import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { Spinner } from '../Buttons/MySpinner/Spinner'
import { getDataBase } from '../../Services/Firebase/FirebaseInit'
import { doc, getDoc } from 'firebase/firestore'
import { useLoading } from '../../Hooks/LoadingHook'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const { isLoading, showLoading, hideLoading } = useLoading()

  const { productID } = useParams()

  // firebase doc conection
  const dataBaseDoc = doc(getDataBase, 'products', productID)

  useEffect(() => {
    showLoading()
    const getProducById = async () => {
      await getDoc(dataBaseDoc).then(detail => setProductDetail({ id: detail.id, ...detail.data() }))
      hideLoading()
    }

    getProducById()
  }, [productID])

  return isLoading ? <Spinner /> : <ItemDetail productDetail={productDetail} />
}
