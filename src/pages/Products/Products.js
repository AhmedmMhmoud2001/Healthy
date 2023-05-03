import React from 'react'
// import data from '../data'
import {Link} from "react-router-dom";
// import Product from './Product';
import "./products.css"
import {useState, useEffect} from "react"

export const Products = () => {
      const [isLoading, setIsLoading] = useState(true);
      const [data, setData] = useState([]);
      const [categories, setCategory] = useState([]);
      
      const handleFetchProducts =async ( category)=>{
        const response = await fetch(`http://localhost:5000/products/category/${category}`);
        const data = await response.json();
      setData(data);
      console.log(data)
      }
      useEffect(() => {
        const url = `/products`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.log("error in api"));
      }, []);
      useEffect(() => {
        const url = `/categories`;
        
        fetch(url)
          .then((response) => response.json())
          // .then(console.log)
          .then((json) => setCategory(json))
          .catch((error) => console.log("error in api"));
      }, []);

       useEffect(() => {
        if (data.length !== 0) {
          setIsLoading(false);
        }
      }, [data]);
      
  return (
    <div className='Products '>

      <div>
        <div className='tit-Products'>
          <h2>Products</h2>
        </div>
        <div className='filter-products'>

          {categories.map((category)=>(
             <div key={category._id}>
             <button onClick={() => handleFetchProducts(category.title)}>{category.title}</button>
             </div>
          ))}
              
        </div>
        <div className='ProductsProduct'>
           {isLoading ? (
          <h1>
            loading ...
          </h1>
        ) : (
          data.map((product , cat ) => (
              // <Product product ={product} key={product.id}/>
              <div className='Product' product ={product} key={product._id}>
                  <div className='product-img'>
                  <Link to={`/Products/${product._id}`}>
                  <img src={product.img} width="100%" alt={product.title}/>
                  </Link>
                  </div>
                  <div>
                    <h2 className='productname'>{product.title}</h2>
                    <span>{product.category}</span>
                    {/* <span>Rating {product.rating}</span> */}
                    <h2 className='productprice'>{product.price} LE</h2>
                    <div className='buyNow'>
                      <Link to={`/Products/${product._id}`}>More</Link>
                    </div>
                  </div>
                </div>
          ))
        )}
        <div>
          
        </div>
        </div>
      </div>    
    </div>
  )
}
