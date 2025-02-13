import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ThemeProvider from './components/ThemeProvider/ThemeProvider'
import { CartProvider } from './components/context/CartProvider'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
