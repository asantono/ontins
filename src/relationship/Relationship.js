import React from "react";
import RelationshipCard from "./RelationshipCard";
import { GiVibratingSmartphone } from "react-icons/gi";
import { FaRegHandshake, FaUmbrellaBeach } from "react-icons/fa";

const Relationship = () => {
  return (
    <div className="relationship">
      <div className="relationship__title">Putting You First</div>
      <div className="relationship__container">
        <RelationshipCard
          styling="relationship__card--1"
          title="SUPPORT"
          subtitle="Help When You Need It"
          text="A phone call away from professional insight with years of experience"
          icon={<GiVibratingSmartphone />}
        />
        <RelationshipCard
          styling="relationship__card--2"
          title="EXPERIENCE"
          subtitle="To ensure your goals are met"
          text="Using years of experience to create the right plan to assure satisfaction"
          icon={<FaRegHandshake />}
        />
        <RelationshipCard
          styling="relationship__card--3"
          title="LIFESTYLE"
          subtitle="Specialized to fit your needs"
          text="Bringing you products that are built for you and your individual needs"
          icon={<FaUmbrellaBeach />}
        />
      </div>
    </div>
  );
};

export default Relationship;
