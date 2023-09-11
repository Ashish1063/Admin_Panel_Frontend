import React from 'react'
import './navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ChatBubbleOutlineOutlined, DarkModeOutlined, LanguageOutlined, Search, SearchOffOutlined } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ListAltOutlined } from '@mui/icons-material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className=' NavBar'>
      <div className="wrapper">
      <div className="search">
        <input type="text" className="text" placeholder='Search...'/>
        <Search/>

      </div>
      <div className="items">
      {/* <div className="item">
        <LanguageOutlined className='icon'/>
     

      </div> */}
      {/* <div className="item">
        <MarkunreadIcon className='icon'/>
 
      </div> */}
      <div className="item">
       <Link to='/notification'> <NotificationsActiveIcon className='icon'/></Link>  
      </div>
      <div className="item">
       <Link to='/profile'>  < AccountCircleIcon className='icon'/></Link>
 
      </div>
      <div className="item">
       <Link to='/team'>  <GroupsIcon className='icon'/></Link> 
      </div>
      <div className="item">
        
      </div>
      

      </div>


       
    </div>
    </div>
  )
}

export default NavBar