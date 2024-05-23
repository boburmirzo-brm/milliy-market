import React, { memo } from "react";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import qr from "../../assets/images/Qrcode.png";
import app1 from "../../assets/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import app2 from "../../assets/images/download-appstore.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="wrapper">
          <p className="title">Exclusive</p>
          <p className="subtitle">Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="send">
            <input type="text" placeholder="Enter your email" />
            <FaTelegramPlane />
          </div>
        </div>
        <div className="wrapper">
          <p className="title">Support</p>
          <p>
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="wrapper">
          <p className="title">Account</p>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="wrapper">
          <p className="title">Quick Link</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="wrapper">
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
      </footer>
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
