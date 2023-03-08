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
      let more_less="More";
    const more_less_products = ()=>{
       more_less="Moreeeeeeeee";
    }
      useEffect(() => {
        const url = `https://fakestoreapi.com/products`;
        // https://fakestoreapi.com/products=========/Products
        // https://dummyjson.com/products
        fetch(url)
          .then((response) => response.json())
          // .then(console.log)
          .then((json) => setData(json))
          .catch((error) => console.log("error in api"));
      }, []);
       useEffect(() => {
        if (data.length !== 0) {
          setIsLoading(false);
        }
      }, [data]);
      const limetproduct =[]
      
     
      for (let i=0 ;i<16;i++){
        
        limetproduct.push(data[i])
      }
      console.log(limetproduct)
  return (
    <div className='Products'>

      <div>
        <div className='tit-Products'>
          <h2>Products</h2>
        </div>
        <div className='filter-products'>
              <div>
                    <button>all</button>
             </div>
             <div>
                   <button>
                   men's clothing
                   </button>
             </div>
             <div>
                   <button>
                   jewelery
                   </button>
             </div>
             <div>
                   <button>
                   electronics
                   </button>
             </div>
             <div>
                    <button>women's clothing</button>
             </div>
             
        </div>
        <div className='ProductsProduct'>
           {isLoading ? (
          <h1>
            loading ...
          </h1>
        ) : (
          limetproduct.map((product , cat ) => (
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
        <div>
          
        </div>
        </div>
      </div>    
    </div>
  )
}
