import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faSignIn,faUserPlus,faPhone,faEnvelope,faBars} from '@fortawesome/free-solid-svg-icons'
import { faInstagram ,faTwitter ,faFacebook ,faTelegram} from '@fortawesome/free-brands-svg-icons'
import {Link} from "react-router-dom";
import "./header.css"
// src/pages/Home.js
import { useSelector } from 'react-redux';
const Header = () => {
  // src/pages/Home.js
const cart = useSelector((state) => state.cart)

const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}
  return (
    <>
    <div className='headerhead'>
      <div className='headerheaderLeft'>
        <div> < FontAwesomeIcon icon={faPhone}/> 190016</div>
        <div>< FontAwesomeIcon icon={faEnvelope}/>Healthy@health.com</div>
      </div>
      <div className='headerheaderRight'>
        <div> <Link to="">< FontAwesomeIcon icon={faTwitter}/></Link></div>
        <div> <Link to="">< FontAwesomeIcon icon={faTelegram}/></Link></div>
        <div> <Link to="">< FontAwesomeIcon icon={faInstagram}/></Link></div>
        <div> <Link to="">< FontAwesomeIcon icon={faFacebook}/></Link></div>
      </div>
      <div></div>
    </div>
    <div className='header'>
      
      <div className='headerTitle'>
          <p>Healthy</p>
      </div>
      <div className='headerLink'>
          <ul>
            <Link to="/"></Link>
            <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/Products">Products</Link>
            </li>
            <li>
            <Link to="/Prescription">E-Prescription</Link>
            </li>
            
            <li>
            <Link to="/About">About</Link>
            </li>
            <li>
            <Link to="/Contact">Contact</Link>
            </li>
          </ul>
      </div>
      <div className='headerIconSignandCart'>
        <ul>
            <li className='cartcounter'>
            <Link to="/Cart">
              <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
              Cart  <p className='TotalQuantity'>{getTotalQuantity() || 0}</p>
              </Link>
            </li>
            <li>
            <Link to="/Login">
            <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
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
      <div className='barsIcon'> <FontAwesomeIcon icon={faBars}/></div>
    </div>
    </>
  )
}

export default Header