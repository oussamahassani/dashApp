import React from "react";
import "./PartieDisjoncteur.scss";
const PartieDisjoncteur = ({ data }) => {
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
                <span>{data && etat == "Etat Disjoncteur" && data.ETAT_DISJONCTEUR} </span>

                <span>{data && etat == "Etat Sectionneur" && data.ETAT_SECTIONNEUR} </span>
                <span>{data && etat == "Etat Fusible" && data.ETAT_FUSIBLE} </span>
                <span>{data && etat == "Etat Bouton A-U" && data.ETAT_BP_AU} </span>
              </div>
            </div>
          ))}
        </div>

        <div className="test">
          {etatsTwo.map((etat, index) => (
            <div className="part" key={index}>
              <p> {etat} </p>
              <div className="divSpan">
                <span>{data && etat == "Etat KM1" && data.ETAT_KM1}</span>
                <span>{data && etat == "Etat KM2" && data.ETAT_KM2}</span>
                <span>{data && etat == "Etat Relais TH" && data.ETAT_RELAIS}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartieDisjoncteur;
