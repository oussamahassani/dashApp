import React from "react";
import "./NavbarUser.scss";
const NavbarUser = () => {
  return (
    <div className="NavbarUser">
      <img src="\images\logoApp.png" alt="" width={"50px"} />
      <div className="partConf">
        <div className="conf desginForAllCards">
          <img src="\images\pinon.png" alt="" />
          <p>Configuration</p>
        </div>
        <div className="IHM desginForAllCards">
          <img src="\images\comp.png" alt="" width={"50px"} />
          <p>
            IHM - Vue <br /> Electrique
          </p>
        </div>
        <div className="alarm desginForAllCards">
          <img src="\images\alaram.png" alt="" />
          <p>Alarmes</p>
        </div>
        <div className="archive desginForAllCards">
          <img src="\images\archive.png" alt="" />
          <p>Archives</p>
        </div>
        <div className="power desginForAllCards last">
          <img src="\images\off.png" alt="" />
        </div>
      </div>
      <div className="posteHTB">
        <p>POSTE HTB/HTA</p>
      </div>
      <div className="time">
        <p>MARDI 06 FEVRIER 2024</p>
        <p> 21:11:20 </p>
      </div>
      <div className="language">
        <img src="\images\fr.png" alt="" />
        <div className="partLang">
          <span className="colorSpan">fr</span>
          <span>en</span>
        </div>
        <img src="\images\EN.png" alt="" />
      </div>
      <div className="userandnotif">
        <div className="searchNotif">
          <img src="\images\search.png" alt="" />
          <img src="\images\notification.png" alt="" />
        </div>
        <img src="\images\user.png" alt="" />
      </div>
    </div>
  );
};

export default NavbarUser;
