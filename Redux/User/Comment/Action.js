import axios from "axios";
import React from "react";

export const getComment=async (postId)=>{

   console.log("in the get comment action ");
   try {
      const response=await axios.get(`http://localhost:5454/api/post/comment/getcomment/${postId}`);
      const data=response.data;
      console.log("comment is finded ",data);
      return data;
   } catch (error) {
      console.log("error generated in getting comment");
   }
}

export const createComment=async (reqData)=>{
   console.log("in the create comment section ");
   try {
      const response=await axios.post("http://localhost:5454/api/post/comment/create",reqData);
      const data=response.data;
      return data;
   } catch (error) {
      console.log("error in creating comment");
   }
}