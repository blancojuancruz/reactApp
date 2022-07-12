import React from 'react'
import { ItemList } from './ItemList'
import './ItemListContainer.css'

export const ItemListContainer = () => {
  return (
    <section className='productsContainer'>
      <ItemList />
    </section>
  )
}
