import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <NavLink to={"/"}>Home /</NavLink>
          <NavLink to={currentLink}> {crumb}</NavLink>
        </div>
      );
    });

  return (
    <div className="breadcrumbs">
      <div className="container">{crumbs}</div>
    </div>
  );
};

export default BreadCrumbs;
