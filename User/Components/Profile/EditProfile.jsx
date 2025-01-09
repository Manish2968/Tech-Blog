import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { editProfile, getUserById } from '../../../Redux/User/Auth/Action';

const EditProfile = () => {

   const [userData,setUserData]=useState(null);
  const [formData, setFormData] = useState({
    name:  '',
    domain:  '',
    email:  '',
    password: '',
    mobile: '',
    profilePhotoUrl:  '',
    gender:   '',
    about: '',
    id: ""
  });
  const location=useLocation();
  const navigate=useNavigate();

   useEffect(()=>{
        if(userData == null)
        {
         const path=location.pathname.substring(14,location.pathname.length);
         getUserById(path)
         .then((user)=>{
            setUserData(user);
         })
         .catch((error)=>{
            console.log("error is generated ")
         })
        }

   })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onSave to update the data (could be an API call in real life)
    const reqData={
      name: formData.name,
     email: formData.email,
     mobile: formData.mobile,
     gender: formData.gender,
     profilePhoto: formData.profilePhotoUrl.name,
     about: formData.about,
     id: userData.id
 }
    editProfile(reqData)
    .then((res)=>{
       navigate("/homepost")
    })
    .catch((error)=>{
      console.log("error is generated ");
    })

   
  };

  return (
    <Container style={{ height: "100vh"}}>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Edit Profile</h2>
          <Form onSubmit={handleSubmit} style={{width: "400px"}}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="domain">
              <Form.Label>Domain</Form.Label>
              <Form.Control
                type="text"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

          

            <Form.Group controlId="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="profilePhotoUrl">
              <Form.Label>Profile Photo URL</Form.Label>
              <Form.Control
                type="file"
                name="profilePhotoUrl"
                value={formData.profilePhotoUrl}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="about">
              <Form.Label>About</Form.Label>
              <Form.Control
                as="textarea"
                name="about"
                value={formData.about}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3" style={{width: "200px"}} onClick={handleSubmit}>
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProfile;
