import React from "react";
import creator1 from "../../assets/images/about/creator1.png";
import creator2 from "../../assets/images/about/creator2.png";
import creator3 from "../../assets/images/about/creator3.png";
import { CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";

let CREATORS = [
  {
    id: 1,
    name: "Tom Cruise",
    job: "Asoschisi va Raisi",
    img: creator1,
  },
  {
    id: 2,
    name: "Emma Watson",
    job: "Boshqaruvchi direktor",
    img: creator2,
  },
  {
    id: 3,
    name: "Will Smith",
    job: "Mahsulot dizayneri",
    img: creator3,
  },
];
const Creators = () => {
  let creator = CREATORS?.map((el) => (
    <div key={el.id} className="creator__card">
      <img src={el.img} alt="" />
      <p className="name">
        <b>{el.name}</b>
      </p>
      <p>{el.job}</p>
      <div className="icons">
        <CiTwitter className="icon" />
        <CiInstagram className="icon" />
        <CiLinkedin className="icon" />
      </div>
    </div>
  ));
  return <div className="container creators">{creator}</div>;
};

export default Creators;
