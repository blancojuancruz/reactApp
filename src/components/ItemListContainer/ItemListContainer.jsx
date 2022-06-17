import React from 'react'
import './ItemListContainer.css'
import '../../App.css'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {
  return (
    <section className='productsContainer'>
      <ItemList />
    </section>
  )
}
