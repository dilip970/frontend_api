import React, { useState } from 'react'   
import axios from 'axios'; 
import { Link } from 'react-router-dom';
// import { useRoutes} from "react-router-dom";
import { useForm } from "react-hook-form";

function Login(props) {  
  const { register, handleSubmit,formState: { errors } } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginApi = (e) => {
      let data = {
          email: email,
          password: password,
      };
      console.log("login data: ",data)
      axios.post("http://localhost:5000/api/customerlogin", data).then((res) => {
              if(res.data.status == '400'){
                  alert("Email or Password is not valid");
                  return false;
              }
              else{
                  let customerdata = res.data.data.user_data;
                  localStorage.clear();
                  localStorage.setItem("customertoken", customerdata.token);
                  window.location.href = '/welcome'
                  // history.push('/welcome')
              }
          })
          .catch((error) => {
              console.log(error);
              alert("wrong credentials");
          });
  };
    return (  
        
        <div className="container">  
        <div className="row justify-content-center">  
          <div className="col-lg-4">  
           <div className="card o-hidden border-0 shadow-lg my-5">  
              <h4 className='text-center'>Login</h4>

              <form onSubmit={handleSubmit(loginApi)} className="user" id="formElement">  
                  
                  <div className="form-group">  
                    <label>Email</label>
                  <div className="col-sm-12 mb-3 mb-sm-0">  
                      <input type="email" name="email"  className="form-control fm" id="email" placeholder="Email" 
                      {...register("email",{required:true})} onKeyUp={(e) => {setEmail(e.target.value); }} />

                      <div className="error">
                             {errors.email && "email is required"}
                          </div>

                    </div> 
                  </div>

                    <div className="form-group">  
                    <label>Password</label>
                    <div className="col-sm-12 mb-3 mb-sm-0">  
                      <input type="password" name="password"  className="form-control fm" id="password" placeholder="Password"
                       onKeyUp={(e) => {setPassword(e.target.value); }} {...register("password",{required:true})}/>  
                    </div> 
                    <div className="error">
                             {errors.password && "password is required"}
                      </div>             

                  </div>
                  <br />
                  <button className=" form-control fm btn-success  btn-block">Login</button>  

                </form>  
                <p className='tags'>Are you new customer?  <Link as={Link} to={`/signup`}>Registration Here</Link> </p>

               </div>  
            </div>  
           </div>    
          </div>
    )  
}  
  
export default Login;