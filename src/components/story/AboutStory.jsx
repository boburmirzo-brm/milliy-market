import React from "react";
import story from "../../assets/images/about/story.png";
const AboutStory = () => {
  return (
    <div className="container about__story">
      <div className="left">
        <p className="title">
          <b>Bizning Hikoya</b>
        </p>
        <p>
          2015-yilda ishga tushirilgan <b>Milliy Market</b> O'zbekistonning
          Toshkentda faol taqdimoti bo'lgan eng yirik onlayn xarid qilish
          joyidir. Keng ko'lamli moslashtirilgan marketing, ma'lumotlar va
          xizmat ko'rsatish echimlari bilan qo'llab-quvvatlanadigan{" "}
          <b>Milliy Market</b> 10 500 sotuvchi va 300 brendga ega va mintaqa
          bo'ylab 3 million mijozlarga xizmat ko'rsatadi.
        </p>
        <p>
          <b> Milliy Marketda</b> 1 milliondan ortiq mahsulotlar mavjud bo'lib,
          ular juda tez o'sib bormoqda. <b>Milliy Market</b> iste'molchidan
          tortib toifadagi turli assortimentni taklif etadi.
        </p>
      </div>
      <div className="right">
        <img src={story} alt="" />
      </div>
    </div>
  );
};

export default AboutStory;
