
import React, { useState, useEffect , useRef } from 'react';

import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { io } from 'socket.io-client';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function StatusStatistics({session}) {
  const ref = useRef();

  const [statistics, setStatistics] = useState({
    by: {
      status: {}
    }
  });

  const [data, setData] = useState([]);


  useEffect(() => {
    const mysocket = io('ws://localhost:5000');

    ref.current = mysocket;
    mysocket.on('call center status', (msg) => {
    {
        console.log("is connected")
   
      setStatistics(msg.statistics);
      setData([
        {name:"AVAILABLE" ,value : msg.statistics.by.status['AVAILABLE'] || 0},       
        {name:"NOT AVAILABLE" ,value:msg.statistics.by.status['NOT AVAILABLE'] || 0},
        {name:"TALKING" ,value:msg.statistics.by.status['TALKING'] || 0},
        {name:"AFTER WORK" ,value:msg.statistics.by.status['AFTER WORK'] || 0}
      ]);
   console.log("msg",msg)
    }
  })
    return () => {
        

      
    };
    
  }, [session]);

  const options = {
    cutoutPercentage: 100
  };

  const colors = ['#5bdf74', '#d94141', '#9242a2', '#dd8b2c'];
console.log("data",data)
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>

    <Grid container spacing={2}>
    <Grid item xs={4}>
                      <Card sx={{ maxWidth: 245 }}>
            <CardContent ><p>{statistics.by.status.TALKING}</p>
           <p>TALKING</p> </CardContent>
          </Card>
          </Grid>
        
          <Grid item xs={4}>
                      <Card sx={{ maxWidth: 245 }}>
            <CardContent ><p>{statistics.by.status['NOT AVAILABLE']}</p>
            <p>NOT AVAILABLE</p></CardContent>
            </Card>
          </Grid>

       
          <Grid item xs={4}>
                      <Card sx={{ maxWidth: 245 }}>
            <CardContent ><p>{statistics.by.status['AFTER WORK']}</p>
            <p>AFTER WORK </p></CardContent>
            </Card>
          </Grid>
 

          <Grid item xs={4}>
                      <Card sx={{ maxWidth: 245 }}>
            <CardContent ><p>{statistics.by.status.AVAILABLE}</p>
            <p>AVAILABLE </p></CardContent>
            </Card>
          </Grid>
 
        </Grid>
      </Box>
      <div className="col-lg-6">
  
      <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
      
      </div>
    </>
  );
}

export default StatusStatistics;
