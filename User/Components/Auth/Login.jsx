import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../Navbar/Navigation';
import { login } from '../../../Redux/User/Auth/Action';

const Login = () => {
  const [formData,setFormData]=useState({
    email : "",
    password: ""
  });
  const [loginSuccess,setLoginSuccess]=useState("");
  
  const navigate=useNavigate();

  const handleChange=(event)=>{
    setFormData({...formData, [event.target.name]: event.target.value });
  }


  const handleRegister=()=>{
    navigate("/register")
  }
  const handleForget=()=>{
    navigate("/forget")
  }
  const handleLogin=(event)=>{
    event.preventDefault();
    localStorage.clear();
    const reqData={
      email: formData.user_email,
      password: formData.user_password
    }
    console.log("login request" , formData);
    console.log("request data is ",reqData);
    login(formData)
    .then((userData) => {
      if(userData != undefined)
      {
        navigate("/homepost");
      }
      else {
        setLoginSuccess("please Enter valid details ");
      }
     
    
    })
    .catch((error) => {
      console.log("An error occurred while fetching user:", error);
      event.preventDefault();
    });

    

  }

  const style={
    backgroundColor: "#f0f5f5",
    border: "1px solid "
}
  return (
    <>
    <Navigation loginValue={"Login"}/>
    <div style={{height: "100vh"  , backgroundColor: "gray"}}>
    <main className="primary-background  banner-background"  style={{ backgroundColor: "gray" }}>

    <div className="container" style={{}}>
    
        <div className="col-md-6 offset-md-3">
    
            <div className="card" style={{height: "600px" ,backgroundColor: "#f0f5f5", marginTop: "100px" ,
               boxShadow: "10px 10px 10px 10px 5px black" , marginLeft: "-300px"}}>
                <div className="card-header text-center primary-background ">
                    <span className="fa fa-3x fa-user-circle"></span>
                    <br />
                    Login here
                </div>
                <div className="card-body">
                    <form  >
    
    
                        <div className="form-group mb-4">
                            <label for="email" className='mb-2 ml-2'>Email address</label>
                            <input name="email" type="email" className="form-control" id="exampleInputEmail1" 
                            onChange={handleChange} value={FormData.email} aria-describedby="emailHelp" placeholder="Enter email" style={style}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
    
    
    
                        <div className="form-group mb-4">
                            <label for="exampleInputPassword1" className='mb-2 ml-2'>Password</label>
                            <input  name="password" type="password" className="form-control" 
                            onChange={handleChange} value={FormData.password} id="exampleInputPassword1" placeholder="Password" style={style}/>
                        </div>
    
                        <button id="button_id" type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
                        <button id="button_id" type="submit" className="btn btn-primary " onClick={handleForget} style={{marginLeft: "30px" , width: "200px"}
                        }>Forget password</button>


                        <div className="form-group mb-4 mt-5">
                            <label for="exampleInputPassword1" className='mb-2 ml-2'>if you have already account ? </label>
                            <a className='btn btn-success' style={{textDecoration: "none" , cursor: "pointer" , width: "100px"}} onClick={handleRegister}>Register</a>
                        </div>
                    </form>
    
                </div>
    
    
            </div>
    
                            <h3>{loginSuccess}</h3>
    
    
        </div>
    </div>
    
    </main>
    </div>
    </>
  )
}

export default Login
