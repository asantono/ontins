import React, { useState } from "react";
import emailjs from "emailjs-com";
import ClipLoader from "react-spinners/ClipLoader";

const Contact = () => {
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

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

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const createEmail = {
      from_name: data.name,
      to_name: "Parmjit Brar",
      message: data.subject,
      phone: data.phone,
      reply_to: data.email,
    };
    let email;

    try {
      email = await emailjs.send(
        "service_ez47rf9",
        "template_nuehxq4",
        createEmail,
        "user_GRVphBnEZ7g8k4CzwiARd"
      );

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }

    if (email)
      setSuccess("Success! You will be contacted with your quote shortly.");
    else console.log("Error");
  };

  return (
    <div className="contact">
      <div className="services__title">Get a Quote Today</div>

      <div className="contact__form--success">{success}</div>
      <form className="contact__form--wrapper" onSubmit={sendEmail}>
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

        {loading ? (
          <div className="contact__form--loader">
            <ClipLoader color="blue" loading={loading} size={25} />
          </div>
        ) : (
          <input
            className="contact__form--button"
            type="submit"
            disabled={success}
          />
        )}
      </form>
    </div>
  );
};

export default Contact;
