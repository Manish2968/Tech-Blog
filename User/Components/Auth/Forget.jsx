import React, { useState } from 'react'
import Navigation from '../Navbar/Navigation'

const Forget = () => {

    const [formData,setFormData]=useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

  const style={
    backgroundColor: "#f0f5f5",
    border: "1px solid "
}

    const handleChange=(event)=>{
        setFormData({...formData,[event.target.name]: event.target.value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("forget request ",formData)
    }
  return (
   <>
   <Navigation loginValue={"Login"}/>
    <div style={{backgroundColor: "gray" , height: "100vh" , width: "100vw"}}>
    <main className="primary-background  banner-background"  style={{paddingBottom: "80px" , backgroundColor: "gray"  }}>

<div className="container" >

    <div className="col-md-6 offset-md-3">

        <div className="card" style={{backgroundColor: "#f0f5f5" , boxShadow: "10px 10px 10px 10px 5px black" , height: "600px" ,backgroundColor: "#f0f5f5", marginTop: "100px" ,
               boxShadow: "10px 10px 10px 10px 5px black" , marginLeft: "-300px"}}>
            <div className="card-header text-center primary-background ">
                <span className="fa fa-3x fa-user-circle"></span>
                <br />
                Forget password
            </div>
            <div className="card-body">
                <form  onSubmit={handleSubmit}>

                 

                    <div className="form-group mb-4">
                        <label for="exampleInputEmail1" className='mb-2 ml-2'>Email address</label>
                        <input name="email" type="email" className="form-control" id="exampleInputEmail1" 
                        onChange={handleChange} value={FormData.email} aria-describedby="emailHelp" placeholder="Enter email" style={style}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>



                    <div className="form-group mb-4">
                        <label for="exampleInputPassword1" className='mb-2 ml-2'>New Password</label>
                        <input  name="password" type="password" className="form-control" 
                        onChange={handleChange} value={FormData.password} id="exampleInputPassword1" placeholder="Password" style={style}/>
                    </div>

                    <div className="form-group mb-4">
                        <label for="exampleInputPassword2" className='mb-2 ml-2'>Confirm Password</label>
                        <input  name="confirmPassword" type="password" className="form-control" 
                        onChange={handleChange} value={FormData.confirmPassword} id="exampleInputPassword2" placeholder="Confirm Password" style={style}/>
                    </div>


                 

                    <button id="button_id" type="submit" className="btn btn-success" onClick={handleSubmit}>Save</button>
                </form>

            </div>


        </div>




    </div>
</div>

</main>
      
    </div>
    </>
  )
}

export default Forget
