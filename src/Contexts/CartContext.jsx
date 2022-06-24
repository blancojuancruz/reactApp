import React, { useState, createContext } from 'react'

export const CartContext = createContext([])

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const isInCart = (productID) => !!cart.find(product => product.id === productID)

  const addProduct = (productSelected, count) => {
    if (isInCart(productSelected.id)) {
      setCart(cart.map(product => {
        return product.id === productSelected.id ? { ...product, count: product.count + count } : product
      }))
    } else {
      setCart([...cart, { ...productSelected, count }])
    }
  }

  const cleanCart = () => setCart([])

  const removeProduct = (productID) => setCart(cart.filter(product => product.id !== productID))

  return (
    <div>
      <CartContext.Provider value={{ addProduct, cleanCart, isInCart, removeProduct }}>
        {children}
      </CartContext.Provider>
    </div>
  )
}
