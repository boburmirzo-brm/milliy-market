import React, { memo } from "react";
import Detail from "../../components/detail/Detail";

const Detail = () => {
  return (
    <section className="detail">
      <div className="container">
        <Detail />
      </div>
    </section>
  );
};

export default memo(Detail);
