import React, { useEffect, useState } from 'react'
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import './Featured.scss';
import axios from 'axios';

const Featured = (props) => {
 
   const [content,setContent] = useState({});

   useEffect(()=>{

           const getRandomContent = async ()=>{
            try{
                const res = await axios.get(`/movies/random?type=${props.type}`,{
                  headers:{
                    token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                  },
                })
                // console.log(res.data);
                setContent(res.data[0]);
            }catch(err){
               console.log(err);
            }
           }
        getRandomContent()
           
   },[props.type])
  
  return (
    <div className="featured">
    {props.type && (
      <div className="category">
        <span>{props.type === "movies" ? "Movies" : "Series"}</span>
        <select name="genre" id="genre" onChange={ (e) =>props.setGenre(e.target.value)}>
          <option>Genre</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="historical">Historical</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="thriller">Thriller</option>
          <option value="western">Western</option>
          <option value="animation">Animation</option>
          <option value="drama">Drama</option>
          <option value="documentary">Documentary</option>
        </select>
      </div>
    )}
    <img
      src={content.img}
      alt=""
    />
    <div className="info">
      <img
        src={content.imgTitle}   alt=""
      />
      <span className="desc">
        {content.desc}
      </span>
      <div className="buttons">
        <button className="play">
          <PlayArrow />
          <span>Play</span>
        </button>
        <button className="more">
          <InfoOutlined />
          <span>Info</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Featured