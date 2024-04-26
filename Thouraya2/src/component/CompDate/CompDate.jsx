import React from "react";
import "./CompDate.scss";
const CompDate = () => {
  function formatDate() {
    const date = new Date();
    const day = date.getDate(); // Jour du mois (1-31)
    const month = date.getMonth() + 1; // Mois (0-11, donc +1 pour obtenir 1-12)
    const year = date.getFullYear(); // Année (ex. 2024)

    // Concaténer les composants de la date dans le format souhaité
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  }
  function formatTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0'); // Heures (00-23)
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Minutes (00-59)
    const seconds = String(date.getSeconds()).padStart(2, '0'); // Secondes (00-59)

    // Concaténer les composants d'heure dans le format souhaité
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
  }

  const formattedToday = formatDate();
  const formattedTimeNow = formatTime();

  return (
    <div className="datePart">
      <div >
        <h3>DATE</h3>
        <span>{formattedToday}</span>
      </div>
      <div >
        <h3>HEURE</h3>
        <span>{formattedTimeNow}</span>
      </div>
    </div>
  );
};

export default CompDate;