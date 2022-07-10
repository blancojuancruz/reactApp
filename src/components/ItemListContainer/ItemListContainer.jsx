import React from 'react'
import './ItemListContainer.css'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {
  return (
    <section className='productsContainer'>
      <ItemList />
    </section>
  )
}
