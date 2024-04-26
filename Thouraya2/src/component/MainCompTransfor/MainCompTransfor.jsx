import React from "react";
import "./MainCompTransfor.scss";
const MainCompTransfor = ({data}) => {
  return (
    <div className="MainCompTransfor">
      <div className="contenuMain">
        <div className="blockOne">
          <h1>Recouvrir</h1>
          <div className="oil standIcon">
            <img src="/images/oil.png" alt="" />
            <p>{data.tensionEntree}°C</p>
          </div>
          <div className="temp standIcon">
            <img src="/images/temp.png" alt="" />
            <p>{data.tensionSortie} °C</p>
          </div>
          <div className="wirless standIcon">
            <img src="/images/wireless.png" alt="" />
            {data.courantSortie}
          </div>
        </div>
        <div>
        <div className="blockTwo">
          <h1>local transfo</h1>
          <img src="/images/immeuble.png" alt="" />
          {data.poids}

        </div>
        <div className="blockTwo">
          <h1>Centra de mesure</h1>
          <img src="/images/fusible.png" alt="" />
          {data.puissance}

        </div>
        </div>
        <div>
        <div className="blockTwo">
          <h1>local transfo</h1>
          <img src="/images/compteurGris.png" alt="" />
        </div>
        <div className="blockThree">
          <h1>Centra de mesure</h1>
          <img src="/images/compteurGris.png" alt="" />

        </div>
        </div>
      </div>
    </div>
  );
};

export default MainCompTransfor;
