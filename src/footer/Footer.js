import React from "react";
import Logo from "../header/Logo";
import Aaxel from "./Aaxel";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="header__left footer__width">
          <Logo />
          <a className="footer__phone" href="tel:905-529-6666">
            <span className="footer__phone--left">direct:</span> 905-529-6666
          </a>
          <a className="footer__phone" href="tel:519-601-6666">
            <span className="footer__phone--left">cell:</span> 519-601-6666
          </a>
        </div>
        <div className="header__right">
          <Aaxel />
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__left">
          <div className="footer__left--copyright">
            Copyright &#169; 2020, Ontins. All right reserved
          </div>
          <div className="footer__left--site">Site by: Anthony Santonocito</div>
        </div>

        <div className="footer__right">right</div>
      </div>
    </div>
  );
};

export default Footer;
