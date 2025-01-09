import React, { useEffect, useState } from 'react'
import "./Nav.css";
import "./../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';

const Navigation = ({loginValue , isAdmin}) => {
  
  const [login,setLogin]=useState("Login");
  const navigate=useNavigate();
  const handleLogin=()=>{
      navigate("/login")

  }
  useEffect(()=>{
    const userData=localStorage.getItem("user");
    //const user=JSON.parse(userData);
    setLogin(loginValue)
  })
  const handleHome=()=>{
    navigate("/homepost")
  }
  const handleCreate=()=>{
    navigate("/createpost")
  }
  const handleFriends=()=>{
    navigate("/friends")
  }
  const handleSee=()=>{
    navigate("/seepost")
  }

  const adminLogin=()=>{
    navigate("/adminlogin")
  }

  
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-primary">

  <div class="container-fluid">
    <a class="navbar-brand" href="#">Techblog</a>
    
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav mx-auto my-4 mx-8 my-lg-0 navbar-nav-scroll main-content" >
        <li class="nav-item mr-4">
          <h2 className='nav-link' onClick={handleHome}>Home</h2>
        </li>
        <li class="nav-item mr-4">
        <h2 className='nav-link' onClick={handleCreate}>Create</h2>
        </li>
        <li class="nav-item mr-4">
        <h2 className='nav-link' onClick={handleSee}>See</h2>
        </li>

        <li class="nav-item mr-4">
        <h2 className='nav-link' onClick={handleFriends}>Friends</h2>
        </li>
       
        <li class="nav-item mr-4">
        <button className='nav-link' onClick={handleLogin}>{loginValue}</button>
        </li>
       
        
      </ul>
    { isAdmin &&   <form class="d-flex" role="search">
        
        <button class="btn btn-success" type="submit" style={{width: "120px"}} onClick={adminLogin}> Admin</button>
      </form>}
    </div>
  </div>
</nav>
      
    </>
  )
}

export default Navigation
