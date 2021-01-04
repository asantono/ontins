import React from "react";

const ServiceList = () => {
  // const goToForm = () => {
  //   document.getElementById("name").focus();
  // };

  return (
    <div className="save save--white">
      <div className="save__title">Our Services</div>
      <div className="save__subtext">
        We provide insurance options, service plans, and more
      </div>
      <ul className="save__grid">
        <li className="save__grid--item">Auto Insurance</li>
        <li className="save__grid--item">Home Insurance</li>
        <li className="save__grid--item">Commercial Insurance</li>
        <li className="save__grid--item">Life Insurance</li>
        <li className="save__grid--item">Critical Insurance</li>
        <li className="save__grid--item">Disability Insurance</li>
        <li className="save__grid--item">RESP & TFSA Insurance</li>
        <li className="save__grid--item">Travel Insurance</li>
        <li className="save__grid--item">Visitor Insurance</li>
        <li className="save__grid--item">Drug Plans</li>
        <li className="save__grid--item">Dental Plans</li>
        <li className="save__grid--item">Super Visa Insurance</li>
      </ul>
      {/* <div className="save__subtext--link" onClick={() => goToForm()}>
        Get a quote today and start saving
      </div> */}
    </div>
  );
};

export default ServiceList;
