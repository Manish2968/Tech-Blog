import axios from "axios";

export const register = async (reqData) => {
   console.log("in the register");
   try {
      // Send the data as JSON, no need to stringify it
      const response = await axios.post("http://localhost:5454/api/user/register", reqData, {
         headers: {
            'Content-Type': 'application/json'  // Ensure JSON is sent
         }
      });
      console.log("completed the sequence");
      const data = response.data;
      return true;
   } catch (error) {
      console.log(error);
   }
};


export const login = async (loginRequest) => {
   console.log("in the register");
   
   try {
      // Send the data as JSON, no need to stringify it
      const response = await axios.post("http://localhost:5454/api/user/login", loginRequest , {
         headers: {
            'Content-Type': 'application/json'  // Ensure JSON is sent
         }
      });
      console.log("completed the sequence" ,response.data);
      const data = response.data;
      const user=JSON.stringify(data)
      localStorage.setItem("user",user);
      const temp=localStorage.getItem("user")
      console.log("user data is ", JSON.parse(temp));
      return true;
   } catch (error) {
      console.log(error);
   }
};

export const forget=async (reqData)=>{
   console.log("in the forget ");
   try {
      const response=await axios.post("http://localhost:5454/api/user/forget",reqData);
      const data=response.data;
      return data;
   }
   catch(error)
   {
      console.log(error)
   }
}

export const getUserById=async (userId) =>{
   console.log("in the getUserId method");
   try {
      
      const response=await axios.get(`http://localhost:5454/api/user/getuser/${userId}`);
      const data=response.data;
     // console.log("in the acrion ",data);
      return data;
   } catch (error) {
      console.log("error is generated ");
   }
}


export const editProfile=async (reqData)=>{
   console.log("in the action of edit profile");
   try {
      const response=await axios.post("http://localhost:5454/api/user/edit" ,reqData);
      const data=response.data;
      return data;
   } catch (error) {
      console.log("error is generated ");
   }
}

export const allUser=async ()=>{
   console.log("in the all user action ");
   try {
      const response=await axios.get("http://localhost:5454/api/user/all");
      const data=response.data;
      return data;
   } catch (error) {
      console.log("error occurred ",error);
   }
}

export const deleteUser=async (userId)=>{
   console.log("in the delete user section ");
   try {
      const response=await axios.post(`http://localhost:5454/api/user/${userId}`);
      const data=response.data;
      return data;
   } catch (error) {
      console.log("error is generated ");
   }
}

export const loginAdmin=async (reqData)=>{
   console.log("in the register");
   
   try {
      // Send the data as JSON, no need to stringify it
      const response = await axios.post("http://localhost:5454/api/admin/login", reqData , {
         headers: {
            'Content-Type': 'application/json'  // Ensure JSON is sent
         }
      });
      console.log("completed the sequence" ,response.data);
      const data = response.data;
     return data;
   } catch (error) {
      console.log(error);
   }
}