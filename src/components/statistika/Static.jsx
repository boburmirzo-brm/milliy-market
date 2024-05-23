import React from "react";
import icon1 from "../../assets/images/about/icon1.png";
import icon2 from "../../assets/images/about/icon2.png";
import icon3 from "../../assets/images/about/icon3.png";
import icon4 from "../../assets/images/about/icon4.png";

const Static = () => {
  return (
    <div className="container static">
      <div className="st__card">
        <img src={icon1} alt="" />
        <p className="title">10.5k</p>
        <p>Sotuvchilar saytimizni faollashtirmoqda</p>
      </div>
      <div className="st__card st__card2">
        <img src={icon2} alt="" />
        <p className="title">33k</p>
        <p>Oylik mahsulot savdosi</p>
      </div>
      <div className="st__card">
        <img src={icon3} alt="" />
        <p className="title">45.5k</p>
        <p>Saytimizda faol mijoz</p>
      </div>
      <div className="st__card">
        <img src={icon4} alt="" />
        <p className="title">25k</p>
        <p>Bizning saytimizda yillik yalpi savdo</p>
      </div>
    </div>
  );
};

export default Static;
