import React from 'react';
import "./Messenger.css"
const Messenger = () => {
    return (
        <div>
            <div className='Messenger-page'>
                <div className='Messenger-page-left-live-chat'>
                    <div className='live-chat'>
                        <div>
                        <h2>Live chat</h2>
                        </div>
                        <div className='live-chat-message'>
                            <p></p>
                            <p></p>
                        </div>
                        <div className='sender'>
                            <input  type={"text"}  />
                            <button>send</button>
                        </div>
                    
                    </div>
                </div>
                <div className='Messenger-page-right'>
                    <div className='img-name-clint-or-doc'>
                        <img src={'https://www.konsilmed.com/dashboardImages/specializations/1584282023ايقونات التخصصات لتطبيق كونزيل -15-31-11.png'} alt="Ahmed Mahmoud"/>
                        <p>Ahmed Mahmoud</p>
                    </div>
                    <div className='img-name-clint-or-doc'>
                        <img src={'https://www.konsilmed.com/dashboardImages/specializations/1584282023ايقونات التخصصات لتطبيق كونزيل -15-31-11.png'} alt="Ahmed Mahmoud"/>
                        <p>Ahmed Mahmoud</p>
                    </div>
                    <div className='img-name-clint-or-doc'>
                        <img src={'https://www.konsilmed.com/dashboardImages/specializations/1584282023ايقونات التخصصات لتطبيق كونزيل -15-31-11.png'} alt="Ahmed Mahmoud"/>
                        <p>Ahmed Mahmoud</p>
                    </div>
                    <div className='img-name-clint-or-doc'>
                        <img src={'https://www.konsilmed.com/dashboardImages/specializations/1584282023ايقونات التخصصات لتطبيق كونزيل -15-31-11.png'} alt="Ahmed Mahmoud"/>
                        <p>Ahmed Mahmoud</p>
                    </div>
                    <div className='img-name-clint-or-doc'>
                        <img src={'https://www.konsilmed.com/dashboardImages/specializations/1584282023ايقونات التخصصات لتطبيق كونزيل -15-31-11.png'} alt="Ahmed Mahmoud"/>
                        <p>Ahmed Mahmoud</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Messenger;