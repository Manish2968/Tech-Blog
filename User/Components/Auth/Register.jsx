import React, { useState } from 'react';
import './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Navbar/Navigation';
import {register } from "./../../../Redux/User/Auth/Action"

const Register = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        mobile: '',
        password: '',
        gender: '',
        profilePhoto: null,
        about: '',
        confirmPassword: ""
    });

    const [checkPassword,setCheckPassword]=useState(false);

    const handleChange = (event) => {
        const { name, value, type, files, checked } = event.target;

        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("this is running");
      
        const reqData={
             name: formData.userName,
	         email: formData.email,
	         mobile: formData.mobile,
	         password: formData.password,
	         gender: formData.gender,
	         profilePhoto: formData.profilePhoto.name,
	         about: formData.about
        }
      
        if(formData.password === formData.confirmPassword)
        {
            const data= register(reqData)
            console.log(data);
            navigate("/login")
        }
        else {
            setCheckPassword(true);
        }
        
    };

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const style = {
        backgroundColor: "#f0f5f5",
        border: "1px solid"
    };

    return (
        <>
            <Navigation loginValue={"Login"}/>
            <main style={{ backgroundColor: "gray", height: "70rem", width: "100vw" }}>
                <div className="container">
                    <div className="col-md-6 offset-md-3">
                        <div className="card" style={{ backgroundColor: "#f0f5f5", boxShadow: "10px 10px 10px 10px 5px black", height: "70rem" ,backgroundColor: "#f0f5f5", marginTop: "560px" ,
               boxShadow: "10px 10px 10px 10px 5px black" , marginLeft: "-200px" }}>
                            <div className="card-header text-center primary-background">
                                <span className="fa fa-3x fa-user-circle"></span>
                                <br />
                                Register here
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-4">
                                        <label htmlFor="userName" className='mb-2 ml-2'>User Name</label>
                                        <input name="userName" type="text" className="form-control" id="user_name" value={FormData.userName} onChange={handleChange} placeholder="Enter name" style={style} />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="user_email" className='mb-2 ml-2'>Email address</label>
                                        <input name="email" type="email" className="form-control" id="email" value={FormData.email} onChange={handleChange} placeholder="Enter email" style={style} />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="mobileNumber" className='mb-2 ml-2'>Mobile number</label>
                                        <input name="mobile" type="number" className="form-control" id="mobile" value={FormData.mobile} onChange={handleChange} placeholder="Enter mobile number" style={style} />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="password" className='mb-2 ml-2'>Password</label>
                                        <input name="password" type="password" className="form-control" id="password" value={FormData.password} onChange={handleChange} placeholder="Password" style={style} />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="confirmPassword" className='mb-2 ml-2'>Confirm Password</label>
                                        <input name="confirmPassword" type="password" className="form-control" id="confirmPassword" value={FormData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" style={style} />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="profilePhoto" className='mb-2 ml-2'>Profile Photo</label>
                                        <input name="profilePhoto" type="file" className="form-control" id="profilePhoto" onChange={handleChange} style={style} />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="gender" className='mb-2 ml-2'>Select Gender</label>
                                        <br />
                                        <input type="radio" id="gender_male" name="gender" value="male" onChange={handleChange}  style={style} /> <span className='ml-8'>Male</span>
                                        <input type="radio" id="gender_female" name="gender" value="female" onChange={handleChange}  style={style} /> <span className='ml-8'>Female</span>
                                    </div>

                                    <div className="form-group mb-4">
                                        <textarea name="about" className="form-control" rows="5" value={FormData.about} onChange={handleChange} placeholder="Enter something about yourself" style={style}></textarea>
                                    </div>

                                   

                                    <br />

                                    <div className="container text-center" id="loader" style={{ display: "none" }}>
                                        <span className="fa fa-refresh fa-spin fa-4x"></span>
                                        <h4>Please wait..</h4>
                                    </div>

                                    <button type="submit" className="btn btn-primary" style={{ width: "100px" }} onClick={handleSubmit}>Submit</button>

                                    <div className="form-group mb-4">
                                        <label htmlFor="exampleInputPassword1" className='mb-2 ml-2'>If you have an account, please</label>
                                        <a style={{ textDecoration: "none", marginLeft: "20px", cursor: "pointer" }} onClick={handleLogin} className='btn btn-success'>Login</a>
                                    </div>
                                </form>

                                    <h2 color='green' hidden={!checkPassword}>Password is not mateched please Enter correctly</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Register;
