import React from 'react'
import { useCart } from '../../components/context/CartProvider'

export default function Carrito() {
  const { cart } = useCart()
  // console.log(cart)
  return (
    <div>
      <h2 className="title__cart">Productos a pagar</h2>
      {cart.map((item) => {
        return (
          <div className="product__cart" key={item.id}>
            <img className="img__cart" src={item.image} alt={item.title} />
            <h3 className="cart__p">{item.title}</h3>
            <h3 className="cart__p">{item.price} €</h3>
            <button>Eliminar</button>
          </div>
        )
      })}
    </div>
  )
}
