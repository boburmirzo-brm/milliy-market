import React from "react";
import { AiOutlineShop, AiOutlineDollar } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { FaSackDollar } from "react-icons/fa6";

const Static = () => {
  return (
    <div className="container statistika">
      <div className="statistika__card">
        <AiOutlineShop className="statistika__icon" />
        <p className="statistika__title">10.5k</p>
        <p>Sotuvchilar saytimizni faollashtirmoqda</p>
      </div>
      <div className="statistika__card">
        <AiOutlineDollar className="statistika__icon" />
        <p className="statistika__title">33k</p>
        <p>Oylik mahsulot savdosi</p>
      </div>
      <div className="statistika__card">
        <FiShoppingBag className="statistika__icon" />
        <p className="statistika__title">45.5k</p>
        <p>Saytimizda faol mijoz</p>
      </div>
      <div className="statistika__card">
        <FaSackDollar className="statistika__icon" />
        <p className="statistika__title">25k</p>
        <p>Bizning saytimizda yillik yalpi savdo</p>
      </div>
    </div>
  );
};

export default Static;
