
import axios from "axios";
import React from "react";

export const createPost = async (reqData) => {
   console.log("in the action of post creating method ");
   try {

      const response=await axios.post("http://localhost:5454/api/post/create" , reqData);
      const data=response.data;
      console.log("post created successfully");
      return true;
   }
   catch(error)
   {
      console.log(error)
   }
}

export const generalPost= async () => {
   console.log("in the general post method ");
   try {
      const response=await axios.get("http://localhost:5454/api/post/general");
      const data=response.data;
     
      return data;
   } catch (error) {
      console.log("error is generated in post method");
   }
}

export const seePost= async (email)=> {

   console.log("in the seepst action method");
   try {
      const response= await axios.get(`http://localhost:5454/api/post/seepost/${email}`);
      const data=response.data;
      const userPost=JSON.stringify(data);
      localStorage.setItem("userpost",userPost);
      console.log("completed the getting user post ");
      return data;
   } catch (error) {
      console.log("error is generated ");
   }
}

export const deletePost=async (postId)=>{
      console.log("in the delete post method ");
      try {
         const reasponse = await axios.post(`http://localhost/api/post/delete/${postId}`);
         const data=reasponse.data;
         return data;
         
      } catch (error) {
         console.log("error is generated ");
         
      }
}