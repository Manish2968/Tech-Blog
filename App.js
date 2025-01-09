import logo from './logo.svg';
import './App.css';
import Homepage from './User/pages/Homepage';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CustomerRouter from './Router/CustomerRouter';
import PostCard from './User/Components/Posts/PostCard';
import CreatePost from './User/Components/Posts/createPost/CreatePost';
import ProfileCard from './User/Components/Profile/ProfileCard';

import image from "./logo.svg"




function App() {
  return (
    <div>
      
     
      <CustomerRouter />
      {/* <CreatePost /> */}
       {/* <ProfileCard /> */}



      
     
    </div>
  );
}

export default App;
