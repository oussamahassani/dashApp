import React, { useState, useEffect } from 'react';
import './home.scss';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import Widget from '../../component/widgets/Widget';
import FeaturedChart from '../../component/featured/FeaturedChart';
import Chart from '../../component/chart/Chart';
import LineChart from '../../component/chart/LineChart';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Navigate } from 'react-router-dom';
import { decodeJwt } from '../../utils/getToken';

const Home = () => {
  const [statestique, setStatestique] = useState(14);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const data = decodeJwt(token);
        if (data && data.role) {
          console.log('Decoded token:', data);
          setRole(data.role);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []); // Empty dependency array means this effect runs once on component mount

  // Render based on role state
  return  (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <Box sx={{ flexGrow: 1, p: 2, m: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={5}>
              <Widget title={'Users Stat'} type='Users' sxx={6} statestique={statestique} />
            </Grid>
            <Grid item xs={6} md={5}>
              <Widget title={'Ingenieurs'} type='Ingenieurs' sxx={6} statestique={statestique} />
            </Grid>
          </Grid>
        </Box>
        <div className='charts'>
          <FeaturedChart />
          <Chart />
        </div>
        <div>
          <LineChart />
        </div>
      </div>
    </div>
  
  );
};

export default Home;
