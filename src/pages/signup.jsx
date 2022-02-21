import React, { useState } from 'react'  
import axios from 'axios';  
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

// import { Container,Button,Form,Row,Col } from 'react-bootstrap';


function Signup(props) {  
  const { register, handleSubmit,formState: { errors } } = useForm();

  const [name, setName] = useState("");
  const [mobile,setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onSubmit = (data) => console.log(data);

  const RegisterApi = (e) => {
    let data = {
        name: name,
        mobile:mobile,
        email: email,
        password: password,
    };
    axios.post( "http://localhost:5000/api/registration", data).then((res) => {
          if(res.data.status=='400'){
            alert("Email alredy Exists and something went wrong");
            return false;            
          }
            if(res.data.status=='200'){
              alert("registration successfully completed")
              window.location.href ='/login'
              // document.getElementById("formElement").reset()  
          }
        })
        .catch((error) => {
            console.log(error);
            alert("something went wrong");
        });
};

  return (  
    <div className="container">  
       
          <div className="row justify-content-center">  
            <div className="col-lg-5">  
              <div className="card o-hidden border-0 shadow-lg my-5">  
              <h4 className='text-center'>Registration</h4>
                  
                <form onSubmit={handleSubmit(RegisterApi)} id="formElement" >  
                  <div className="form-group">  
                    
                    <div className="col-sm-12">  
                    <label>Name</label>
                      <input type="text" name="name"className="form-control fm" id="Name" placeholder="Name" 
                      {...register("name",{required:true,minLength:4})}
                      onKeyUp={(e) => {setName(e.target.value); }} />

                      <div className="error">
                         {errors.name && "Name is required and minium length 4 characters"}
                      </div>                                      
                    </div>  
                  </div>  

                  <div className="form-group">  
                  <div className="col-sm-12">  
                    <label>Mobile</label>
                      <input type="number" name="mobile"className="form-control fm" id="mobile" placeholder="mobile"
                       {...register("mobile",{required:true, minLength:10,maxLength:10})}
                      onKeyUp={(e) => {setMobile(e.target.value); }} />

                        <div className="error">
                             {errors.mobile && "mobile is required and minimum and maximum is length is 10 numbers"}
                          </div>                                       
                    </div>  
                  </div>  

                  <div className="form-group">  
                  <div className="col-sm-12">  
                    <label>Email</label>
                      <input type="email" name="email"className="form-control fm" id="email" placeholder="Email" 
                       {...register("email",{required:true,pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/})}
                      onKeyUp={(e) => {setEmail(e.target.value); }} />

                      <div className="error">
                             {errors.email && "email is required"}
                          </div>                                       
                    </div>  
                  </div>

                    <div className="form-group">  
                    <div className="col-sm-12">  
                    <label>Password</label>
                      <input type="password" name="password"className="form-control fm" 
                      {...register("password",{required:true, minLength:9})} id="password" placeholder="password" 
                      onKeyUp={(e) => {setPassword(e.target.value); }}/>

                     <div className="error">
                       {errors.password && "password is required and minimum length is 9 characters"}
                     </div>             
                    </div>  
                  </div>
                  <br />
                  <button type="submit" className=" form-control fm btn-success  btn-block">Signup</button>  
                </form>
                
                <p className='tags'>Are you existing customer?  <Link as={Link} to={`/login`}>Login Here</Link> </p>

              </div>  
            </div>  
          </div>  
        </div>  

  //           <Container>
  //   <Row>
  //     <Col xs={6}>
  //     <div className='signup_sec'> 
  //     <h4 className='text-center'>Registration</h4>   
  //   <Form>
  //   <Form.Group className="mb-3" controlId="formBasicEmail">
  //       <Form.Label>Email address</Form.Label>
  //       <Form.Control type="email" placeholder="Enter email" />
  //     </Form.Group>

  //     <Form.Group className="mb-3" controlId="formBasicEmail">
  //       <Form.Label>Email address</Form.Label>
  //       <Form.Control type="email" placeholder="Enter email" />
  //     </Form.Group>
  
  //   <Form.Group className="mb-3" controlId="formBasicPassword">
  //     <Form.Label>Password</Form.Label>
  //     <Form.Control type="password" placeholder="Password" />
  //   </Form.Group>
  //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
  //     <Form.Check type="checkbox" label="Check me out" />
  //   </Form.Group>
  //   <Button variant="primary" type="submit">
  //     Submit
  //   </Button>
  // </Form>
  // </div>
  // </Col>
  // </Row>
  // </Container>

  )  
}  
  
export default Signup;