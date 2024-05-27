import React, { memo } from "react";
import DetailProduct from "../../components/detail-product/DetailProduct";

const Detail = () => {
  return (
    <section className="detail">
      <div className="container">
        <DetailProduct />
      </div>
    </section>
  );
};

export default memo(Detail);
