import React from 'react'
import { Header } from './components/Header/Header'
import { NavBar } from './components/Header/Navbar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart } from './components/Cart/Cart'

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
          <Route path='/clientCart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
