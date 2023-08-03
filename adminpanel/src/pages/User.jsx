import '../style/User.css';
import myimg from '../Images/Eagle.jpg';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
const User = () => {
  return (
    <div className='user'>
          <div className='userTitleContainer'>
          <h1 className='userTitle'>Edit User</h1>
          <NavLink to="/newUser"> <button className='userAddButton'>Create</button></NavLink>
          
          </div>
          <div className='userContainer'>
             <div className='userShow'>
                <div className='userShowTop'>
                   <img src={myimg} alt="" className='userShowImg'/>
                    <div className='userShowTopTitle'>
                    <span className='userShowUsername'>  Abhishek soni</span>
                    <span className='userShowUserTitle'>  software Engineer</span>
                    </div>
                </div>
                <div className='userShowBottom'>
                      <span className='userShowTitle'>Account Details</span>
                      
                      <div className='userShowInfo'>
                        <PermIdentity className='userShowIcon'/>
                        <span className='userShowInfoTitle'>soniguy33</span>
                      </div>
                      <div className='userShowInfo'>
                        <CalendarToday className='userShowIcon'/>
                        <span className='userShowInfoTitle'>25.11.2001</span>
                      </div>

                      <span className='userShowTitle'>Contact Details</span>
                      <div className='userShowInfo'>
                        <PhoneAndroid  className='userShowIcon'/>
                        <span className='userShowInfoTitle'>+1 123 355 232</span>
                      </div>
                      <div className='userShowInfo'>
                        <MailOutline className='userShowIcon'/>
                        <span className='userShowInfoTitle'>soniguy33@gmail.com</span>
                      </div>
                      <div className='userShowInfo'>
                        <LocationSearching className='userShowIcon'/>
                        <span className='userShowInfoTitle'>Faridabad|Haryana</span>
                      </div>
                      
                </div>
             </div>
             <div className='userUpdate'>
                   <span className='userUpdateTitle'>Edit</span>
                   <form className='userUpdateForm'>
                       <div className='userUpdateLeft'>
                           <div className='userUpdateItem'>
                            <label>Username</label>
                            <input type="text" placeholder='soniguy33' className='userUpdateInput'/>
                           </div>
                           <div className='userUpdateItem'>
                            <label>full Name</label>
                            <input type="text" placeholder='Abhishek Soni' className='userUpdateInput'/>
                           </div>
                           <div className='userUpdateItem'>
                            <label>Email</label>
                            <input type="email" placeholder='soniguy33@gmail.com' className='userUpdateInput'/>
                           </div>
                           <div className='userUpdateItem'>
                            <label>Phone</label>
                            <input type="text" placeholder='+91 7557235560' className='userUpdateInput'/>
                           </div>
                           <div className='userUpdateItem'>
                            <label>Address</label>
                            <input type="text" placeholder="FBD | Haryana" className='userUpdateInput'/>
                           </div>
                    

                       </div>
                       <div className='userUpdateRight'>
                          <div className='userUpdateUpload'>
                             <img src={myimg} alt="" className='userUpdateImg'/>
                             <label htmlFor='file'><Publish className='userUpdateIcon'/></label>
                             <input type='file' id='file' style={{display:"none"}} />
                          </div>
                          <button className='userUpdateButton'>Update</button>
                       </div>
                   </form>
             </div>
          </div>
    </div>
  )
}

export default User