import React ,{ useState } from 'react'
import "./login.css"
import axios from 'axios';

export const Login = () => {
  const [formlogin,setFormlogin] =useState({
    email:'',
    password:''
})
const [error, setError] = useState([]);
  const onUpdateField = e => {
    const nextFormState = {
      ...formlogin,
      [e.target.name]: e.target.value,
    };
    setFormlogin(nextFormState);
  };
const  Form_Login= async (e)=>{
    e.preventDefault();
    // alert(JSON.stringify(formlogin, null, 2));
    // console.log(formlogin)
    try {
      const res = await axios.post("http://localhost:5000/login", formlogin );
      console.log(res)
          const token = res.data.token;
          localStorage.setItem("token", token);
          window.location.reload();
          window.location.href = '/home';
    } catch (err) {
      setError(err.response.data.error)
    }
}
  return (
    <>
        <div className='Login'>
            <h2>Login</h2>
        </div>
        <form className="form_Login" onSubmit={Form_Login} >
           <p className='errors'>{error}</p>
          <div className="form-body">
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" name="email"  onChange={onUpdateField} required/>
              </div>
             
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" name="password"  onChange={onUpdateField} required/>
              </div>
            </div>
          <div className="login-footer">
              <button type="submit" className="btn">Login</button>
          </div>
        </form>  
    </>
  )
}
