import React from "react";
import Product from "./Product";

const ProductWrapper = ({ data }) => {
  return (
    <div className="product__wrapper container">
      <Product />
    </div>
  );
};

export default ProductWrapper;
