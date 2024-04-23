import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import {Navigate } from 'react-router-dom';

export default function HistoriqueDonne({role}) {
  return (
    <>
    { role =="supervisor" ? 
    <div className='home'>
    <Sidebar />
    <div className="homeContainer">
    <div>HistoriqueDonne</div>
   </div> 
   </div>
  : role =="admin" ?<Navigate to="/stast" replace /> : <Navigate to="/apparails" replace />}
  </>
  )
}
