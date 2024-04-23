import React,{useState} from 'react'
import './home.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import Widget from '../../component/widgets/Widget'
import FeaturedChart from '../../component/featured/FeaturedChart'
import Chart from '../../component/chart/Chart'
import LineChart from '../../component/chart/LineChart'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Navigate } from 'react-router-dom';

const Home = ({role}) => {
  const [statestique , setStatestique] = useState(14)
  console.log("myrole",role)
  return (
    <>
    { role =="supervisor" ? 
      <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Box sx={{ flexGrow: 1  , p: 2  , m:2}}>
        <Grid container spacing={2}>
        <Grid item xs={6} md={5}>
          <Widget titel={"Users Stat"} type="Users" sxx={6} statestique={statestique}/>
          </Grid>
          <Grid item xs={6} md={5}>
          <Widget titel={"Ingenieurs"} type="Ingenieurs" sxx={6} statestique={statestique}/>
          </Grid>
      </Grid>
        </Box>
        <div className="charts">
         <FeaturedChart /> 
          <Chart />
        </div>
        <div>
        <LineChart/>
        </div>
      </div>
    </div> : role =="admin" ?<Navigate to="/stast" replace /> : <Navigate to="/apparails" replace />}
    </>
  )
}

export default Home
