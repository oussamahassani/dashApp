import React from "react";
import "./apparail.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import FeaturedChart from "../../component/featured/FeaturedChart";
import PartieOfThouriya from "../PartieOfThouriya/PartieOfThouriya";
import {Navigate } from 'react-router-dom';

const Apparail = ({role}) => {

  return (
    <>
    { role =="engineer" ? 
    <div className="apparails">
      <Sidebar />
      <div className="apparailContainer">
        <Navbar />
        <div className="charContainer">
          {/* delete this part and add my code */}
          <PartieOfThouriya />
          {/* end of delete */}
        </div>
      </div>
    </div>
 : role =="admin" ?<Navigate to="/stast" replace /> : <Navigate to="/" replace />}
  </>
  );
};

export default Apparail;
