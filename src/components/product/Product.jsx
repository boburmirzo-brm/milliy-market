import React from "react";
import { FaRegHeart, FaRegEye } from "react-icons/fa6";

const Product = ({el}) => {
  return (
    <>
        <div key={el.id} className="product__card">
          <div className="product__card-img">
            <img src={el.urls[0]} alt="" />
            <div className="product__card-img-hover">
              <FaRegHeart />
              <FaRegEye />
            </div>
            <button className="product__card-img-btn">Add To Cart</button>
          </div>
          <div className="product__card-info">
            <h2>{el.title}</h2>
            <div className="product__card-info-price">
              <p className="product__card-info-price-new">${el.price}</p>
              <p className="product__card-info-price-old">${el.oldPrice}</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default Product;
