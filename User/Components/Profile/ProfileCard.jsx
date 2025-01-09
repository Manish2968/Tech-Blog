import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import image from "./Boxer.webp"
import { Profile } from '../Posts/PostImage/Profile';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserById } from '../../../Redux/User/Auth/Action';
const ProfileCard = () => {
  const location=useLocation();
  const user = {
    name: 'John Doe',
    age: 28,
    email: 'johndoe@example.com',
    profession: 'Software Developer',
    profilePic: image, // Replace with a real image URL
    coverPic: image, // Cover photo
    socialLinks: {
      facebook: 'https://www.facebook.com',
      twitter: 'https://www.twitter.com',
      linkedin: 'https://www.linkedin.com',
    },
  };
  const [userData,setUserData]=useState(null);
  const [profilePicture,setProfilePicture]=useState(null);
  const [editProfile,setEditProfile]=useState(false);

  const navigate=useNavigate();

    useEffect(()=>{
     if(userData == null)
     {
      const path=location.pathname.substring(9,location.pathname.length);
      getUserById(path)
      .then((userTemp)=>{
        
        setUserData(userTemp);

        for(let i=0; i < Profile.length; i++)
        {
          if(userTemp.name == Profile[i].name)
          {
            setProfilePicture(Profile[i].image);
          }
        }

      })
      .catch((error)=>{
        console.log("error is generated ");
      })
     }
    })

    const handleEdit=()=>{
        navigate(`/profile/edit/${userData.id}`)
    }


  return (
  <>
  {
    userData && 
  <Container className="mt-4">
      {/* Header (Cover photo) */}
      <div className="mb-4">
        <img
          src={user.coverPic}
          alt="Cover"
          className="img-fluid w-100"
          style={{ height: '300px', objectFit: 'cover' }}
        />
      </div>

      <Row>
        <Col md={4} className="text-center">
          {/* Profile Picture */}
          <img
            src={profilePicture}
            alt="Profile"
            className="img-fluid rounded-circle border"
            style={{ width: '150px', height: '150px' }}
          />
        </Col>

        <Col md={8}>
          {/* Profile Details */}
          <Card>
            <Card.Body>
              <Card.Title>{userData.name}</Card.Title>
              <Card.Text>
                <strong>Age:</strong> {userData.age || 21} <br />
                <strong>Email:</strong> {userData.email} <br />
                <strong>Profession:</strong> {userData.domai} <br />
                <strong>Mobile:</strong> {userData.mobile} <br />
                <strong>Gender:</strong> {userData.gender} <br />
                <strong>about:</strong> {userData.about} <br />

              </Card.Text>

               
            
            </Card.Body>
          </Card>

          {/* Social Links */}
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Social Links</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <a href={user.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </ListGroup.Item>
              </ListGroup>

              <Card.Footer>
                <Button onClick={handleEdit}>Edit</Button>
              </Card.Footer>
            </Card.Body>
          </Card>

       
        </Col>
      </Row>
    </Container>
}
    </>
  );
};

export default ProfileCard;
