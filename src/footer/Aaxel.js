import React from "react";
import logo from "../img/ax-logo-dark.JPG";
import logo2 from "../img/ax-logo-light.JPG";

const Aaxel = () => {
  return (
    <div className="aaxel">
      <div className="aaxel__addline aaxel__addline--name">
        Aaxel Insurance Brokers Ltd.
      </div>
      <div className="aaxel__addline">1332 Khalsa Drive, Unit 11</div>
      <div className="aaxel__addline">Mississauga, ON L5s 0A2</div>
      <div className="aaxel__addline">Office: 905-565-6644</div>
      <div className="aaxel__addline">Fax: 905-698-1235</div>
      <img className="aaxel__logo" src={logo2} alt="aaxel logo" />
    </div>
  );
};

export default Aaxel;
