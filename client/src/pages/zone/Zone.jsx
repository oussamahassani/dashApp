import React from 'react'
import './zone.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import FeaturedChart from '../../component/featured/FeaturedChart'
import Map from '../../component/map/Map'

const Zone = () => {
  return (
    <div className='zones'>
        <Sidebar />
      <div className="zoneContainer">
        <Navbar />
        <div className="compo">
        <div className="putData">
        <FeaturedChart />
        </div>
        <div className="afficheMap">

        <Map />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Zone
