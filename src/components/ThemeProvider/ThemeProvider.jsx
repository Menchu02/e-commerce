import React, { useState, useContext } from 'react'

export const ThemeContext = React.createContext()
// 1 crear en contexto
export const ThemeUpdateContext = React.createContext()
//otro contexto para la función toggleThem

export const useTheme = () => {
  return useContext(ThemeContext)
  //HOOK CREADO CON USECONTEXT PARA TRANSMITIR LA INFO DE THEMECONTEXT
}

export const useUpdateTheme = () => {
  return useContext(ThemeUpdateContext)
  //HOOK CREADO CON USECONTEXT PARA TRANSMITIR LA INFO DE TOGGLETHEME
}

export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme)
    // esta función va a recibir prevDarkTheme y va a devolver lo contrario, si es false, devuelve true, y viceversa
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

// export const CartContext = React.createContext()
// export const useCart = () => {
//   return useContext(CartContext)
//   //HOOK CREADO CON USECONTEXT PARA TRANSMITIR LA INFO DE THEMECONTEXT
// }

// export function CartoProvider({ children }) {
//   const [cart, setCart] = useState([])

//   const addToCart = (product) => {
//     setCart((prevCart) => prevCart.push(product))
//     // esta función va a recibir prevDarkTheme y va a devolver lo contrario, si es false, devuelve true, y viceversa
//   }

//   const clearCart = () => setCart([])
//   return (
//     <CartContext.Provider value={{ cart, addToCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   )
// }
