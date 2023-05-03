import React from 'react';
// import About from '../About/About';
// import Contact from '../Contact/Contact';
import { Products } from '../Products/Products';
import Specialties from '../Specialties/Specialties';
import './home.css'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Home() {
  
  return (
    <div>
        <Carousel className='Carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/Carousel1.jpg "
          alt="First slide"
        />
        <Carousel.Caption className='Carousel_Caption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/Carousel2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='Carousel_Caption'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/Carousel3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='Carousel_Caption'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/Carousel4.jpg"
          alt="fourth slide"
        />

        <Carousel.Caption className='Carousel_Caption'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/Carousel5.jpg"
          alt="fifth slide"
        />

        <Carousel.Caption className='Carousel_Caption'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
        </Carousel>

        <div className='container Consultation-work'>
           <div className='Consultation-work-title'> 
            <h2>How Online Doctor Consultation Works?</h2>
            <p>Skip the struggle of booking appointments Consult a doctor at your ease</p>
           </div>
            <Row>
              <Col lg={6} md={12} sm={12} xm={12} > 
                <Row>
                  <Col lg={2} md={2} sm={2} xm={2} className="num">
                     01
                  </Col>
                  <Col lg={10} md={10} sm={10} xm={10}>
                      <h3>Start A Session</h3>
                      <p>Choose the type of specialization that best suits your complaint</p>
                  </Col>
                </Row>
              </Col>
              <Col  lg={6} md={12} sm={12} xm={12} >
                <Row>
                <Col lg={2} md={2} sm={2} xm={2} className="num">
                     02
                  </Col>
                  <Col lg={10} md={10} sm={10} xm={10}>
                      <h3>Tell The Doctor What Worries You</h3>
                      <p>Describe your full complaint. Send laboratory reports or x-rays. Help the doctor to understand your condition better</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col  lg={6} md={12} sm={12} xm={12} >
                <Row>
                <Col lg={2} md={2} sm={2} xm={2} className="num" >
                     03
                  </Col>
                  <Col lg={10} md={10} sm={10} xm={10}>
                      <h3>Get A Response From Your Doctor To Your Complaint</h3>
                      <p>Based on the complaint sent, the doctor will either request other data or prepare a final report that includes possible treatments</p>
                  </Col>
                </Row>
              </Col>
              <Col  lg={6} md={12} sm={12} xm={12} >
                <Row>
                  <Col lg={2} md={2} sm={2} xm={2} className="num">
                     04
                  </Col>
                  <Col lg={10} md={10} sm={10} xm={10}>
                      <h3>Rate Your Experience</h3>
                      <p>Rate your experience with us and give us your opinion to improve the service.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
        </div>
        <Specialties/>
        <Products/>
        {/* <About/> */}
        {/* <Contact/> */}
    </div>
  )
}
