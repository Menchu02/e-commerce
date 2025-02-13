import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'

export default function Tienda() {
  const [shop, setShop] = useState([]) // en un inicio []vacío

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((data) => data.json())
  //     .then((data) => setShop(data))
  // }, [])

  // const [shop, setShop] = useState([])
  useEffect(() => {
    let mounted = true
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((data) => {
        if (mounted) {
          setShop(data)
        }
      })
    return function cleanup() {
      mounted = false
    }
  }, [])

  //array de dependencias vacío, eso significa que la función de va a cargar una vez se cargue el componente
  return (
    <div>
      <h1 className="shop__h">Todos nuestros artículos</h1>
      <div className="products__row">
        <div className="container">
          {shop.map((post) => {
            return <ProductCard key={post.id} post={post} />
          })}
        </div>
      </div>
    </div>
  )
}
