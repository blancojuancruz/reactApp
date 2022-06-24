import React, { useState, createContext } from 'react'

export const CartContext = createContext([])

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const isInCart = (productID) => !!cart.find(product => product.id === productID)

  const addProduct = (productDetail, count) => {
    if (isInCart(productDetail.id)) {
      setCart(cart.map(product => {
        return product.id === productDetail.id ? { ...product, count: product.count + count } : product
      }))
    } else {
      setCart([...cart, { ...productDetail, count }])
    }
  }

  const cleanCart = () => setCart([])

  const removeProduct = (productID) => setCart(cart.filter(product => product.id !== productID))

  return (
    <div>
      <CartContext.Provider value={{
        addProduct,
        cleanCart,
        isInCart,
        removeProduct
      }}
      >
        {children}
      </CartContext.Provider>
    </div>
  )
}
