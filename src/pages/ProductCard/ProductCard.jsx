import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ post: { id, title, image, price } }) {
  return (
    <Link className="none" to={`/singleProduct/${id}`}>
      <div className="post-container">
        <img className="img__card__shop" src={image} alt="producto" />
        <h3 className="img__card__shop__h">{title} </h3>
        <h3 className="img__card__shop__h">Precio: {price} €</h3>
      </div>
    </Link>
  )
}
