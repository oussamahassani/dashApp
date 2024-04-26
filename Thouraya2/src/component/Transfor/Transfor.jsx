import React from "react";
import NavBarTransfor from "../NavBarTransfor/NavBarTransfor";
import NavbarUser from "../NavbarUser/NavbarUser";
import MainCompTransfor from "../MainCompTransfor/MainCompTransfor";

const Transfor = ({data}) => {

  return (
    <div>
      <NavBarTransfor />
      <NavbarUser />
      <MainCompTransfor data={data}/>
    </div>
  );
};

export default Transfor;