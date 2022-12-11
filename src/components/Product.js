import React from 'react'
import { Link } from 'react-router-dom'
export const Product = () => {
  return (
    
      <div className='showproduct'>
        <div className="jh">
            <img src="https://ahmedmmhmoud2001.github.io/pharmacy-api/img/CATAFLAM.jpg" alt="" />
        </div>
        <div className="col">
                    <h2 className='product_name'>productname</h2>
                    <span></span>
                    <span></span>
                    <h2 className='product_price'> LE</h2>
                    <div>
                      <Link to={"Cart"} className='buyNow'>Buy Now</Link>
                    </div> 
                    <p className="descriptions"></p>
        </div>
      </div>
  )
}
