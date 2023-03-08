import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faSignIn,faUserPlus,faPhone,faEnvelope,faBars,faBell} from '@fortawesome/free-solid-svg-icons'
import { faInstagram ,faTwitter ,faFacebook ,faTelegram ,faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import {Link} from "react-router-dom";
import "./header.css"
import { useSelector } from 'react-redux';
const Header = () => {
const cart = useSelector((state) => state.cart)

const slidbar = () => {
  const element = document.getElementById("slidbar");

  if(element.style.display==="none"){
    element.style.display="block";
  }
  else{
    element.style.display="none"
  }
}

const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}
  return (
    <>
      <div className='headerheaderRight'>
        <div> <Link to="#">< FontAwesomeIcon icon={faPhone}/></Link></div>
        <div> <Link to="#">< FontAwesomeIcon icon={faEnvelope}/></Link></div>
        <div> <Link to="#">< FontAwesomeIcon icon={faTwitter}/></Link></div>
        <div> <Link to="#">< FontAwesomeIcon icon={faTelegram}/></Link></div>
        <div> <Link to="#">< FontAwesomeIcon icon={faInstagram}/></Link></div>
        <div> <Link to="#">< FontAwesomeIcon icon={faFacebook}/></Link></div>
      </div>
    <div className='header'>
      
      <div className='headerTitle'>
          <p>Healthy</p>
      </div>
      <div className='headerIconSignandCart'>
        <ul>
        <li>
            <Link to="/Login">
            <FontAwesomeIcon className='iconheader' icon={faBell}></FontAwesomeIcon>
            <p className='TotalNotifications'>0</p>
              </Link>
            </li>
        <li>
            <Link to="/Messenger">
            <FontAwesomeIcon className='iconheader' icon={faFacebookMessenger}></FontAwesomeIcon>
            <p className='TotalMessage'>0</p>
              </Link>
            </li>
            <li className='cartcounter'>
            <Link to="/Cart">
              <FontAwesomeIcon className='iconheader' icon={faCartPlus}></FontAwesomeIcon>
              <p className='TotalQuantity'>{getTotalQuantity() || 0}</p>
              </Link>
            </li>
            <li>
            <Link to="/Login">
            <FontAwesomeIcon className='iconheader' icon={faSignIn}></FontAwesomeIcon>
              Login
              </Link>
            </li>
            <li>
            <Link to="/Register">
            <FontAwesomeIcon className='iconheader' icon={faUserPlus}></FontAwesomeIcon>
              Register
            </Link>
            </li>
        </ul>
      </div>
      <div className='barsIcon'>
        <FontAwesomeIcon icon={faBars} onClick={slidbar}/>
        <div className='slidbar' id="slidbar">
        <ul>
        <li>
            <Link to="/Messenger">
              <FontAwesomeIcon  icon={faBell}></FontAwesomeIcon>
              Notifications
              {/* <p >0</p> */}
            </Link>
        </li>
        <li>
            <Link to="/Messenger">
            <FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>
            Messenger
            {/* <p>0</p> */}
            </Link>
          </li>
          <li >
            <Link to="/Cart">
              <FontAwesomeIcon  icon={faCartPlus}></FontAwesomeIcon>
              Cart
              {/* <p >{getTotalQuantity() || 0}</p> */}
            </Link>
          </li>
            <li>
            <Link to="/Login">
            <FontAwesomeIcon  icon={faSignIn}></FontAwesomeIcon>
              Login
              </Link>
            </li>
            <li>
            <Link to="/Register">
            <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
              Register
            </Link>
            </li>
        </ul>
      </div>
      </div>
    </div>
    <div className='headerLink'>
          <ul>
            <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/About">About</Link>
            </li>
            <li>
            <Link to="/Specialties">Specialties</Link>
            </li>
            <li>
            <Link to="/Products">Products</Link>
            </li>
            <li>
            <Link to="/Articles">Articles</Link>
            </li>
            <li>
            <Link to="/Contact">Contact</Link>
            </li>
          </ul>
      </div>
    </>
  )
}

export default Header