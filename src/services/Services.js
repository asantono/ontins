import React from "react";
import parmjit from "../img/parmjit.jpg";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Services = () => {
  return (
    <div className="services">
      <div className="services__title">Meet Your Broker</div>
      <div className="services__container">
        <div className="services__left">
          <div className="services__left--name">
            Parmjit Brar
            <div className="services__left--title">Insurance Broker</div>
          </div>
          <ul className="services__list">
            <li className="services__list--item">Auto</li>
            <li className="services__list--item">Home</li>
            <li className="services__list--item">Commercial</li>
            <li className="services__list--item">Life</li>
            <li className="services__list--item">Critical</li>
            <li className="services__list--item">Disability</li>
            <li className="services__list--item">RESP/TFSA</li>
            <li className="services__list--item">Travel</li>
          </ul>

          <div className="services__contact">
            <div className="header__right--section">
              <a
                className="header__right--phone services__neg-margin--bottom"
                href="tel:519-601-6666"
              >
                <div className="header__right--phone--icon services__neg-margin--right">
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
                <div className="header__right--email--icon services__neg-margin--right">
                  <AiOutlineMail />
                </div>
                <div className="header__right--email--address">
                  PaulBrar@ontins.com
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="services__right">
          <img
            className="services__right--circle"
            src={parmjit}
            alt="parmjit"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
