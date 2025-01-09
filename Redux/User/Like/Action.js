import axios from "axios";
import React from "react";

export const getLikeByPostId=async (postId,userId)=>{
   const userData=localStorage.getItem("user");
   const user=JSON.parse(userData);
   console.log("in the like action method ",postId , userId);
   try {
       const response=await axios.get(`http://localhost:5454/api/like/getlike/${postId}/${user.id}`);
       const data=response.data;
       console.log("like is in the action ",data);
       return data;
   } catch (error) {
      console.log("error is generated ");
   }
}

export const getHandleLikeIncreament=async (postId,userId)=>{
   console.log("in the like action method " , postId, userId);
   const userData=localStorage.getItem("user");
   const user=JSON.parse(userData);
   try {
       const response=await axios.get(`http://localhost:5454/api/like/increament/${postId}/${user.id}`);
       const data=response.data;
       console.log("like is in the action ",data);
       return data;
   } catch (error) {
      console.log("error is generated ");
   }
}