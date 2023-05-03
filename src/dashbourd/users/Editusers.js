import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Dashusers.css"
const Editusers = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [isDoctor, setIsDoctor] = useState(false);
    const [img,setImgUrl] =useState('')
    const [errors, setErrors] = useState([]);
  
    const user = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/users/${user.id}`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            setFirstName(json.firstname)
            setLastName(json.lastname)
            setEmail(json.email)
            setPhone(json.phone)
            setPassword(json.password)
            setImgUrl(json.img) 
               })
          .catch((error) => console.log("error in api"));
      }, [user.id]);
          
      const handleSubmit = async (e) => {
        e.preventDefault();
        
          const userData = {
              firstname,
              lastname,
              email,
              phone,
              password,
              confirmpassword,
              isDoctor,
              img
            }
          try {
            const res = await axios.put(`http://localhost:5000/users/${user.id}`, userData );
            console.log(res)
            window.location.reload();
            // window.location.href = '/home';
          } catch (err) {   
            setErrors(err.response.data.errors)
          }
        }
    return (
        <div className='edituser'>
            <div className='adduser '>
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
              <div className="imgUrl">
                            <label className="form__label" htmlFor="imgUrl">imgUrl </label>
                            <input className="form__input" type="url" id="imgUrl" placeholder="imgUrl" name="imgUrl" value={img} onChange={(e) => setImgUrl(e.target.value)} required />
                        </div>
              <div className="">
                <input type="radio" value="false" id="user" name="work" onChange={(e) => setIsDoctor(e.target.value)} required/>
                <label htmlFor="user">user</label>
                <input type="radio" value="true"  id="doctor" name="work" onChange={(e) => setIsDoctor(e.target.value)} required/>
                <label htmlFor="doctor">doctor</label>
              </div>
          </div>
          <div className="Register-footer">
              <button type="submit" className="adduserbtn">Edit User</button>
          </div>
        </form>  
          </div>
        </div>
    );
}

export default Editusers;