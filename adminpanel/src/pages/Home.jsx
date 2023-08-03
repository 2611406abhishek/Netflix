import React, { useEffect, useMemo, useState } from 'react'
import '../style/Home.css';
import FeaturedInfo from '../components/FeaturedInfo';
import Chart from '../components/Chart';
import { userData } from '../ChartData';
import WidgetSmall from '../components/WidgetSmall';
import WidgetLarge from '../components/WidgetLarge';
import axios from "axios";

const Home = () => {


  const MONTHS = useMemo (
    ()=>[
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",
  ],[]);
  const [userStats,setUserStats] = useState([]);

  useEffect(() =>{

    const getStats = async () => {

          try{

            const res = await axios.get("users/stats",
            {headers:{
              token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,            }})
            // months are not in sorted order in response we are getting so sort according to id
            const statsList= res.data.sort(function (a,b) {
              return a._id-b._id;
            })
            statsList.map(item => setUserStats(prev => [...prev,{name:MONTHS[item._id-1],"New User":item.total}]))

          }catch(err) 
          {
            console.log(err);
          }

        }; 

        getStats();

  },[MONTHS]);

  
 console.log(userStats);
// console.log("hi");
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart title="User Analytics" data={userStats} grid={true} datakey="New User"/>
      <div className='homeWidgets'>
       <WidgetSmall/>
       <WidgetLarge/>
      </div>
    </div>
  )
}

export default Home