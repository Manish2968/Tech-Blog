import React, { useState } from 'react'
import Navigation from '../Components/Navbar/Navigation'
import { useNavigate } from 'react-router-dom'

const buttonStyle={
  width: "200px"
}

const Homepage = () => {
  const [login,setLogin]=useState("Login");

  const navigate=useNavigate();

  const userData=localStorage.getItem("user");
  const user=JSON.parse(userData);

  const handleLogin=()=>{
    if(user.name)
    {
     // navigate("/homepost");
      setLogin("Continue");
    }
    else {
      navigate("/login");
    }
   
  }

  const handleRegister=()=>{
    navigate("/register");
  }

  

  
  return (
    <div>
      <Navigation loginValue={"Login"} isAdmin={true}/>
         
      <div className="container-fluid p-0 m-0">

<div className=" main-body" style={{marginTop: "20px"}}>
    <div className="container" style={{display: "flex" , flexDirection: "column"}}>
        <h3 className="wel">Welcome to TechBlog </h3>

        <p>Welcome to technical blog, world of technology
            A programming language is a formal language, which comprises a set of instructions that produce various kinds of output. Programming languages
             are used in computer programming to implement algorithms.
        </p>
        <p>
            Most programming languages consist of instructions for computers. There are programmable machines that use a set of specific instructions,
             rather than general programming languages. 
        </p>
       <div style={{display: "flex" }}>
        
       <button className="btn btn-success ml-3 " style={{width: "200px"}} onClick={handleRegister}> <span className="fa 	fa fa-user-plus"></span>  Start ! its Free</button>
        <a href="#" className="btn btn-success ml-5" style={{marginLeft: "20px"}} onClick={handleLogin}> <span className="fa fa-user-circle fa-spin"></span>  Login</a>

       </div>
    </div>
</div>



</div>


<div className="container" style={{display: "flex" , flexDirection: "column" , marginTop: "400px"}}>
<div className="row mb-2" style={{display: "flex"}}>
    
    <div className="col-md-4">
        <div className="card" >
            
            <div className="card">
             
                <div className="card-body" style={{height: "300px"}}>
                  <h5 className="card-title">Python programming language </h5>
                  <p className="card-text">
    Python can be used on a server to create web applications.
    Python can be used alongside software to create workflows.
    Python can connect to database systems. It can also read and modify files.
    Python can be used to handle big data and perform complex mathematics.
    Python can be used for rapid prototyping, or for production-ready software development.

</p>
                  <a href="https://www.python.org/" className="btn btn-primary" style={{width: "200px"}}>Read more...</a>
                </div>
              </div>
            
            
        </div>
        
        
    </div>
      <div className="">
        <div className="">
            
            <div className="card" style={{ marginRight: "50px"}}>
             
                <div className="card-body">
                  <h5 className="card-title">Spring boot framework </h5>
                  <p className="card-text">Spring Boot Tutorial provides basic and advanced concepts of Spring Framework. Our Spring Boot Tutorial is designed for beginners and professionals both.

Spring Boot is a Spring module that provides the RAD (Rapid Application Development) feature to the Spring framework.

Our Spring Boot Tutorial includes all topics of Spring Boot such, as features, project, maven project, starter project wizard, Spring Initializr, CLI, applications, annotations, dependency management, properties, starters, Actuator, JPA, JDBC, etc.</p>
                  <a href="https://spring.io/projects/spring-boot" className="btn btn-primary" style={{width: "200px"}}>Read more...</a>
                </div>
              </div>
            
            
        </div>
        
        
    </div>
      <div className="" style={{display: "flex" , flexDirection: "column"}}>
        <div className="" style={{width: "400px"  , marginRight: "200px"}}>
            
            <div className="card">
             
                <div className="card-body">
                  <h5 className="card-title">Javascript programming language </h5>
                  <p className="card-text">In this tutorial, the learning speed is your choice.

Everything is up to you.

If you are struggling, take a break, or re-read the material.

Always make sure you understand all the "Try-it-Yourself" examples.

The only way to become a clever programmer is to: Practice. Practice. Practice. Code. Code. Code !</p>
                  <a href="https://www.w3schools.com/js/default.asp" className="btn btn-primary" style={{width: "200px"}}>Read more...</a>
                </div>
              </div>
            
            
        </div>
        
        
    </div>
    
    
</div>
<div className="" style={{display: "flex" , flexDirection: "column"}}>
    
    <div className="">
        <div className="">
            
            <div className="card">
             
                <div className="card-body">
                  <h5 className="card-title">C programming language </h5>
                  <p className="card-text">C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.

It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.

C is strongly associated with UNIX, as it was developed to write the UNIX operating system..</p>
                  <a href="https://www.w3schools.com/c/c_intro.php" className="btn btn-primary" style={{width: "200px"}}>Read more...</a>
                </div>
              </div>
            
            
        </div>
        
        
    </div>
      <div className="">
        <div className="">
            
            <div className="card">
             
                <div className="card-body">
                  <h5 className="card-title">React programming language </h5>
                  <p className="card-text">Track your progress with the free "My Learning" program here at W3Schools.

Log in to your account, and start earning points!

This is an optional feature. You can study at W3Schools without using My Learning.
.</p>
                  <a href="https://www.w3schools.com/REACT/DEFAULT.ASP" className="btn btn-primary" style={{width: "200px"}}>Read more...</a>
                </div>
              </div>
            
            
        </div>
        
        
    </div>
      <div className="">
        <div className="">
            
            <div className="card">
             
                <div className="card-body">
                  <h5 className="card-title">Hibernate framework programming language </h5>
                  <p className="card-text">JDBC code is dependent upon the Database software being used i.e. our persistence logic is dependent, because of using JDBC. Here we are inserting a record into Employee table but our query is Database software-dependent i.e. Here we are using MySQL. But if we change our Database then this query won’t work.

</p>
                  <a href="https://www.geeksforgeeks.org/introduction-to-hibernate-framework/" className="btn btn-primary" style={{width: "200px"}}>Read more...</a>
                </div>
              </div>
            
            
        </div>
        
        
    </div>
    
    
</div>

</div>


      
    </div>
  )
}

export default Homepage
