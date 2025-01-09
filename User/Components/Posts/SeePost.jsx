import React, { useEffect } from 'react'
import PostCard from './PostCard'
import Navigation from '../Navbar/Navigation'
import { seePost } from '../../../Redux/User/Post/Action';

const SeePost = ({user}) => {
 
  useEffect(()=>{
    const res=seePost(user.email);
  },[]);
  const data=localStorage.getItem("userpost");
  const posts=JSON.parse(data);

  return (
    <div>
      { <Navigation loginValue={user.name.toUpperCase()}/>}
      {posts && posts.length > 0 ? (
        posts.map((value, index) => (
          <PostCard key={index} cardValue={value} />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  )
}

export default SeePost
