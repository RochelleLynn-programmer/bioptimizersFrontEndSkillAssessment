import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr></hr>
      <div>Footer</div>
      <NavLink to="/privacy">Privacy</NavLink>
    </>
  );
};

export default Footer;
