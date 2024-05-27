import React from "react";
import { NavLink } from "react-router-dom";

const PageLink = () => {
  return (
    <div className="pageLink">
      <div className="container">
        <div className="pageLink__wrapper">
          <NavLink to={"/"}>Home /</NavLink>
          <NavLink></NavLink>
        </div>
      </div>
    </div>
  );
};

export default PageLink;
