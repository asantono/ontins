import React from "react";
import { GiVibratingSmartphone } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";

const RelationshipCard = (props) => {
  const { title, subtitle, text, icon } = props;
  return (
    <div className="relationship-card">
      <div className="relationship-card__icon">{icon}</div>
      <div className="relationship-card__title">{title}</div>
      <div className="relationship-card__subtitle">{subtitle}</div>
      <div className="relationship-card__text">{text}</div>
    </div>
  );
};

export default RelationshipCard;
