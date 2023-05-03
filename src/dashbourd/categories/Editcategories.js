import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useState} from "react";
import './Dachcategories.css'
import axios from 'axios';
const Editcategories = () => {
    
    const [title, setTitle] = useState("");

    const category = useParams();
    useEffect(() => {
        const url = `/categories/${category.id}`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => setTitle(json.title))
          .catch((error) => console.log("error in api"));
      }, [category.id]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updatedata ={
                title
            }
            await axios.put(`http://localhost:5000/categories/${category.id}`, updatedata)
            window.location.reload();
            window.location.href = '/Dashcategories';
        }
        catch (err) {
            alert('error i update');
          }
      };
    
      const handleTitleChange = (event) => {
        setTitle(event.target.value);
      };
    return (
        <div className='Editcategories'>
            <div>
            <form className='dashcategory-form' onSubmit={handleSubmit}>
              <div>
                <label>Title:</label>
                <input id="Title" type="text" value={title} onChange={handleTitleChange} />
              </div>
              <button type="submit">Update Category</button>
            </form>
            </div>
        </div>
        
    );
}

export default Editcategories;