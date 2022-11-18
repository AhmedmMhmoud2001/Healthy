import React from 'react'

export const Login = () => {
  return (
    <>
        <div className='Login'>
            <h2>Login</h2>
        </div>
        <form className="form_Login" >
          <div className="form-body">
             
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" name="email"  required/>
              </div>
             
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" name="password"  required/>
              </div>
            </div>
          <div className="login-footer">
              <button type="submit" className="btn">Login</button>
          </div>
        </form>  
    </>
  )
}
