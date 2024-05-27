import React from "react";
import Product from "./Product";

const ProductWrapper = ({ data }) => {
  return (
    <>
    <div className="product__wrapper container">
      {
        data?.map(el => (
          <Product key={el.id} el={el} />
        ))
      }
    </div>
    
      </>
  );
};

export default ProductWrapper;
