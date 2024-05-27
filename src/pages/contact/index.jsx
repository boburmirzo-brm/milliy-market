import { Button } from "@mui/material";
import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { PatternFormat } from "react-number-format";
import { NavLink } from "react-router-dom";

const index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    console.log(name, phone, email, message);
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact__content__wrapper">
          <div className="contact__link">
            <NavLink to={"/"}>Home /</NavLink>
            <NavLink to={"/contact"}> Contact</NavLink>
          </div>
          <div className="contact__wrapper">
            <div className="contact__wrapper__left">
              <div className="contact__left__top">
                <div className="contact__left__top__title">
                  <div className="logo__wrapper">
                    <FiPhone />
                  </div>
                  <h5>Call To Us</h5>
                </div>
                <div className="contact__left__top__text">
                  <p>We are available 24/7, 7 days a week.</p>
                  <p>Phone: +8801611112222</p>
                </div>
              </div>
              <div className="line"></div>
              <div className="contact__left__top">
                <div className="contact__left__top__title">
                  <div className="logo__wrapper">
                    <MdOutlineEmail />
                  </div>
                  <h5>Write To US</h5>
                </div>
                <div className="contact__left__top__text">
                  <p>
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p>Emails: customer@exclusive.com</p>
                  <p>Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
            <div className="contact__wrapper__right">
              <form className="contact__form">
                <div className="contact__form__input__wrapper">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name *"
                    type="text"
                    className="contact__form__input"
                  />
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email *"
                    type="text"
                    className="contact__form__input"
                  />
                  <PatternFormat
                    value={phone}
                    onChange={() => setPhone(e.target.value)}
                    className="contact__form__input"
                    format="+998 (##) ### ## ##"
                    allowEmptyFormatting
                    mask="_"
                  />
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  name=""
                  id=""
                ></textarea>
                <div className="contact__form__btn">
                  <Button onClick={handleSend} variant="contained">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
