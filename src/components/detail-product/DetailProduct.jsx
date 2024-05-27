import React, { memo, useState } from "react";
import pr from "../../assets/images/detail/pr.png";
import rating from "../../assets/images/detail/rating.png";
import heart from "../../assets/images/detail/wishlist.png";
import kamaz from "../../assets/images/detail/kamaz.png";
import refresh from "../../assets/images/detail/refresh.png";
import { PRODUCTS } from "../../static";

const DetailProduct = () => {
  const [img, setImg] = useState(0);

  return (
    <>
      <div className="detail__wrapper">
        <div className="detail__left">
          <div className="detail__images">
            {PRODUCTS?.map((el) => (
              <img
                key={el.id}
                onClick={() => setImg(el.urls[0])}
                src={el.urls[0]}
                alt="product__image"
                className="detail__image"
              />
            ))}
          </div>
          <img
            src={img ? img : pr}
            alt="product__img"
            className="detail__img"
          />
        </div>
        <div className="detail__context">
          <h2 className="detail__title">Havic HV G-92 Gamepad</h2>
          <div className="detail__ratings">
            <img
              src={rating}
              alt="datail__reting"
              className="detail__ratings__img"
            />
            <p className="detail__reviews">(150 Reviews)</p>
            <p className="detail__stock">In Stock</p>
          </div>
          <p className="detail__price">$192.00</p>
          <p className="detail__text">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <div className="detail__hr"></div>
          <div className="detail__box">
            <div className="detail__card">
              <p className="detail__pm">-</p>
              <p className="detail__quantity">2</p>
              <p className="detail__pm">+</p>
            </div>
            <button className="detail__buy">Buy Now</button>
            <img src={heart} alt="heart" className="detail__heart" />
          </div>
          <div className="detail__bottom">
            <div className="detail__exam">
              <img src={kamaz} alt="kamaz" className="detail__exam__img" />
              <div className="detail__row">
                <p className="detail__row__title">Free Delivery</p>
                <p className="detail__row__text">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="detail__exam">
              <img src={refresh} alt="refresh" className="detail__exam__img" />
              <div className="detail__row">
                <p className="detail__row__title">Return Delivery</p>
                <p className="detail__row__text">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(DetailProduct);
