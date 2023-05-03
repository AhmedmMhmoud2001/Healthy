import React from 'react';
import './Editproduct.css'
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from 'axios';
const Editproduct = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [count, setCount] = useState('');
    const [data,setData]=useState([]);
    const [img, setImg] = useState('');
    const Product = useParams();
      useEffect(() => {
        const url = `/products/${Product.id}`;
        
        fetch(url)
          .then((response) => response.json())
          // .then(console.log)
          .then((json) => {
            setTitle(json.title)
            setCategory(json.category)
            setDescription(json.description)
            setPrice(json.price)
            setCount(json.count)
            setImg(json.img)
        }
        
        )
          .catch((error) => console.log("error in api"));
      }, [Product.id]);

      console.log(price)
      useEffect(() => {
        const url = `/categories`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.log("error in api"));
      }, []);
const submitHandler = async(e,)=>{
    e.preventDefault();
    if (!Product || !Product.id) {
        alert('Invalid product ID');
        return;
      }
      if (!title) {
        alert('Please provide a title');
        return;
      }
      console.log(Product.id)
    try {
        const updatedata ={
            title,
            category,
            description,
            price,
            count,
            img
        }
        console.log(Product.id)
        await axios.put(`http://localhost:5000/products/${Product.id}`, updatedata)
        window.location.reload();
        window.location.href = '/Showallproducts';
    }
    catch (err) {
        alert('error i update');
      }
}




    return (
        <div className='container Editproduct'>
            <h2>Edit Product</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>title</label>
                    <input type={'text'}
                     value={title}                     
                     onChange={(e) => setTitle(e.target.value)}
                     required
                      />
                </div>
                <div>
                    <label>category</label>
                    <select id="category" name="cars" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Choose a category</option>
                        {data.map((cat)=>(
                            <option value={cat.title} key={cat._id}>{cat.title}</option>
                        ))}
                        
                    </select>
                </div>
                <div>
                    <label>description</label>
                    <input type={'text'} value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>price</label>
                    <input type={'number'} value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>count</label>
                    <input type={'number'} value={count}
                    onChange={(e) => setCount(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>imgurl</label>
                    <input type={'url'}
                    value={img}
                    onChange={(e) => setImg(e.target.value)}/>
                </div>
                <input type={'submit'} className='EditProductbtn' value="EditProduct" />
            </form>
        </div>
    );
}

export default Editproduct;