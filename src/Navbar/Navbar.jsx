import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div >
      <div className="container indigo topLeftBorders">
        <img className="image" src={logo} height="100px" width="100px" />
        <div>
          <Link to="/">Home</Link>
          <a href="#about">About Us</a>
          <a href="#experience-section">Services</a>
          <a href="#pg-footer">Contact</a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
