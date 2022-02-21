import React, { useState,useEffect } from 'react'  
import axios from 'axios';  
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Editdetails(props) {  
    const [customer, setCustomer] = useState([])

    const params = useParams();
    const customerid ={
        id :params.id
    }

    useEffect(() => {
        axios.post('http://localhost:5000/api/get-customer-by-id',customerid)
        .then((res) => {
          let response = res.data.data.customer_id_details[0];
          console.log(response)
          setCustomer(response);
        });
      }, [setCustomer]);
    
  return (  
    <div className="container">  
       
          <div className="row justify-content-center">  
            <div className="col-lg-5">  
              <div className="card o-hidden border-0 shadow-lg my-5">  
              <h4 className='text-center'>Update</h4>
              {/* {customer.map((item, key) => */}

                <form onSubmit='' id="formElement" >  
                  <div className="form-group">  
                    
                    <div className="col-sm-12">  
                    <label>Name</label>
                      <input type="text" name="name"className="form-control fm"  id="Name" placeholder="Name"  />
                            </div>  
                  </div>  

                  <div className="form-group">  
                  <div className="col-sm-12">  
                    <label>Mobile</label>
                      <input type="number" name="mobile"className="form-control fm" id="mobile" placeholder="mobile" />
                    </div>  
                  </div>  

                  <br />
                  <button type="submit" className=" form-control fm btn-success  btn-block">Update</button>  
                </form>
                 {/* )} */}
              </div>  
            </div>  
          </div>  
        </div>  
  )  
}  
  
export default Editdetails;