import React, { useState } from "react";
import API from "../util/API";
import emailjs from "emailjs-com";

const Contact = () => {
  const [success, setSuccess] = useState();
  // "Success! You will be contacted with your quote shortly."

  const [data, setData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
  });

  const updateData = (e) => {
    console.log(e.target.name);
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(data);
    // const url = "/sendmail";
    // const body = data;
    // const options = { headers: { "Content-Type": "application/json" } };
    // try {
    //   let res = await API.post(url, body, options);
    //   console.log(res);
    // } catch (err) {
    //   console.log(err.message);
    // }
  };
  return (
    <div className="contact">
      <div className="services__title">Get a Quote Today</div>

      <div className="contact__form--success">{success}</div>
      <form className="contact__form--wrapper" onSubmit={(e) => submitForm(e)}>
        <div className="contact__form">
          <div className="contact__form--group">
            <label className="contact__form--label" htmlFor="name">
              Name:
            </label>
            <input
              className="contact__form--input"
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              onChange={(e) => updateData(e)}
            />
          </div>

          <div className="contact__form--group">
            <label className="contact__form--label" htmlFor="subject">
              Subject:
            </label>
            <input
              className="contact__form--input"
              id="subject"
              name="subject"
              type="text"
              placeholder="Car Insurance"
              onChange={(e) => updateData(e)}
            />
          </div>

          <div className="contact__form--group">
            <label
              className="contact__form--label"
              htmlFor="email"
              name="email"
            >
              Email:
            </label>
            <input
              className="contact__form--input"
              id="email"
              name="email"
              type="email"
              placeholder="Paul@example.com"
              onChange={(e) => updateData(e)}
            />
          </div>

          <div className="contact__form--group">
            <label className="contact__form--label" htmlFor="phone">
              Phone:
            </label>
            <input
              className="contact__form--input"
              id="phone"
              name="phone"
              type="number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              onChange={(e) => updateData(e)}
            />
          </div>
        </div>

        <input className="contact__form--button" type="submit" />
      </form>
    </div>
  );
};

export default Contact;
