import React from 'react'

export const Products = () => {
  return (
    <div>
       <div className="card">
          <div className="card-header">
              <img src="" alt="" />
          </div>
          <div className="card-body">
              <h3 className="title">product.title.substring(0, 15)..</h3>
              <div className="other">
                  <span>Rate: product.rating.rate</span>
                  <span>$product.price</span>
              </div>
          </div>
          <div className="card-footer">
             
          </div>
      </div>
    </div>
  )
}
