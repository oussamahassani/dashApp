import React from 'react'
import './profile.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'

const Profile = () => {
  return (
    <div className='profile'>
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <p>this is my profile page</p>
      </div>
    </div>
  )
}

export default Profile
