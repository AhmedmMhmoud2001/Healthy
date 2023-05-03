import React ,{useState,useEffect}from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFilePen} from '@fortawesome/free-solid-svg-icons'
import './Dashspialties.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Dashspecialties = () => {
const [data,setData]= useState([])
const [title, setTitle] = useState("");
const [img,setImgurl] = useState("")

let i=0;
useEffect(() => {
  const url = `http://localhost:5000/specialties`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.log("error in api"));
}, []);

const deleteHandler = async (specialty) => {
  if (window.confirm('Are you sure to delete?')) {
    try {
      await axios.delete(`http://localhost:5000/specialties/${specialty._id}`, specialty);
      alert('specialty deleted successfully');
      window.location.reload();
    } catch (err) {
      alert('specialty deleted  faild');
    }
  }
};
const handleSubmit = async (event) => {
  event.preventDefault();
  const formData ={
    title,
    img
  };
  try{
  const res =await axios.post("http://localhost:5000/specialties",formData)
  console.log(res)
  window.location.reload();
  }catch(err){
    console.log(err)
  }
};
const handleTitleChange = (event) => {
  setTitle(event.target.value);
};
const handleImgurlChange = (event) => {
  setImgurl(event.target.value);
};

    return (
        <div className='Dashspialties'>
          <div>
            <form className='dashcategory-form' onSubmit={handleSubmit}>
              <div>
                <label>Title:</label>
                <input id="Title" type="text" value={title}  onChange={handleTitleChange} />
              </div>
              <div>
                <label>Img Url:</label>
                <input id="img" type="url" value={img}  onChange={handleImgurlChange} />
              </div>
              <button type="submit">Add Category</button>
            </form>
            </div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>img</th>
      <th>title</th>
      <th>Edit</th>
      <th>delet</th>
      
    </tr>
  </thead>
  <tbody>
     {data.map((specialty)=>(
               <tr key={specialty._id}>
               <td>{++i}</td>
               <td className='imgSpecialty'>
                   <img src= {specialty.img} alt={specialty.title}/>
               </td>
               <td>{specialty.title}</td>
               <td className='faFilePen'>
               <Link to={`/Dashspecialties/${specialty._id}`}>
                <FontAwesomeIcon  icon={faFilePen}></FontAwesomeIcon>
               </Link>
               
               </td>
               <td className='faTrash' onClick={() => deleteHandler(specialty)}>
               <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
               </td>
             </tr>
     )
     )}
    
  </tbody>
        </Table>
    </div>
    );
}

export default Dashspecialties;