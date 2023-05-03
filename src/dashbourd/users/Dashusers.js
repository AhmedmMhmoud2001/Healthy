import React ,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFilePen} from '@fortawesome/free-solid-svg-icons'
import './Dashusers.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Dashusers = () => {
  const [data,setData]=useState([]);


  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [isDoctor, setIsDoctor] = useState(false);
  const [errors, setErrors] = useState([]);

 
        
    const handleSubmit = async (e) => {
      e.preventDefault();
      
        const userData = {
            firstname,
            lastname,
            email,
            phone,
            password,
            confirmpassword,
            isDoctor
          }
        try {
          const res = await axios.post("http://localhost:5000/register", userData );
          console.log(res)
          window.location.reload();
          // window.location.href = '/home';
        } catch (err) {   
          setErrors(err.response.data.errors)
        }
      }
  let i=0;
  useEffect(() => {
    const url =`http://localhost:5000/users`
    fetch(url)
    .then((res) => (res.json()))
    .then((json) => setData(json))
    .catch((err) => console.log('error in api'))
  }, [])
  const deleteHandler = async (user) =>{
    try{
      const res = await axios.delete(`http://localhost:5000/users/${user._id}`)
      alert(res.data.message)
      window.location.reload();
    }
    catch(err) {
      alert('user deleted  faild');
    }
  }
    return (
        <div className='Dashusers container'>
          <h2>Add User</h2>
          <div className='adduser'>
          <form  method='POST' onSubmit={handleSubmit }>
          <div className="form-body">
              <p className='errors'>{errors.firstname}</p>
              <div className="username">
                  <label className="form__label" htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name" name="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} required/>
              </div>
              <p className='errors'>{errors.lastname}</p>
              <div className="lastname">
                  <label className="form__label" htmlFor="lastName">Last Name </label>
                  <input  type="text" id="lastName"  className="form__input"placeholder="LastName" name="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} required/>
              </div>
              <p className='errors'>{errors.email}</p>
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <p className='errors'>{errors.phone}</p>
              <div className="phone">
                  <label className="form__label" htmlFor="phone">Phone </label>
                  <input  type="phone"  id="phone"  className="form__input"placeholder="Phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
              </div>
              <p className='errors'>{errors.password}</p>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              </div>
              <p className='errors'>{errors.confirmpassword}</p>
              <div className="confirm-password">
                  <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" name="confirmpassword" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
              </div>
              <div className="">
                <input type="radio" value="false" id="user" name="work" onChange={(e) => setIsDoctor(e.target.value)} required/>
                <label htmlFor="user">user</label>
                <input type="radio" value="true"  id="doctor" name="work" onChange={(e) => setIsDoctor(e.target.value)} required/>
                <label htmlFor="doctor">doctor</label>
              </div>
          </div>
          <div className="Register-footer">
              <button type="submit" className="adduserbtn">Add User</button>
          </div>
        </form>  
          </div>
          <h2>All User</h2>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>img</th>
      <th>name</th>
      <th>phone</th>
      <th>email</th>
      <th>isAdmin</th>
      <th>isDoctor</th>
      <th>Edit</th>
      <th>delet</th>  
    </tr>
  </thead>
  <tbody>
    {data.map((user)=>(
        <tr key={user._id}>
        <td>{++i}</td>
        <td>
            <img src= {user.img} width={"100px"} alt=""/>
        </td>    
        <td>{user.firstname + " "+ user.lastname}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>{user.isAdmin?"yes":"No"}</td>
        <td>{user.isDoctor?"yes":"No"}</td>
      
        <td className='faFilePen'>
        <Link to={`/Dashusers/${user._id}`}>
        <FontAwesomeIcon  icon={faFilePen}></FontAwesomeIcon>
        </Link>
        
        </td>
        <td className='faTrash' onClick={() => deleteHandler(user)}>
        <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
        </td>
    </tr>
    ))}
            
        </tbody>
        </Table>
    </div>
    );
}

export default Dashusers;