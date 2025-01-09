import React, { useEffect, useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from '../User/pages/Homepage'
import Login from '../User/Components/Auth/Login'
import Register from '../User/Components/Auth/Register'
import Forget from '../User/Components/Auth/Forget'
import HomePost from '../User/Components/Posts/HomePost'
import SeePost from '../User/Components/Posts/SeePost'

import Friends from '../User/Components/Friends/Friends'
import CreatePost from '../User/Components/Posts/createPost/CreatePost'
import ProfileCard from '../User/Components/Profile/ProfileCard'
import EditProfile from '../User/Components/Profile/EditProfile'
import LoginAdmin from '../User/pages/Admin/LoginAdmin'
import AdminPanel from '../User/pages/Admin/AdminPanel'



const CustomerRouter = () => {
 const userData=localStorage.getItem("user");
 const user=JSON.parse(userData);
  return (
    <div>
      <Routes>
         <Route path='/' element={ user == null || undefined ? (<Homepage />) : (<HomePost/>)} ></Route>
         <Route path="/register" element={<Register />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/forget" element={<Forget />}></Route>
         <Route path="/homepost" element={<HomePost user={user}/>}></Route>
         <Route path="/seepost" element={<SeePost user={user}/>}></Route>
         <Route path="/createpost" element={<CreatePost user={user}/>}></Route>
         <Route path="/friends" element={<Friends />}></Route>
         <Route path='/profile/:profileId' element={<ProfileCard />} />
         <Route path="/profile/edit/:userId" element={<EditProfile />} ></Route>

         <Route path="/adminlogin" element={<LoginAdmin />}></Route>
         <Route path="/adminhome" element={<AdminPanel />} ></Route>
       
         

      </Routes>
      
    </div>
  )
}

export default CustomerRouter
