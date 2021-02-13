import React from "react";

const RelationshipCard = (props) => {
  const { title, subtitle, text, icon, styling } = props;
  return (
    <div className={`relationship-card ${styling}`}>
      <div className="relationship-card__icon">{icon}</div>
      <div className="relationship-card__title">{title}</div>
      <div className="relationship-card__subtitle">{subtitle}</div>
      <div className="relationship-card__text">{text}</div>
    </div>
  );
};

export default RelationshipCard;
