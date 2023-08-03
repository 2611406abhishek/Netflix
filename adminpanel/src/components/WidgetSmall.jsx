import React, { useEffect, useState } from 'react'
import '../style/WidgetSmall.css';
// import myimg from '../Images/Aboutlogo.svg';
import { Visibility } from '@material-ui/icons';
import axios from 'axios';

const WidgetSmall = () => {
   const [newUsers, setNewUsers] = useState([]);

   useEffect(() => {
     const getNewUsers = async () => {
       try {
         const res = await axios.get("/users?new=true", {
           headers: {
           token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,         },
         });
         setNewUsers(res.data);
       } catch (err) {
         console.log(err);
       }
     };
     getNewUsers();
   }, []);
   
   return (
     <div className="widgetSm">
       <span className="widgetSmTitle">New Join Members</span>
       <ul className="widgetSmList">
         {newUsers.map((user,idx) => (
           <li className="widgetSmListItem">
             <img
               src={
                 user.profilePic ||
                 "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
               }
               alt=""
               key={idx}
               className="widgetSmImg"
             />
             <div className="widgetSmUser">
               <span className="widgetSmUsername">{user.username}</span>
             </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon" />
               Display
             </button>
           </li>
         ))}
       </ul>
     </div>
   );
}

export default WidgetSmall

// token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzhlNmI0NzI3YTE1OGEwYWYxYjVmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjE2NDU5NSwiZXhwIjoxNjg2NTk2NTk1fQ.p9K95sVLD2JXf_7Ep5Z46HC9820BLKgj-evX-TpgtjQ"