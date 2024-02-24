import React from "react";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { RiEmotionHappyFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="psy-navbar">
      <div className="psy-navbar-logo">
        <RiEmotionHappyFill className="psy-navbar-logo__icon" />
        <h3>Be well</h3>
      </div>
      <div className="psy-navbar-sole">
        <h4>You are sole</h4>
      </div>
      <div className="psy-navbar-menu">
        <CiMenuBurger className="psy-navbar-menu__icon" />
      </div>
    </div>
  );
};

export default Navbar;
