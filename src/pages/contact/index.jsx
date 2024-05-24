import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { Button, TextField } from "@mui/material";
import lineimg from "../../assets/images/contact__images/line.png";

const Contact = () => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    console.log(name, email, number, message);
  };
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__wrapper__top">
            <NavLink to={"/"}>Home</NavLink> /{" "}
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
          <div className="contact__wrapper__bottom">
            <div className="contact__wrapper__bottom__left">
              <div className="contact__wrapper__bottom__left__top">
                <div className="titles__wrapper">
                  <div className="img__wrapper">
                    <FiPhone />
                  </div>
                  <p>Call To Us</p>
                </div>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
              </div>
              <img src={lineimg} alt="" />
              <div className="contact__wrapper__bottom__left__top contact__left__top">
                <div className="titles__wrapper">
                  <div className="img__wrapper">
                    <BsFillEnvelopeFill />
                  </div>
                  <p>Write To US</p>
                </div>
                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
            <div className="contact__wrapper__bottom__right">
              <div className="input__wrapper">
                <TextField
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="contact__input"
                  id="outlined-basic"
                  label="Your Name*"
                  variant="outlined"
                />
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="contact__input"
                  id="outlined-basic"
                  label="Your Email*"
                  variant="outlined"
                />
                <TextField
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  type="number"
                  className="contact__input"
                  id="outlined-basic"
                  label="Your Phone*"
                  variant="outlined"
                />
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                name=""
                id=""
              ></textarea>
              <NavLink className="contact__btn">
                <Button onClick={handleSubmit} variant="contained">
                  Send Message
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
