import React ,{useEffect,useState}from 'react';
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFilePen} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import './Dachcategories.css'
const Dashcategories = () => {
    const [title, setTitle] = useState("");
    const [data,setData] = useState([])
    let i=0;
    useEffect(() => {
      const url = `/categories`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log("error in api"));
    }, []);

  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData ={
        title
      };
      try{
      const res =await axios.post("http://localhost:5000/categories",formData)
      console.log(res)
      window.location.reload();
      }catch(err){
        console.log(err)
      }
    };
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const deleteHandler = async (category) => {
      if (window.confirm('Are you sure to delete?')) {
        try {
          await axios.delete(`http://localhost:5000/categories/${category._id}`, category);
          alert('product deleted successfully');
          window.location.reload();
        } catch (err) {
          alert('product');
        }
      }
    };
    return (
        <div className='Dashcategories container'>
          {/* form to add category */}
            <div>
            <form className='dashcategory-form' onSubmit={handleSubmit}>
              <div>
                <label>Title:</label>
                <input id="Title" type="text" value={title}  onChange={handleTitleChange} />
              </div>
              <button type="submit">Add Category</button>
            </form>
            </div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>Edit</th>
          <th>delet</th>
        </tr>
      </thead>
      <tbody>
      {data.map((category)=>(
          <tr key={category._id} >
          <td>{i++}</td>
          {/* <td>
              <img src={category.img} alt=""/>
          </td> */}
          <td>{category.title}</td> 
          <td className='faFilePen'>
          <Link to={`/Dashcategories/${category._id}`}>
           <FontAwesomeIcon  icon={faFilePen}></FontAwesomeIcon>
           </Link>
           </td>
          <td className='faTrash' onClick={() => deleteHandler(category)}>
          <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
          </td>
          </tr> 
          
          ))}
        
      </tbody>
            </Table>

            
        </div>
    );
}

export default Dashcategories;