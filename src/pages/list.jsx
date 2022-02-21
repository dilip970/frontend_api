import React, { useState,useEffect } from 'react'   
import axios from 'axios'; 
import { Link } from 'react-router-dom';

function List(props) {  
    const [customer, setCustomer] = useState([])
    useEffect(() => {
    axios.get('http://localhost:5000/api/customerlist')
    .then((res) => {
      let response = res.data.data.product;
      console.log(response)
      setCustomer(response);
    });
  }, []);
    
    return (  
        
        <div className="container">  
        <div className="row justify-content-center">  
          <div className="col-lg-6">  
           <div className="card o-hidden  shadow-lg my-5">  
              <h4 className='text-center pb-3'>Customer List</h4>
              <table class="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {customer.map((item, key) =>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td><Link as={Link} to={`/editdetails/${item.id}`}> <button className='btn btn-primary'> Edit</button>  </Link></td>
                <td> <button className='btn btn-danger'>Delete</button> </td>
              </tr>
            </tbody>
            )}
          </table>
               </div>  
            </div>  
           </div>    
          </div>
    )  
}  
  
export default List;