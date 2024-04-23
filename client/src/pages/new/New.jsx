import React from 'react'
import './new.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'

const New = () => {
  return (
    <div className='addUser'>
      <Sidebar />
      <div className="userContainer">
      <Navbar />
      new user page
      </div>
    </div>
  )
}

export default New
