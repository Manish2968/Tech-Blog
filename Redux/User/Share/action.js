import axios from "axios";
import React from "react";

export const getShare= async (postId)=>{
   console.log("in the share action");
   try {
         const response=await axios.get(`http://localhost:5454/api/share/getshare/${postId}`);
         const data=response.data;
         return data;
   }
   catch(error)
   {
      console.log("error is generated ");
   }
}

export const createShare=async (reqData)=>{
    console.log("in the create share method");
    try {
      const response=await axios.post("http://localhost:5454/api/share/create",reqData);
      const data=response.data;
      return data;
    } catch (error) {
         console.log("error is generated ");
    }
}