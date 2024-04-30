import React from "react";
import CompDate from "../CompDate/CompDate";

const ETATSGENERAL = ({ title }) => {
  return (
    <div className="SectionOne">
      <h1> {title} </h1>
      <div>
        <CompDate />

        <div className="datePart">
          <img src="/images/armoir2.png" height={"650px"} />

        </div>
      </div>
    </div>
  );
};

export default ETATSGENERAL;
