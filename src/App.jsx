import React from 'react'
import { Header } from './components/Header/Header'
import { NavBar } from './components/Header/Navbar/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/typeofproduct/:productsType' element={<ItemListContainer />} />
          <Route path='/itemdetail/:productID' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
