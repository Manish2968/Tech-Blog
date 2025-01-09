import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import Navigation from '../Navbar/Navigation';

import { generalPost } from '../../../Redux/User/Post/Action';
import { getUserById } from '../../../Redux/User/Auth/Action';

import image1 from "./PostImage/eighteen.jpg";
import image2 from "./PostImage/third.webp"
import image3 from "./PostImage/fourth.webp"
import image4 from "./PostImage/five.jpg"
import image5 from "./PostImage/six.jpg"
import image6 from "./PostImage/seven.webp"
import image7 from "./PostImage/eight.jpg"
import image8 from "./PostImage/nine.jpg"
import image9 from "./PostImage/ten.jpg"
import image10 from "./PostImage/eleven.webp"
import image11 from "./PostImage/tweleve.webp"
import image12 from "./PostImage/thirteen.jpg"
import image13 from "./PostImage/fourteen.jpg"
import image14 from "./PostImage/fifteen.jpg"
import image15 from "./PostImage/sixteen.jpg"
import image16 from "./PostImage/seventeen.jpg"
import image17 from "./PostImage/eighteen.jpg"
import image18 from "./PostImage/ninteen.jpg";
import profile from "./PostImage/Boxer.webp";

import { Profile } from './PostImage/Profile';
import { postImage } from './PostImage/PostImg';

const imageArr=[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,
  image11,image12,image13,image14,image15,image16,image16,image17,image18
];



const HomePost = ({user}) => {
  const [posts, setPosts] = useState([]);  // State to store posts
  
  


  useEffect(() => {
    // Fetch posts (Here, we're simulating it by fetching from localStorage for example)
   if(posts.length == 0)
   {
    generalPost()
    .then((posts)=>{
      setPosts(posts.reverse());
    })
    .catch((error)=>{
      console.log("error is generated");
    })
   }

    // Fetch user data from localStorage
   
  }, []);  // Empty array means this runs once after the first render

  



  return (
    <div>
      <Navigation loginValue={user == null ? "User" : user.name.toUpperCase()} />
      {posts && posts.length > 0 ? (
        posts.map((value, index) => (
          <PostCard key={index} cardValue={value} image={imageArr[index]}/>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default HomePost;
