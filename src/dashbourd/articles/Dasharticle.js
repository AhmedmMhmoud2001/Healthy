import React from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFilePen} from '@fortawesome/free-solid-svg-icons'
import './Dasharticle.css'

const Dasharticle = () => {
    return (
        <div className=' Dasharticle container'>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>img</th>
          <th>summary</th>
          <th>Edit</th>
          <th>delet</th>
        </tr>
      </thead>
      <tbody>
        
                <tr >
                <td>1</td>
                <td className=''>title</td>
                <td>
                    <img src= "" alt=""/>
                </td>
                
                <td>summary</td>
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

export default Dasharticle;