import React from 'react'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram ,faTwitter ,faFacebook,faTelegram} from '@fortawesome/free-brands-svg-icons'
import './footer.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-body container'>
      <Row>
        <Col lg={3} md={6} sm={12}>
        <div className='Left'>
          <div className='footerTitle'>
              <p>Healthy</p>
          </div>
          <div className='footerdisc'>
            <p>An online store to display and sell all products in the pharmacy,
                read the prescription and find out whether medicines are available
                or not</p>
          </div>
        </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <div className='center'>
           <div className='footerTitle'>
              <p>Quick Links</p>
          </div>
          <div>
            <div><Link to="/home">Home</Link></div>
            <div> <Link to="/Products">Products</Link></div>
            <div> <Link to="/Prescription">E-Prescription</Link></div>
            <div><Link to="/About">About</Link></div>
            <div><Link to="/Contact">Contact</Link></div>
          </div>
        </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <div className='center'>
           <div className='footerTitle'>
              <p>Quick Links</p>
          </div>
          <div>
            <div><Link to="/home">Home</Link></div>
            <div> <Link to="/Products">Products</Link></div>
            <div> <Link to="/Prescription">E-Prescription</Link></div>
            <div><Link to="/About">About</Link></div>
            <div><Link to="/Contact">Contact</Link></div>
          </div>
        </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <div className='Right'>
          <div className='footerTitle'>
              <p>Follow Us</p>
          </div>
          <div>
            <Link><FontAwesomeIcon icon={faTwitter}/></Link>
            <Link><FontAwesomeIcon icon={faTelegram}/></Link>
            <Link><FontAwesomeIcon icon={faInstagram }/></Link>
            <Link><FontAwesomeIcon icon={faFacebook}/></Link>
          </div>
        </div>
        </Col>
      </Row>
      </div>
      <div className='copyRights container'>
        <p>&copy; 2022. All Rights Reserved. Powered by Ahmed Mahmoud.</p>
      </div>
    </div>
  )
}
