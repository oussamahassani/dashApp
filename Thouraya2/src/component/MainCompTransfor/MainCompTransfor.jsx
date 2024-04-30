import React from "react";
import "./MainCompTransfor.scss";
const MainCompTransfor = ({ data }) => {
  return (
    <div className="MainCompTransfor">
      <div className="contenuMaintr">
        <div className="row">
          <div className="blockOne col-md-4">
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
          <div className="col-md-8">
            <div className="d-flex justify-content-around align-items-center">
              <div className="blockbored">
                <div className="text-center">
                  <h1>Local transfo</h1>
                  <img src="/images/immeuble1.png" alt="" width={"250px"} />
                  {data && data.poids}
                </div>
              </div>
              <div className="blockbored">
                <div className="text-center">
                  <h1>Etat fusible Mt</h1>

                  <img src="/images/fusible.png" alt="" height={"250px"} />
                  {data && data.dateFabrication}
                </div>
              </div>
            </div>
            <div className=" mt-5 d-flex justify-content-around align-items-center">
              <div className="blockbored">
                <div className="text-center">
                  <h1>Bucchoix</h1>
                  <img src="/images/compteurGris.png" alt="" />

                  {data && data.puissance}
                </div>
              </div>
              <div className="text-center">
                <div className="blockbored">
                  <h1>Thermostart</h1>
                  <img src="/images/compteurGris.png" alt="" />
                  {data && data.marque}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainCompTransfor;
