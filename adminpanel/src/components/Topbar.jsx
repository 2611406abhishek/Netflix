import React from 'react'
import '../style/Topbar.css';
import {NotificationsNone,Language,Settings} from '@material-ui/icons';
import Img from '../Images/Eagle.jpg'
const Topbar = () => {
  return (
    <div className='topbar'>
       <div  className="topbarWrapper">
           <div className='topLeft'>
            <span className='logo'>MyAdmin</span>
           </div>
           <div className='topRight'>
              <div className='topbarIconContainer'>
                  <NotificationsNone/>
                  <span className='topIconBadge'>2</span>
              </div>
              <div className='topbarIconContainer'>
                  <Language/>
                  <span className='topIconBadge'>2</span>
              </div>
              <div className='topbarIconContainer'>
                  <Settings/>
              </div>
              <img src={Img} alt="profile img" className='topAvatar'/>
           </div>
       </div>
    </div>
  )
}

export default Topbar;