import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Editspecialties = () => {
    
    const [title, setTitle] = useState("");
    const [img,setImgurl] = useState("")
    const specialty = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/specialties/${specialty.id}`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => {setTitle(json.title)
            setImgurl(json.img)})
          .catch((error) => console.log("error in api"));
      }, [specialty.id]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updatedata ={
                title,
                img
            }
            await axios.put(`http://localhost:5000/specialties/${specialty.id}`, updatedata)
            window.location.reload();
            window.location.href = '/Dashspecialties';
        }
        catch (err) {
            alert('error i update');
          }
      };
    
      const handleTitleChange = (event) => {
        setTitle(event.target.value);
      };
      const handleImgurlChange = (event) => {
        setImgurl(event.target.value);
      };
    return (
        <div>
           <div className='Editcategories'>
            <div>
            <form className='dashcategory-form' onSubmit={handleSubmit}>
              <div>
                <label>Title:</label>
                <input id="Title" type="text" value={title} onChange={handleTitleChange} />
              </div>
              <div>
                <label>Img Url:</label>
                <input id="img" type="url" value={img}  onChange={handleImgurlChange} />
              </div>
              <button type="submit">Update specialty</button>
            </form>
            </div>
        </div>
        </div>
    );
}

export default Editspecialties;