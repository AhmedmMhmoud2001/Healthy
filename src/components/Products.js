import React from 'react'
// import data from '../data'
import {Link} from "react-router-dom";
// import Product from './Product';
import "./products.css"
import {useState, useEffect} from "react"

export const Products = ({cat,filter,sort}) => {
    // console.log(data.products)
      // console.log(cat)
      const [isLoading, setIsLoading] = useState(true);
      const [data, setData] = useState([]);
    
      useEffect(() => {
        const url = `https://fakestoreapi.com/products`;
        // https://fakestoreapi.com/products
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.log("error in api"));
      }, []);
    
       useEffect(() => {
        if (data.length !== 0) {
          setIsLoading(false);
        }
        // console.log(data)
        
      }, [data]);
  return (
    <div className='Products'>
      <div  className='Productsfitter'>

      </div> 
      <div>
        <div>
          <h2>Products</h2>
        </div>
        <div className='ProductsProduct'>
        {/* {data.products.map((product) => (
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
          ))} */}
           {isLoading ? (
          <h1>
            loading ...
          </h1>
        ) : (
          data.map((product , cat ) => (
              // <Product product ={product} key={product.id}/>
              <div className='Product' product ={product} key={product.id}>
                  <div className='product-img'>
                  <Link to={`/Products/${product.id}`}>
                  <img src={product.image} width="100%" alt={product.title}/>
                  </Link>
                  </div>
                  <div>
                    <h2 className='productname'>{product.title}</h2>
                    <span>{product.category}</span>
                    {/* <span>Rating {product.rating}</span> */}
                    <h2 className='productprice'>{product.price} LE</h2>
                    <div>
                      <Link to={`/Products/${product.id}`} className='buyNow'>More</Link>
                    </div>
                  </div>
                  
                </div>
          ))
        )}
        </div>
      </div>    
    </div>
  )
}
