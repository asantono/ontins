import React from "react";

const Save = () => {
  const goToForm = () => {
    document.getElementById("name").focus();
  };

  return (
    <div className="save">
      <div className="save__title">Save With Ontins</div>
      <div className="save__subtext">
        Ontins works to get you the best rates in SW Ontario with Bundles,
        Discounts, and More
      </div>
      <ul className="save__grid">
        <li className="save__grid--item">Multi-Vehicle Bundle</li>
        <li className="save__grid--item">Home & Auto Bundle</li>
        <li className="save__grid--item">Retiree Discounts</li>
        <li className="save__grid--item">Working Professional Discounts</li>
        <li className="save__grid--item">Small Business Discounts</li>
        <li className="save__grid--item">Truckers Discounts</li>
        <li className="save__grid--item">Safe Driver Discounts</li>
        <li className="save__grid--item">Graduate Discounts</li>
      </ul>
      <div className="save__subtext--link" onClick={() => goToForm()}>
        Get a quote today and start saving
      </div>
    </div>
  );
};

export default Save;
