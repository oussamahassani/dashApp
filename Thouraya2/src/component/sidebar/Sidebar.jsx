import React, { useEffect, useState } from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MapIcon from '@mui/icons-material/Map';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryIcon from '@mui/icons-material/History';
import TimelineIcon from '@mui/icons-material/Timeline';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from '../../assets/oussama.jpg';
import { Link } from 'react-router-dom';
import { decodeJwt } from '../../utils/getToken'
const Sidebar = () => {
  const [role, setRole] = useState(null)
  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    if (token) {
      let data = decodeJwt(token);
      console.log("accessToken", data)
      setRole(data.role)
    }
    return () => {


    };

  }, []);

  return (
    <div className='sidebar'>
      <div className="top">
        <img src={Logo} alt="mabench" className='logo' />
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li><Link to="/" className='link'><DashboardIcon className='icon' /><span>Dashboard</span></Link></li>
          {role == 'supervisor' && <li><Link to="/historiquedonnees" className='link'><HistoryIcon className='icon' /><span>Historique donnees</span></Link></li>}
          {(role == 'supervisor' || role == 'admin') && <li><Link to="/stast" className='link'><TimelineIcon className='icon' /><span>Traking Data</span></Link></li>}

          <p className="title">List</p>
          {role == 'admin' && <li><Link to="/users" className='link'><PersonOutlineIcon className='icon' /><span>Users</span></Link></li>}
          {role == 'engineer' && <>
            <li><Link to="/zones" className='link'><MapIcon /><span>Zones</span></Link></li>
            <li><Link to="/apparails" className='link'><AppSettingsAltIcon className='icon' /><span>Apparails</span></Link></li>

            <li><Link to="/apparails/listeApparail" className='link'><AppSettingsAltIcon className='icon' /><span>Liste Apparails</span></Link></li>
            <li><Link to="/reglage" className='link'><DisplaySettingsIcon className='icon' /><span>Reglage</span></Link></li>
          </>}
          <p className="title" >User</p>
          <li><Link to="/profile" className='link'><AccountBoxIcon className='icon' /><span>Profile</span></Link></li>
          <li><Link to="/login" className='link'><LogoutIcon className='icon' /><span>Logout</span></Link></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
