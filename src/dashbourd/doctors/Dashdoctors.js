import React from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFilePen} from '@fortawesome/free-solid-svg-icons'
import './Dashdoctors.css'
const Dashdoctors = () => {
    return (
        <div className='Dashdoctors container'>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>yearsOfExperience</th>
          <th>specialtie</th>
          <th>description</th>
          <th>medicineLicense</th>
          <th>address</th>
          <th>Edit</th>
          <th>delet</th>
          
        </tr>
      </thead>
      <tbody>
        
                <tr >
                <td>#</td>
                <td>name</td>
                <td>yearsOfExperience</td>
                <td>specialtie</td>
                <td>description</td>
                <td>medicineLicense</td>
                <td>address</td>
                <td className='faFilePen'>
                {/* <Link to={`/Showallproducts/${product._id}`}> */}
                <FontAwesomeIcon  icon={faFilePen}></FontAwesomeIcon>
                {/* </Link> */}
                
                </td>
                <td className='faTrash'>
                <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
                </td>
              </tr>
        
      </tbody>
            </Table>
        </div>
    );
}

export default Dashdoctors;