// import React, { useState, useEffect } from 'react'

// export default function Rebajas() {
//   const [offers, setOffers] = useState

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .them((data) => data.json())
//       .them((data) => console.log(data))
//   }, [])

//   return <div>Rebajas</div>
// }
import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'

export default function Rebajas() {
  const [shop, setShop] = useState([])

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

  return (
    <div>
      <h2 className="offers__h">
        ¡Aprovéchate de nuestros últimos articulos! <br />
        Todo por menos de 20€
      </h2>
      <div className="offers__container">
        {shop
          .filter((item) => item.price < 20)
          .map((product) => {
            return <ProductCard key={product.id} post={product} />
          })}
      </div>
    </div>
  )
}
