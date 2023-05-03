import React ,{useEffect,useState}from 'react';
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";
import './ShowProduct.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFilePen} from '@fortawesome/free-solid-svg-icons'
const Showallproducts = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');
  const [img, setImg] = useState('');
  const [datacat,setDatacat]=useState([]);
   let i=0;
    const [data, setData] = useState([]);

    const submitHandler = async(e,)=>{
      e.preventDefault();
      try {
          const updatedata ={
              title,
              category,
              description,
              price,
              count,
              img
          }
          await axios.post(`http://localhost:5000/products/`, updatedata)
          window.location.reload();
      }
      catch (err) {
          alert('error i update');
        }
  }
  useEffect(() => {
    const url = `/categories`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setDatacat(json))
      .catch((error) => console.log("error in api"));
  }, []);



    useEffect(() => {
      const url = `/products`;
     
      fetch(url)
        .then((response) => response.json())
        // .then(console.log)
        .then((json) => setData(json))
        .catch((error) => console.log("error in api"));
    }, []);



    const deleteHandler = async (product) => {
        if (window.confirm('Are you sure to delete?')) {
          try {
            await axios.delete(`http://localhost:5000/products/${product._id}`, product);
            alert('product deleted successfully');
            window.location.reload();
          } catch (err) {
            alert('product');
          }
        }
      };
    return (
        <div className='Showallproducts container'>
          <div className='addProduct'>
                <h2>addproduct</h2>
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
                    {console.log(category)}
                    <select id="category" name="categories" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Choose a category</option>
                        {datacat.map((cat)=>(
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
                {/* {data.img.map((image)=>(
                    <img src={image} alt="imgt itle"/>
                ))} */}
                <div>
                    <label>imgurl</label>
                    <input type={'url'}
                    value={img}
                    onChange={(e) => setImg(e.target.value)}/>
                </div>
                <input type={'submit'} className='addProductbtn' value="add Product" />
            </form>
            </div>
            <div>
            <h2>Show All Products</h2>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>img</th>
          <th>title</th>
          <th>category</th>
          <th>price</th>
          <th>count</th>
          <th>Edit</th>
          <th>delet</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product)=>(
                <tr key={product._id}>
                <td>{++i}</td>
                <td>
                    <img className='product-img-dashbourd' src={product.img} alt={product.img}/>
                </td>
                <td className='product-title'>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price} EL</td>
                <td>{product.count}</td>
                <td className='faFilePen'>
                
                <Link to={`/Showallproducts/${product._id}`}>
                <FontAwesomeIcon  icon={faFilePen}></FontAwesomeIcon>
                </Link>

                </td>
                <td className='faTrash' onClick={() => deleteHandler(product)}>
                <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
                </td>
              </tr>
        ))}
        
      </tbody>
            </Table>
            </div>
        </div>
    );
}

export default Showallproducts;