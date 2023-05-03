import React, { useState,useEffect } from 'react';
import './Prfile.css'
import axios from 'axios';
import jwt_decode from "jwt-decode";
const Profile = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [img, setImgUrl] = useState('');
    const [isDoctor, setIsDoctor] = useState(false);
    // const [errors, setErrors] = useState([]);
    const [data, setData] = useState([]);

    let userId = ''
  const token = localStorage.getItem('token');
  if (token) {
    // Decode the token to get the payload
    const decodedToken = jwt_decode(token);
    // Extract the user ID from the payload
    userId = decodedToken.userId;
  }
    // get user by id
    useEffect(() => {
        const url = `/users/${userId}`;
        fetch(url)
          .then((response) => response.json())
          .then((json) =>{
             setData(json)
             setFirstName(json.firstname)
             setLastName(json.lastname)
             setEmail(json.email)
             setPhone(json.phone)
             setPassword(json.password)
             setImgUrl(json.img)

        })
          .catch((error) => console.log(error));
      }, [userId]);

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
            const res = await axios.put(`http://localhost:5000/users/${userId}`, userData);
            console.log(res)
            window.location.reload();
            // window.location.href = '/home';
        } catch (err) {
            // setErrors(err.response.data.errors)
        }

    };

    const editProfile = () => {
        const element = document.getElementById("editProfileModel");
        element.style.display = "block"
      }
    const closeEditProfile  = () => {
    const element = document.getElementById("editProfileModel");
    element.style.display = "none";
    }
    return (
        <div className='Prfile container'>
            <h1>Prfile</h1>
            <div className='imgPrfile'>
                <img src={data.img} alt="imgPrfile" />
            </div>
            <div className='infoPrfile'>
                <p className='namePrfile'>Name :</p>
                <p>{data.firstname + data.lastname}</p>
            </div>
            <div className='infoPrfile'>
                <p className='emailPrfile'>Email :</p>
                <p>{data.email}</p>
            </div>
            <div className='infoPrfile'>
                <p className='phonePrfile'>Phone</p>
                <p>{data.phone}</p>
            </div>
            <div className='editProfile'>
                <button onClick={editProfile} >Edit Profile</button>
            </div>
            
            <div id="editProfileModel" className='editProfileModel'>
            <div className='closeEditProfile'>
                    <button onClick={closeEditProfile}>x</button>
            </div>
                <form className="form_Profile" method='POST' onSubmit={handleSubmit}>
                    <div className="form-body">
                        {/* <p className='errors'>{errors.firstname}</p> */}
                        <div className="username">
                            <label className="form__label" htmlFor="firstName">First Name </label>
                            <input className="form__input" type="text" id="firstName" placeholder="First Name" name="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
                        </div>
                        {/* <p className='errors'>{errors.lastname}</p> */}
                        <div className="lastname">
                            <label className="form__label" htmlFor="lastName">Last Name </label>
                            <input type="text" id="lastName" className="form__input" placeholder="LastName" name="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} required />
                        </div>
                        {/* <p className='errors'>{errors.email}</p> */}
                        <div className="email">
                            <label className="form__label" htmlFor="email">Email </label>
                            <input type="email" id="email" className="form__input" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        {/* <p className='errors'>{errors.phone}</p> */}
                        <div className="phone">
                            <label className="form__label" htmlFor="phone">Phone </label>
                            <input type="text" id="phone" className="form__input" placeholder="Phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>
                        {/* <p className='errors'>{errors.password}</p> */}
                        <div className="password">
                            <label className="form__label" htmlFor="password">Password </label>
                            <input className="form__input" type="password" id="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        {/* <p className='errors'>{errors.confirmpassword}</p> */}
                        <div className="confirm-password">
                            <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                            <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" name="confirmpassword" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                        <div className="imgUrl">
                            <label className="form__label" htmlFor="imgUrl">imgUrl </label>
                            <input className="form__input" type="url" id="imgUrl" placeholder="imgUrl" name="imgUrl" value={img} onChange={(e) => setImgUrl(e.target.value)} required />
                        </div>
                        <div className="">
                            <input type="radio" value="false" id="user" name="work" onChange={(e) => setIsDoctor(e.target.value)} required />
                            <label htmlFor="user">user</label>
                            <input type="radio" value="true" id="doctor" name="work" onChange={(e) => setIsDoctor(e.target.value)} required />
                            <label htmlFor="doctor">doctor</label>
                        </div>
                    </div>
                    <div >
                        <button type="submit" className='Edit-Profile-form' >Edit Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;