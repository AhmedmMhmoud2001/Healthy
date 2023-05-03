import React ,{ useState } from 'react'
import './contact.css'
export default function Contact() {
  const [formcontact,setForm_Contact]=useState({
    name:"",
    email:"",
    message:""

});
  const onUpdateField = e => {
    const nextFormState = {
      ...formcontact,
      [e.target.name]: e.target.value,
    };
    setForm_Contact(nextFormState);
  };
const  Form_Contact=(e)=>{
    e.preventDefault();
    alert(JSON.stringify(formcontact, null, 2));
}
  return (
    <div className='contact container'> 
 
         <div className='header-contact'> 
         <h2>Contact Us</h2> 
          <div className='line'></div> 
          <p>7,078 inspirational designs, illustrations, and graphic elements from the world’s best designers. 
          Want more inspiration? Browse our search results...</p> 
         </div> 
        <div className='containier-map'> 
        <div className='contact-us'> 
         <div className='map-contact'> 
          <div className="mapouter"> 
            <div className="gmap_canvas"> 
            <iframe title="uniqueTitle"  width="100%" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=calif 
            ornia&t=&z=10&ie=UTF8&iwloc=&output=embed"frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/> 
            <a href="https://2yu.co">2yu</a><br></br> 
            <a href="https://embedgooglemap.2yu.co">html embed google map</a></div></div> 
        </div> 
        <div className='how-contact'> 
          <div className='phone-contact'> 
            <h2>Phone Number</h2> 
            <p>01210778010</p> 
            <p>01283068592</p> 
            </div> 
          <div className='email-contact'> 
          <h2>Email</h2> 
            <p>rma1411777@gmail.com</p> 
          </div> 
          <div className='location-contact'> 
          <h2>location</h2> 
            <p>23 Street Name, Cairo Egypt.</p> 
          </div> 
        </div> 
         </div> 
        </div> 
         <div className=''> 
          <div className='content'> 
            <form className='form-contact' onSubmit={Form_Contact}> 
            <input className="name-contact" type="text" placeholder="Your Name" name='name' onChange={onUpdateField} required/> 
            <input className="email-contact" type="email" placeholder="Your Email" name='email' onChange={onUpdateField} required/> 
            <textarea className="message-contact" type="text" placeholder="Your Message" name='message' onChange={onUpdateField} required/> 
            <button  type="submit" className='btn-contact'>Send Message</button> 
            </form> 
          </div> 

          {/* <div className='info'> 
            <div className='touch'> 
            <h4>Get In Touch</h4> 
            <p>01210778010</p> 
            </div> 
            <div className='where-we'> 
            <h4>Where We Are</h4> 
            <p>Awesome address 17</p> 
            <p>Cairo</p> 
            <p>123-456-789</p> 
            <p>Egypt</p> 
            </div> 
          </div>  */}
         </div>       
      </div>
  )
}
