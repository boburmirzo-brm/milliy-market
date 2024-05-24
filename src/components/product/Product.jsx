import React from "react";
import { PRODUCTS } from "../../static";
import { FaRegHeart, FaRegEye } from "react-icons/fa6";

const Product = () => {
  return (
    <>
      {PRODUCTS?.map((el) => (
        <div key={el.id} className="product__card">
          <div className="product__card-img">
            <img src={el.urls} alt="" />
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
      ))}
      {PRODUCTS?.map((el) => (
        <div key={el.id} className="product__card-res">
          <div className="product__card-res-img">
            <img src={el.urls} alt="" />
            <div className="product__card-res-img-hover">
              <FaRegHeart />
              <FaRegEye />
            </div>
            <button className="product__card-res-img-btn">Add To Cart</button>
          </div>
          <div className="product__card-res-info">
            <h2>{el.title}</h2>
            <div className="product__card-res-info-price">
              <p className="product__card-res-info-price-new">${el.price}</p>
              <p className="product__card-res-info-price-old">${el.oldPrice}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
