import React from 'react'

export const Product = () => {
  return (
    <>
      <div className="col">
          <img src="" alt="" />
      </div>
      <div className="col">
          <h2>product.title</h2>
          <span>product.category</span>
          <p>Rating product.rating && product.rating.rate</p>
          <p>product.description</p>
          <h1>$ product.price</h1>
          <button className='add'> Add to Cart</button>
      </div>
    </>
  )
}
