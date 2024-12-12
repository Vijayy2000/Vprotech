import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="container indigo topLeftBorders">
        <img src={logo} height="100px" width="100px" />
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/Serivese">Serivese</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
