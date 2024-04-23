import React from 'react'
import './home.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import Widget from '../../component/widgets/Widget'
import FeaturedChart from '../../component/featured/FeaturedChart'
import Chart from '../../component/chart/Chart'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="Users"/>
          <Widget type="Ingenieurs"/>
        </div>
        <div className="charts">
          <FeaturedChart />
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default Home
