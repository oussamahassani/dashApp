import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
 // make sure to install toaster module separately
 import Card from '@mui/material/Card';
 import CardActions from '@mui/material/CardActions';
 import CardContent from '@mui/material/CardContent';
 import CardMedia from '@mui/material/CardMedia';
 import Button from '@mui/material/Button';
 import Grid from '@mui/material/Grid';
 import Box from '@mui/material/Box';

 import Typography from '@mui/material/Typography';function CallCenter({socket}) {
  const [agents, setAgents] = useState([]);
  const [criteria, setCriteria] = useState('');

  useEffect(() => {
 console.log('ff',socket)

  }, [agents ,socket]);

  useEffect(() => {
    if(socket)
    socket.on('call center status', (msg) => {
      if (agents.length === 0) {
        setAgents(msg.agents);
      }

      msg.agents.forEach((newAgent) => {
        agents.forEach((agent, index) => {
          if (agent.id === newAgent.id && agent.status !== newAgent.status) {
            const updatedAgent = {...agent, status: newAgent.status, statistics: newAgent.statistics, stateChangeTime: newAgent.stateChangeTime };
            setAgents((prevAgents) => [...prevAgents.slice(0, index), updatedAgent, ...prevAgents.slice(index + 1)]);
          }
        });
      });

      if (msg.alerts.length > 0) {
        showAlerts(msg.alerts);
      }
    });
  })

  function showAlerts(alerts) {
    alerts.forEach((entry) => {
      alert('warning', 'Alerta', entry, 3000);
    });
  }

  function toggleAllAgentsView() {
    const updatedAgents = agents.map((agent) => toggleView(agent));
    setAgents(updatedAgents);
  }

  function toggleView(agent) {
    let updatedAgent = null;
    if (agent.viewMode >= 2) {
      updatedAgent = {...agent, viewMode: 0};
    } else {
      updatedAgent = {...agent, viewMode: agent.viewMode + 1};
    }
    return updatedAgent;
  }

  function getCssStatus(agent) {
    let cssStatus = {
      statusBl: 'bl-green',
      statusBg: 'status-available'
    };

    if (agent.status === 'AVAILABLE') {
      cssStatus = { statusBl: 'bl-green', statusBg: 'status-available' };
    } else if (agent.status === 'TALKING') {
      cssStatus = { statusBl: 'bl-violeta', statusBg: 'status-talking' };
    } else if (agent.status === 'NOT AVAILABLE') {
      cssStatus = { statusBl: 'bl-red', statusBg: 'status-not-available' };
    } else if (agent.status === 'AFTER WORK') {
      cssStatus = { statusBl: 'bl-orange', statusBg: 'status-after-work' };
    }

    return cssStatus;
  }

  function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  }



  const filteredAgents = agents.filter((agent) => {
    if (criteria === '' || criteria.length < 3) {
      return true;
    }

    return agent.status.toLowerCase().includes(criteria.toLowerCase())
      || agent.agent.toLowerCase().includes(criteria.toLowerCase())
      || agent.name.toLowerCase().includes(criteria.toLowerCase());
  });

console.log("agent", agents)
console.log("criteria", criteria)
console.log("agent filter", agents
.filter(
  (agent) =>
    agent.status.toLowerCase().includes(criteria.toLowerCase()) ||
    agent.name.toLowerCase().includes(criteria.toLowerCase())
))
        return (
                <div className="box-4">
               
                  <input type="text" value="mon value" onChange={()=>console.log("ddd")} />
                  <div className="tools">
                  <input
                        type="search"
                        id="search"
                        placeholder="Filter by status, agent..."
                        //value={criteria}
                        onChange={(e) => {
                          console.log( e.target.value) ;setCriteria(e.target.value)}}
                        className="col-lg-12"
                      />
                    <div className="container-1 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                   
                    
                      <button onClick={() =>(filteredAgents)}>Recherche USER</button>
                    </div>
                    <button
                      className="btn btn-info btn-sm float-lg-righ tool"
                      onClick={toggleAllAgentsView}
                    >
                      Refreche Data
                    </button>
                  </div>
                  <Box sx={{ flexGrow: 1 }}>

                  <Grid container spacing={2}>

                  {agents
                    .filter(
                      (agent) =>
                        agent.status.toLowerCase().includes(criteria.toLowerCase()) ||
                        agent.name.toLowerCase().includes(criteria.toLowerCase())
                    )
                    .map((agent) => (
                      <Grid item xs={4}>
                      <Card sx={{ maxWidth: 345 }}  className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 box-user ${getCssStatus(
                        agent
                      ).statusBl}`}
                      onClick={() => toggleView(agent)}
                      key={agent.agent}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/images/immeuble.png"
                        className={getCssStatus(agent).statusBg}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        <label>Name</label>: {agent.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <div className={`status ${getCssStatus(agent).statusBg}`} />
                       
                          
                          <div className="agent-data" style={{ display: agent.viewMode === 0 ? "block" : "none" }}>
                            <div>
                              <label>Ext</label>: {agent.agent}
                            </div>
                            <div>
                              <label>Status</label>: {agent.status}
                            </div>
                            <div>
                              <label>Last change</label>: {agent.stateChangeTime}
                            </div>
                          </div>
                          <div className="agent-data" style={{ display: agent.viewMode === 1 ? "block" : "none" }}>
                            <div>
                          
                             </div>
                             </div>
                        </Typography>
                      </CardContent>
                      <CardActions>
                      <label>Teams</label>:{" "}
                              <span>
                                {agent.teams.map((team, index) => (
                                  <React.Fragment key={index}>
                                    {team}
                                    {index === agent.teams.length - 1 ? "" : ", "}
                                  </React.Fragment>
                                ))}
                              </span>
                      </CardActions>
                    </Card>
                     </Grid>
                      
                    ))
                                }
                                </Grid>
                                </Box>
                                </div>
        )

                            }

export default CallCenter