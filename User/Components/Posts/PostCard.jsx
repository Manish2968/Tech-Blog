import React, { useEffect, useState } from 'react';
import './Postcard.css';
import imagePro from './PostImage/Boxer.webp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { ModeCommentOutlined } from '@mui/icons-material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import { Profile } from './PostImage/Profile';
import { useNavigate } from 'react-router-dom';
import { getUserById } from '../../../Redux/User/Auth/Action';
import { getHandleLikeIncreament, getLikeByPostId } from '../../../Redux/User/Like/Action';
import { postImage } from './PostImage/PostImg';
import { getComment } from '../../../Redux/User/Comment/Action';
import CommentSection from './CommentSection';
import { createShare, getShare } from '../../../Redux/User/Share/action';

const PostCard = ({ cardValue, image }) => {
  const [user, setUser] = useState(null);   // State to store user info
  const [time, setTime] = useState("1hr");
  const [handleLikeCss, setHandleLikeCss] = useState(false);
  const [like, setLike] = useState(null);
  const [profilePicture, setProfilePicture] = useState(imagePro);
  const [handleLike, setHandleLike] = useState(false);
  const [currentImage, setCurrentImage] = useState(imagePro);
  const [commentLength, setCommentLength] = useState(0);
  const [commentSection, setCommentSection] = useState(false);
  const [shareLength,setShareLength]=useState(0);
  const [isHidden,setIsHidden]=useState(false);
  const navigate = useNavigate();

  // Function to simulate fetching user data by user ID
  const fetchUserData = async (userId) => {
    const userData = await getUserById(userId);
    return userData;
  };

  // Function to simulate fetching likes for the post by postId
  const fetchLikesByPostId = async (postId) => {
    const likes = await getLikeByPostId(postId);
    return likes;
  };

  // Function to simulate incrementing likes for the post
  const incrementLikes = async (postId) => {
    const updatedLikes = await getHandleLikeIncreament(postId);
    return updatedLikes;
  };

  // Fetch data when component mounts or when cardValue changes
  useEffect(() => {
    // Calculate time difference
    console.log(cardValue.createdAt);
    let hr = cardValue.createdAt.substring(11, 13);
    console.log(hr);
    if (hr > 12) {
      hr = hr - 12;
    }
    let currentHr = new Date().getHours();
    if (currentHr - hr > 0) {
      setTime(currentHr - hr + " hr");
    } else {
      setTime(Math.abs(new Date().getMinutes() - (cardValue.createdAt.substring(14, 16))) + " minutes");
    }

    console.log("time is ",time)

    // Fetch user data
    fetchUserData(cardValue.idUser)
      .then((userData) => {
        setUser(userData);
        Profile.forEach((profile) => {
          if (profile.name === userData.name) {
            setProfilePicture(profile.image);
          }
        });
        postImage.forEach((postImg) => {
          if (postImg.name === userData.name) {
            setCurrentImage(postImg.image[cardValue.postNumber]);
          }
        });
      })
      .catch((error) => {
        console.log("An error occurred while fetching user:", error);
      });

    // Fetch likes data
    fetchLikesByPostId(cardValue.id,cardValue.idUser)
      .then((likesCount) => {
        console.log("likes is ",likesCount)
        setLike(likesCount);
        if(likesCount.isLike == true)
        {
          setHandleLikeCss(true);
        }
      })
      .catch((error) => {
        console.log("An error occurred while fetching likes:", error);
      });

    // Fetch comments count
    getComment(cardValue.id)
      .then((commentData) => {
        setCommentLength(commentData.length);  // Assuming commentData is an array of comments
      })
      .catch((error) => {
        console.log("An error occurred while fetching comments:", error);
      });

      //fetch share count
      getShare(cardValue.id)
      .then((share)=>{
        console.log("share is ",share.count);
        setShareLength(share.count)
      })
      .catch((error)=>{
        console.log("error generating ",error);
      })

  }, [cardValue]);

  const handleProfile = () => {
    const userData=localStorage.getItem("user");
    const user=JSON.parse(userData)
    navigate(`/profile/${user.id}`);
  };

  const handleLikeIncreament = () => {
    if (!handleLike) {
      incrementLikes(cardValue.id,2)
        .then((newLikes) => {
          setHandleLike(true);
          setHandleLikeCss(true);
          setLike(newLikes);  // Incremented like count
        })
        .catch((error) => {
          console.log("An error occurred while incrementing likes:", error);
        });
    } else {
      console.log("You've already liked this post");
    }
  };

    // Function to handle hiding comment section after a successful comment
    const handleHideCommentSection = () => {
      setCommentSection(false); // Hide comment section
    };

    const handleShare=()=>{
      console.log("clicked on share button");
      const tempUser=localStorage.getItem("user");
      const temp=JSON.parse(tempUser)
      const reqData={
        postId: cardValue.id,
        currentUserId: temp.id
      }
      createShare(reqData)
      .then((share)=>{
        setShareLength(shareLength + 1);
        console.log("post shared");
      })
      .catch((error)=>{
        console.log("error is generated ");
      })
    }
  
   
  const handleComment = () => {
    setCommentSection(true);  // Toggle comment section visibility
  };

  const handleHidePost=()=>{
      setIsHidden(true);
  }

  return (
    <div className="post-container" hidden={isHidden}>
      <div className="post-header">
        <div className="post_header" onClick={handleProfile}>
          <img src={profilePicture} alt="Profile Picture" className="profile-pic" />
          <div className="post-info" onClick={handleProfile}>
            <span className="name">{user ? user.name : "Loading..."}</span>
            <span className="time">{time}</span>
          </div>
        </div>
        <div className="cross">
          <span className="menu"><MoreHorizIcon /></span>
          <span className="cross2" onClick={handleHidePost}><CloseIcon /></span>
        </div>
      </div>
      <div className="post-category">
        <h4>{cardValue.content}</h4>
      </div>
      <div className="post-content">
        <img src={currentImage} alt="Post Image" className="post-image" />
      </div>
      <div className="post-footer">
        <div className="like-share-button">
          <div className="like-button" onClick={handleLikeIncreament}>
            {handleLikeCss ? <ThumbUpAltRoundedIcon /> : <ThumbUpOutlinedIcon />}
            <small className="ml-2">{like ? like.count : "Loading..."}</small>
          </div>
          <div className="comment-button" onClick={handleComment}>
            <ModeCommentOutlined />
            <small className="ml-2">{commentLength}</small>
          </div>
          <div className="share-button" onClick={handleShare}>
            <SendOutlinedIcon />
            <small>{shareLength}</small>
          </div>
        </div>
      </div>
      {/* Pass the handleHideCommentSection callback to CommentSection */}
      {commentSection && <CommentSection post={cardValue} onCommentPost={handleHideCommentSection} />}
    </div>
  );
};

export default PostCard;
