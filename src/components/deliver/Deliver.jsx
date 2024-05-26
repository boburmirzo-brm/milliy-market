import React from "react";
import delev1 from "../../assets/images/about/delev1.png";
import delev2 from "../../assets/images/about/delev2.png";
import delev3 from "../../assets/images/about/delev3.png";
let DELEV = [
  {
    id: 1,
    title: "BEPUL VA TEZ Etkazib berish",
    paragh: "$140 dan ortiq barcha buyurtmalar uchun bepul yetkazib berish",
    img: delev1,
  },
  {
    id: 2,
    title: "24/7 MIJOZLAR XIZMATLARI",
    paragh: "24/7 mijozlarni qo‘llab-quvvatlash xizmati",
    img: delev2,
  },
  {
    id: 3,
    title: "PUL QAYTARISH KAFOLATI",
    paragh: "Biz pulni 30 kun ichida qaytaramiz",
    img: delev3,
  },
];
const Deliver = () => {
  let delev = DELEV?.map((el) => (
    <div key={el.id} className="delevir__card">
      <img src={el.img} alt="" />
      <p className="delevir__title">{el.title}</p>
      <p>{el.paragh}</p>
    </div>
  ));
  return <div className="container deliver">{delev}</div>;
};

export default Deliver;
