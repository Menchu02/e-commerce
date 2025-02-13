// import React, { useState, useContext } from 'react'

// export const MyCartContext = React.createContext()

// // CUSTOMHOOK
// export const useCartContext = () => {
//   return useContext(MyCartContext)
// //   ME DEVUELVE EL USECONTEXT CON EL CONTEXTO
// }

// export default function CartContext({ children }) {
//   const [cartItems, setCartItems] = useState([])

//   const store = {
//     //   objeto donde meto cartItems y setVartItems, para añadirlo en value
//     cartItems,
//     setCartItems,
//   }
//   return (
//     <MyCartContext.Provider value={store}>{children}</MyCartContext.Provider>
//     // .provider para devolver los valorees
//   )
// }
import React, { useState, useContext } from 'react'
export const CartContext = React.createContext()

// CUSTOMHOOK
export const useCart = () => {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const clearCart = () => setCart([])
  return (
    //estados
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
