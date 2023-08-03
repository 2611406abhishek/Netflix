import React, { useEffect, useState } from 'react'
import {} from '@material-ui/icons';
import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from "axios";

const Home = (props) => {

     const [lists,setLists] = useState([]);
     const [genre,setGenre] = useState(null);
     useEffect(()=>{
       const getRandomLists = async ()=>{
        try{
           
          const res = await axios.get(`lists${ props.type ?  "?type=" + props.type : ""}${genre ? "?genre=" + genre : ""}`,{
            headers:{
              token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,              
            },
          }) 

          // console.log(res.data);
          setLists(res.data);
        }catch(err)
        {
          console.log(err);
        }
       }
       getRandomLists();
     },[props.type,genre])
     // [props.type,genre] is used as dependencies whenever we change our type and genre we will call our useeffect

  return (
    <div className='home'>
         <Navbar/>
         <Featured type={props.type} setGenre={setGenre}/>
         {lists.map((list,idx) =>(
              <List list={list} key={idx}/>
         ))}
         
    </div>
  )
}

export default Home