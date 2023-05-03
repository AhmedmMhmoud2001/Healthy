import React from 'react';
import {useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import './Specialties.css'
const Specialties = () => {
      const [isLoading, setIsLoading] = useState(true);
      const [data, setData] = useState([]);
    useEffect(() => {
        const url = `/specialties`;
        fetch(url)
          .then((response) => response.json())
          // .then(console.log)
          .then((json) => setData(json))
          .catch((error) => console.log("error in api"));
      }, []);

       useEffect(() => {
        if (data.length !== 0) {
          setIsLoading(false);
        }
      }, [data]);
    return (
        <div className='container'>
            <div className='Specialties-title'>
                <h2>Our Specialties</h2>
            </div>
            {isLoading?(
                <div>
                    <h2> loading . . .</h2>
                </div>
            ):(
                <div>
                    <div className='Specialties-all-cards'>
                    {
                            data.map((Specialty)=>(
                                
                                <div className='Specialties-card' key={Specialty._id}>
                                    <Link to={`/Specialties/${Specialty.title}`} >
                            <div>
                                <img src={Specialty.img} alt={Specialty.title}/>
                            </div>
                            <div>
                                <p>   
                                {Specialty.title}
                                </p>
                            </div>
                            </Link>
                            </div>
                            ))
                        }
                    
                    </div>
                </div>
            )
            }
        </div>
    );
}

export default Specialties;