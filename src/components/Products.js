import React from 'react'
import data from '../data'
import {Link} from "react-router-dom";

export const Products = () => {
    // console.log(data.products)
  return (
    <div className='Products'>
      <div  className='Productsfitter'>

      </div> 
      <div>
        <div>
          <h2>Products</h2>
        </div>
        <div className='ProductsProduct'>
        {data.products.map((product) => (
                <div className='Product' key={product.id}>
                  <Link to={`/Product/${product.id}`}>
                  <div>
                    <img src={product.image} width="100%" alt={product.name}/>
                  </div>
                  <div>
                    <h2 className='productname'>{product.name}</h2>
                    <span>{product.category}</span>
                    <span>Rating {product.rating}</span>
                    <h2 className='productprice'>{product.price} LE</h2>
                    <div>
                      <Link to={`/Cart/${product.id}`} className='buyNow'>Buy Now</Link>
                    </div>
                  </div>
                  </Link>
                  
                </div>
          ))}
        </div>
      </div>    
    </div>
  )
}
