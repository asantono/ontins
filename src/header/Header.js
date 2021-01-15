import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Logo />
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
          <a className="header__right--phone" href="tel:905-529-6666">
            <div className="header__right--phone--icon">
              <AiOutlinePhone />
            </div>
            <div className="header__right--phone--number">905-529-6666</div>
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
              paulBrar@ontins.com
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
