import React from 'react'
import "./reglage.scss"
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'

const Reglage = () => {
  return (
    <div className='reglage'>
      <Sidebar />
      <div className="reglageContainer">
        <Navbar />
        <p>this is my reglage page</p>
      </div>
    </div>
  )
}

export default Reglage
