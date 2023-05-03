import React from 'react'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faSignIn, faUserPlus, faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebook, faTelegram, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import "./header.css"
import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import jwt_decode from "jwt-decode";
const Header = () => {
  const [data, setData] = useState([]);
  // get token from the local storage and id
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
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, [userId]);


  function handleLogout() {
    // Remove the token from the local storage
    localStorage.removeItem('token');
    // Reload the current page
    window.location.reload();
    window.location.href = '/Login';
  }
  const cart = useSelector((state) => state.cart)
  // const user ={
  //   ahmed:"ahmed"
  // }

  const slidbar = () => {
    const element = document.getElementById("slidbar");

    if (element.style.display === "none") {
      element.style.display = "block";
    }
    else {
      element.style.display = "none"
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

      <div className='top-header'>
        <div className='header'>

          <div className='headerTitle'>
            <p>Healthy</p>
          </div>
          <div className='headerIconSignandCart'>
            <ul>
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
              {token ? (data.isAdmin ? (
                <li>
                  <Dropdown>
                    <Dropdown.Toggle className='Dropdown' id="dropdown-basic">
                      {data.firstname}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/Profile">profile</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">orders</Dropdown.Item>
                      <Dropdown.Item href="/Dashcategories">categories</Dropdown.Item>
                      <Dropdown.Item href="/Showallproducts">Products</Dropdown.Item>
                      <Dropdown.Item href="/Dasharticle">Articles</Dropdown.Item>
                      <Dropdown.Item href="/Dashusers">Users</Dropdown.Item>
                      <Dropdown.Item href="/Dashspecialties">Specialties</Dropdown.Item>
                      <Dropdown.Item href="/Dashdoctors">Doctors</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              ) : (data.isDoctor ? (
                <li>
                  <Dropdown>
                    <Dropdown.Toggle className='Dropdown' id="dropdown-basic">
                      {data.firstname}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/Profile">prfile</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">IsDoctor</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              ) : (
                <li>
                  <Dropdown>
                    <Dropdown.Toggle className='Dropdown' id="dropdown-basic">
                      {data.firstname}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/Profile">prfile</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              )

              )
              ) : (<>
                <li>
                  <Link to="/Login" className='Login_header'>
                    <FontAwesomeIcon className='iconheader' icon={faSignIn}></FontAwesomeIcon>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/Register" className='Register_header'>
                    <FontAwesomeIcon className='iconheader' icon={faUserPlus}></FontAwesomeIcon>
                    Register
                  </Link>
                </li>
              </>)}
            </ul>

          </div>
          <div className='barsIcon'>
            <FontAwesomeIcon icon={faBars} onClick={slidbar} />
            <div className='slidbar' id="slidbar">
              <ul>

                <li>
                  <Link to="/Messenger">
                    <FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>
                    Messenger
                    {/* <p>0</p> */}
                  </Link>
                </li>
                <li >
                  <Link to="/Cart">
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                    Cart
                    {/* <p >{getTotalQuantity() || 0}</p> */}
                  </Link>
                </li>

                {token ? (data.isAdmin ? (
                  <>
                    <li>
                      <Link to="/Profile">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/Login">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        orders
                      </Link>
                    </li>
                    <li>
                      <Link to="/Dashcategories">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        categories
                      </Link>
                    </li>
                    <li>
                      <Link to="/Showallproducts">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/Dasharticle">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        Articles
                      </Link>
                    </li>
                    <li>
                      <Link to="/Dashusers">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        Users
                      </Link>
                    </li>
                    <li>
                      <Link to="/Dashspecialties">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        Specialties
                      </Link>
                    </li>
                    <li>
                      <Link to="/Dashdoctors">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        Doctors
                      </Link>
                    </li>
                    <li>
                      <Link to="/Login">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (data.isDoctor ? (
                  <>
                    <li>
                      <Link to="/Login">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/Login">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        IsDoctor
                      </Link>
                    </li>
                    <li>
                      <Link to="/Login">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/Login">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        profile
                      </Link>
                    </li>
                    <li>
                    </li>
                    <li>
                      <Link to="/Login">
                        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        Logout
                      </Link>
                    </li>
                  </>
                )

                )
                ) : (<>
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
                </>)}

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
      </div>

      <div className='headerheaderRight'>
        <div> <Link to="#">< FontAwesomeIcon icon={faPhone} /></Link></div>
        <div> <Link to="#">< FontAwesomeIcon icon={faEnvelope} /></Link></div>
        <div> <Link to="#">< FontAwesomeIcon icon={faTwitter} /></Link></div>
        <div> <Link to="#">< FontAwesomeIcon icon={faTelegram} /></Link></div>
        <div> <Link to="#">< FontAwesomeIcon icon={faInstagram} /></Link></div>
        <div> <Link to="#">< FontAwesomeIcon icon={faFacebook} /></Link></div>
      </div>
    </>
  )
}

export default Header