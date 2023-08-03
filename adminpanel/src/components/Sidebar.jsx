import React from 'react'
import '../style/Sidebar.css';
import {List,LineStyle,Timeline,TrendingUp,Person, Storefront, Report, WorkOutline, MailOutline, ChatBubbleOutline,DynamicFeed,Assessment,AttachMoney, PlayCircleOutline, AddToQueue, QueuePlayNext} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
         <div className='sidebarWrapper'>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                  <NavLink to="/" className='link'>
                  <li className='sidebarListItem active'>
                     <LineStyle className='sidebarIcon'/>
                     Home
                  </li>
                  </NavLink>
                
                  <li className='sidebarListItem'>
                     <Timeline  className='sidebarIcon'/>
                      Analytics
                  </li> 
                  <li className='sidebarListItem'>
                     <TrendingUp className='sidebarIcon' />
                     Sales
                  </li> 
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Quick menu</h3>
                <ul className='sidebarList'>
                  <NavLink to="/users" className="link">
                  <li className='sidebarListItem active'>
                     <Person className='sidebarIcon'/>
                     User
                  </li> 
                  </NavLink>
                  <NavLink to="/movies" className="link">
                  <li className='sidebarListItem'>
                     <PlayCircleOutline className='sidebarIcon'/>
                      Movies
                  </li> 
                  </NavLink>
                  <NavLink to="/lists" className="link">
                  <li className='sidebarListItem'>
                     <List className='sidebarIcon'/>
                      Lists
                  </li> 
                  </NavLink>
                  <NavLink to="/newproduct" className="link">
                  <li className='sidebarListItem'>
                     <AddToQueue className='sidebarIcon'/>
                      Add Movie
                  </li> 
                  </NavLink>
                  <NavLink to="/newList" className="link">
                  <li className='sidebarListItem'>
                     <QueuePlayNext className='sidebarIcon'/>
                      Add List
                  </li> 
                  </NavLink>
                  
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Notification</h3>
                <ul className='sidebarList'>
                  <li className='sidebarListItem active'>
                     <MailOutline className='sidebarIcon'/>
                     Mail
                  </li> 
                  <li className='sidebarListItem'>
                     <DynamicFeed className='sidebarIcon'/>
                      Analytics
                  </li> 
                  <li className='sidebarListItem'>
                     <ChatBubbleOutline className='sidebarIcon' />
                      Messages
                  </li> 
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                  <li className='sidebarListItem active'>
                     <WorkOutline className='sidebarIcon'/>
                      Manage
                  </li> 
                  <li className='sidebarListItem'>
                     <Timeline  className='sidebarIcon'/>
                      Analytics
                  </li> 
                  <li className='sidebarListItem'>
                     <Report className='sidebarIcon' />
                     Reports
                  </li> 
                </ul>
            </div>

         </div>
    </div>
  )
}

export default Sidebar