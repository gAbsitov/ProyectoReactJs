import React, { createContext, useContext, useState } from "react";

const cartContext = createContext();
export const useCartConstext = () => useContext(cartContext)

export const CartProvider = ({ children }) => {

  const [cartList, setCartList] = useState([])

  const clearCart = () => {
    setCartList([]);
  }

  /*Verifica que el item añadido no se encuentre ya en el carrito, si se encuentra suma la cantidad añadida a la que se encuentra en el carrito y si no simplemente añade el item al carrito*/

  const addItem = (id, amount, book) => {
    const inCart = cartList.find(item => item.id === id)
    if (inCart) {
      const newList = cartList.map(item => {
        if (item.id === id) {
          return {
            ...item, amount: item.amount + amount
          }
        } return item
      })
      setCartList(newList)
    } else {
      setCartList([...cartList, { id, amount, book }])
    }
  }

  //Elimina el item del carrito 

  const subItem = (id) => {
    const newList = cartList.filter(item => item.id !== id)
    setCartList(newList)
  }

  const total = cartList.reduce((total, item) => total + (item.amount * item.book.price),0)
  const totalItems = cartList.reduce((total, item) => total + item.amount,0)


  return (
    <cartContext.Provider value={{ cartList, clearCart, addItem, subItem, total, totalItems}}>
      {children}
    </cartContext.Provider>
  )
}

