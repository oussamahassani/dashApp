import React, { useState, useEffect, useRef } from 'react';
import SideBar from "../../component/sidebar/Sidebar";

import StatusStatistics from "./Component/StatusStatisticComponent";
import CallStatisticsComponent from "./Component/CallStatisticsComponent"
import CallCenter from "./Component/call-center"
//import { socket } from './socket';
import { io } from 'socket.io-client';
export default function Statistics() {
  const [agents, setAgents] = useState([]);

  const [msg, setmsg] = useState(null);
  const [runder, setIsrender] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    const mysocket = io('ws://localhost:5000');

    socketRef.current = mysocket;

    mysocket.on('call center status', (msg) => {
      console.log('call center status');
      setmsg(msg)
      if (agents.length === 0) {
        setAgents(msg.agents);
      } msg.agents.forEach((newAgent) => {
        agents.forEach((agent, index) => {
          if (agent.id === newAgent.id && agent.status !== newAgent.status) {
            const updatedAgent = { ...agent, status: newAgent.status, statistics: newAgent.statistics, stateChangeTime: newAgent.stateChangeTime };
            setAgents((prevAgents) => [...prevAgents.slice(0, index), updatedAgent, ...prevAgents.slice(index + 1)]);
          }
        });
      });

      setIsrender(runder + 1);
    });

    mysocket.on('connect', () => {
      console.log('Socket.IO connection established');
    });

    mysocket.on('disconnect', () => {
      console.log('Socket.IO connection disconnected');
    });

    mysocket.on('error', (error) => {
      console.error('Socket.IO error:', error);
    });

    return () => {
      mysocket.disconnect();
    };
  }, []);



  useEffect(() => {

    // Set up an interval that increments the count every second
    const intervalId = setInterval(() => {

      socketRef.current.on('call center status', (msg) => {

        console.log('call center status');

        if (agents.length === 0) {
          setAgents(msg.agents);
        } msg.agents.forEach((newAgent) => {
          agents.forEach((agent, index) => {
            if (agent.id === newAgent.id && agent.status !== newAgent.status) {
              const updatedAgent = { ...agent, status: newAgent.status, statistics: newAgent.statistics, stateChangeTime: newAgent.stateChangeTime };
              setAgents((prevAgents) => [...prevAgents.slice(0, index), updatedAgent, ...prevAgents.slice(index + 1)]);
            }
          });
        });

        setIsrender(runder + 1);
      });
    }, 2000);

    // Return a cleanup function that clears the interval
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Run this effect only once, on mount



  console.log("render", runder)
  return (
    <div className='home'>
      <SideBar />

      <div className="homeContainer">

        <div className="container box-container mt-3" id="global-position">

          <div className='row mt-3'>
            <br />
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 mybox">

              <div className="box-head bb-red">
                DISTRIBUTION DES electrecité EN TEMPS RÉEL
              </div>
              <div className="box-body">

                {<StatusStatistics msg={msg} runder={runder} />}
              </div>
              <div className="box-foot"></div>

            </div>

            <div className="col-lg-7 col-md-7 col-sm-6 col-xs-5 mybox">

              <div className="box-head bb-orange">
                Local transofo
              </div>
              <div className="box-body">
                {<CallStatisticsComponent socket={socketRef.current} />}
              </div>
              <div className="box-foot"></div>

            </div>

          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mybox" id="callCenter">
            <div className="box-4">
              <div className="box-head">
                Dash (Real Time Supervisor)
                <span className="glyphicon glyphicon-resize-full pull-right" ng-click="vm.scrollTo('callCenter')"></span>
                <span className="glyphicon glyphicon glyphicon-resize-small pull-right" ng-click="vm.scrollTo('global-position')"></span>
              </div>
              <div className="box-body">
                {<CallCenter socket={socketRef.current} />}
              </div>
              <div className="box-foot"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );

}