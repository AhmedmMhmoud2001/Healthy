import React ,{ useState }from 'react'
import "./register.css"
export const Register = () => {
   
    const [formregister,setForm_Register]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        password:"",
        confirmpassword:""

    });
    // const [validationes,setvalidForm_Register]=useState({
    //     firstname:"",
    //     lastname:"",
    //     email:"",
    //     phone:"",
    //     password:"",
    //     confirmpassword:""

    // });
    const onUpdateField = e => {
        const nextFormState = {
          ...formregister,
          [e.target.name]: e.target.value,
        };
        setForm_Register(nextFormState);
      };
    const  Form_Register=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(formregister, null, 2));
       
        // if(formregister.firstname.length<6){
        //     console.log("first name is not valide")
           
        // }
        // const errors =validationes;
        // if(formregister.firstname.length<=2){
        //     errors.firstname="First name is very small";
        //     setvalidForm_Register(errors.firstname)
        // }
        // else{
        //     errors.firstname=""
        //     setvalidForm_Register(errors.firstname)
        // }
        // console.log(errors.firstname)
    }
    
  return (
    <>
        <div className='Register'>
            <h2>Register</h2>
        </div>
        <form className="form_Register" onSubmit={Form_Register}>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name" name="firstname" onChange={onUpdateField} required/>
              </div>
              <div className="lastname">
                  <label className="form__label" htmlFor="lastName">Last Name </label>
                  <input  type="text" id="lastName"  className="form__input"placeholder="LastName" name="lastname" onChange={onUpdateField} required/>
              </div>
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" name="email" onChange={onUpdateField} required/>
              </div>
              <div className="phone">
                  <label className="form__label" htmlFor="phone">Phone </label>
                  <input  type="phone"  id="phone"  className="form__input"placeholder="Phone" name="phone" onChange={onUpdateField} required/>
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" name="password" onChange={onUpdateField} required/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" name="confirmpassword" onChange={onUpdateField} required/>
              </div>
          </div>
          <div className="Register-footer">
              <button type="submit" className="btn">Register</button>
          </div>
        </form>  
    </>    
  )
}
