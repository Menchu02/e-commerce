import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../components/context/CartProvider'
// import { useCartContext } from '../../components/context/CartContext'

export default function SingleProduct() {
  const { addToCart } = useCart()

  const [productInfo, setProductInfo] = useState({
    // image: ' ',
    // title: ' ',
  })
  const { postId } = useParams()

  useEffect(() => {
    let mounted = true
    fetch('https://fakestoreapi.com/products/' + postId)
      .then((data) => data.json())
      .then((data) => {
        if (mounted) {
          setProductInfo(data)
        }
      }, [])
    return function cleanup() {
      mounted = false
    }
  }, [postId])

  const { image, title, description, price } = productInfo

  return (
    <div className="shop-container">
      <div className="image__card">
        <img className="img_card_shop" src={image} alt="producto" />
        <div className="card">
          <h3 className="h_card">Precio : {price} €</h3>
          <h3 className="h_card">Nombre : {title}</h3>
          <h3 className="h_card"> Descripción : {description}</h3>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  )
}
