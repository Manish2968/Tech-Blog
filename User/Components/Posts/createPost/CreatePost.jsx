import React, { useEffect, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import image from "./../PostImage/Boxer.webp"
import "./createPost.css"
import Navigation from "./../../Navbar/Navigation"
import { createPost } from '../../../../Redux/User/Post/Action';
import { useNavigate } from 'react-router-dom';
import { Profile } from '../PostImage/Profile';
import imagePro from "./../PostImage/eighteen.jpg";

const CreatePost = ({user}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: "",
    postName: "",
    content: "",
    imageUrl: ""
});
const [profilePicture,setProfilePicture]=useState(imagePro);

const navigate=useNavigate();

useEffect(()=>{


for(let i=0; i < Profile.length; i++)
{
  if(user.name == Profile[i].name)
  {
    setProfilePicture(Profile[i].image);
  }
}
},[]);


const handleChange = (event) => {
    const { name, value, type, files, checked } = event.target;

    if (type === 'file') {
        setFormData({ ...formData, [name]: files[0] });
    }
    else {
        setFormData({ ...formData, [name]: value });
    }
};

const handlePost = (event) => {
    event.preventDefault();
    console.log("this is running")
    const reqData={
       email: user.email,
       password: user.password,
       name : formData.postName,
       content: formData.content,
       imageUrl: formData.imageUrl.name,
       PostNumber: user.PostNumber
    }
    console.log("request data in create post ",reqData)
    const data=createPost(reqData);
    console.log("created post successfully ", data);
    navigate("/homepost");


  }
  

 

  return (
   <>
   <Navigation loginValue={user.name.toUpperCase()}/>
    <div className='main-container'>
       <div className='container'>
            <div className='create-body'>
            <div class="post-header">
                <div className="post_header">
                <img src={profilePicture} alt="Profile Picture" class="profile-pic" />
                  <div class="post-info">
                    <span class="name">{user.name.toUpperCase()}</span>
                  </div>
                </div>
                  <div className='cross'>
                  <span class="menu"><MoreHorizIcon></MoreHorizIcon></span>
                  <span class="cross2"><CloseIcon /></span>
                  </div>
                </div>

              {/* write your post  */}
              <div className='write-post'>

             
              
              <textarea name="content" id="post-write" rows={8} cols={75} placeholder='write about programming language'
              onChange={handleChange} value={FormData.content} >


              </textarea>
              
            
              </div>
              <div className='post-image'>
                <input type="file" name="imageUrl" onChange={handleChange} value={FormData.file}/>
                <button class ="btn" type="button" onClick={handlePost}>Post</button>
              </div>
              
             
              

            </div>

            </div>

            
       
    </div>
    </>
  )
}

export default CreatePost
