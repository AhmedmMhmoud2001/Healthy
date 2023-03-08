import React from 'react';
import { Products } from '../Products/Products';
import Specialties from '../Specialties/Specialties';
import './home.css'
export default function Home() {
  
  return (
    <div>
        <div className='home-main'>
            <div className='home-main-left'>
                <img src="img/bb.png" alt=""/>
                <div className='info'>
                    <h2>Speak To A World Class Doctor</h2>
                    <p>Get advice by phone, computer or mobile app</p>
                </div>
            </div>
            <div className='home-main-right'>
                <img src="img/images-removebg-preview.png" alt=""/>
                {/* s */}
            </div>
        </div>
        <Specialties/>
        <Products/>
    </div>
  )
}
