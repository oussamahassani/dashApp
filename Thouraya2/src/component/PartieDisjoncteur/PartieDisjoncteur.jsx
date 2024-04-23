import React from "react";
import "./PartieDisjoncteur.scss";
const PartieDisjoncteur = () => {
  const etatsOne = [
    "Etat Disjoncteur",
    "Etat Sectionneur",
    "Etat Fusible",
    "Etat Bouton A-U",
  ];
  const etatsTwo = ["Etat Relais TH", "Etat KM1", "Etat KM2", "Etat KM3"];
  return (
    <div className="PartieDisjoncteur">
      <div className="allPartie">
        <div className="test">
          {etatsOne.map((etat, index) => (
            <div className="part" key={index}>
              <p> {etat} </p>
              <div className="divSpan">
                <span></span>
              </div>
            </div>
          ))}
        </div>

        <div className="test">
          {etatsTwo.map((etat, index) => (
            <div className="part" key={index}>
              <p> {etat} </p>
              <div className="divSpan">
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartieDisjoncteur;
