import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left--logo">
          Ont
          <span className="header__left--logo header__left--logo--blue">
            ins
          </span>
        </div>
        <div className="header__left--logo--in">insurance</div>
      </div>
      <div className="header__right">
        <div className="header__right--section">
          <a className="header__right--phone" href="tel:519-601-6666">
            <div className="header__right--phone--icon">
              <AiOutlinePhone />
            </div>
            <div className="header__right--phone--number">519-601-6666</div>
          </a>
        </div>

        <div className="header__right--section">
          <a
            className="header__right--email"
            href="mailto:paulbrar69@ontins.com?cc=paulbrar69@gmail.com"
          >
            <div className="header__right--email--icon">
              <AiOutlineMail />
            </div>
            <div className="header__right--email--address">
              PaulBrar@ontins.com
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
