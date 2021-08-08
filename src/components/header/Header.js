import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <hr />
    </>
  );
};

export default Header;
