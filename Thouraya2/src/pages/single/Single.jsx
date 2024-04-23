import React from 'react'
import Sidebar from "../../component/sidebar/Sidebar"
import {Navigate } from 'react-router-dom';

const Single = ({role}) => {
  return (
    <>
    {role =="admin" ? 
    <div className="home">
    <Sidebar/>

    <div className="homeContainer">
      single
    </div>
    </div>
    
    :role =="supervisor" ?  <Navigate to="/" replace /> : <Navigate to="/apparails" replace />

  }
      </>
  )
}

export default Single
