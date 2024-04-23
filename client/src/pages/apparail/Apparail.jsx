import React from 'react'
import "./apparail.scss"
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import FeaturedChart from '../../component/featured/FeaturedChart'


const Apparail = () => {
  return (
    <div className='apparails'>
        <Sidebar />
        <div className="apparailContainer">
            <Navbar />
            <div className="charContainer">

            <FeaturedChart />
            <FeaturedChart />
            <FeaturedChart />
            </div>
            
        </div>
    </div>
  )
}

export default Apparail
