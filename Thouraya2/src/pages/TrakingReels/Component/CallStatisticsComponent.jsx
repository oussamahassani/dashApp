import React, { useState, useEffect,useRef } from 'react';
//import { Bar } from 'react-chartjs-2';
//import 'chart.js/auto'; // ADD THIS
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { io } from 'socket.io-client';

function CallStatisticsComponent({socket}) {
  const [statistics, setStatistics] = useState({});
  const ref = useRef();

  const [data, setData] = useState({
    accepted: [],
    rejected: [],
  });


  useEffect(() => {
    function handleSocketMessage(msg) {
console.log("CallStatisticsComponent hadelkmessage" ,msg )
      const agents = [];
      const accepted = [];
      const rejected = [];
if(msg.statistics){
  console.log(" CallStatisticsComponent msg",msg)
  setStatistics(msg.statistics);

      msg.agents.forEach(function (element) {
        agents.push(element.name + ' (' + element.ext + ')');
        accepted.push({name:element.name  ,"ACCEPTED":element.statistics.by.calls.accepted});
        rejected.push({name:element.name  ,"REJECTED":element.statistics.by.calls.rejected});
      });
    }
   
      setData({ accepted, rejected });
    }
    const mysocket = io('ws://localhost:5000');

    ref.current = mysocket;
    mysocket.on('call center status', (msg) => {
    // add socket listener
 handleSocketMessage(msg)}
    )
    // remove socket listener on component unmount
    return () => {
      if(socket)
      socket.off('call center status', handleSocketMessage);
      
    };

  }, [statistics, data]);

  return (
    <div>
   

<div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data.accepted.concat(data.rejected)}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="REJECTED" stackId="a" fill="rgba(180,220,230,.7)" />
          <Bar dataKey="ACCEPTED" stackId="a" fill="rgba(240,240,240,.9)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}
export default CallStatisticsComponent;