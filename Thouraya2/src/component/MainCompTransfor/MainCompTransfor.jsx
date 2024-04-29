import React from "react";
import "./MainCompTransfor.scss";
const MainCompTransfor = ({ data }) => {
  return (
    <div className="MainCompTransfor">
      <div className="contenuMaintr">
        <div className="row">
          <div className=" ml-2 blockOne col-md-5">
            <h1>Recouvrir</h1>
            <div className="oil standIcon">
              <img src="/images/oil.png" alt="" />
              <p>{data && data.tensionEntrée}°C</p>
            </div>
            <div className="temp standIcon">
              <img src="/images/temp.png" alt="" />
              <p>{data && data.tensionSortie} °C</p>
            </div>
            <div className="wirless standIcon">
              <img src="/images/wireless.png" alt="" />
              {data && data.courantSortie}
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-around align-items-center">
              <div >
                <h1>local transfo</h1>
                <img src="/images/immeuble.png" alt="" />
                {data && data.poids}

              </div>
              <div >
                <img src="/images/fusible.png" alt="" />
                {data && data.dateFabrication}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">

          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-around align-items-center">
              <div className="blockTwo">
                <img src="/images/compteurGris.png" alt="" />

                {data && data.puissance}

              </div>
              <div className="blockThree">
                <img src="/images/compteurGris.png" alt="" />
                {data && data.marque}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCompTransfor;
