import React, { useEffect, useState } from 'react'
import './Listitem.scss';
import {PlayArrow,Add,ThumbUpAltOutlined,ThumbDownOutlined} from "@material-ui/icons";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const Listitem = (props) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const [movie,setMovie]=useState({});
    // const trailer =
    //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

       useEffect(()=>{
              const getMovie = async ()=>{
                try{
                     
                  const res = await axios.get("/movies/find/"+props.item,{
                    headers:{
                      token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,

                    },
                  })
                setMovie(res.data);
                
                }catch(err)
                {
                   console.log(err);
                }
              }

             getMovie();
       },[props.item])

    return (
    
      <NavLink to={{ pathname:"/watch"}} state={movie}>

      <div
        className="listItem"
        style={{ left: isHovered && props.index * 225 - 50 + props.index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={movie.img}
          alt=""
        />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
              <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">
              {movie.desc}
              </div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
      </NavLink>
    );
}

export default Listitem