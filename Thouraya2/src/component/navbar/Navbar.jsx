import React from 'react'
import './navbar.scss'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MessageIcon from '@mui/icons-material/Message';
import SegmentIcon from '@mui/icons-material/Segment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
         <ManageSearchIcon className='icon'/>
          <input type="text" placeholder='search here ...' />
        </div>
        <div className="items">
          <div className="item"><Brightness4Icon className='icon'/></div>
          <div className="item">
            <NotificationsActiveIcon className='icon'/>
              {/* <div className="counter">1</div> */}
          </div>
          <div className="item">
            <MessageIcon className='icon'/>
              {/* <div className="counter">1</div> */}
          </div>
          <div className="item"><SegmentIcon className='icon'/></div>
          <div className="item"><AccountCircleIcon className='icon'/></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
