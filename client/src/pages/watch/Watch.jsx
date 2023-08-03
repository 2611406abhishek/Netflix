import { NavLink, useLocation } from 'react-router-dom';
import './Watch.scss';
import { ArrowBackOutlined } from "@material-ui/icons";

const Watch = () => {

  // 
   const location = useLocation();
   const movie=location.state;
  //  console.log(movie);

  return (
    <div className="watch">
     <NavLink to="/">
     <div className="back">
        <ArrowBackOutlined />
        Home 
      </div>
     </NavLink> 
      <video
        className="video"
        autoPlay={true}
        progress="true"
        controls={true}
        src={movie.trailer}
        />
    </div>
  )
}

export default Watch