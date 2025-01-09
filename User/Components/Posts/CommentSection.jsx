import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styling
import './Commentsection.css'; // Custom CSS for additional styling
import { createComment, getComment } from '../../../Redux/User/Comment/Action';
import { getUserById } from '../../../Redux/User/Auth/Action';

const CommentSection = ({post, onCommentPost}) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username,setUsername]=useState("Manish");

  

  useEffect(()=>{
    getComment(post.id).then((comment)=>{
      console.log("comment is ",comment)
      setComments(comment);
      console.log("comment is created",comment);
     setComments([1,3,"hii temp"]);
      
    })
    .catch((error)=>{
      console.log("error is generated ");
    })
  },[]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const getUserName=(userId) => {
    getUserById(userId)
  .then((user)=>{
    console.log("user is found " , user);
    setUsername(user.name);
    return user.name;
  })
  .catch((error)=>{
    console.log("error is found ",error)
  })
}

  const handleAddComment = (e) => {
    e.preventDefault();
    const userData=localStorage.getItem("user");
    const user=JSON.parse(userData);
    if (newComment.trim()) {
     const reqData={
      postId: post.id,
      userId: user.id,
      comment: newComment
     }
     createComment(reqData)
     .then((res)=>{
        console.log("comment is ",res.comment);
        onCommentPost();
     })
     .catch((error)=>{
      console.log("error is generated ");
     })
    }
  };

  return (
    <div className="container mt-4 mainBody">
      <h4>Comments</h4>
      {/* Display Comments */}
      <div className="list-group">

        {comments && comments.map((comment) => (
         
          <div key={comment.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img
                src='https://www.w3schools.com/w3images/avatar2.png'
                alt="User Profile"
                className="rounded-circle"
                style={{ width: 40, height: 40, marginRight: '10px' }}
              />
              <div>
                <strong>{getUserName(comment.userId) || username}</strong>
                <p>{comment.anser}</p>
                <small>{"5hr"}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Comment */}
      <form className="mt-3" style={{display: "flex",flexDirection: "column"}}>
        <div className="input-group">
          <textarea
            className="form-control"
            placeholder="Write a comment..."
            value={newComment}
            onChange={handleCommentChange}
            rows="3"
          ></textarea>
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit" style={{width: "200px"}} onClick={handleAddComment}>
              Post Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;
