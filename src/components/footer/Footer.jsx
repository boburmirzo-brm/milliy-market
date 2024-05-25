import React, { memo, useState } from "react";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import qr from "../../assets/images/Qrcode.png";
import app1 from "../../assets/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import app2 from "../../assets/images/download-appstore.png";

const Footer = () => {
  const sections = [
    {
      title: "Support",
      links: [
        "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
        "exclusive@gmail.com",
        "+88015-88888-9999",
      ],
    },
    {
      title: "Account",
      links: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
    },
    {
      title: "Quick Link",
      links: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
    },
  ];
  const [openSections, setOpenSections] = useState(
    new Array(sections.length).fill(false)
  );

  const toggleLinks = (index) => {
    setOpenSections((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__item">
              <p className="title">Exclusive</p>
              <p className="subtitle">Subscribe</p>
              <p>Get 10% off your first order</p>
              <div className="send">
                <input type="text" placeholder="Enter your email" />
                <FaTelegramPlane />
              </div>
            </div>
            <div className="footer__item">
              <p className="title">Support</p>
              <p>
                111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
              </p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
            <div className="footer__item">
              <p className="title">Account</p>
              <ul>
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </div>
            <div className="footer__item">
              <p className="title">Quick Link</p>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer__item">
              <p className="title">Download App</p>
              <p>Save $3 with App New User Only</p>
              <div className="images">
                <img src={qr} alt="qr-code" />
                <div className="apps">
                  <img src={app1} alt="app" />
                  <img src={app2} alt="app" />
                </div>
              </div>
              <div className="icons">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer__response">
        {sections.map((section, index) => {
          const linkStyle = {
            display: openSections[index] ? "block" : "none",
            transition: "opacity 0.3s ease-in-out",
          };

          const buttonStyle = {
            transform: openSections[index] ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          };

          return (
            <div className="footer__items" key={index}>
              <div className="footer__navigation">
                <p>{section.title}</p>
                <button onClick={() => toggleLinks(index)} style={buttonStyle}>
                  <AiOutlinePlus />
                </button>
              </div>
              <ul className="footer__links" style={linkStyle}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.split("\n").map((text, i) => (
                      <React.Fragment key={i}>
                        {text}
                        <br />
                      </React.Fragment>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <div className="footer__items app">
          <p className="title">Download App</p>
          <p>Save $3 with App New User Only</p>
          <div className="images">
            <img src={qr} alt="qr-code" />
            <div className="apps">
              <img src={app1} alt="app" />
              <img src={app2} alt="app" />
            </div>
          </div>
          <div className="icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="copyright">
        <br />
        <hr />
        <br />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </>
  );
};

export default memo(Footer);
