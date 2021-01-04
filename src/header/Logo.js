import React, { Fragment } from "react";

const Logo = () => {
  return (
    <Fragment>
      <div className="header__left--logo">
        Ont
        <span className="header__left--logo header__left--logo--blue">ins</span>
      </div>
      <div className="header__left--logo--in">insurance</div>
      <div className="header__left--logo--services">
        serv
        <span className="header__left--logo--services header__left--logo--services--blue">
          ices
        </span>
      </div>
    </Fragment>
  );
};

export default Logo;
