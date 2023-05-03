import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Doctors.css'
const Doctors = () => {
    const [data, setData] = useState([])
    const [isloading, setIsLoading] = useState(true)
    const specialtie = useParams();
    
//   useEffect(() => {
//     async function fetchUserDetails() {
//         const updatedDoctors = await Promise.all(data.map(async (doctor) => {
//                         const userResponse = await fetch(`http://localhost:5000/users/${doctor.userId}`);
//                         const userData = await userResponse.json();
//                         return { ...doctor, img: userData.img, firstname: userData.firstname, lastname: userData.lastname };
//                     }));
//                     setData(updatedDoctors);
//                 }
    
//     fetchUserDetails() 
//   }, [data]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/doctors/specialtie/${specialtie.specialtie}`);
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [specialtie.specialtie]);


    useEffect(() => {
        if (data.length !== 0) {
            setIsLoading(false);
        }
    }, [data])
    return (
        <div className='Doctors container'>
            <h1>Doctors</h1>
            {isloading ? (
                <>
                    <h2>Is Loading . . .</h2>
                </>
            ) : (
                data.map((doctor) => (
                    <Row className='oneDoctor' key={doctor._id}>
                        <Col>
                            <img src={doctor.img} alt="" />
                        </Col>
                        <Col>
                            <div className='doctorinfo'>
                                <p> <span>name :</span>{doctor.firstname +" "+ doctor.lastname}</p>
                                <p><span>specialtie:</span> {doctor.specialtie}</p>
                                <p><span>description: </span>{doctor.description}</p>
                                <p> <span>yearsOfExperience:</span>{doctor.yearsOfExperience}</p>
                                <p> <span>language :</span>{doctor.language}</p>
                                <p> <span>address :</span>{doctor.address}</p>
                                <button>Live Chat</button>
                            </div>
                        </Col>
                    </Row>

                ))

            )}

        </div>
    );
}

export default Doctors;